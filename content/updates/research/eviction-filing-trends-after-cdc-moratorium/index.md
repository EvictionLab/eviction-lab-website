---
childof: research
contenttype: updates
contentcat: research
featured: true
collection: true
researchtype: elresearch
title: "Preliminary Analysis: Eviction Filing Trends After the CDC Moratorium Expiration"
date: 2021-12-09T12:00:00.000Z
postauthorname: Jacob Haas, Jasmine Rangel, Juan Pablo Garnham, and Peter Hepburn
postauthortitle: Princeton University
authorpic: /images/bios/elab_thumb_sm.jpg
description: Get the latest news and understand your rights.
socialDescription: Get the latest news and understand your rights.
fbImage: "preview.png"
twImage: "preview.png"
aliases:
scripts:
  - charts
---

On August 26, 2021, the Supreme Court struck down the federal eviction moratorium established by the Centers for Disease Control and Prevention (CDC) nearly a year prior. While the moratorium was in place, we estimated that <a href="https://evictionlab.org/eleven-months-cdc/">the U.S. saw at least 1.55 million fewer eviction filings than normal</a>. With <a href="https://www.cbpp.org/research/poverty-and-inequality/tracking-the-covid-19-economys-effects-on-food-housing-and">millions still reporting concern about their ability to make rent</a>, many <a href="https://www.washingtonpost.com/opinions/2021/08/26/national-eviction-crisis-is-still-just-around-corner/">feared</a> that the end of these protections would lead to large increases in eviction proceedings and displacement, particularly for lower-income and minority renters.

Using data from our Eviction Tracking System, which monitors eviction filings in 31 cities and 6 states across the country, we can examine what has happened after the Supreme Court&rsquo;s decision. Since the CDC moratorium ended, landlords have filed a growing number of cases, though still far fewer than are seen in a typical, pre-pandemic year. But when you look at the numbers city-by-city, the landscape is more complex: while filings are increasing rapidly in places like Houston and Milwaukee, they remain unchanged in others, such as New York.

Over the summer of 2021, prior to the Supreme Court&rsquo;s ruling, eviction filings in the sites we monitor had been around 44%&nbsp;of historical average&mdash;just under half of what we would expect for this time of year.&nbsp;As Figure 1 shows, these numbers&mdash;both the absolute number of cases filed and the ratio of filings to historical average&mdash;increased following the Court&rsquo;s ruling.

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

In terms of the absolute number of eviction cases filed, we observed an increase of 1.6% between the month before and the month after the Supreme Court&rsquo;s decision. This count increased again the following month (by 18.8%), but dipped in the third month after the end of the moratorium (11.6% drop). Overall, we observed 19.2% more cases filed in the three months after the moratorium than over the final three months that it was in place.

Still, evictions remained well below historical average after the moratorium was lifted. At their highest level, in the second month after the moratorium ended (September 27 through October 26), the 38,199 eviction cases we recorded was still only 57.1% of historical average.

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
  title="Figure 2: Eviction filings relative to historical average, by city"
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

Between August 27 and November 26, 8,420 eviction cases were filed in Las Vegas, about 89% of historical average. Eviction filings exceeded 75% of historical average in 10 cities, including Columbus, Tampa, Indianapolis, and Milwaukee. By contrast, filing rates were much lower in other cities, particularly those that maintained state or local eviction moratoria through some or all of this period. In New York City, for example, the 8,688 eviction cases filed over the three months post-moratorium represented almost 85% fewer filings than historical average.

Much of this variation between cities was <a href="https://evictionlab.org/eleven-months-cdc/">evident before the Supreme Court struck down the CDC moratorium</a>. Since that time, filings have also increased more quickly in some cities than in others&mdash;that is, some have more rapidly trended toward pre-pandemic &quot;normal&quot; eviction filing volume. We illustrate this pattern in Figure 3, which plots eviction filings relative to historical average in each of the 31 cities we monitor over the three months before and the three months after the CDC moratorium ended.

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
  title="Figure 3: Changes in eviction filings relative to historical average, by number of cities"
  margin="8 8 64 40"
%}}

Across the 31 cities that we&rsquo;re monitoring, 22 saw an increase in filings relative to historical average of at least ten percentage points after the CDC moratorium was struck down. This included Houston (increase of 53 percentage points), Hartford, CT (increase of 45 percentage points), and Milwaukee (increase of 40 percentage points).

In Houston, 3,163 eviction cases were filed the month before the Court&rsquo;s decision (44.7% below historical average). That rose to 5,007 cases two months after the moratorium was struck down (8.2% above historical average).

In some cities, filings increased but remained well below historical average.&nbsp;For example, Cleveland, Ohio and Charleston, South Carolina both remained more than 40% below historical average. In Cleveland, filings increased from 39.6% of historical average the month before the federal moratorium ended to 58.5% of historical average two months after.

&ldquo;Cleveland has done a really good job of getting money out the door via rent assistance,&rdquo; said Hazel Remesch, managing attorney of Housing at The Legal Aid Society of Cleveland. &ldquo;Even though the system itself is still very burdensome and very difficult for tenants to navigate on their own, there has been a big push to get money into the hands of landlords.&rdquo;

Remesch said that a right to counsel program that started just before the pandemic and more collaboration with courts have also been important to keep evictions at bay.

Eviction filings remained relatively steady&mdash;or even fell slightly&mdash;in six cities. Five of these six cities have additional local eviction protections in place: Albuquerque, Austin, Boston, New York City, and Richmond. The sixth city that has remained steady, Gainesville, Florida, had already experienced an increase in filings close to their pre-pandemic average while the CDC moratorium was in place.

---

Eviction filings have increased since the end of the CDC moratorium, but remain well below normal levels. Why might this be? It is too soon to say definitively, but several plausible explanations bear investigation.

First, emergency rental assistance (ERA) may be deterring filings. The scale and pace of ERA distribution increased markedly over the summer of 2021. The Treasury Department reported that state and local ERA programs delivered approximately $1.6 billion in June. By September, that was up to $2.6 billion, an increase of nearly 70%. Improvements in the distribution of these funds may have helped to encourage landlord participation in these programs and prevented eviction cases from being filed.

But these programs are starting to run out of money in some places. Mitzi Ordo&ntilde;ez, a lead organizer for the Texas Organizing Project in Houston, said that anxiousness is growing both among tenants and landlords. Although more in the Latino community where she works are finding work, the Texas rental assistance program <a href="https://www.texastribune.org/2021/11/04/texas-rent-relief-applications-ending/">paused its applications in November</a>.

&ldquo;In August and September there were more programs to apply for rent and the money was arriving faster, but I think now landlords are getting tired of waiting for the help of the government,&rdquo; Ordo&ntilde;ez said.

In addition to the direct rent assistance, more federal funds were directed to increase access to legal counsel and eviction diversion. The expansion of such programs might give landlords more tools apart from eviction to use when dealing with a rent shortfall.

Second, income supports established by the federal government in response to the pandemic may be helping households avoid rent shortfalls. Stimulus payments, expanded unemployment insurance benefits, and the new Child Tax Credit have <a href="https://www.nytimes.com/2021/12/07/business/pandemic-savings.html">expanded cash reserves</a>, especially for low-income families. More cash in hand could allow households to pay rent more reliably and avoid potential pandemic-induced shortfalls. These &ldquo;excess savings&rdquo; remain above historical levels, though now appear to be shrinking.

Third, landlords in neighborhoods that normally see a large number of evictions may be filing fewer cases because demand for new rentals remains weak. In most cities, <a href="https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/">evictions are heavily concentrated in a relatively small number of neighborhoods and even buildings</a>. <a href="https://www.usatoday.com/story/money/2021/11/23/rental-prices-small-cities-grew-most/8664490002/?gnt-cfr%3D1">Recent reporting </a>has highlighted increasing rents in many markets, a pattern that would incentivize landlords to remove current tenants if they expect they can find new tenants willing to pay more. It&rsquo;s unclear, however, whether this pattern holds in lower-income neighborhoods that are the sites of most evictions and where little or no real-time data on rents are available.

Fourth, more than a year and a half into the COVID-19 pandemic, landlords may be changing their property management techniques to rely less on the threat of eviction. <a href="https://www.jchs.harvard.edu/blog/findings-and-lessons-two-national-surveys-landlords">Surveys have found that landlords have adopted a variety of new practices in response to the pandemic</a>. A <a href="https://www.urban.org/features/tracking-rent-payments-mom-and-pop-landlords">growing body</a>&nbsp;of <a href="https://www.jpmorganchase.com/institute/research/household-debt/how-did-landlords-fare-during-covid">data suggests</a>&nbsp;that many have also weathered this period without seeing major drops in rent collection. Fewer eviction case filings might reflect the success of other means of rent collection that are less dependent on the threat of removal. If so, we might see an especially pronounced effect in areas that normally see high rates of <a href="https://evictionlab.org/serial-eviction-filings/">serial eviction filings</a>&mdash;places where historically landlords have used eviction filings as routine rent-collection tools. &nbsp;

Fifth, it may be that the low rates of eviction filing reported here mask an increase in informal evictions. We are only able to monitor eviction cases filed with the courts, and do not have a reliable way of tracking instances when landlords illegally force tenants out. This might be a especially prominent problem among undocumented communities, like the ones in Houston that Ordo&ntilde;ez works with.

&ldquo;Although we do a lot of workshops to inform people that their immigration status does not affect their rights as a tenant, there&rsquo;s a lot of fear of going to court,&rdquo; Ordo&ntilde;ez said. &ldquo;And we also hear of illegal evictions, where building complexes do not follow the due process.&rdquo;

If these informal evictions became more common during the CDC eviction moratorium&mdash;or in response to stipulations that restrict landlords&rsquo; eviction options after receiving ERA funds&mdash;then our measures of eviction filings would provide an increasingly less-accurate measure of overall displacement.

Taken jointly, these factors&mdash;and likely others that we haven&rsquo;t considered&mdash;are resulting in fewer eviction filings than normal following the end of the CDC eviction moratorium. An increasing number of cases were filed over the three months following the Supreme Court&rsquo;s decision, but totals remain below historical average in nearly all jurisdictions that we monitor.

Fears of an immediate tsunami of eviction cases in the months following the end of the federal eviction moratorium have thus far not been borne out. We caution that this does not serve as a prediction of what will happen over the coming months and that the pace of filing may increase, especially as ERA programs stop taking applications. Nonetheless, it&rsquo;s encouraging that we did not see an immediate spike in cases and that filings overall remain considerably below historical average, both overall and in most of the jurisdictions that we monitor.
