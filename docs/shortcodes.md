# Shortcodes

## `{{% linechart }}`

Renders a chart with multiple lines and highlights up to 3 lines.

### Usage

To use the line chart shortcode, you must first include the necessary scripts by adding the following front matter to the page:

```yaml
scripts:
  - linechart
```

You may then use the `{{% linechart %}}` shortcode.

The line chart short code accepts the following attributes.

- **`id` (required)**: unique identifier for the chart
- **`data` (required)**: URL to the CSV file
- `x`: name of the column to use for X values, must be date formatted as `mm/dd/yyyy`. (default "x")
- `y`: name of the column to use for Y values (default "y")
- `groupBy`: name of the column to group data by (default "name")
- `yTicks`: number of ticks to show on the Y axis (default 5)
- `yFormat`: [d3.format](https://github.com/d3/d3-format#d3-format) string on how to format Y values
- `xTicks`: increment amount for ticks on x axis ("day", "week", "month", "year")
- `xFormat`: [d3.timeFormat](https://github.com/d3/d3-time-format#locale_format) for X axis values
- `highlight`: semi-colon separated identifiers to highlight on the chart
- `curve`: type of [d3.curve](https://github.com/d3/d3-shape#curves) to use

### Example Page

**Page markdown**

```
---
title: "Line chart sample"
date: 2020-09-14T16:46:40.089Z
scripts:
  - linechart
---

Sample Chart

{{% linechart
  id="summed"
  data="/uploads/sites.csv"
  x="week"
  y="ratio"
  groupBy="name"
  yFormat=".0%"
  xTicks="week"
  highlight="Austin, TX;Boston, MA"
  title="Austin and Boston"
  curve="curveMonotoneX"
%}}
```

**Data file (`sites.csv`)**

```csv
name,ratio,week
"Austin, TX",0.050561797752809,08/09/2020
"Austin, TX",0.0529634300126103,08/16/2020
"Austin, TX",0.048667439165701,08/23/2020
"Austin, TX",0.294277929155313,08/30/2020
"Austin, TX",0.0332805071315372,09/06/2020
"Boston, MA",0.0138089758342923,08/09/2020
"Boston, MA",0.0190274841437632,08/16/2020
"Boston, MA",0.012054244098443,08/23/2020
"Boston, MA",0.00886917960088692,08/30/2020
"Boston, MA",0.0186917960088692,09/06/2020
```
