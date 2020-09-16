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
    var map = {
      "--choro1": "#434878",
      "--choro2": "#c1c5ea",
      "--choro3": "rgba(241, 241, 241, 0.7)",
      "--choro4": "#e99c7e",
      "--choro5": "#e24000",
      "--choroStroke1": "#212656",
      "--choroStroke2": "#a0a3c8",
      "--choroStroke3": "rgba(155, 155, 155, 0.7)",
      "--choroStroke4": "#c77a5c",
      "--choroStroke5": "#c02000",
    };
    var value = getComputedStyle(document.body).getPropertyValue(varName);
    // fallback to map value if no CSS var set
    return value ? value : map[varName];
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
        return "Filings This Year<span>relative to average</span>";
      case "Other":
        return "Other/None";
      default:
        return id;
    }
  };

  var formatDate = d3.timeFormat("%B %e");

  /**
   * Executes a function once it enters the viewport
   * @param {*} el
   * @param {*} handler
   * @param {*} options
   */
  function callOnEnter(el, handler, options) {
    options = options || { rootMargin: "0px 0px -40px 0px" };
    if (!!window.IntersectionObserver) {
      var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            handler();
            observer.unobserve(entry.target);
          }
        });
      }, options);
      observer.observe(el);
    } else {
      // call immediately if IntersectionObserver is unavailable
      handler();
    }
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  return {
    getCssVar: getCssVar,
    getCurrentURL: getCurrentURL,
    slugify: slugify,
    createTwitterLink: createTwitterLink,
    createFacebookLink: createFacebookLink,
    formatLabel: formatLabel,
    formatDate: formatDate,
    callOnEnter: callOnEnter,
    debounce: debounce,
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
      },
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
    markLines: [
      { y: 1, label: "average" },
      { y: 1, label: "filings", labelOnly: true },
    ],
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
    markLines: [
      { y: 1, label: "average" },
      { y: 1, label: "filings", labelOnly: true },
    ],
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
      },
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
 * DATA LOADING MODULE
 * ---
 * Public
 *  - loadTableData()
 *  - loadMapData()
 *  - loadMonthlyData()
 *  - loadRacialData()
 */

Elab.Data = (function (Elab) {
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
      var result = {};
      data.forEach(function (d) {
        if (!result[d.id]) {
          result[d.id] = {
            id: d.id,
            name: d.name,
            city: d.name.split(",")[0],
            values: [
              [
                parseDate(d["week_date"]),
                parseInt(d["week_filings"]),
                parseFloat(d["week_trend"]),
              ],
            ],
            start: parseDate(d["start_moratorium_date"]),
            end: parseDate(d["end_moratorium_date"]),
            updated: parseDate(d["data_date"]),
            subgroups: d["subgroups"] ? d["subgroups"].split(";") : null,
            subgroup_values: d["subgroup_values"]
              ? d["subgroup_values"].split(";").map(function (d) {
                  return parseInt(d);
                })
              : null,
          };
        } else {
          result[d.id].values.push([
            parseDate(d["week_date"]),
            parseInt(d["week_filings"]),
            parseFloat(d["week_trend"]),
          ]);
        }
      });
      var result2 = Object.values(result).map(function (d) {
        d["values"].sort(function (a, b) {
          return +a[0] > +b[0] ? 1 : -1;
        });
        d["cumulative"] = d["values"].reduce(function (sum, v) {
          return sum + v[1];
        }, 0);
        d["lastWeek"] = d["values"][d["values"].length - 1][1];
        return d;
      });
      callback && callback(result2);
    });
  }

  return {
    loadTableData: loadTableData,
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
    var rawLastDay = data["_raw"][data["_raw"].length - 1]["month_last_day"];
    if (!rawLastDay) return;
    var parseDate = d3.timeParse("%d/%m/%Y");
    var lastDay = parseDate(rawLastDay);
    var value =
      "Partial " +
      d3.timeFormat("%B")(lastDay) +
      " filings as of " +
      d3.timeFormat("%-m/%-d")(lastDay) +
      ", relative to average for same period";
    var partialEl = rootEl.find(".visual__note");
    partialEl.html(value);
  }

  function renderBarTooltip(title, items, context, render, type) {
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
      .attr("class", "chart__tooltip chart__tooltip--" + type)
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
        // split the / char for other/none becomes "other"
        var id = d.name.split("/")[0];
        // classnames for the tooltip row
        var clsx = [
          "chart__tooltip-row",
          "chart__tooltip-row--" + d.idx,
          "chart__tooltip-row--" + id.toLowerCase(),
        ];
        return clsx.join(" ");
      })
      .html(render);
  }

  function Chart(source, root, config) {
    // options
    config = config || {};
    var margin = config.margin || {
      top: 32,
      right: 52,
      bottom: 72,
      left: 40,
    };
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
        .merge(group)
        .attr("transform", function (d) {
          return "translate(" + context.x(new Date(2020, d.id, 1)) + ",0)";
        });

      var groupAreaSelection = context.els.data
        .selectAll(".chart__bar-area")
        .data(groupedData);

      var groupAreas = groupAreaSelection
        .enter()
        .append("rect")
        .attr("fill", "transparent")
        .attr("class", "chart__bar-area")
        .on("mousemove", function (d) {
          var title = chartConfig.format.xTooltip(d.data[0].value.x);
          var items = d.data.map(getHoverItem);
          renderBarTooltip(
            title,
            items,
            context,
            chartConfig.format.tooltip,
            config.id
          );
        })
        .on("mouseout", function () {
          if (context.els.tooltip) context.els.tooltip.style("display", "none");
        })
        .merge(groupAreaSelection)
        .attr("x", function (d, i) {
          return context.x(new Date(2020, d.id, 1)) - 4;
        })
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
          return (
            "chart__bar chart__bar--" +
            d.idx +
            " chart__bar--" +
            d.id.toLowerCase()
          );
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

      group.exit().remove();
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

    function renderMarkLine(data, config, context) {
      // y axis mark lines
      var markLine = context.els.markLines
        .selectAll(".chart__mark-line--y")
        .data(
          config.markLines.filter(function (v) {
            return v.labelOnly;
          })
        );

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
          return context.width + 4;
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
          return context.y(d.y) - 4 + i * 16;
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
          " legend-item--" +
          item.id.toLowerCase() +
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
      // render legend first, as it can add to chart height
      config.legend && renderLegend(config.legend, data.items, config);

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

      var xBandScale = d3
        .scaleBand()
        .rangeRound([0, width])
        .padding(0.5)
        .domain(xBands);

      // setup scales
      var x = xBandScale;
      var y = d3.scaleLinear().rangeRound([height, 0]).domain([0, yExtent[1]]);

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
      renderBars(data, config, context);
      config.markLines && renderMarkLine(data, config, context);
      renderFrame(data, config, context);
      config.content && renderContentUpdates(config.content, config);
    }

    /**
     * Re-renders the chart with the existing configuration
     * and data.
     */
    function render() {
      renderGraph(parsedData, elements, chartConfig);
    }
    var debouncedRender = Elab.Utils.debounce(render, 100);

    /**
     * Updates the chart's configuration
     * @param {*} newConfig
     */
    function update(newConfig) {
      if (!elements) elements = initElements(root);
      if (newConfig) chartConfig = newConfig;
      parsedData = parseData(source, chartConfig);
      // use debounced render when updating, for performance
      render();
    }

    function initialRender() {
      update(config);
    }

    if (!elements) elements = initElements(root);
    if (config) chartConfig = config;
    parsedData = parseData(source, chartConfig);
    Elab.Utils.callOnEnter(root.node().parentNode, initialRender);

    return {
      root: root,
      render: render,
      update: update,
      data: parsedData,
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
    var countToggleEl = rootEl.find(".toggle--count");
    var avgToggleEl = rootEl.find(".toggle--avg");

    if (config.id === "avg") avgToggleEl.addClass("toggle--active");

    if (config.id === "race") countToggleEl.addClass("toggle--active");

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
        currentConfig = config.id === "race" ? configs[0] : configs[1];
        countToggleEl.addClass("toggle--active");
        avgToggleEl.removeClass("toggle--active");
        rootEl.removeClass("section--avg-on").addClass("section--count-on");
        chart.update(currentConfig);
      });
      avgToggleEl.on("click", function () {
        currentConfig = config.id === "race" ? configs[1] : configs[0];
        avgToggleEl.addClass("toggle--active");
        countToggleEl.removeClass("toggle--active");
        rootEl.addClass("section--avg-on").removeClass("section--count-on");
        chart.update(currentConfig);
      });

      updatePartialFilingsDate(rootEl, chart.data);
    });
  }

  return {
    init: init,
    createChart: createChart,
    renderBarTooltip: renderBarTooltip,
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
    $("#mapDate").html("Since " + d3.timeFormat("%B %e, %Y")(parsedDate));
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
        function zoomToLocation() {
          map.fitBounds(bounds, { padding: 16 });
        }
        Elab.Utils.callOnEnter(map.getCanvasContainer(), zoomToLocation);
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

Elab.ChartBuilder = (function (Elab) {
  /**
   * Creates an empty chart with root elements
   * @param {DOMElement} svgEl a SVG DOM element to render the chart in
   * @param {Array<Object>} data data to use for the chart
   * @param {Object} options
   */
  function Chart(svgEl, data, options) {
    this.data = data;
    this.options = options || this.defaultOptions;
    this.innerWidth =
      this.options.width + this.options.margin[1] + this.options.margin[3];
    this.innerHeight =
      this.options.height + this.options.margin[0] + this.options.margin[2];
    this.svgEl = svgEl;
    this.updaters = {};
    this.selections = {};
    this.selections.tooltip = d3.select("#tooltip");
    this.xScale = null;
    this.yScale = null;
    this.xBandScale = d3.scaleBand();
    this.addRoot();
  }

  /** Default options for the chart */
  Chart.prototype.defaultOptions = {
    width: 400,
    height: 400,
    margin: [8, 8, 8, 8],
    xTicks: 4,
    xTicksFormat: d3.timeFormat("%b"),
    yTicksFormat: d3.format(",d"),
  };

  /**
   * Returns the width of the data area for the chart
   */
  Chart.prototype.getInnerWidth = function () {
    return this.options.width - this.options.margin[1] - this.options.margin[3];
  };

  /**
   * Returns the height of the data area for the chart
   */
  Chart.prototype.getInnerHeight = function () {
    return (
      this.options.height - this.options.margin[0] - this.options.margin[2]
    );
  };

  /**
   * Gets a selection that has been added to the chart
   * @param {string} id
   */
  Chart.prototype.getSelection = function (id) {
    return this.selections[id];
  };
  /**
   * Adds a selection to the chart
   * @param {string} id identifier for this selection
   * @param {string} parentId id of the parent selection
   * @param {function} createSelection function that returns the selection
   */
  Chart.prototype.addSelection = function (id, parentId, createSelection) {
    this.selections[id] = createSelection(this.selections[parentId], this);
    return this;
  };

  /**
   * Adds a function that executes on renter
   * @param {string} id identifier for the render function
   * @param {function} createRenderFunction a function that returns the render function
   */
  Chart.prototype.addRenderFunction = function (id, createRenderFunction) {
    this.updaters[id] = createRenderFunction(this.getSelection(id), this);
    return this;
  };

  /**
   * Adds an element, with a selection and render function to the chart
   * @param {string} id
   * @param {string} parentId
   * @param {function} createSelection returns a selection
   * @param {function} createRenderFunction returns a render function
   */
  Chart.prototype.addElement = function (
    id,
    parentId,
    createSelection,
    createRenderFunction
  ) {
    this.addSelection(id, parentId, createSelection).addRenderFunction(
      id,
      createRenderFunction
    );
    return this;
  };

  /**
   * Creates the chart root container
   */
  Chart.prototype.addRoot = function () {
    var _this = this;
    this.selections["root"] = d3
      .select(this.svgEl)
      .attr("class", "chart__root");
    this.updaters["root"] = function () {
      _this.selections["root"]
        .attr("width", _this.options.width)
        .attr("height", _this.options.height);
    };
    this.selections["base"] = this.selections["root"]
      .append("g")
      .attr("class", "chart__base");
    this.selections["data"] = this.selections["root"]
      .append("g")
      .attr("class", "chart__data")
      .attr("clip-path", "url(#chartArea)");
    this.selections["overlay"] = this.selections["root"]
      .append("g")
      .attr("class", "chart__overlay");
    this.updaters["base"] = function () {
      [
        _this.selections["base"],
        _this.selections["data"],
        _this.selections["overlay"],
      ].forEach(function (sel) {
        sel.attr(
          "transform",
          "translate(" +
            _this.options.margin[3] +
            " " +
            _this.options.margin[0] +
            ")"
        );
      });
    };
    return this;
  };

  /**
   * Adds a frame border to the chart
   */
  Chart.prototype.addFrame = function () {
    function createSelection(parentSelection) {
      return parentSelection.append("rect").attr("class", "chart__frame");
    }
    function createRenderFunction(selection, chart) {
      return function () {
        selection
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", chart.getInnerWidth())
          .attr("height", chart.getInnerHeight());
      };
    }
    this.addElement("frame", "overlay", createSelection, createRenderFunction);
    return this;
  };

  /**
   * Adds a clip path around the frame area for the chart
   */
  Chart.prototype.addClipPath = function () {
    function createSelection(parentSelection) {
      return parentSelection
        .append("clipPath")
        .attr("id", "chartArea")
        .append("rect");
    }
    function createRenderFunction(selection, chart) {
      return function () {
        selection
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", chart.getInnerWidth())
          .attr("height", chart.getInnerHeight());
      };
    }
    this.addElement("clipPath", "root", createSelection, createRenderFunction);
    return this;
  };

  /**
   * Adds a pattern fill area to the chart
   * @param {Array} areaData [start, end]
   */
  Chart.prototype.addArea = function (areaData, options) {
    // set default options
    options = options || {};
    options.angle = options.angle || 45;
    options.areaId = options.areaId || "area";
    // make sure IDs have not already been assigned
    if (options.patternId && this.getSelection(options.patternId))
      throw new Error("patternId already exists: " + options.patternId);
    if (this.getSelection(options.areaId))
      throw new Error("areaId already exists: " + options.areaId);
    // creates SVG pattern
    function createPattern(parentSelection) {
      return parentSelection
        .append("pattern")
        .attr("id", options.patternId)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 12)
        .attr("height", 12)
        .attr("patternUnits", "userSpaceOnUse")
        .attr("patternTransform", "rotate(" + options.angle + ")")
        .html(
          '<rect class="chart__pattern chart__pattern--' +
            options.patternId +
            '" x="0" y="0" width="6" height="12" />'
        );
    }
    // creates area element and returns selection
    function createAreaSelection(parentSelection) {
      return parentSelection
        .append("rect")
        .attr("class", "chart__area chart__area--" + options.areaId);
    }
    // renders the area rect in the chart
    function createAreaRenderFunction(selection, chart) {
      return function () {
        var maxDate = chart.xScale.domain()[1];
        areaData[1] =
          !areaData[1] || +areaData[1] > +maxDate ? maxDate : areaData[1];
        selection
          .attr("x", chart.xScale(areaData[0]))
          .attr("y", 1)
          .attr(
            "width",
            chart.xScale(areaData[1]) - chart.xScale(areaData[0]) - 1
          )
          .attr("height", chart.getInnerHeight() - 2)
          .attr("fill", "url(#" + options.patternId + ")");
      };
    }
    // add selections and render function to chart
    options.patternId &&
      this.addSelection(options.patternId, "root", createPattern);
    this.addSelection(options.areaId, "data", createAreaSelection);
    this.addRenderFunction(options.areaId, createAreaRenderFunction);
    return this;
  };

  /**
   * Adds tooltip functionality to the chart
   * @param {function} showTooltip function that shows the tooltip
   * @param {function} hideTooltip function that hides the tooltip
   */
  Chart.prototype.addTooltip = function (showTooltip, hideTooltip) {
    var _this = this;
    this.selections["hover-line"] = this.selections["data"]
      .append("line")
      .attr("class", "chart__hover-line");
    this.selections["hover"] = this.selections["data"]
      .append("rect")
      .attr("class", "chart__hover")
      .attr("x", 0)
      .attr("y", 0)
      .on("mousemove", handleHover)
      .on("mouseout", handleHoverOut);
    this.updaters["hover"] = function () {
      _this.selections["hover"]
        .attr("width", _this.getInnerWidth())
        .attr("height", _this.getInnerHeight())
        .attr("opacity", 0);
    };

    function handleHover() {
      var xHovered = _this.xScale.invert(
        d3.mouse(_this.selections["hover"].node())[0]
      );
      showTooltip(_this, xHovered);
    }

    function handleHoverOut() {
      hideTooltip(_this);
    }

    return this;
  };

  /**
   * Adds bars to the chart
   * @param {function} selector function that takes the chart data and returns the bar data
   */
  Chart.prototype.addBars = function (selector) {
    var _this = this;
    this.selections["bars"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__bars");

    this.updaters["bars"] = function () {
      var barData = selector(_this.data);

      var spacing = 2;
      var bandWidth =
        _this.xScale(barData[1][0]) - _this.xScale(barData[0][0]) - spacing * 2;

      var selection = _this.selections["bars"]
        .selectAll(".chart__bar")
        .data(barData);

      selection
        .enter()
        .append("rect")
        .attr("class", "chart__bar")
        .attr("x", function (d) {
          return _this.xScale(d[0]) + spacing;
        })
        .attr("width", bandWidth)
        .attr("y", _this.getInnerHeight())
        .attr("height", 0)
        .merge(selection)
        .transition()
        .duration(1000)
        .attr("x", function (d) {
          return _this.xScale(d[0]) + spacing;
        })
        .attr("width", bandWidth)
        .attr("y", function (d) {
          return _this.yScale(d[1]);
        })
        .attr("height", function (d) {
          return _this.getInnerHeight() - _this.yScale(d[1]);
        });
    };
    return this;
  };

  /**
   * Adds lines to the chart
   * @param {function} selector a function that accepts chart data and returns the line data
   */
  Chart.prototype.addLines = function (selector) {
    var _this = this;
    this.selections["lines"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__lines");
    this.updaters["lines"] = function () {
      var lineData = selector(_this.data);

      var line = d3
        .line()
        .x(function (d) {
          return _this.xScale(d[0]);
        })
        .y(function (d) {
          return _this.yScale(d[1]);
        })
        .curve(d3.curveMonotoneX);

      var selection = _this.selections["lines"]
        .selectAll(".chart__line")
        .data(lineData);

      selection
        .enter()
        .append("path")
        .attr("class", "chart__line")
        .attr("d", line)
        .style("stroke-dasharray", function () {
          return this.getTotalLength();
        })
        .style("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .merge(selection)
        .transition()
        .duration(2000)
        .delay(400)
        .style("stroke-dasharray", function () {
          return this.getTotalLength();
        })
        .style("stroke-dashoffset", 0)
        .attr("d", line);
    };
    return this;
  };

  /**
   * Adds a Y axis to the chart
   * @param {*} selector a function that accepts a data entry and returns the y value
   */
  Chart.prototype.addAxisY = function (selector) {
    var _this = this;
    this.selections["yAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--y");
    this.updaters["yAxis"] = function () {
      var extent = d3.extent(_this.data, selector);
      _this.yScale = d3
        .scaleLinear()
        .rangeRound([_this.getInnerHeight(), 0])
        .domain([0, extent[1] + extent[1] * 0.05]);
      var yAxis = d3
        .axisLeft(_this.yScale)
        .ticks(_this.options.yTicks)
        .tickSize(-1 * _this.getInnerWidth())
        .tickFormat(_this.options.yTicksFormat);

      _this.selections["yAxis"]
        .attr("transform", "translate(0, 0)")
        .transition()
        .duration(1000)
        .call(yAxis);
    };
    return this;
  };

  /**
   * Utility function that calculates the width of a month on the chart in pixels
   */
  Chart.prototype.monthToPixels = function (num) {
    var now = new Date();
    var start = d3.timeDay.floor(now);
    var end = d3.timeDay.offset(start, 30);
    var width = this.xScale(end) - this.xScale(start);
    return width * num;
  };

  /**
   * Adds a time (X) axis to the chart
   * @param {*} selector function that accepts a data entry and returns the X time value
   */
  Chart.prototype.addTimeAxis = function (selector) {
    var _this = this;
    function adjustTextLabels(selection) {
      selection
        .selectAll(".tick text")
        .attr("transform", "translate(" + _this.monthToPixels(1) / 2 + ",0)");
      selection.selectAll(".tick:last-child text").attr("opacity", 0);
    }
    this.selections["timeAxis"] = this.selections["overlay"]
      .append("g")
      .attr("class", "chart__axis chart__axis--time");
    this.updaters["timeAxis"] = function () {
      var extent = d3.extent(_this.data, selector);
      var xExtent = [
        d3.timeDay.offset(extent[0], -2),
        d3.timeDay.offset(extent[1], 9),
      ];

      _this.xScale = d3
        .scaleTime()
        .rangeRound([0, _this.getInnerWidth()])
        .domain(xExtent);
      var xAxis = d3
        .axisBottom(_this.xScale)
        .ticks(_this.options.xTicks)
        .tickSize(8)
        .tickSizeOuter(0)
        .tickFormat(_this.options.xTicksFormat);
      _this.selections["timeAxis"]
        .attr("transform", "translate(0," + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(xAxis)
        .call(adjustTextLabels);
    };
    return this;
  };

  /**
   * Adds a custom element to the chart
   * @param {function} renderElement accepts the chart object and renders an element
   */
  Chart.prototype.addCustom = function (renderElement) {
    var _this = this;
    renderElement(_this);
    return this;
  };

  /**
   * Renders the chart
   */
  Chart.prototype.render = function () {
    Object.values(this.updaters).forEach(function (r) {
      r();
    });
    return this;
  };

  /**
   * Updates the chart options and re-renders
   * @param {*} options
   */
  Chart.prototype.update = function (options) {
    Object.assign(this.options, options);
    this.render();
    return this;
  };

  return Chart;
})();

/**
 * INTRO MODULE
 * ----
 * Creates the intro figure and populates data into
 * placeholders for the intro section.
 *
 * Public methods:
 * - initIntroChart(root, dataUrl, locationId)
 *
 */
Elab.Intro = (function (Elab) {
  /**
   * Renders the intro chart tooltip on hover
   * @param {*} chart ChartBuilder instance
   * @param {*} xHovered hovered value
   */
  var showIntroTooltip = function (chart, xHovered) {
    var bisectX = d3.bisector(function (d) {
      return d[0];
    }).left;
    // midpoint of the current hovered week
    var xPosition = d3.timeDay.offset(d3.timeWeek.floor(xHovered), 3.5);
    // index of currently hovered week
    var dataIndex = bisectX(chart.data, xHovered) - 1;
    // data point for the hovered week
    var weekStart = chart.data[dataIndex];
    // exit early if no data point or if out of range
    if (!weekStart || +xPosition > chart.xScale.domain()[1]) return;
    // create tooltip
    var title = "Eviction Filings";
    var dayFormat = d3.timeFormat("%b %e");
    var weekLabel = [weekStart[0], d3.timeDay.offset(weekStart[0], 7)]
      .map(function (d) {
        return dayFormat(d);
      })
      .join(" - ");
    var items = [{ idx: 0, name: weekLabel, value: weekStart[1] }];
    var context = {
      els: { tooltip: chart.selections["tooltip"] },
    };
    window.Elab.Chart.renderBarTooltip(title, items, context, undefined, "top");
    // position hover line
    var position = chart.xScale(xPosition) + 1.5;
    chart
      .getSelection("hover-line")
      .style("display", "block")
      .transition()
      .duration(100)
      .ease(d3.easeLinear)
      .attr("x1", position)
      .attr("x2", position)
      .attr("y1", 0)
      .attr("y2", chart.getInnerHeight());
  };

  /**
   * Handler to hide tooltip on hover out
   * @param {*} chart
   */
  var hideIntroTooltip = function (chart) {
    chart.getSelection("hover-line").style("display", "none");
    chart.getSelection("tooltip").style("display", "none");
  };

  /**
   * Selects the line data set from the chart data
   * @param {*} data
   */
  var selectLineData = function (data) {
    return [
      data
        .map(function (d) {
          return [d3.timeDay.offset(d[0], 3.5), d[2]];
        })
        .filter(function (d, i) {
          return i !== data.length - 1;
        }),
    ];
  };

  /**
   * Selects the bar data set from the chart data
   * @param {*} data
   */
  var selectBarsData = function (data) {
    return data.map(function (d) {
      return [d[0], d[1]];
    });
  };

  /**
   * Creates the label paths for the markers
   * (last week filings and total filings)
   * @param {*} chart
   */
  var createLabelMarkers = function (chart) {
    function createSpanPathSelection(parentSelection) {
      return parentSelection.append("path").attr("class", "chart__span-path");
    }
    function createSpanPathRenderFunction(selection, chart) {
      function draw() {
        return (
          "M 0," +
          chart.getInnerHeight() +
          " h " +
          (chart.getInnerWidth() + 8) +
          " v 94 h -46"
        );
      }
      return function () {
        selection.attr("d", draw());
      };
    }
    function createBarMarkerSelection(parentSelection) {
      return parentSelection.append("path").attr("class", "chart__bar-path");
    }
    function createBarMarkerRenderFunction(selection, chart) {
      function draw() {
        var lastDate = chart.data[chart.data.length - 1][0];
        var barPosition = chart.xScale(d3.timeDay.offset(lastDate, 4));
        return (
          "M " + barPosition + "," + chart.getInnerHeight() + " v 61 h -12"
        );
      }
      return function () {
        selection.attr("d", draw());
      };
    }
    chart.addElement(
      "span-path",
      "overlay",
      createSpanPathSelection,
      createSpanPathRenderFunction
    );
    chart.addElement(
      "bar-path",
      "overlay",
      createBarMarkerSelection,
      createBarMarkerRenderFunction
    );
  };

  /**
   * Creates the chart and renders
   * @param {*} root
   * @param {*} cityData
   */
  function createIntroFigure(root, cityData) {
    var seriesData = cityData.values;
    var svg = $(root).find("svg")[0];
    var rect = root.getBoundingClientRect();
    var options = {
      width: rect.width,
      height: rect.height,
      margin: [32, 12, 90, 40],
      xTicks: d3.timeMonth.every(1),
      xTicksFormat: d3.timeFormat("%B"),
      yTicks: 4,
      yTicksFormat: d3.format(",d"),
    };
    var chart = new Elab.ChartBuilder(svg, seriesData, options);
    return (
      chart
        // clips lines or bars that extend past data area
        .addClipPath()
        // adds a border around the chart area
        .addFrame()
        // adds y axis, using max of the trend line value or bar value
        .addAxisY(function (d) {
          return Math.max(d[2], d[1]);
        })
        // adds time axis from dates in the dataset
        .addTimeAxis(function (d) {
          return d[0];
        })
        // adds local moratorium areas
        .addArea([cityData.start, cityData.end], {
          areaId: "area",
          patternId: "stripes",
        })
        // adds federal moratorium
        .addArea([new Date(2020, 8, 4), new Date(2020, 11, 31)], {
          areaId: "cdcArea",
          patternId: "cdcStripes",
          angle: -45,
        })
        // adds the bars for weekly filings
        .addBars(selectBarsData)
        // adds the trend line
        .addLines(selectLineData)
        // adds a tooltip with the provided render function
        .addTooltip(showIntroTooltip, hideIntroTooltip)
        // adds a custom element with markers for the last bar and chart span
        .addCustom(createLabelMarkers)
        // renders the chart
        .render()
    );
  }

  /**
   * Initializes the chart figure and handles resizing
   * @param {*} root
   * @param {*} cityData
   */
  function initFigure(root, cityData) {
    // create figure
    var figure = createIntroFigure(root, cityData);
    // resize figure on changes
    window.addEventListener("resize", function () {
      var rect = root.getBoundingClientRect();
      figure.update({
        width: rect.width,
        height: rect.height,
      });
    });
  }

  /**
   * Inserts the data for the location into the placeholders
   */
  function initDataValues(cityData) {
    var dateFormat = d3.timeFormat("%B %e");
    var numFormat = d3.format(",d");
    var moratorium = [cityData.start, cityData.end]
      .map(function (d) {
        return d ? dateFormat(d) : "Ongoing";
      })
      .join(" - ");
    $("#evictionMoratorium").html(moratorium);
    $("#filingsLastWeek").html(
      "<span>" + numFormat(cityData.lastWeek) + "</span> filings last week*"
    );
    $("#filingsCumulative").html(
      "<span>" +
        numFormat(cityData.cumulative) +
        "</span> filings since Mar. 15"
    );
    addSubgroupBreakdown(cityData);
  }

  /**
   * Prepends a paragraph to the intro with a breakdown
   * of all of the counties within the dataset.
   * @param {*} cityData data from table.csv
   */
  function addSubgroupBreakdown(cityData) {
    if (
      !cityData.subgroups ||
      !cityData.subgroup_values ||
      cityData.subgroups.length === 0
    )
      return;
    var numFormat = d3.format(",d");
    var templateData = Object.assign({}, cityData, {
      cumulative: numFormat(cityData.cumulative),
    });
    var template = Handlebars.compile(
      "<p>Of the {{cumulative}} filings in {{city}} since March 15th, " +
        "{{#each subgroups}}" +
        "{{#if @last}}" +
        " and {{lookup ../subgroup_values @index}} were filed in {{this}}." +
        "{{else}}" +
        "{{lookup ../subgroup_values @index}} were filed in {{this}}{{#if ../subgroup_values.[2]}},{{/if}}" +
        "{{/if}}" +
        "{{/each}}</p>"
    );
    var html = template(templateData);
    $("#introText").prepend(html);
  }

  /**
   * Creates the intro chart
   */
  function initIntroChart(root, dataUrl, locationId) {
    Elab.Data.loadTableData(dataUrl, function (data) {
      var cityData = data.find(function (d) {
        return d.id === locationId;
      });
      if (!cityData) {
        $(".intro").addClass("intro--error");
        throw new Error("no data found for city");
      }
      $(".intro").removeClass("intro--loading");
      initFigure(root, cityData);
      initDataValues(cityData);
    });
  }

  return {
    initIntroChart: initIntroChart,
  };
})(Elab);

/**
 * LIST PAGE MODULE
 * ---
 * Public Methods
 *  - initListPage()
 */

Elab.ListPage = (function (Elab) {
  /**
   * Returns the HTML for a row in the index table
   * @param {*} data
   */
  function getRowHtml(data, options) {
    var numFormat = d3.format(",d");
    var rowTemplate = Handlebars.compile(
      '<tr class="table__row {{class}}" data-name="{{name}}" data-href="{{url}}">' +
        '<td class="table__cell table__cell--name">' +
        "{{name}}" +
        '<img class="icon icon--moratorium" src="/img/el-moratorium-icon5.svg" data-toggle="tooltip" data-placement="right" title="{{tooltip}}" />' +
        "</td>" +
        '<td class="table__cell table__cell--number">' +
        "{{weekFilings}}" +
        "</td>" +
        '<td class="table__cell table__cell--number">' +
        "{{cumulativeFilings}}" +
        "</td>" +
        '<td class="table__cell table__cell--visual">' +
        '<svg class="trend-line" data-visual="{{id}}"></svg>' +
        "</td>" +
        '<td class="table__cell table__cell--button">' +
        '<a href="{{url}}" class="btn btn-default">{{buttonLabel}} <i class="fa fa-chevron-right"></i></a>' +
        "</td>" +
        "</tr>"
    );
    var isMoratoriumActive = !data.end || (data.end && +data.end > +Date.now());
    var tooltipTemplate = data.end
      ? Handlebars.compile(options.tooltip)
      : Handlebars.compile(options.tooltipNoDate);
    var rowData = {
      id: data.id,
      name: data.name,
      class:
        "table__row--" + (isMoratoriumActive ? "moratorium" : "no-moratorium"),
      url: Elab.Utils.getCurrentURL() + Elab.Utils.slugify(data.name),
      weekFilings: numFormat(data.lastWeek),
      cumulativeFilings: numFormat(data.cumulative),
      tooltip: tooltipTemplate({
        date: Elab.Utils.formatDate(data.end),
      }),
      buttonLabel: options.buttonLabel,
    };
    return rowTemplate(rowData);
  }

  function inMoratorium(day, ranges) {
    return ranges.reduce(function(inRange, range) {
      var endDay = d3.timeDay.offset(day, 6)
      return inRange 
        ? true 
        : +day >= +range[0] && +day <= +range[1] && +endDay >= +range[0] && +endDay <= +range[1]
    }, false)
  }

  /**
   * Renders the trend line for the table
   */
  function renderTrendLine(el, data) {
    var width = 64;
    var height = 32;
    var margin = 4;
    // remove latest week from values
    // as it does not reflect the full set of filings
    var localMoratorium = [ data.start, data.end ]
    var cdcMoratorium = [ new Date(2020, 8, 4), new Date(2020, 11, 31) ]
    var moratoriumRanges = +localMoratorium[1] > +cdcMoratorium[0]
      ? [ [ localMoratorium[0], cdcMoratorium[1] ] ] // overlap in moratoriums
      : [ localMoratorium, cdcMoratorium ] // no overlap
    var endLineDate = data.end;
    var values = data.values.filter(function (v, i) {
      return i !== data.values.length - 1;
    });
    console.log(values, moratoriumRanges)
    var moratoriumValues = values.map(function(v, i) {
      var lastWeekDay = d3.timeDay.offset(v[0], -7)
      var startInMoratorium = inMoratorium(v[0], moratoriumRanges)
      var lastWeekInMoratorium = inMoratorium(lastWeekDay, moratoriumRanges)
      if (startInMoratorium || lastWeekInMoratorium)
        return v
      return [ v[0], "NA", "NA" ]
    })
    var noMoratoriumValues = values.map(function(v) { 
      var lastWeekDay = d3.timeDay.offset(v[0], -7)
      var startInMoratorium = inMoratorium(v[0], moratoriumRanges)
      var lastWeekInMoratorium = inMoratorium(lastWeekDay, moratoriumRanges)
      if (!startInMoratorium || !lastWeekInMoratorium)
        return v
      return [ v[0], "NA", "NA" ]
    })
    
    var xExtent = d3.extent(values, function (v) {
      return v[0];
    });
    var xScale = d3.scaleTime().rangeRound([0, width]).domain(xExtent);

    var yExtent = d3.extent(values, function (v) {
      return v[2];
    });
    var yScale = d3
      .scaleLinear()
      .domain(yExtent) // input
      .range([height, 0]); // output

    var area = d3
      .area()
      .defined(function(d) { return !isNaN(d[2]); })
      .x(function (d) {
        return xScale(d[0]);
      })
      .y0(height + 2)
      .y1(function (d) {
        return yScale(d[2]);
      });

    var line = d3
      .line()
      .defined(function(d) { return !isNaN(d[2]); })
      .x(function (d) {
        return xScale(d[0]);
      })
      .y(function (d) {
        return yScale(d[2]);
      })
      .curve(d3.curveMonotoneX);

    var svg = d3
      .select(el)
      .attr("width", width)
      .attr("height", height + margin * 2)
      .append("g")
      .attr("transform", "translate(0," + margin + ")");

    svg
      .append("path")
      .datum(moratoriumValues)
      .attr("class", "trend-line__area trend-line__area--moratorium")
      .attr("d", area);

    svg
      .append("path")
      .datum(moratoriumValues)
      .attr("class", "trend-line__path trend-line__path--moratorium")
      .attr("d", line);

    svg
      .append("path")
      .datum(noMoratoriumValues)
      .attr("class", "trend-line__area trend-line__area--noMoratorium")
      .attr("d", area);

    svg
      .append("path")
      .datum(noMoratoriumValues)
      .attr("class", "trend-line__path trend-line__path--noMoratorium")
      .attr("d", line);
  }

  /**
   * Gets the HTML for the footnote on the index table
   * @param {*} data
   */
  function getFootnoteHtml(data) {
    var dateFormat = d3.timeFormat("%B %d, %Y");
    var html = [];
    html.push(
      "<sup>1</sup> Filings for the week of " +
        dateFormat(data.values[data.values.length - 1][0]) +
        " to " +
        dateFormat(data.updated) +
        ". Filings in the last week may be undercounted as a result of processing delays. These counts will be revised in the following week."
    );
    return html.join(" ");
  }

  /**
   * Initializes the hero counter
   * @param {*} locations
   */
  function initHeroCount(locations) {
    $("#cityCount").html(locations.length);
    var counterTotal = locations.reduce(function (sum, loc) {
      return sum + loc.cumulative;
    }, 0);

    var count = new countUp.CountUp("counterTotal", counterTotal, {
      duration: 3.8,
    });
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  }

  /**
   * Initializes the weekly eviction filing counter,
   * only includes maricopa in the sum if the latest
   * week value is the same as other locations.
   */
  function initWeeklyCount(locations) {
    var lastWeekDate = null;
    // sort a copy of locations so maricopa is not first
    var sorted = locations.slice().sort(function (a, b) {
      return a.city > b.city ? 1 : -1;
    });
    var counterWeek = sorted.reduce(function (sum, loc) {
      var locLastDate = loc.values[loc.values.length - 1][0];
      // track the last week date
      if (!lastWeekDate && loc.id !== "04013") lastWeekDate = locLastDate;
      // only include if the last week matches other rows
      return +lastWeekDate === +locLastDate ? sum + loc.lastWeek : sum;
    }, 0);
    var count2 = new countUp.CountUp("counterWeek", counterWeek, {
      duration: 3.8,
    });
    function startCounter() {
      !count2.error && count2.start();
    }
    Elab.Utils.callOnEnter(
      document.getElementById("counterWeek"),
      startCounter
    );
  }

  /**
   * Creates the index table
   * @param {*} el
   * @param {*} dataUrl
   */
  function initListPage(el, dataUrl, options) {
    var defaultOptions = {
      tooltip: "Eviction moratorium in effect until {{date}}",
      tooltipNoDate: "Eviction moratorium currently in effect",
      buttonLabel: "View Report",
    };
    options = Object.assign(defaultOptions, options);
    var bodyEl = $(el).find(".table__body");
    Elab.Data.loadTableData(dataUrl, function (data) {
      // clear loading
      bodyEl.html("");
      // create rows
      var locations = data;
      locations.forEach(function (city) {
        var html = getRowHtml(city, options);
        bodyEl.append(html);
      });
      // add trend lines
      bodyEl.find(".trend-line").each(function (idx) {
        var id = this.getAttribute("data-visual");
        var cityData = locations.find(function (l) {
          return l.id === id;
        });
        renderTrendLine(this, cityData);
      });
      $('[data-toggle="tooltip"]').tooltip();
      // update the "last updated" text
      $("#lastUpdate span").html(d3.timeFormat("%B %d, %Y")(data[0].updated));
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
      // trigger hero animation
      $(".hero--ets").addClass("hero--start");
      $(".hero--ets").removeClass("hero--loading");
      initHeroCount(locations);
      initWeeklyCount(locations);
    });
  }

  return {
    initListPage: initListPage,
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
