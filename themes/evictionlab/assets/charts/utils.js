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

    return {
      group: group,
    };
  })(Elab)
);
