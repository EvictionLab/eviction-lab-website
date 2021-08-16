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

**For Alex:**

The client wants something like the map below, but with discrete cutoffs at quartiles or quintiles of eviction filing rates rather than a continuous scale. Thinking we can use <code>scaleQuantize</code> in d3, either via a new map shortcode or (ideally) allowing the option of having either a linear or quantized scale in the current one.

Relevant files:

- `themes/evictionlab/assets/mapbox/mapbox.js`
- `themes/evictionlab/layouts/shortcodes/mapbox.html`
- notes on scale options: https://www.d3indepth.com/scales/#scales-with-continuous-input-and-discrete-output
- shortcodes documentation: `docs/shortcodes.md`
- this post: `content/updates/blog/jacob-post.md`

Notes from Lane:

- we are using an old version of d3 here for IE11 compatibility (v4 i think)
- there is no transpiling on this repo and we cannot use modern features (like object deconstruction, const, let, arrow functions, etc.). changes need to be checked on IE11

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

**James is handling charts below.**


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
