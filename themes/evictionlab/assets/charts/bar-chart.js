"use strict";

var Elab = Elab || {};

/**
 * BAR CHART MODULE
 * ----
 * Creates a base bar chart (no grouping)
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.BasicBarChart = (function (Elab) {

  /**
   * Default formatter for X axis ( shows value )
   * @param {*} d
   */
  var xFormat = function (d) { return d };

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
   * @param {Object} dataOptions { margin, x, y, groupBy, curve, highlight, xTicks, xFormat, yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    
    var svg = $(root).find("svg")[0];
    var rect = root.getBoundingClientRect();
    var options = Object.assign(
      {
        width: rect.width,
        height: Math.max(rect.height, 320),
        margin: [8, 8, 104, 38], // TODO: set via options
      },
      dataOptions
    );
    const yFormat = d3.format(dataOptions.yFormat || ",d")

    var chart = new Elab.ChartBuilder(svg, data, options);
    return (
      chart
        // clips lines or bars that extend past data area
        .addClipPath()
        // adds a border around the chart area
        .addFrame()
        // adds y axis, using max of the trend line value or bar value
        .addAxisY({
          selector: ySelector,
          adjustExtent: function (extent) {
            
            var range = extent[1] - extent[0];
            const paddedExtent = [extent[0] - range * 0.05, extent[1] + range * 0.05];
            if (dataOptions.yMin) paddedExtent[0] = parseFloat(yMin)
            if (dataOptions.yMax) paddedExtent[1] = parseFloat(yMax)
            return paddedExtent
          },
          ticks: dataOptions.yTicks || 5,
          tickFormat: yFormat,
        })
        // adds time axis from dates in the dataset
        .addBarAxis({
          selector: xSelector,
          adjustLabels: function (selection) {
            selection
                .selectAll(".tick text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-66)")
                .attr("dx", "-1em")
                .attr("dy", "0em");
            // if (window.innerWidth < 540) {
            //   selection
            //     .selectAll(".tick text")
            //     .attr("text-anchor", "end")
            //     .attr("transform", "rotate(-30)");
            // } else {
            //   selection
            //     .selectAll(".tick text")
            //     .attr("text-anchor", null)
            //     .attr("transform", null);
            // }
          },
        })
        // adds the trend line
        .addBandedBars({
          selector: barSelector,
          renderTooltip: function (hoverData) {
            const tooltip = {
              title: hoverData[0],
              value:  yFormat(hoverData[1])
            }
            return (
              '<h1 class="tooltip__title">' + tooltip.title + "</h1>" +
              '<div class="tooltip__item">' +
              "<span> " + tooltip.value + "</span>" +
              "</div>"
            );
          },
        })
        .render()
    );
  }

  /**
   * Initializes the chart figure and handles resizing
   * @param {*} root
   * @param {*} cityData
   */
  function initFigure(root, data, options) {
    // create figure
    var figure = createFigure(root, data, options);
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
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    const xParse = function(d) { return d }
    const yParse = function(d) { return parseFloat(d) }
    d3.csv(options.data, function (data) {
      var result = data
        .map(function (d) {
          return {
            x: xParse(d[options.x]),
            y: yParse(d[options.y]),
          };
        })
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
      initFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
