"use strict";

var Elab = Elab || {};

function getAxisFunction(position) {
  switch (position) {
    case "left":
      return d3.axisLeft
    case "bottom":
    default:
      return d3.axisBottom
  }
}

/** Makes a unique identifier */
function makeId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

Elab.ChartBuilder = (function (Elab) {
  /**
   * Creates an empty chart with root elements
   * @param {DOMElement} svgEl a SVG DOM element to render the chart in
   * @param {Array<Object>} data data to use for the chart
   * @param {Object} options
   */
  function Chart(svgEl, data, options) {
    var tooltipEl = document.createElement("div");
    tooltipEl.className = "chart__tooltip";
    document.body.appendChild(tooltipEl);
    this.data = data;
    this.options = options || this.defaultOptions;
    this.innerWidth =
      this.options.width + this.options.margin[1] + this.options.margin[3];
    this.innerHeight =
      this.options.height + this.options.margin[0] + this.options.margin[2];
    this.svgEl = svgEl;
    this.updaters = {};
    this.selections = {};
    this.selections.tooltip = d3.select(tooltipEl);
    this.xScale = null;
    this.yScale = null;
    this.hovered = null;
    this.lineData = null;
    this.xBandScale = d3.scaleBand();
    this.addRoot();
    var _this = this;
    this.showTooltip = function (e, render) {
      if (!_this.hovered) return;
      var selection = _this.getSelection("tooltip");
      selection.classed("chart__tooltip--show", true);
      var topOffset = $(window).scrollTop() + e.clientY;
      var html = render(_this.hovered);
      var rect = selection.node().getBoundingClientRect();
      var xPos = Math.min(
        window.innerWidth - rect.width / 2 - 12,
        Math.max(12 + rect.width / 2, e.clientX)
      );
      selection
        .style("top", topOffset + "px")
        .style("left", xPos + "px")
        .html(html);
    };
    this.hideTooltip = function (e) {
      var selection = _this.getSelection("tooltip");
      selection.classed("chart__tooltip--show", false);
      // selection.style("top")
    };
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
   * Sets the ID of the hovered data
   */
  Chart.prototype.setHovered = function (id) {
    this.hovered = id;
  };

  /**
   * Gets a selection that has been added to the chart
   * @param {string} id
   */
  Chart.prototype.getSelection = function (id) {
    return this.selections[id];
  };
  /**
   * Gets a renderer that has been added to the chart
   * @param {string} id
   */
  Chart.prototype.getRenderer = function (id) {
    return this.updaters[id];
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
   * Adds a function that executes on render
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
        .attr("id", makeId())
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
    // if not start / end areaData then return
    if (!areaData[0] && !areaData[1]) return this;
    // set default options
    options = options || {};
    options.angle = options.angle || 45;
    options.areaId = options.areaId || "area";
    options.addPattern = options.addPattern === false ? false : true
    // make sure IDs have not already been assigned
    if (options.patternId && this.getSelection(options.patternId) && options.addPattern)
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
    options.patternId && options.addPattern &&
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

  Chart.prototype.addHoverLine = function () {
    var _this = this;
    function createSelection(parentSelection) {
      return parentSelection.append("line").attr("class", "chart__hover-line");
    }
    function createRenderer(selection, chart) {
      return function () {
        if (chart.hovered) {
          selection
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .attr("stroke-opacity", 1)
            .attr("x1", function (d) {
              return chart.xScale(chart.hovered.x);
            })
            .attr("x2", function (d) {
              return chart.xScale(chart.hovered.x);
            })
            .attr("y1", 0)
            .attr("y2", chart.getInnerHeight());
        } else {
          selection.transition().duration(200).attr("stroke-opacity", 0);
        }
      };
    }
    this.addSelection("hoverLine", "data", createSelection);
    this.addRenderFunction("hoverLine", createRenderer);
    return this;
  };

  Chart.prototype.addHoverDot = function () {
    var _this = this;
    function createSelection(parentSelection) {
      return parentSelection.append("circle").attr("class", "chart__hover-dot");
    }
    function createRenderer(selection, chart) {
      return function () {
        if (chart.hovered && chart.lineData) {
          var hoverIndex = chart.lineData.findIndex(function (d) {
            return d[0][2] === chart.hovered.name;
          });
          selection
            .attr(
              "class",
              "chart__hover-dot chart__hover-dot--" +
              (chart.lineData.length - hoverIndex - 1)
            )
            .attr("cx", function (d) {
              return chart.xScale(chart.hovered.x);
            })
            .attr("cy", function (d) {
              return chart.yScale(chart.hovered.y);
            })
            .attr("r", 5)
            .attr("fill-opacity", 1);
        } else {
          selection.attr("r", 0).attr("fill-opacity", 0);
        }
      };
    }
    this.addSelection("hoverDot", "data", createSelection);
    this.addRenderFunction("hoverDot", createRenderer);
    return this;
  };



  /**
   * Adds bars to the chart
   * @param {function} selector function that takes the chart data and returns the bar data
   */
  Chart.prototype.addBarGroups = function (selector) {
    // console.log('addBarGroups')
    var _this = this;
    this.selections["bargroups"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__bargroups")

    this.updaters["bargroups"] = function () {
      // console.log('updater for bargroups')
      var barData = selector(_this.data, _this.options);
      var spacing = 2;

      var groupNames = Object.keys(_this.options.barFormat);
      var typeNames = barData[0].values.map(function (el) {
        return el.type
      })

      _this.groupScale = d3.scaleBand() // projecting discrete data into the diagram
        .domain(groupNames)
        .range([0, _this.getInnerWidth()])
        .round(0.1)
        .padding(0.1);

      _this.barScale = d3.scaleBand()
        .domain(typeNames)
        .range([0, _this.groupScale.bandwidth()])
        .round(0.1)
        .padding(0.1);

      var groups = _this.selections["bargroups"]
        .selectAll('.chart__bar-group')
        .data(barData)
        .enter()
        .append('g')
        .attr('id', function (d) { return 'group_' + d.category })
        .attr("class", function (d) { return "chart__bar-group " + d.category; })
        .attr("transform", function (d) { return "translate(" + _this.groupScale(d.category) + ",0)"; })
        .selectAll('.chart__bar')
        .data(function (d) { return d.values; })
        .enter()
        .append('rect')
        .attr("class", function (d) { return "chart__bar " + d.type; })
        .attr("width", function (d) { return _this.barScale.bandwidth() - spacing })
        .attr("x", function (d) {
          return _this.barScale(d.type);
        })
        .attr("height", 0)
        .attr("y", function (d) { return _this.getInnerHeight() })
        .transition()
        .duration(1000)
        .attr("y", function (d) { return _this.yScale(d.value) })
        .attr("height", function (d) {
          return _this.getInnerHeight() - _this.yScale(d.value);
        })
    };

    return this;
  };

  /**
   * Adds bars to the chart
   * @param {function} selector function that takes the chart data and returns the bar data
   */
  Chart.prototype.addBars = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.selector =
      overrides.selector ||
      function (data) {
        return [
          data.map(function (d) {
            return [d.x, d.y, d.name];
          }),
        ];
      };
    this.selections["bars"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__bars");

    this.updaters["bars"] = function () {
      var barData = options.selector(_this.data)

      var spacing = 2;
      var bandWidth = _this.xScale(barData[1][0]) - _this.xScale(barData[0][0]) - spacing * 2;

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
   * Adds bars to the chart
   * @param {function} selector function that takes the chart data and returns the bar data
   */
   Chart.prototype.addBandedBars = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.renderTooltip = overrides.renderTooltip
    options.selector =
      overrides.selector ||
      function (data) {
        return [
          data.map(function (d) {
            return [d.x, d.y, d.name];
          }),
        ];
      };

    function createSelection(parentSelection) {
      return parentSelection
        .append("g")
        .attr("class", "chart__bars");
    }
    function createRenderer(currentSelection, chart) {
      return function () {
        var barData = options.selector(_this.data)
        var bandWidth = _this.xScale.bandwidth();
        var selection = currentSelection
          .selectAll(".chart__bar")
          .data(barData);
        selection
          .enter()
          .append("rect")
          .attr("class", "chart__bar")
          .attr("x", function (d) {
            return _this.xScale(d[0]);
          })
          .attr("width", bandWidth)
          .attr("y", _this.getInnerHeight())
          .attr("height", 0)
          .on("mousemove", function (d) {
            chart.setHovered(d);
            options.renderTooltip && chart.showTooltip(d3.event, options.renderTooltip);
          })
          .on("mouseout", function (d) {
            chart.setHovered(null);
            options.renderTooltip && chart.hideTooltip();
          })
          .merge(selection)
          .transition()
          .duration(1000)
          .attr("x", function (d) {
            return _this.xScale(d[0]);
          })
          .attr("width", bandWidth)
          .attr("y", function (d) {
            return _this.yScale(d[1]);
          })
          .attr("height", function (d) {
            return _this.getInnerHeight() - _this.yScale(d[1]);
          });
      };
    }

    this.addSelection("bandedBars", "data", createSelection);
    this.addRenderFunction("bandedBars", createRenderer);
    return this;
  };

  /**
   * Adds lines to the chart
   * @param {function} selector a function that accepts chart data and returns the line data
   */
  Chart.prototype.addLines = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.linesId = overrides.linesId || "lines";
    options.selector =
      overrides.selector ||
      function (data) {
        return [
          data.map(function (d) {
            return [d.x, d.y];
          }),
        ];
      };
    _this.lineData = options.selector(_this.data);
    if (_this.getSelection(options.linesId))
      throw new Error(
        "addLines: selection already exists for given linesId " +
        options.linesId
      );
    function createLineSelection(parentSelection) {
      return parentSelection.append("g").attr("class", "chart__lines");
    }
    function createLineRenderer(selection, chart) {
      return function () {
        var line = d3
          .line()
          .x(function (d) {
            return chart.xScale(d[0]);
          })
          .y(function (d) {
            return chart.yScale(d[1]);
          });
        if (options.curve) line.curve(options.curve);
        var lines = selection.selectAll(".chart__line").data(chart.lineData);

        lines
          .enter()
          .append("path")
          .attr("class", function (d, i) {
            return (
              "chart__line chart__line--" + (chart.lineData.length - i - 1)
            );
          })
          .attr("d", line)
          .attr("data-id", function (d) {
            return d[0][2];
          })
          .style("stroke-dasharray", function () {
            return this.getTotalLength();
          })
          .style("stroke-dashoffset", function () {
            return this.getTotalLength();
          })
          .merge(lines)
          .transition()
          .duration(2000)
          .delay(400)
          .attr("d", line)
          .style("stroke-dasharray", function () {
            // need to increase the dasharray to prevent line from cutting off
            var ratio = chart.lastWidth
              ? chart.getInnerWidth() / chart.lastWidth
              : 1;
            return this.getTotalLength() * ratio + "px";
          })
          .style("stroke-dashoffset", 0);

        // track min width for dash array ratio
        chart.lastWidth = chart.lastWidth
          ? Math.min(chart.lastWidth, chart.getInnerWidth())
          : chart.getInnerWidth();
      };
    }
    this.addSelection(options.linesId, "data", createLineSelection);
    this.addRenderFunction(options.linesId, createLineRenderer);
    return this;
  };

  /**
   * Adds a Y axis to the chart
   * @param {*} selector a function that accepts a data entry and returns the y value
   */
  Chart.prototype.addAxisY = function (overrides) {
    var _this = this;
    var options = overrides || {};
    // selector for y data value
    options.selector =
      overrides.selector ||
      function (d) {
        return d.y;
      };
    // option to modify extent, do not modify by default
    options.adjustExtent =
      overrides.adjustExtent ||
      function (e) {
        return e;
      };
    this.selections["yAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--y");
    this.updaters["yAxis"] = function () {
      var extent = d3.extent(_this.data, options.selector);
      var yExtent = options.adjustExtent(extent);
      _this.yScale = d3
        .scaleLinear()
        .rangeRound([_this.getInnerHeight(), 0])
        .domain(yExtent);
      var yAxis = d3
        .axisLeft(_this.yScale)
        .tickSize(-1 * _this.getInnerWidth());
      if (options.ticks) yAxis.ticks(options.ticks);
      if (options.tickFormat) yAxis.tickFormat(options.tickFormat);
      _this.selections["yAxis"]
        .attr("transform", "translate(0, 0)")
        .transition()
        .duration(1000)
        .call(yAxis);
    };
    return this;
  };


  /**
   * Adds a Y axis to the chart
   * @param {*} selector a function that accepts a data entry and returns the y value
   */
  Chart.prototype.addBarAxis = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.position = overrides.position || "bottom"
    // selector for bar value
    options.selector =
      overrides.selector ||
      function (d) {
        return d.x;
      };
    // option to adjust axis labels, do nothing by default
    options.adjustLabels = overrides.adjustLabels || function () { };
    this.selections["barAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--bar");
    this.updaters["barAxis"] = function () {
      _this.xScale = d3
        .scaleBand()
        .domain(_this.data.map(options.selector))
        .range([0, _this.getInnerWidth()])
        .round(0.1)
        .padding(0.2)
      var axis = getAxisFunction(options.position)
      var barAxis = axis(_this.xScale)
      _this.selections["barAxis"]
        .attr("transform", "translate(0," + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(barAxis)
        .call(options.adjustLabels.bind(_this));
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

  Chart.prototype.addBarGroupAxis = function (overrides) {
    // console.log('addBarGroupAxis, ', this)
    var _this = this;
    var options = overrides || {};
    // selector for x data value
    options.selector =
      overrides.selector ||
      function (d) {
        return d.x;
      };
    // option to modify extent, do not modify by default
    options.adjustExtent =
      overrides.adjustExtent ||
      function (e) {
        return e;
      };
    // option to adjust axis labels, do nothing by default
    options.adjustLabels = overrides.adjustLabels || function () { };

    this.selections["barGroup"] = this.selections["overlay"]
      .append("g")
      .attr("class", "chart__axis chart__axis--bargroup");
    this.updaters["barGroup"] = function () {
      var innerWidth = _this.options.width - _this.options.margin[1] - _this.options.margin[3]
      _this.xScale = d3.scaleBand() // projecting discrete data into the diagram
        .domain(_this.options.xTicks.split(';'))
        .range([0, innerWidth])
        .round(0.1)
        .padding(0.1);
      // .paddingInner(0.05);

      // .range([0, _this.getInnerWidth()])
      // .round(0.1)
      // .padding(0.1);
      var xAxis = d3.axisBottom(_this.xScale).tickSize(8).tickSizeOuter(0);
      _this.selections["barGroup"]
        .attr("transform", "translate(0," + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(xAxis)
        .call(options.adjustLabels.bind(_this));
    };
    return this;
  }

  /**
   * Adds a time (X) axis to the chart
   * @param {*} selector function that accepts a data entry and returns the X time value
   */
  Chart.prototype.addTimeAxis = function (overrides) {
    var _this = this;
    var options = overrides || {};
    // selector for x data value
    options.selector =
      overrides.selector ||
      function (d) {
        return d.x;
      };
    // option to modify extent, do not modify by default
    options.adjustExtent =
      overrides.adjustExtent ||
      function (e) {
        return e;
      };
    // option to adjust axis labels, do nothing by default
    options.adjustLabels = overrides.adjustLabels || function () { };

    this.selections["timeAxis"] = this.selections["overlay"]
      .append("g")
      .attr("class", "chart__axis chart__axis--time");
    this.updaters["timeAxis"] = function () {
      var extent = d3.extent(_this.data, options.selector);
      var xExtent = options.adjustExtent(extent);
      _this.xScale = d3
        .scaleTime()
        .rangeRound([0, _this.getInnerWidth()])
        .domain(xExtent);
      var xAxis = d3.axisBottom(_this.xScale).tickSize(8).tickSizeOuter(0);
      if (options.ticks) xAxis.ticks(options.ticks);
      if (options.tickFormat) xAxis.tickFormat(options.tickFormat);
      _this.selections["timeAxis"]
        .attr("transform", "translate(0," + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(xAxis)
        .call(options.adjustLabels.bind(_this));
    };
    return this;
  };

  Chart.prototype.addLegend = function (items) {
    var _this = this;
    if (items) {
      var children = items.map(function (item, i) {
        return (
          "<div class='legend-item legend-item--" +
          i +
          "'><div class='legend-item__color'></div><div class='legend-item__label'>" +
          item +
          "</div></div>"
        );
      });
      $(_this.svgEl)
        .parent()
        .append("<div class='legend'>" + children.join("") + "</div>");
    }
    return this;
  };

  Chart.prototype.addVoronoi = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.xSelector =
      options.xSelector ||
      function (d) {
        return d.x;
      };
    options.ySelector =
      options.ySelector ||
      function (d) {
        return d.y;
      };
    options.renderTooltip =
      options.renderTooltip ||
      function (data) {
        return data;
      };
    this.voronoi = d3
      .voronoi()
      .x(function (d) {
        return _this.xScale(options.xSelector(d));
      })
      .y(function (d) {
        return _this.yScale(options.ySelector(d));
      })
      .extent([
        [0, 0],
        [_this.getInnerWidth(), _this.getInnerHeight()],
      ]);
    function createSelection(parentSelection) {
      return parentSelection.append("g").attr("class", "chart__voronoi");
    }
    function createRenderer(selection, chart) {
      return function () {
        chart.voronoi
          .x(function (d) {
            return _this.xScale(options.xSelector(d));
          })
          .y(function (d) {
            return _this.yScale(options.ySelector(d));
          })
          .extent([
            [0, 0],
            [_this.getInnerWidth(), _this.getInnerHeight()],
          ]);
        var voronoiData = chart.voronoi.polygons(chart.data);
        var voronoi = selection.selectAll("path").data(voronoiData);
        voronoi
          .enter()
          .append("path")
          .merge(voronoi)
          .attr("d", function (d) {
            return d ? "M" + d.join("L") + "Z" : null;
          })
          .on("mousemove", function (d) {
            chart.setHovered(d.data);
            chart
              .getSelection("root")
              .select("path[data-id='" + d.data.name + "']")
              .classed("chart__line--hovered", true);
            chart.showTooltip(d3.event, options.renderTooltip);
            var renderLine = chart.getRenderer("hoverLine");
            renderLine && renderLine();
            var renderDot = chart.getRenderer("hoverDot");
            renderDot && renderDot();
          })
          .on("mouseout", function (d) {
            chart.setHovered(null);
            chart
              .getSelection("root")
              .select("path[data-id='" + d.data.name + "']")
              .classed("chart__line--hovered", false);
            chart.hideTooltip();
            var renderLine = chart.getRenderer("hoverLine");
            renderLine && renderLine();
            var renderDot = chart.getRenderer("hoverDot");
            renderDot && renderDot();
          });
      };
    }
    this.addSelection("voronoi", "data", createSelection);
    this.addRenderFunction("voronoi", createRenderer);
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
