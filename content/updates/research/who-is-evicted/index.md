---
draft: true
childof: research
url: who-is-evicted-in-america
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: Who is Evicted in America
date: 2023-09-30T16:20:51.942Z
postauthorname: Nick Graetz, Carl Gershenson, Peter Hepburn, Sonya R. Porter, Danielle H. Sandler, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
image: 
fbImage: 
twImage: 
description: 'One of the fiercest debates in sociology and urban studies has concerned the nature of gentrification. Analyzing eviction in cities across the country, we show that eviction rates were lower and decreasing faster in gentrifying areas.'
listSummary: 'One of the fiercest debates in sociology and urban studies has concerned the nature of gentrification. Analyzing eviction in cities across the country, we show that eviction rates were lower and decreasing faster in gentrifying areas.'
scripts:
  - charts
  - grouped-bar-chart
---


<style>
.chart__tooltip {
  z-index: 10;
}
.tab-content.tab-content--children-bars {
  position: relative;
  height: 420px;
}
.tab-content.tab-content--population-pyramid {
  position: relative;
  height: calc(70vw + 120px);
}
.tab-content.tab-content--children-lines {
  position: relative;
  height: 530px;
}
@media(min-width: 600px) {
  .tab-content.tab-content--children-bars {
    position: relative;
    height: 400px;
  }
  .tab-content.tab-content--population-pyramid {
    position: relative;
    height: 530px;
  }
}
@media(min-width: 768px) {
  .tab-content.tab-content--population-pyramid {
    position: relative;
    height: 600px;
  }
}
@media(min-width: 1200px) {
  .tab-content.tab-content--population-pyramid {
    position: relative;
    height: 690px;
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
/** 
 * there is a high specificty rule that adds bullets to *all* `li` elements 
 * inside of so we need to use !important to override here 😢
 * (❗️ `.center-content-post ul li:before`) 
 */
.nav .nav-item:before {
  display:none!important;
}
/**
 * need to override another high specificity rule that sets *all* `a` elements on the page to red
 * (❗️ `.center-content-post.updates-post .page-content .post-body a` )
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

.figheader.children-bars {
  margin-bottom: 0;
}
  
.tab-content--children-bars .chart__title {
  display: none;
}

</style>

<span class="dropcap green">T</span>hrough a groundbreaking collaboration with the U.S. Census Bureau, we are able to provide a comprehensive picture of the full population of renters living in households that were threatened with eviction between 2007 and 2016 (we describe the full methodology below). This allows us to observe the race/ethnicity, gender, and age of people living in households that were threatened with eviction, as well as overall household income. These data offer an unprecedented opportunity to understand eviction risk in America. They also make clear that several groups officially protected from housing discrimination by the Fair Housing Act (FHA) are at disproportionately high risk of eviction. 

We describe our findings in an article published in the Proceedings of the National Academy of Sciences and highlight five key results here.

[READ THE STUDY]
[READ COVERAGE IN THE NEW YORK TIMES]

7.6 Million Renters Face the Threat of Eviction Annually

Previous work documenting the prevalence of eviction has counted the number of households that face the threat of eviction. Here, we’re able to count the people living in those households. We find that, on average, 7.6 million individuals were threatened with eviction every year between 2007 and 2016. Just over half of these individuals—3.9 million people—lived in a household that received an eviction judgment. Only 42.1% of the individuals who were threatened with eviction each year were actually listed on court filings. Put another way, court records omit over half of the people at risk of eviction. 

Children Face the Highest Eviction Rates

Every year, 2.9 million children under age 18 are threatened with eviction and 1.5 million are evicted. These children represent four in every ten people who are threatened with eviction each year. 

Those under age 20 are at greatest risk of eviction. In Figure 1, we display eviction filing rates (and, if you toggle the figure, eviction rates) by gender and five-year age category. Eviction rates in the first four age categories—covering ages 0 to 19—are higher than in any subsequent category. Over 10% of all children below age five living in rental housing were threatened with eviction annually, and 5.7% were evicted. 


<div class="tab-content tab-content--population-pyramid" id="pop-py-tabContent">
  <div class="tab-pane fade show active" id="pop-py-efr" role="tabpanel" aria-labelledby="pop-py-efr-tab">

{{% butterfly-chart
  id="hbars2"
  title="Figure 1. Eviction by Gender and Five-Year Age Group"
  data="./fig1.csv"
  xMax="75"
  xMinDesktop="-90"
  xMinMobile="-90"
  scaleFactor="5"
  barGap="0.15"
  nameX="-75"
  nameField="age_group"
  numerator1Field="EFR_f"
  numerator2Field="EFR_m"
  mobileCutoff="Infinity"
  legendLeftText="Females"
  legendRightText="Males"
  axisLabelText="Average annual rate, 2007-2018"
  axisLabelX="0"
%}}

  </div>
  <div class="tab-pane fade" id="pop-py-er" role="tabpanel" aria-labelledby="pop-py-er-tab">


{{% butterfly-chart
  id="hbars2a"
  title="Figure 1. Eviction by Gender and Five-Year Age Group"
  data="./fig1.csv"
  xMax="75"
  xMinDesktop="-90"
  xMinMobile="-90"
  scaleFactor="5"
  barGap="0.15"
  nameX="-75"
  nameField="age_group"
  numerator1Field="ER_f"
  numerator2Field="ER_m"
  mobileCutoff="Infinity"
  legendLeftText="Females"
  legendRightText="Males"
  axisLabelText="Average annual rate, 2007-2018"
  axisLabelX="0"
%}}

  </div>
</div>
<ul class="nav nav-pills nav--population-pyramid mb-3" id="pills-population-pyramid" role="tablist" data-toggle="pills">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-counts-tab" data-toggle="pill" href="#pop-py-efr" role="tab" aria-controls="pills-counts" aria-selected="true">Eviction Filing Rate</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-relative-tab" data-toggle="pill" href="#pop-py-er" role="tab" aria-controls="pills-relative" aria-selected="false">Eviction Rate</a>
  </li>
</ul>
 
By contrast, the risk of eviction declines at older ages. The overall eviction filing rate for renters above age 65 was 2.0%. Still, that amounts to nearly 170,000 seniors facing the threat of eviction every year.

Those Living with Children are at the Highest Risk of Eviction

Households that include children are filed against for eviction at high rates. Indeed, the eviction filing rate for adults living with a child was 10.4%, over double the risk for adults living without children (5.0%).

Another way to think about this is in terms of households that were threatened with eviction and those that weren’t. Among households that didn’t get filed against for eviction, roughly one-third included children. By contrast, over half (52.2%) of households that were filed against had a child present. 

Black Renters face a Disproportionate Burden

Black renters face a disproportionate share of evictions. Less than one in every five renters in America is Black (18.8%), but over half of all eviction filings are against Black renters (51.1%). 

This also means that Black renters face far higher risk of eviction than any other group. Between 2007 and 2016, roughly one in five Black adult renters were living in a household filed against for eviction and roughly one in ten were evicted each year. By contrast, the average annual eviction filing and eviction rates for white adult renters were 4.2% and 2.5%, respectively. 

Eviction filing and eviction rates for Hispanic adult renters were comparable to those for white renters. Asian renters consistently had the lowest eviction filing and eviction rates. It’s worth noting, though, that our results relate only to formal evictions filed with the courts. Members of these groups—particularly foreign-born renters who don’t have legal documentation—may be disproportionately subjected to informal or illegal evictions that we don’t see in court records.  

Racial disparities in eviction risk are also compounded by the higher risk of eviction faced by those living with children. Figure 2 displays eviction rates for adult renters by race/ethnicity, broken down by whether the individual lives in a household with a child. Annual eviction filing rates among Black adults living with kids surpass 25%, well over double the risk faced by members of any other group. 

<div class="figheader children-bars">Figure 2. Eviction among adult renters, by race/ethnicity and presence of children</div>

<div class="tab-content tab-content--children-bars" id="ch-ba-tabContent">
  <div class="tab-pane fade show active" id="ch-ba-efr" role="tabpanel" aria-labelledby="ch-ba-efr-tab">
{{% grouped-bar-chart 
  id="gbc2" 
  saneLoading="EFR,race,children"
  titlePrefix="" 
  data="./fig2saneloading.csv" 
  yTicks="5" 
  yMin="0"
  yMax="0.3"
  yFormat=".1%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}

  </div>
  <div class="tab-pane fade" id="ch-ba-er" role="tabpanel" aria-labelledby="ch-ba-er-tab">

{{% grouped-bar-chart
  id="gbc2a" 
  saneLoading="ER,race,children"
  titlePrefix="" 
  data="./fig2saneloading.csv" 
  yTicks="5" 
  yMin="0"
  yMax="0.3"
  yFormat=".1%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}

  </div>
</div>
<ul class="nav nav-pills nav--children-bars mb-3" id="pills-children-bars" role="tablist" data-toggle="pills">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-counts-tab" data-toggle="pill" href="#ch-ba-efr" role="tab" aria-controls="pills-counts" aria-selected="true">Eviction Filing Rate</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-relative-tab" data-toggle="pill" href="#ch-ba-er" role="tab" aria-controls="pills-relative" aria-selected="false">Eviction Rate</a>
  </li>
</ul>

Eviction Risk Declines with Income, but Racial Disparities are Large

Poor households are at greatest risk of eviction. As household income increases, the risk of being threatened with eviction falls. However, as we show in Figure 3, this pattern is shaped by the disparities in eviction risk that we document above (by race/ethnicity and by the presence of children). Within every income category, Black renters—particularly those living with kids—are at greater risk of eviction than their white peers. 

<div class="figheader">Figure 3. Eviction Rates for Adult Renters by Race/Ethnicity and Household Income</div>

<div class="tab-content tab-content--children-lines" id="ch-li-tabContent">
  <div class="tab-pane fade show active" id="ch-li-with" role="tabpanel" aria-labelledby="ch-li-with-tab">

<iframe class="visual" src="https://65192f1448cdce0008ed5337--eviction-lab-site.netlify.app/blog/who-is-evicted-viz/"></iframe>


  </div>
  <div class="tab-pane fade" id="ch-li-without" role="tabpanel" aria-labelledby="ch-li-without-tab">

<iframe class="visual" src="https://65192f1448cdce0008ed5337--eviction-lab-site.netlify.app/blog/who-is-evicted-viz/?type=no-children"></iframe>

  </div>
</div>
<div class="legend mb-3">
  <div class="legend-item legend-item--0">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">All</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Black</div>
  </div>
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label eesti--bold">White</div>
  </div>
</div>
<ul class="nav nav-pills nav--children-lines mb-3" id="pills-children-lines" role="tablist" data-toggle="pills">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-counts-tab" data-toggle="pill" href="#ch-li-with" role="tab" aria-controls="pills-counts" aria-selected="true">Children under 18 present</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-relative-tab" data-toggle="pill" href="#ch-li-without" role="tab" aria-controls="pills-relative" aria-selected="false">No children present</a>
  </li>
</ul>


This study offers an unprecedented picture of the full population of individuals threatened with eviction across America between 2007 and 2016. We are able to demonstrate, for the first time, the sheer number of people facing the threat of eviction, the scale of racial/ethnic disparities in eviction risk, and the heavy burden of eviction faced by children. Across the life-course, the risk of experiencing an eviction—a deeply traumatizing event—is highest during childhood. Evicted children face increased risk of food insecurity, exposure to environmental hazards, academic challenges, and a range of long-term physical and mental health problems. Nearly three million children face these risks every single year. 

In response to the COVID-19 pandemic, policymakers instituted a set of policies that dramatically reduced both poverty rates and eviction rates. As those policies lapse, poverty rates—especially childhood poverty rates—have spiked and eviction filing rates are returning to pre-pandemic levels. This study offers a clear picture of who will pay the price if we return to the status quo that existed before the pandemic.

It also makes clear that further work is necessary to fulfill the promise of the Fair Housing Act. The FHA was established to protect people from discrimination in housing because of their race, national origin, religion, sex, familial status, or disability. Our results demonstrate the disparate impact of eviction faced by two protected classes: Black renters and renters with children. 

We cannot hope to fully implement the FHA and affirmatively further fair housing without collecting more data about renters. As a result of the 1975 Home Mortgage Disclosure Act, the federal government collects data about home loans, allowing researchers to document ethno-racial disparities in access to credit and patterns of segregation among homeowners. There is no equivalent law or data collection when it comes to private rental housing, where the vast majority of low-income Americans—especially Black and Hispanic Americans—find housing. Without reliable and transparent data systems, we cannot begin to truly address America’s ongoing history of discriminatory housing policies and practices.


Methods

Our partnership with the Census Bureau involved linking millions of eviction court records to unique identifiers maintained by the Bureau. Using that linkage, we were able to analyze how households that were threatened with eviction responded to the American Community Survey (ACS). Those ACS data included detailed listings of everyone living in the household as well as information on household economic well-being.

We created a dataset linking eviction court records to the 2006-2015 American Community Survey (ACS), allowing us to observe detailed household rosters for households filed against for eviction. We draw on court records previously compiled by the Eviction Lab. These records, comprising 58 million filings from 2000-2016, were collected either manually or via bulk extracts from administrative data systems. They were cleaned, stripped of duplicate and commercial eviction cases, geocoded, and validated against publicly available data sources published by county and state court systems. 

We submitted these records to the U.S. Census Bureau’s Person Validation Identification System (PVS), which then assigned Protected Identification Keys (PIKs) using a probabilistic linkage between records based on names and addresses reported in eviction filings (38 million matches; 65% PIK match rate nationally). We merged eviction records to the ACS by PIK, linking ACS responses in the year immediately preceding the eviction filing to observe household characteristics at approximately the time of the court case. This merged sample covered filings from 2007 to 2016 linked to ACS characteristics from 2006 to 2015 (N=214,000 unique individuals whose household responded to the ACS in the year prior to being filed against). ACS responses allowed us to record the race, ethnicity, gender, nativity, and age of all members of households threatened with eviction. All statistics are weighted using the ACS sample weights. 

To estimate eviction filing and eviction rates, we first calculated ratios per unique household filed against in our matched sample (e.g., the average number of U.S.-born white men aged 40-45 per household filed against) by state and year. We then multiplied these ratios by publicly available estimates of total unique households filed against in every state-year to calculate complete numerators: the total number of unique renters filed against and/or evicted by state, year, race, ethnicity, gender, nativity, and age. This new dataset allowed us to describe the total population at risk of eviction (those living in a household that received an eviction filing), which is composed of listed adults (those directly filed against), unlisted adults (those living in the household but unnamed on the filing), and children 10 (those under 18 and typically unnamed on the filing). We similarly describe the total evicted population (those living in a household that received an eviction judgment: a court order to vacate the premises). 


