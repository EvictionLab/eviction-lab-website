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
---

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
  id="stackarea1"
  data="/uploads/blogpost_data_cle.csv"
  x="date"
  stacks="group1;group2"
  stackLabels="Routine Evictors;Infrequent Evictors"
  title="Stack Chart Example"
  xTicks="year"
  xFormat="%Y"
  yFormat=".0%"
  yTooltipFormat=".1%"
  title="Observed Eviction Rate for Cleveland, OH"
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
