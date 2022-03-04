---
draft: false
scripts:
  - charts
  - mapbox
  - grouped-bar-chart
childof: research
url: /era-moratoria
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Draft WH post"
date: 2021-08-21T16:46:40.089Z
postauthorname: Jasmine Rangel, Jacob Haas, Emily Lemmerman, Joe Fish, and Peter Hepburn
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: A look back at the CDC moratorium to better understand who it
  protected and which groups have remained at risk of eviction.
listSummary: We take a look back at the CDC moratorium to better understand who
  it protected and which groups have remained at risk of eviction.
socialDescription: We take a look back at the CDC moratorium to better
  understand who it protected and which groups have remained at risk of
  eviction.
researchtype: elresearch
twImage: 11-months-cdc-social.png
fbImage: 11-months-cdc-social.png
---

<div class="d-none d-md-block">
{{% line-chart
  id="11months_fig1"
  data="./era_moratoria_shaped.csv"
  x="month"
  y="households"
  groupBy="category"
  xTicks="month"
  xFormat="%b"
  xTooltipFormat="%B %Y"
  yFormat=".2s"
  yTooltipFormat=".2s"
  highlight="protected by state moratoria;Cumulative Households Receiving ERA"
  title=""
%}}
</div>
