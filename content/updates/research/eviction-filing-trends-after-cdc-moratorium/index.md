---
childof: research
contenttype: updates
contentcat: research
featured: true
collection: true
in_index: true
researchtype: elresearch
title: "Preliminary Analysis: Eviction Filing Trends After the CDC Moratorium Expiration"
date: 2021-12-09T12:00:00.000Z
postauthorname: Jacob Haas, Jasmine Rangel, Juan Pablo Garnham, and Peter Hepburn
postauthortitle: Princeton University
authorpic: /images/bios/elab_thumb_sm.jpg
description: In this brief, we use data from our Eviction Tracking System, which monitors eviction filings in 31 cities and 6 states across the country, to examine what has happened after the Supreme Court’s decision.
listSummary: In this brief, we use data from our Eviction Tracking System, which monitors eviction filings in 31 cities and 6 states across the country, to examine what has happened after the Supreme Court’s decision.
socialDescription: In this brief, we use data from our Eviction Tracking System, which monitors eviction filings in 31 cities and 6 states across the country, to examine what has happened after the Supreme Court’s decision.
fbImage: social.png
twImage: social.png
aliases:
scripts:
  - charts
---

On August 26, 2021, the Supreme Court struck down the federal eviction moratorium established by the Centers for Disease Control and Prevention (CDC) nearly a year prior. While the moratorium was in place, we estimated that <a href="https://evictionlab.org/eleven-months-cdc/">the U.S. saw at least 1.55 million fewer eviction filings than normal</a>. With <a href="https://www.cbpp.org/research/poverty-and-inequality/tracking-the-covid-19-economys-effects-on-food-housing-and">millions still reporting concern about their ability to make rent</a>, many <a href="https://www.washingtonpost.com/opinions/2021/08/26/national-eviction-crisis-is-still-just-around-corner/">feared</a> that the end of these protections would lead to large increases in eviction proceedings and displacement, particularly for lower-income and minority renters.

{{< pullquote "Since the CDC moratorium ended, landlords have filed a growing number of cases, though still far fewer than are seen in a typical, pre-pandemic year." >}}

In this brief, we use data from our Eviction Tracking System, which monitors eviction filings in 31 cities and 6 states across the country, to examine what has happened after the Supreme Court’s decision. Since the CDC moratorium ended, landlords have filed a growing number of cases, though still far fewer than are seen in a typical, pre-pandemic year. But when you look at the numbers city-by-city, the landscape is more complex: while filings increased rapidly in places like <a href="https://evictionlab.org/eviction-tracking/houston-tx/">Houston</a> and <a href="https://evictionlab.org/eviction-tracking/milwaukee-wi/">Milwaukee</a>, they remain unchanged in others, such as <a href="https://evictionlab.org/eviction-tracking/new-york-ny/">New York</a>. We also explore some of the factors that may help to explain patterns observed after the federal moratorium ended.

Over the summer of 2021, prior to the Supreme Court’s ruling, eviction filings in the sites we monitor had been around 49% of historical average—just under half of what we would expect for this time of year. As Figure 1 shows, these numbers—both the absolute number of cases filed and the ratio of filings to historical average—increased following the Court’s ruling.

<style>
.tab-content.tab-content--aftercdc {
  position: relative;
  height: 620px;
}
@media(min-width: 768px) {
  .tab-content.tab-content--aftercdc {
    position: relative;
    height: 600px;
  }
}
.tab-content.tab-content--aftercdc > .tab-pane {
  display: block;
  position: absolute;
  width: 100%;
  top:0;
  left:0;
  z-index:1;
}
.tab-content.tab-content--aftercdc > .tab-pane.show.active {
  z-index:2;
}
/** 
 * there is a high specificty rule that adds bullets to *all* `li` elements 
 * inside of so we need to use !important to override here 😢
 * (❗️ `.center-content-post ul li:before`) 
 */
.nav.nav--aftercdc .nav-item:before {
  display:none!important;
}
/**
 * need to override another high specificity rule that sets *all* `a` elements on the page to red
 * (❗️ `.center-content-post.updates-post .page-content .post-body a` )
 */
.nav.nav--aftercdc .nav-item .nav-link.active {
  color: #fff!important
}
.nav.nav--aftercdc {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.nav.nav--aftercdc.nav-pills .nav-item {
  margin-left:0;
}
.nav.nav--aftercdc.nav-pills .nav-link {
  border-radius:0;
  border: 1px solid var(--c1, #e24000);
  color: var(--c1, #e24000)!important;
  font-family: GT-Eesti-Display-Bold,sans-serif;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
}

.chart.chart--bar.chart--aftercdc_figure1a .chart__axis--bar .tick text,
.chart.chart--bar.chart--aftercdc_figure1b .chart__axis--bar .tick text {
  transform: rotate(-40deg) translate(8px, 8px);
}
</style>

<div class="tab-content tab-content--aftercdc" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
{{% bar-chart
  id="aftercdc_figure1a"
  data="./figure1.csv"
  x="xfilemonthgroup_label"
  y="num_filings"
  yMin="0"
  title="Figure 1: Eviction filings during and after the CDC eviction moratorium"
  margin="8 8 88 48"
%}}

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
{{% bar-chart
  id="aftercdc_figure1b"
  data="./figure1.csv"
  x="xfilemonthgroup_label"
  y="ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 1: Eviction filings during and after the CDC eviction moratorium"
  margin="8 8 88 48"
%}}

  </div>
</div>
<ul class="nav nav-pills nav--aftercdc mb-3" id="pills-aftercdc" role="tablist" data-toggle="pills">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-counts-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-counts" aria-selected="true">Filing Counts</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-relative-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-relative" aria-selected="false">Relative to Historic Average</a>
  </li>
</ul>

Eviction filings increased in the two months after the CDC moratorium ended, but dipped in the third. In terms of the absolute number of eviction cases filed, we observed an increase of 1% between the month before and the month after the Supreme Court’s decision. This count increased again the following month (by 22.7%), but dipped in the third month after the end of the moratorium (11.2% drop). Overall, we observed 20.4% more cases filed in the three months after the moratorium than over the final three months that it was in place. <sup>1</sup>

Still, evictions remained well below historical average after the moratorium was lifted. At their highest level, in the second month after the moratorium ended (September 27 through October 26), the 48,387 eviction cases we recorded was still only 63.4% of historical average. 

But looking at the numbers city-by-city shows concerning trends in many areas of the country, especially where renters have few legal protections. In Figure 2 we plot eviction filings as a percent of historical average for each of the cities tracked by the ETS over the three months after the Supreme Court struck down the CDC eviction moratorium. 

<style>
.chart.chart--bar.chart--aftercdc_figure2 .chart__bar--good {
  fill: var(--c3);
}
.chart.chart--bar.chart--aftercdc_figure2 .chart__bar--none {
  fill: var(--c1);
}
</style>

{{% bar-chart
  id="aftercdc_figure2"
  data="./figure2.csv"
  x="site_name_full"
  y="ratio"
  barClass="post_cdc_protection_strength"
  yMin="0"
  yMax="1.4"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 2: Eviction filings relative to historical average, by city²"
  margin="8 8 164 40"
%}}

<div class="legend mb-3">
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Strong Protections</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Limited Protections</div>
  </div>
  <div class="legend-item legend-item--0">
  <div class="legend-item__color"></div>
  <div class="legend-item__label eesti--bold">No Protections</div>
  </div>
</div>

Between August 27 and November 26, 11,799 eviction cases were filed in <a href="https://evictionlab.org/eviction-tracking/las-vegas-nv/">Las Vegas</a>, about 126% of historical average. Eviction filings exceeded 75% of historical average in 11 cities, including <a href="https://evictionlab.org/eviction-tracking/columbus-oh/">Columbus</a>, <a href="https://evictionlab.org/eviction-tracking/tampa-fl/">Tampa</a>, <a href="https://evictionlab.org/eviction-tracking/indianapolis-in/">Indianapolis</a>, and <a href="https://evictionlab.org/eviction-tracking/milwaukee-wi/">Milwaukee</a>. 

By contrast, filing rates were much lower in other cities, particularly those that maintained state or local eviction moratoria through some or all of this period. In <a href="https://evictionlab.org/eviction-tracking/new-york-ny/">New York City</a>, for example, the 8,687 eviction cases filed over the three months post-moratorium represented almost 85% fewer filings than historical average. 

{{< pullquote "Across the 31 cities that we’re monitoring, 23 saw an increase in filings relative to historical average of at least ten percentage points after the CDC moratorium was struck down." >}}

Much of this variation between cities was <a href="https://evictionlab.org/eleven-months-cdc/">evident before the Supreme Court struck down the CDC moratorium</a>. Since that time, filings have also increased more quickly in some cities than in others—that is, some have more rapidly trended toward pre-pandemic "normal" eviction filing volume. We illustrate this pattern in Figure 3, which groups each of the 31 cities we monitor by their percentage point change in eviction filings relative to normal between the three months before and the three months after the CDC moratorium ended. For example, <a href="https://evictionlab.org/eviction-tracking/memphis-tn/">Memphis</a> saw filings at 54.9% of historical averages prior to the Supreme Court ruling and filings at 70.1% of historical averages afterwards – a 15.2 percentage point increase, putting them in the middle bin of Figure 3. 

<style>
.chart.chart--bar.chart--aftercdc_figure3 .chart__axis--bar .tick text,
.chart.chart--bar.chart--aftercdc_figure3 .chart__axis--bar .tick text {
  transform: rotate(-25deg) translate(8px, 8px);
}
.chart--aftercdc_figure3 .chart__label--bottom { display: none; }
@media(min-width: 600px) {
  .chart.chart--bar.chart--aftercdc_figure3 .chart__axis--bar .tick text,
  .chart.chart--bar.chart--aftercdc_figure3 .chart__axis--bar .tick text {
    transform: rotate(0deg) translate(8px, 8px);
    text-anchor: middle;
  }
  .chart--aftercdc_figure3 .chart__label--bottom { display: block; }
}
</style>

{{% bar-chart
  id="aftercdc_figure3"
  data="./figure3.csv"
  x="difference_bins_fullperiod"
  y="n"
  xLabel="Percentage Point Difference, the 3 Months Prior to and the 3 Months After CDC Ruling"
  yLabel="Number of Cities"
  yTooltipFormat="d"
  yFormat="d"
  yMin="0"
  title="Figure 3: Percentage point changes in eviction filings relative to historical average, by number of cities"
  margin="8 8 64 40"
%}}

Across the 31 cities that we’re monitoring, 23 saw an increase in filings relative to historical average of at least ten percentage points after the CDC moratorium was struck down. This included <a href="https://evictionlab.org/eviction-tracking/houston-tx/">Houston</a> (increase of 39 percentage points), <a href="https://evictionlab.org/eviction-tracking/new-orleans-la/">New Orleans</a> (increase of 33 percentage points), and <a href="https://evictionlab.org/eviction-tracking/milwaukee-wi/">Milwaukee</a> (increase of 31 percentage points). 

In <a href="https://evictionlab.org/eviction-tracking/houston-tx/">Houston</a>, 8,199 eviction cases were filed in the three months before the Court’s decision (51.8% below historical average). That rose to 13,283 cases in the three months after the moratorium was struck down (12.8% below historical average).

In some cities, filings increased but remained well below historical average. For example, <a href="https://evictionlab.org/eviction-tracking/cleveland-oh/">Cleveland, Ohio</a> and <a href="https://evictionlab.org/eviction-tracking/charleston-sc/">Charleston, South Carolina</a> both remained more than 50% below historical average. In Cleveland, filings increased from 37.3% of historical average the three months before the federal moratorium ended to 48.3% of historical average in the three months after.

“Cleveland has done a really good job of getting money out the door via rent assistance,” said Hazel Remesch, managing attorney of Housing at The Legal Aid Society of Cleveland. “Even though the system itself is still very burdensome and very difficult for tenants to navigate on their own, there has been a big push to get money into the hands of landlords.”

Remesch said that a right to counsel program that started just before the pandemic and more collaboration with courts have also been important to keep evictions at bay.

Eviction filings remained relatively steady—or even fell slightly—in eight cities. Six of these eight cities have had additional local eviction protections in place: <a href="https://evictionlab.org/eviction-tracking/albuquerque-nm/">Albuquerque</a>, <a href="https://evictionlab.org/eviction-tracking/austin-tx/">Austin</a>, <a href="https://evictionlab.org/eviction-tracking/boston-ma/">Boston</a>, <a href="https://evictionlab.org/eviction-tracking/new-york-ny/">New York City</a>, <a href="https://evictionlab.org/eviction-tracking/pittsburgh-pa/">Pittsburgh</a>, and <a href="https://evictionlab.org/eviction-tracking/richmond-va/">Richmond</a>. The other two cities that have remained steady, <a href="https://evictionlab.org/eviction-tracking/las-vegas-nv/">Las Vegas</a> and <a href="https://evictionlab.org/eviction-tracking/columbus-oh/">Columbus</a>, had already experienced an increase in filings that brought them close to or above their pre-pandemic average while the CDC moratorium was in place.

---

Eviction filings have increased since the end of the CDC moratorium, but remain well below normal levels in nearly all jurisdictions we monitor. Why might this be? It is too soon to say definitively, but several plausible explanations bear investigation.

First, emergency rental assistance (ERA) may be deterring filings. The scale and pace of ERA distribution increased markedly over the summer of 2021. The Treasury Department reported that state and local ERA programs delivered approximately $1.6 billion in June. By October, that was up to $2.86 billion, an increase of nearly 80%. The Department of the Treasury expects that $25–$30 billion of ERA funds will be spent or obligated by the end of 2021. Improvements in the distribution of these funds may have helped to encourage landlord participation in these programs and prevented eviction cases from being filed.

But these programs are starting to run out of money in some places. California, New York, and Texas—all home to large renter populations—have spent, obligated, or have enough pending applications to exhaust all ERA funding. Mitzi Ordoñez, a lead organizer for the Texas Organizing Project in Houston, said that anxiousness is growing both among tenants and landlords. Although more in the Latino community where she works are finding work, the Texas rental assistance program <a href="https://www.texastribune.org/2021/11/04/texas-rent-relief-applications-ending/">paused its applications in November</a>.

“In August and September there were more programs to apply for rent and the money was arriving faster, but I think now landlords are getting tired of waiting for the help of the government,” Ordoñez said.

In addition to the direct rent assistance, more federal funds were directed to increase access to legal counsel and eviction diversion. The expansion of such programs might give landlords more tools apart from eviction to use when dealing with a rent shortfall.

Second, income supports established by the federal government in response to the pandemic may be helping households avoid rent shortfalls. Stimulus payments, expanded unemployment insurance benefits, and the new Child Tax Credit have <a href="https://www.nytimes.com/2021/12/07/business/pandemic-savings.html">expanded cash reserves</a>, especially for low-income families. More cash in hand could allow households to pay rent more reliably and avoid potential pandemic-induced shortfalls. These “excess savings” remain above historical levels, though now appear to be shrinking.

Third, landlords in neighborhoods that normally see a large number of evictions may be filing fewer cases because demand for new rentals remains weak. In most cities, <a href="https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/">evictions are heavily concentrated in a relatively small number of neighborhoods and even buildings</a>. Some evidence is at odds with a weak rental market: <a href="https://www.usatoday.com/story/money/2021/11/23/rental-prices-small-cities-grew-most/8664490002/?gnt-cfr%3D1">recent reporting</a> has highlighted increasing rents in many markets, a pattern that would incentivize landlords to remove current tenants if they expect they can find new tenants willing to pay more. It’s unclear, however, whether this pattern holds in lower-income neighborhoods that are the sites of most evictions and where little or no real-time data on rents are available.

Fourth, more than a year and a half into the COVID-19 pandemic, landlords may be changing their property management techniques to rely less on the threat of eviction. <a href="https://www.jchs.harvard.edu/blog/findings-and-lessons-two-national-surveys-landlords">Surveys have found that landlords have adopted a variety of new practices in response to the pandemic</a>. A <a href="https://www.urban.org/features/tracking-rent-payments-mom-and-pop-landlords">growing body</a> of <a href="https://www.jpmorganchase.com/institute/research/household-debt/how-did-landlords-fare-during-covid">data suggests</a>&nbsp;that many have also weathered this period without seeing major drops in rent collection. Fewer eviction case filings might reflect the success of other means of rent collection that are less dependent on the threat of removal. If so, we might see an especially pronounced effect in areas that normally see high rates of <a href="https://evictionlab.org/serial-eviction-filings/">serial eviction filings</a>&mdash;places where historically landlords have used eviction filings as routine rent-collection tools.

Fifth, it may be that the low rates of eviction filing reported here mask an increase in displacement following lease expirations or informal evictions. We are only able to monitor eviction cases filed with the courts, and do not have a reliable way of tracking instances when tenants move out as a result of a lease expiration or when landlords illegally force tenants out. Illegal lockouts might be especially prominent among undocumented communities, like the ones in Houston that Ordoñez works with.

“Although we do a lot of workshops to inform people that their immigration status does not affect their rights as a tenant, there’s a lot of fear of going to court,” Ordoñez said. “And we also hear of illegal evictions, where building complexes do not follow the due process.”

If displacement outside of the court system became more common during the CDC eviction moratorium—or in response to stipulations that restrict landlords’ eviction options after receiving ERA funds—then our measures of eviction filings would provide an increasingly less-accurate measure of overall displacement.

{{< pullquote "Taken jointly, these factors – and likely others that we haven’t considered – are resulting in fewer eviction filings than normal following the end of the CDC eviction moratorium." >}}

Taken jointly, these factors—and likely others that we haven’t considered—are resulting in fewer eviction filings than normal following the end of the CDC eviction moratorium. An increasing number of cases were filed over the three months following the Supreme Court’s decision, but totals remain below historical average in nearly all jurisdictions that we monitor.

Fears of an immediate tsunami of eviction cases in the months following the end of the federal eviction moratorium have thus far not been borne out. We caution that this does not serve as a prediction of what will happen over the coming months: the pace of filing may increase, especially as ERA programs stop taking applications. Nonetheless, it’s encouraging that we did not see an immediate spike in cases and that filings remain considerably below historical average, both overall and in most of the jurisdictions that we monitor.

---

<div class="footnotes">
<ol>
  <li>The smaller increase in the first month and larger increase in the second month after the Supreme Court decision is partially a result of our data comparison choices rather than a true delay in the increase of filings. The period from August 27 to September 26 contains five full weekends, when eviction filings are rare, while the prior period contains only four weekends. Additionally, a date range in past years may not have had as many weekends compared to 2021, affecting comparisons to historical filings slightly.</li>
  <li>We classify protections based on three factors: the time period protections were in place (less than 3 weeks, 3-6 weeks, or greater than 6 weeks), protection strength (no protections, protections against execution of eviction/requires tenant action, or further protections), and interaction with rental assistance programs (separate track for assistance, eviction process frozen for a period during assistance application, need to have applied for assistance prior to eviction process). A “Stronger” protection is ranked at the highest level in at least two of these categories, or at the highest level in one category and the middle level in the two others; “No protection” is where protections are ranked at the lowest level in at least two of these categories.</li>
</ol>
</div>