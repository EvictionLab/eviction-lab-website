---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
title: "Preliminary Analysis: 11 months of the CDC Moratorium"
date: 2021-08-09T16:46:40.089Z
postauthorname: Jasmine Rangel, Jacob Haas, Emily Lemmerman, Joe Fish, and Peter Hepburn
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: A look back at the CDC moratorium to better understand who it protected and which groups have remained at risk of eviction.
listSummary: We take a look back at the CDC moratorium to better understand who it protected and which groups have remained at risk of eviction.
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
  id="11months_fig1"
  data="./fig1.csv"
  x="week_date"
  y="filings"
  groupBy="filing_type"
  xTicks="month"
  xFormat="%b"
  xTooltipFormat="%x"
  yFormat=".2s"
  yTooltipFormat=".2s"
  highlight="2020-2021;historical average"
  title="Figure 1: Eviction filings were down from historical averages during the CDC Moratorium"
  mark="09/04/2020"
%}}
<div class="d-flex justify-content-center">
{{< inlinesvg svg="content/updates/blog/jacob-post/markline-legend.svg"  >}}
</div>

{{% bar-chart
  id="11months_fig2"
  data="./fig2.csv"
  x="site_name_full"
  y="ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 2: City eviction filings compared to their historic average during the CDC moratorium"
  margin="8 8 104 40"
%}}

<div class="d-flex justify-content-center">
{{< inlinesvg svg="content/updates/blog/jacob-post/fig2-legend.svg"  >}}
</div>


</div>
</div>
</div>
<div class="row mx-4">
<div class="col-12">
<div class="figheader mt-0 mt-md-2 mb-1">Figure 3: A closer look at filings during the CDC moratorium in Tampa, Florida</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 px-md-2">

    {{% mapbox
      id="11months_fig3_1"
      data="./fig3_map_tampa_20210813.csv"
      shapes="/uploads/tampa_shapes.json"
      column="quartile_historical"
      join="GEOID"
      name="GEOID"
      format="integer"
      title="Historical eviction filing rates"
      legendTitle="Eviction Filings (2017 - 2018)"
      gradientType="discrete"
      colors="rgba(250,222,211,0.14);rgba(226,64,1,0.35);rgba(226,64,1,0.5);rgba(226,64,1,0.75);rgba(226,64,1,1)"
    %}}

  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 px-md-2">

    {{% mapbox
      id="11months_fig3_2"
      data="./fig3_map_tampa_20210813.csv"
      shapes="/uploads/tampa_shapes.json"
      column="quartile_current"
      join="GEOID"
      name="GEOID"
      format="integer"
      title="Eviction filing rates during the CDC moratorium"
      legendTitle="Eviction Filings (2017 - 2018)"
      gradientType="discrete"
      colors="rgba(250,222,211,0.14);rgba(226,64,1,0.35);rgba(226,64,1,0.5);rgba(226,64,1,0.75);rgba(226,64,1,1)"
    %}}

  </div>
 
  <div class="col-12 mt-2 d-flex justify-content-center">
    {{< inlinesvg svg="content/updates/blog/jacob-post/quartiles-legend.svg"  >}}
  </div>
  <div class="figcaption col-12 col-lg-7 col-xxxl-6 col-x4l-5 mx-auto mt-1 mb-0"><p>Tracts that fall into quartile 1 have eviction filing rates that are in the bottom 25% of all Census tracts in the city. Those that fall into quartile 4 have eviction filing rates that are in the top 25% of all tracts in the city.</p></div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content">
<div class="post-body">

{{% grouped-bar-chart
  id="11months_fig4"
  titlePrefix="Figure 4: Share of renters, defendants pre-pandemic, and defendants during the CDC moratorium, by race/ethnicity"
  titleSuffix=""
  data="./race_by_demo_natl.csv"
  x="cofips"
  y="renters_prop_w"
  yTicks="5"
  yFormat=".0%"
  xTicks="Asian;Black;Latinx;White"
  columns="cofips,state,county,year_string,renters_prop_a,defendant_prop_a,judgment_prop_a,renters_prop_b,defendant_prop_b,judgment_prop_b,renters_prop_l,defendant_prop_l,judgment_prop_l,renters_prop_w,defendant_prop_w,judgment_prop_w"
  xBars="renters_prop_a,defendant_prop_a,judgment_prop_a;renters_prop_b,defendant_prop_b,judgment_prop_b;renters_prop_l,defendant_prop_l,judgment_prop_l;renters_prop_w,defendant_prop_w,judgment_prop_w"
  xFormat=""
  highlight="renters;defendant;judgment"
  active="0"
  searchId="cofips"
  searchLabel="county"
  type="barGroup"
  legendItems="Share of renters;Share of defendants during CDC moratorium;Share of defendants pre-pandemic"
  search="true"
  searchPrompt=""
%}}
