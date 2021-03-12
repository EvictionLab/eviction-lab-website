"use strict";

var Elab = Elab || {};

/**
 * CHART UTILS MODULE
 * ----
 * Provides utility functions for charts.
 *
 * Public methods:
 * - groups: IE11-friendly version of [d3.group](https://github.com/d3/d3-array#group)
 *
 */

Elab.ChartUtils = (function (Elab) {
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
      // throw new TypeError(
      //   "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      // );
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

  return {
    groups: groups,
    nest: nest,
  };
})(Elab);
