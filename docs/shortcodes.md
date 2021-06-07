# Shortcodes

## Data Visualization

### Line Charts

Renders a chart with multiple lines and highlights up to 3 lines.

#### Usage

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

#### Props

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

#### Example Page

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

### Bar Chart

Shortcode for rendering basic bar graphs

#### Usage

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

#### Props

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

#### Demo

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

### Histogram

Shortcode for rendering histograms

#### Usage

Must include the following frontmatter in the `.md` file to use:

```yaml
scripts:
  - charts
```

Then include the shortcode in the body of the `.md` file.

```
{{% histogram
  id="hist1"
  data="/uploads/hisd_data.csv"
  x="totalfilings"
  thresholds="40"
  title="Distribution of eviction filings within school zones, 2017-2018"
  xLabel="Number of Filings"
  yLabel="Number of School Zones"
  tooltipTemplate="{total} school zones with {range} eviction filings."
  xMin="-25"
  yMax="45"
  margin="8 8 104 56"
%}}
```

#### Props

- id: unique identifier for this histogram instance
- title: title for the chart
- data: url to CSV data File
- x: name of column in CSV to use for binning
- thresholds: the target number of bins for the histogram
- yTicks: number of y ticks to display
- yFormat: formatting for y axis values
- yLabel: y axis label
- yMin: y axis minimum value
- yMax: y axis maximum value
- xMin: x axis minimum value
- xMax: x axis maximum value
- xLabel: x axis label
- margin: string with margin values to make space for axis labels ("{top} {right} {bottom} {left}", default: "8 8 104 40")
- tooltipTemplate: a template string for the tooltip.  `{total}` and `{range}` will be replaced with their corresponding values.

#### Demo

[View Example](https://development--eviction-lab.netlify.app/updates/blog/_chart-demo) | [demo source](/content/updates/blog/_chart-demo.md)

Data file should have:

- a column to use for binning
- a column for corresponding values (y valus), e.g. `filings_ratio`

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

### State Maps

Shortcode for rendering US state maps

#### Usage

Must include the following frontmatter in the `.md` file to use:

```yaml
scripts:
  - maps
```

Than include the shortcode in the body of the `.md` file.

```
{{% state-map
  id="statemap1"
  data="/uploads/score_map_uncorrected_20210322.csv"
  title="State Eviction Protections on March 23, 2020"
  idColumn="fips"
  valueColumn="score1"
  minVal="0"
  maxVal="4.5"
  valueTemplate="{{value}} / 4.5"
  valueFormat=".2f"
  colors="#dfefed;#7bcac1;#2c897f"
  caption="sample caption for figure"
%}}
```

#### Props

- id: unique identifier for this map instance
- title: title for the map
- data: url to CSV data File
- idColumn: name of column in CSV that has state FIPS codes
- valueColumn: name of column in CSV to use for choropleth values
- yTicks: number of y ticks to display
- minVal: (optional) low end of the choropleth scale
- maxVal: (optional) high end of the choropleth scale
- valueFormat: formatting for values in the tooltip
- valueTemplate: template string for tooltip
- colors: colors to use for the choropleths, separated by semi colon
- caption: caption text below the map

#### Demo

[View Example](https://development--eviction-lab.netlify.app/updates/blog/_chart-demo) | [demo source](/content/updates/blog/_chart-demo.md)

Data file should have:

- a column present for state IDs, e.g. `fips`
- a column for choropleth values,  e.g. `values`

```csv
name,fips,score1,score2,score3,score4
Alabama,1,0.08,0.53,0.00,0.00
Alaska,2,0.38,0.93,0.00,0.00
Arizona,4,0.08,0.30,0.00,0.00
Arkansas,5,0.00,0.00,0.00,0.00
California,6,0.56,1.20,0.83,0.83
Colorado,8,0.00,2.88,0.13,0.13
Connecticut,9,3.78,3.78,2.80,2.80
Delaware,10,1.85,3.88,2.58,0.88
Florida,12,1.08,1.08,0.00,0.00
Georgia,13,0.08,0.08,0.00,0.00
Hawaii,15,2.65,2.65,2.35,2.35
Idaho,16,0.00,0.00,0.00,0.00
...
```

### Mapbox Maps

Shortcode for rendering mapbox choropleth maps

#### Usage

Must include the following frontmatter in the `.md` file to use:

```yaml
scripts:
  - mapbox
```

Than include the shortcode in the body of the `.md` file.

```
{{% mapbox
  id="mapbox1"
  title="Distribution of eviction filings within school zones, 2017-2018"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  format="integer"
  legendTitle="Eviction Filings (2017 - 2018)"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
%}}
```

#### Props

- id: unique identifier for this mapbox instance
- title: title for the map
- data: url to CSV data File
- shapes: url to the GeoJSON shapes
- column: name of column in CSV to use for choropleth values
- join: the name of the CSV column / GeoJSON feature property used to join the CSV data to the GeoJSON features.
- name: a column to use as a "name" identifier for each choropleth (displayed in the tooltip)
- format: how to format the values ("integer", "percent", or "decimal")
- legendTitle: title to use for the legend
- colors: colors to use for the choropleths, separated by semi colon

#### Demo

[View Example](https://development--eviction-lab.netlify.app/updates/blog/_chart-demo) | [demo source](/content/updates/blog/_chart-demo.md)

Data file should have:

- an identifier column, used to join the data to the GeoJSON features, e.g. `GEOID`
- a numeric column to use choropleth values

GeoJSON file should have:

- wsg84 projection
- simplified geometry (use mapshaper.org, aim for less than 1MB in size)
- each feature should have an identifier property that is used to join CSV data to the feature.

## Common blog/updates shortcodes

### Superscript numbers

`{{< sup >}}`

Used to link to footnotes in body copy.

#### Usage

Include the shortcode in the body of the markdown file or within the CMS body section. Append to relevant sentences _after_ the period.

#### Example

```
{{< sup 1 >}}
```

### Footnotes

```
{{< blogfootnotes >}}
```

Shortcode for rendering footnotes within Updates posts

#### Usage

Include the shortcode in the body of the markdown file or within the CMS body section. Each footnote should be placed separately within quotes in the desired sequence.

#### Example

```
{{< blogfootnotes

"Historical baseline data is pulled from varying years across ETS sites. A listing of baseline years for each ETS site [can be found here](/eviction-tracking/get-the-data/)."

"We refer to &quot;gender&quot; while acknowledging that our imputation process is necessarily imprecise and cannot capture important subtleties in individuals’ gender identification. Identification of ethnicity is similarly limited to broad categories."

"Details of the imputation process [can be found here](/demographics-of-eviction/). Note that the sample analyzed in the original study differs from the ETS sample, which serves to account for differences in findings."

>}}
```

### Pullquotes

`{{< pullquote >}}`

Shortcode for rendering pullquotes within Updates posts.

#### Usage

Include the shortcode in the body of the markdown file or within the CMS body section.

#### Example

```
{{< pullquote "We estimate that protections rolled-out during the pandemic have prevented at least 1.6 million eviction filings across the United States, cases that—in the absence of further eviction protections—may be pushed into 2021." >}}
```

### Flexibly-scaled images within post body

`{{< scaleimg >}}`

Shortcode for rendering images (whose width can exceed that of the body copy) within Updates posts.

#### Usage

Include the shortcode in the body of the markdown file or within the CMS body section. If the image is intended to be the same width as the column that contains the post content, feel free to use the CMS' standard image component instead—this shortcode is intended for images that should exceed the column width.

#### Props

- image: the image
- scale: sets width of image as a percent relative to the column width. For instance, a value of 135 would make the image 135% the wdith of the text column. (Do not include the "%" sign in the property.)
- title: the image's title or figure name (appears above the image).
- caption: italicized caption below the image
- alt: alt text for accessibility. Write a short description of the image here.

#### Example

```
{{< scaleimg

img="born-evicted-chart.jpg"
scale="135"
title="Figure. Estimates of Association of Eviction With Infant Birth Weight Overall and by Subgroup"
caption="Data are from court records and birth certificates in Georgia from 2000 to 2016. GED indicates General Educational Development.
alt="Chart showing association of eviction birth weights by subgroup"

>}}
```

### External links

`{{< extlink >}}`

Shortcode for rendering external links within Updates posts, which open in new tabs. (Links in markdown/the CMS open in the same tab by default, but our rule is to trigger opening of _offsite_ links in new tabs.)

#### Usage

Include the shortcode in the body of the markdown file or within the CMS body section. Include the linked text in the first set of quotations. Include the URL in the second set of quotations.

#### Example

```
{{< extlink

"intended to halt the execution of eviction cases"
"https://www.cdc.gov/coronavirus/2019-ncov/downloads/eviction-moratoria-order-faqs.pdf"

>}}
```
