"use strict";

var Elab = Elab || {};

/**
 * LINE CHART MODULE
 * ----
 * Creates the intro figure and populates data into
 * placeholders for the intro section.
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.LineChart = (function (Elab) {
  /**
   * Creates a comparator that brings values provided in `highlighted`
   * to the front of the array
   * @param {*} highlighted
   * @param {*} key
   * @returns {Array}
   */
  function createHighlightComparator(highlighted, key) {
    key = key || "name";
    var hl =
      highlighted && highlighted.length ? highlighted.slice().reverse() : [];
    return function (a, b) {
      var aHighlightIndex = hl.indexOf(a[key]);
      var bHighlightIndex = hl.indexOf(b[key]);
      if (aHighlightIndex > -1 && bHighlightIndex > -1) {
        // both are highlighted, same item
        if (aHighlightIndex === bHighlightIndex) return 0;
        // both are highlighted, a is higher
        return aHighlightIndex > bHighlightIndex ? -1 : 1;
      }
      if (aHighlightIndex > -1) return 1;
      if (bHighlightIndex > -1) return -1;
      if (a[key] === b[key]) return 0;
      return a[key] > b[key] ? 1 : -1;
    };
  }

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
   * Default formatter for X axis ( shows week range: "08/15 - 08/21" )
   * @param {*} d
   */
  var xFormat = function (d) {
    var d1 = function (d) {
      return d3.timeFormat("%m/%e")(d).replace(" ", "");
    };
    return d1(d) + " - " + d1(d3.timeDay.offset(d, 6));
  };

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

  /**
   * Selects the line data set from the chart data
   * @param {*} data
   */
  var lineSelector = function (data) {
    var grouped = Elab.ChartUtils.groups(data, function (d) {
      return d.name;
    }).map(function (d) {
      return d[1];
    });
    return grouped.map(function (group) {
      return group.map(function (d) {
        return [d.x, d.y, d.name];
      });
    });
  };

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, groupBy, curve, highlight, xTicks, xFormat, yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    var highlighted = dataOptions.highlight
      ? dataOptions.highlight.split(";").reverse()
      : null;
    // sort data so highlighted items are at the end of the array in the same order as the "highlight" string
    if (highlighted) {
      var compare = createHighlightComparator(highlighted, "name");
      data.sort(compare);
      // add number to highlight class to root
      $(root).addClass("chart__body--highlight" + highlighted.length);
    }
    var chart = new Elab.ChartBuilder(root, data, dataOptions);
    return (
      chart
        // adds y axis, using max of the trend line value or bar value
        .addAxisY({
          selector: ySelector,
          adjustExtent: function (extent) {
            var range = extent[1] - extent[0];
            return [extent[0] - range * 0.05, extent[1] + range * 0.05];
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
            : dataOptions.xTicks === "week"
            ? xFormat
            : undefined,
          adjustLabels: function (selection) {
            if (window.innerWidth < 540) {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-30)");
            } else {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", null)
                .attr("transform", null);
            }
          },
        })
        // adds the trend line
        .addLines({
          selector: lineSelector,
          curve: dataOptions.curve ? d3[dataOptions.curve] : null,
        })
        // adds a tooltip with the provided render function
        // .addTooltip(showTooltip, hideTooltip)
        // renders the chart
        .addHoverLine()
        .addHoverDot()
        .addVoronoi({
          renderTooltip: function (hoverData) {
            var numFormat = d3.format(".0%");

            function getWeekTooltip() {
              var weekFormat = d3.timeFormat("%b %d");
              var start = weekFormat(xSelector(hoverData));
              var end = weekFormat(d3.timeDay.offset(xSelector(hoverData), 6));
              return {
                title: hoverData.name,
                xValue: start + " - " + end,
                yValue: numFormat(ySelector(hoverData)),
              };
            }

            function getMonthTooltip() {
              const monthFormat = d3.timeFormat(
                dataOptions.xTooltipFormat || dataOptions.xFormat || "%B"
              );
              return {
                title: hoverData.name,
                xValue: monthFormat(xSelector(hoverData)),
                yValue: numFormat(ySelector(hoverData)),
              };
            }

            function getDefaultTooltip() {
              const dateFormat = d3.timeFormat(
                dataOptions.xFormat || "%B %d, %Y"
              );
              return {
                title: hoverData.name,
                xValue: dateFormat(xSelector(hoverData)),
                yValue: numFormat(ySelector(hoverData)),
              };
            }

            const tooltip =
              dataOptions.xTicks === "week"
                ? getWeekTooltip()
                : dataOptions.xTicks === "month"
                ? getMonthTooltip()
                : getDefaultTooltip();

            return (
              '<h1 class="tooltip__title">' +
              tooltip.title +
              "</h1>" +
              '<div class="tooltip__item">' +
              "<span>" +
              tooltip.xValue +
              ":</span>" +
              "<span> " +
              tooltip.yValue +
              "</span>" +
              "</div>"
            );
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
          return {
            name: d[options.groupBy],
            x: parseDate(d[options.x]),
            y: parseFloat(d[options.y]),
          };
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
      throw new Error("linechart: no options object provided");
    if (!options.data)
      throw new Error("linechart: must provide file URL in options");
    options.x = options.x || "x";
    options.y = options.y || "y";
    options.groupBy = options.groupBy || "name";
    loadData(options, function (data) {
      createFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
