---
draft: false
scripts:
  - charts
  - mapbox
childof: research
url: ets-report-2022
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Preliminary Analysis: Eviction Filing Patterns in 2022"
date: 2023-03-09T20:04:56.565Z
postauthorname: Camila Vallejo, Jacob Haas, and Peter Hepburn
postauthortitle: The Eviction Lab
listSummary: Over the last three years, eviction filing rates across the United
  States fell below levels that were normal prior to the COVID-19 pandemic. But
  evidence from 2022 shows that this exceptional period has come to an end.
twImage: ets-report-social.png
fbImage: ets-report-social.png
image: house.jpg
authorpic: /images/bios/elab_thumb_sm.jpg
description: Over the last three years, eviction filing rates across the United
  States fell below levels that were normal prior to the COVID-19 pandemic. But
  evidence from 2022 shows that this exceptional period has come to an end.
---
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
 * inside of so we need to use !important to override
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
.boxed-content {
  position: relative;
  background: #ecf1f6;
  padding: 3.6em 2.4em;
  margin-bottom: 3rem;
}
</style>

<span class="dropcap green">O</span>ver the last three years, eviction filing rates across the United States fell below levels that were normal prior to the COVID-19 pandemic. A wide range of policies contributed to this reduction: federal, state, and local eviction moratoria; an unprecedented investment of $46.6 billion in emergency rental assistance (ERA); expansion of the right to legal representation in eviction cases in a number of cities and states; and the growth in eviction diversion programs. These policies prevented millions of American renters from losing their homes to eviction during this public health emergency. 

But evidence from 2022 shows that this exceptional period when renters had additional tools to remain housed has come to an end. Eviction filings are increasing as policies expire. Since the start of the pandemic, we have been tracking eviction court filings in jurisdictions across the country. The ten states and 34 cities in the Eviction Tracking System (ETS) are home to about one in three renter households nationwide. While not designed as a random, representative sample, these data nonetheless allow us to monitor trends and provide the best available picture of shifting eviction risk. In this brief, we update our previous research on filing patterns in <a href="https://evictionlab.org/us-eviction-filing-patterns-2020/">2020</a> and <a href="https://evictionlab.org/us-eviction-filing-patterns-2021">2021</a>, exploring how patterns changed over the third year of the pandemic.

{{< pullquote "Landlords filed nearly 970,000 eviction cases across the sites that we track in the ETS, an increase of 78.6% compared to 2021" >}} 

Early in the pandemic, court closures and eviction moratoria dramatically reduced the number of eviction cases that landlords filed with the court. In 2020, roughly 540,000 eviction cases were filed across the places where we collect data.<sup>1</sup> That was almost 580,000 cases fewer than normal, with these “missing evictions” marking the cases that were never filed. Even as state eviction protections expired, the nationwide eviction moratorium issued by the Centers for Disease Control and Prevention and the roll-out of ERA helped to keep eviction filings well below average in 2021.

But in 2022, case filings started to look much closer to what we would have expected in pre-pandemic years. All told, landlords filed nearly 970,000 eviction cases across the sites that we track in the ETS, an increase of 78.6% compared to 2021. In Figure 1 we plot the total number of eviction cases filed each year relative to that pre-pandemic baseline.

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

This increase in case volume is also apparent when we zoom in just on 2022 data. Across all sites in the ETS, we recorded almost 66,000 eviction filings in January 2022, approximately 35.1% less than normal for a typical, pre-pandemic January. Over the next eight months, those numbers steadily increased, peaking at over 96,000 cases filed in August, 2022 (8.2% less than historical average). Case volumes declined slightly in the last quarter of the year, but that follows a predictable seasonal pattern. The 85,593 cases filed in December were 1.6% less than historical average. 

<div class="tab-content tab-content--aftercdc" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
{{% bar-chart
  id="fig2a"
  data="./fig2.csv"
  x="month"
  xFormat="%b"
  y="month_filings"
  yMin="0"
  yMax="100000"
  yTooltipFormat=",d"
  yFormat=".2s"
  title="Figure 2. Eviction filings by month in 2022 across all ETS sites"
  margin="8 8 80 40"
%}}

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

{{% bar-chart
  id="fig2b"
  data="./fig2.csv"
  x="month"
  xFormat="%b"
  y="pct_of_historical"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 2. Eviction filings by month in 2022 across all ETS sites"
  margin="8 8 80 40"
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

Not every jurisdiction where we tracked data followed this pattern over the course of the year. In some cities, we saw even more dramatic increases, or rates that were already high to start the year. In others, eviction filings started low in 2022 and remained at those levels throughout the year.

To capture this variation, in Figure 3 we plot eviction filings relative to historical average for each of the cities in the ETS. For each city, we plot where filings fell relative to the historical average in 2021 and 2022, with an arrow indicating the direction of change between years: a decrease (left-facing arrow) or increase (right-facing arrow). The cities are aligned from top to bottom according to 2022 filings relative to historical average (with those places with highest relative filings at the top). 

{{% arrow-chart
  id="fig3"
  title="Figure 3. Change in eviction filings relative to historical average from 2021 to 2022"
  data="./fig3.csv"
  xMax="175"
  mobileCutoff="Infinity"
  axisLabelText=""
  legendDecArrowText=""
  legendIncArrowText="increase in filings"
  legendLabelText=""
%}}

Between 2021 and 2022, all of the 32 cities in the ETS we have full data coverage of saw an increase in eviction filings. In some cases—like Cleveland and Albuquerque—this change was relatively small, and still left total filings in 2021 well below historical average. But in other cities the increase was much larger. For example, in the Twin Cities (Minneapolis and St. Paul, MN) filings increased from 27.4% of historical average in 2021 to 137.4% of average in 2022. That represents 8,945 more eviction cases filed in 2022 than the previous year. This pattern of large increases was also notable in Austin, Houston, and Hartford, CT.

Overall, 14 of the ETS cities finished the year with eviction filings above historical average. Particularly striking among this group is Houston, TX, where landlords filed over 82,000 eviction cases in 2022, 40.6% more than would have been normal in a typical year prior to the pandemic. There was no month over the course of the years in which eviction filings in Houston were below historical average. By contrast, eviction filings in 18 cities remained below average, with particularly low numbers—below two-thirds of average—in New York, Richmond, and Charleston.

<div class="boxed-content">
<p>
In six ETS cities—Cincinnati, Dallas, Houston, New Orleans, New York City, and Philadelphia—we track the amounts that landlords claim tenants owe when they file an eviction case against them. Since mid-2020, <a href="https://evictionlab.org/rising-claim-amounts/">landlords have been making claims that were far larger</a> than was normal prior to the pandemic. Between 2020 and 2022, landlords across these cities have claimed a total of $2.15 billion in eviction cases. More than half of that amount—$1.19 billion—was claimed in 2022 alone. Overall, fewer cases than normal were filed in 2022 in these cities, but total claims were 40% above average. Fewer tenants were facing the threat of eviction in these cities, but those who did owed considerably more.
</p>
</div>

Figure 3 highlights the extent to which eviction risk in 2022 came down to local circumstances: what protections were removed, what new policies were implemented, and how remaining ERA funds were used. But it doesn’t provide an explanation of which factors were most important, or why—for example—eviction filings were so much lower, relative to average, in Philadelphia than in Hartford, CT. Eviction Lab reached out to local experts in several of these cities to build a preliminary understanding of what was happening on the ground in these areas.

Over the course of 2022, eviction filings in Albuquerque were 32.9% below historical average, seeing only a slight increase from the previous year. Advocates said that, like most other cities, they took full advantage of ERA. The state's <a href="https://www.nmevictionprevention.com/">Eviction Diversion Program</a> received a daily list of eviction cases, contacted parties, and guided them through available resources. But having judicial buy-in helped the program reach even more people. Up until recently, the New Mexico Supreme Court required landlord-tenant judges to refer parties to the Eviction Diversion Program at the beginning of a case. Advocates said they were surprised by how much judges leaned into it. The initiative, which was voluntary for tenants and landlords, provided mediation for many. 

“Often just simple rudimentary help can prevent an eviction. The solution can be just helping somebody with a few hundred dollars of back rent or a third party talking to the landlord and then tenant so maybe heated tempers cool down,” said Samuel Taub, the deputy director of the New Mexico Eviction Prevention and Diversion Program. 

Meanwhile, Houston, Texas, saw one of the highest spikes in evictions filings in 2022. While Houston and Harris County took advantage of both <a href="https://houstonharrishelp.org/">local</a> and <a href="https://texasrentrelief.com/">state</a> rental assistance funds, addressing housing instability issues for a city with over 700,000 renter households proved challenging once federal protections were lifted and business resumed in housing courts. 

The Texas Supreme Court issued several <a href="https://www.houstonchronicle.com/news/houston-texas/housing/article/Texas-COVID-related-renter-protections-end-Nov-1-17547090.php">court orders</a> with temporary tenant protections including allowing local legal aid lawyers to provide assistance to qualifying tenants in eviction courts if resources were available and requiring judges to delay cases when parties applied to rental assistance. However, <a href="https://www.houstonchronicle.com/news/houston-texas/houston/article/Eviction-defense-lawyers-allege-judges-are-going-17300199.php">some judges allegedly went against the orders</a>. 

Depleting federal funds also made matters worse, said Dana Karni of Lone Star Legal Aid, one of five legal aid organizations helping represent tenants in housing court. 

“I think that landlords got impatient with the whole, ‘wait and see if you'll get money’ so I think that there was an uptick in cases in that regard.” 

The situation left legal aid organizations struggling to meet the increasing demand of tenants in need of help. 

“If a tenant goes into court or mediation without a lawyer, it’s a lost cause. Tenant with a lawyer it’s a totally different bargaining chip. Totally different idea,” Karni said. 

{{< pullquote "Between 2021 and 2022, all of the 32 cities in the ETS we have full data coverage of saw an increase in eviction filings" >}}

Over the first two years of the COVID-19 pandemic, a combination of federal, state, and local government efforts served to significantly reduce eviction filing rates and increase housing stability for millions of renter households. As these policies and programs expired or lost funding in 2022, eviction filings rebounded. While court case volumes remain, on average, slightly below levels that were normal prior to the pandemic, the trend is toward increases across the board. And in some places, the pre-pandemic status quo has long since been surpassed, resulting in thousands more eviction cases than ever before. 

With emergency measures a thing of the past, 2023 will be the first year that we can observe long-term changes to eviction patterns coming out of the pandemic. Political creativity over the last few years produced a range of new approaches to eviction prevention and tenant organizing that weren’t previously on the table. That led to <a href="https://evictionlab.org/2022-the-year-we-refused-to-go-back-to-normal/">lasting change in cities and states across the country</a>. In cities like <a href="https://www.latimes.com/california/story/2023-01-20/la-city-council-tenant-protections-vote">Los Angeles</a> and <a href="https://thephiladelphiacitizen.org/safe-at-home/#">Philadelphia</a> that made tenant protections a priority, how has that led to changes in eviction filing patterns? Meanwhile, which cities simply reverted to old habits, or established worse patterns? 

<hr />
<div class="footnotes">
<ol>
  <li> To allow for comparability over time, all numbers in this analysis exclude filing counts in Miami-Ft. Lauderdale-Palm Beach and Gainesville, Florida, as data was not yet available through the end of 2022 in these areas.</li>
</ol>
</div>