"use strict";

var Elab = Elab || {};
Elab.Utils = Elab.Utils || {};

/**
 * CHART UTILS MODULE
 * ----
 * Provides utility functions for charts.  Extends Elab.Utils if already defined.
 *
 * Public methods:
 * - group: IE11-friendly version of [d3.group](https://github.com/d3/d3-array#group)
 *
 */

Elab.Utils = Object.assign(
  Elab.Utils,
  (function (Elab) {
    // group an array of objects by a property
    function group(data, property) {
      return d3
        .nest()
        .key(function (d) {
          return d[property];
        })
        .entries(data);
    }

    function loadData(dataUrl, shaper, callback) {
      d3.csv(dataUrl, function (data) {
        if (!data) {
          console.error("unable to load data from " + dataUrl);
          return;
        }

        var result = shaper ? shaper(data) : data;
        callback && callback(result);
      });
    }
    /**
     * Loads multiple files in sequence.
     * Each file has an id, url, and (optionally) a shaper
     */
    function loadAll(files, callback, dataMap = {}) {
      if (!files.length) return callback(dataMap);
      const [file, ...restFiles] = files;
      // chains one load after the next
      loadData(file.url, file.shaper, (fileData) => {
        dataMap[file.id] = fileData;
        loadAll(restFiles, callback, dataMap);
      });
    }

    function isNumberLike(value) {
      if (!["string", "number"].includes(typeof value)) return false;
      return value !== "" && !Number.isNaN(Number(value));
    }

    /**
     * Converts a string to a function, allowing shortcodes to pass in functions as argumenst, eg:
     *   yFormat="y => d3.format('.0%')(y/100)"
     *   panelPropsFormatter="v => `<span>${d3.format('$,d')(v)}</span> distributed`"
     */
    function createFunctionFromStr(strFn) {
      return new Function(`return ${strFn}`)();
    }

    /**
     * Derives a formatter from a string, treating as fn if or d3 format string.
     */
    function deriveFormatter(format = "") {
      return format.includes("=>") ? createFunctionFromStr(format) : d3.format(format || ",d");
    }

    return {
      group: group,
      loadData: loadData,
      loadAll: loadAll,
      isNumberLike: isNumberLike,
      createFunctionFromStr: createFunctionFromStr,
      deriveFormatter: deriveFormatter,
    };
  })(Elab),
);
