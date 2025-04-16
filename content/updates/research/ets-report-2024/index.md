---
draft: true
childof: research
url: ets-report-2024
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Preliminary Analysis: Eviction Filing Patterns in 2024"
date: 2025-04-17T00:49:04.271Z
postauthorname: Peter Hepburn, Danny Grubbs-Donovan, and Grace Hartley
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: As the United States moves past the COVID-19 pandemic, low-income renters face a deeply inhospitable housing market. We investigate how this affected eviction rates in 2023.
listSummary: As the United States moves past the COVID-19 pandemic, low-income renters face a deeply inhospitable housing market. We investigate how this affected eviction rates in 2023.
twImage: ets-alt-graphic.png
image: ets-alt-graphic.png
fbImage: ets-alt-graphic.png
scripts:
  - charts
  - grouped-bar-chart
---

<span class="dropcap green">A</span>

{{< pullquote "Of the 32 cities where we have complete data coverage, 25 saw an increase in eviction filings between 2022 and 2023." >}}

Across the jurisdictions we track, we find that:
- Landlords filed nearly 1,115,000 eviction cases in 2023. That’s over 100,000 more cases than were filed in 2022 and over 500,000 more than in 2021.  
- Eviction caseloads increased between 2022 and 2023 in three-quarters of the cities we track.
- In most cities, eviction filings in 2023 were above levels that were normal prior to the COVID-19 pandemic.
- 60% of eviction case defendants in 2023 were women.
- Despite making up less than one-third of renters, nearly half of eviction case defendants in 2023 were Black. 
- In many places, a large share of eviction filings were repeated cases brought against the same tenants at the same addresses. 

Landlords filed 10.5% more eviction cases in 2023 than in 2022. In total, 1,114,340 eviction cases were filed across the jurisdictions where we collect data.<sup>1</sup> Overall, that represents 2.9% fewer cases than we would have seen in these places prior to the pandemic, but still a large increase from what we observed early in the pandemic, when less than 600,000 cases were filed in 2020 and 2021 (see Figure 1).

{{% proportion-bars
  id="fig1"
  title="Figure 1. Eviction filings across ETS sites compared to historical averages"
  v1Label="Observed Filings"
  v2Label="Missing Filings"
  data="./fig1.csv"
  labelField="xfileyear"
  proportionField="pct_of_historical"
  v1Field="year_filings"
  v2Field="missing_filings"
  vFormat=",d"
%}}


{{% arrow-chart
  id="fig2"
  title="Figure 2. Change in eviction filings relative to historical average from 2022 to 2023"
  data="./fig2.csv"
  xMax="175"
  mobileCutoff="Infinity"
  legendIncArrowText="increase"
  axisLabelText="Eviction filings relative to pre-pandemic average"
  legendDecArrowText="decrease"
  nameCol="site"
  beforeCol="pct_historical_2022"
  afterCol="pct_historical_2023"
  legendLabelText=""
  labelLine="pre-pandemic average;100;0"
%}}


{{< pullquote "Fully 60% of those filed against for eviction last year were women." >}}

{{< smartlink "In line with previous trends" "https://evictionlab.org/who-is-evicted-in-america/" >}}, we find that women and Black renters faced a disproportionate share of eviction filings in 2023. In most of the ETS locations, we are able to estimate the likely race/ethnicity and gender of tenants facing eviction (for an explanation of how we do this, see our {{< smartlink "methods page" "https://evictionlab.org/eviction-tracking/methods/" >}})<sup>2</sup>. Fully 60% of those filed against for eviction last year were women. In Figure 3 we plot the share of defendants listed on eviction filings in 2023 who were Black, Latinx, or White. We compare those numbers to Census Bureau figures on the share of renters in each racial/ethnic group in the same set of places. 



{{% bar-chart
  id="fig4"
  data="./top-evictors-2024.csv"
  x="site"
  y="top100"
  yMin="0"
  yMax="0.6"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 3. Share of eviction filings by the top 100 buildings"
  margin="8 8 100 40"
%}}

{{% grouped-bar-chart 
  id="fig34" 
  saneLoading="true"
  titlePrefix="Figure 4. Share of renters and eviction filing defendants by race/ethnicity" 
  data="./main_landing_page_demographics.csv" 
  yTicks="5" 
  yMin="0"
  yFormat=".0%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}
<!-- {{% grouped-bar-chart 
  id="fig3" 
  saneLoading="true"
  titlePrefix="Figure 4. Share of renters and eviction filing defendants by race/ethnicity" 
  data="./fig3.csv" 
  yTicks="5" 
  yMin="0"
  yFormat=".0%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}} -->

{{< blogfootnotes

 "We omit data from Boston and Tampa in these analyses because we currently do not have complete 2023 data for the city."
 "We drop Austin, Minneapolis-St. Paul, Nashville, New York, Phoenix, Pittsburgh and Richmond from this portion of the analysis due to varying levels of missingness of defendant names in the data."

>}}