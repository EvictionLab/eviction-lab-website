---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
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








