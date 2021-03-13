"use strict";

var Elab = Elab || {};

/**
 * AREA STACK CHART MODULE
 * ----
 * Creates the intro figure and populates data into
 * placeholders for the intro section.
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.StackAreaChart = (function (Elab) {
  /**
   * Gets X ticks based on type
   * @param {string} type [day, week, month, year]
   */
  function getXTicks(type) {
    switch (type) {
      case "day":
        return d3.timeDay.every(1);
      case "week":
        return d3.timeWeek.every(1);
      case "month":
        return d3.timeMonth.every(1);
      case "year":
        return d3.timeYear.every(1);
      default:
        return d3.timeWeek.every(1);
    }
  }

  /**
   * Selector for X values from data point
   * @param {*} d
   */
  var xSelector = function (d) {
    return d.x;
  };

  /**
   * Selector for Y values from data point
   * @param {*} d
   */
  var ySelector = function (d) {
    return d.y;
  };

  var getSeries = function (data, options) {
    return d3.stack().keys(options.groups)(data);
  };

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, groupBy, curve, highlight, xTicks, xFormat, yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    var chart = new Elab.ChartBuilder(root, data, dataOptions);
    return (
      chart
        // adds y axis, using max of the trend line value or bar value
        .addAxisY({
          adjustExtent: function () {
            const series = getSeries(data, dataOptions);
            console.log("series", series, series[0].data, dataOptions.groups);
            return [0, d3.max(series, (d) => d3.max(d, (d) => d[1]))];
          },
          ticks: dataOptions.yTicks || 5,
          tickFormat: d3.format(dataOptions.yFormat || ",d"),
        })
        // adds time axis from dates in the dataset
        .addTimeAxis({
          selector: xSelector,
          ticks: dataOptions.xTicks ? getXTicks(dataOptions.xTicks) : undefined,
          tickFormat: dataOptions.xFormat
            ? d3.timeFormat(dataOptions.xFormat)
            : undefined,
        })
        .addStackArea({
          series: getSeries(data, dataOptions),
          groups: dataOptions.groups,
        })
        .render()
    );
  }

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    var parseDate = d3.timeParse("%m/%d/%Y");
    d3.csv(options.data, function (data) {
      var result = data
        .map(function (d) {
          const total = Math.max(Math.random(), 0.5) * 0.25;
          return options.groups.reduce(
            function (obj, groupCol) {
              obj[groupCol] = (parseFloat(d[groupCol] || 0) / 100) * total;
              return obj;
            },
            {
              x: parseDate(d[options.x]),
            }
          );
        })
        .sort(function (a, b) {
          return +a.x - +b.x;
        });
      callback && callback(result);
    });
  }

  /**
   * Creates the intro chart
   */
  function init(rootEl, options) {
    if (!options || typeof options !== "object")
      throw new Error("stack-area-chart: no options object provided");
    if (!options.data)
      throw new Error("stack-area-chart: must provide file URL in options");
    options.x = options.x || "x";
    options.groups = options.groups && options.groups.split(";");
    loadData(options, function (data) {
      createFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
