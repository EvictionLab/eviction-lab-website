"use strict";

/**
 * ARROW CHART MODULE
 * ----
 * Creates an arrow chart from a CSV file.
 *
 * Public methods:
 * - init(root, options)
 *
 */
Elab.ArrowChart2 = (function (Elab) {
  const groupColors = ["var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)"];
  const incColor = "var(--c1)";
  const decColor = "var(--c2)";
  function isNumberLike(value) {
    if (value === null || value === "") return false;
    return !Number.isNaN(Number(value));
  }

  function parseDefault(value) {
    return value;
  }
  // function parsePercent(value) {
  //   return value * 1;
  // }
  function parseDate(value) {
    // Check for YYYY-MM-DD or MM-DD-YYYY style and convert to Date
    const timestamp = Date.parse(value);
    return isNaN(timestamp) ? null : timestamp;
  }
  function parseYearDecimal(dateStr) {
    if (!Date.parse(dateStr)) return null;
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const start = new Date(year, 0, 1); // Jan 1 of that year
    const end = new Date(year + 1, 0, 1); // Jan 1 of next year
    return year + (date - start) / (end - start);
  }
  const valueParsers = {
    date: parseDate,
    yearDecimal: parseYearDecimal,
    // percent: parsePercent,
  };

  const valueFormatters = {
    percent: d3.format(".0%"),
  };
  const formatDefault = String;

  function parseCSV(options, callback) {
    const {
      data,
      nameCol,
      beforeCol,
      afterCol,
      groupCol,
      highlightCol,
      highlightStartCol,
      valueType,
    } = options;
    const parseValue = valueParsers[valueType] || parseDefault;
    // console.log(options);
    d3.csv(data, (d) => {
      const parsed = d
        .map((d) => ({
          name: d[nameCol],
          before: parseValue(d[beforeCol]),
          after: parseValue(d[afterCol]),
          highlightStart: !!highlightStartCol && parseValue(d[highlightStartCol]),
          highlight: !!highlightCol && !!d[highlightCol],
          group: groupCol ? d[groupCol] : null,
        }))
        // TODO: make data sorting configurable
        .sort((a, b) => (a.before < b.before ? -1 : 1));
      // console.log({ parsed });
      callback(parsed);
    });
  }

  function getDomain(data, options) {
    const { xMin, xMax, valueType } = options;
    const allVals = data.flatMap((d) => [d.before, d.after]);
    const actualMin = Math.min(...allVals);
    const actualMax = Math.max(...allVals);
    const padding = (actualMax - actualMin) * 0.1;

    // console.log({
    //   allVals,
    //   xMin,
    //   xMax,
    //   actualMin,
    //   actualMax,
    //   paddedMin: actualMin - padding,
    //   paddedMax: actualMax + padding,
    // });

    return [
      isNumberLike(xMin) ? Number(xMin) : valueType === "percent" ? 0 : actualMin - padding,
      isNumberLike(xMax) ? Number(xMax) : actualMax + padding,
    ];
  }

  function getSaneTickValues(domain) {
    const range = domain[1] - domain[0];
    const roughStep = range / 6; // Aim for around 6 ticks

    let step = null;
    let multiplier = 1;
    while (!step) {
      // Choose a sane step value
      for (const baseStep of [0.1, 0.2, 0.5]) {
        const scaledStep = baseStep * multiplier;
        if (roughStep <= scaledStep) {
          step = scaledStep;
          break;
        }
      }
      multiplier *= 10;
    }

    const result = [];
    // avoid floating point issues
    const decimals = Math.floor(step) === step ? 0 : step.toString().split(".")[1].length;
    for (let v = Math.floor(domain[0] / step) * step; v <= domain[1]; v += step) {
      v >= domain[0] && v <= domain[1] && result.push(Number(v.toFixed(decimals)));
    }
    // console.log({ humanRelevantTicks: result });
    return result;
  }

  function parseTicks(config, domain) {
    // console.log({ config, domain });
    if (!config) return getSaneTickValues(domain);
    if (config.includes(",")) return config.split(",").map(Number);
    if (config.includes("|")) {
      const [startStr, stepStr] = config.split("|");
      const start = Number(startStr);
      const step = parseInt(stepStr);
      const result = [];
      for (let v = start; v <= domain[1]; v += step) result.push(v);
      // console.log({ result });
      return result;
    }
    console.log("Invalid xTicks config: ", config);
  }

  function appendArrowDefs(defs, color, id, className = "") {
    defs
      .append("marker")
      .attr("id", id)
      .attr("class", "arrowhead " + className)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 10)
      .attr("refY", 0)
      .attr("markerWidth", 17)
      .attr("markerHeight", 17)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse") // Prevent scaling with stroke width
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "none")
      .attr("stroke", color);
  }

  function renderChart(el, data, options) {
    const windowWidth = window.innerWidth;
    // keep in-sync with .chart--arrow2 media query for font-size
    const isMobile = windowWidth <= 599;
    /*
     * Determines the scaling of everything in the svg.
     * If width isn't provided, viewbox autoscales with content size so that
     * 12 in the svg corresponds to 12px, so font sizes etc stay consistent.
     * If width is fixed, 600-700 yields reasonable results on desktop.
     */
    const BBoxWidth = options.width || el.getBoundingClientRect().width;
    const autoScaling = !options.width;
    const rowHeight = options.rowHeight || 28;

    let nameWidth = options.nameWidth || 230;
    if (isMobile) {
      // adjust nameWidth to account for mobile font size
      const fontSize = 12;
      const mobileFontSize = autoScaling ? 10 : 14;
      nameWidth *= mobileFontSize / fontSize;
    }
    const margin = { top: 0, right: 0, bottom: 0, left: nameWidth };
    const totalHeight = margin.top + margin.bottom + rowHeight * data.length;

    // Compute inner dimensions for the main chart area
    const innerWidth = BBoxWidth - margin.left - margin.right;
    const innerHeight = totalHeight - margin.top - margin.bottom;

    const xDomain = getDomain(data, options);
    const xScale = d3.scaleLinear().domain(xDomain).range([0, innerWidth]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, innerHeight]);

    const container = d3.select(el);
    container.html(""); // clear previous content

    const svg = container
      .append("svg")
      .attr("class", autoScaling ? "auto-scaling" : "")
      .attr("viewBox", `0 0 ${BBoxWidth} ${totalHeight}`)
      .attr("preserveAspectRatio", "xMinYMin meet");

    // area where arrows are drawn
    const chartArea = svg
      .append("g")
      .attr("class", "chart_area")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const chartRows = chartArea.append("g").attr("class", "chart-rows");
    const rows = chartRows
      .selectAll("g.chart-row")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "chart-row")
      .attr("transform", (d, i) => `translate(0, ${yScale.bandwidth() * i})`);

    // each row gets a background rect...
    rows
      .append("rect")
      .attr("class", (d) => `background ${d.highlight ? "highlighted" : ""}`)
      // chart row rect covers name area as well as data area
      .attr("transform", `translate(${-margin.left})`)
      .attr("width", innerWidth + margin.left)
      .attr("height", yScale.bandwidth());

    // ...axis lines (so they can go above background, below arrows)...
    const axisLines = rows.append("g").attr("class", "axis-lines");
    const tickValues = parseTicks(options.xTicks, xDomain);
    // include axis line separating names from chart area
    [xDomain[0], ...tickValues].forEach((tick) => {
      const x = xScale(tick);
      axisLines
        .append("line")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 0)
        .attr("y2", yScale.bandwidth());
    });

    // ...a partial highlight (if applicable)...
    rows
      .filter((d) => d.highlightStart)
      .append("rect")
      .attr("class", "highlighted-portion")
      .attr("transform", (d) => `translate(${xScale(d.highlightStart)})`)
      .attr("width", (d) => innerWidth - xScale(d.highlightStart))
      .attr("height", yScale.bandwidth());

    // ...a name (to the left of the chart area)...
    rows
      .append("text")
      .attr("x", -10)
      .attr("y", yScale.bandwidth() / 2)
      // .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text((d) => d.name);

    // if data are grouped, determine what they are
    const groups = Array.from(new Set(data.map((d) => d.group)))
      .filter(Boolean)
      // TODO: make group sorting configurable
      .sort((a, b) => (a.length > b.length ? 1 : -1));

    const groupColorScale = d3.scaleOrdinal().domain(groups).range(groupColors);
    const getArrowColor = (d) => {
      // color based on group if grouped, otherwise inc/dec
      if (!!groups.length) return groupColorScale(d.group) || "#000";
      return d.before < d.after ? incColor : decColor;
    };

    const formatGroupName = (group) => group.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    // util for determining arrowhead id for an arrow
    const getArrowheadId = (d, knownId = null) => {
      const idBase = (options.id || "a2") + "-arrowhead-";
      if (knownId) return idBase + knownId;
      if (!!groups.length) return idBase + formatGroupName(d.group);
      return `${idBase}${d.before < d.after ? "inc" : "dec"}`;
    };

    // ...and an arrow
    rows
      .append("line")
      .attr("class", (d) => `arrow ${d.before < d.after ? "inc" : "dec"}`)
      .attr("stroke", getArrowColor)
      .attr("marker-end", (d) => `url(#${getArrowheadId(d)})`)
      .attr("x1", (d) => xScale(d.before))
      .attr("x2", (d) => xScale(d.after))
      .attr("y1", yScale.bandwidth() / 2)
      .attr("y2", yScale.bandwidth() / 2);

    // add arrow marker defs to the main svg (legend arrows pick them up from there as well)
    const defs = svg.append("defs");
    // add defs for inc/dec arrows and groups
    appendArrowDefs(defs, incColor, getArrowheadId(null, "inc"), "inc");
    appendArrowDefs(defs, decColor, getArrowheadId(null, "dec"), "dec");
    groups.forEach((group) =>
      appendArrowDefs(
        defs,
        groupColorScale(group),
        getArrowheadId({ group }),
        formatGroupName(group),
      ),
    );

    // --- Sticky Leg Axis ---
    // minimum legend height for axis + ticks, increase as more height is needed
    let calculatedLegHeight = 40;

    // add svg for legend/axis which will stick below the chart
    const stickySvg = container
      .append("svg")
      .attr("class", `sticky-leg ${autoScaling ? "auto-scaling" : ""}`);

    // Offset ticks by the left margin so ticks align with the chart area
    const ticks = stickySvg
      .append("g")
      .attr("class", "chart__axis")
      .attr("transform", `translate(${margin.left}, 0)`);

    const formatter = valueFormatters[options.valueType] || formatDefault;
    ticks
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(tickValues)
          .tickFormat((d) => formatter(d)),
      )
      .selectAll("text")
      .attr("text-anchor", (d) =>
        // if there are ticks at the edges, shift them to stay within chart area
        d === xDomain[0] ? "start" : d === xDomain[1] ? "end" : "middle",
      );

    // TODO: add axisLabelText if provided

    const legendItemHeight = 24;
    const legendGroup = stickySvg
      .append("g")
      .attr("class", "legend-group-wrapper")
      .attr("transform", `translate(5, 32)`)
      .append("g")
      .attr("class", "legend-group");

    let legendItemsOffset = 0;
    // Append highlight label if supplied
    if (options.highlightLabel) {
      calculatedLegHeight += legendItemHeight;
      legendItemsOffset += legendItemHeight;
      // highlight icon
      legendGroup
        .append("rect")
        .attr("class", "highlight")
        .attr("width", 28)
        .attr("height", legendItemHeight - 4);
      // highlight label
      legendGroup
        .append("text")
        .attr("class", "legend-label")
        .attr("x", 35)
        .attr("y", legendItemHeight / 2)
        .attr("text-anchor", "start")
        .text(options.highlightLabel);
    }
    // Append legend label text if supplied
    if (options.legendLabelText) {
      legendGroup
        .append("text")
        .attr("class", "legend-label")
        .attr("x", 0)
        .attr("y", legendItemsOffset + legendItemHeight / 2)
        .attr("text-anchor", "start")
        .text(options.legendLabelText + ":");
      calculatedLegHeight += legendItemHeight;
      legendItemsOffset += legendItemHeight;
    }

    const legendItems = legendGroup
      .append("g")
      .attr("class", "legend-items")
      .attr("transform", `translate(0, ${legendItemsOffset})`);

    // establish legend items
    const items = [];
    if (groups.length > 0) {
      groups.forEach((group) => {
        // console.log(group);
        items.push({
          type: "group",
          label: group,
          color: groupColorScale(group),
          arrowheadId: getArrowheadId({ group }),
        });
      });
    } else {
      if (options.legendDecArrowText) {
        items.push({
          type: "dec",
          label: options.legendDecArrowText,
          color: decColor,
          arrowheadId: getArrowheadId(null, "dec"),
        });
      }
      if (options.legendIncArrowText) {
        items.push({
          type: "inc",
          label: options.legendIncArrowText,
          color: incColor,
          arrowheadId: getArrowheadId(null, "inc"),
        });
      }
    }

    const colWidth = options.legColWidth || 175;
    // util for calculating legend item transforms
    function getLegendItemTransform(d, index) {
      // on mobile we stack the legend items bc we don't have much horizontal space
      const itemsPerCol = options.legItemsPerCol || isMobile ? 8 : 2;
      // we fill each column before moving to the next row because groups are sorted
      // by increasing group name length (so we can make first columns narrower)
      const colIdx = Math.floor(index / itemsPerCol);
      const offsetX = colIdx * colWidth;
      const offsetY = (index % itemsPerCol) * legendItemHeight;
      // increase calculatedLegHeight for each new row
      if (colIdx === 0) calculatedLegHeight += legendItemHeight;
      return `translate(${offsetX}, ${offsetY})`;
    }
    // Render legend items vertically with each item on its own row
    if (items.length > 0) {
      const legendItem = legendItems
        .selectAll("g.arrow-legend-item")
        .data(items)
        .enter()
        .append("g")
        .attr("class", "arrow-legend-item")
        .attr("transform", getLegendItemTransform);
      // arrow marker
      legendItem
        .append("line")
        .attr("class", "arrow")
        .attr("x1", (d) => (d.type === "dec" ? 28 : 0))
        .attr("x2", (d) => (d.type === "dec" ? 0 : 28))
        .attr("y1", legendItemHeight / 2)
        .attr("y2", legendItemHeight / 2)
        .attr("stroke", (d) => d.color)
        .attr("marker-end", (d) => `url(#${d.arrowheadId})`);
      // group label
      legendItem
        .append("text")
        .attr("x", 34)
        .attr("y", legendItemHeight / 2 + 1)
        .attr("text-anchor", "start")
        .text((d) => d.label);
    }

    // add the viewBox after calculatedLegHeight has been finalized
    stickySvg
      .attr("viewBox", `0 0 ${BBoxWidth} ${calculatedLegHeight}`)
      .attr("preserveAspectRatio", "xMinYMin meet");
  }

  function init(rootEl, options) {
    parseCSV(options, (data) => {
      // options.width = ;
      window.addEventListener("resize", function () {
        renderChart(rootEl, data, options);
      });
      renderChart(rootEl, data, options);
    });
  }

  return { init };
})(Elab);
