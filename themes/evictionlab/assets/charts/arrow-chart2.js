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

  /** ~~~~~~~~~ */

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

  function appendArrowDefs(defs, id, color) {
    defs
      .append("marker")
      .attr("id", id)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 10)
      .attr("refY", 0)
      .attr("markerWidth", 13)
      .attr("markerHeight", 13)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "none")
      .attr("stroke", color);
  }

  function renderChart(el, data, options) {
    // determines the scaling of everything in the svg
    // if width not provided, svg scales such that 12 in the svg corresponds to 12px
    // this means things like font size can stay consistent
    const width = options.width || el.getBoundingClientRect().width;
    const rowHeight = options.rowHeight || 28;
    // Set margins for the chart rows and for the sticky axis
    const nameWidth = options.nameWidth || 230;
    const margin = { top: 0, right: 0, bottom: 0, left: nameWidth };
    // Height for the main chart is based on rows
    const height = margin.top + margin.bottom + rowHeight * data.length;
    // Height for the sticky axis (can be overwritten via options)

    // Compute inner dimensions for the main chart
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Compute xScale and yScale based on data and optional overrides
    const xDomain = getDomain(data, options);
    const xScale = d3.scaleLinear().domain(xDomain).range([0, innerWidth]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, innerHeight]);

    // Clear container and set the base class
    const container = d3.select(el);
    // container.attr("class", "chart");
    container.html(""); // clear previous content

    // Append the main SVG for chart rows
    const svg = container
      .append("svg")
      .attr("class", "chart__root")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMinYMin meet");

    // Create a group for the chart rows in the main svg
    const chartArea = svg
      .append("g")
      .attr("class", "chart_area")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add axis lines group
    const axisLinesGroup = chartArea.append("g").attr("class", "axis-lines");
    const tickValues = parseTicks(options.xTicks, xDomain);
    // include one separating names from lines
    [xDomain[0], ...tickValues].forEach((tick) => {
      const x = xScale(tick);
      axisLinesGroup
        .append("line")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 0)
        .attr("y2", innerHeight);
    });

    // Create a group for the chart rows in the main svg
    const rowsGroup = chartArea.append("g").attr("class", "rows");
    // .attr("transform", `translate(${margin.left},${margin.top})`);

    // For each row, append a group with proper class "chart-row"
    const rows = rowsGroup
      .selectAll("g.chart-row")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "chart-row")
      .attr("transform", (d, i) => `translate(0, ${yScale.bandwidth() * i})`);

    rows
      .append("rect")
      .attr("class", "background")
      // chart row rect covers name area as well as data area
      .attr("transform", `translate(${-margin.left})`)
      .attr("width", innerWidth + margin.left)
      .attr("height", yScale.bandwidth());

    // Append another rect for rows with full highlight
    rows
      .filter((d) => d.highlight)
      .append("rect")
      .attr("class", "highlight")
      .attr("transform", `translate(${-margin.left})`)
      .attr("width", innerWidth + margin.left)
      .attr("height", yScale.bandwidth())
      .attr("fill", "var(--highlight-row)");

    // Add row labels with proper class
    rows
      .append("text")
      .attr("class", "chart__row-label")
      .attr("x", -10)
      .attr("y", yScale.bandwidth() / 2)
      // .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text((d) => d.name);

    // Append another rect for rows with partial highlight
    rows
      .filter((d) => d.highlightStart)
      .append("rect")
      .attr("class", "highlight-partial")
      .attr("transform", (d) => `translate(${xScale(d.highlightStart)})`)
      .attr("width", (d) => innerWidth - xScale(d.highlightStart))
      .attr("height", yScale.bandwidth())
      .attr("fill", "var(--highlight-partial-row)");

    const groups = Array.from(new Set(data.map((d) => d.group)))
      .filter(Boolean)
      // TODO: make group sorting configurable
      .sort((a, b) => (a.length > b.length ? 1 : -1));
    const colorScale = d3.scaleOrdinal().domain(groups).range(groupColors);
    const getColor = (d) => {
      if (!!groups.length) return colorScale(d.group) || "#000";
      return d.before < d.after ? incColor : decColor;
    };
    const formatGroupName = (group) => group.toLowerCase().replace(/\s/g, "-");
    const getArrowheadId = (d) => {
      let id = "";
      if (!!groups.length) id = formatGroupName(d.group);
      else id = d.before < d.after ? "inc" : "dec";
      return `arrowhead-${id}`;
    };

    // Add arrow lines with proper class; these will pick up your arrow styles
    rows
      .append("line")
      .attr("class", (d) => `arrow ${d.before < d.after ? "inc" : "dec"}`)
      .attr("stroke", getColor)
      .attr("marker-end", (d) => `url(#${getArrowheadId(d)})`)
      .attr("x1", (d) => xScale(d.before))
      .attr("x2", (d) => xScale(d.after))
      .attr("y1", yScale.bandwidth() / 2)
      .attr("y2", yScale.bandwidth() / 2);

    // Append arrow marker definitions in the main svg
    const defs = svg.append("defs");
    appendArrowDefs(defs, "arrowhead-inc", incColor);
    appendArrowDefs(defs, "arrowhead-dec", decColor);

    groups.forEach((group) =>
      appendArrowDefs(defs, `arrowhead-${formatGroupName(group)}`, colorScale(group)),
    );
    // --- Sticky Leg Axis ---
    // TODOxxx make dynamic
    const axisHeight = options.axisHeight || 120;
    // Append the sticky axis SVG below the main chart
    const stickySvg = container
      .append("svg")
      .attr("class", "sticky-leg")
      .attr("viewBox", `0 0 ${width} ${axisHeight}`)
      .attr("preserveAspectRatio", "xMinYMin meet");

    // Append an axis group in the sticky svg.
    // Offset the group by the left margin so ticks align with the chart.
    const axisG = stickySvg
      .append("g")
      .attr("class", "chart__axis")
      .attr("transform", `translate(${margin.left}, 0)`);

    // Render the x-axis (using the same xScale and tick config)
    const formatter = valueFormatters[options.valueType] || formatDefault;
    axisG
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(tickValues)
          .tickFormat((d) => formatter(d)),
      )
      .selectAll("text")
      .attr("text-anchor", (d) =>
        d === xDomain[0] ? "start" : d === xDomain[1] ? "end" : "middle",
      );

    // --- Legend Labels in Sticky Axis ---
    const legendItemHeight = 20;
    const legendLeftOffset = options.legendLeftOffset || 70;
    const legendGroup = stickySvg
      .append("g")
      .attr("transform", `translate(${legendLeftOffset}, 28)`);

    let legendItemsOffset = 0;

    // Append highlight label if supplied
    // todoxxx
    options.highlightLabel = "expansion in population coverage";
    if (options.highlightLabel) {
      legendItemsOffset += legendItemHeight;
      legendGroup
        .append("rect")
        .attr("class", "highlight")
        // .attr("x", 345)
        // .attr("y", legendItemHeight / 2)
        .attr("width", 25)
        .attr("height", legendItemHeight - 4);
      legendGroup
        .append("text")
        .attr("class", "legend-label")
        .attr("x", 30)
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
      legendItemsOffset += legendItemHeight;
    }

    // Group for legend items positioned below the legend label
    const legendItemsGroup = legendGroup
      .append("g")
      .attr("class", "legend-items")
      .attr("transform", `translate(0, ${legendItemsOffset})`);

    // Consolidate legend items logic into one block
    const legendItems = [];
    if (groups.length > 0) {
      groups.forEach((group) => {
        // console.log(group);
        legendItems.push({
          type: "group",
          label: group,
          color: colorScale(group),
          arrowheadId: `arrowhead-${formatGroupName(group)}`,
        });
      });
    } else {
      if (options.legendDecArrowText) {
        legendItems.push({
          type: "dec",
          label: options.legendDecArrowText,
          color: decColor,
          arrowheadId: "arrowhead-dec",
        });
      }
      if (options.legendIncArrowText) {
        legendItems.push({
          type: "inc",
          label: options.legendIncArrowText,
          color: incColor,
          arrowheadId: "arrowhead-inc",
        });
      }
    }

    const itemsPerCol = options.legItemsPerCol || 2;
    const colWidth = options.legColWidth || 150;
    function getLegendItemTransform(d, index) {
      const offsetX = Math.floor(index / itemsPerCol) * colWidth;
      const offsetY = (index % itemsPerCol) * legendItemHeight;
      return `translate(${offsetX}, ${offsetY})`;
    }
    // Render legend items vertically with each item on its own row
    if (legendItems.length > 0) {
      legendItemsGroup
        .selectAll("g.arrow-legend-item")
        .data(legendItems)
        .enter()
        .append("g")
        .attr("class", "arrow-legend-item")
        .attr("transform", getLegendItemTransform)
        .each(function (d) {
          const g = d3.select(this);
          g.append("line")
            .attr("x1", 0)
            .attr("x2", 25)
            .attr("y1", legendItemHeight / 2)
            .attr("y2", legendItemHeight / 2)
            .attr("stroke", d.color)
            .attr("marker-end", `url(#${d.arrowheadId})`);
          g.append("text")
            .attr("x", 30)
            .attr("y", legendItemHeight / 2 + 1)
            // .attr("dy", "0.35em")
            .attr("text-anchor", "start")
            .text(d.label);
        });
    }
  }

  function init(rootEl, options) {
    parseCSV(options, (data) => {
      if (!options.width) {
        window.addEventListener("resize", function () {
          renderChart(rootEl, data, options);
        });
      }
      renderChart(rootEl, data, options);
    });
  }

  return { init };
})(Elab);
