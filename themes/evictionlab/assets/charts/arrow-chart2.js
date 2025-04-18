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

  // NOTE: not used
  // function parseDate(value) {
  //   // Check for YYYY-MM-DD or MM-DD-YYYY style and convert to Date
  //   const timestamp = Date.parse(value);
  //   return isNaN(timestamp) ? null : timestamp;
  // }

  // Parse a date string into a decimal year (e.g. 07/01/2023 => ~2023.5)
  function parseYearDecimal(dateStr) {
    if (!Date.parse(dateStr)) return null;
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const start = new Date(year, 0, 1); // Jan 1 of that year
    const end = new Date(year + 1, 0, 1); // Jan 1 of next year
    return year + (date - start) / (end - start);
  }
  const valueParsers = {
    // date: parseDate,
    yearDecimal: parseYearDecimal,
    percent: parseFloat,
    percentInflated: (x) => parseFloat(x) / 100,
  };
  function getParser(valueType) {
    return valueParsers[valueType] || parseFloat;
  }

  const valueFormatters = {
    yearDecimal: String,
    percent: d3.format(".0%"),
    percentInflated: d3.format(".0%"),
  };
  function getFormatter(format, valueType) {
    if (format) {
      return d3.format(format);
    }
    return valueFormatters[valueType] || d3.format(",d");
  }

  function parseCSV(options, callback) {
    const {
      data,
      nameCol,
      beforeCol,
      afterCol,
      groupCol,
      highlightCol,
      highlightEndCol,
      highlightStartCol,
      valueType,
    } = options;
    const parseValue = getParser(valueType);
    const sortFn = options.customSort
      ? new Function(`return ${options.customSort}`)()
      : (a, b) => (a.before < b.before ? -1 : 1);
    d3.csv(data, (d) => {
      const parsed = d
        .map((d) => ({
          name: d[nameCol],
          before: parseValue(d[beforeCol]),
          after: parseValue(d[afterCol]),
          change: parseValue(d[afterCol]) - parseValue(d[beforeCol]),
          highlightStart: !!highlightStartCol && parseValue(d[highlightStartCol]),
          highlightEnd: !!highlightEndCol && parseValue(d[highlightEndCol]),
          highlight: !!highlightCol && !!d[highlightCol],
          group: groupCol ? d[groupCol] : null,
        }))

        .sort(sortFn);
      callback(parsed);
    });
  }

  function getDomain(data, options) {
    const { xMin, xMax, valueType } = options;
    const allVals = data.flatMap((d) => [d.before, d.after]);
    const actualMin = Math.min(...allVals);
    const actualMax = Math.max(...allVals);
    const padding = (actualMax - actualMin) * 0.1;

    const parseValue = getParser(valueType);
    return [
      isNumberLike(xMin) ? parseValue(xMin) : actualMin - padding,
      isNumberLike(xMax) ? parseValue(xMax) : actualMax + padding,
    ];
  }

  function getValuesByStep(start, end, step) {
    const result = [];
    // determine how many decimals step has
    const decimals = step.toString().split(".")[1]?.length || 0;
    let v = start;
    while (v <= end) {
      result.push(v);
      v += step;
      // always use same # decimals as step to avoid floating point issues
      v = Number(v.toFixed(decimals));
    }
    return result;
  }

  function getTicks(options, domain) {
    const { xTicks, valueType } = options;
    const parseValue = getParser(valueType);
    if (!xTicks) {
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

      let start = Math.floor(domain[0] / step) * step;
      if (start < domain[0]) {
        start += step; // ensure we start inside the domain
      }
      return getValuesByStep(start, domain[1], step);
    }
    if (xTicks.includes(",")) return xTicks.split(",").map(parseValue);
    if (xTicks.includes("|")) {
      const [startStr, stepStr] = xTicks.split("|");
      const start = parseValue(startStr);
      const step = parseValue(stepStr);
      return getValuesByStep(start, domain[1], step);
    }
    console.log("Invalid xTicks config: ", xTicks);
  }

  function appendArrowDefs(defs, color, id, size, className = "") {
    defs
      .append("marker")
      .attr("id", id)
      .attr("class", "arrowhead " + className)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 10)
      .attr("refY", 0)
      .attr("markerWidth", size)
      .attr("markerHeight", size)
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
    const BBoxWidth = Number(options.width) || el.getBoundingClientRect().width;
    const autoScaling = !options.width;
    const rowHeight = Number(options.rowHeight) || 28;
    const arrowSize = rowHeight * 0.6;

    let nameWidth = Number(options.nameWidth) || 230;
    if (isMobile) {
      // adjust nameWidth to account for mobile font size
      const fontSize = 12;
      const mobileFontSize = autoScaling ? 10 : 14;
      nameWidth *= mobileFontSize / fontSize;
    }
    const margin = { top: options.labelLine ? 18 : 0, right: 0, bottom: 0, left: nameWidth };
    const totalHeight = margin.top + margin.bottom + rowHeight * data.length;

    // Compute inner dimensions for the main chart area
    const innerWidth = BBoxWidth - margin.left - margin.right;
    const innerHeight = totalHeight - margin.top - margin.bottom;

    const parseValue = getParser(options.valueType);
    const xDomain = getDomain(data, options);
    const xScale = d3.scaleLinear().domain(xDomain).range([0, innerWidth]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
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
      .attr(
        "class",
        (d) =>
          `chart-row ${d.before < d.after ? "inc" : "dec"} ${d.highlight ? "highlighted" : ""}`,
      )
      .attr("transform", (d, i) => `translate(0, ${yScale.bandwidth() * i})`);

    // each row gets a background rect...
    rows
      .append("rect")
      .attr("class", "background")
      // chart row rect covers name area as well as data area
      .attr("transform", `translate(${-margin.left})`)
      .attr("width", innerWidth + margin.left)
      .attr("height", yScale.bandwidth());

    // ...axis lines (so they can go above background, below arrows)...
    const axisLines = rows.append("g").attr("class", "axis-lines");
    const tickValues = getTicks(options, xDomain);

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
    if (options.labelLine) {
      const [label, xVal] = options.labelLine.split(";");
      const x = xScale(parseValue(xVal));
      const strokeUnit = rowHeight / 3;
      axisLines
        .append("line")
        .attr("class", "label-line")
        // make dashes fit neatly within each row
        .attr("stroke-dasharray", `${(strokeUnit * 3) / 8}, ${(strokeUnit * 5) / 8}`)
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 0)
        .attr("y2", yScale.bandwidth());
      // add label for the line
      axisLines
        .filter((d, i) => i === 0) // add label to the first row
        .append("text")
        .attr("class", "label-line-label")
        .attr("x", x)
        .attr("y", -12)
        .attr("text-anchor", "middle")
        .text(label);
    }

    // ...a partial highlight (if applicable)...
    rows
      .filter((d) => d.highlightStart || d.highlightEnd)
      .append("rect")
      .attr("class", "highlighted-portion")
      .attr("transform", (d) => `translate(${xScale(d.highlightStart || xDomain[0])})`)
      .attr("width", (d) => {
        const emptyBefore =
          typeof d.highlightStart === "number" ? xScale(d.highlightStart) - xDomain[0] : 0;
        const emptyAfter =
          typeof d.highlightEnd === "number" ? xScale(xDomain[1]) - xScale(d.highlightEnd) : 0;
        return innerWidth - emptyBefore - emptyAfter;
      })
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

    // ...an arrow...
    rows
      .append("line")
      .attr("stroke", getArrowColor)
      .attr("marker-end", (d) => `url(#${getArrowheadId(d)})`)
      .attr("x1", (d) => xScale(d.before))
      .attr("x2", (d) => xScale(d.after))
      .attr("y1", yScale.bandwidth() / 2)
      .attr("y2", yScale.bandwidth() / 2);

    // ...and a "tooltip" value to display on hover (or if highlighted)
    if (!options.hideTooltip) {
      const tooltipFormatter = getFormatter(options.tooltipFormat, options.valueType);
      rows
        .append("text")
        .attr("class", "row-value")
        .attr("x", (d) => xScale(d.before))
        .attr("dx", (d) => {
          // offset from arrow
          let buffer = 5;
          const lineLength = Math.abs(xScale(d.change));
          if (lineLength < arrowSize) {
            // make space for arrowhead even if line is shorter than it
            buffer += arrowSize - lineLength;
          }
          return buffer * -Math.sign(d.change);
        })
        .attr("y", yScale.bandwidth() / 2)
        .attr("text-anchor", (d) => (d.change < 0 ? "start" : "end"))
        .text((d) => tooltipFormatter(d.change));
    }

    // add arrow marker defs to the main svg (legend arrows pick them up from there as well)
    const defs = svg.append("defs");
    // add defs for inc/dec arrows and groups
    appendArrowDefs(defs, incColor, getArrowheadId(null, "inc"), arrowSize, "inc");
    appendArrowDefs(defs, decColor, getArrowheadId(null, "dec"), arrowSize, "dec");
    groups.forEach((group) =>
      appendArrowDefs(
        defs,
        groupColorScale(group),
        getArrowheadId({ group }),
        arrowSize,
        formatGroupName(group),
      ),
    );

    // --- Sticky Leg Axis ---

    // add svg for legend/axis which will stick below the chart
    let legendClass = "sticky-leg " + (options.simpleLegend ? "simple-legend" : "standard-layout");
    if (autoScaling) legendClass += " auto-scaling";
    const stickySvg = container.append("svg").attr("class", legendClass);

    // Offset ticks by the left margin so ticks align with the chart area
    const axisWithTicks = stickySvg
      .append("g")
      .attr("class", "chart__axis")
      // shift by 0.5 to counter 0.5 tick transforms by d3
      .attr("transform", `translate(${margin.left - 0.5}, 0)`);

    const formatter = getFormatter(options.format, options.valueType);
    axisWithTicks
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

    // minimum legend height for axis + ticks, increase as more height is needed
    // let calculatedLegHeight = 40;
    // let legendItemsOffset = 0;
    let runningOffset = 35;
    // sync with chart.css
    const legFontSize = 14;
    const smBuffer = 4;
    const lgBuffer = 8;

    const legendItemHeight = 26;
    console.log(1, { runningOffset });
    if (options.axisLabelText) {
      // calculatedLegHeight += legendItemHeight;
      // legendItemsOffset += legendItemHeight;
      runningOffset += smBuffer;
      axisWithTicks
        .append("text")
        .attr("class", "axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", runningOffset)
        .attr("text-anchor", "middle")
        .text(options.axisLabelText);
      runningOffset += legFontSize;
    }
    console.log(2, { runningOffset });
    // const legendGroupOffset = 0;
    const legendGroup = stickySvg.append("g").attr("class", "legend-group");

    // Append highlight label if supplied
    if (options.highlightLabel) {
      // calculatedLegHeight += legendItemHeight;
      // legendItemsOffset += legendItemHeight;
      runningOffset += lgBuffer;
      // highlight icon
      legendGroup
        .append("rect")
        .attr("class", "highlight")
        .attr("y", runningOffset - legFontSize / 2 - 2)
        .attr("width", 28)
        .attr("height", 16);
      // highlight label
      legendGroup
        .append("text")
        .attr("class", "legend-label")
        .attr("x", 35)
        .attr("y", runningOffset)
        .attr("text-anchor", "start")
        .text(options.highlightLabel);
      runningOffset += legFontSize;
    }
    console.log(2.5, { runningOffset });

    // Append legend label text if supplied
    if (options.legendLabelText && !options.simpleLegend) {
      runningOffset += lgBuffer;
      legendGroup
        .append("text")
        .attr("class", "legend-label")
        .attr("x", 0)
        .attr("y", runningOffset)
        .attr("text-anchor", "start")
        .text(options.legendLabelText + ":");
      // calculatedLegHeight += legendItemHeight;
      // legendItemsOffset += legendItemHeight;
      runningOffset += legFontSize;
    }

    // runningOffset += smBuffer;s
    console.log(3, { runningOffset });
    const legendItems = legendGroup
      .append("g")
      .attr("class", "legend-items")
      .attr("transform", `translate(0, ${runningOffset})`);

    // establish legend items
    const items = [];
    if (options.legendLabelText && options.simpleLegend) {
      items.push({
        type: "simple-legend-label",
        label: options.legendLabelText + ":",
        noIcon: true,
      });
    }
    if (groups.length > 0) {
      groups.forEach((group) => {
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

    // util for calculating legend item transforms
    function getLegendItemTransform(d, index) {
      const colWidth = Number(options.legColWidth) || 175;
      // on mobile we stack the legend items bc we don't have much horizontal space
      const itemsPerCol = Number(options.legItemsPerCol) || (isMobile ? 8 : 2);
      // we fill each column before moving to the next row because groups are sorted
      // by increasing group name length (so we can make first columns narrower)
      const colIdx = Math.floor(index / itemsPerCol);
      const offsetX = colIdx * colWidth;
      const offsetY = (index % itemsPerCol) * legendItemHeight;
      // increase calculatedLegHeight for each new row
      if (colIdx === 0) {
        // calculatedLegHeight += legendItemHeight;
        runningOffset += legendItemHeight;
      }
      return `translate(${offsetX}, ${offsetY})`;
    }
    function getSimpleLegendItemTransform(d, index) {
      if (index >= 3) {
        console.warn(`Simple legend centers a dec/inc label below the center of the axis
              with an optional legend label at axis root in front of them. It is not designed
              to support more than 3 items.`);
      }
      // increase calculatedLegHeight once for the single row
      if (index === 0) {
        // calculatedLegHeight += legendItemHeight;
        runningOffset += legendItemHeight;
      }
      const midPoint = innerWidth / 2;
      const buffer = innerWidth / 50;

      const isRootItem = index === 0 && items.length > 2;
      const isLeftCenterItem = index === items.length - 2;
      const isRightCenterItem = index === items.length - 1;
      let offsetX = nameWidth;
      if (isLeftCenterItem) {
        const itemWidth = Number(options.decLegItemOffset) || 100;
        offsetX += midPoint - itemWidth - buffer;
      } else if (isRightCenterItem) {
        offsetX += midPoint + buffer;
      }
      return `translate(${offsetX}, 0)`;
    }
    // Render legend items vertically with each item on its own row
    if (items.length > 0) {
      const legendItem = legendItems
        .selectAll("g.arrow-legend-item")
        .data(items)
        .enter()
        .append("g")
        .attr("class", "arrow-legend-item")
        .attr(
          "transform",
          options.simpleLegend ? getSimpleLegendItemTransform : getLegendItemTransform,
        );
      // item marker
      legendItem
        .filter((d) => !d.noIcon) // Skip items with noIcon
        .append("line")
        .attr("class", (d) => `arrow legend-item ${d.type}`)
        .attr("x1", (d) => (d.type === "dec" ? 28 : 0))
        .attr("x2", (d) => (d.type === "dec" ? 0 : 28))
        .attr("y1", legendItemHeight / 2)
        .attr("y2", legendItemHeight / 2)
        .attr("stroke", (d) => d.color)
        .attr("marker-end", (d) => `url(#${d.arrowheadId})`);
      // item label
      legendItem
        .append("text")
        .attr("class", (d) => `label legend-item ${d.type}`)
        .attr("x", (d) => (d.noIcon ? 0 : 34))
        .attr("y", legendItemHeight / 2)
        .attr("text-anchor", "start")
        .text((d) => d.label);
    }

    if (options.legendCaption) {
      runningOffset += lgBuffer * 2;
      stickySvg
        .append("text")
        .attr("class", "legend-caption")
        .attr("x", BBoxWidth / 2)
        .attr("y", runningOffset)
        .attr("text-anchor", "middle")
        .text(options.legendCaption);
      runningOffset += legFontSize;
    }
    
    // add the viewBox after calculatedLegHeight has been finalized
    stickySvg
      .attr("viewBox", `0 0 ${BBoxWidth} ${runningOffset + lgBuffer}`)
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
