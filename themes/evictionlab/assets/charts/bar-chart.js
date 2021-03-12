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
   * Parses a margin string into an array of pixel values
   * @param {*} marginString
   * @returns {Array<Integer>} [top, right, bottom, left]
   */
  function getMarginFromString(marginString) {
    if (!marginString || typeof marginString !== "string")
      return [8, 8, 104, 40];
    const parts = marginString.split(" ").map(function (m) {
      return Math.round(Number(m));
    });
    if (parts.length === 4) return parts;
    if (parts.length === 3) return [parts[0], parts[1], parts[2], parts[1]];
    if (parts.length === 2) return [parts[0], parts[1], parts[0], parts[1]];
    if (parts.length === 1) return [parts[0], parts[0], parts[0], parts[0]];
    return [8, 8, 104, 40];
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

  /**
   * Selects the line data set from the chart data
   * @param {*} data
   */
  var barSelector = function (data) {
    return data.map(function (d) {
      return [d.x, d.y, d.name];
    });
  };

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, , yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    var svg = $(root).find("svg")[0];
    var rect = root.getBoundingClientRect();
    var options = Object.assign(
      {
        width: rect.width,
        height: Math.max(rect.height, 320),
        margin: getMarginFromString(dataOptions.margin),
      },
      dataOptions
    );
    const yFormat = d3.format(dataOptions.yFormat || ",d");
    const yTooltipFormat = d3.format(
      dataOptions.yTooltipFormat || dataOptions.yFormat || ",d"
    );

    var chart = new Elab.ChartBuilder(svg, data, options);
    return (
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
            if (dataOptions.yMin) paddedExtent[0] = parseFloat(yMin);
            if (dataOptions.yMax) paddedExtent[1] = parseFloat(yMax);
            return paddedExtent;
          },
          ticks: dataOptions.yTicks || 5,
          tickFormat: yFormat,
        })
        // adds band axis from the x data
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
          renderTooltip: function (hoverData) {
            const tooltip = {
              title: hoverData[0],
              value: yTooltipFormat(hoverData[1]),
            };
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
          },
        })
        .render()
    );
  }

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    const xParse = function (d) {
      return d;
    };
    const yParse = function (d) {
      return parseFloat(d);
    };
    d3.csv(options.data, function (data) {
      var result = data.map(function (d) {
        return {
          x: xParse(d[options.x]),
          y: yParse(d[options.y]),
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
