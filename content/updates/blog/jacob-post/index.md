---
draft: true
childof: blog
contenttype: updates
contentcat: blog
featured: "home"
researchtype: elresearch
title: "Preliminary Analysis: 11 months of the CDC Moratorium"
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
  id="11months_fig1"
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
  mark="03/18/2020"
%}}

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
  <svg width="420px" height="100px" viewBox="0 0 559 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Group" transform="translate(14.000000, 15.000000)">
              <rect id="Rectangle" fill="#2C897F" x="-5.32907052e-15" y="-5.32907052e-15" width="25.941467" height="25.941467"></rect>
              <text id="LOCAL-MORATORIUM" font-family="GT-Eesti-Display-Bold, sans-serif" font-size="19" font-weight="bold" letter-spacing="0.894117647" fill="#212529">
                  <tspan x="38.4800588" y="19.9414673">LOCAL MORATORIUM</tspan>
              </text>
          </g>
          <g id="Group-2" transform="translate(287.000000, 15.000000)">
              <rect id="Rectangle-Copy" fill="#444878" x="5.15143483e-14" y="-5.32907052e-15" width="25.941467" height="25.941467"></rect>
              <text id="PARTIAL-MORATORIUM" font-family="GT-Eesti-Display-Bold, sans-serif" font-size="19" font-weight="bold" letter-spacing="0.894117647" fill="#212529">
                  <tspan x="38.7744412" y="19.9707336">PARTIAL MORATORIUM</tspan>
              </text>
          </g>
          <g id="Group-3" transform="translate(147.500000, 63.000000)">
              <rect id="Rectangle-Copy-2" fill="#E24000" x="-5.32907052e-15" y="-5.32907052e-15" width="25.941467" height="25.941467"></rect>
              <text id="NO-LOCAL-MORATORIUM" font-family="GT-Eesti-Display-Bold, sans-serif" font-size="19" font-weight="bold" letter-spacing="0.894117647" fill="#212529">
                  <tspan x="38.1623824" y="18.9707335">NO LOCAL MORATORIUM</tspan>
              </text>
          </g>
      </g>
  </svg>
</div>

<br>

_Maps TODO: fix tooltip number format. Add legend for quartiles. 
Q: What should titles be?_
</div>
</div>
</div>
<div class="row mx-4">
<div class="col-12">
<div class="figheader mt-0 mt-md-2 mb-1">Figure 3: Maps of Tampa</div>
</div>
  <div class="col-12 px-0 mx-auto d-flex" style="max-width: 1440px;">
    <div class="col-12 col-lg-6 px-0 px-md-2">

    {{% mapbox
      id="11months_fig3_1"
      data="./fig3_map_tampa_20210813.csv"
      shapes="/uploads/tampa_shapes.json"
      column="quartile_historical"
      join="GEOID"
      name="GEOID"
      format=".1%"
      title="Historical filing levels"
      legendTitle="Eviction Filings (2017 - 2018)"
      gradientType="discrete"
      colors="rgba(250,222,211,0.14);rgba(226,64,1,0.35);rgba(226,64,1,0.5);rgba(226,64,1,0.75);rgba(226,64,1,1)"
    %}}

  </div>

  <div class="col-12 col-lg-6 px-0 px-md-2">

    {{% mapbox
      id="11months_fig3_2"
      data="./fig3_map_tampa_20210813.csv"
      shapes="/uploads/tampa_shapes.json"
      column="quartile_current"
      join="GEOID"
      name="GEOID"
      format=".1%"
      title="Current filing levels"
      legendTitle="Eviction Filings (2017 - 2018)"
      gradientType="discrete"
      colors="rgba(250,222,211,0.14);rgba(226,64,1,0.35);rgba(226,64,1,0.5);rgba(226,64,1,0.75);rgba(226,64,1,1)"
    %}}

  </div>
  </div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content">
<div class="post-body">

{{% grouped-bar-chart
  id="11months_fig4"
  titlePrefix="Figure 4: Share of eviction-filed defendants pre-and during-pandemic, by race and ethnicity"
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
  legendItems="Share of renters;Share of defendants during CDC moratorium;Share of defendants during pandemic"
  search="true"
  searchPrompt=""
%}}
