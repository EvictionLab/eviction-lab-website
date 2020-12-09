"use strict";

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function identity(x) {
  return x;
}

function group(values) {
  for (
    var _len = arguments.length,
      keys = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    keys[_key - 1] = arguments[_key];
  }

  return nest(values, identity, identity, keys);
}

function groups(values) {
  for (
    var _len2 = arguments.length,
      keys = new Array(_len2 > 1 ? _len2 - 1 : 0),
      _key2 = 1;
    _key2 < _len2;
    _key2++
  ) {
    keys[_key2 - 1] = arguments[_key2];
  }

  return nest(values, Array.from, identity, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    var groups = new Map();
    var keyof = keys[i++];
    var index = -1;

    var _iterator = _createForOfIteratorHelper(values),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var value = _step.value;
        var key = keyof(value, ++index, values);

        var _group = groups.get(key);

        if (_group) _group.push(value);
        else groups.set(key, [value]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(groups),
      _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          _key3 = _step2$value[0],
          _values = _step2$value[1];

        groups.set(_key3, regroup(_values, i));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return map(groups);
  })(values, 0);
}

var Elab = Elab || {};

/**
 * LINE CHART MODULE
 * ----
 * Creates the intro figure and populates data into
 * placeholders for the intro section.
 *
 * Public methods:
 * - init(root, options)
 *
 */

Elab.BarChart = (function (Elab) {
  /**
   * Gets X ticks based on type
   * @param {string} type [day, week, month, year]
   */
  function getXTicks(type) {
    switch (type) {
      case "day":
        return d3.timeDay.every(1);
      case "week":
        return d3.timeWeek.every(1);
      case "month":
        return d3.timeMonth.every(1);
      case "year":
        return d3.timeYear.every(1);
      default:
        return d3.timeWeek.every(1);
    }
  }

  /**
   * Default formatter for X axis ( shows week range: "08/15 - 08/21" )
   * @param {*} d
   */
  var xFormat = function (d) {
    var d1 = function (d) {
      return d3.timeFormat("%m/%e")(d).replace(" ", "");
    };
    return d1(d) + " - " + d1(d3.timeDay.offset(d, 6));
  };

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
  var lineSelector = function (data) {
    var grouped = groups(data, function (d) {
      return d.name;
    }).map(function (d) {
      return d[1];
    });
    return grouped.map(function (group) {
      return group.map(function (d) {
        return [d.x, d.y, d.name];
      });
    });
  };

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, groupBy, curve, highlight, xTicks, xFormat, yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    console.log('createFigure: ', root, data, dataOptions)
    var highlighted = dataOptions.highlight
      ? dataOptions.highlight.split(";").reverse()
      : null;
    // sort data so highlighted items are at the end of the array in the same order as the "highlight" string
    if (highlighted) {
      var key = "name";
      var hl = highlighted.slice().reverse();
      function compare(a, b) {
        var aHighlightIndex = hl.indexOf(a[key]);
        var bHighlightIndex = hl.indexOf(b[key]);
        if (aHighlightIndex > -1 && bHighlightIndex > -1) {
          // both are highlighted, same item
          if (aHighlightIndex === bHighlightIndex) return 0;
          // both are highlighted, a is higher
          return aHighlightIndex > bHighlightIndex ? -1 : 1;
        }
        if (aHighlightIndex > -1) return 1;
        if (bHighlightIndex > -1) return -1;
        if (a[key] === b[key]) return 0;
        return a[key] > b[key] ? 1 : -1;
      }
      data.sort(compare);
    }

    var svg = $(root).find("svg")[0];
    var rect = root.getBoundingClientRect();
    var options = Object.assign(
      {
        width: rect.width,
        height: Math.max(rect.height, 320),
        margin: [8, 48, 60, 54],
      },
      dataOptions
    );

  var getBarType = function(str, options) {
    var type = '';
    var c = options.highlight.split(';')
    var result = c.find(function(el) {
      return str.indexOf(el) > -1
    })
    return result
  }

  var findDataItem = function(data, options) {
    console.log('findDataItem, ', data, options)
    var result = data.find(function(d) {
      return Number(d.cofips) === Number(options.active);
    })
    console.log('result, ', result)
    return result
  }

    /**
   * Selects the bar data set from the chart data
   * @param {*} data
   */
  var selectBarsData = function (data, options) {
    console.log('selectBarsData, blah, ', data, options)
    var d = findDataItem(data, options)
    if (!d) {
      d = data[0]
    }
    console.log('d, ', d)
    // var formatKeys = Object.keys(barFormat)
    // console.log('formatKeys, ', formatKeys)
    result = []
    options.ticksArr.forEach(function(el) {
      var targets = options.barFormat[el]
      // // console.log('targets, ', targets)
      var rArr = []
      targets.forEach(function(el, i) {
        rArr[i] = {
          value: d[el],
          type: getBarType(el, options)
        }
      })
      result.push({
        category: String(el),
        values: rArr
      })
    })
    return result
  };

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
            var newArr = []
            var columns = []
            Object.values(options.barFormat).forEach(function(el) {
              var arr = el.slice(',')
              arr.forEach(function(el) {
                columns.push(el)
              })
            })
            console.log('columns, ', columns)
            // var d = data.find(function(el) {
            //   return el.cofips === options.active
            // })
            var d = findDataItem(data, options)
            console.log('d, ', d)
            // d.forEach(function(el, i) {
            columns.forEach(function(c) {
              newArr.push(parseFloat(d[c]))
            })
            // })
            console.log('newArr, ', newArr)
            var newExtent = d3.extent(newArr)
            console.log('newExtent, ', newExtent)
            var range = newExtent[1] - newExtent[0];
            console.log('range, ', range)
            return [newExtent[0] - range * 0.05, newExtent[1] + range * 0.05];
          },
          ticks: dataOptions.yTicks || 5,
          tickFormat: d3.format(dataOptions.yFormat || ",d"),
        })
        // Adds bar chart axes for categories in the dataset.
        // adds time axis from dates in the dataset
        .addBarGroupAxis({
          selector: xSelector,
          ticks: dataOptions.xTicks ? getXTicks(dataOptions.xTicks) : undefined,
          tickFormat: dataOptions.xFormat
            ? d3.timeFormat(dataOptions.xFormat)
            : dataOptions.xTicks === "week"
            ? xFormat
            : undefined,
          adjustLabels: function (selection) {
            if (window.innerWidth < 540) {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-30)");
            } else {
              selection
                .selectAll(".tick text")
                .attr("text-anchor", null)
                .attr("transform", null);
            }
          },
        })
        // adds the bars
        .addBarGroups(selectBarsData)
        // adds a tooltip with the provided render function
        // .addTooltip(dataOptions.showTooltip, dataOptions.hideTooltip)
        // renders the chart
        // .addHoverLine()
        // .addHoverDot()

        .render()
    );
  }

  /**
   * Initializes the chart figure and handles resizing
   * @param {*} root
   * @param {*} cityData
   */
  function initFigure(root, data, options) {
    console.log('initFigure, ', data, options)
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
    console.log('loadData, ', options)
    // var parseDate = d3.timeParse("%m/%d/%Y");
    d3.csv(options.data, function (data) {
      console.log('d3.csv, ', data, options)
      var result = data.map(function (d) {
        var obj = {}
        options.columns.forEach(function(el, i){
          obj[el] = d[el];
        })
        // console.log('obj, ',obj)
        return obj;
        // return {

          // name: d[options.groupBy],
          // x: parseDate(d[options.x]),
          // y: parseFloat(d[options.y]),
          // [searchId]: d[options.searchId],
          // searchLabel: parseFloat(d[options.searchLabel]),

        // };
      });
      callback && callback(result);
    });
  }

  /**
   * Creates the intro chart
   */
  function init(rootEl, options) {
    console.log('barchart init, ', rootEl, options)
    if (!options || typeof options !== "object")
      throw new Error("barchart: no options object provided");
    if (!options.data)
      throw new Error("barchart: must provide file URL in options");
    if (!options.columns)
      throw new Error("barchart: must provide columns for CSV processing in options");
    if (!options.columns)
      throw new Error("barchart: must provide columns for CSV processing in options");
    // options.x = options.x ||  "x";
    // options.y = options.y || "y";
    // options.groupBy = options.groupBy || "name";
    ACTIVE_SEARCH = options.active || '';
    console.log('ACTIVE_SEARCH, ', ACTIVE_SEARCH)
    // COLUMNS
    options.cofips = "cofips";
    options.state = "state";
    options.ticksArr = String(options.xTicks)
      .split(';')
      .map(function(el, i) { return el.toLowerCase()});
    options.barsGroups = options.xBars.split(';');
    options.barFormat = []
    options.ticksArr.forEach(function(el, i){
      options.barFormat[el.toLowerCase()] = options.barsGroups[i].split(',')
    })
    options.columns = options.columns.split(',')
    console.log('options')

    loadData(options, function (data) {
      console.log('loadData')
      initFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
