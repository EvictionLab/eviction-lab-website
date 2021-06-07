"use strict";

/**
 * HISTOGRAM CHART MODULE
 * ----
 * Creates a histogram
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.Histogram = (function (Elab) {
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

  function createHistogram(data, thresholds) {
    return d3
      .histogram()
      .value(function (d) {
        return d.x;
      })
      .domain(
        d3.extent(data, function (d) {
          return d.x;
        })
      )
      .thresholds(thresholds || 40);
  }

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, , yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    const histogram = createHistogram(data, dataOptions.thresholds);
    const bins = histogram(data);
    var yExtent = d3.extent(bins, function (b) {
      return b.length;
    });
    if (dataOptions.yMin) yExtent[0] = Number(dataOptions.yMin);
    if (dataOptions.yMax) yExtent[1] = Number(dataOptions.yMax);
    var xExtent = d3.extent(data, function (d) {
      return d.x;
    });
    if (dataOptions.xMin) xExtent[0] = Number(dataOptions.xMin);
    if (dataOptions.xMax) xExtent[1] = Number(dataOptions.xMax);
    console.log({ dataOptions, xExtent });
    var chart = new Elab.ChartBuilder(root, data, dataOptions);
    chart
      // adds y axis, pads it if no extend is passed
      .addAxisY({
        extent: yExtent,
        yLabel: dataOptions.yLabel,
        ticks: dataOptions.yTicks || 5,
        tickFormat: d3.format(dataOptions.yFormat || ",d"),
      })
      .addAxisX({
        extent: xExtent,
        xLabel: dataOptions.xLabel,
        adjustLabels: function (selection) {
          selection
            .selectAll(".tick text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-45)")
            .attr("dx", "-0.5em")
            .attr("dy", "1em");
        },
        labelMargin: dataOptions.xLabelMargin || "4em",
      })
      // adds the bars
      .addHistogram({
        renderTooltip: function (hoverData) {
          const total = hoverData.length;
          const range = hoverData.x0 + " - " + hoverData.x1;
          const template = dataOptions.tooltipTemplate || "{range}: {total}";
          const tooltipString = template
            .replace("{total}", total)
            .replace("{range}", range);

          return (
            '<div class="tooltip__item" style="max-width: 100px; white-space: normal">' +
            tooltipString +
            "</div>"
          );
        },
      });
    return chart.render();
  }

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    d3.csv(options.data, function (data) {
      var result = data.map(function (d) {
        return {
          x: Number(d[options.x]),
          ...d,
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
      throw new Error("histogram: no options object provided");
    if (!options.data)
      throw new Error("histogram: must provide file URL in options");
    options.x = options.x || "x";
    loadData(options, function (data) {
      createFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
