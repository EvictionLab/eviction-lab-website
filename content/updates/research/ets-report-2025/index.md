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
date: 2026-04-13T00:49:04.271Z
postauthorname: Grace Hartley
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: The days of emergency rental assistance and eviction protections are long gone. Now, our data show that landlords are filing evictions at nearly the same levels as before 2020.
listSummary: The days of emergency rental assistance and eviction protections are long gone. Now, our data show that landlords are filing evictions at nearly the same levels as before 2020.
twImage: ets-2025-hero-social.png
image: ets-2025-hero-social.png
fbImage: ets-2025-hero-social.png
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

.chart .chart__bar.chart__bar--city {
  fill: var(--c3);
}
</style>

<!-- 
<em>Correction: Changes in the case-filing system in [Dallas County, Texas](/eviction-tracking/dallas-tx), led to an undercount in the data between 2022 and 2024. We have updated our site to include these missing filings. More information is available [here](/dallas-data-update). The Eviction Lab and our partners strive to provide the most up-to-date data. We are constantly fact-checking our numbers, but there may be occasional discrepancies. We apologize for any inconvenience it may have caused.</em>
<br/>
<hr />
<br/>
-->

<span class="dropcap green">T</span>he past year involved significant change and uncertainty, especially for low-income renting families. During the longest government shutdown in U.S. history, [42 million people were left without SNAP benefits for weeks](https://www.politico.com/news/2025/11/06/judge-orders-trump-administration-to-pay-full-snap-benefits-00640627), and the passage of the  “One Big Beautiful Bill Act” [stripped benefits for 2.5 million people](https://www.cbpp.org/research/food-assistance/snap-tracker-people-are-losing-food-assistance-as-the-republican-megabill) permanently. The average amount of money low-income families have left after paying rent has hit [an all-time low of just $210](https://www.jchs.harvard.edu/blog/six-takeaways-americas-rental-housing-2026). On top of that, the federal immigration crackdown [averaged 746 deportations a day](https://www.reuters.com/world/us/trumps-early-immigration-enforcement-record-by-numbers-2026-02-24/), disrupting daily life for many immigrant households.

Families across the United States had to navigate all of these new obstacles against the backdrop of the long-running housing affordability and eviction crises . For example, in Minneapolis, immigration enforcement related raids forced many immigrants to stay home, losing work—[with an estimated cost of $15.7 million in lost wages](https://www.bloomberg.com/news/articles/2026-02-27/minneapolis-housing-crisis-looms-after-ice-surge-ends?cmpid=citylab-weekly&utm_medium=email&utm_source=newsletter&utm_term=260227&utm_campaign=citylab-weekly)—and consequently struggling to pay rent. Experiencing an eviction can force [people to spend more time in public spaces and then face a greater risk of being detained by ICE](https://www.streetroots.org/news-stories/2026/04/02/deportation-threats-change-how-immigrants-and-asylum-seekers-navigate-homelessness/). These overlapping and mutually reinforcing pressures illustrate how [eviction is both a cause and consequence of poverty](https://evictionlab.org/why-eviction-matters/). 

The past year of eviction data allows us to assess the ongoing scale of housing instability. [As we have seen in previous research](https://evictionlab.org/research/), these trends reveal how local policy choices and persistent racial disparities undermine the stability of many renters in the United States. In this context, and despite some specific improvements in the state of the housing crisis, evictions remain widespread throughout the country.

<div class="boxed-content">
<p>
This report relies on data collected through our [Eviction Tracking System](https://evictionlab.org/eviction-tracking/) (ETS), which provides monthly updates on the volume of eviction case filings in 38 city areas and 10 states across the United States ([you can find last year’s report here](https://evictionlab.org/ets-report-2024/)). While not nationally representative, these locations are home to roughly one-third of all renter households and provide a window into the state of housing instability throughout the country. In recent months, we expanded the Eviction Tracking System to track cases in the cities and suburbs surrounding Atlanta, GA, Tacoma, WA, Portland, OR, Eugene, OR, and Southwest Oregon. Our expansion into the Pacific Northwest means we now track at least one location in each census division of the country. These add up to: 18 sites in the South, 13 sites in the Midwest, nine sites in the Northeast, and eight sites in the West. Unfortunately, we lost access to eviction data in Greenville County, SC and no longer report monthly filings there. 

We present multiple statistics in this report about eviction filings. In some cases, we report the absolute number of cases filed with the courts. In others, we talk about these case filings [compared to the post-pandemic “average”](https://evictionlab.org/new-baseline/)—the typical number of eviction cases filed annually in 2023 and 2024. To make comparisons that better account for the different population sizes—Atlanta being much larger than Tacoma, for example—we also report eviction filing rates: the number of eviction cases filed per 100 renter households. For example, the 14,620 eviction cases filed in the Nashville, TN area, in 2025 represent 4% more than our post-pandemic baseline and an eviction filing rate of 9%. This means that in 2025, landlords in Nashville filed nine eviction cases for every 100 renter households.

Through recent validation efforts, we have determined that our 2025 estimates for Clark County, NV (Las Vegas) and the State of Minnesota are lower than the court-reported numbers, due to case sealing. While we work on correcting these numbers on our Eviction Tracking System, the numbers shown for Las Vegas, Minneapolis, and Minnesota in this report reflect those reported by the courts.
</p>
</div>

Across all sites that we currently monitor, landlords filed 1.23 million eviction cases in 2025. This total was slightly lower than in 2024 (1.25 million cases) and marks the second year in a row of declining eviction filings (see Figure 1). Overall, eviction case filings in 2025 were 3.2% below the post-pandemic average. 

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
  avgLines="1,baseline,;1,average,true"
  title="Figure 1. Eviction filings across ETS sites compared to historical average"
  centerLabels="true"
  margin="8 60 50 90"
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

While the total number of eviction filings across all sites was lower, this change was not consistent across the country. Eviction filings were up relative to average in 13 of the 48 sites we track (Figure 2). In Travis County, TX (the greater Austin area), landlords filed 30% more eviction filings than normal in 2025. Filings were up substantially in each of our three Oregon sites, as well as in the areas of Charleston, SC, and Columbus, OH. On the other hand, locations from Miami to Connecticut recorded far fewer cases than normal in 2025. The largest drop was in Bridgeport, CT (Fairfield County), where last year, landlords filed 20% fewer cases than average. It’s encouraging that more than two-thirds of the sites we monitor experienced fewer evictions than usual. 

Still, a drop in the number of filings relative to the average can still mean a large number of households facing the risk of eviction. For example, Atlanta saw roughly 4% fewer filings than average in 2025, meaning there were 5,600 fewer filings last year than in the preceding years. Despite that reduction, landlords still filed 144,000 eviction cases in 2025. That’s more than the number of eviction filings we recorded in New Mexico, Minnesota, Connecticut, Rhode Island, Delaware, and Wisconsin combined. Though the numbers aren’t quite as staggering, a similar story played out in the Houston, TX area: filings were down 4%, but that still meant 77,000 eviction filings.

{{% arrow-chart2
  id="fig2"
  title="Figure 2. Change in eviction filings in 2025 relative to baseline average"
  data="./figure2_data.csv"
  nameCol="site"
  nameWidth="170"
  beforeCol="start"
  afterCol="abs_diff"
  labelLine=";0"
  xMin="-.35"
  xMax=".35"
  format=".0%"
  customSort="(a, b) => (a.after < b.after ? 1 : -1)"
  axisLabelText="Percentage change from site's baseline"
  legendCaption="*Data directly sourced from the local court system."
  legendDecArrowText="Decrease"
  legendIncArrowText="Increase"
  simpleLegend="true"
%}}

Across all the locations we track, the average eviction filing rate was 7.9%, which means that landlords filed roughly one eviction case for every 13 renter households in 2025. Like with absolute case volumes, though, we see significant variation in eviction filing rates across the country (Figure 3). Four sites—the areas of Atlanta, GA, Charleston, SC, Indianapolis, IN, and Richmond, VA—had filing rates that were at least double the national average. In Atlanta, landlords filed one eviction case for every four renters. Sites like the South Bend, IN area (8% filing rate), the New Orleans, LA area (8% filing rate), and the Wilmington, DE area (10% filing rate) had many fewer eviction cases filed than in Atlanta, but they also have fewer renter households, and each ended the year with higher-than-average filing rates.

{{< pullquote "Of the 35 cities in the ETS, 19 had a higher eviction filing rate in 2024 than was typical before the pandemic. Many of the largest increases we saw last year occurred in fast-growing areas, particularly in the Sunbelt." >}}



{{< pullquote "In Phoenix, Arizona, landlords filed a record-breaking 86,946 evictions in 2024—one every six minutes—for an eviction filing rate of 14.3%." >}}




{{% bar-chart
  id="fig3"
  data="./figure3_data.csv"
  x="site"
  y="eviction_filing_rate"
  barClass="type"
  yMin="0"
  yMax="0.27"
  yTooltipFormat=".0%"
  yFormat=".0%"
  tooltipTemplate="{{value}}"
  sort="asc"
  title="Figure 3. Eviction Filing Rate by Site"
  legendCaption="*Data directly sourced from the local court system."
  simpleLegend="true"
  avgLines="0.0787,Average EFR,"
  margin="8 80 140 40"
%}}
<div class="legend mb-3">
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">City Area</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">State</div>
  </div>
</div>


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
  margin="8 8 120 40"
%}}


