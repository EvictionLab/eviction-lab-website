---
draft: true
childof: blog
url: we-made-a-simple-eviction-data-request-to-all-50-states-this-is-what-we-learned
contenttype: updates
collection: true
contentcat: blog
featured: true
in_index: true
title: "We made a simple eviction data request to all 50 states. This is what we learned"
date: 2024-10-04T18:49:04.271Z
postauthorname: Camila Vallejo
postauthortitle: The Eviction Lab
authorpic: /about/page-content/research-team-bios/camila-vallejo/cvallejo_thumb.jpg
description: "Lorem ipsum"
listSummary: "Lorem ipsum"
twImage: 24153653237_6d5182fb1b_o.jpeg
image: 24153653237_6d5182fb1b_o.jpeg
fbImage: 24153653237_6d5182fb1b_o.jpeg
scripts:
  - charts
  - maps
---
<style>
  .svg-map__legend {
    display: none;
  }
</style>

<!-- TODO: add to _chart-demo -->
{{% state-map
  id="statemap1"
  data="./map_data.csv"
  title="50 state choropleth map"
  idColumn="fips"
  valueColumn="score1"
  zeroPattern=true
  minVal="0"
  maxVal="2"
  valueTemplate=""
  valueFormat=".2f"
  binValues="Data not available;Data found after request;Data on website"
  colors="#94aabd;#434878;#2c897f"
  caption="yes"
%}}
