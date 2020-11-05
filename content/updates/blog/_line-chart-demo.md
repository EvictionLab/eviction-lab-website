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
---

Straight lines

{{% linechart id="summed" data="/uploads/summed_sites.csv" x="week" y="ratio" groupBy="name" yFormat=".0%" xTicks="week" highlight="Hartford, CT;St Louis, MO;Fort Worth, TX" title="Chart Title" %}}

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
