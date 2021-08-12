"use strict";

var Elab = Elab || {};

/**
 * MAPBOX MAP MODULE
 * ----
 * Creates a mapbox choropleth map
 *
 * Public methods:
 * - init(root, options)
 *
 */

/**
 * MAPS MODULE
 * ---
 * Public
 *  - createMap(): Map
 */

Elab.Mapbox = (function (Elab) {
  // grab element for tooltip
  var tooltip = document.getElementById("tooltip");
  var accessToken =
    "pk.eyJ1IjoiZXZpY3Rpb24tbGFiIiwiYSI6ImNqYzJoMzhkbjBncGkyeW4yNGlkbjRkcTQifQ.IQNWME_jYqxTH7wmFrFX-g";

  function getFormatter(type) {
    switch(type) {
      case "integer":
        return d3.format(",d");
      case "percent":
        return d3.format(".01%");
      default:
        return d3.format(".1f")
    }
  }

  var LegendLabelTemplate = Handlebars.compile(
    "{{#each labels}}" +
      "<span class='legend__gradient-label'>{{this}}</span>" +
      "{{/each}}"
  );

  var TooltipTemplate = Handlebars.compile(
    "<h1>{{name}}</h1>" +
      '<div class="map__tooltip-row">' +
      "{{#if value}}" +
      "{{{value}}}" +
      "{{else}}" +
      "Data not available." +
      "{{/if}}" +
      "</div>"
  );


  /**
   * Parses an object, converts any numeric values to numbers
   * @param {*} row 
   * @returns 
   */
  function parseRow(row) {
    return Object.entries(row).map(function (entry) {
      const num = Number(entry[1])
      return isNaN(num) ? entry : [entry[0], num]
    }).reduce(function(obj, curr) {
      obj[curr[0]] = curr[1]
      return obj
    }, {})
  }

  /**
   * Parses map data values
   * @param {*} data
   */
  function parseValues(data) {
    return data.map(function (d) {
      return parseRow(d);
    });
  }

  /**
   * Adds data from the data rows to the GeoJSON properties
   * @param {*} geojson
   * @param {*} data
   */
  function addDataToGeojson(geojson, data, config) {
    // create an object wth keys for each GEOID that has corresponding data points
    var dataDict = data.reduce(function (dict, item) {
      dict[item[config.join]] = item;
      return dict;
    }, {});
    var newFeatures = geojson.features
      .filter(function (f) {
        return dataDict[f.properties[config.join]];
      })
      .map(function (feature, i) {
        feature.id = feature.properties[config.join];
        Object.assign(
          feature.properties,
          dataDict[feature.properties[config.join]]
        );
        return feature;
      });
    return Object.assign(geojson, { features: newFeatures });
  }

  /**
   * Gets an array of colors to use as ranges in a map style
   * @param {*} prop
   * @param {*} range
   * @param {*} prefix
   */
  function getLayerColors(range, colors, gradientType) {
    var steps = colors.length;
    var positions;
    if(gradientType === 'discrete') {
      positions = colors.map(function (c,i) { return i/(steps) })
    } else {
      positions = colors.map(function (c,i) { return i/(steps-1) })
    }
    var dataScale = d3.scaleLinear().domain([0, 1]).range(range)
    var colorScale = getColorScale(positions, colors)
    var colorSteps = []
    for (var i = 0; i < positions.length; i++) {
      const percent = positions[i]
      colorSteps.push(dataScale(percent))
      colorSteps.push(colorScale(percent))
    }
    return colorSteps;
  }

  /**
   * Gets a CSS gradient for the given prop
   */
  function getCssGradient(colors, gradientType) {
    var steps = colors.length;
    //boilerplate css for gradient
    var front = "linear-gradient(to right";
    //allocate variables assigned in if
    var colorScale;
    var back;
    var positions;

    //reduce positions array differently depending on type of function describing gradient
    function linearReducer(accumulator, currentValue) {
      return `${accumulator}, ${colorScale(currentValue)} ${currentValue*100}%`
    };
    function discreteReducer(accumulator, currentValue, i, array) {
      if(i < array.length - 1) {
        return `${accumulator}, ${colorScale(currentValue)} ${currentValue*100}%, ${colorScale(currentValue)} ${array[i+1]*100}%`
      } else {
        return `${accumulator}, ${colorScale(currentValue)} ${currentValue*100}%`
      }
    }

    //get the necessary positions and colorScales, depending on the function describing gradient
    if(gradientType === "discrete") {
      positions = colors.map(function (c,i) { return i/(steps) })
      colorScale = getColorScale(positions, colors)
      back = positions.reduce(discreteReducer, '')
    } else {
      positions = colors.map(function (c,i) { return i/(steps-1) })
      colorScale = getColorScale(positions, colors)
      back = positions.reduce(linearReducer, '')
    }

    //add the boilerplate css to the generated css
    return front + back;
  }

  function getColorScale(range, colors) {
    return d3.scaleLinear()
      .domain(range)
      .range(colors)
      .interpolate(d3.interpolateRgb)
  }

  function getDiscreteColorScale(range, colors) {
    return d3.scaleQuantize()
      .domain(range)
      .range(colors)
      .nice()
  }

  function addChoroplethFillLayer(map, prop, range, colors, gradientType) {
    var fillColor;
    if(gradientType === "discrete") {
      // need to use the "nice" discrete color scale here to match with colors
      var discreteScale = getDiscreteColorScale(range, colors);
      var colorSteps = getLayerColors(discreteScale.domain(), colors, gradientType)
      fillColor = ["step", ["get", prop]].concat(colorSteps);
      fillColor.splice(2, 1)
    } else {
      fillColor = ["interpolate", ["linear"], ["get", prop]].concat(
        getLayerColors(range, colors, gradientType)
      );
    }
    map.addLayer(
      {
        id: "choropleth",
        type: "fill",
        source: "choropleth",
        layout: {},
        filter: [
          "any",
          ["to-boolean", ["get", prop]],
          ["==", 0, ["get", prop]],
        ],
        paint: {
          "fill-color": fillColor,
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            0.8,
          ],
        },
      },
      "building"
    );
  }

  function addChoroplethStrokeLayer(map, prop, range, colors, gradientType) {
    var strokeColor;
    if(gradientType === "discrete") {
      strokeColor = ["step", ["get", prop]].concat(
        getLayerColors(range, colors, gradientType)
      );
      strokeColor.splice(2, 1)
    } else {
      strokeColor = ["interpolate", ["linear"], ["get", prop]].concat(
        getLayerColors(range, colors, gradientType)
      );
    }
    
    map.addLayer(
      {
        id: "choropleth-stroke",
        type: "line",
        source: "choropleth",
        layout: {},
        paint: {
          "line-color": strokeColor,
          "line-width": {
            stops: [
              [10, 2],
              [12, 4],
            ],
          },
          "line-blur": 0,
          "line-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            0,
          ],
        },
      },
      "building"
    );
  }

  /**
   * Creates the MapboxGL map
   * @param {*} el
   * @param {*} geojsonUrl
   * @param {*} dataUrl
   */
  function createMap(el, config) {
    var rootEl = $(el);
    var mapEl = rootEl.find(".map")[0];
    var geojsonUrl = config.geojson;
    var dataUrl = config.csv;
    var hoveredStateId = null;
    var allData = null;
    var geojsonData = null;
    var currentProp = config.column;
    var nameProp = config.name
    var colors = config.colors.split(";")
    var legendTitle = config.legendTitle;
    var gradientType = config.gradientType;
    var colorScale = null;
    var layersAdded = false;
    var formatter = getFormatter(config.format)
    var usBounds = [
      [-129.54443, 18.235058],
      [-63.802242, 52.886017],
    ];

    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
      container: mapEl,
      style: "mapbox://styles/eviction-lab/ck8za8qns07451jpm48xn6tq2",
      bounds: usBounds,
      maxBounds: usBounds,
    });
    createLegend();

    function getTooltipValue(feature, prop) {
      if (!feature.properties[prop] && feature.properties[prop] !== 0)
        return null;
      var value = formatter(feature.properties[prop]);
      return value;
    }

    /**
     * Show tooltip and set outline of feature when hovering
     * @param {*} e
     */
    function handleHover(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";
      renderTooltip(e.features[0], e);
      if (e.features.length > 0) {
        if (hoveredStateId) {
          map.setFeatureState(
            { source: "choropleth", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = e.features[0].id;
        map.setFeatureState(
          { source: "choropleth", id: hoveredStateId },
          { hover: true }
        );
      }
    }

    /**
     * Clear tooltip and outline of hover out of feature
     */
    function handleHoverOut() {
      map.getCanvas().style.cursor = "";
      tooltip.style.display = "none";
      if (hoveredStateId) {
        map.setFeatureState(
          { source: "choropleth", id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = null;
    }

    /**
     * Turn off scroll unless modifier key is pressed
     */
    function handleWheel(event) {
      if (event.originalEvent.ctrlKey || event.originalEvent.metaKey) {
        // Check if CTRL key is pressed
        event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
        if (!map.scrollZoom._enabled) map.scrollZoom.enable(); // Enable zoom only if it's disabled
      } else {
        if (map.scrollZoom._enabled) map.scrollZoom.disable(); // Disable zoom only if it's enabled
      }
    }

    /**
     * Load CSV and render choropleth on map load
     */
    function handleLoad() {
      d3.json(geojsonUrl, function (err, json) {
        if (err) {
          console.error("unable to load geojson from " + geojsonUrl);
          return;
        }
        var geojson = json;
        var bbox = geojson.bbox;
        var padding = 0;
        var bounds = [
          [bbox[0] - padding, bbox[1] - padding],
          [bbox[2] + padding, bbox[3] + padding],
        ];
        function zoomToLocation() {
          map.fitBounds(bounds, { padding: 16 });
        }

        d3.csv(dataUrl, function (data) {
          if (!data) {
            console.error("unable to load data from " + dataUrl);
            return;
          }
          allData = parseValues(data);
          geojsonData = addDataToGeojson(geojson, allData, config);
          colorScale = getColorScale(allData, currentProp)
          map.addSource("choropleth", {
            type: "geojson",
            data: geojsonData,
          });
          map.on("mousemove", "choropleth", handleHover);
          map.on("mouseleave", "choropleth", handleHoverOut);
          
          update();
          zoomToLocation();
        });
      });
    }

    /** Gets the range of  data values */
    function getRange(prop) {
      if (!allData) return [0, 1];
      var extent = d3.extent(allData, function (d) {
        return d[prop];
      });
      return [0, extent[1]];
    }
    
    /** Updates the map layers and legend */
    function update() {
      var range = getRange(currentProp);
      if (layersAdded) {
        map.removeLayer("choropleth");
        map.removeLayer("choropleth-stroke");
      }
      addChoroplethFillLayer(map, currentProp, range, colors, gradientType);
      addChoroplethStrokeLayer(map, currentProp, range, colors, gradientType);
      layersAdded = true;
      gradientType === "discrete" ? renderDiscreteLegend() : renderLegend();
    }

    /** add DOM elements for legend */
    function createLegend() {
      rootEl.append('<div class="legend"><p class="legend__title"></p><div class="legend__gradient"></div><div class="legend__gradient-labels"></div></div>')
    }

    /** return labels for ends of legend */
    function getGradientLabels(prop, range) {
      return [formatter(range[0]), formatter(range[1])];
    }

    /** renders a legend for a discrete scale */
    function renderDiscreteLegend() {
      // legend settings
      var width = 280;
      var margin = 20;
      var tickFormat = ",d"
      
      // creates an axis with the given scale
      function axis(scale) {
        return Object.assign(d3.axisBottom(scale.range([margin, width - margin])), {
          render() {
            return d3.create("svg")
                .attr("viewBox", [0, -2, width, 32])
                .attr("width", width)
                .attr("height", 32)
                .style("display", "block")
                .call(this)
              .node();
          }
        });
      }

      // create swatches for colors
      function swatches(colors) {
        const n = colors.length;
        const swatchWidth = (1/n) * (width - margin*2);
        return {
          render: function() {
            var svg = d3.create("svg")
                .attr("viewBox", [0, 0, width, 16])
                .attr("width", width)
                .attr("height", 16)
                .style("display", "block")
            svg.selectAll("rect")
              .data(colors)
              .enter()
                .append("rect")
                .attr("fill", function(d) { return d} )
                .attr("width", swatchWidth)
                .attr("height", 24)
                .attr("x", function(d,i) { return margin + (i * swatchWidth) })
                .attr("y", 0)
             return svg.node()
          }
        }
      }

      // container elements
      var gradientContainer = rootEl.find(".legend__gradient");
      var labelContainer = rootEl.find(".legend__gradient-labels");
      var titleContainer = rootEl.find(".legend__title")
      
      // render color swatches
      gradientContainer.append(swatches(colors).render())

      // create tick values based on a "nice" discrete scale
      var range = getRange(currentProp);
      var discreteScale = getDiscreteColorScale(range, colors);
      var colorSteps = getLayerColors(discreteScale.domain(), colors, "discrete")
      var tickValues = colorSteps.filter(function(value) { return typeof value === "number" })
      tickValues.push(discreteScale.domain()[1])
      var tickScale = d3.scaleLinear().domain(discreteScale.domain())
      var axisNode = axis(tickScale)
        .tickValues(tickValues, tickFormat)
        .render()
      labelContainer.append(axisNode);

      // set title
      titleContainer.html(legendTitle)
    }

    function renderLegend() {
      var gradientContainer = rootEl.find(".legend__gradient");
      var labelContainer = rootEl.find(".legend__gradient-labels");
      var titleContainer = rootEl.find(".legend__title")
      var range = getRange(currentProp);
      gradientContainer.css("background-image", getCssGradient(colors, gradientType));
      var html = LegendLabelTemplate({
        labels: getGradientLabels(currentProp, range),
      });
      labelContainer.html(html);
      titleContainer.html(legendTitle)
    }

    function renderTooltip(feature, e) {
      var tooltipContainer = $(tooltip);
      var html = TooltipTemplate({
        name: feature.properties[nameProp]
          ? feature.properties[nameProp]
          : "Unknown",
        value: getTooltipValue(feature, currentProp),
      });
      var flipped = e.originalEvent.pageX > window.innerWidth - 240;
      var space = flipped ? -32 : 32;
      tooltipContainer
        .toggleClass("chart__tooltip--flip", flipped)
        .css({
          display: "block",
          left: e.originalEvent.pageX + space + "px",
          top: e.originalEvent.pageY - window.scrollY  + 32 + "px",
        })
        .html(html);
    }

    // disable map zoom when using scroll
    map.scrollZoom.disable();
    // disable map rotation using right click + drag
    map.dragRotate.disable();
    // disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();
    map.scrollZoom.setWheelZoomRate(0.02); // Default 1/450
    map.on("wheel", handleWheel);
    map.on("load", handleLoad);
    map.addControl(new mapboxgl.NavigationControl());
    return map;
  }

  function init(el, config) {
    if (el && config.geojson && config.csv) {
      return createMap(el, config);
    }
    throw new Error("could not initialize map section");
  }

  return {
    init: init,
    createMap: createMap,
  };
})(Elab);
