"use strict";

var Elab = Elab || {};

/**
 * GROUPED BAR CHART MODULE
 * ----
 * Creates a grouped bar chart with search
 *
 * Public methods:
 * - init(root, options)
 *
 */

Elab.GroupedBarChart = (function (Elab) {
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
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, groupBy, curve, highlight, xTicks, xFormat, yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    // console.log('createFigure: ', root, data, dataOptions)
    var options = dataOptions;

    var getBarType = function (str, options) {
      var type = "";
      var c = options.highlight.split(";");
      var result = c.find(function (el) {
        return str.indexOf(el) > -1;
      });
      return result;
    };

    var findDataItem = function (data, options) {
      // console.log('findDataItem, ', data, options)
      var result = data.find(function (d) {
        return Number(d[options.searchId]) === Number(options.active);
      });
      // console.log('result, ', result)
      return result;
    };

    /**
     * Selects the bar data set from the chart data
     * @param {*} data
     */
    var selectBarsData = function (data, options) {
      // console.log('selectBarsData, blah, ', data, options)
      var d = findDataItem(data, options);
      if (!d) {
        d = data[0];
      }
      result = [];
      options.ticksArr.forEach(function (el) {
        var targets = options.barFormat[el];
        // // console.log('targets, ', targets)
        var rArr = [];
        targets.forEach(function (el, i) {
          rArr[i] = {
            value: d[el],
            type: getBarType(el, options),
          };
        });
        result.push({
          category: String(el),
          values: rArr,
        });
      });
      return result;
    };

    var chart = new Elab.ChartBuilder(root, data, options);
    return (
      chart
        // adds y axis, using max of the trend line value or bar value
        .addAxisY({
          selector: ySelector,
          adjustExtent: function (extent) {
            var newArr = [];
            var columns = [];
            Object.values(options.barFormat).forEach(function (el) {
              var arr = el.slice(",");
              arr.forEach(function (el) {
                columns.push(el);
              });
            });
            var d = findDataItem(data, options);
            // console.log('d, ', d)
            // d.forEach(function(el, i) {
            columns.forEach(function (c) {
              newArr.push(parseFloat(d[c]));
            });
            // })
            // console.log('newArr, ', newArr)
            var newExtent = d3.extent(newArr);
            // console.log('newExtent, ', newExtent)
            var range = newExtent[1] - newExtent[0];
            // console.log('range, ', range)
            return [newExtent[0] - range * 0.05, newExtent[1] + range * 0.05];
          },
          ticks: dataOptions.yTicks || 5,
          tickFormat: d3.format(dataOptions.yFormat || ",d"),
        })
        // Adds bar chart axes for categories in the dataset.
        // adds time axis from dates in the dataset
        .addBarGroupAxis({
          selector: xSelector,
          ticks: dataOptions.xTicks,
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
        .render()
    );
  }

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    // console.log('loadData, ', options)
    // var parseDate = d3.timeParse("%m/%d/%Y");
    d3.csv(options.data, function (data) {
      // console.log('d3.csv, ', data, options)
      var result = data.map(function (d) {
        var obj = {};
        options.columns.forEach(function (el, i) {
          obj[el] = d[el];
        });
        // console.log('obj, ',obj)
        return obj;
      });
      callback && callback(result);
    });
  }

  /**
   * Creates the intro chart
   */
  function init(rootEl, options) {
    // console.log('barchart init, ', rootEl, options)
    if (!options || typeof options !== "object")
      throw new Error("barchart: no options object provided");
    if (!options.data)
      throw new Error("barchart: must provide file URL in options");
    if (!options.columns)
      throw new Error(
        "barchart: must provide columns for CSV processing in options"
      );
    options.cofips = "cofips";
    options.state = "state";
    options.ticksArr = String(options.xTicks)
      .split(";")
      .map(function (el, i) {
        return el.toLowerCase();
      });
    options.barsGroups = options.xBars.split(";");
    options.barFormat = [];
    options.ticksArr.forEach(function (el, i) {
      options.barFormat[el.toLowerCase()] = options.barsGroups[i].split(",");
    });
    options.columns = options.columns.split(",");
    // console.log('options')

    loadData(options, function (data) {
      // console.log('loadData')
      createFigure(rootEl, data, options);
    });
  }

  return {
    init: init,
  };
})(Elab);
