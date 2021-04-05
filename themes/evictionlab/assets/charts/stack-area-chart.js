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
   * Returns a function that takes the chart data and returns a line series
   * @param {*} data
   */
  var getLineSelector = function (options) {
    var sum = []; // track totals
    return function (data) {
      var result = options.groups.map(function (group) {
        return data.map(function (d, i) {
          var base = sum[i] || 0;
          sum[i] = base + d[group];
          return [d.x, sum[i], group];
        });
      });
      return result.reverse();
    };
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
            var series = getSeries(data, dataOptions);
            var yDataMax = d3.max(series, function (d) {
              return d3.max(d, function (d) {
                return d[1];
              });
            });
            var extent = [];
            if (dataOptions.yMin) extent[0] = parseFloat(dataOptions.yMin);
            if (dataOptions.yMax) extent[1] = parseFloat(dataOptions.yMax);
            var result = [extent[0] || 0, extent[1] || yDataMax];
            return result;
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
          adjustLabels: function (selection) {
            if (window.innerWidth < 600) {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-66)")
                .attr("dx", "-1em")
                .attr("dy", "0em");
            } else {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(0)")
                .attr("dx", "0")
                .attr("dy", "1em");
            }
          },
        })
        .addStackArea({
          series: getSeries(data, dataOptions),
          groups: dataOptions.groups,
        })
        // adds the trend line
        .addLines({
          selector: getLineSelector(dataOptions),
          curve: false,
          delay: 1,
          duration: 1,
        })
        .addHoverLine()
        .addHoverRect({
          renderTooltip: function (hoverData) {
            var xFormat = dataOptions.xFormat
              ? d3.timeFormat(dataOptions.xFormat)
              : d3.timeFormat("%m/%d/%Y");
            var yFormat = dataOptions.yTooltipFormat
              ? d3.format(dataOptions.yTooltipFormat)
              : dataOptions.yFormat
              ? d3.format(dataOptions.yFormat)
              : d3.format(".1f");
            var title = xFormat(hoverData.x);
            var templateStr = dataOptions.tooltipTemplate || "{{label}}: {{value}}";
            var values = dataOptions.groups
              .map(function (group, i) {
                var label = dataOptions.groupLabels[i]
                var value = yFormat(hoverData[group])
                var html = templateStr
                  .replace("{{label}}", label)
                  .replace("{{value}}", value)
                  .replace("{{_percent}}", hoverData[group+'_percent'])
                return (
                  '<div class="tooltip__item">' +
                  html +
                  "</div>"
                );
              })
              .reverse()
              .join(" ");
            return '<h1 class="tooltip__title">' + title + "</h1>" + values;
          },
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
          return options.groups.reduce(
            function (obj, groupCol) {
              obj[groupCol] = parseFloat(d[groupCol] || 0);
              return obj;
            },
            Object.assign(d, {
              x: parseDate(d[options.x]),
            })
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
