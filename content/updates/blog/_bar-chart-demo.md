---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
title: "Bar chart sample"
date: 2019-09-14T16:46:40.089Z
postauthorname: The Eviction Lab
postauthortitle: Princeton University
authorpic: /images/bios/elab_thumb_sm.jpg
description: Tracking federal, state, and local actions in response to the pandemic.
socialDescription: Tracking federal, state, and local actions in response to the pandemic.
fbImage: "/images/assets/blog/covid-eviction-policies-social.jpg"
twImage: "/images/assets/blog/covid-eviction-policies-social.jpg"
scripts:
  - bar-chart
---

basic bar chart


{{% bar-chart id="cdcavgbar" data="/uploads/cdc_sites_ratio.csv" x="site_name_full" y="filings_ratio" yMin="0" yMax="1" yFormat=".0%"  title="Filings Relative to Historical Average" %}}