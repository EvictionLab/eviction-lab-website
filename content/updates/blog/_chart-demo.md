---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
title: "Chart sample"
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
---

{{% mapbox
  id="mapbox1"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  format="integer"
  title="Distribution of eviction filings within school zones, 2017-2018"
  legendTitle="Eviction Filings (2017 - 2018)"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  tooltipTemplate="{total} school zones with {range} eviction filings."
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
  title="Distribution of eviction filings within school zones, 2017-2018"
  legendTitle="Filing Rate (2017 - 2018)"
  tooltipTemplate="{total} school zones with {range} eviction filings."
%}}

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

{{% bar-chart
  id="fig1"
  data="/uploads/figure_1_20210422.csv"
  x="week_date"
  y="ratio"
  yMin="0"
  yMax="1.2"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 1"
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
  title="Figure 2"
  margin="8 8 134 40"
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
  title="Figure 6"
%}}

{{% state-map
  id="statemap1"
  data="/uploads/score_map_uncorrected_20210322.csv"
  title="State Eviction Protections on March 23, 2020"
  idColumn="fips"
  valueColumn="score1"
  minVal="0"
  maxVal="4.5"
  valueTemplate="{{value}} / 4.5 stars"
valueFormat=".2f"
colors="#dfefed;#7bcac1;#2c897f"
caption="Colors represent state eviction policy scores from our <a href='#'>COVID-19 housing policy scorecard</a>"
%}}

{{% state-map
  id="statemap2"
  data="/uploads/score_map_uncorrected_20210322.csv"
  title="State Eviction Protections on May 11, 2020"
  idColumn="fips"
  valueColumn="score2"
  minVal="0"
  maxVal="4.5"
  ticks="5"
  colors="#dfefed;#7bcac1;#2c897f"
  footnote="Colors represent state eviction policy scores from our COVID-19 housing policy scorecard"
%}}

{{% state-map
  id="statemap3"
  data="/uploads/score_map_uncorrected_20210322.csv"
  title="State Eviction Protections on November 23, 2020"
  idColumn="fips"
  valueColumn="score3"
  minVal="0"
  maxVal="4.5"
  ticks="5"
  colors="#dfefed;#7bcac1;#2c897f"
  footnote="Colors represent state eviction policy scores from our COVID-19 housing policy scorecard"
%}}

{{% state-map
  id="statemap4"
  data="/uploads/score_map_uncorrected_20210322.csv"
  title="State Eviction Protections on March 22, 2021"
  idColumn="fips"
  valueColumn="score4"
  minVal="0"
  maxVal="4.5"
  ticks="5"
  colors="#dfefed;#7bcac1;#2c897f"
  footnote="Colors represent state eviction policy scores from our COVID-19 housing policy scorecard"
%}}

Stack Area Chart

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
title="Contribution to Eviction Rate By Year In Cleveland, OH"
%}}

Basic bars

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
  margin="8 8 104 40"
%}}

Straight lines

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
  title="Filings Relative to Historical Average"
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
  title="Chart Title"
%}}

Curved lines

{{% line-chart
  id="summed2"
  data="/uploads/summed_sites.csv"
  x="week"
  y="ratio"
  groupBy="name"
  yFormat=".0%" xTicks="week"
  highlight="Hartford, CT;St Louis, MO;Fort Worth, TX"
  title="Chart Title"
  curve="curveMonotoneX"
%}}
