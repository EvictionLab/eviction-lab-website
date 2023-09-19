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

  function renderTooltip(tooltip) {
    return (
        '<h1 class="tooltip__title">' +
        tooltip.category +
        "</h1>" +
        '<div class="tooltip__item">' +
        "<span> " +
        tooltip.type +
        ": " +
        "</span>" +
        "<span> " +
        tooltip.value +
        "</span>" +
        "</div>"
    );
  }

  /**
   * Creates the chart and renders
   * @param {HTMLElement} root
   * @param {Array<Object>} data
   * @param {Object} dataOptions { margin, x, y, groupBy, curve, highlight, xTicks, xFormat, yTicks, yFormat, title }
   */
  function createFigure(root, data, dataOptions) {
    // console.log("createFigure: ", root, data, dataOptions);
    var options = dataOptions;
    const yTooltipFormat = d3.format(options.yTooltipFormat || options.yFormat || ",d");

    var getBarType = function (str, options) {
      if (options.saneLoading) return str.split("_")[0];
      var c = options.highlight.split(";");
      var result = c.find(function (el) {
        return str.indexOf(el) > -1;
      });
      return result;
    };

    var findDataItem = function (data, options) {
      // console.log("findDataItem, ", data, options);
      if (options.saneLoading) return data[0];

      var result = data.find(function (d) {
        return Number(d[options.searchId]) === Number(options.active);
      });
      // console.log("result, ", result);
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
      options.ticksArr.forEach(function (el, categoryIndex) {
        var targets = options.barFormat[el];
        var categoryStr = dataOptions.xTicks.split(";")[categoryIndex];
        var rArr = [];
        targets.forEach(function (el, i) {
          var typeStr = dataOptions.legendItems.split(";")[i];
          rArr[i] = {
            category: String(el),
            value: d[el],
            type: getBarType(el, options),
            renderTooltip: function (hoverData) {
              const tooltip = {
                type: typeStr,
                category: categoryStr,
                value: yTooltipFormat(hoverData.value),
              };
              return renderTooltip(tooltip);
            },
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
            if (options.yMin) newArr.push(Number(options.yMin));
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
              // console.log({ d, c, data, options });
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
              selection.selectAll(".tick text").attr("text-anchor", null).attr("transform", null);
            }
          },
        })
        // adds the bars
        .addBarGroups(selectBarsData)
        .render()
    );
  }

  const strip = (s) => s.toLowerCase().replace(/[^a-z]/g, "-");

  /**
   * Loads and parses the CSV table
   */
  function loadData(options, callback) {
    // console.log('loadData, ', options)
    // var parseDate = d3.timeParse("%m/%d/%Y");
    d3.csv(options.data, function (data) {
      // console.log("d3.csv, ", data, options);
      var result;
      if (options.saneLoading) {
        // convert rows of data into the expected single data object
        const { dataMap, groups, metrics } = data.reduce(
          (accum, { group, metric, value }) => {
            const key = `${strip(metric)}_${strip(group)}`;
            if (!group || !metric || !!accum.dataMap[key] || typeof value !== "string") {
              console.warn("check grouped bar chart data format");
            }
            accum.dataMap[key] = value;
            if (!accum.groups.includes(group)) accum.groups.push(group);
            if (!accum.metrics.includes(metric)) accum.metrics.push(metric);
            return accum;
          },
          { dataMap: {}, groups: [], metrics: [] },
        );
        result = [dataMap];
        options.barsGroups = groups.map((g) =>
          metrics.map((m) => `${strip(m)}_${strip(g)}`).join(","),
        );
        // set the xTicks based on the groups, in the order they appear in the data
        if (!options.xTicks) options.xTicks = groups.join(";");
        // set the legend items based on the metrics, in the order they appear in the data
        if (!options.legendItems) options.legendItems = metrics.join(";");
      } else {
        result = data.map(function (d) {
          var obj = {};

          options.columns.forEach(function (el, i) {
            obj[el] = d[el];
          });
          // console.log('obj, ',obj)
          return obj;
        });
      }

      console.log({ data, result });
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
    if (!options.data) throw new Error("barchart: must provide file URL in options");
    if (!options.columns && !options.saneLoading)
      throw new Error("barchart: must provide columns for CSV processing in options");
    options.cofips = "cofips";
    options.state = "state";
    // console.log('options')

    options.columns = options.columns.split(",");
    loadData(options, function (data) {
      // console.log("loadData", data, options);
      options.ticksArr = String(options.xTicks)
        .split(";")
        .map(function (el, i) {
          return el.toLowerCase();
        });
      // saneLoading calculates bargoups based on data
      if (!options.saneLoading) {
        options.barsGroups = options.xBars.split(";");
      }
      // console.log("bargroups: ", options.barsGroups);
      options.barFormat = [];
      options.ticksArr.forEach(function (el, i) {
        options.barFormat[el.toLowerCase()] = options.barsGroups[i].split(",");
      });
      // console.log("barFormat: ", options.barFormat);

      console.log("coverted options", options);
      createFigure(rootEl, data, options);
      // HACK: gets the chart to resize, which properly makes room for its axis labels
      window.dispatchEvent(new Event("resize"));
    });
  }

  return {
    init: init,
  };
})(Elab);
