---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
in_index: false
title: "(Internal) Interactive figures for use in blog and research posts"
date: 2019-09-14T16:46:40.089Z
postauthorname: The Eviction Lab
postauthortitle: Princeton University
authorpic: /images/bios/elab_thumb_sm.jpg
description: Tracking federal, state, and local actions in response to the pandemic.
socialDescription: Tracking federal, state, and local actions in response to the pandemic.
fbImage: "/images/assets/blog/covid-eviction-policies-social.jpg"
twImage: "/images/assets/blog/covid-eviction-policies-social.jpg"
scripts:
  - charts
  - maps
  - mapbox
  - grouped-bar-chart
---

Below are examples of interactive data viz components that can be repurposed with new data for use in blog/research posts. 


{{% mapbox
  id="mapbox1"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  format="integer"
  title="Linear-scale choropleth map (red)"
  legendTitle="Eviction Filings (2017 - 2018)"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
%}}

{{% mapbox
  id="mapbox2"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="filingrate"
  join="Code"
  format="percent"
  name="school"
  colors="#dfefed;#7bcac1;#2c897f"
  title="Linear-scale choropleth map (green)"
  legendTitle="Filing Rate (2017 - 2018)"
%}}

{{% mapbox
  id="mapbox3"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  gradientType="discrete"
  format="integer"
  title="Discrete-scale choropleth map"
  legendTitle="Eviction Filings (2017 - 2018)"
  colors="rgba(226, 64, 0, 0.33);rgba(226, 64, 0, 0.66);rgba(226, 64, 0, 1)"
%}}

<!-- cutoffs: provide the min, each cutoff, and max, to be used for choropleth coloring and legend -->
<!-- colors: provide 1 for each "bucket" (so 1 fewer than cutoffs) -->
{{% mapbox
  id="mapbox4"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  gradientType="discrete"
  format="integer"
  title="Discrete-scale choropleth map with custom cutoffs"
  legendTitle="Eviction Filings (2017 - 2018)"
  cutoffs="7,100,400,800,1630"
  colors="rgba(226, 64, 0, 0.25);rgba(226, 64, 0, 0.5);rgba(226, 64, 0, 0.75);rgba(226, 64, 0, 1)"
%}}

{{% state-map
  id="statemap1"
  data="/uploads/score_map_uncorrected_20210322.csv"
  title="50 state choropleth map"
  idColumn="fips"
  valueColumn="score1"
  minVal="0"
  maxVal="4.5"
  valueTemplate="{{value}} / 4.5 stars"
valueFormat=".2f"
colors="#dfefed;#7bcac1;#2c897f"
caption="Colors represent state eviction policy scores from our <a href='#'>COVID-19 housing policy scorecard</a>"
%}}

{{% histogram
  id="hist1"
  data="/uploads/hisd_data.csv"
  x="totalfilings"
  thresholds="40"
  title="Histogram chart"
  xLabel="Number of Filings"
  yLabel="Number of School Zones"
  tooltipTemplate="{total} school zones with {range} eviction filings."
  xMin="-25"
  yMax="45"
  margin="8 8 104 56"
%}}

{{% bar-chart
  id="fig1"
  data="/uploads/figure_1_20210422.csv"
  x="week_date"
  y="ratio"
  yMin="0"
  yMax="1.2"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Bar chart with highlights"
  margin="8 8 104 40"
  axis="time"
  mark="03/18/2020"
%}}

{{% bar-chart
  id="fig2"
  data="/uploads/figure_2_20210422.csv"
  x="site_factor"
  y="filings_ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Bar chart ex. 1"
  margin="8 8 134 40"
%}}

{{% bar-chart
  id="cdcavgbar"
  data="/uploads/cdc_sites_ratio.csv"
  x="site_name_full"
  y="filings_ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Bar chart ex. 2"
  margin="8 8 104 40"
%}}

<!-- see gentrification post for updated GBC using saneLoading and autoGenLegend for minimal configuration -->
{{% grouped-bar-chart 
  id="county_rd_disp" 
  titlePrefix="Grouped bar chart with search. Title reflects search scope; currently showing rates" 
  titleSuffix="" 
  data="/uploads/county_prop_lookup.csv" 
  x="countyfips" 
  y="renters_prop_w" 
  yTicks="5" 
  yFormat=".0%" 
  xTicks="Asian;Black;Latinx;White" 
  columns="cofips,state,county,year_string,renters_prop_a,defendant_prop_a,judgment_prop_a,renters_prop_b,defendant_prop_b,judgment_prop_b,renters_prop_l,defendant_prop_l,judgment_prop_l,renters_prop_w,defendant_prop_w,judgment_prop_w" 
  xBars="renters_prop_a,defendant_prop_a,judgment_prop_a;renters_prop_b,defendant_prop_b,judgment_prop_b;renters_prop_l,defendant_prop_l,judgment_prop_l;renters_prop_w,defendant_prop_w,judgment_prop_w" 
  xFormat="" 
  highlight="renters;defendant;judgment" 
  active="0" 
  searchId="cofips" 
  searchLabel="county" 
  type="barGroup" 
  legendItems="Share of renters;Share of defendants;Share of judgments" 
  search="true" 
  searchPrompt="" 
%}}

{{% line-chart
  id="cdcavg"
  data="/uploads/cdc_linechart.csv"
  x="xfilemonth"
  y="filings_ratio"
  groupBy="site_name_full"
  yFormat=".1s"
  xTicks="month"
  xFormat="%b"
  xTooltipFormat="%B"
  yFormat=".0%"
  highlight="Average"
  title="Line chart ex. 1"
%}}

{{% line-chart
  id="fig6"
  data="/uploads/figure_6_20210422.csv"
  x="xfilemonth"
  y="ratio"
  groupBy="jurisdiction"
  yFormat=".1s"
  xTicks="month"
  xFormat="%b"
  xTooltipFormat="%B"
  yFormat=".0%"
  highlight="Cincinnati;Houston;New York;Philadelphia;Phoenix"
  title="Line chart ex. 2"
%}}

{{% line-chart
  id="summed1"
  data="/uploads/summed_sites.csv"
  x="week"
  y="ratio"
  groupBy="name"
  yFormat=".0%"
  xTicks="week"
  highlight="Hartford, CT;St Louis, MO;Fort Worth, TX"
  title="Line chart ex. 3"
%}}


{{% line-chart
  id="summed2"
  data="/uploads/summed_sites.csv"
  x="week"
  y="ratio"
  groupBy="name"
  yFormat=".0%" xTicks="week"
  highlight="Hartford, CT;St Louis, MO;Fort Worth, TX"
  title="Line chart ex. 4 (curved lines)"
  curve="curveMonotoneX"
%}}


{{% stack-area-chart
  id="routine1"
  data="/uploads/blogpost_data_cle.csv"
  x="date"
  stacks="routine;infrequent"
  stackLabels="<span>Routine Evictors</span><span>116 Buildings</span>;<span>Infrequent Evictors</span><span>18,889 Buildings</span>"
  title="Stack Chart Example"
  xTicks="year"
  xFormat="%Y"
  yFormat=".0%"
  yMax="0.07"
  yTooltipFormat=".1%"
  tooltipTemplate="{{label}} <br />{{value}} of renters evicted <br />{{_percent}} of total evictions"
title="Stacked area chart"
%}}

<h2>Row charts</h2>

The following graphics all take the form of a stack of rows (one per location, year, income group etc), each with some type of horizontally-oriented visual element to represent that row's value for some metric. 

{{% arrow-chart
  id="arrows-fig"
  title="Arrow chart with separate mobile layout"
  data="/uploads/arrow_sample.csv"
  axisLabelText="Suburban Share of Evictions"
  legendDecArrowText="more urban"
  legendIncArrowText="more suburban"
  legendLabelText="shift in suburban share"
%}}

{{% arrow-chart
  id="arrows-fig2"
  title="Arrow chart with x values above 100, single layout"
  data="/uploads/arrow_sample2.csv"
  xMax="175"
  mobileCutoff="Infinity"
  legendIncArrowText="increase in filings"
  axisLabelText=""
  legendDecArrowText=""
  legendIncArrowText="increase in filings"
  legendLabelText=""
%}}

The arrow chart also has lollipop chart variant:

{{% arrow-chart
  id="lollipop-fig"
  variant="lollipop"
  title="Figure 2. Median eviction rate by neighborhood gentrification classification and metropolitan areas (2012-2016)"
  data="/uploads/sample_lollipop.csv"
  xMax="125"
  scaleFactor="10"
  axisLabelText="Median Eviction Rate"
  legendDecArrowText="Gentrifying"
  legendIncArrowText="Low-SES"
  legendLabelText=""
  mobileCutoff="Infinity"
%}}

{{% horizontal-bars
  id="hbars"
  title="Horizontal bar stack"
  data="/uploads/horizontal_bars_sample.csv"
  nameField="xsite"
  numeratorField="num_filings"
  denominatorField="num_filings_hist_avg"
  mobileCutoff="Infinity"
  legendIncArrowText="increase in filings"
  axisLabelText=""
  legendDecArrowText=""
  legendIncArrowText="increase in filings"
  legendLabelText=""
%}}

{{% butterfly-chart
  id="butterfly"
  title="Butterfly chart (generic form of a population pyramid)"
  data="/uploads/butterfly_sample.csv"
  xMax="75"
  xMinDesktop="-90"
  xMinMobile="-90"
  scaleFactor="5"
  barGap="0.15"
  nameX="-75"
  nameField="age_group"
  numerator1Field="EFR_f"
  numerator2Field="EFR_m"
  mobileCutoff="Infinity"
  legendLeftText="Females"
  legendRightText="Males"
  axisLabelText="Average annual rate, 2007-2018"
  axisLabelX="0"
%}}

<style>
  /* uncomment to view in Ankurrat (should appear properly in Gotham in blog posts) */
  /* .proportion-bars g text {
    font-family: unset;
  } */
</style>
{{% proportion-bars
  id="pbars"
  title="Proportion bars"
  v1Label="Observed Filings"
  v2Label="Missing Filings"
  data="/uploads/proportion_bars_sample.csv"
  labelField="xfileyear"
  proportionField="pct_of_historical"
  v1Field="year_filings"
  v2Field="missing_filings"
  vFormat=",d"
%}}

<code>Developers see charts/README for additional documentation.</code>
