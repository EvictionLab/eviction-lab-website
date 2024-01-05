"use strict";

var Elab = Elab || {};
console.log(23432423);
/**
 * LEGEND MODULE
 * ----
 * Creates a legend
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.Legend = (function (Elab) {
  console.log("ihhi");
  // Copyright 2021, Observable Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/color-legend
  function Legend(
    rootEl,
    color,
    {
      scaleType,
      tickSize = 6,
      width = 320,
      height = 44 + tickSize,
      marginTop = 18,
      marginRight = 0,
      marginBottom = 16 + tickSize,
      marginLeft = 0,
      ticks = width / 64,
      tickFormat,
      tickValues,
    } = {},
  ) {
    const svg = d3
      .select(rootEl)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("overflow", "visible")
      .style("display", "block");

    let tickAdjust = (g) =>
      g
        .selectAll(".tick line")
        .attr("y1", marginTop + marginBottom - height)
        .attr("stroke-opacity", "0.5");
    let x;

    if (scaleType === "scaleThreshold") {
      const thresholds = color.thresholds
        ? color.thresholds() // scaleQuantize
        : color.quantiles
        ? color.quantiles() // scaleQuantile
        : color.domain(); // scaleThreshold

      const thresholdFormat =
        tickFormat === undefined
          ? (d) => d
          : typeof tickFormat === "string"
          ? d3.format(tickFormat)
          : tickFormat;

      x = d3
        .scaleLinear()
        .domain([-1, color.range().length - 1])
        .rangeRound([marginLeft, width - marginRight]);

      svg
        .append("g")
        .selectAll("rect")
        .data(color.range())
        .enter() // enter selection
        .append("rect")
        .attr("x", (d, i) => x(i - 1))
        .attr("y", marginTop)
        .attr("width", (d, i) => x(i) - x(i - 1))
        .attr("height", height - marginTop - marginBottom)
        .attr("fill", (d) => d);

      tickValues = d3.range(thresholds.length);
      tickFormat = (i) => thresholdFormat(thresholds[i], i);
    } else if (scaleType === "scaleOrdinal") {
      x = d3
        .scaleBand()
        .domain(color.domain())
        .rangeRound([marginLeft, width - marginRight]);

      svg
        .append("g")
        .selectAll("rect")
        .data(color.domain())
        .enter() // enter selection
        .append("rect")
        .attr("x", (d) => x(d))
        .attr("y", marginTop)
        .attr("width", Math.max(0, x.bandwidth() - 1))
        .attr("height", height - marginTop - marginBottom)
        .attr("fill", color);

      tickAdjust = () => {};
    } else {
      console.error("scale type not implemented");
    }

    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
          .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
          .tickSize(tickSize)
          .tickValues(tickValues),
      )
      .call(tickAdjust)
      .call((g) => g.select(".domain").remove());

    return svg.node();
  }

  function init(
    rootEl,
    { domain, range, scaleType = "scaleThreshold", minWidth = 200, maxWidth = 500 },
  ) {
    const buffer = 64;
    const useableWidth = window.innerWidth - buffer;
    // use dynamic width between min and max
    const width = useableWidth > maxWidth ? maxWidth : Math.max(useableWidth, minWidth);
    Legend(rootEl, d3[scaleType]().domain(domain.split(";")).range(range.split(";")), {
      scaleType,
      width,
      height: 56,
      tickSize: 0,
    });
  }

  return {
    init: init,
  };
})(Elab);
