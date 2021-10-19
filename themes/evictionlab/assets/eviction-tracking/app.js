"use strict";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

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
    var value = getComputedStyle(document.body).getPropertyValue(varName); // fallback to map value if no CSS var set

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
    options = options || {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.25,
    };

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

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function getMoratoriumRanges(data) {
    return data.start.map(function (d, i) {
      return [data.start[i], data.end[i]];
    });
  }

  function getCdcMoratoriumRange() {
    return [new Date(2020, 8, 4), new Date(2021, 7, 26)]; // ended aug 26
  }

  function monthAxisFormatter(date, index) {
    var prevDate = d3.timeMonth.offset(date, -1);
    var yearFormat = d3.timeFormat("%y");
    var monthFormat = d3.timeFormat("%b");
    var monthYearFormat = d3.timeFormat("%b '%y");
    return yearFormat(prevDate) === yearFormat(date) && index > 0
      ? monthFormat(date)
      : monthYearFormat(date);
  } // group an array of objects by a property

  function group(data, property) {
    return d3
      .nest()
      .key(function (d) {
        return d[property];
      })
      .entries(data);
  }

  return {
    group: group,
    getCssVar: getCssVar,
    getCurrentURL: getCurrentURL,
    slugify: slugify,
    createTwitterLink: createTwitterLink,
    createFacebookLink: createFacebookLink,
    formatLabel: formatLabel,
    formatDate: formatDate,
    callOnEnter: callOnEnter,
    debounce: debounce,
    getMoratoriumRanges: getMoratoriumRanges,
    getCdcMoratoriumRange: getCdcMoratoriumRange,
    monthAxisFormatter: monthAxisFormatter,
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
    var parser = d3.timeParse("%m/%Y");
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
        x: Elab.Utils.monthAxisFormatter,
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
      {
        y: 1,
        label: "average",
      },
      {
        y: 1,
        label: "filings",
        labelOnly: true,
      },
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
        var rawParse = d3.timeParse("%d/%m/%Y");
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
            ? ", <br />as of " +
              d3.timeFormat("%B %e")(rawParse(d._raw.extras["month_last_day"]))
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
        text: "Filings Relative to Average, by Neighborhood Racial/Ethnic Majority",
      },
    ],
    markLines: [
      {
        y: 1,
        label: "average",
      },
      {
        y: 1,
        label: "filings",
        labelOnly: true,
      },
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
 *  - loadCityTable(dataUrl, callback)
 *  - loadStateTable(dataUrl, callback)
 *  - loadAllTables(cityDataUrl, stateDataUrl, callback)
 */

Elab.Data = (function (Elab) {
  var parseDate = d3.timeParse("%m/%d/%Y"); // parse week values from the row

  var parseWeekValues = function parseWeekValues(row) {
    return [
      parseDate(row["week_date"]),
      parseInt(row["week_filings"]),
      parseFloat(row["week_trend"]),
    ];
  };
  /**
   * adds additional metrics and outputs data as an array
   * @param {*} data
   */

  var shapeResult = function shapeResult(data) {
    return Object.values(data).map(function (d) {
      // make sure values are sorted from oldest to newest
      d["values"].sort(function (a, b) {
        return +a[0] > +b[0] ? 1 : -1;
      });
      d["cumulative"] = d["values"].reduce(function (sum, v) {
        return sum + v[1];
      }, 0);
      d["lastWeek"] = d["values"][d["values"].length - 1][1];
      return d;
    });
  };
  /**
   * takes the fetched CSV data, returns an array of cities with parsed data
   * and required data attributes
   * @param {*} data
   */

  var shapeCityData = function shapeCityData(data) {
    var result = {}; // create an object containing data by identifier

    data.forEach(function (d) {
      if (!result[d.id]) {
        // key doesn't exist in the object, add it
        result[d.id] = {
          id: d.id,
          name: d.name,
          city: d.name.split(",")[0],
          values: [parseWeekValues(d)],
          start: d["start_moratorium_date"].split(";").map(parseDate),
          end: d["end_moratorium_date"].split(";").map(parseDate),
          updated: parseDate(d["data_date"]),
          subgroups: d["subgroups"] ? d["subgroups"].split(";") : null,
          subgroup_values: d["subgroup_values"]
            ? d["subgroup_values"].split(";").map(function (d) {
                return parseInt(d);
              })
            : null,
        };
      } else {
        // key already exists, push values for the given week
        result[d.id].values.push(parseWeekValues(d));
      }
    });
    return shapeResult(result);
  };
  /**
   * Takes the state level CSV data and parses / shapes it into
   * an array for the ETS pages
   * @param {*} data
   */

  var shapeStateData = function shapeStateData(data) {
    var result = {}; // create an object containing data by identifier

    data.forEach(function (d) {
      if (!result[d.id]) {
        // key doesn't exist in the object, add it
        result[d.id] = {
          id: d.id,
          name: d.name,
          values: [parseWeekValues(d)],
          start: d["start_moratorium_date"].split(";").map(parseDate),
          end: d["end_moratorium_date"].split(";").map(parseDate),
        };
      } else {
        // key already exists, push values for the given week
        result[d.id].values.push(parseWeekValues(d));
      }
    });
    return shapeResult(result);
  };
  /**
   * Generic function to load data, shape it, then fire a callback
   * @param {*} dataUrl
   * @param {*} shaper
   * @param {*} callback
   */

  function loadData(dataUrl, shaper, callback) {
    d3.csv(dataUrl, function (data) {
      if (!data) {
        console.error("unable to load data from " + dataUrl);
        return;
      }

      var result = shaper(data);
      callback && callback(result);
    });
  }
  /**
   * Loads and parses the CSV for the city table
   */

  function loadCityTable(dataUrl, callback) {
    return loadData(dataUrl, shapeCityData, callback);
  }
  /**
   * Loads and parses the CSV for the state table
   */

  function loadStateTable(dataUrl, callback) {
    return loadData(dataUrl, shapeStateData, callback);
  }
  /**
   * Loads and parses the CSV for the city table
   */

  function loadAllTables(cityTableUrl, stateTableUrl, callback) {
    loadCityTable(cityTableUrl, function (cityData) {
      loadStateTable(stateTableUrl, function (stateData) {
        callback([cityData, stateData]);
      });
    });
  }

  return {
    loadData: loadData,
    loadCityTable: loadCityTable,
    loadStateTable: loadStateTable,
    loadAllTables: loadAllTables,
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
    }); // x and y [min, max], padded based on config value

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
    var result = {
      _raw: data,
    }; // process config, add default values

    config = makeParseConfig(config); // grab data points for each of the groups

    var itemParser =
      config.groupType === "col" ? parseColumnItems : parseRowItems;
    result["items"] = itemParser(data, config); // x and y [min, max], padded based on config value

    result["extents"] = parseExtents(result["items"], config); // parse the area to mark

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
        var id = d.name.split("/")[0]; // classnames for the tooltip row

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
      left: 48,
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
      var monthFormat = d3.timeFormat("%m/%Y");
      var monthParse = d3.timeParse("%m/%Y"); // get data grouped by x value

      var groupedData = groupItems(data.items, function (d) {
        return monthFormat(d.x);
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
        .data(groupedData); // enter each group

      var groupEls = group
        .enter()
        .append("g")
        .attr("class", "chart__bar-group")
        .merge(group)
        .attr("transform", function (d) {
          var date = monthParse(d.id);
          return "translate(" + context.x(date) + ",0)";
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
          var date = monthParse(d.id);
          return context.x(date) - 4;
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
        }); // remove bars groups

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
      var rotateLabels = function rotateLabels(selection) {
        selection
          .selectAll(".tick text")
          .attr("text-anchor", "end")
          .attr("transform", "rotate(-50)")
          .attr("dx", "-0.5em")
          .attr("dy", "0em");
      }; // setup x axis

      var xAxis = d3
        .axisBottom(context.x)
        .ticks(config.view.xTicks)
        .tickFormat(config.format.x); // setup y axis

      var yAxis = d3
        .axisLeft(context.y)
        .ticks(config.view.yTicks)
        .tickSize(-context.width)
        .tickFormat(config.format.y); // y axis

      context.els.yAxis.transition().duration(1000).call(yAxis); // x axis

      context.els.xAxis
        .attr("transform", "translate(0," + context.height + ")")
        .transition()
        .duration(1000)
        .call(xAxis)
        .call(rotateLabels.bind(context.els.xAxis));
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
      config.legend && renderLegend(config.legend, data.items, config); // get parent width and height

      var rect = els.root.node().parentNode.getBoundingClientRect(); // position the root

      els.root.attr(
        "transform",
        "translate(" + margin.left + "," + margin.top + ")"
      ); // account for margins

      var width = rect.width - margin.left - margin.right;
      var height = rect.height - margin.top - margin.bottom; // extents

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
        .domain(xBands); // setup scales

      var x = xBandScale;
      var y = d3.scaleLinear().rangeRound([height, 0]).domain([0, yExtent[1]]); // context passed to render functions

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
      parsedData = parseData(source, chartConfig); // use debounced render when updating, for performance

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
      root = d3.select(elementId).append("g"); // create chart

      var chart = Chart(data, root, config); // resize the chart when the window size changes

      window.addEventListener("resize", function () {
        chart.render();
      }); // send chart to callback

      if (callback) callback(chart);
    });
  }

  function init(rootEl, config) {
    var rootEl = $(rootEl);
    var chartEl = rootEl.find(".chart")[0]; // add button to toggle state

    var countToggleEl = rootEl.find(".toggle--count");
    var avgToggleEl = rootEl.find(".toggle--avg");
    if (config.id === "avg") avgToggleEl.addClass("toggle--active");
    if (config.id === "race") countToggleEl.addClass("toggle--active"); // move footnotes into proper container

    var contentEl = rootEl.find(".details");
    var footnoteEl = rootEl.find(".footnote");
    footnoteEl.append(contentEl.find("ol")); // setup default chart config

    var configs = Elab.Config.getConfig(config.id, config.csv);
    var currentConfig = configs[0]; // create chart and bind click event to toggle state

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
  var formatPercent = d3.format(",.0%");
  var formatSmallPercent = d3.format(",.2%");
  var formatCount = d3.format(",d");
  var parseDate = d3.timeParse("%d/%m/%Y");

  function isRate(key) {
    return key.indexOf("rate") > -1 || key.indexOf("pct") > -1;
  }

  function isAvgDiff(key) {
    return key.indexOf("diff") > -1;
  }

  function isDate(key) {
    return key.indexOf("date") > -1;
  }

  function isCount(key) {
    return key.indexOf("count") > -1 || key.indexOf("filings") > -1;
  }

  function getFormatter(prop) {
    if (isRate(prop)) return formatSmallPercent;
    if (isAvgDiff(prop)) return formatPercent;
    return formatCount;
  }
  /**
   * Returns an object of % racial demographics, sorted from largest to smallest
   * @param {*} data
   */

  function getPercentBreakdown(data) {
    function sortValue(a, b) {
      var key_a = "pct_" + a.toLowerCase();
      var key_b = "pct_" + b.toLowerCase();
      if (data[key_a] > data[key_b]) return -1;
      if (data[key_a] < data[key_b]) return 1;
      return 0;
    }

    var result = {};
    ["White", "Black", "Latinx"].sort(sortValue).forEach(function (race, i) {
      var key = "pct_" + race.toLowerCase();
      result[race] =
        (data[key] || data[key] === 0) && data[key] !== "null"
          ? formatSmallPercent(data[key])
          : "unknown";
    });
    return result;
  }

  var ToggleTemplate = Handlebars.compile(
    "<div class='button-group'>" +
      "{{#each metrics}}" +
      "<button class='toggle toggle--{{@key}}' data-key='{{@key}}'>{{this}}</button>" +
      "{{/each}}" +
      "</div>"
  );
  var LegendLabelTemplate = Handlebars.compile(
    "{{#each labels}}" +
      "<span class='legend__gradient-label'>{{this}}</span>" +
      "{{/each}}"
  );
  var TooltipTemplate = Handlebars.compile(
    "<h1>{{name}}</h1>" +
      '<div class="map__tooltip-row">' +
      "{{#if value}}" +
      "{{{value}}}" +
      "{{else}}" +
      "Data not available." +
      "{{/if}}" +
      "{{#if hasPercents}}" +
      "<hr />" +
      "{{#each percents}}" +
      "<div>{{@key}}: <span class='percent'>{{this}}</span></div>" +
      "{{/each}}" +
      "{{else}}" +
      "<br /><em>Racial majority: " +
      "{{#if majority}}" +
      "{{majority}}" +
      "{{else}}" +
      "unknown" +
      "</em>" +
      "{{/if}}" +
      "{{/if}}" +
      "</div>"
  );

  function getTooltipValue(feature, prop) {
    if (!feature.properties[prop] && feature.properties[prop] !== 0)
      return null;
    var formatter = getFormatter(prop);
    var value = formatter(feature.properties[prop]);

    if (isAvgDiff(prop)) {
      var distance = feature.properties[prop] - 1;
      value = formatter(Math.abs(distance));
      var dir = distance === 0 ? "mid" : distance > 0 ? "up" : "down";
      return dir === "mid"
        ? "Filings about average."
        : "Filings <span class='value--" +
            dir +
            "'>" +
            dir +
            " " +
            value +
            "</span> from average.";
    }

    if (isRate(prop)) return "filings against " + value + " of renters";
    if (isCount(prop)) return value + " eviction filings";
    return value;
  }
  /**
   * Parses map data values
   * @param {*} data
   */

  function parseValues(data) {
    return data.map(function (d) {
      return Object.keys(d).reduce(function (result, key) {
        // float cols
        if (isRate(key) || isAvgDiff(key)) result[key] = parseFloat(d[key]);
        // int cols
        else if (isCount(key)) result[key] = parseInt(d[key]);
        // no parsing by default
        else if (isDate(key)) result[key] = parseDate(d[key]);
        else result[key] = d[key];
        return result;
      }, {});
    });
  }
  /**
   * Adds data from the data rows to the GeoJSON properties
   * @param {*} geojson
   * @param {*} data
   */

  function addDataToGeojson(geojson, data, config) {
    // create an object wth keys for each GEOID that has corresponding data points
    var dataDict = data.reduce(function (dict, item) {
      dict[item.id] = item;
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
    return Object.assign(geojson, {
      features: newFeatures,
    });
  }
  /**
   * Pulls color values from CSS variables
   * @param {*} prefix variable prefix (e.g. "--choro")
   * @param {*} start color start number (e.g. 3 = "--choro3")
   * @param {*} end color end number
   */

  function getColorsFromCss(prefix, start, end) {
    start = start || 1;
    end = end || 5;
    var result = [];

    for (var i = start; i <= end; i++) {
      result.push(Elab.Utils.getCssVar(prefix + i));
    }

    return result;
  }
  /**
   * Gets an array of colors to use as ranges in a map style
   * @param {*} prop
   * @param {*} range
   * @param {*} prefix
   */

  function getLayerColors(prop, range, prefix) {
    var mid = (range[1] - range[0]) / 2;
    var colors = getColorsFromCss(prefix); // diverging

    if (isAvgDiff(prop)) {
      return [
        range[0],
        colors[0],
        (mid - range[0]) / 2,
        colors[1],
        mid,
        colors[2],
        mid + (range[1] - mid) / 2,
        colors[3],
        range[1],
        colors[4],
      ];
    } // continuous

    return [range[0], colors[2], mid, colors[3], range[1], colors[4]];
  }
  /**
   * Gets a CSS gradient for the given prop
   */

  function getCssGradient(prop) {
    var colors = getColorsFromCss("--choro");

    if (isAvgDiff(prop)) {
      return (
        "linear-gradient(to right," +
        colors[0] +
        ", " +
        colors[1] +
        " 25%, " +
        colors[2] +
        " 50%, " +
        colors[3] +
        " 75%, " +
        colors[4] +
        ")"
      );
    }

    return (
      "linear-gradient(to right," +
      colors[2] +
      ", " +
      colors[3] +
      " 50%," +
      colors[4] +
      ")"
    );
  }

  function getGradientLabels(prop, range) {
    if (isAvgDiff(prop)) {
      return ["-100%", "average", "100%"];
    }

    if (isRate(prop)) {
      return ["0%", formatPercent(range[1])];
    }

    return [formatCount(range[0]), formatCount(range[1])];
  }

  function addChoroplethFillLayer(map, prop, range) {
    var fillColor = ["interpolate", ["linear"], ["get", prop]].concat(
      getLayerColors(prop, range, "--choro")
    );
    map.addLayer(
      {
        id: "choropleth",
        type: "fill",
        source: "choropleth",
        layout: {},
        filter: [
          "any",
          ["to-boolean", ["get", prop]],
          ["==", 0, ["get", prop]],
        ],
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
  }

  function addChoroplethStrokeLayer(map, prop, range) {
    var strokeColor = ["interpolate", ["linear"], ["get", prop]].concat(
      getLayerColors(prop, range, "--choroStroke")
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
   * Creates the MapboxGL map
   * @param {*} el
   * @param {*} geojsonUrl
   * @param {*} dataUrl
   */

  function createMap(el, config) {
    var rootEl = $(el);
    var mapEl = rootEl.find(".map")[0];
    var geojsonUrl = config.geojson;
    var dataUrl = config.csv;
    var hoveredStateId = null;
    var allData = null;
    var geojsonData = null;
    var currentProp = null;
    var allProps = config.metrics;
    var layersAdded = false;
    var usBounds = [
      [-129.54443, 18.235058],
      [-63.802242, 52.886017],
    ];
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
      container: mapEl,
      style: "mapbox://styles/eviction-lab/ck8za8qns07451jpm48xn6tq2",
      bounds: usBounds,
      maxBounds: usBounds,
    });
    /**
     * Show tooltip and set outline of feature when hovering
     * @param {*} e
     */

    function handleHover(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";
      renderTooltip(e.features[0], e);

      if (e.features.length > 0) {
        if (hoveredStateId) {
          map.setFeatureState(
            {
              source: "choropleth",
              id: hoveredStateId,
            },
            {
              hover: false,
            }
          );
        }

        hoveredStateId = e.features[0].id;
        map.setFeatureState(
          {
            source: "choropleth",
            id: hoveredStateId,
          },
          {
            hover: true,
          }
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
          {
            source: "choropleth",
            id: hoveredStateId,
          },
          {
            hover: false,
          }
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
          map.resize();
          map.fitBounds(bounds, {
            padding: 16,
          });
        }

        Elab.Utils.callOnEnter(map.getCanvasContainer(), zoomToLocation);
        d3.csv(dataUrl, function (data) {
          if (!data) {
            console.error("unable to load data from " + dataUrl);
            return;
          }

          allData = parseValues(data); // check available data metrics

          allProps = Object.keys(allProps)
            .filter(function (key) {
              return data[0].hasOwnProperty(key);
            })
            .reduce(function (result, current) {
              result[current] = allProps[current];
              return result;
            }, {});
          currentProp = Object.keys(allProps)[0];
          geojsonData = addDataToGeojson(geojson, allData, config);
          map.addSource("choropleth", {
            type: "geojson",
            data: geojsonData,
          });
          map.on("mousemove", "choropleth", handleHover);
          map.on("mouseleave", "choropleth", handleHoverOut);
          renderToggles();
          update();
        });
      });
    }

    function getRange(prop) {
      if (!allData) return [0, 1];
      if (isAvgDiff(prop)) return [0, 2];
      var extent = d3.extent(allData, function (d) {
        return d[prop];
      });
      if (isRate(prop)) return [0, Math.max(extent[1], 0.01)];
      return [0, Math.max(extent[1], 1)];
    }

    function update() {
      var range = getRange(currentProp);

      if (layersAdded) {
        map.removeLayer("choropleth");
        map.removeLayer("choropleth-stroke");
      }

      addChoroplethFillLayer(map, currentProp, range);
      addChoroplethStrokeLayer(map, currentProp, range);
      layersAdded = true;
      renderLegend();
    }

    function renderToggles() {
      var container = rootEl.find(".section__toggle");

      if (Object.keys(allProps).length < 2) {
        // only one option, no need to toggle
        container.remove();
        return;
      }

      var html = ToggleTemplate({
        metrics: allProps,
      });
      container.html(html);
      var buttons = container.find("button");

      function setButtonClasses() {
        buttons.each(function () {
          var button = $(this);
          var key = button.data("key");
          var active = key === currentProp;
          button.toggleClass("toggle--active", active);
        });
      }

      buttons.click(function () {
        var key = $(this).data("key");
        currentProp = key;
        update();
        setButtonClasses();
      });
      setButtonClasses();
    }

    function renderLegendLabel() {
      if (!allData) return;
      var mapDate = allData[0][config.dateCol];
      var date = d3.timeFormat("%B %e, %Y")(mapDate);
      var label = "since " + date;
      if (isRate(currentProp))
        label = "% of rentals with eviction filings, since " + date;
      if (isAvgDiff(currentProp))
        label = "% of filings compared to average, since " + date;
      if (isCount(currentProp))
        label = "Number of eviction filings, since " + date;

      if (mapDate) {
        rootEl.find(".legend__date").html(label);
      }
    }

    function renderLegend() {
      renderLegendLabel();
      var gradientContainer = rootEl.find(".legend__gradient");
      var labelContainer = rootEl.find(".legend__gradient-labels");
      gradientContainer.css("background-image", getCssGradient(currentProp));
      var range = getRange(currentProp);
      var html = LegendLabelTemplate({
        labels: getGradientLabels(currentProp, range),
      });
      labelContainer.html(html);
    }

    function renderTooltip(feature, e) {
      var tooltipContainer = $(tooltip);
      var hasPercents =
        feature.properties.hasOwnProperty("pct_white") ||
        feature.properties.hasOwnProperty("pct_black") ||
        feature.properties.hasOwnProperty("pct_latinx");
      var html = TooltipTemplate({
        name: feature.properties.NAME
          ? feature.properties.NAME.split(",")[0]
          : "Unknown",
        value: getTooltipValue(feature, currentProp),
        majority: feature.properties["racial_majority"],
        percents: getPercentBreakdown(feature.properties),
        hasPercents: hasPercents,
      });
      var flipped = e.originalEvent.pageX > window.innerWidth - 240;
      var space = flipped ? -32 : 32;
      tooltipContainer
        .toggleClass("chart__tooltip--flip", flipped)
        .css({
          display: "block",
          left: e.originalEvent.pageX + space + "px",
          top: e.originalEvent.pageY + 32 + "px",
        })
        .html(html);
    } // disable map zoom when using scroll

    map.scrollZoom.disable(); // disable map rotation using right click + drag

    map.dragRotate.disable(); // disable map rotation using touch rotation gesture

    map.touchZoomRotate.disableRotation();
    map.scrollZoom.setWheelZoomRate(0.02); // Default 1/450

    map.on("wheel", handleWheel);
    map.on("load", handleLoad);
    map.addControl(new mapboxgl.NavigationControl());
    return map;
  }

  function init(el, config) {
    if (el && config.geojson && config.csv) {
      return createMap(el, config);
    }

    throw new Error("could not initialize map section");
  }

  return {
    init: init,
    createMap: createMap,
  };
})(Elab);
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
  var showIntroTooltip = function showIntroTooltip(chart, xHovered) {
    var bisectX = d3.bisector(function (d) {
      return d[0];
    }).left; // midpoint of the current hovered week

    var xPosition = d3.timeDay.offset(d3.timeWeek.floor(xHovered), 3.5); // index of currently hovered week

    var dataIndex = bisectX(chart.data, xHovered) - 1; // data point for the hovered week

    var weekStart = chart.data[dataIndex]; // exit early if no data point or if out of range

    if (!weekStart || +xPosition > chart.xScale.domain()[1]) return; // create tooltip

    var title = "Eviction Filings";
    var dayFormat = d3.timeFormat("%b %e");
    var weekLabel = [weekStart[0], d3.timeDay.offset(weekStart[0], 7)]
      .map(function (d) {
        return dayFormat(d);
      })
      .join(" - ");
    var items = [
      {
        idx: 0,
        name: weekLabel,
        value: weekStart[1],
      },
    ];
    var context = {
      els: {
        tooltip: chart.selections["tooltip"],
      },
    };
    window.Elab.Chart.renderBarTooltip(title, items, context, undefined, "top"); // position hover line

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

  var hideIntroTooltip = function hideIntroTooltip(chart) {
    chart.getSelection("hover-line").style("display", "none");
    chart.getSelection("tooltip").style("display", "none");
  };
  /**
   * Selects the line data set from the chart data
   * @param {*} data
   */

  var selectLineData = function selectLineData(data) {
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

  var selectBarsData = function selectBarsData(data) {
    return data.map(function (d) {
      return [d[0], d[1]];
    });
  };
  /**
   * Creates the label paths for the markers
   * (last week filings and total filings)
   * @param {*} chart
   */

  var createLabelMarkers = function createLabelMarkers(chart) {
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
          " v 108 h -46"
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
          "M " + barPosition + "," + chart.getInnerHeight() + " v 72 h -24"
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
    var options = {
      margin: [32, 12, 104, 40],
    };
    var chart = new Elab.ChartBuilder(root, seriesData, options);
    chart // adds y axis, using max of the trend line value or bar value
      .addAxisY({
        selector: function selector(d) {
          return Math.max(d[2], d[1]);
        },
        adjustExtent: function adjustExtent(extent) {
          return [0, extent[1] + extent[1] * 0.05];
        },
        ticks: 4,
        tickFormat: d3.format(",d"),
      }) // adds time axis from dates in the dataset
      .addTimeAxis({
        selector: function selector(d) {
          return d[0];
        },
        adjustExtent: function adjustExtent(extent) {
          return [
            d3.timeDay.offset(extent[0], -2),
            d3.timeDay.offset(extent[1], 9),
          ];
        },
        adjustLabels: function adjustLabels(selection) {
          selection
            .selectAll(".tick text")
            .attr("text-anchor", "end")
            .attr(
              "transform",
              "translate(" + this.monthToPixels(1) / 2 + ",0) rotate(-50)"
            )
            .attr("dx", "-0.25em")
            .attr("dy", "0.333em");
          selection.selectAll(".tick:last-child text").attr("opacity", 0);
        },
        ticks: d3.timeMonth.every(1),
        tickFormat: Elab.Utils.monthAxisFormatter,
      }); // adds local moratorium areas

    cityData.start.forEach(function (d, i) {
      chart = chart.addArea([cityData.start[i], cityData.end[i]], {
        areaId: "area" + i,
        patternId: "stripes",
        addPattern: i === 0,
      });
    }); // adds federal moratorium

    return chart
      .addArea(Elab.Utils.getCdcMoratoriumRange(), {
        areaId: "cdcArea",
        patternId: "cdcStripes",
        angle: -45,
      }) // adds the bars for weekly filings
      .addBars({
        selector: selectBarsData,
      }) // adds the trend line
      .addLines({
        selector: selectLineData,
        curve: d3.curveMonotoneX,
      }) // adds a tooltip with the provided render function
      .addTooltip(showIntroTooltip, hideIntroTooltip) // adds a custom element with markers for the last bar and chart span
      .addCustom(createLabelMarkers) // renders the chart
      .render();
  }

  function getMoratoriumRange(data) {
    var dateFormat = d3.timeFormat("%b %e, %Y");
    var ranges = Elab.Utils.getMoratoriumRanges(data);
    if (!ranges || ranges.length === 0) return "";
    return ranges
      .map(function (dates) {
        if (!dates[0]) return "No local moratorium";
        return dates
          .map(function (d) {
            return d ? dateFormat(d) : "Ongoing";
          })
          .join(" - ");
      })
      .join("<br />");
  }
  /**
   * Inserts the data for the location into the placeholders
   */

  function initDataValues(cityData) {
    var numFormat = d3.format(",d");
    var moratorium = getMoratoriumRange(cityData);
    $("#evictionMoratorium").html(moratorium);
    $("#filingsLastWeek").html(
      "<span>" + numFormat(cityData.lastWeek) + "</span> filings last week*"
    );
    $("#filingsCumulative").html(
      "<span>" +
        numFormat(cityData.cumulative) +
        "</span> filings since Mar 15, '20"
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
    cityData.subgroup_values = cityData.subgroup_values.map(function (v) {
      return numFormat(v);
    });
    var templateData = Object.assign({}, cityData, {
      cumulative: numFormat(cityData.cumulative),
    });
    var template = Handlebars.compile(
      "<p>Of the {{cumulative}} filings in {{city}} since March 15th, " +
        "{{#each subgroups}}" +
        "{{#if @last}}" +
        " and {{lookup ../subgroup_values @index}} were filed in {{this}}." +
        "{{else}}" +
        "{{lookup ../subgroup_values @index}} were filed in {{this}}{{#if ../subgroup_values.[2]}}, {{/if}}" +
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
    Elab.Data.loadCityTable(dataUrl, function (data) {
      var cityData = data.find(function (d) {
        return d.id === locationId;
      });

      if (!cityData) {
        $(".intro").addClass("intro--error");
        throw new Error("no data found for city");
      }

      $(".intro").removeClass("intro--loading");
      createIntroFigure(root, cityData);
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
  var dateFormat = d3.timeFormat("%B %d, %Y");
  /**
   * Returns the HTML for a row in the index table
   * @param {*} data
   */

  function getRowHtml(data, options) {
    var numFormat = d3.format(",d");
    var rowTemplate = $("#rowTemplate").html();
    var rowTemplate = Handlebars.compile(
      '<tr class="table__row {{class}}" data-name="{{name}}" data-href="{{url}}">' +
        '<td class="table__cell table__cell--name" title="{{name}}">' +
        "<div>" +
        "<span>{{name}}</span>" +
        '<img class="icon icon--moratorium" src="/img/el-medallion.svg" data-toggle="tooltip" data-placement="right" title="{{tooltip}}" />' +
        "</div></td>" +
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
    var moratoriumRanges = Elab.Utils.getMoratoriumRanges(data);
    var isMoratoriumActive = inMoratorium(Date.now(), moratoriumRanges);
    var endDate = data.end && data.end[data.end.length - 1]; // grab the last date for moratorium protections

    var tooltipTemplate = endDate
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
        date: Elab.Utils.formatDate(endDate),
      }),
      buttonLabel: options.buttonLabel,
    };
    return rowTemplate(rowData);
  }

  /**
   * Checks if the provided day falls within the moratorium range
   * @param {*} day 
   * @param {*} ranges 
   * @returns 
   */
  function inMoratorium(day, ranges) {
    var isDayInRanges = ranges.reduce(function (inRange, range) {
      // get the end day of the week
      var endDay = d3.timeDay.offset(day, 7);
      // if day was in earlier range, return true
      if (inRange) return true
      // if no start / end, then pass along the value
      if (!range[0] && !range[1]) return inRange;
      // if range only has a start date and the day is after that date, return true
      if (!range[1] && +day >= +range[0]) return true
      // if range has both a start and an end date
      return +day >= +range[0] &&
            +day <= +range[1] &&
            +endDay >= +range[0] &&
            +endDay <= +range[1];
    }, false);
    return isDayInRanges;
  }

  function mergeRanges(ranges) {
    if (!(ranges && ranges.length)) {
      return [];
    } // Stack of final ranges

    var stack = []; // Sort according to start value

    ranges.sort(function (a, b) {
      return a[0] - b[0];
    }); // Add first range to stack

    stack.push(ranges[0]);
    ranges.slice(1).forEach(function (range, i) {
      var top = stack[stack.length - 1];

      if (top[1] < range[0]) {
        // No overlap, push range onto stack
        stack.push(range);
      } else if (top[1] < range[1]) {
        // Update previous range
        top[1] = range[1];
      }
    });
    return stack;
  }
  /**
   * Renders the trend line for the table
   */

  function renderTrendLine(el, data) {
    var width = 64;
    var height = 32;
    var margin = 4; // remove latest week from values
    // as it does not reflect the full set of filings

    var localMoratoriums = Elab.Utils.getMoratoriumRanges(data);
    var cdcMoratorium = Elab.Utils.getCdcMoratoriumRange();
    var moratoriumRanges = mergeRanges(
      localMoratoriums.concat([cdcMoratorium])
    );
    var values = data.values.filter(function (v, i) {
      return i !== data.values.length - 1;
    }); // get values that fall within the moratorium ranges

    var moratoriumValues = values.map(function (v, i) {
      var lastWeekDay = d3.timeDay.offset(v[0], -7);
      var startInMoratorium = inMoratorium(v[0], moratoriumRanges);
      var lastWeekInMoratorium = inMoratorium(lastWeekDay, moratoriumRanges);
      if (startInMoratorium || lastWeekInMoratorium) return v;
      return [v[0], "NA", "NA"];
    }); // get values that fall outside the moratorium ranges

    var noMoratoriumValues = values.map(function (v) {
      var lastWeekDay = d3.timeDay.offset(v[0], -7);
      var startInMoratorium = inMoratorium(v[0], moratoriumRanges);
      var lastWeekInMoratorium = inMoratorium(lastWeekDay, moratoriumRanges);
      if (!startInMoratorium || !lastWeekInMoratorium) return v;
      return [v[0], "NA", "NA"];
    });
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
      .defined(function (d) {
        return !isNaN(d[2]);
      })
      .x(function (d) {
        return xScale(d[0]);
      })
      .y0(height + 2)
      .y1(function (d) {
        return yScale(d[2]);
      });
    var line = d3
      .line()
      .defined(function (d) {
        return !isNaN(d[2]);
      })
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
   * Initializes the hero counter
   * @param {*} locations
   */

  function initHeroCount(cities, states) {
    // trigger hero animation
    $(".hero--ets").addClass("hero--start");
    $(".hero--ets").removeClass("hero--loading");
    $("#cityCount").html(cities.length);
    $("#stateCount").html(states.length);
    var stateIds = states.map(function (s) {
      return s.id;
    }); // filter out cities that have state totals

    var noStateCities = cities.filter(function (c) {
      return stateIds.indexOf(c.id.substring(0, 2)) === -1;
    });
    var cityTotal = noStateCities.reduce(function (sum, loc) {
      return sum + loc.cumulative;
    }, 0);
    var stateTotal = states.reduce(function (sum, loc) {
      return sum + loc.cumulative;
    }, 0);
    var counterTotal = cityTotal + stateTotal;
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

  function initWeeklyCount(cities, states) {
    var lastWeekDate = null;
    var lastWeekDateStates = null; // array of state IDs

    var stateIds = states.map(function (s) {
      return s.id;
    });
    var noStateCities = cities.filter(function (c) {
      return stateIds.indexOf(c.id.substring(0, 2)) === -1;
    }); // sort a copy of cities so maricopa is not first

    var sorted = noStateCities.slice().sort(function (a, b) {
      return a.city > b.city ? 1 : -1;
    });
    var counterCities = sorted.reduce(function (sum, loc) {
      var locLastDate = loc.values[loc.values.length - 1][0]; // track the last week date

      if (!lastWeekDate && loc.id !== "04013") lastWeekDate = locLastDate; // only include if the last week matches other rows

      return +lastWeekDate === +locLastDate ? sum + loc.lastWeek : sum;
    }, 0);
    var counterStates = states.reduce(function (sum, loc) {
      var locLastDate = loc.values[loc.values.length - 1][0]; // track the last week date

      if (!lastWeekDateStates) lastWeekDateStates = locLastDate; // only include if the last week matches other rows

      return +lastWeekDate === +locLastDate ? sum + loc.lastWeek : sum;
    }, 0);
    var countTotal = counterCities + counterStates;
    var count2 = new countUp.CountUp("counterWeek", countTotal, {
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

  function initCityTable(cities, options) {
    var tableEl = document.querySelector(".table--cities");
    var bodyEl = $(tableEl).find(".table__body"); // clear loading

    bodyEl.html(""); // add table rows

    cities.forEach(function (city) {
      var html = getRowHtml(city, options);
      bodyEl.append(html);
    }); // add trend lines

    bodyEl.find(".trend-line").each(function (idx) {
      var id = this.getAttribute("data-visual");
      var cityData = cities.find(function (l) {
        return l.id === id;
      });
      renderTrendLine(this, cityData);
    }); // default sort the table

    $(tableEl).tablesorter({
      sortList: [[0, 0]],
    }); // setup click handler on rows

    $(tableEl)
      .find(".table__row")
      .click(function () {
        var url = $(this).data("href");

        if (url) {
          window.location.href = url;
        }
      });
  }

  function initStateTable(states, options) {
    var tableEl = document.querySelector(".table--states");
    var bodyEl = $(tableEl).find(".table__body"); // clear loading

    bodyEl.html(""); // add table rows

    states.forEach(function (state) {
      var html = getRowHtml(state, options);
      bodyEl.append(html);
    }); // add trend lines

    bodyEl.find(".trend-line").each(function (idx) {
      var id = this.getAttribute("data-visual");
      var stateData = states.find(function (l) {
        return l.id === id;
      });
      renderTrendLine(this, stateData);
    }); // default sort the table

    $(tableEl).tablesorter({
      sortList: [[0, 0]],
    }); // setup click handler on rows

    $(tableEl)
      .find(".table__row")
      .click(function () {
        var url = $(this).data("href");

        if (url) {
          window.location.href = url;
        }
      });
  }
  /**
   * Creates the index table
   * @param {*} el
   * @param {*} dataUrl
   */

  function initListPage(options) {
    var defaultOptions = {
      tooltip: "Eviction moratorium in effect until {{date}}",
      tooltipNoDate: "Eviction moratorium currently in effect",
      buttonLabel: "View Report",
    };
    options = Object.assign(defaultOptions, options);
    var cityData = options.cityData;
    var stateData = options.stateData;
    Elab.Data.loadAllTables(cityData, stateData, function (data) {
      var cities = data[0];
      var states = data[1];
      initHeroCount(cities, states);
      initWeeklyCount(cities, states); // update the "last updated" text

      $("#lastUpdate span").html(d3.timeFormat("%B %d, %Y")(cities[0].updated));
      initCityTable(cities, options);
      initStateTable(states, options); // populate table footnotes

      var footnoteEl = $("#tableFootnotes");
      var row = cities[0]; // all rows should be the same as far as dates go, so grab first row

      var startDate = dateFormat(row.values[row.values.length - 1][0]);
      var endDate = dateFormat(row.updated);
      footnoteEl.html(
        footnoteEl
          .html()
          .replace("{{start}}", startDate)
          .replace("{{end}}", endDate)
      ); // initialize any tooltips

      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  return {
    initListPage: initListPage,
  };
})(Elab);

Elab.Ranking = (function (Elab) {
  var statTemplate = Handlebars.compile(
    '\n    <p class="stat">\n      <span class="stat__value">{{value}}</span>\n      <span class="stat__label">{{{label}}}</span>\n    </p>\n  '
  );
  var itemTemplate = Handlebars.compile(
    '\n  <li class="ranking__item">\n    <div class="ranking__label">\n      <p class="ranking__primary">{{primary}}</p>\n      <p class="ranking__secondary">{{secondary}}</p>\n    </div>\n    <div class="ranking__value">\n      <div class="ranking__bar" style="width: {{percent}}"></div>\n      <div class="ranking__bar-label">\n        <span>{{value}}</span> \n        <span>filings</span>\n      </div>\n    </div>\n  </li>'
  );
  var buttonGroupTemplate = Handlebars.compile(
    '\n  <button class="toggle" data-group="{{group}}">\n    {{label}}\n  </button>\n  '
  );
  var dateFormatter = d3.timeFormat("%B %d, %Y");
  var dateParse = d3.timeParse("%Y-%m-%d");
  var percentFormat = d3.format(".2%");
  var $el; // jquery wrapped root element

  var groups; // object containing groups

  var activeGroup; // current group key (from groups object)

  var renderCount = 0; // number of times the list has been rendered (used for first render conditionals)
  /** Load the data, set default group, trigger first render */

  function init(elId, config) {
    var csv = config.csv;
    id = config.id;
    $el = $(elId);

    Elab.Data.loadData(csv, function (data) {
      addEndDate(data);
      data = shapeTopEvictions(data);
      groups = Elab.Utils.group(data, "group");
      activeGroup = groups[0].key;
      renderButtonGroups();
      createRankingList();
      renderEvictorsStat();
      Elab.Utils.callOnEnter($el[0], renderRankingList);
    });
  }

  function addEndDate(data) {
    var endDateVal = data[0].end_date;
    if(!endDateVal) return;
    var endDateArr = endDateVal.split('-');
    var endDate = parseInt(endDateArr[1])+"-"+parseInt(endDateArr[2])+"-"+endDateArr[0];
    $el.find(".button-group").before(
      "<p><em>Data is current through <time>"+endDate+"</time>.</em></p>"
    );
  }

  /** Shapes the data from the CSV into proper format */

  function shapeTopEvictions(rows) {
    return rows.map(function (row) {
      return {
        primary: row.xstreet_clean,
        secondary: row.xplaintiff,
        value: parseInt(row.filings),
        group: row.time_period,
        top100: parseFloat(row.top100),
      };
    });
  }
  /** Renders the top 100 buildings stat */

  function renderEvictorsStat() {
    var format = d3.format(".1%");
    $el.find(".stat").remove();
    var sibling = $el.find(".details > *:first-child");
    var groupData = groups.find(function (group) {
      return group.key === activeGroup;
    }).values;
    var templateData = {
      value: format(groupData[0].top100),
      label:
        "of all eviction filings come from the <strong>top 100</strong> buildings",
    };
    sibling.after(statTemplate(templateData));
  }

  /**
   * Render buttons for the available groups, and bind click handlers.
   */
  function renderButtonGroups() {
    var buttons = groups
      .map(function (group) {
        return {
          label: "Since ".concat(dateFormatter(dateParse(group.key))),
          group: group.key,
        };
      })
      .map(buttonGroupTemplate)
      .map($);
    var container = $el.find(".button-group");
    container.empty();
    buttons.forEach(function (button) {
      button.data("group") === activeGroup
        ? button.addClass("toggle--active")
        : button.removeClass("active");
      button.click(function () {
        var newGroup = $(this).data("group");
        if (activeGroup === newGroup) return;
        activeGroup = newGroup;
        renderButtonGroups();
        renderRankingList();
        renderEvictorsStat();
      });
      container.append(button);
    });
  }

  /** Creates the initial DOM for the ranking list */
  function createRankingList() {
    var groupData = groups.find(function (group) {
      return group.key === activeGroup;
    }).values;

    // first render, create the DOM stucture
    var container = $el.find(".ranking");
    var items = groupData.map(function (item) {
      return {
        value: null,
        primary: "loading",
        secondary: "loading",
        percent: "0%",
      };
    });
    items.map(itemTemplate).forEach(function (item) {
      container.append(item);
    });
  }

  /** Updates the DOM elements in the ranking list */
  function renderRankingList() {
    var groupData = groups.find(function (group) {
      return group.key === activeGroup;
    }).values;
    var max = d3.max(groupData, function (d) {
      return d.value;
    });
    var items = groupData
      .map(function (item) {
        return _objectSpread(
          _objectSpread({}, item),
          {},
          {
            value: item.value,
            percent: percentFormat(item.value / max),
          }
        );
      })
      .sort(function (a, b) {
        return b.value - a.value;
      });
    var container = $el.find(".ranking");

    // update the DOM children and animate to new states
    container.children().each(function (index, node) {
      var el = $(node);
      var item = items[index];
      el.find(".ranking__primary")
        .delay(100 * index)
        .animate(
          {
            opacity: 0,
          },
          200,
          function () {
            $(this).text(item.primary);
          }
        )
        .animate(
          {
            opacity: 1,
          },
          200
        );
      el.find(".ranking__secondary")
        .delay(110 * index)
        .animate(
          {
            opacity: 0,
          },
          200,
          function () {
            $(this).text(item.secondary);
          }
        )
        .animate(
          {
            opacity: 1,
          },
          200
        );
      el.find(".ranking__bar-label")
        .delay(200 + 120 * index)
        .animate(
          {
            opacity: 1,
          },
          200
        );
      el.find(".ranking__bar-label span:first-child")
        .delay(200 + 120 * index)
        .animate(
          {
            opacity: 1,
          },
          200,
          function () {
            $(this).text(item.value);
          }
        );
      (index !== 0 || renderCount === 0) &&
        el
          .find(".ranking__bar")
          .delay(200 + 120 * index)
          .animate(
            {
              width: "".concat(item.percent),
            },
            400
          );
    });
    renderCount++;
  }

  return {
    init: init,
  };
})(Elab);

Elab.MedianFilings = (function (Elab) {
  var legendItemTemplate = Handlebars.compile(
    '\n    <div class="legend-item legend-item--{{index}} legend-item--{{label}}">\n      <div class="legend-item__color"></div>\n      <div class="legend-item__label">{{label}}</div>\n    </div>\n  '
  );
  var dateParse = d3.timeParse("%Y-%m-%d");
  var dollarFormat = d3.format("$.2s");
  var $el; // jquery wrapped root element
  var config;
  var data;

  /** Load the data, set default group, trigger first render */
  function init(elId, options) {
    var csv = options.csv;
    config = options;
    id = options.id;
    $el = $(elId);
    Elab.Data.loadData(csv, shapeLineData, function (result) {
      data = result.sort(function (a, b) {
        return a.name - b.name;
      });

      Elab.Utils.callOnEnter($el[0], render);
    });
  }

  /** Shapes the data from the CSV into proper format */
  function shapeLineData(rows) {
    return rows.map(function (row) {
      var date = dateParse(row[config.xCol]);
      return {
        name: "Median Claim Amount",
        x: date,
        y: Number(row[config.yCol]),
      };
    });
  }

  /** Renders the top 100 buildings stat */
  function renderLineChart() {
    Elab.LineChart.createFigure($el.find(".visual__chart")[0], data, {
      x: "x",
      y: "y",
      groupBy: "name",
      xFormat: Elab.Utils.monthAxisFormatter,
      yFormat: dollarFormat,
      xTooltipFormat: d3.timeFormat("%B %Y"),
      yTooltipFormat: d3.format("$.2f"),
    });
  }

  /**
   * Render buttons for the available groups, and bind click handlers.
   */
  function renderLegend() {
    var groups = Elab.Utils.group(data, "name")
      .map(function (group) {
        return group.key;
      })
      .sort(function (a, b) {
        return b - a;
      });
    var container = $el.find(".legend");
    if (!container || container.length === 0) return;
    container.empty();
    groups.forEach(function (group, index) {
      var item = legendItemTemplate({
        index: index,
        label: group,
      });
      container.append(item);
    });
  }

  function render() {
    renderLineChart();
    renderLegend();
  }

  return {
    init: init,
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
    var rootEl = $(el); // move footnotes into proper space

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

    if (type === "ranking") {
      return Elab.Ranking.init(rootEl[0], config);
    }

    if (type === "median_filings") {
      return Elab.MedianFilings.init(rootEl[0], config);
    }
  }

  return {
    init: init,
  };
})(Elab);
