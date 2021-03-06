---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
title: "Line chart sample"
date: 2019-09-14T16:46:40.089Z
postauthorname: The Eviction Lab
postauthortitle: Princeton University
authorpic: /images/bios/elab_thumb_sm.jpg
description: Tracking federal, state, and local actions in response to the pandemic.
socialDescription: Tracking federal, state, and local actions in response to the pandemic.
fbImage: "/images/assets/blog/covid-eviction-policies-social.jpg"
twImage: "/images/assets/blog/covid-eviction-policies-social.jpg"
scripts:
  - linechart
  - bar-chart
---

Basic bars

{{% bar-chart id="cdcavgbar" data="/uploads/cdc_sites_ratio.csv" x="site_name_full" y="filings_ratio" yMin="0" yMax="1" yFormat=".0%"  title="Filings Relative to Historical Average" %}}

Straight lines

{{% linechart id="cdcavg" data="/uploads/cdc_linechart.csv" x="xfilemonth" y="filings_ratio" groupBy="site_name_full" yFormat=".0%" xTicks="month" xFormat="%b" xTooltipFormat="%B" highlight="Average;Philadelphia, PA;Tampa, FL" title="Filings Relative to Historical Average" %}}

{{% linechart id="summed1" data="/uploads/summed_sites.csv" x="week" y="ratio" groupBy="name" yFormat=".0%" xTicks="week" highlight="Hartford, CT;St Louis, MO;Fort Worth, TX" title="Chart Title" %}}

Curved lines

{{% linechart
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
