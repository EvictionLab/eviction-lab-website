---
draft: true
childof: research
url: ets-report-2025
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Preliminary Analysis: Eviction Filing Patterns in 2025"
date: 2026-04-07T00:49:04.271Z
postauthorname: Grace Hartley
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: The days of emergency rental assistance and eviction protections are long gone. Now, our data show that landlords are filing evictions at nearly the same levels as before 2020.
listSummary: The days of emergency rental assistance and eviction protections are long gone. Now, our data show that landlords are filing evictions at nearly the same levels as before 2020.
twImage: ets-filing-patterns-2024-hero.jpg
image: ets-filing-patterns-2024-hero.jpg
fbImage: ets-filing-patterns-2024-hero.jpg
scripts:
  - arrow-chart2
  - charts
  - grouped-bar-chart
---

<style>
  /* ~~~~~~~~~~ STYLES FOR TOGGLE PILLS ~~~~~~~~~~ */
.tab-content {
  position: relative;
  height: 620px;
}
@media(min-width: 768px) {
  .tab-content {
    position: relative;
    height: 600px;
  }
}
.tab-content > .tab-pane {
  display: block;
  position: absolute;
  width: 100%;
  top:0;
  left:0;
  z-index:1;
}
.tab-content > .tab-pane.show.active {
  z-index:2;
}
/*
 * override another high specificty rule that adds bullets to *all* `li` elements 
 */
.nav .nav-item:before {
  display:none!important;
}
/*
 * override another high specificity rule that sets *all* `a` elements on the page to red
 */
.nav .nav-item .nav-link.active {
  color: #fff!important
}
.nav {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.nav.nav-pills .nav-item {
  margin-left:0;
}
.nav.nav-pills .nav-link {
  border-radius:0;
  border: 1px solid var(--c1, #e24000);
  color: var(--c1, #e24000)!important;
  font-family: GT-Eesti-Display-Bold,sans-serif;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
}
  /* ~~~~~~~~~~ END STYLES FOR TOGGLE PILLS ~~~~~~~~~~ */

.boxed-content {
  position: relative;
  background: #ecf1f6;
  padding: 3.6em 2.4em;
  margin-bottom: 3rem;
}

.chart__tooltip.chart__tooltip--fig3 .tooltip__item span span {
  font-weight: normal;
}
</style>

<!-- 
<em>Correction: Changes in the case-filing system in [Dallas County, Texas](/eviction-tracking/dallas-tx), led to an undercount in the data between 2022 and 2024. We have updated our site to include these missing filings. More information is available [here](/dallas-data-update). The Eviction Lab and our partners strive to provide the most up-to-date data. We are constantly fact-checking our numbers, but there may be occasional discrepancies. We apologize for any inconvenience it may have caused.</em>
<br/>
<hr />
<br/>
-->

<span class="dropcap green">T</span>he days of emergency rental assistance and eviction protections are long gone. These programs got the United States to historically low levels of housing displacement during the COVID-19 pandemic. Now, our data show that landlords are filing evictions at nearly the same levels as before 2020. In some concerning cases like Phoenix, Las Vegas, and Houston, landlords are evicting many more tenants than before.

<div class="boxed-content">
<p>
Through our {{< smartlink "Eviction Tracking System (ETS)" "https://evictionlab.org/eviction-tracking/" >}}, the Eviction Lab monitors the rate at which new eviction cases are filed in 10 states and more than 30 cites nationwide. Places included in the ETS are home to roughly one in every three renter households. The court data that we collect lets us keep tabs on housing instability in real time—to understand how many people face the threat of eviction, where they live, and who they are. In this brief, we present a review of trends over the last year (you can read our previous report {{< smartlink "here" "https://evictionlab.org/ets-report-2023/" >}}).
</p>
</div>

Landlords filed just over one million eviction cases in 2024 in the jurisdictions we track. That’s a small drop relative to 2023 and roughly seven percent fewer eviction cases filed than in a typical pre-pandemic year (see Figure 1). However, it’s notable that this reduction in eviction filings is driven by just one site: {{< smartlink "New York City" "https://evictionlab.org/in-the-most-expensive-city-in-the-country-evictions-remain-lower-than-before-covid-19/" >}}. If we remove New York—the city with the largest renter population of the country—eviction filings were three percent above historical average. 


<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-with" role="tabpanel" aria-labelledby="pills-with-tab">
{{% bar-chart
  id="fig11"
  data="./figure1_data.csv"
  x="year"
  y="percentage_of_historical"
  yMin="0"
  yMax="1.1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  avgLines="1,historical,;1,average,true"
  title="Figure 1. Eviction filings across ETS sites compared to historical average"
  centerLabels="true"
  margin="8 60 50 40"
%}}
  </div>
  <div class="tab-pane fade" id="pills-without" role="tabpanel" aria-labelledby="pills-without-tab">
{{% bar-chart
  id="fig12"
  data="./figure1_data.csv"
  x="year"
  y="filings"
  yMin="0"
  yTooltipFormat=","
  yFormat=","
  title="Figure 1. Eviction filings counts across ETS sites"
  centerLabels="true"
  margin="8 60 50 90"
%}}
  </div>
</div>
<ul class="nav nav-pills mb-3" id="pills-EFR" role="tablist" data-toggle="pills">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-with-tab" data-toggle="pill" href="#pills-with" role="tab" aria-controls="pills-with" aria-selected="false"> vs. Baseline</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-without-tab" data-toggle="pill" href="#pills-without" role="tab" aria-controls="pills-without" aria-selected="true">Filing Counts</a>
  </li>
</ul>

We use a metric called the eviction filing rate to account for differences in the size of the renter population across sites. This rate tells us the number of eviction cases filed for every hundred renter households. For example, the overall eviction filing rate across all cities in the ETS was 7.8% in 2024, meaning that there were almost eight eviction filings for every hundred renter households. (When we include data from full states as well, the overall filing rate was 7.3% in 2024.)

Eviction filing rates varied substantially across the country, both in absolute terms and when we compare to  what was normal prior to the pandemic. For instance, the Twin Cities of Minneapolis and St. Paul, MN saw 12,065 eviction cases filed in 2024, for an eviction filing rate of 4%. That’s lower than the average across ETS cities, but still a lot higher than what was normal in the Twin Cities prior to 2020 (2.7%).

{{< pullquote "Of the 35 cities in the ETS, 19 had a higher eviction filing rate in 2024 than was typical before the pandemic. Many of the largest increases we saw last year occurred in fast-growing areas, particularly in the Sunbelt." >}}

To demonstrate the range of variation, we plot eviction filing rates and changes to these rates in each of the ETS cities in Figure 2. The arrows show if there’s been an increase or a decrease from the historical eviction filing rate to the 2024 eviction filing rate.  A red, right-facing arrow indicates an increase in the filing rate, while a blue, left-facing arrow indicates a decrease in the filing rate. Cities are arranged from top to bottom based on their 2024 filing rate.

{{% arrow-chart2
  id="fig2"
  title="Figure 2. Eviction filing rates in 2024 relative to pre-pandemic levels"
  data="./fig02.csv"
  nameCol="site"
  nameWidth="150"
  rowHeight="24"
  beforeCol="avg_efr_pct"
  afterCol="efr_2024_pct"
  xMin="0"
  xMax="30"
  tooltipFormat=".1%"
  xTicks="0|5"
  labelLine="2024 average;7.8"
  valueType="percentInflated"
  customSort="(a, b) => (a.after < b.after ? 1 : -1)"
  axisLabelText="Eviction filing rate"
  legendCaption="Note: the 7.8% average reflects the total|eviction filing rate across all ETS cities in 2024"
  legendDecArrowText="Decrease"
  legendIncArrowText="Increase"
  simpleLegend="true"
%}}

Eviction is relatively uncommon in some of these cities we track, while in others landlords turn to the courts frequently. Nine of the 35 cities in the ETS had filing rates above 10% in 2024, meaning at least one eviction filing for every ten renter households. In Phoenix, Arizona, landlords filed a record-breaking 86,946 evictions in 2024—one every six minutes—for an eviction filing rate of 14.3%. By contrast, cities like Austin, Minneapolis, and Gainesville had low eviction filing rates. Philadelphia showed notable declines and now has the second lowest filing rate of the cities we track at just 4.0%.

Several cities experienced substantial reductions in filing rates last year. Yet many of the cities with these declines still rank among those with the highest filing rates. For example, Richmond had the highest pre-pandemic filing rate among the cities we track (27.6%). Despite a sizable drop, its 2024 rate of 24.1%—nearly one eviction for every four renter households—still represents the highest rate in our dataset. Similarly, Charleston’s filing rate of 15.7% in 2024 is a major improvement from what was normal prior to the pandemic (22.7%), but is still more than twice the average across ETS cities. 

{{< pullquote "In Phoenix, Arizona, landlords filed a record-breaking 86,946 evictions in 2024—one every six minutes—for an eviction filing rate of 14.3%." >}}

By contrast, during 2024 evictions became more common in more than half of the cities that we track. Of the 35 cities in the ETS, 19 had a higher eviction filing rate in 2024 than was typical before the pandemic. Many of the largest increases we saw last year occurred in fast-growing areas, particularly in the Sunbelt. Phoenix experienced the largest jump in its filing rate, from 10.6% prior to the pandemic to 14.3% in 2024. This means that across the city, landlords filed 23,000 more evictions than in a typical pre-pandemic year. Houston renters also experienced a large increase in their filing rate, from 6.9% to 9.2%. This amounted to 20,000 additional eviction filings, equivalent to the total number of evictions filed in Tampa last year. And Las Vegas renters faced an additional 12,000 eviction filings, reflecting an increase in the filing rate from 9.8% to 13.2%.

It’s also worth noting that changes to eviction filing rates weren’t always consistent within states. There were a number of cases where one city in a state had a higher-than-normal filing rate, while another was at or below pre-pandemic levels. For example, as noted above, the filing rate in Houston, TX was up in 2024, while Dallas experienced a slight decrease in the filing rate (7.4% in 2024 compared to 8.6% pre-2020). And in Ohio, we saw contrasting situations: while the eviction filing rate was down relative to pre-pandemic levels in Cleveland, in Columbus landlords increased their eviction activity. This serves as a reminder that local conditions and policies enacted by cities and counties can be as important as state-level policies.

These differences that we see across states and cities also happen within metropolitan areas. As we’ve demonstrated in previous research, {{< smartlink "eviction cases are often concentrated in a relatively small number of buildings" "https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/" >}}. In 15 of the ETS cities we track which buildings are responsible for the largest number of eviction cases. These “eviction hotspots” are critical to target if city and state governments want to confront the local eviction crisis. In Figure 3 we plot the share of eviction cases in 2024 that originated from the top 100 filers in each of these cities.



Eviction hotspots account for 58.2% of all cases filed in Greenville, SC, in 2024. These 100 buildings were responsible for 2,293 eviction cases. Several other cities, including Albuquerque, South Bend, and Memphis saw similarly high shares of filings from eviction hotspots. Filings were relatively less concentrated in Houston, Philadelphia and Dallas. In Houston, only 15.5% of cases came from the top 100 filers. Across all 15 cities, the top evictors filed 18,347 eviction cases in 2024, and on average accounted for 32.6% of all filings in each city. 

One thing remains constant across cities and states: evictions disproportionately target specific groups of more vulnerable renters. {{< smartlink "As our previous work" "https://evictionlab.org/who-is-evicted-in-america/" >}} has shown, Black renters, households with children, and women are the main target of eviction cases. While available court records don’t let us assess all of these disparities in real-time, we’re able to use defendant information to track eviction filings by race/ethnicity and gender. In 2024, 58% of those named on eviction filings were women, despite representing only 53% of the renting population. 

{{% bar-chart
  id="fig3"
  data="./figure3_data.csv"
  x="site"
  y="eviction_filing_rate"
  yMin="0"
  yMax="0.27"
  yTooltipFormat=".1%"
  yFormat=".0%"
  tooltipTemplate="{{value}}"
  sort="asc"
  title="Figure 3. Eviction Filing Rate by Site in 2025"
  avgLines="0.08,Average EFR,"
  margin="8 80 140 40"
%}}

In Figure 4 we plot the share of defendants listed on eviction filings in 2024 who were Black, Hispanic, or White. We compare those numbers to Census Bureau figures on the share of renters in each racial/ethnic group in the same set of places. Despite making up only 28% of renters, 36% of eviction filings are against Black individuals in these areas. By contrast, all other racial/ethnic groups see an underrepresentation when it comes to eviction filings.

{{% grouped-bar-chart 
  id="fig4" 
  data="./figure4_data.csv" 
  saneLoading="true"
  titlePrefix="Figure 4. Share of renters and eviction filing defendants by race/ethnicity" 
  yTicks="5" 
  yMin="0"
  yFormat=".0%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}

<hr />

Nationally, eviction filings have rebounded from their pandemic lows, and returned to near historic averages. But data from ETS sites in 2024 reveals diverging trends across the country. While some cities—like New York, Philadelphia, Cleveland, and Charleston—have made significant strides reducing their eviction rates, others have been backsliding. For renters in Phoenix, Las Vegas, and Houston, housing is less stable now than it was before the pandemic. 

Court data alone don’t let us identify the root causes of these trends. But it is notable that much of the recent rise in evictions has occurred in the Sunbelt, where increased migration and growing housing demand have collided with weak tenant protections. By contrast, when cities take concrete steps to improve tenant protections, we see evictions decrease. {{< smartlink "New York City" "https://evictionlab.org/in-the-most-expensive-city-in-the-country-evictions-remain-lower-than-before-covid-19/" >}} and {{< smartlink "Philadelphia" "https://www.inquirer.com/real-estate/housing/eviction-diversion-process-philadelphia-renters-landlords-20250218.html" >}}, for example, instituted programs aimed at reducing eviction filings, and the effects are large. Filings in New York City are at 52% of their pre-pandemic level, fully accounting for the lowered overall rates of eviction that we witness across all sites. 

{{< pullquote "For renters in Phoenix, Las Vegas, and Houston, housing is less stable now than it was before the pandemic." >}}

{{% bar-chart
  id="fig5"
  data="./figure5_data.csv"
  x="site"
  y="top100"
  yMin="0"
  yMax="0.6"
  yTooltipFormat=".1%"
  yFormat=".0%"
  tooltipTemplate="{{value}} <span>({{filings}} filings)</span>"
  sort="asc"
  title="Figure 5. Share of eviction filings by the top 100 buildings"
  margin="8 8 100 40"
%}}
Cities, states, and the federal government are considering a wide range of policies that may affect tenants in the coming years. In the final days of the Biden administration, HUD put in place a requirement guaranteeing residents of public housing and project-based rental assistance properties with {{< smartlink "30 days’ notice before facing an eviction case" "https://nlihc.org/resource/hud-publishes-final-30-day-eviction-notice-rule" >}}. This should benefit some of the nation’s most vulnerable renters, {{< smartlink "a group that has historically faced a large number of eviction cases" "https://evictionlab.org/public-housing-and-the-threat-of-eviction/" >}}. But, at the same time, Congress is considering stripping similar protections written into the CARES Act, and major landlord groups {{< smartlink "have asked the Trump administration to end these benefits through executive action" "https://www.multifamilydive.com/news/naa-nmhc-legislation-policy-congress/742040/" >}}. (Iowa’s Supreme Court {{< smartlink "has already rescinded them" "https://www.ourquadcities.com/news/local-news/changes-to-iowa-law-lower-eviction-notice-policy-from-30-days-to-three/" >}}.) Meanwhile, legislatures {{< smartlink "in at least 11 states are considering or have approved anti-squatting measures" "https://naahq.org/squatters-legislation-rise" >}}, which advocates argue undermine protections for all tenants, even those with valid leases. The patterns that we have documented during 2024 reflect the residential instability of low-income Americans. The picture for 2025 remains uncertain.
