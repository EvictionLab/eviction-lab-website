"use strict";

var Elab = Elab || {};

Elab.ChartBuilder = (function (Elab) {
  /**
   * Creates an empty chart with root elements
   * @param {DOMElement} svgEl a SVG DOM element to render the chart in
   * @param {Array<Object>} data data to use for the chart
   * @param {Object} options
   */
  function Chart(svgEl, data, options) {
    this.data = data;
    this.options = options || this.defaultOptions;
    this.innerWidth =
      this.options.width + this.options.margin[1] + this.options.margin[3];
    this.innerHeight =
      this.options.height + this.options.margin[0] + this.options.margin[2];
    this.svgEl = svgEl;
    this.updaters = {};
    this.selections = {};
    this.selections.tooltip = d3.select("#tooltip");
    this.xScale = null;
    this.yScale = null;
    this.xBandScale = d3.scaleBand();
    this.addRoot();
  }

  /** Default options for the chart */
  Chart.prototype.defaultOptions = {
    width: 400,
    height: 400,
    margin: [8, 8, 8, 8],
    xTicks: 4,
    xTicksFormat: d3.timeFormat("%b"),
    yTicksFormat: d3.format(",d"),
  };

  /**
   * Returns the width of the data area for the chart
   */
  Chart.prototype.getInnerWidth = function () {
    return this.options.width - this.options.margin[1] - this.options.margin[3];
  };

  /**
   * Returns the height of the data area for the chart
   */
  Chart.prototype.getInnerHeight = function () {
    return (
      this.options.height - this.options.margin[0] - this.options.margin[2]
    );
  };

  /**
   * Gets a selection that has been added to the chart
   * @param {string} id
   */
  Chart.prototype.getSelection = function (id) {
    return this.selections[id];
  };
  /**
   * Adds a selection to the chart
   * @param {string} id identifier for this selection
   * @param {string} parentId id of the parent selection
   * @param {function} createSelection function that returns the selection
   */
  Chart.prototype.addSelection = function (id, parentId, createSelection) {
    this.selections[id] = createSelection(this.selections[parentId], this);
    return this;
  };

  /**
   * Adds a function that executes on renter
   * @param {string} id identifier for the render function
   * @param {function} createRenderFunction a function that returns the render function
   */
  Chart.prototype.addRenderFunction = function (id, createRenderFunction) {
    this.updaters[id] = createRenderFunction(this.getSelection(id), this);
    return this;
  };

  /**
   * Adds an element, with a selection and render function to the chart
   * @param {string} id
   * @param {string} parentId
   * @param {function} createSelection returns a selection
   * @param {function} createRenderFunction returns a render function
   */
  Chart.prototype.addElement = function (
    id,
    parentId,
    createSelection,
    createRenderFunction
  ) {
    this.addSelection(id, parentId, createSelection).addRenderFunction(
      id,
      createRenderFunction
    );
    return this;
  };

  /**
   * Creates the chart root container
   */
  Chart.prototype.addRoot = function () {
    var _this = this;
    this.selections["root"] = d3
      .select(this.svgEl)
      .attr("class", "chart__root");
    this.updaters["root"] = function () {
      _this.selections["root"]
        .attr("width", _this.options.width)
        .attr("height", _this.options.height);
    };
    this.selections["base"] = this.selections["root"]
      .append("g")
      .attr("class", "chart__base");
    this.selections["data"] = this.selections["root"]
      .append("g")
      .attr("class", "chart__data")
      .attr("clip-path", "url(#chartArea)");
    this.selections["overlay"] = this.selections["root"]
      .append("g")
      .attr("class", "chart__overlay");
    this.updaters["base"] = function () {
      [
        _this.selections["base"],
        _this.selections["data"],
        _this.selections["overlay"],
      ].forEach(function (sel) {
        sel.attr(
          "transform",
          "translate(" +
            _this.options.margin[3] +
            " " +
            _this.options.margin[0] +
            ")"
        );
      });
    };
    return this;
  };

  /**
   * Adds a frame border to the chart
   */
  Chart.prototype.addFrame = function () {
    function createSelection(parentSelection) {
      return parentSelection.append("rect").attr("class", "chart__frame");
    }
    function createRenderFunction(selection, chart) {
      return function () {
        selection
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", chart.getInnerWidth())
          .attr("height", chart.getInnerHeight());
      };
    }
    this.addElement("frame", "overlay", createSelection, createRenderFunction);
    return this;
  };

  /**
   * Adds a clip path around the frame area for the chart
   */
  Chart.prototype.addClipPath = function () {
    function createSelection(parentSelection) {
      return parentSelection
        .append("clipPath")
        .attr("id", "chartArea")
        .append("rect");
    }
    function createRenderFunction(selection, chart) {
      return function () {
        selection
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", chart.getInnerWidth())
          .attr("height", chart.getInnerHeight());
      };
    }
    this.addElement("clipPath", "root", createSelection, createRenderFunction);
    return this;
  };

  /**
   * Adds a pattern fill area to the chart
   * @param {Array} areaData [start, end]
   */
  Chart.prototype.addArea = function (areaData, options) {
    // set default options
    options = options || {};
    options.angle = options.angle || 45;
    options.areaId = options.areaId || "area";
    // make sure IDs have not already been assigned
    if (options.patternId && this.getSelection(options.patternId))
      throw new Error("patternId already exists: " + options.patternId);
    if (this.getSelection(options.areaId))
      throw new Error("areaId already exists: " + options.areaId);
    // creates SVG pattern
    function createPattern(parentSelection) {
      return parentSelection
        .append("pattern")
        .attr("id", options.patternId)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 12)
        .attr("height", 12)
        .attr("patternUnits", "userSpaceOnUse")
        .attr("patternTransform", "rotate(" + options.angle + ")")
        .html(
          '<rect class="chart__pattern chart__pattern--' +
            options.patternId +
            '" x="0" y="0" width="6" height="12" />'
        );
    }
    // creates area element and returns selection
    function createAreaSelection(parentSelection) {
      return parentSelection
        .append("rect")
        .attr("class", "chart__area chart__area--" + options.areaId);
    }
    // renders the area rect in the chart
    function createAreaRenderFunction(selection, chart) {
      return function () {
        var maxDate = chart.xScale.domain()[1];
        areaData[1] =
          !areaData[1] || +areaData[1] > +maxDate ? maxDate : areaData[1];
        selection
          .attr("x", chart.xScale(areaData[0]))
          .attr("y", 1)
          .attr(
            "width",
            chart.xScale(areaData[1]) - chart.xScale(areaData[0]) - 1
          )
          .attr("height", chart.getInnerHeight() - 2)
          .attr("fill", "url(#" + options.patternId + ")");
      };
    }
    // add selections and render function to chart
    options.patternId &&
      this.addSelection(options.patternId, "root", createPattern);
    this.addSelection(options.areaId, "data", createAreaSelection);
    this.addRenderFunction(options.areaId, createAreaRenderFunction);
    return this;
  };

  /**
   * Adds tooltip functionality to the chart
   * @param {function} showTooltip function that shows the tooltip
   * @param {function} hideTooltip function that hides the tooltip
   */
  Chart.prototype.addTooltip = function (showTooltip, hideTooltip) {
    var _this = this;
    this.selections["hover-line"] = this.selections["data"]
      .append("line")
      .attr("class", "chart__hover-line");
    this.selections["hover"] = this.selections["data"]
      .append("rect")
      .attr("class", "chart__hover")
      .attr("x", 0)
      .attr("y", 0)
      .on("mousemove", handleHover)
      .on("mouseout", handleHoverOut);
    this.updaters["hover"] = function () {
      _this.selections["hover"]
        .attr("width", _this.getInnerWidth())
        .attr("height", _this.getInnerHeight())
        .attr("opacity", 0);
    };

    function handleHover() {
      var xHovered = _this.xScale.invert(
        d3.mouse(_this.selections["hover"].node())[0]
      );
      showTooltip(_this, xHovered);
    }

    function handleHoverOut() {
      hideTooltip(_this);
    }

    return this;
  };

  /**
   * Adds bars to the chart
   * @param {function} selector function that takes the chart data and returns the bar data
   */
  Chart.prototype.addBars = function (selector) {
    var _this = this;
    this.selections["bars"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__bars");

    this.updaters["bars"] = function () {
      var barData = selector(_this.data);

      var spacing = 2;
      var bandWidth =
        _this.xScale(barData[1][0]) - _this.xScale(barData[0][0]) - spacing * 2;

      var selection = _this.selections["bars"]
        .selectAll(".chart__bar")
        .data(barData);

      selection
        .enter()
        .append("rect")
        .attr("class", "chart__bar")
        .attr("x", function (d) {
          return _this.xScale(d[0]) + spacing;
        })
        .attr("width", bandWidth)
        .attr("y", _this.getInnerHeight())
        .attr("height", 0)
        .merge(selection)
        .transition()
        .duration(1000)
        .attr("x", function (d) {
          return _this.xScale(d[0]) + spacing;
        })
        .attr("width", bandWidth)
        .attr("y", function (d) {
          return _this.yScale(d[1]);
        })
        .attr("height", function (d) {
          return _this.getInnerHeight() - _this.yScale(d[1]);
        });
    };
    return this;
  };

  /**
   * Adds lines to the chart
   * @param {function} selector a function that accepts chart data and returns the line data
   */
  Chart.prototype.addLines = function (selector) {
    var _this = this;
    this.selections["lines"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__lines");
    this.updaters["lines"] = function () {
      var lineData = selector(_this.data);

      var line = d3
        .line()
        .x(function (d) {
          return _this.xScale(d[0]);
        })
        .y(function (d) {
          return _this.yScale(d[1]);
        })
        .curve(d3.curveMonotoneX);

      var selection = _this.selections["lines"]
        .selectAll(".chart__line")
        .data(lineData);

      selection
        .enter()
        .append("path")
        .attr("class", "chart__line")
        .attr("d", line)
        .style("stroke-dasharray", function () {
          return this.getTotalLength();
        })
        .style("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .merge(selection)
        .transition()
        .duration(2000)
        .delay(400)
        .style("stroke-dasharray", function () {
          return this.getTotalLength();
        })
        .style("stroke-dashoffset", 0)
        .attr("d", line);
    };
    return this;
  };

  /**
   * Adds a Y axis to the chart
   * @param {*} selector a function that accepts a data entry and returns the y value
   */
  Chart.prototype.addAxisY = function (selector) {
    var _this = this;
    this.selections["yAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--y");
    this.updaters["yAxis"] = function () {
      var extent = d3.extent(_this.data, selector);
      _this.yScale = d3
        .scaleLinear()
        .rangeRound([_this.getInnerHeight(), 0])
        .domain([0, extent[1] + extent[1] * 0.05]);
      var yAxis = d3
        .axisLeft(_this.yScale)
        .ticks(_this.options.yTicks)
        .tickSize(-1 * _this.getInnerWidth())
        .tickFormat(_this.options.yTicksFormat);

      _this.selections["yAxis"]
        .attr("transform", "translate(0, 0)")
        .transition()
        .duration(1000)
        .call(yAxis);
    };
    return this;
  };

  /**
   * Utility function that calculates the width of a month on the chart in pixels
   */
  Chart.prototype.monthToPixels = function (num) {
    var now = new Date();
    var start = d3.timeDay.floor(now);
    var end = d3.timeDay.offset(start, 30);
    var width = this.xScale(end) - this.xScale(start);
    return width * num;
  };

  /**
   * Adds a time (X) axis to the chart
   * @param {*} selector function that accepts a data entry and returns the X time value
   */
  Chart.prototype.addTimeAxis = function (selector) {
    var _this = this;
    function adjustTextLabels(selection) {
      selection
        .selectAll(".tick text")
        .attr("transform", "translate(" + _this.monthToPixels(1) / 2 + ",0)");
      selection.selectAll(".tick:last-child text").attr("opacity", 0);
    }
    this.selections["timeAxis"] = this.selections["overlay"]
      .append("g")
      .attr("class", "chart__axis chart__axis--time");
    this.updaters["timeAxis"] = function () {
      var extent = d3.extent(_this.data, selector);
      var xExtent = [
        d3.timeDay.offset(extent[0], -2),
        d3.timeDay.offset(extent[1], 9),
      ];

      _this.xScale = d3
        .scaleTime()
        .rangeRound([0, _this.getInnerWidth()])
        .domain(xExtent);
      var xAxis = d3
        .axisBottom(_this.xScale)
        .ticks(_this.options.xTicks)
        .tickSize(8)
        .tickSizeOuter(0)
        .tickFormat(_this.options.xTicksFormat);
      _this.selections["timeAxis"]
        .attr("transform", "translate(0," + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(xAxis)
        .call(adjustTextLabels);
    };
    return this;
  };

  /**
   * Adds a custom element to the chart
   * @param {function} renderElement accepts the chart object and renders an element
   */
  Chart.prototype.addCustom = function (renderElement) {
    var _this = this;
    renderElement(_this);
    return this;
  };

  /**
   * Renders the chart
   */
  Chart.prototype.render = function () {
    Object.values(this.updaters).forEach(function (r) {
      r();
    });
    return this;
  };

  /**
   * Updates the chart options and re-renders
   * @param {*} options
   */
  Chart.prototype.update = function (options) {
    Object.assign(this.options, options);
    this.render();
    return this;
  };

  return Chart;
})();