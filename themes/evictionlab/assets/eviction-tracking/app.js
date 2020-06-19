"use strict";

var Elab = Elab || {};

/**
 * UTILS MODULE
 * ---
 * Utility functions used throughout reports app
 */

Elab.Utils = (function (Elab) {
  /**
   * Turns a string into a URL friendly string
   */
  function slugify(string) {
    var a =
      "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    var b =
      "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    var p = new RegExp(a.split("").join("|"), "g");

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, function (c) {
        return b.charAt(a.indexOf(c));
      }) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }

  /**
   * Get the URL to the current page
   */
  function getCurrentURL() {
    return (
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname
    );
  }

  /**
   * Returns the value of a CSS variable
   * @param {*} varName
   */
  function getCssVar(varName) {
    return getComputedStyle(document.body).getPropertyValue(varName);
  }

  /**
   * Creates a tweet intent link with the provided element
   * @param {*} el `a` tag DOM element
   * @param {*} text text to prepopulate tweed
   * @param {*} via account to refer to in tweet
   */
  function createTwitterLink(el, text, via) {
    var url = Elab.Utils.getCurrentURL();
    var params = [];
    if (text) params.push("text=" + encodeURIComponent(text));
    if (via) params.push("via=" + encodeURIComponent(via));
    params.push("url=" + encodeURIComponent(url));
    $(el).attr("href", "https://twitter.com/intent/tweet?" + params.join("&"));
    $(el).attr("target", "_blank");
  }

  /**
   * Create a facebook share intent link with provided element
   * @param {*} el `a` tag DOM element
   */
  function createFacebookLink(el) {
    var url = Elab.Utils.getCurrentURL();
    $(el).attr(
      "href",
      "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url)
    );
    $(el).attr("target", "_blank");
  }

  /**
   * Takes column name and returns an HTML string label
   * @param {*} id
   */
  var formatLabel = function formatLabel(id) {
    switch (id) {
      case "avg_filings":
        return "Average Filings";
      case "month_filings":
        return "Filings This Year";
      case "percentage_diff":
        return "Filings This Year <br /><span>relative to average</span>";
      case "Other":
        return "Other/None";
      default:
        return id;
    }
  };

  var formatDate = d3.timeFormat("%B %e");

  return {
    getCssVar: getCssVar,
    getCurrentURL: getCurrentURL,
    slugify: slugify,
    createTwitterLink: createTwitterLink,
    createFacebookLink: createFacebookLink,
    formatLabel: formatLabel,
    formatDate: formatDate,
  };
})(Elab);

/**
 * CONFIG MODULE
 * ---
 * Used to create and retrieve chart configs
 *
 * Public
 *  - createConfig(ChartConfig): ChartConfig,
 *  - getConfig(id, dataUrl): ChartConfig
 */

Elab.Config = (function (Elab) {
  /**
   * Function to parse month strings and make them for
   * the current year
   */
  var monthParser = function monthParser(d) {
    d = d + " 2020"; // TODO: don't hardcode 2020
    var parser = d3.timeParse("%B %Y");
    return parser(d);
  };

  /**
   * Pads the X extent to cover all months
   */
  var xPadExtent = function xPadExtent(extent) {
    return [d3.timeMonth.floor(extent[0]), d3.timeMonth.ceil(extent[1])];
  };

  /**
   * Pads the extent by a % value provided
   * @param {[number, number]} extent
   * @param {number} padding (percent to pad)
   * @returns {[number, number]} [min, max]
   */
  var yPadExtent = function yPadExtent(extent) {
    var padding = 0.05;
    var range = extent[1] - extent[0];
    var pad = padding * range;
    return [extent[0], extent[1] + pad];
  };

  /**
   * Helper function for creating configs
   * @param {*} config
   */
  function createConfig(config) {
    var BASE_CONFIG = {
      legend: ".legend",
      parse: {
        x: monthParser,
        y: parseFloat,
        area: d3.timeParse("%d/%m/%Y"),
      },
      format: {
        x: d3.timeFormat("%b"),
        y: d3.format(",d"),
        xTooltip: d3.timeFormat("%B"),
        yTooltip: d3.format(",d"),
        area: d3.timeFormat("%d/%m/%Y"),
        label: Elab.Utils.formatLabel,
      },
      view: {
        type: "bar",
        xTicks: d3.timeMonth.every(1),
        yTicks: 5,
      },
      extent: {
        xPad: xPadExtent,
        yPad: yPadExtent,
        min: {
          y: [0, 1.1],
        },
      },
    };
    return deepmerge(BASE_CONFIG, config);
  }

  var CHART_1_CONFIG = createConfig({
    groupType: "col",
    id: "filings",
    content: [
      {
        selector: ".visual__title",
        text: "Monthly Eviction Filings",
      }
    ],
    markLines: [],
    data: {
      x: "month",
      y: {
        cols: ["avg_filings", "month_filings"],
      },
      extra: ["month_last_day"],
    },
  });

  var CHART_1A_CONFIG = createConfig({
    groupType: "col",
    id: "avg",
    content: [
      {
        selector: ".visual__title",
        text: "Monthly Eviction Filings Relative To Average",
      },
    ],
    markLines: [{ y: 1, label: "average" }, { y: 1, label: "filings", labelOnly:true }],
    data: {
      x: "month",
      y: {
        cols: ["percentage_diff"],
      },
      extra: ["month_last_day"],
    },
    format: {
      y: d3.format(",.0%"),
      xTooltip: d3.timeFormat("%B %Y"),
      yTooltip: d3.format(",.0%"),
      tooltip: function tooltip(d) {
        var distance = d._raw.y - 1;
        var value = Math.abs(distance);
        var dir = distance === 0 ? "mid" : distance > 0 ? "up" : "down";
        if (dir === "mid") {
          return "Filings about average.";
        }
        return (
          '<div class="tooltip__item tooltip__item--single tooltip__item--' +
          dir +
          '">' +
          "Filings&nbsp;<span>" +
          dir +
          " " +
          d3.format(",.0%")(value) +
          "</span>&nbsp;from average" +
          (d._raw.extras["month_last_day"]
            ? ", <br />as of " + d._raw.extras["month_last_day"]
            : "") +
          ".</div>"
        );
      },
    },
  });

  var CHART_2_CONFIG = createConfig({
    groupType: "row",
    id: "avg",
    content: [
      {
        selector: ".visual__title",
        text:
          "Filings Relative to Average, by Neighborhood Racial/Ethnic Majority",
      },
    ],
    markLines: [{ y: 1, label: "average" }, { y: 1, label: "filings", labelOnly:true }],
    data: {
      x: "month",
      y: {
        groupBy: "group",
        col: "month_diff",
      },
      extra: ["month_last_day"],
    },
    format: {
      y: d3.format(",.0%"),
      xTooltip: d3.timeFormat("%B %Y"),
      yTooltip: d3.format(",.0%"),
      tooltip: function tooltip(d) {
        var distance = d._raw.y - 1;
        var value = Math.abs(distance);
        var dir = distance === 0 ? "mid" : distance > 0 ? "up" : "down";
        var str =
          dir === "mid" ? "average" : d3.format(",.0%")(Math.abs(distance));

        return (
          '<div class="tooltip__item tooltip__item--multi">' +
          "<span>" +
          d.name +
          ":</span> " +
          "<span>" +
          d.value +
          "</span>" +
          '(<span class="arrow ' +
          dir +
          '">' +
          str +
          "</span>)" +
          "</div>"
        );
      },
    },
  });

  var CHART_2A_CONFIG = createConfig({
    groupType: "row",
    id: "filings",
    content: [
      {
        selector: ".visual__title",
        text: "Filings by Neighborhood Racial/Ethnic Majority",
      }
    ],
    markLines: [],
    data: {
      x: "month",
      y: {
        groupBy: "group",
        col: "month_filings",
      },
      extra: ["month_last_day", "avg_filings"],
    },
    format: {
      tooltip: function tooltip(d) {
        var distance = d._raw.y - d._raw.extras["avg_filings"];
        var value = Math.abs(distance);
        var dir = distance === 0 ? "mid" : distance > 0 ? "up" : "down";
        var str =
          dir === "mid" ? "average" : d3.format(",d")(Math.abs(distance));

        return (
          '<div class="tooltip__item tooltip__item--multi">' +
          "<span>" +
          d.name +
          ":</span> " +
          "<span>" +
          d.value +
          "</span>" +
          '(<span class="arrow ' +
          dir +
          '">' +
          str +
          "</span>)" +
          "</div>"
        );
      },
    },
    parse: {
      avg_filings: parseFloat,
    },
  });

  var CONFIGS = {
    avg: [CHART_1A_CONFIG, CHART_1_CONFIG],
    race: [CHART_2A_CONFIG, CHART_2_CONFIG],
  };

  /** Getter for configs */
  function getConfig(id, dataUrl) {
    if (CONFIGS.hasOwnProperty(id))
      return CONFIGS[id].map(function (config) {
        config["rootId"] = id;
        config["url"] = dataUrl;
        return config;
      });
    throw new Error("No chart config for " + id);
  }

  return {
    createConfig: createConfig,
    getConfig: getConfig,
  };
})(Elab);

/**
 * CHARTS MODULE
 * ---
 * Public
 *  - createChart(): Chart
 */

Elab.Chart = (function (Elab) {
  /**
   * Pulls the extent of the selector from a collection
   * of DataItem objects
   * @param {Array<DataItem>} collection
   * @param {function} selector
   * @returns {Array} [min, max]
   */
  function getExtentForCollection(collection, selector) {
    return collection.reduce(
      function (extent, item) {
        var itemExtent = d3.extent(item.data, selector);
        return [
          Math.min(itemExtent[0], extent[0]),
          Math.max(itemExtent[1], extent[1]),
        ];
      },
      [Number.MAX_VALUE, -Number.MAX_VALUE]
    );
  }

  /**
   * Populates a parse config with any defaults
   * @param {ChartConfig} config
   * @returns {ChartConfig}
   */
  function makeParseConfig(config) {
    config = config || {};
    config.extent = config.extent || {};
    config.extent.xPad =
      config.extent.xPad ||
      function (x) {
        return x;
      };
    config.extent.yPad =
      config.extent.yPad ||
      function (y) {
        return y;
      };
    return config;
  }

  /**
   * Gets the area to mark (x start to x end)
   * @param {*} data
   * @param {ChartConfig} config
   */
  function parseArea(data, config) {
    return [
      config.parse.area(data[0][config.data.area[0]]),
      config.parse.area(data[0][config.data.area[1]]),
    ];
  }

  /**
   * Parses csv data where group data is organized by column
   * @param {*} data
   * @param {ChartConfig} config
   */
  function parseColumnItems(data, config) {
    return config.data.y.cols.map(function (col, i) {
      return {
        id: col,
        idx: i,
        name: config.format.label(col),
        data: data.map(function (d, i) {
          return {
            // add x, y pair
            x: config.parse.x(d[config.data.x]),
            y: config.parse.y(d[col]),
            // add extra columns to data
            extras: config.data.extra.reduce(function (obj, colName) {
              obj[colName] = config.parse[colName]
                ? config.parse[colName](d[colName])
                : d[colName];
              return obj;
            }, {}),
          };
        }),
      };
    });
  }

  /**
   * Parses csv data where group data is organized by row
   * @param {*} data
   * @param {ChartConfig} config
   */
  function parseRowItems(data, config) {
    var groupCol = config.data.y.groupBy;
    var dataByGroup = data.reduce(function (result, row) {
      if (!result.hasOwnProperty(row[groupCol])) result[row[groupCol]] = [];
      result[row[groupCol]].push({
        x: config.parse.x(row[config.data.x]),
        y: config.parse.y(row[config.data.y.col]),
        // add extra columns to data
        extras: config.data.extra.reduce(function (obj, colName) {
          obj[colName] = config.parse[colName]
            ? config.parse[colName](row[colName])
            : row[colName];
          return obj;
        }, {}),
      });
      return result;
    }, {});
    return Object.keys(dataByGroup).map(function (key, i) {
      return {
        id: key,
        idx: i,
        name: config.format.label(key),
        data: dataByGroup[key],
      };
    });
  }

  /**
   * Parse DataItems and pull the x and y extents
   * @param {*} items
   * @param {ChartConfig} config
   */
  function parseExtents(items, config) {
    // calculate x and y [min, max] pairs
    var xExtent = getExtentForCollection(items, function (d) {
      return d.x;
    });
    var yExtent = getExtentForCollection(items, function (d) {
      return d.y;
    });
    // x and y [min, max], padded based on config value
    var padded = {
      x: config.extent.xPad(xExtent),
      y: config.extent.yPad(yExtent),
    };
    if (config.extent.min.x) {
      padded.x = [
        Math.min(padded.x[0], config.extent.min.x[0]),
        Math.max(padded.x[1], config.extent.min.x[1]),
      ];
    }
    if (config.extent.min.y) {
      padded.y = [
        Math.min(padded.y[0], config.extent.min.y[0]),
        Math.max(padded.y[1], config.extent.min.y[1]),
      ];
    }
    return [padded.x, padded.y];
  }

  /**
   * Parses data based on the provided config
   * @param {*} data json to parse
   * @param {ChartConfig} config parse configuration
   * @returns {ChartData}
   */
  function parseData(data, config) {
    var result = { _raw: data };
    // process config, add default values
    config = makeParseConfig(config);
    // grab data points for each of the groups
    var itemParser =
      config.groupType === "col" ? parseColumnItems : parseRowItems;
    result["items"] = itemParser(data, config);
    // x and y [min, max], padded based on config value
    result["extents"] = parseExtents(result["items"], config);
    // parse the area to mark
    if (config.data.area) {
      result["area"] = parseArea(data, config);
      result["markArea"] = [
        result["area"][0],
        d3.min([result["extents"][0][1], result["area"][1]]), // clip mark area
      ];
    }
    return result;
  }

  /**
   * Groups items by a given selector
   * @param {Array<DataItem>} items
   * @param {function} selector returns an item value to group by
   * @returns {GroupItems}
   */
  function groupItems(items, selector) {
    var xValues = items.reduce(function (values, item, i) {
      item.data.forEach(function (d) {
        var value = selector(d);
        if (values.indexOf(value) === -1) values.push(value);
      });
      return values;
    }, []);
    return xValues.map(function (value) {
      return {
        id: value,
        data: items.map(function (item, i) {
          return {
            id: item.id,
            idx: item.idx || i,
            value: item.data.find(function (d) {
              return selector(d) === value;
            }),
          };
        }),
      };
    });
  }

  function updatePartialFilingsDate(rootEl, data) {
    const rawLastDay = data['_raw'][data['_raw'].length-1]['month_last_day']
    if (!rawLastDay) return;
    const parseDate = d3.timeParse("%d/%m/%Y")
    const lastDay = parseDate(rawLastDay)
    const value = "Partial monthly filings as of " + d3.timeFormat("%B %e")(lastDay) + ", relative to average for same period"
  
    const partialEl = rootEl.find('.visual__note');
    partialEl.html(value)
  }

  function Chart(source, root, config) {
    // options
    config = config || {};
    var margin = config.margin || { top: 32, right: 52, bottom: 72, left: 40 };
    var parsedData;
    var elements;
    var chartConfig;

    function getHoverItem(item, i) {
      return {
        idx: i,
        name: chartConfig.format.label(item.id),
        value: chartConfig.format.yTooltip(item.value.y),
        _raw: item.value,
      };
    }

    /**
     * Scaffolds all of the required elements to render the chart
     * @param {DOMElement} el root element
     */
    function initElements(el) {
      return {
        root: el,
        area: el.append("rect").attr("class", "chart__area"),

        yAxis: el.append("g").attr("class", "chart__axis chart__axis--y"),
        xAxis: el.append("g").attr("class", "chart__axis chart__axis--x"),
        markLines: el.append("g").attr("class", "chart__mark-lines"),
        data: el.append("g").attr("class", "chart__data"),
        frame: el.append("rect").attr("class", "chart__box"),
        hoverLine: el.append("line").attr("class", "chart__marker-line"),
        hoverArea: el.append("rect"),
        tooltip: d3.select("#tooltip").attr("class", "chart__tooltip"),
      };
    }

    function renderBarTooltip(title, items, context, render) {
      render =
        render ||
        function (d) {
          return (
            '<div class="tooltip__item tooltip__item--multi">' +
            "<span>" +
            d.name +
            ":</span> " +
            d.value +
            "</div>"
          );
        };
      var xFlipped = d3.event.pageX > window.innerWidth - 320;
      var yFlipped = d3.event.clientY > window.innerHeight - 140;
      var space = 32;
      context.els.tooltip
        .attr("class", "chart__tooltip")
        .attr(
          "style",
          "transform: translate(" +
            (xFlipped ? "-100%" : "0") +
            ", " +
            (yFlipped ? "-100%" : "0") +
            ")"
        )
        .html("<h1>" + title + "</h1>")
        .style("display", "block")
        .style("left", d3.event.pageX + (xFlipped ? -1 : 1) * space + "px")
        .style("top", d3.event.pageY + (yFlipped ? -1 : 1) * space + "px")
        .selectAll()
        .data(items)
        .enter()
        .append("div")
        .attr("class", function (d) {
          return "chart__tooltip-row chart__tooltip-row--" + d.idx;
        })
        .html(render);
    }

    /**
     * Renders the tooltip and hoverline
     * @param {*} items
     * @param {*} els
     * @param {*} event
     */
    function renderHoverLine(position, context) {
      context.els.hoverLine
        .attr("class", "chart__marker-line chart__marker-line--hover")
        .attr("style", "transform: translateX(" + position + "px)")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", context.height);
    }

    function renderBars(data, config, context) {
      // get data grouped by x value
      var groupedData = groupItems(data.items, function (d) {
        return d.x.getMonth();
      });
      var groupNames = data.items.map(function (d) {
        return d.id;
      });

      var x1 = d3
        .scaleBand()
        .domain(groupNames)
        .rangeRound([0, context.x.bandwidth()]);

      var group = context.els.data
        .selectAll(".chart__bar-group")
        .data(groupedData);

      // enter each group
      var groupEls = group
        .enter()
        .append("g")
        .attr("class", "chart__bar-group")
        // .on("mousemove", function (d) {
        //   var title = chartConfig.format.xTooltip(d.data[0].value.x);
        //   var items = d.data.map(getHoverItem);
        //   renderBarTooltip(title, items, context, chartConfig.format.tooltip);
        // })
        // .on("mouseout", function () {
        //   if (context.els.tooltip) context.els.tooltip.style("display", "none");
        // })
        .merge(group)
        .attr("transform", function (d) {
          return "translate(" + context.x(new Date(2020, d.id, 1)) + ",0)";
        });

      var groupAreaSelection = context.els.data
        .selectAll(".chart__bar-area")
        .data(groupedData)

      var groupAreas = groupAreaSelection
        .enter()
        .append('rect')
        .attr("fill", "transparent")
        .attr("class", "chart__bar-area")
        .on("mousemove", function (d) {
          var title = chartConfig.format.xTooltip(d.data[0].value.x);
          var items = d.data.map(getHoverItem);
          renderBarTooltip(title, items, context, chartConfig.format.tooltip);
        })
        .on("mouseout", function () {
          if (context.els.tooltip) context.els.tooltip.style("display", "none");
        })
        .merge(groupAreaSelection)
        .attr("x", function (d, i) { return context.x(new Date(2020, d.id, 1)) - 4})
        .attr("y", 0)
        .attr("height", context.height)
        .attr("width", context.x.bandwidth() + 8);


      var groupBars = groupEls.selectAll("rect").data(function (d) {
        return d.data;
      });

      groupBars
        .enter()
        .append("rect") // add bars for new groups
        .attr("class", function (d, i) {
          return "chart__bar chart__bar--" + d.idx;
        })
        .attr("width", x1.bandwidth())
        .attr("x", function (d) {
          return x1(d.id);
        })
        .attr("y", function (d) {
          return context.y(0);
        })
        .attr("height", function (d) {
          return context.height - context.y(0);
        })
        .merge(groupBars) // merge existing bars for update
        .transition()
        .delay(function (d, i) {
          return i * 100;
        })
        .duration(1000)
        .attr("width", x1.bandwidth())
        .attr("x", function (d) {
          return x1(d.id);
        })
        .attr("y", function (d) {
          return context.y(d.value.y);
        })
        .attr("height", function (d) {
          return context.height - context.y(d.value.y);
        });

      // remove bars groups
      groupBars
        .exit()
        .transition()
        .duration(1000)
        .attr("width", 0)
        .attr("x", function (d) {
          return x1.bandwidth();
        })
        .attr("y", function (d) {
          return context.y(0);
        })
        .attr("height", function (d) {
          return context.height - context.y(0);
        })
        .remove();

      var groupDots = groupEls.selectAll("circle").data(function (d) {
        return config.dots ? d.data : [];
      });

      groupDots
        .enter()
        .append("circle") // add bars for new groups
        .attr("class", function (d, i) {
          return "chart__dot chart__dot--" + i;
        })
        .attr("r", 0)
        .attr("cx", function (d) {
          return x1(d.id) + x1.bandwidth() / 2;
        })
        .attr("cy", function (d) {
          return context.y(0);
        })
        .merge(groupBars) // merge existing bars for update
        .transition()
        .delay(function (d, i) {
          return i * 100;
        })
        .duration(1000)
        .attr("r", 4)
        .attr("cx", function (d) {
          return x1(d.id) + x1.bandwidth() / 2;
        })
        .attr("cy", function (d) {
          return context.y(d.value.extras[config.dots]);
        });

      // remove dots
      groupDots
        .exit()
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("cx", function (d) {
          return x1(d.id) + x1.bandwidth() / 2;
        })
        .attr("cy", function (d) {
          return context.y(0);
        })
        .remove();


      var groupDots = groupEls.selectAll("circle").data(function (d) {
        return config.dots ? d.data : [];
      });

      groupDots
        .enter()
        .append("circle") // add bars for new groups
        .attr("class", function (d, i) {
          return "chart__dot chart__dot--" + i;
        })
        .attr("r", 0)
        .attr("cx", function (d) {
          return x1(d.id) + x1.bandwidth() / 2;
        })
        .attr("cy", function (d) {
          return context.y(0);
        })
        .merge(groupBars) // merge existing bars for update
        .transition()
        .delay(function (d, i) {
          return i * 100;
        })
        .duration(1000)
        .attr("r", 4)
        .attr("cx", function (d) {
          return x1(d.id) + x1.bandwidth() / 2;
        })
        .attr("cy", function (d) {
          return context.y(d.value.extras[config.dots]);
        });

      // remove dots
      groupDots
        .exit()
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("cx", function (d) {
          return x1(d.id) + x1.bandwidth() / 2;
        })
        .attr("cy", function (d) {
          return context.y(0);
        })
        .remove();

      group.exit().remove();
    }

    /**
     * Renders lines for the data
     * @param {*} data
     * @param {*} config
     * @param {*} context
     */
    function renderLines(data, config, context) {
      // setup line generation function
      var line = d3
        .line()
        .x(function (d) {
          return context.x(d.x);
        })
        .y(function (d) {
          return context.y(d.y);
        });

      // lines
      var lines = context.els.data.selectAll(".chart__line").data(data.items);

      lines
        .enter()
        .append("path")
        .attr("class", function (d, i) {
          return "chart__line chart__line--" + d.idx;
        })
        .merge(lines)
        .datum(function (d) {
          return d.data;
        })
        .transition()
        .duration(1000)
        .attr("d", line);
    }

    /**
     * Renders the x and y axis
     * @param {*} data
     * @param {*} config
     * @param {*} context
     */
    function renderAxis(data, config, context) {
      // setup x axis
      var xAxis = d3
        .axisBottom(context.x)
        .ticks(config.view.xTicks)
        .tickFormat(config.format.x);

      // setup y axis
      var yAxis = d3
        .axisLeft(context.y)
        .ticks(config.view.yTicks)
        .tickSize(-context.width)
        .tickFormat(config.format.y);

      // y axis
      context.els.yAxis.transition().duration(1000).call(yAxis);

      // x axis
      context.els.xAxis
        .attr("transform", "translate(0," + context.height + ")")
        .transition()
        .duration(1000)
        .call(xAxis);
    }

    /**
     * Renders the mark lines
     * @param {*} data
     * @param {*} config
     * @param {*} context
     */
    function renderAreaLines(data, config, context) {
      // setup mark line data
      var markLineData = [];
      if (
        data.area[0] > context.xExtent[0] &&
        data.area[0] < context.xExtent[1]
      )
        markLineData.push({
          point: data.area[0],
          lines: ["start of", "moratorium"],
        });
      if (
        data.area[1] > context.xExtent[0] &&
        data.area[1] < context.xExtent[1]
      )
        markLineData.push({
          point: data.areaEnd,
          lines: ["end of", "moratorium"],
        });

      // moratorium lines
      var markLine = context.els.markLines
        .selectAll(".chart__mark-line")
        .data(markLineData);
      markLine
        .enter()
        .append("line")
        .attr("class", "chart__mark-line")
        .merge(markLine)
        .attr("x1", function (d) {
          return context.x(d.point);
        })
        .attr("x2", function (d) {
          return context.x(d.point);
        })
        .attr("y1", 0)
        .attr("y2", context.height + 32);

      // moratorium labels
      var markLabel = context.els.markLines
        .selectAll(".chart__mark-label")
        .data(markLineData);
      markLabel
        .enter()
        .append("text")
        .attr("class", "chart__mark-label")
        .merge(markLabel)
        .html(function (d) {
          return d.lines
            .map(function (l, i) {
              return (
                '<tspan text-anchor="middle" dx="0" dy="' +
                i * 16 +
                '">' +
                l +
                "</tspan>"
              );
            })
            .join("");
        })
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("x", function (d) {
          return context.x(d.point);
        })
        .attr("y", context.height + 44);
    }

    function renderMarkLine(data, config, context) {
      // y axis mark lines
      var markLine = context.els.markLines
        .selectAll(".chart__mark-line--y")
        .data(config.markLines.filter(v => v.labelOnly));

      markLine
        .enter()
        .append("line")
        .attr("class", "chart__mark-line--y")
        .attr("x1", function (d) {
          return 0;
        })
        .attr("x2", function (d) {
          return context.width;
        })
        .attr("y1", context.height)
        .attr("y2", context.height)
        .merge(markLine)
        .transition()
        .duration(1000)
        .attr("x1", function (d) {
          return 0;
        })
        .attr("x2", function (d) {
          return context.width;
        })
        .attr("y1", function (d) {
          return context.y(d.y);
        })
        .attr("y2", function (d) {
          return context.y(d.y);
        });

      markLine
        .exit()
        .transition()
        .duration(1000)
        .attr("y1", context.height)
        .attr("y2", context.height)
        .remove();

      var markLabel = context.els.markLines
        .selectAll(".chart__mark-label--y")
        .data(config.markLines);

      markLabel
        .enter()
        .append("text")
        .attr("class", "chart__mark-label--y")
        .html(function (d) {
          return d.label;
        })
        .attr("x", function (d) {
          return context.width+ 4;
        })
        .attr("y", function (d) {
          return context.height - 4;
        })
        .attr("fill-opacity", 0)
        .merge(markLabel)
        .transition()
        .duration(1000)
        .attr("text-anchor", "start")
        .attr("x", function (d) {
          return context.width + 4;
        })
        .attr("y", function (d, i) {
          return context.y(d.y) - 4 + (i*16);
        })
        .attr("fill-opacity", 1);

      markLabel
        .exit()
        .transition()
        .duration(1000)
        .attr("x", function (d) {
          return context.width - 4;
        })
        .attr("y", function (d) {
          return context.height - 4;
        })
        .attr("fill-opacity", 0)
        .remove();
    }

    /**
     * Renders the mark area
     * @param {*} data
     * @param {*} config
     * @param {*} context
     */
    function renderMarkArea(data, config, context) {
      // moratorium area rect
      context.els.area
        .attr("x", context.x(data.markArea[0]))
        .attr("y", 0)
        .attr(
          "width",
          context.x(data.markArea[1]) - context.x(data.markArea[0])
        )
        .attr("height", context.height);
    }

    /**
     * Renders the outline of the chart
     * @param {*} data
     * @param {*} config
     * @param {*} context
     */
    function renderFrame(data, config, context) {
      // bounding rect border
      context.els.frame
        .attr("x", -1)
        .attr("y", 0)
        .attr("width", context.width + 1)
        .attr("height", context.height + 1);
    }

    /**
     * Renders the hover area and add event handlers for tooltip
     * @param {*} data
     * @param {*} config
     * @param {*} context
     */
    function renderHoverArea(data, config, context) {
      var bisectX = d3.bisector(function (d) {
        return d.x;
      }).right;

      var handleHover = function handleHover() {
        var xHovered = context.x.invert(
          d3.mouse(context.els.hoverArea.node())[0]
        );
        var set1 = data.items[0].data;
        var dataIndex = bisectX(set1, xHovered);
        var xNext = set1[dataIndex].x;
        var xPrev = set1[dataIndex - 1].x;
        var xSnapped =
          Math.abs(xHovered.getTime() - xPrev.getTime()) >
          Math.abs(xHovered.getTime() - xNext.getTime())
            ? xNext
            : xPrev;
        var xIndex = xSnapped === xNext ? dataIndex : dataIndex - 1;
        var title = config.format.xTooltip(xSnapped);
        // transform items into structure for tooltip
        var items = data.items
          .map(function (d, i) {
            return {
              idx: d.idx,
              name: d.name,
              value: config.format.yTooltip(d.data[xIndex].y),
              _raw: d.data[xIndex].y,
            };
          })
          .sort(function (a, b) {
            return b.value - a.value;
          });
        var position = context.x(xSnapped);
        renderHoverLine(position, conext);
        renderBarTooltip(title, items, context, config.format.tooltip);
      };

      var handleHoverOut = function handleHoverOut() {
        if (context.els.tooltip) context.els.tooltip.style("display", "none");
        if (context.els.hoverLine)
          context.els.hoverLine.attr("class", "chart__marker-line");
      };

      context.els.hoverArea
        .attr("width", context.width)
        .attr("height", context.height)
        .attr("opacity", 0)
        .on("mousemove", handleHover)
        .on("mouseout", handleHoverOut);
    }

    function renderContentUpdates(content, config) {
      content.forEach(function (item) {
        var el = document.querySelector(
          "#" + config.rootId + " " + item.selector
        );
        if (!el)
          throw new Error("no element found for selector: " + item.selector);
        el.innerHTML = item.text;
      });
    }

    function renderLegend(selector, items, config) {
      var LegendItem = function LegendItem(item) {
        return (
          '<div class="legend-item legend-item--' +
          item.idx +
          '">' +
          '<div class="legend-item__color"></div>' +
          '<div class="legend-item__label">' +
          item.name +
          "</div>" +
          "</div>"
        );
      };
      var el = document.querySelector("#" + config.rootId + " " + selector);
      if (!el)
        throw new Error("no element found for selector: " + item.selector);
      el.innerHTML = items
        .map(function (item) {
          return LegendItem(item);
        })
        .join("");
    }

    /**
     * Render the full graph
     * @param {*} data
     * @param {*} els
     */
    function renderGraph(data, els, config) {
      // get parent width and height
      var rect = els.root.node().parentNode.getBoundingClientRect();

      // position the root
      els.root.attr(
        "transform",
        "translate(" + margin.left + "," + margin.top + ")"
      );

      // account for margins
      var width = rect.width - margin.left - margin.right;
      var height = rect.height - margin.top - margin.bottom;

      // extents
      var xExtent = data.extents[0];
      var yExtent = data.extents[1];

      var xBands = d3.timeMonth.range(
        d3.timeMonth.floor(xExtent[0]),
        d3.timeMonth.floor(d3.timeMonth.offset(xExtent[1], 1)),
        1
      );

      var xTimeScale = d3.scaleTime().rangeRound([0, width]).domain(xExtent);
      var xBandScale = d3
        .scaleBand()
        .rangeRound([0, width])
        .padding(0.5)
        .domain(xBands);

      // setup scales
      var x = config.view.type === "line" ? xTimeScale : xBandScale;
      var y =
        config.view.type === "line"
          ? d3.scaleLinear().rangeRound([height, 0]).domain(yExtent)
          : d3.scaleLinear().rangeRound([height, 0]).domain([0, yExtent[1]]);

      // context passed to render functions
      var context = {
        els: els,
        width: width,
        height: height,
        x: x,
        y: y,
        xExtent: xExtent,
        yExtent: yExtent,
      };

      renderAxis(data, config, context);
      config.data.markArea && renderMarkArea(data, config, context);
      config.data.markArea && renderAreaLines(data, config, context);
      config.view.type === "line" && renderLines(data, config, context);
      config.view.type === "bar" && renderBars(data, config, context);
      config.markLines && renderMarkLine(data, config, context);
      config.view.type === "line" && renderHoverArea(data, config, context);
      renderFrame(data, config, context);
      config.content && renderContentUpdates(config.content, config);
      config.legend && renderLegend(config.legend, data.items, config);
    }

    /**
     * Re-renders the chart with the existing configuration
     * and data.
     */
    function render() {
      renderGraph(parsedData, elements, chartConfig);
    }

    /**
     * Updates the chart's configuration
     * @param {*} newConfig
     */
    function update(newConfig) {
      if (!elements) elements = initElements(root);
      if (newConfig) chartConfig = newConfig;
      parsedData = parseData(source, chartConfig);
      render();
    }

    update(config);

    // trigger re-render after a second to make sure size is right
    setTimeout(function () {
      render();
    }, 1000);

    return {
      root: root,
      render: render,
      update: update,
      data: parsedData
    };
  }

  /**
   *
   * @param {*} elementId id of the section root
   * @param {*} config the chart config
   */
  function createChart(elementId, config, callback) {
    // Load the data and draw a chart
    d3.csv(config.url, function (data) {
      if (!data) {
        if (callback) callback(null, "error loading data");
        console.error("unable to load chart data from " + config.url);
        d3.select(elementId)
          .attr("style", "border: 2px solid #f00")
          .append("text")
          .attr("x", 24)
          .attr("y", 32)
          .attr("style", "font-size: 16px")
          .attr("fill", "#f00")
          .html("unable to load data for chart");
        return;
      }
      var root;
      root = d3.select(elementId).append("g");

      // create chart
      var chart = Chart(data, root, config);

      // resize the chart when the window size changes
      window.addEventListener("resize", function () {
        chart.render();
      });

      

      // send chart to callback
      if (callback) callback(chart);
    });
  }

  function init(rootEl, config) {
    var rootEl = $(rootEl);
    var chartEl = rootEl.find(".chart")[0];

    // add button to toggle state
    var countToggleEl = rootEl.find('.toggle--count');
    var avgToggleEl = rootEl.find('.toggle--avg');

    if (config.id === 'avg')
      avgToggleEl.addClass('toggle--active')
    
    if (config.id === 'race')
      countToggleEl.addClass('toggle--active')

    // move footnotes into proper container
    var contentEl = rootEl.find(".details");
    var footnoteEl = rootEl.find(".footnote");
    footnoteEl.append(contentEl.find("ol"));

    // setup default chart config
    var configs = Elab.Config.getConfig(config.id, config.csv);
    var currentConfig = configs[0];

    // create chart and bind click event to toggle state
    createChart(chartEl, currentConfig, function (chart) {
      countToggleEl.on("click", function () {
        currentConfig = config.id === 'race' ? configs[0] : configs[1];
        countToggleEl.addClass('toggle--active')
        avgToggleEl.removeClass('toggle--active')
        chart.update(currentConfig);
      });
      avgToggleEl.on("click", function () {
        currentConfig = config.id === 'race' ? configs[1] : configs[0];
        avgToggleEl.addClass('toggle--active')
        countToggleEl.removeClass('toggle--active')
        chart.update(currentConfig);
      });

      updatePartialFilingsDate(rootEl, chart.data)
    });
  }

  return {
    init: init,
    createChart: createChart,
  };
})(Elab);

/**
 * MAPS MODULE
 * ---
 * Public
 *  - createMap(): Map
 */

Elab.Map = (function (Elab) {
  // grab element for tooltip
  var tooltip = document.getElementById("tooltip");
  var accessToken =
    "pk.eyJ1IjoiZXZpY3Rpb24tbGFiIiwiYSI6ImNqYzJoMzhkbjBncGkyeW4yNGlkbjRkcTQifQ.IQNWME_jYqxTH7wmFrFX-g";

  /**
   * Adds data from the data rows to the GeoJSON properties
   * @param {*} geojson
   * @param {*} data
   */
  function addDataToGeojson(geojson, data) {
    var dataDict = data.reduce(function (dict, item) {
      dict[item.id] = {
        diff: parseFloat(item["month_diff"]),
        majority: item["racial_majority"],
      };
      return dict;
    }, {});
    var newFeatures = geojson.features
      .filter(function (f) {
        return dataDict[f.properties["GEOID"]];
      })
      .map(function (feature, i) {
        feature.id = parseInt(feature.properties["GEOID"]);
        Object.assign(
          feature.properties,
          dataDict[feature.properties["GEOID"]]
        );
        return feature;
      });
    return Object.assign(geojson, { features: newFeatures });
  }

  /**
   * Adds a choropleth layer to the map
   * @param {*} map
   * @param {*} data
   * @param {*} prop
   * @param {*} range
   */
  function addChoroplethLayer(map, data, prop, range) {
    var mid = (range[1] - range[0]) / 2;
    var fillColor = [
      "interpolate",
      ["linear"],
      ["get", prop],
      range[0],
      Elab.Utils.getCssVar("--choro1"),
      (mid - range[0]) / 2,
      Elab.Utils.getCssVar("--choro2"),
      mid,
      Elab.Utils.getCssVar("--choro3"),
      mid + (range[1] - mid) / 2,
      Elab.Utils.getCssVar("--choro4"),
      range[1],
      Elab.Utils.getCssVar("--choro5"),
    ];

    var strokeColor = [
      "interpolate",
      ["linear"],
      ["get", prop],
      range[0],
      Elab.Utils.getCssVar("--choroStroke1"),
      (mid - range[0]) / 2,
      Elab.Utils.getCssVar("--choroStroke2"),
      mid,
      Elab.Utils.getCssVar("--choroStroke3"),
      mid + (range[1] - mid) / 2,
      Elab.Utils.getCssVar("--choroStroke4"),
      range[1],
      Elab.Utils.getCssVar("--choroStroke5"),
    ];
    map.addSource("choropleth", {
      type: "geojson",
      data: data,
    });
    map.addLayer(
      {
        id: "choropleth",
        type: "fill",
        source: "choropleth",
        layout: {},
        paint: {
          "fill-color": fillColor,
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            0.8,
          ],
        },
      },
      "building"
    );
    map.addLayer(
      {
        id: "choropleth-stroke",
        type: "line",
        source: "choropleth",
        layout: {},
        paint: {
          "line-color": strokeColor,
          "line-width": {
            stops: [
              [10, 2],
              [12, 4],
            ],
          },
          "line-blur": 0,
          "line-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            0,
          ],
        },
      },
      "building"
    );
  }

  /**
   * adds the date to the map legend
   * @param {} date
   */
  function renderMapDate(date) {
    var parsedDate = d3.timeParse("%d/%m/%Y")(date);
    $(".legend-choropleth__title span").html(
      "Since " + d3.timeFormat("%B %e, %Y")(parsedDate)
    );
  }

  /**
   * Creates the MapboxGL map
   * @param {*} el
   * @param {*} geojsonUrl
   * @param {*} dataUrl
   */
  function createMap(el, geojsonUrl, dataUrl) {
    var hoveredStateId = null;
    var usBounds = [
      [-129.54443, 18.235058],
      [-63.802242, 52.886017],
    ];
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
      container: el,
      style: "mapbox://styles/eviction-lab/ck8za8qns07451jpm48xn6tq2",
      bounds: usBounds,
      maxBounds: usBounds,
    });
    var formatPercent = d3.format(",.0%");

    /**
     * Get html for tooltip
     * @param {*} dir
     * @param {*} value
     */
    var getTooltipHtml = function getTooltipHtml(feature) {
      var placeName = feature.properties.NAME
        ? feature.properties.NAME.split(",")[0]
        : "Unknown";
      var distance = feature.properties.diff - 1;
      var majority = feature.properties.majority;
      var dir = distance === 0 ? "mid" : distance > 0 ? "up" : "down";
      var value = feature.properties.diff
        ? formatPercent(Math.abs(distance))
        : "Not Available";
      var primary = feature.properties.diff
        ? dir === "mid"
          ? "Filings about average."
          : "Filings <span>" + dir + " " + value + "</span> from average."
        : "Filing count not available.";
      var description =
        "<h1>" +
        placeName +
        "</h1>" +
        '<div class="map__tooltip-row map__tooltip-row--' +
        dir +
        '">' +
        primary +
        "<br /><em>Racial majority: " +
        (Elab.Utils.formatLabel(majority) || "unknown") +
        "</em>" +
        "</div>";
      return description;
    };

    /**
     * Show tooltip and set outline of feature when hovering
     * @param {*} e
     */
    function handleHover(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";
      var description = getTooltipHtml(e.features[0]);
      var flipped = e.originalEvent.pageX > window.innerWidth - 240;
      var space = flipped ? -32 : 32;
      tooltip.className =
        "chart__tooltip" + (flipped ? " chart__tooltip--flip" : "");
      tooltip.style.display = "block";
      tooltip.style.left = e.originalEvent.pageX + space + "px";
      tooltip.style.top = e.originalEvent.pageY + 32 + "px";
      tooltip.innerHTML = description;
      if (e.features.length > 0) {
        if (hoveredStateId) {
          map.setFeatureState(
            { source: "choropleth", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = e.features[0].id;
        map.setFeatureState(
          { source: "choropleth", id: hoveredStateId },
          { hover: true }
        );
      }
    }

    /**
     * Clear tooltip and outline of hover out of feature
     */
    function handleHoverOut() {
      map.getCanvas().style.cursor = "";
      tooltip.style.display = "none";
      if (hoveredStateId) {
        map.setFeatureState(
          { source: "choropleth", id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = null;
    }

    /**
     * Turn off scroll unless modifier key is pressed
     */
    function handleWheel(event) {
      if (event.originalEvent.ctrlKey || event.originalEvent.metaKey) {
        // Check if CTRL key is pressed
        event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
        if (!map.scrollZoom._enabled) map.scrollZoom.enable(); // Enable zoom only if it's disabled
      } else {
        if (map.scrollZoom._enabled) map.scrollZoom.disable(); // Disable zoom only if it's enabled
      }
    }

    /**
     * Load CSV and render choropleth on map load
     */
    function handleLoad() {
      d3.json(geojsonUrl, function (err, json) {
        if (err) {
          console.error("unable to load geojson from " + geojsonUrl);
          return;
        }
        var geojson = json;
        var bbox = geojson.bbox;
        var padding = 0;
        var bounds = [
          [bbox[0] - padding, bbox[1] - padding],
          [bbox[2] + padding, bbox[3] + padding],
        ];
        map.fitBounds(bounds, { padding: 16 });
        d3.csv(dataUrl, function (data) {
          if (!data) {
            console.error("unable to load data from " + dataUrl);
            return;
          }
          var mapDate = data[0]["month_date"];
          if (mapDate) {
            renderMapDate(mapDate);
          }
          var mapData = addDataToGeojson(geojson, data);
          addChoroplethLayer(map, mapData, "diff", [0, 2]);
          map.on("mousemove", "choropleth", handleHover);
          map.on("mouseleave", "choropleth", handleHoverOut);
        });
      });
    }

    // disable map zoom when using scroll
    map.scrollZoom.disable();
    // disable map rotation using right click + drag
    map.dragRotate.disable();
    // disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();
    map.scrollZoom.setWheelZoomRate(0.02); // Default 1/450
    map.on("wheel", handleWheel);
    map.on("load", handleLoad);
    map.addControl(new mapboxgl.NavigationControl());
    return map;
  }

  function init(el, config) {
    if (el && config.geojson && config.csv) {
      var rootEl = $(el);
      var mapEl = rootEl.find(".map")[0];
      return createMap(mapEl, config.geojson, config.csv);
    }
    throw new Error("could not initialize map section");
  }

  return {
    init: init,
    createMap: createMap,
  };
})(Elab);

/**
 * TABLE MODULE
 * ---
 * Public Methods
 *  - createIntroTable()
 *  - createIndexTable()
 */

Elab.Table = (function (Elab) {
  var formatDiff = d3.format(",.0%");

  /**
   * Gets the % change of a value relative to 1
   * (e.g. getPercentChange(1.23) => { direction: "up", value: "23%" })
   * @param {*} diff
   */
  function getPercentChange(diff) {
    var change = diff - 1;
    var dir = change === 0 ? "mid" : change < 0 ? "down" : "up";
    return {
      direction: dir,
      value: formatDiff(Math.abs(change)),
    };
  }

  /**
   * Loads and parses the CSV table
   */
  function loadTableData(dataUrl, callback) {
    d3.csv(dataUrl, function (data) {
      if (!data) {
        console.error("unable to load data for table from " + dataUrl);
        return;
      }
      var parseDate = d3.timeParse("%m/%d/%Y");
      var parsedData = data.map(function (d) {
        var stats = ["week", "month", "cumulative"].reduce(function (
          obj,
          prefix
        ) {
          obj[prefix] = {
            date: parseDate(d[prefix + "_date"]),
            diff: parseFloat(d[prefix + "_diff"]),
            filings: parseInt(d[prefix + "_filings"]),
          };
          return obj;
        },
        {});
        return Object.assign(
          {
            id: d.id,
            name: d.name,
            lastUpdate: parseDate(data[0]['data_date']),
            start:
              d["start_moratorium_date"] &&
              parseDate(d["start_moratorium_date"]),
            end:
              d["end_moratorium_date"] && parseDate(d["end_moratorium_date"]),
          },
          stats
        );
      });
      callback && callback(parsedData);
    });
  }

  /**
   * Renders the a stat cell in the intro table
   * @param {*} data
   * @param {*} type
   */
  function renderStatRow(data, type) {
    var parentEl = document.querySelector(".stats-item--" + type);
    var filingsEl = parentEl.querySelector(".stats-item__count");
    var diffEl = parentEl.querySelector(".stats-item__diff");
    if (!parentEl || !filingsEl || !diffEl) return;
    if (!data) {
      filingsEl.innerHTML = "Unknown";
      return;
    }
    var change = getPercentChange(data[type].diff);
    filingsEl.innerHTML = data[type].filings;
    diffEl.innerHTML = change.value;
    diffEl.className = diffEl.className + " arrow " + change.direction;
  }

  /**
   * Renders the moratorium dates in the intro table
   * @param {*} data
   */
  function renderMoratoriumRow(data) {
    var parentEl = document.querySelector(".stats-item--moratorium");
    var valueEl = parentEl.querySelector(".stats-item__value");
    if (!parentEl || !valueEl) return;
    if (!data || (!data.start && !data.end)) {
      valueEl.innerHTML = "Unknown";
      return;
    }
    var startDate = Elab.Utils.formatDate(data.start);
    var endDate = data.end
      ? Elab.Utils.formatDate(data.end)
      : "End Date Unknown";
    valueEl.innerHTML = startDate + " - " + endDate;
  }

  /**
   * Returns the HTML for a row in the index table
   * @param {*} data
   */
  function getRowHtml(data) {
    var weekChange = getPercentChange(data.week.diff);
    var monthChange = getPercentChange(data.month.diff);
    var slug = Elab.Utils.slugify(data.name);
    var url = Elab.Utils.getCurrentURL() + slug;
    var html = "";
    html +=
      '<tr class="table__row" data-name="' +
      data.name +
      '" data-href="' +
      url +
      '">';
    html += '<td class="table__cell table__cell--name">' + data.name + "</td>";
    html +=
      '<td class="table__cell table__cell--number">' +
      data.week.filings +
      ' <span class="arrow ' +
      weekChange.direction +
      '">' +
      weekChange.value +
      "</span>" +
      "</td>";
    html +=
      '<td class="table__cell table__cell--number">' +
      data.month.filings +
      ' <span class="arrow ' +
      monthChange.direction +
      '">' +
      monthChange.value +
      "</span>" +
      "</td>";
    html +=
      '<td class="table__cell table__cell--button">' +
      '<a href="' +
      url +
      '" class="btn btn-default">View Full Report <i class="fa fa-chevron-right"></i></a>' +
      "</td>";
    html += "</tr>";
    return html;
  }

  function renderDate(data) {
    $('#reportDate')
      .html("Week of " + d3.timeFormat("%B %d, %Y")(data.week.date))
  }

  /**
   * Gets the HTML for the footnote on the index table
   * @param {*} data
   */
  function getFootnoteHtml(data) {
    var dateFormat = d3.timeFormat("%B %d, %Y");
    var html = [];
    html.push(
      "<sup>1</sup> filings for the week of " + dateFormat(data.week.date) + " to " + dateFormat(data.lastUpdate) + " ."
    );
    html.push(
      "<sup>2</sup> filings for the period " +
        dateFormat(data.month.date) +
        " to " + dateFormat(data.lastUpdate) + "."
    );
    html.push(
      "Percent differences relative to average filings for the same time period."
    );
    return html.join("<br />");
  }

  /**
   * Creates the intro table
   * @param {*} fips
   * @param {*} dataUrl
   */
  function createIntroTable(fips, dataUrl) {
    loadTableData(dataUrl, function (data) {
      var locationData = data.find(function (d) {
        return d.id === fips;
      });
      if (!locationData) {
        console.error(
          "error retrieving data from " + dataUrl + " for id " + fips
        );
      }
      renderDate(locationData);
      renderStatRow(locationData, "week");
      renderStatRow(locationData, "month");
      renderMoratoriumRow(locationData);
    });
  }

  /**
   * Creates the index table
   * @param {*} el
   * @param {*} dataUrl
   */
  function createIndexTable(el, dataUrl) {
    var bodyEl = $(el).find(".table__body");
    loadTableData(dataUrl, function (data) {
      // clear loading
      bodyEl.html(""); 
      // create rows
      var locations = data;
      locations.forEach(function (city) {
        var html = getRowHtml(city);
        bodyEl.append(html);
      });
      // update the "last updated" text
      $('#lastUpdate span').html(d3.timeFormat("%B %d, %Y")(data[0].lastUpdate))
      // set the table footnotes
      $(el).next().html(getFootnoteHtml(data[0]));
      // default sort the table
      $(el).tablesorter({ sortList: [[0, 0]] });
      // setup click handler
      $(el)
        .find(".table__row")
        .click(function () {
          var url = $(this).data("href");
          if (url) {
            window.location.href = url;
          }
        });
    });
  }

  return {
    createIntroTable: createIntroTable,
    createIndexTable: createIndexTable,
  };
})(Elab);

/**
 * SECTION MODULE
 * ---
 * Public
 *  - init()
 */

Elab.Section = (function (Elab) {
  function init(type, el, config) {
    var rootEl = $(el);

    // move footnotes into proper space
    var contentEl = rootEl.find(".details");
    var footnoteEl = rootEl.find(".footnote");
    footnoteEl.append(contentEl.find("ol"));

    // initialize visual component
    if (type === "map") {
      return Elab.Map.init(rootEl[0], config);
    }
    if (type === "chart") {
      return Elab.Chart.init(rootEl[0], config);
    }
  }

  return {
    init: init,
  };
})(Elab);
