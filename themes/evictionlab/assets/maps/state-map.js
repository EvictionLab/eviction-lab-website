"use strict";

/**
 * STATE MAP MODULE
 * ----
 * Creates a base bar chart (no grouping)
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.StateMap = (function (Elab) {

  function shapeStateId(value) {
    if (value.length === 2) return value;
    if (value.length === 1) return "0" + value;
    throw new Error("state-map: invalid ID provided for state");
  }

  /** Makes a unique identifier */
  function makeId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
      

  function StateMap(root, data, dataOptions) {

    // stores width of the root DOM element (.svg-map__body)
    var containerWidth;
    // svg selection for map
    var svg;
    // svg selection for legend
    var legend;
    // path function for drawing geojson
    var path;
    // projection for geojson
    var projection;
    // geojson features
    var features;
    // tooltip selection
    var tooltip;
    // linear scale for colors
    var ramp;
    // array of colors for the choropleths
    var colors;
    // minimum value for scale
    var minVal;
    // maximum value for scale
    var maxVal;
    // format string for values (passed to d3.format)
    var valueFormat;
    // template for rendering tooltip value
    var valueTemplate;
    // number of ticks for scale
    var ticks;
    // hovered featue
    var hovered;
    var legendGradient;
    var legendColorScale;
    var legendAxis;

    /**
     * Displays the tooltip for the given data
     * @param {*} e 
     * @param {*} data 
     */
    function showTooltip(e, data) {
      tooltip.classed("svg-map__tooltip--show", true);
      var topOffset = e.clientY;
      var rect = tooltip.node().getBoundingClientRect();
      var xPos = Math.min(
        window.innerWidth - rect.width / 2 - 12,
        Math.max(12 + rect.width / 2, e.clientX)
      );
      var valueString = valueTemplate.replace("{{value}}", valueFormat(data.value))
      var html = "<span>" + data.name + "</span><span>" + valueString + "</span>"
      tooltip
        .style("top", topOffset + "px")
        .style("left", xPos + "px")
        .html(html);
    };

    /** Hides the tooltip */
    function hideTooltip() {
      tooltip.classed("svg-map__tooltip--show", false);
    };

    function renderLegend() {
      window.innerWidth > 768 ? renderVerticalLegend() : renderHorizontalLegend()
    }

    /** Renders the legend */
    function renderVerticalLegend() {
      var w = 50,
          h = 200;

      legend
        .attr("width", w)
        .attr("height", h)
        .classed("svg-map__legend--horizontal", false)

      // create color gradient
      legendGradient
        .attr("x1", "100%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

      legendGradient.html('')

      var stepSize = 100 / (colors.length - 1);
      for (var i = 0; i < colors.length; i++) {
        var percent = (stepSize * i);
        var position = maxVal - ((i / (colors.length - 1)) * (maxVal - minVal))
        legendGradient
          .append("stop")
          .attr("offset", percent + "%")
          .attr("stop-color", ramp(position))
          .attr("stop-opacity", 1);
      }

      // render color gradient
      legendColorScale
        .attr("width", 16)
        .attr("height", h - 19)
        .attr("x", 0)
        .attr("transform", "translate(0,10)");

      // render axis
      legendAxis.html('')
      var y = d3.scaleLinear().range([h-20, 0]).domain([minVal, maxVal]).nice();
      var yAxis = d3.axisRight(y).ticks(ticks);
      legendAxis
        .attr("transform", "translate(16,10)")
        .call(yAxis);
    }

    /** Renders the legend */
    function renderHorizontalLegend() {
      var w = 300,
          h = 50;

      legend
        .attr("width", w)
        .attr("height", h)
        .classed("svg-map__legend--horizontal", true)

      legendGradient.html('')

      // create color gradient
      legendGradient
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

      var stepSize = 100 / (colors.length - 1);
      for (var i = 0; i < colors.length; i++) {
        var percent = (stepSize * i);
        var position = ((i / (colors.length - 1)) * (maxVal - minVal))
        legendGradient
          .append("stop")
          .attr("offset", percent + "%")
          .attr("stop-color", ramp(position))
          .attr("stop-opacity", 1);
      }

      // render color gradient
      legendColorScale
        .attr("width", w - 31)
        .attr("height", 16)
        .attr("x", 16)
        .attr("transform", "translate(0,10)");

      // render axis
      legendAxis.html('')
      var x = d3.scaleLinear().range([0, w-32]).domain([minVal, maxVal]).nice();
      var xAxis = d3.axisBottom(x).ticks(ticks);
      legendAxis
        .attr("transform", "translate(16,26)")
        .call(xAxis);
    }

    function renderOutline() {
      var hoverData = svg.selectAll(".svg-map__shape--hovered").data([hovered]);
      hoverData
        .enter()
        .append("path")
        .attr("class", "svg-map__shape--hovered")
        .merge(hoverData)
        .attr("d", path)
        .style("pointer-events", "none")
      hoverData.exit().remove()
    }

    function render() {
      var rect = root.getBoundingClientRect();
      containerWidth = rect.width
      var width = 720;
      var height = 480;
      var scaleFactor = containerWidth / width;
      projection = d3
        .geoAlbersUsa()
        .translate([width / 2, height / 2]) // translate to center of screen
        .scale([1000]); // scale things down so see entire US

      // Define path generator
      path = d3
        .geoPath() // path generator that will convert GeoJSON to SVG paths
        .projection(projection); // tell path generator to use albersUsa projection

      //Create SVG element and append map to the SVG
      svg
        .attr("width", width)
        .attr("height", height)
        .style("transform-origin", "top left")
        .style("transform", "scale(" + scaleFactor + ")");

      var svgData = svg.selectAll("path").data(features);

      svgData
        .enter()
        .append("path")
        .attr("class", "svg-map__shape")
        .merge(svgData)
        .attr("d", path)
        .style("fill", function (d) {
          return ramp(d.properties.value);
        })
        .on("mousemove", function(d) {
          hovered = d
          showTooltip(d3.event, d.properties)
          renderOutline()

        })
        .on("mouseout", function(d) {
          hovered = null
          hideTooltip()
          renderOutline()

        });

      svgData.exit().remove()
    }

    function create() {
      var gradientId = makeId();

      // configure based on data options
      var shapes = dataOptions.shapesUrl || "/uploads/us-states.json";
      colors = (dataOptions.colors && dataOptions.colors.split(";")) || [
        "#f9f9f9",
        "#bc2a66",
      ];
      minVal = dataOptions.minVal && parseFloat(dataOptions.minVal);
      maxVal = dataOptions.maxVal && parseFloat(dataOptions.maxVal);
      ticks = (dataOptions.ticks && parseInt(dataOptions.ticks)) || 5
      valueFormat = (dataOptions.valueFormat && d3.format(dataOptions.valueFormat)) || d3.format(".1f")
      valueTemplate = dataOptions.valueTemplate || "{{value}}"

      // create elements and selections
      svg = d3.select(root).append("svg").attr("class", "svg-map__map svg-map__map--" + dataOptions.id);
      tooltip = d3.select(root).append("div").attr("class", "svg-map__tooltip")
      legend = d3.select(root).append("svg").attr("class", "svg-map__legend");
      legendGradient = legend.append("defs").append("svg:linearGradient").attr("id", gradientId)
      legendColorScale = legend.append("rect").style("fill", "url(#" + gradientId + ")")
      legendAxis = legend.append("g")

      // set min / max vals based on data
      if (!minVal || !maxVal) {
        var extent = d3.extent(data, function (d) { return parseFloat(d.value) })
        minVal = minVal || extent[0]
        maxVal = maxVal || extent[1]
      }

      // calculate domain for color scale, based on number of colors
      var steps = d3.range(minVal,  maxVal, (maxVal - minVal) / (colors.length-1))
      steps[colors.length - 1] = maxVal

      // create color ramp
      ramp = d3.scaleLinear().domain(steps).range(colors);

      // Load GeoJSON data and merge with states data
      d3.json(shapes, function (json) {
        // add CSV data to json features
        for (var i = 0; i < data.length; i++) {
          var dataState = data[i].state;
          var dataValue = data[i].value;
          for (var j = 0; j < json.features.length; j++) {
            var jsonState = json.features[j].id;
            if (dataState === jsonState) {
              json.features[j].properties.value = dataValue;
              break;
            }
          }
        }
        features = json.features

        render();
        renderLegend()

        window.addEventListener('resize', function () {
          render();
          renderLegend()
        })
      });
    }

    create()

  }

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    const yParse = function (d) {
      return parseFloat(d);
    };
    d3.csv(options.data, function (data) {
      var result = data.map(function (d) {
        return {
          state: shapeStateId(d[options.idColumn]),
          value: yParse(d[options.valueColumn]),
        };
      });
      callback && callback(result);
    });
  }

  /**
   * Creates the state map
   */
  function init(rootEl, options) {
    if (!options || typeof options !== "object")
      throw new Error("state-map: no options object provided");
    if (!options.data)
      throw new Error("state-map: must provide file URL in options");
    options.valueColumn = options.valueColumn || "value";
    options.idColumn = options.idColumn || "state";
    loadData(options, function (data) {
      StateMap(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
