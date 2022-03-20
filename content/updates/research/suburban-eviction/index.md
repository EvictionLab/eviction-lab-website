---
draft: false
scripts:
  - grouped-bar-chart
childof: research
url: /suburban-eviction
contenttype: updates
contentcat: research
featured: true
in_index: true
title: "Suburban Evictions"
date: 2022-03-18T00:00:40.089Z
listSummary: Now that the CDC moratorium has been in place for six months—and
  given that it is set to expire at the end of March—we conducted a preliminary
  analysis of how effective it has been.
photoCredit: Sasha Israel
postauthorname: Peter Hepburn and Renee Louis
postauthortitle: The Eviction Lab
socialDescription: Now that the CDC moratorium has been in place for six
  months—and given that it is set to expire at the end of March—we conducted a
  preliminary analysis of how effective it has been.
researchtype: elresearch
twImage: ready-tenant-sasha-israel.jpg
authorpic: /images/bios/elab_thumb_sm.jpg
image: ready-tenant-sasha-israel.jpg
description: TNow that the CDC moratorium has been in place for six months—and
  given that it is set to expire at the end of March—we conducted a preliminary
  analysis of how effective it has been.
fbImage: ready-tenant-sasha-israel.jpg
collection: true
---

{{% grouped-bar-chart
  id="11months_fig4"
  titlePrefix="Figure 4: Share of renters, defendants pre-pandemic, and defendants during the CDC moratorium, by race/ethnicity"
  titleSuffix=""
  data="./suburban_eviction_bar_chart_data.csv"
  x="cofips"
  y="renters_prop_w"
  yTicks="5"
  yFormat=".0%"
  yTooltipFormat=".1%"
  xTicks="Low;Medium;High"
  columns="cofips,state,county,year_string,renters_prop_a,defendant_prop_a,renters_prop_b,defendant_prop_b,renters_prop_l,defendant_prop_l"
  xBars="renters_prop_a,defendant_prop_a;renters_prop_b,defendant_prop_b;renters_prop_l,defendant_prop_l"
  xFormat=""
  highlight="renters;judgment;defendant;"
  active="0"
  searchId="cofips"
  searchLabel="county"
  type="barGroup"
  legendItems="Share of renters;Share of defendants pre-pandemic;Share of defendants during CDC moratorium"
  search="true"
  searchPrompt=""
%}}
