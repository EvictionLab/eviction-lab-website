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
    console.log(value);
    if (value.length === 2) return value;
    if (value.length === 1) return "0" + value;
    throw new Error("state-map: invalid ID provided for state");
  }

  function StateMap(root, data, dataOptions) {

    var svg;
    var path;
    var projection;
    var features;
    var tooltip;
    var legend;

    /** Makes a unique identifier */
    function makeId() {
      return "_" + Math.random().toString(36).substr(2, 9);
    }



    function showTooltip(e, html) {
      tooltip.classed("svg-map__tooltip--show", true);
      var topOffset = e.clientY;
      var rect = tooltip.node().getBoundingClientRect();
      var xPos = Math.min(
        window.innerWidth - rect.width / 2 - 12,
        Math.max(12 + rect.width / 2, e.clientX)
      );
      tooltip
        .style("top", topOffset + "px")
        .style("left", xPos + "px")
        .html(html);
    };
    function hideTooltip(e, selection) {
      tooltip.classed("svg-map__tooltip--show", false);
    };

    function renderTooltip(name, value) {
      var html = "<span>" + name + "</span><span>" + value + "</span>"
      return html
    }

    function renderLegend(colors, minVal, maxVal, ramp, ticks) {
      var gradientId = makeId();

        var w = 116,
          h = 200;

      legend
        .attr("width", w)
        .attr("height", h)
        .attr("class", "svg-map__legend");

        var legendGradient = legend
          .append("defs")
          .append("svg:linearGradient")
          .attr("id", gradientId)
          .attr("x1", "100%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "100%")
          .attr("spreadMethod", "pad");

        var stepSize = 100 / (colors.length - 1);

        for (var i = 0; i < colors.length; i++) {
          var percent = (stepSize * i);
          var position = maxVal - ((i / (colors.length - 1)) * (maxVal - minVal))
          console.log('ramp', percent)
          legendGradient
            .append("stop")
            .attr("offset", percent + "%")
            .attr("stop-color", ramp(position))
            .attr("stop-opacity", 1);
        }

        legend
          .append("rect")
          .attr("width", w - 100)
          .attr("height", h - 19)
          .style("fill", "url(#" + gradientId + ")")
          .attr("transform", "translate(0,10)");

        var y = d3.scaleLinear().range([h-20, 0]).domain([minVal, maxVal]).nice();

        var yAxis = d3.axisRight(y).ticks(ticks);

        legend
          .append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(16,10)")
          .call(yAxis);

    }

    function render(containerWidth, containerHeight, ramp) {
      var width = 720;
      var height = 480;
      var ratio = height / width;
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
        .attr("class", "svg-map__map")
        .attr("width", width)
        .attr("height", height)
        .style("transform-origin", "top left")
        .style("transform", "scale(" + scaleFactor + ")");

      var svgData = svg.selectAll("path").data(features, function(d) { return d.id });

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
          var html = renderTooltip(d.properties.name, d.properties.value)
          showTooltip(d3.event, html)
        })
        .on("mouseout", function(d) {
          hideTooltip()
        });

      svgData.exit().remove()
    }

    function create() {
      var colors = (dataOptions.colors && dataOptions.colors.split(";")) || [
        "#f9f9f9",
        "#bc2a66",
      ];
      var shapes = dataOptions.shapesUrl || "/uploads/us-states.json";
      var minVal = dataOptions.minVal || 0;
      var maxVal = dataOptions.maxVal || 4.5;
      var ticks = dataOptions.ticks || 5

      // Create SVG element and append map to the SVG
      svg = d3.select(root).append("svg");
      tooltip = d3.select(root).append("div").attr("class", "svg-map__tooltip")
      legend = d3.select(root).append("svg")

      var dataArray = [];
      for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value));
      }
      // var minVal = d3.min(dataArray);
      // var maxVal = d3.max(dataArray);

      var ramp = d3.scaleLinear().domain([minVal, 2.25,  maxVal]).range(colors);

      // Load GeoJSON data and merge with states data
      d3.json(shapes, function (json) {
        // Loop through each state data value in the .csv file
        for (var i = 0; i < data.length; i++) {
          // Grab State Name
          var dataState = data[i].state;
          // Grab data value
          var dataValue = data[i].value;
          // Find the corresponding state inside the GeoJSON
          for (var j = 0; j < json.features.length; j++) {
            var jsonState = json.features[j].id;
            if (dataState === jsonState) {
              // Copy the data value into the JSON
              json.features[j].properties.value = dataValue;

              // Stop looking through the JSON
              break;
            }
          }
        }

        // set features
        features = json.features

        var rect = root.getBoundingClientRect();
        render(rect.width, Math.max(rect.height, 400), ramp);
        renderLegend(colors, minVal, maxVal, ramp, ticks)

        window.addEventListener('resize', function () {
          var rect = root.getBoundingClientRect();
          render(rect.width, Math.max(rect.height, 400), ramp);
        })
        // render(960, 500, ramp);
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
        console.log(options.data, d);
        return {
          state: shapeStateId(d[options.idColumn]),
          value: yParse(d[options.valueColumn]),
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
