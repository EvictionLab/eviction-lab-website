# Shortcodes

## Line Charts

Renders a chart with multiple lines and highlights up to 3 lines.

### Usage

To use the line chart shortcode, you must first include the necessary scripts by adding the following front matter to the page:

```yaml
scripts:
  - charts
```

You may then use the `{{% line-chart %}}` shortcode.

```
{{% line-chart
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

### Props

- **`id` (required)**: unique identifier for the chart
- **`data` (required)**: URL to the CSV file
- `x`: name of the column to use for X values, must be date formatted as `mm/dd/yyyy`. (default "x")
- `y`: name of the column to use for Y values (default "y")
- `groupBy`: name of the column to group data by (default "name")
- `yTicks`: number of ticks to show on the Y axis (default 5)
- `yFormat`: [d3.format](https://github.com/d3/d3-format#d3-format) string on how to format Y values
- `xTicks`: increment amount for ticks on x axis ("day", "week", "month", "year")
- `xFormat`: [d3.timeFormat](https://github.com/d3/d3-time-format#locale_format) for X axis values
- `xTooltipFormat`: how dates should be formatted in the tooltip using [d3.timeFormat](https://github.com/d3/d3-time-format#locale_format)
- `highlight`: semi-colon separated identifiers to highlight on the chart
- `curve`: type of [d3.curve](https://github.com/d3/d3-shape#curves) to use

### Example Page

[View Example](https://development--eviction-lab.netlify.app/updates/blog/_chart-demo) | [demo source](/content/updates/blog/_chart-demo.md)

Data should have:

- a column to group by (provided by `groupBy` prop). for this sample, the `name` column is used.
- a column that contains dates to used for the x axis. for this example, `week` column is used.
- a column that contains the corresponding y value. for this example, `ratio` is used.

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

## Bar Chart

Shortcode for rendering basic bar graphs

### Usage

Must include the following frontmatter in the `.md` file to use:

```yaml
scripts:
  - charts
```

Than include the shortcode in the body of the `.md` file.

```
{{% bar-chart
  id="cdcavgbar"
  data="/uploads/cdc_sites_ratio.csv"
  x="site_name_full"
  y="filings_ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Filings Relative to Historical Average"
%}}
```

### Props

- id: unique identifier for this bar chart instance
- title: title for the chart
- csv: url to CSV data File
- x: name of column in CSV to use for x values (bar labels)
- y: name of column in CSV to use for y values
- yTicks: number of y ticks to display
- yMin: y axis minimum value
- yMax: y axis maximum value
- yFormat: formatting for y axis values
- yTickFormat: formatting for y values in the tooltip
- margin: string with margin values to make space for axis labels ("{top} {right} {bottom} {left}", default: "8 8 104 40")

### Demo

[View Example](https://development--eviction-lab.netlify.app/updates/blog/_chart-demo) | [demo source](/content/updates/blog/_chart-demo.md)

Data file should have:

- a column present for bar labels (x values), e.g. `site_name_full`
- a column for corresponding values (y valus), e.g. `filings_ratio`

```csv
site_name_full,filings_ratio
"Richmond, VA",0.300698622161847
"Philadelphia, PA",0.347500592276712
"Pittsburgh, PA",0.369296668833901
"Kansas City, MO",0.377884615384615
"New York, NY",0.389338851031024
"Charleston, SC",0.397964145621941
"Wilmington, DE",0.429265706459309
"St Louis, MO",0.443879258416438
"Fort Worth, TX",0.446214309882616
"Cleveland, OH",0.448827143256074
"Houston, TX",0.505166235057156
"Boston, MA",0.506843533313235
"Memphis, TN",0.513360078722277
"South Bend, IN",0.538305335056304
"Milwaukee, WI",0.572111422449316
"Greenville, SC",0.622160130392842
"Phoenix, AZ",0.643703531045899
"Indianapolis, IN",0.651728907330567
"Cincinnati, OH",0.696064732070321
"Columbus, OH",0.756969101760218
"Gainesville, FL",0.842584921292461
"Jacksonville, FL",0.896321298285091
"Tampa, FL",0.900901929444001
```

## Stacked Area Chart

Shortcode for rendering stacked area charts

### Usage

Must include the following frontmatter in the `.md` file to use:

```yaml
scripts:
  - charts
```

Than include the shortcode in the body of the `.md` file.

```
{{% stack-area-chart
  id="stackarea1"
  data="/uploads/blogpost_data_cle.csv"
  x="date"
  stacks="group1;group2"
  stackLabels="Routine Evictors;Infrequent Evictors"
  title="Stack Chart Example"
  xTicks="year"
  xFormat="%Y"
  yFormat=".0%"
  title="Observed Eviction Rate for Cleveland, OH"
%}}
```

### Props

- id: unique identifier for this bar chart instance
- title: title for the chart
- csv: url to CSV data File
- x: name of column with dates (mm/dd/yyyy)
- stacks: semi-colon separated list of column names to use for stacks
- stackLabels: semi-colon separated list of labels for stacks (for legend)
- yTicks: number of y ticks to display
- yMin: y axis minimum value
- yMax: y axis maximum value
- yFormat: formatting for y axis values
- yTickFormat: formatting for y values in the tooltip
- margin: string with margin values to make space for axis labels ("{top} {right} {bottom} {left}", default: "8 8 104 40")

### Demo

[View Example](https://development--eviction-lab.netlify.app/updates/blog/_chart-demo) | [demo source](/content/updates/blog/_chart-demo.md)

Data file should have:

- a column for x values (dates), e.g. `date`
- a column for each stack value, e.g. `group1` and `group2`

```csv
date,group1,group2
01/01/2004,80.3,19.7
01/01/2005,80.9,19.1
01/01/2006,80.6,19.4
01/01/2007,82,18
01/01/2008,79.9,20.1
01/01/2009,79.6,20.4
01/01/2010,80.3,19.7
01/01/2011,79.8,20.2
01/01/2012,80.3,19.7
01/01/2013,80.9,19.1
```
