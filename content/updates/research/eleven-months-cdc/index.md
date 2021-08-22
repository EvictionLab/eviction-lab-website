---
draft: false
childof: research
contenttype: updates
contentcat: research
featured: true
in_index: true
researchtype: elresearch
title: "Preliminary Analysis: 11 months of the CDC Moratorium"
date: 2021-08-18T16:46:40.089Z
postauthorname: Jasmine Rangel, Jacob Haas, Emily Lemmerman, Joe Fish, and Peter Hepburn
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: A look back at the CDC moratorium to better understand who it protected and which groups have remained at risk of eviction.
listSummary: We take a look back at the CDC moratorium to better understand who it protected and which groups have remained at risk of eviction.
socialDescription: Tracking federal, state, and local actions in response to the pandemic.
fbImage: "11-months-cdc-social.png"
twImage: "11-months-cdc-social.png"
url: /eleven-months-cdc
scripts:
  - charts
  - mapbox
  - grouped-bar-chart
---

On August 3, 2021—three days after having let the Centers for Disease Control and Prevention (CDC) eviction moratorium lapse and under intense pressure from members of Congress—the Biden administration announced a revised moratorium. Even as it was announced, President Biden warned that the fate of this moratorium was uncertain in the face of sustained legal challenges. To understand the significance of this new moratorium, the Eviction Lab evaluated the federal moratorium that preceded it and its role in reducing eviction filings. 

On September 4, 2020, the CDC enacted a {{< extlink "moratorium on the execution of most evictions" "https://www.govinfo.gov/content/pkg/FR-2020-09-04/pdf/2020-19654.pdf" >}}. Millions of individuals lost a job or fell sick during the pandemic. Unable to pay rent, many faced losing their home to eviction, and the possibility of doubled-up living arrangements or homelessness, situations that make it difficult to take COVID-19 precautions and reduce the spread of the virus. The goal of the moratorium was to keep people in their homes and buy time for families and landlords to access rental assistance. As [state eviction moratoria rolled back in late summer 2020](/one-year-of-eviction-moratoria/), this federal action afforded {{< extlink "millions of tenants struggling to pay rent" "https://www.cbpp.org/research/poverty-and-inequality/tracking-the-covid-19-recessions-effects-on-food-housing-and" >}} protection from the threat of displacement. The moratorium was extended four times (December 27, January 29, March 28, and June 24), before expiring on July 31, 2021. The revised moratorium announced on August 3 affords the same protections but is targeted to areas with {{< extlink "\"substantial\" or \"high\" COVID-19 transmission rates" "https://covid.cdc.gov/covid-data-tracker/#county-view" >}}. 

{{< pullquote "The CDC moratorium helped to prevent 1.55 million eviction filings nationwide." >}}


In light of the July expiration—and recognizing that that revised CDC moratorium does not offer protections to all renters—we aim here to provide a preliminary evaluation of the CDC eviction moratorium as it existed between September 4, 2020 and July 31, 2021. The moratorium extended important protections to tenants, but it was far from comprehensive. Tenants were required to provide a declaration of qualification to their landlords, who could continue to file eviction cases and challenge tenant eligibility in court. Using data from the [Eviction Tracking System](/eviction-tracking/), we can look back on the initial 11 months of the CDC moratorium to better understand who it protected and which groups have remained at risk of being evicted.

Between September 4, 2020 and July 31, 2021, we observed 368,398 eviction filings across the jurisdictions we monitor. This represents less than half as many eviction filings (47.2%) as we would expect over the same period in a typical year. In Figure 1, we plot eviction filings across all ETS sites since January 2020, as well as the historical average filings in these sites. Normally, the eviction filing rate in the areas we monitor is about 8.1% over this time period. With the CDC eviction moratorium in place, that fell to around 3.8%. 

<div class="d-none d-md-block">
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
</div>
<div class="d-block d-md-none">
{{% line-chart
  id="11months_fig1_m"
  data="./fig1.csv"
  x="week_date"
  y="filings"
  groupBy="filing_type"
  xTicks="year"
  xFormat="%b %y"
  xTooltipFormat="%x"
  yFormat=".2s"
  yTooltipFormat=".2s"
  highlight="2020-2021;historical average"
  title="Figure 1: Eviction filings were down from historical averages during the CDC Moratorium"
  mark="09/04/2020"
%}}
</div>
<div class="d-flex justify-content-center px-2 px-md-0 mb-4 mb-md-5">
{{< inlinesvg svg="content/updates/research/eleven-months-cdc/markline-legend.svg"  >}}
</div>


We estimate that the CDC moratorium helped to prevent 1.55 million eviction filings nationwide. The ETS collects data from 31 cities and six full states, home to one in every four renter households in the United States. To provide a national estimate of the total number of eviction filings that have been avoided during the CDC moratorium, we employed regression methods to extrapolate what we observed in the ETS to all other counties for which we have historical eviction filing data. This allows us to cover an additional 28.6 million renter households, bringing overall coverage to 39 million out of 43 million renter households (89.5%). In total, we estimate that federal, state, and local policies helped to prevent at least 2.45 million eviction filings since the start of the pandemic (March 15, 2020)

As a result of differences in local interpretation and implementation of the CDC order, renters in some cities—including Tampa, FL, Cincinnati, OH, and Indianapolis, IN—were afforded much weaker protections than those in others, like Boston, MA and Pittsburgh, PA. In Figure 2, we plot eviction filings relative to historical average in each jurisdiction during the CDC eviction moratorium. Bars are shaded to indicate the presence of local eviction protections for some or all of the period. 


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

<div class="justify-content-center d-none d-md-flex mb-5 mb-md-3">
{{< inlinesvg svg="content/updates/research/eleven-months-cdc/fig2-legend.svg"  >}}
</div>
<div class="d-flex justify-content-center d-block d-md-none px-2 px-md-0 mb-4 mb-md-5">
{{< inlinesvg svg="content/updates/research/eleven-months-cdc/fig2-legend-m.svg"  >}}
</div>

In some areas, eviction filing rates were close to historical average, meaning that the CDC order had little if any effect on eviction patterns. In [Las Vegas](/eviction-tracking/las-vegas-nv/), filings were at 91% of historical average overall, though they were considerably lower between December 15, 2020 and May 31, 2021 when local protections were in place. Filings were above 75% of average in all three sites we track in Florida, as well as Columbus, Ohio. By contrast, filings were below 12% of historical average in Austin, TX and the Twin Cities, sites in which state or local governments adopted stronger protections.

{{< pullquote "A large number of eviction cases originate from a relatively small number of Census tracts—a pattern that has been maintained throughout the pandemic and during the CDC moratorium." >}}

{{< extlink "Previous research" "https://journals.sagepub.com/doi/full/10.1177/0002716221991458" >}} has found that a handful of neighborhoods will often, year after year, account for an outsize share of a city's evictions. This is true of cities included in the ETS, where a large number of eviction cases originate from a relatively small number of Census tracts—a pattern that has been maintained throughout the pandemic and during the CDC moratorium. Figure 3 displays an example of this trend in Tampa, FL (Hillsborough and Pinellas Counties).


</div>
</div>
</div>
<div class="row mx-4">
<div class="col-12">
<div class="figheader px-0 px-md-3 mt-0 mb-1">Figure 3: A closer look at filings during the CDC moratorium in Tampa, Florida</div>
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
 
  <div class="col-12 mt-2 d-flex justify-content-center px-0">
    {{< inlinesvg svg="content/updates/research/eleven-months-cdc/quartiles-legend.svg"  >}}
  </div>
  <div class="figcaption col-12 col-lg-7 col-xxxl-6 col-x4l-5 mx-auto mt-1 mb-0"><p>Tracts that fall into quartile 1 have eviction filing rates that are in the bottom 25% of all Census tracts in the city. Those that fall into quartile 4 have eviction filing rates that are in the top 25% of all tracts in the city.</p></div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content pt-4 pt-md-0">
<div class="post-body pt-lg-3">

Neighborhoods with high eviction filing rates prior to the pandemic continued to see the highest rates during the CDC moratorium. Of Census tracts in Tampa that fell in the top quartile of eviction filing rates prior to the pandemic, 68% stayed in the top quartile during the moratorium and nearly all (96%) remained somewhere in the top half. In Tampa, the correlation between a neighborhood’s pre-pandemic eviction filing rate and its filing rate during the CDC moratorium was 0.66, weighted by renter population, indicating a strong relationship. Across all ETS sites, the correlation was 0.72.  

While the CDC moratorium was in place, eviction filings continued to target members of the same [demographic groups as prior to the pandemic](/demographics-of-eviction/). In Figure 4, we plot the share of eviction filings against Asian, Black, Latinx, and white individuals before the pandemic and during the CDC eviction moratorium, as well as the share of all renters in those racial/ethnic groups. Prior to the pandemic, Black renters received a disproportionate share of all eviction filings: they made up 22% of all renters in ETS sites, but received 35% of eviction filings. They continued to be over-represented during the CDC moratorium period, receiving 33% of filings. 



{{% grouped-bar-chart
  id="11months_fig4"
  titlePrefix="Figure 4: Share of renters, defendants pre-pandemic, and defendants during the CDC moratorium, by race/ethnicity"
  titleSuffix=""
  data="./race_by_demo_natl.csv"
  x="cofips"
  y="renters_prop_w"
  yTicks="5"
  yFormat=".0%"
  yTooltipFormat=".1%"
  xTicks="Asian;Black;Latinx;White"
  columns="cofips,state,county,year_string,renters_prop_a,defendant_prop_a,judgment_prop_a,renters_prop_b,defendant_prop_b,judgment_prop_b,renters_prop_l,defendant_prop_l,judgment_prop_l,renters_prop_w,defendant_prop_w,judgment_prop_w"
  xBars="renters_prop_a,judgment_prop_a,defendant_prop_a;renters_prop_b,judgment_prop_b,defendant_prop_b;renters_prop_l,judgment_prop_l,defendant_prop_l;renters_prop_w,judgment_prop_w,defendant_prop_w"
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

<div class="d-flex justify-content-center d-block d-md-none px-0 px-md-0 mb-4">
{{< inlinesvg svg="content/updates/research/eleven-months-cdc/fig4-legend-m.svg"  >}}
</div>


Eviction moratoria may be critical to slowing the spread of the delta variant of COVID-19, which has been the driving force behind the increase in cases in the United States during the summer of 2021. Early research indicates that moratoria are associated with a slower disease spread. {{< extlink "Leifheit and colleagues" "https://academic.oup.com/aje/advance-article/doi/10.1093/aje/kwab196/6328194" >}}, for example, found that in the first few weeks after a state’s moratorium was lifted, COVID-19 incidence and death began to increase relative to states that maintained their moratoria. [Neighborhoods with the highest eviction filing rates during the pandemic have the lowest COVID-19 vaccination rates](/filing-and-vaccination-rates/), leaving residents particularly susceptible to infection. But the public health risk does not stop at neighborhood borders. {{< extlink "Nande and colleagues" "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7605580/" >}} found that excess COVID-19 incidence and death following eviction moratorium expiration affected affluent communities with few evictions as well as poor neighborhoods with many.
  
The CDC eviction moratorium, as it ran between September 4, 2020 and July 31, 2021, helped to prevent at least 1.55 million eviction filings across the country. Less than half as many cases as normal were filed over this period, and in some jurisdictions—particularly those with stronger state or local moratoria—that number was even lower. Those cases that were filed tended to be in the same neighborhoods that experienced many evictions prior to the pandemic, and the demographic composition of tenants facing eviction saw little change during the CDC moratorium. Protections afforded by the moratorium helped to reduce the threat of displacement, but did nothing to address underlying racial and gender disparities in eviction rates nor the concentration of eviction in hard-hit neighborhoods. 
