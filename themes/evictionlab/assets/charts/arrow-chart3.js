"use strict";

console.log("Arrow chart3 module loaded");
/**
 * ARROW CHART MODULE
 * ----
 * Creates an arrow chart from a CSV file.
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.ArrowChart3 = (function (Elab) {
  function isNumberLike(value) {
    if (value === null || value === "") return false;
    return !Number.isNaN(Number(value));
  }

  function parseDefault(value) {
    return value;
  }
  function parseDate(value) {
    // Check for YYYY-MM-DD or MM-DD-YYYY style and convert to Date
    const timestamp = Date.parse(value);
    return isNaN(timestamp) ? null : timestamp;
  }
  function parseYearDecimal(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const start = new Date(year, 0, 1); // Jan 1 of that year
    const end = new Date(year + 1, 0, 1); // Jan 1 of next year
    console.log({ dateStr, v: year + (date - start) / (end - start) });
    return year + (date - start) / (end - start);
  }
  const valueTypes = {
    date: parseDate,
    yearDecimal: parseYearDecimal,
  };

  /** ~~~~~~~~~ */
  
  function parseCSV(opts, callback) {
    const { data, nameCol, beforeCol, afterCol, valueType } = opts;
    const parseValue = valueTypes[valueType] || parseDefault;
    console.log(opts, parseValue);
    d3.csv(data, (d) => {
      const parsed = d.map((d) => ({
        name: d[nameCol],
        before: parseValue(d[beforeCol]),
        after: parseValue(d[afterCol]),
      }));
      callback(parsed);
    });
  }

  function getDomain(data, overrideMin, overrideMax) {
    const allVals = data.flatMap((d) => [d.before, d.after]);
    const actualMin = Math.min(...allVals);
    const actualMax = Math.max(...allVals);
    const rangePadding = (actualMax - actualMin) * 0.1;

    console.log({
      allVals,
      overrideMin,
      overrideMax,
      actualMin,
      actualMax,
      paddedMin: actualMin - rangePadding,
      paddedMax: actualMax + rangePadding,
    });

    return [
      isNumberLike(overrideMin) ? Number(overrideMin) : actualMin - rangePadding,
      isNumberLike(overrideMax) ? Number(overrideMax) : actualMax + rangePadding,
    ];
  }

  function parseTicks(config, domain) {
    console.log({ config, domain });
    if (!config) return [];
    if (config.includes("|")) {
      const [startStr, stepStr] = config.split("|");
      const start = Number(startStr);
      const step = parseInt(stepStr);
      const result = [];
      for (let v = start; v <= domain[1]; v += step) result.push(v);
      console.log({result})
      return result;
    }
    return config.split(",").map(Number);
  }

  function renderChart(el, data, options) {
    const width = options.width || 600;
    const rowHeight = options.rowHeight || 26;
    const margin = { top: 20, right: 20, bottom: 30, left: 150 };
    const height = margin.top + margin.bottom + rowHeight * data.length;

    const svg = d3
      .select(el)
      .select("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "arrow-chart__body")
      .attr("preserveAspectRatio", "xMinYMin meet");
    svg.selectAll("*").remove();

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xDomain = getDomain(data, options.xMin, options.xMax);
    console.log({ xDomain });
    const xScale = d3.scaleLinear().domain(xDomain).range([0, innerWidth]);
    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, innerHeight])
      .padding(0.3);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).tickValues(parseTicks(options.xTicks, xDomain)));

    g.selectAll("line.arrow")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "arrow")
      .attr("x1", (d) => xScale(d.before))
      .attr("x2", (d) => xScale(d.after))
      .attr("y1", (d) => yScale(d.name) + yScale.bandwidth() / 2)
      .attr("y2", (d) => yScale(d.name) + yScale.bandwidth() / 2)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");

    g.selectAll("text.label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", -10)
      .attr("y", (d) => yScale(d.name) + yScale.bandwidth() / 2)
      .attr("text-anchor", "end")
      .attr("alignment-baseline", "middle")
      .text((d) => d.name);

    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead") // todo
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 10)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "black");
  }

  function init(rootEl, opts) {
    parseCSV(opts, (data) => {
      renderChart(rootEl, data, opts);
    });
  }

  return { init };
})(Elab);