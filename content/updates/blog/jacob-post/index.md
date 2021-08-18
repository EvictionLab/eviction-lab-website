---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
title: "Jacob research post"
date: 2021-08-09T16:46:40.089Z
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


{{% line-chart
  id="fig6"
  data="./fig1-3.csv"
  x="week_date"
  y="filings"
  groupBy="filing_type"
  xTicks="month"
  xFormat="%b"
  xTooltipFormat="%x"
  yFormat=".2s"
  yTooltipFormat=".2s"
  highlight="2020-2021;historical average"
  title="Figure 1: 2020-21 Cumulative Eviction Filings Relative to Historical Average"
%}}

<br>

{{% mapbox
  id="mapbox1"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  format="integer"
  title=""
  legendTitle="Eviction Filings (2017 - 2018)"
  gradientType="discrete"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
%}}

<br/>

{{% bar-chart
  id="fig1"
  data="./fig2.csv"
  x="site_name_full"
  y="ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title=""
  margin="8 8 104 40"
%}}
