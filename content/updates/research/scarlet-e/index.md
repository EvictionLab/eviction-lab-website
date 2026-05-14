---
draft: true
childof: research
url: the-scarlet-e-confronting-the-life-altering-consequences-of-an-eviction
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "The Scarlet E: Confronting the Life-Altering Consequences of an Eviction"
date: 2026-05-15T00:49:04.271Z
postauthorname: The Eviction Lab
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
image: ets-2025-hero-social.jpg
description: lorem ipsum
listSummary: lorem ipsum
scripts:
  - charts
  - maps
twImage: ets-2025-hero-social.jpg
fbImage: ets-2025-hero-social.jpg
---
<span class="dropcap green">T</span>
<style>
  .svg-map__shape--hovered,
  .svg-map__map.css-hover .svg-map__shape.hoverable:hover {
    stroke: #fff;
    /* stroke-width: 3; */
  }
  .svg-map__tooltip {
    max-width: 240px;
  }
</style>

{{% state-map
  id="statemap111"
  data="./map_data.csv"
  markerData="./map_data_cities.csv"
  title="Figure 1. Map of protections"
  idColumn="fips"
  valueColumn="protection"
  valueTemplate="<strong>Protections:</strong><br/> • {{tooltip}}"
  colors="#2c897f;#434878"
  simpleDisplay=true
  cssHover=true
%}}

<div class="legend mb-3">
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">State with protections</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color circle"></div>
  <div class="legend-item__label">City with protections</div>
  </div>
  <div class="legend-item">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">State without protections</div>
  </div>
</div>