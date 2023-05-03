"use strict";

/**
 * BAR CHART MODULE
 * ----
 * Creates a base bar chart (no grouping)
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.BarChart = (function (Elab) {
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
  var barSelector = function (data) {
    return data.map(function (d) {
      return [d.x, d.y, d.name, d.barClass];
    });
  };

  function renderTooltip(tooltip) {
    return (
      '<h1 class="tooltip__title">' +
      tooltip.title +
      "</h1>" +
      '<div class="tooltip__item">' +
      "<span> " +
      tooltip.value +
      "</span>" +
      "</div>"
    );
  }

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, , yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    const yFormat = d3.format(dataOptions.yFormat || ",d");
    const yTooltipFormat = d3.format(
      dataOptions.yTooltipFormat || dataOptions.yFormat || ",d"
    );
    const parseDate = d3.timeParse("%m/%d/%Y");
    var chart = new Elab.ChartBuilder(root, data, dataOptions);
    chart
      // adds y axis, pads it if no extend is passed
      .addAxisY({
        selector: ySelector,
        adjustExtent: function (extent) {
          var range = extent[1] - extent[0];
          const paddedExtent = [
            extent[0] - range * 0.05,
            extent[1] + range * 0.05,
          ];
          if (dataOptions.yMin) paddedExtent[0] = parseFloat(dataOptions.yMin);
          if (dataOptions.yMax) paddedExtent[1] = parseFloat(dataOptions.yMax);
          return paddedExtent;
        },
        ticks: dataOptions.yTicks || 5,
        tickFormat: yFormat,
      });
    if (dataOptions.axis !== "time") {
      // adds band axis from the x data
      chart
        .addBarAxis({
          selector: xSelector,
          adjustLabels: function (selection) {
            selection
              .selectAll(".tick text")
              .attr("text-anchor", "end")
              .attr("transform", "rotate(-66)")
              .attr("dx", "-1em")
              .attr("dy", "0em");
          },
        })
        // adds the bars
        .addBandedBars({
          selector: barSelector,
          classSelector: function (d) { return d[3] },
          renderTooltip: function (hoverData) {
            const tooltip = {
              title: hoverData[0],
              value: yTooltipFormat(hoverData[1]),
            };
            return renderTooltip(tooltip);
          },
        });
    } else {
      // for month timeFrame, if last data point is for 5/1 axis should extend to 6/1
      var endXOffset = dataOptions.timeUnit === "month" ? 31 : 9;
      chart
        .addTimeAxis({
          adjustExtent: function (extent) {
            return [d3.timeDay.offset(extent[0], -2), d3.timeDay.offset(extent[1], endXOffset)];
          },
          adjustLabels: function (selection) {
            selection
              .selectAll(".tick text")
              .attr("text-anchor", "end")
              .attr("transform", "translate(" + chart.monthToPixels(1) / 2 + ",0) rotate(-50)")
              .attr("dx", "-0.25em")
              .attr("dy", "0.333em");
            selection.selectAll(".tick:last-child text").attr("opacity", 0);
          },
          ticks: d3.timeMonth.every(1),
          tickFormat: d3.timeFormat("%b '%y"),
        })
        .addBars({
          selector: barSelector,
          renderTooltip: function (hoverData) {
            var label = "";
            if (dataOptions.xTooltipFormat) {
              label = d3.timeFormat(dataOptions.xTooltipFormat)(hoverData[0]);
            } else if (dataOptions.timeUnit === "month") {
              label = d3.timeFormat("%B %Y")(hoverData[0]);
            } else {
              var dayFormat = d3.timeFormat("%b %e");
              // creates week label, eg "Mar 1 - Mar 8"
              label = [hoverData[0], d3.timeDay.offset(hoverData[0], 7)]
                .map(function (d) {
                  return dayFormat(d);
                })
                .join(" - ");
            }
            const tooltip = {
              title: label,
              value: yTooltipFormat(hoverData[1]),
            };
            return renderTooltip(tooltip);
          },
        })
        .addMarkLine({
          marks: dataOptions.mark.split(";").map(function (d) {
            return parseDate(d);
          }),
        });
    }
    if (dataOptions.xLabel) {
      chart.addAxisLabel({
        label: dataOptions.xLabel,
        position: "bottom",
      })
    }
    if (dataOptions.yLabel) {
      chart.addAxisLabel({
        label: dataOptions.yLabel,
        position: "left",
      })
    }
    return chart.render();
  }

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    const parseDate = d3.timeParse("%m/%d/%Y");
    const xParse = function (d) {
      return options.axis === "time" ? parseDate(d) : d;
    };
    const yParse = function (d) {
      return parseFloat(d);
    };
    d3.csv(options.data, function (data) {
      var result = data.map(function (d) {
        return {
          x: xParse(d[options.x]),
          y: yParse(d[options.y]),
          barClass: d[options.barClass],
        };
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
    loadData(options, function (data) {
      createFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
