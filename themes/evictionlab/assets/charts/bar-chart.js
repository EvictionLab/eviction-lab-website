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

  function deriveFormatter(format = "") {
    return format.includes("=>") ? new Function(`return ${format}`)() : d3.format(format || ",d");
  }

  function getPaddedExtent(extent, overrideMin, overrideMax) {
    var range = extent[1] - extent[0];
    // add some padding around the extreme y values
    var paddedExtent = [extent[0] - range * 0.05, extent[1] + range * 0.05];
    // unless overridden directly
    if (overrideMin) paddedExtent[0] = parseFloat(overrideMin);
    // if the data is all positive, don't allow the padding to push the lower extent below 0
    else if (extent[0] > 0 && paddedExtent[0] < 0) paddedExtent[0] = 0;

    if (overrideMax) paddedExtent[1] = parseFloat(overrideMax);
    return paddedExtent;
  }

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, , yTicks, yFormat, title }
   * @param {Array<Object>} lineData
   */
  function createFigure(root, data, dataOptions, lineData) {
    const yFormat = deriveFormatter(dataOptions.yFormat);
    const yTooltipFormat = deriveFormatter(dataOptions.yTooltipFormat || dataOptions.yFormat);
    const parseDate = d3.timeParse("%m/%d/%Y");
    var chart = new Elab.ChartBuilder(root, data, dataOptions);
    chart
      // adds y axis, pads it if no extend is passed
      .addAxisY({
        selector: ySelector,
        adjustExtent: (extent) => getPaddedExtent(extent, dataOptions.yMin, dataOptions.yMax),
        ticks: dataOptions.yTicks || 5,
        tickFormat: yFormat,
      });
    if (dataOptions.axis !== "time") {
      // adds band axis from the x data
      chart
        .addBarAxis({
          selector: xSelector,
          adjustLabels: function (selection) {
            if (dataOptions.centerLabels) {
              selection.selectAll(".tick text").attr("text-anchor", "middle").attr("dy", "1em");
            } else {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-66)")
                .attr("dx", "-1em")
                .attr("dy", "0em");
            }
          },
        })
        // adds the bars
        .addBandedBars({
          selector: barSelector,
          classSelector: function (d) {
            return d[3];
          },
          maxBarWidth: dataOptions.maxBarWidth,
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
          correctMonthWidth: dataOptions.timeUnit === "month",
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

    if (lineData.length) {
      // color the added lines
      $(root).addClass("chart__body--highlight5");
      const lineExtent = d3.extent(lineData, (d) => d.y);
      chart.yScaleLines = d3
        .scaleLinear()
        .rangeRound([chart.getInnerHeight(), 0])
        .domain(getPaddedExtent(lineExtent, dataOptions.lineYMin, dataOptions.lineYMax))
        .nice();

      // // Add the right-hand y-axis for the line data using chart.yScaleLines
      // const lineYFormat = deriveFormatter(dataOptions.lineYFormat || ",.0f");
      // chart.selections["yAxisLines"] = chart.selections["base"]
      //   .append("g")
      //   .attr("class", "chart__axis chart__axis--y-lines");
      // const yAxisLines = d3.axisRight(chart.yScaleLines).tickSize(-chart.getInnerWidth());
      // chart.selections["yAxisLines"]
      //   .attr("transform", "translate(" + chart.getInnerWidth() + ",0)")
      //   .transition()
      //   .duration(1000)
      //   .call(yAxisLines.tickFormat(lineYFormat));

      // Plot the line over the bars using the new chart.yScaleLines scale
      chart.addLines({
        selector: () => [
          lineData.map((d) => {
            if (dataOptions.timeUnit !== "month") return [d.x, d.y];
            let shiftedDate = new Date(d.x);
            shiftedDate.setDate(shiftedDate.getDate() + 15);
            return [shiftedDate, d.y];
          }),
        ],
        yScale: chart.yScaleLines,
      });
    }
    if (dataOptions.xLabel) {
      chart.addAxisLabel({
        label: dataOptions.xLabel,
        position: "bottom",
      });
    }
    if (dataOptions.yLabel) {
      chart.addAxisLabel({
        label: dataOptions.yLabel,
        position: "left",
      });
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

    const files = [
      {
        id: "bars",
        url: options.data,
        shaper: (data) =>
          data.map((d) => ({
            x: xParse(d[options.x]),
            y: yParse(d[options.y]),
            barClass: d[options.barClass],
          })),
      },
    ];
    if (options.lineData) {
      // add marker data to files for loading
      files.push({
        id: "lines",
        url: options.lineData,
        shaper: (data) =>
          data.map((d) => ({
            x: xParse(d[options.lineX || options.x]),
            y: yParse(d[options.lineY || options.y]),
          })),
      });
    }

    Elab.Utils.loadAll(files, callback);
  }

  /**
   * Creates the intro chart
   */
  function init(rootEl, options) {
    if (!options || typeof options !== "object")
      throw new Error("linechart: no options object provided");
    if (!options.data) throw new Error("linechart: must provide file URL in options");
    options.x = options.x || "x";
    options.y = options.y || "y";
    loadData(options, function (dataMap) {
      createFigure(rootEl, dataMap.bars, options, dataMap.lines || []);
    });
  }

  return {
    init: init,
  };
})(Elab);
