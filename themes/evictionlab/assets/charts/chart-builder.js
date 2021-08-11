"use strict";

var Elab = Elab || {};

function getAxisFunction(position) {
  switch (position) {
    case "left":
      return d3.axisLeft;
    case "bottom":
    default:
      return d3.axisBottom;
  }
}

/** Makes a unique identifier */
function makeId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

/**
 * Parses a margin string into an array of pixel values
 * @param {*} marginString
 * @returns {Array<Integer>} [top, right, bottom, left]
 */
function getMargin(margin) {
  if (Array.isArray(margin) && margin.length === 4) return margin;
  if (!margin || typeof margin !== "string") return [8, 48, 60, 54];
  // parse margin string
  const parts = margin.split(" ").map(function (m) {
    return Math.round(Number(m));
  });
  if (parts.length === 4) return parts;
  if (parts.length === 3) return [parts[0], parts[1], parts[2], parts[1]];
  if (parts.length === 2) return [parts[0], parts[1], parts[0], parts[1]];
  if (parts.length === 1) return [parts[0], parts[0], parts[0], parts[0]];
  console.warn("invalid margin provided for chart");
  return [8, 48, 60, 54];
}

Elab.ChartBuilder = (function (Elab) {
  /**
   * Creates an empty chart with root elements
   * @param {DOMElement} svgEl a SVG DOM element to render the chart in
   * @param {Array<Object>} data data to use for the chart
   * @param {Object} options
   */
  function Chart(rootEl, data, options) {
    var svgEl = rootEl.querySelector("svg");
    var rect = rootEl.getBoundingClientRect();
    var tooltipEl = document.createElement("div");
    tooltipEl.className = "chart__tooltip chart__tooltip--" + rootEl.id;
    document.body.appendChild(tooltipEl);
    this.uid = makeId(); // unique id for the chart
    this.data = data;
    options = options || {};
    options.margin = getMargin(options.margin);
    this.options = Object.assign(
      {
        width: Math.max(rect.width, 320),
        height: Math.max(rect.height, 320),
      },
      this.defaultOptions,
      options
    );
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
    this.addBaseGroup();
    this.addDataGroup();
    this.addOverlayGroup();
    this.addClipPath();
    this.addFrame();
    var _this = this;
    this.showTooltip = function (e, render) {
      if (!_this.hovered) return;
      var selection = _this.getSelection("tooltip");
      selection.classed("chart__tooltip--show", true);
      var topOffset = $(window).scrollTop() + e.clientY;
      var html = render(_this.hovered, _this);
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

    window.addEventListener("resize", function () {
      var rect = rootEl.getBoundingClientRect();
      _this.update({
        width: rect.width,
        height: rect.height,
      });
    });
  }

  /** Default options for the chart */
  Chart.prototype.defaultOptions = {
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
    if (id === "root") {
      this.selections["root"] = createSelection(null, this);
    } else {
      this.selections[id] = createSelection(this.selections[parentId], this);
    }
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
    function createRootSelection(parent, chart) {
      return d3.select(chart.svgEl).attr("class", "chart__root");
    }
    function createRootRenderer(selection, chart) {
      return function () {
        selection
          .attr("width", chart.options.width)
          .attr("height", chart.options.height);
      };
    }
    this.addElement("root", null, createRootSelection, createRootRenderer);
    return this;
  };

  /**
   * Adds a group for chart axis elements
   */
  Chart.prototype.addBaseGroup = function () {
    // function that returns the selection
    function createBaseSelection(parent) {
      return parent.append("g").attr("class", "chart__base");
    }
    // function that updates the selection on re-renders
    function createRenderer(selection, chart) {
      return function () {
        selection.attr(
          "transform",
          "translate(" +
            chart.options.margin[3] +
            " " +
            chart.options.margin[0] +
            ")"
        );
      };
    }
    this.addElement("base", "root", createBaseSelection, createRenderer);
    return this;
  };

  /**
   * Adds a clipped group for chart data (bars, lines, etc)
   */
  Chart.prototype.addDataGroup = function () {
    // function that returns the selection
    function createDataSelection(parent, chart) {
      return parent
        .append("g")
        .attr("class", "chart__data")
        .attr("clip-path", "url(#" + chart.uid + "_clip)");
    }
    // function that updates the selection on re-renders
    function createRenderer(selection, chart) {
      return function () {
        selection.attr(
          "transform",
          "translate(" +
            chart.options.margin[3] +
            " " +
            chart.options.margin[0] +
            ")"
        );
      };
    }
    this.addElement("data", "root", createDataSelection, createRenderer);
    return this;
  };

  /**
   * Adds a clipped group for chart data (bars, lines, etc)
   */
  Chart.prototype.addOverlayGroup = function () {
    var _this = this;
    // function that returns the selection of the group element
    function createOverlaySelection(parent) {
      return parent.append("g").attr("class", "chart__overlay");
    }
    // function that updates the selection on re-renders
    function createRenderer(selection, chart) {
      return function () {
        selection.attr(
          "transform",
          "translate(" +
            chart.options.margin[3] +
            " " +
            chart.options.margin[0] +
            ")"
        );
      };
    }
    this.addElement("overlay", "root", createOverlaySelection, createRenderer);
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
    var _this = this;
    function createSelection(parentSelection) {
      return parentSelection
        .append("clipPath")
        .attr("id", _this.uid + "_clip")
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
    options.addPattern = options.addPattern === false ? false : true;
    // make sure IDs have not already been assigned
    if (
      options.patternId &&
      this.getSelection(options.patternId) &&
      options.addPattern
    )
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
      options.addPattern &&
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
   * Adds a rect in the data area that sets the hovered data
   */
  Chart.prototype.addHoverRect = function (overrides) {
    var _this = this;
    var options = overrides || {};
    function getClosestIndex(vals, val) {
      var index = d3.bisect(vals, val);
      var left = vals[index - 1];
      var right = vals[index];
      var leftDiff = Math.abs(+left - +val);
      var rightDiff = Math.abs(+right - +val);
      return leftDiff < rightDiff ? index - 1 : index;
    }
    function createSelection(parentSelection) {
      return parentSelection.append("rect").attr("class", "chart__hover-rect");
    }
    function createRenderer(selection, chart) {
      return function () {
        selection
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", chart.getInnerWidth())
          .attr("height", chart.getInnerHeight())
          .attr("fill", "transparent")
          .on("mousemove", function () {
            var xPos = d3.event.offsetX - chart.options.margin[3];
            var xVal = chart.xScale.invert(xPos);
            var xVals = chart.data.map(function (d) {
              return d.x;
            });
            var closestIndex = getClosestIndex(xVals, xVal);
            chart.setHovered(chart.data[closestIndex]);
            var renderLine = chart.getRenderer("hoverLine");
            renderLine && renderLine();
            options.renderTooltip &&
              chart.showTooltip(d3.event, options.renderTooltip);
          })
          .on("mouseout", function (d) {
            chart.setHovered(null);
            options.renderTooltip && chart.hideTooltip();
            var renderLine = chart.getRenderer("hoverLine");
            renderLine && renderLine();
          });
      };
    }
    this.addElement("hoverRect", "data", createSelection, createRenderer);
    return this;
  };

  /**
   * Adds a vertical line on hover to show currently hovered X position on line charts
   * @returns
   */
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
    this.addElement("hoverLine", "data", createSelection, createRenderer);
    return this;
  };

  /**
   * Adds a hover dot to the nearest hovered point on line charts
   * @returns
   */
  Chart.prototype.addHoverDot = function () {
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
    this.addElement("hoverDot", "data", createSelection, createRenderer);
    return this;
  };

  /**
   * Adds groups of bars to the chart
   * @param {function} selector function that takes the chart data and returns the bar data
   */
  Chart.prototype.addBarGroups = function (selector) {
    // console.log('addBarGroups')
    var _this = this;
    this.selections["bargroups"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__bargroups");

    this.updaters["bargroups"] = function () {
      // console.log('updater for bargroups')
      var barData = selector(_this.data, _this.options);
      var spacing = 2;

      var groupNames = Object.keys(_this.options.barFormat);
      var typeNames = barData[0].values.map(function (el) {
        return el.type;
      });

      _this.groupScale = d3
        .scaleBand() // projecting discrete data into the diagram
        .domain(groupNames)
        .range([0, _this.getInnerWidth()])
        .round(0.1)
        .padding(0.1);

      _this.barScale = d3
        .scaleBand()
        .domain(typeNames)
        .range([0, _this.groupScale.bandwidth()])
        .round(0.1)
        .padding(0.1);

      var parentSelection = _this.selections["bargroups"]
        .selectAll(".chart__bar-group")
        .data(barData);

      // groups enter render
      var groupSelection = parentSelection
        .enter()
        .append("g")
        .attr("id", function (d) {
          return "group_" + d.category;
        })
        .attr("class", function (d) {
          return "chart__bar-group " + d.category;
        })
        .attr("transform", function (d) {
          return "translate(" + _this.groupScale(d.category) + ",0)";
        })
        .merge(parentSelection)
        .attr("transform", function (d) {
          return "translate(" + _this.groupScale(d.category) + ",0)";
        });

      var barDataSelection = groupSelection
        .selectAll(".chart__bar")
        .data(function (d) {
          return d.values;
        });

      var barsSelection = barDataSelection
        .enter()
        .append("rect")
        .attr("class", function (d) {
          return "chart__bar " + d.type;
        })
        .attr("width", function (d) {
          return _this.barScale.bandwidth() - spacing;
        })
        .attr("x", function (d) {
          return _this.barScale(d.type);
        })
        .attr("height", 0)
        .attr("y", function (d) {
          return _this.getInnerHeight();
        });

      // bar updates render
      barsSelection
        .merge(barDataSelection)
        .transition()
        .duration(1000)
        .attr("width", function (d) {
          return _this.barScale.bandwidth() - spacing;
        })
        .attr("x", function (d) {
          return _this.barScale(d.type);
        })
        .attr("y", function (d) {
          return _this.yScale(d.value);
        })
        .attr("height", function (d) {
          return _this.getInnerHeight() - _this.yScale(d.value);
        });
    };

    return this;
  };

  /**
   * Adds bars to the chart for time based axis
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
      var barData = options.selector(_this.data);

      var spacing = 1.5;
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
        .on("mousemove", function (d) {
          _this.setHovered(d);
          options.renderTooltip &&
            _this.showTooltip(d3.event, options.renderTooltip);
        })
        .on("mouseout", function (d) {
          _this.setHovered(null);
          options.renderTooltip && _this.hideTooltip();
        })
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

  Chart.prototype.addMarkLine = function (overrides) {
    var _this = this;
    var options = overrides || {};
    if (!options.marks) return this;
    this.selections["marks"] = this.selections["data"]
      .append("g")
      .attr("class", "chart__marks");

    this.updaters["marks"] = function () {
      var selection = _this.selections["marks"]
        .selectAll(".chart__mark")
        .data(options.marks);

      selection
        .enter()
        .append("line")
        .attr("class", "chart__mark")
        .attr("x1", function (d) {
          return _this.xScale(d);
        })
        .attr("x2", function (d) {
          return _this.xScale(d);
        })
        .attr("y1", 0)
        .attr("y2", _this.getInnerHeight())
        .merge(selection)
        .transition()
        .duration(1000)
        .attr("x1", function (d) {
          return _this.xScale(d);
        })
        .attr("x2", function (d) {
          return _this.xScale(d);
        })
        .attr("y1", 0)
        .attr("y2", _this.getInnerHeight())
        .attr("stroke-width", 1);
    };

    return this;
  };

  /**
   * Adds bars to the chart for category or location based axis
   * @param {function} selector function that takes the chart data and returns the bar data
   */
  Chart.prototype.addBandedBars = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.renderTooltip = overrides.renderTooltip;
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
      return parentSelection.append("g").attr("class", "chart__bars");
    }
    function createRenderer(currentSelection, chart) {
      return function () {
        var barData = options.selector(_this.data);
        var bandWidth = _this.xScale.bandwidth();
        var selection = currentSelection.selectAll(".chart__bar").data(barData);
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
            options.renderTooltip &&
              chart.showTooltip(d3.event, options.renderTooltip);
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
    options.delay = overrides.delay || 0;
    options.duration = overrides.duration || 2000;
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
          })
          .defined(function (d) {
            return d[1] || d[1] === 0;
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
          .duration(options.duration)
          .delay(options.delay)
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

  Chart.prototype.addStackArea = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.stackId = overrides.stackId || "stacks";
    _this.stackData = options.series;
    function createAreaSelection(parentSelection) {
      return parentSelection.append("g").attr("class", "chart__stacks");
    }
    function createAreaRenderer(selection, chart) {
      return function () {
        var area = d3
          .area()
          .x(function (d) {
            return chart.xScale(d.data.x);
          })
          .y0(function (d) {
            return chart.yScale(d[0]);
          })
          .y1(function (d) {
            return chart.yScale(d[1]);
          });

        var areaSelection = selection.selectAll("path").data(chart.stackData);

        areaSelection
          .enter()
          .append("path")
          .attr("class", function (d, i) {
            return "chart__area chart__area--" + i;
          })
          .merge(areaSelection)
          .attr("d", area);
      };
    }

    this.addElement(
      options.stackId,
      "data",
      createAreaSelection,
      createAreaRenderer
    );
    return this;
  };

  Chart.prototype.addHistogram = function (overrides) {
    var _this = this;
    overrides = overrides || {};
    _this.binThreshold = overrides.threshold || 40;

    function createGenerator(data, thresholds) {
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

    function createSelection(parentSelection) {
      return parentSelection.append("g").attr("class", "chart__histogram");
    }

    function createRenderer(selection, chart) {
      return function renderHistogram() {
        var histogram = createGenerator(chart.data, chart.binThreshold);
        var bins = histogram(chart.data);
        var barSelection = selection.selectAll("rect").data(bins);

        barSelection
          .enter()
          .append("rect")
          .attr("class", "chart__bar chart__bar--histogram")
          .attr("x", function (d) {
            return chart.xScale(d.x0);
          })
          .attr("y", function (d) {
            return chart.getInnerHeight();
          })
          .attr("width", function (d) {
            return chart.xScale(d.x1) - chart.xScale(d.x0) - 1;
          })
          .attr("height", function (d) {
            return 0;
          })
          .on("mousemove", function (d) {
            if (overrides.renderTooltip) {
              chart.setHovered(d);
              chart.showTooltip(d3.event, overrides.renderTooltip);
            }
          })
          .on("mouseleave", function (d) {
            chart.setHovered(null);
            chart.hideTooltip();
          })
          .merge(barSelection)
          .transition()
          .duration(chart.duration || 1000)
          .attr("x", function (d) {
            return chart.xScale(d.x0);
          })
          .attr("y", function (d) {
            return chart.yScale(d.length);
          })
          .attr("width", function (d) {
            return chart.xScale(d.x1) - chart.xScale(d.x0) - 1;
          })
          .attr("height", function (d) {
            return chart.getInnerHeight() - chart.yScale(d.length);
          });
      };
    }

    this.addElement("histogram", "data", createSelection, createRenderer);
    return this;
  };

  /**
   * Adds an X axis to the chart
   * @param {*} selector a function that accepts a data entry and returns the y value
   */
  Chart.prototype.addAxisX = function (overrides) {
    var _this = this;
    var options = overrides || {};
    // selector for y data value
    options.selector =
      options.selector ||
      function (d) {
        return d.x;
      };

    this.selections["xAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--x");
    this.updaters["xAxis"] = function () {
      var extent = options.extent
        ? options.extent
        : d3.extent(_this.data, options.selector);
      var xExtent =
        typeof options.adjustExtent === "function"
          ? options.adjustExtent(extent)
          : extent;
      _this.xScale = d3
        .scaleLinear()
        .rangeRound([0, _this.getInnerWidth()])
        .domain(xExtent);
      if (options.nice) {
        _this.xScale.nice();
      }
      var xAxis = d3
        .axisBottom(_this.xScale)
        .tickSize(-1 * _this.getInnerHeight());
      if (options.ticks) xAxis.ticks(options.ticks);
      if (options.tickFormat) xAxis.tickFormat(options.tickFormat);
      _this.selections["xAxis"]
        .attr("transform", "translate(0, " + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(xAxis);
      if (options.adjustLabels)
        _this.selections["xAxis"].call(options.adjustLabels.bind(_this));
      // text label for the x axis
      if (options.xLabel) {
        _this.selections["base"].selectAll(".chart__axis-label--x").remove();
        _this.selections["base"]
          .append("text")
          .attr("class", "chart__axis-label chart__axis-label--x")
          .attr("x", _this.getInnerWidth() / 2)
          .attr("y", _this.getInnerHeight())
          .style("text-anchor", "middle")
          .attr("dy", options.labelMargin || "3em")
          .text(options.xLabel);
      }
    };
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
    this.selections["yAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--y");
    this.updaters["yAxis"] = function () {
      var extent = options.extent
        ? options.extent
        : d3.extent(_this.data, options.selector);
      var yExtent =
        typeof options.adjustExtent === "function"
          ? options.adjustExtent(extent)
          : extent;
      _this.yScale = d3
        .scaleLinear()
        .rangeRound([_this.getInnerHeight(), 0])
        .domain(yExtent)
        .nice();
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
      // text label for the x axis
      if (options.yLabel) {
        _this.selections["base"].selectAll(".chart__axis-label--y").remove();
        _this.selections["base"]
          .append("text")
          .attr("class", "chart__axis-label chart__axis-label--y")
          .attr("transform", "rotate(-90)")
          .attr("x", 0 - _this.getInnerHeight() / 2)
          .attr("y", 0)
          .attr("dy", options.labelMargin || "-3em")
          .style("text-anchor", "middle")
          .text(options.yLabel);
      }
    };
    return this;
  };

  /**
   * Adds an axis for bar charts
   * @param {*} selector a function that accepts a data entry and returns the y value
   */
  Chart.prototype.addBarAxis = function (overrides) {
    var _this = this;
    var options = overrides || {};
    options.position = overrides.position || "bottom";
    // selector for bar value
    options.selector =
      overrides.selector ||
      function (d) {
        return d.x;
      };
    // option to adjust axis labels, do nothing by default
    options.adjustLabels = overrides.adjustLabels || function () {};
    this.selections["barAxis"] = this.selections["base"]
      .append("g")
      .attr("class", "chart__axis chart__axis--bar");
    this.updaters["barAxis"] = function () {
      _this.xScale = d3
        .scaleBand()
        .domain(_this.data.map(options.selector))
        .range([0, _this.getInnerWidth()])
        .round(0.1)
        .padding(0.2);
      var axis = getAxisFunction(options.position);
      var barAxis = axis(_this.xScale);
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
   * Adds an axis used for grouped bar charts
   * @param {*} overrides
   * @returns
   */
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
    options.adjustLabels = overrides.adjustLabels || function () {};

    this.selections["barGroup"] = this.selections["overlay"]
      .append("g")
      .attr("class", "chart__axis chart__axis--bargroup");
    this.updaters["barGroup"] = function () {
      var innerWidth =
        _this.options.width - _this.options.margin[1] - _this.options.margin[3];
      _this.xScale = d3
        .scaleBand() // projecting discrete data into the diagram
        .domain(_this.options.xTicks.split(";"))
        .range([0, innerWidth])
        .round(0.1)
        .padding(0.1);
      var xAxis = d3.axisBottom(_this.xScale).tickSize(8).tickSizeOuter(0);
      _this.selections["barGroup"]
        .attr("transform", "translate(0," + _this.getInnerHeight() + ")")
        .transition()
        .duration(1000)
        .call(xAxis)
        .call(options.adjustLabels.bind(_this));
    };
    return this;
  };

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
    options.adjustLabels = overrides.adjustLabels || function () {};

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

  /**
   * Adds a legend to the chart
   * @param {*} items
   * @returns
   */
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

  /**
   * Adds a voronoi layer to the data group
   * Used for showing tooltips for the nearest hover point
   * @param {*} overrides
   * @returns
   */
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
        var voronoiData = chart.voronoi.polygons(
          chart.data.filter(function (d) {
            return !!d.y;
          })
        );
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
    this.addElement("voronoi", "data", createSelection, createRenderer);
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
