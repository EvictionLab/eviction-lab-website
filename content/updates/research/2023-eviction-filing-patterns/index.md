---
draft: true
childof: research
url: preliminary-analysis-eviction-filing-patterns-in-2023
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Preliminary Analysis: Eviction Filing Patterns in 2023"
date: 2024-04-18T11:49:04.271Z
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

<span class="dropcap green">A</span>s the United States moves past the COVID-19 pandemic, low-income renters face an increasingly difficult housing market. {{< smartlink "The country lacks millions of units of affordable rental housing" "https://nlihc.org/gap" >}}, and in those units that are available, {{< smartlink "a record number of tenants are paying well beyond their means" "https://www.jchs.harvard.edu/blog/rental-housing-unaffordability-how-did-we-get-here" >}}. High interest rates prevent younger, middle-class renters from buying homes, which in turn increases demand in the rental sector. How did this combination of factors affect eviction rates in 2023? And how did this vary across the U.S.?

To answer those questions, we turn to data from the {{< smartlink "Eviction Tracking System" "https://evictionlab.org/eviction-tracking/" >}} (ETS). Since 2020, we’ve been tracking the records of new eviction court filings in 10 states and 34 cities nationwide, areas that are collectively home to about one in every three American renters. In this brief, we provide an annual recap of eviction trends, as we did in previous years (check out our older blog posts for analysis in {{< smartlink "2020" "https://evictionlab.org/us-eviction-filing-patterns-2020/" >}}, {{< smartlink "2021" "https://evictionlab.org/us-eviction-filing-patterns-2021/" >}}, and {{< smartlink "2022" "https://evictionlab.org/ets-report-2022/" >}}). Housing instability varied prior to the pandemic, and here we highlight how those divides continue to grow. 

{{< pullquote "Of the 32 cities where we have complete data coverage, 25 saw an increase in eviction filings between 2022 and 2023." >}}

Across the jurisdictions we track, we find that:
- Landlords filed nearly 1,115,000 eviction cases in 2023. That’s over 100,000 more cases than were filed in 2022 and over 500,000 more than in 2021.  
- Eviction caseloads increased between 2022 and 2023 in three-quarters of the cities we track.
- In most cities, eviction filings in 2023 were above levels that were normal prior to the COVID-19 pandemic.
- 60% of eviction case defendants in 2023 were women.
- Despite making up only 28% of renters, half of eviction case defendants in 2023 were Black. 
- In many places, a large share of eviction filings were repeated cases brought against the same tenants at the same addresses. 

Landlords filed 10.5% more eviction cases in 2023 than in 2022. In total, 1,114,340 eviction cases were filed across the jurisdictions where we collect data.<sup>1</sup> Overall, that represents 2.9% fewer cases than we would have seen in these places prior to the pandemic, but still a large increase from what we observed early in the pandemic, when about 540,000 cases were filed in 2020 and 2021 (see Figure 1).

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

While eviction caseloads were up overall, there was a lot of variation in year-over-year changes across the country. While some places saw case filing numbers fall between 2022 and 2023, many saw sizable increases. 

To capture that variation, we display changes in eviction filings for each of the cities in the ETS in Figure 2. Specifically, we plot filings relative to historical, pre-pandemic average in each city for both 2022 and 2023, with an arrow indicating the direction and scale of the year-over-year change. Cities are aligned from top to bottom based on 2023 filings relative to historical average; cities with the highest relative filings are at the top of the graph. 

Of the 32 cities where we have complete data coverage, 25 saw an increase in eviction filings between 2022 and 2023. This proportional increase was largest in the Twin Cities of Minneapolis and St. Paul, MN, where landlords filed 13,431 cases in 2023, up from 11,178 cases the year before. We observed similarly large increases in Phoenix, Providence, and Albuquerque.

{{% arrow-chart
  id="fig2"
  title="Figure 2. Change in eviction filings relative to historical average from 2022 to 2023"
  data="./fig2.csv"
  xMax="175"
  mobileCutoff="Infinity"
  legendIncArrowText="increase in filings"
  axisLabelText=""
  legendDecArrowText=""
  nameCol="site"
  beforeCol="pct_historical_2022"
  afterCol="pct_historical_2023"
  legendLabelText=""
%}}

But not all cities saw eviction case loads increase. Indeed, seven of the ETS cities saw reductions. In Dallas, for example, landlords filed nearly 5,000 fewer eviction cases in 2023 than in 2022, a reduction from 106% to 94% of historical average. We also saw reductions in places like Philadelphia and Hartford, CT. 

All told, 19 cities saw more eviction filings in 2023 than would have been normal for a year before the pandemic (i.e., filings above 100% of historical average). Several of these cities saw case numbers that are particularly troubling. In Houston, for example, landlords filed almost 84,000 cases in 2023, 43.8% more than was typical in a pre-pandemic year. Likewise, filings were 56.8% above average in Las Vegas, 30.1% above average in Phoenix, and 29.8% higher than normal in Columbus. Notably, many of these cities were already above normal levels in 2022, meaning that these elevated filing rates may constitute a stable new normal.

By contrast, only four cities saw eviction filings that were at least 25% below normal, pre-pandemic levels. That group includes New York City, with the nation’s largest population of renters. But even in New York, eviction filings rose significantly over these two years, from 108,278 cases filed in 2022 to 130,988 in 2023 (from 48.1 to 58.0% of historical average).

{{< pullquote "Fully 60% of those filed against for eviction last year were women." >}}

{{< smartlink "In line with previous trends" "https://evictionlab.org/who-is-evicted-in-america/" >}}, we find that women and Black renters faced a disproportionate share of eviction filings in 2023. In most of the ETS locations, we are able to estimate the likely race/ethnicity and gender of tenants facing eviction (for an explanation of how we do this, see our {{< smartlink "methods page" "https://evictionlab.org/eviction-tracking/methods/" >}})<sup>2</sup>. Fully 60% of those filed against for eviction last year were women. In Figure 3 we plot the share of defendants listed on eviction filings in 2023 who were Black, Latinx, or White. We compare those numbers to Census Bureau figures on the share of renters in each racial/ethnic group in the same set of places. 

{{% grouped-bar-chart 
  id="fig3" 
  saneLoading="true"
  titlePrefix="Figure 3. Share of renters and eviction filing defendants, by race/ethnicity" 
  data="./fig3.csv" 
  yTicks="5" 
  yMin="0"
  yFormat=".0%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}

The eviction crisis weighs most heavily on Black renters. Despite making up only 28% of renters, half of eviction filings are against Black individuals in these areas. By contrast, all other racial/ethnic groups see an underrepresentation when it comes to eviction filings. 

Eviction filings are not always one-time events; {{< smartlink "a significant share of eviction cases are repeated, serial filings against the same households at the same addresses" "https://evictionlab.org/serial-eviction-filings/" >}}. That remains true after the pandemic. In most of the ETS sites, we are able to identify these repeated cases and calculate serial eviction filing rates: the share of unique households that were filed against repeatedly within the last two years. In Figure 4 we plot serial eviction filing rates in 2023 for all available cities.

{{% bar-chart
  id="fig4"
  data="./fig4.csv"
  x="site"
  y="serial_filing_rate"
  yMin="0"
  yMax="0.55"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 4. Serial eviction filing rates in 2023"
  margin="8 8 100 40"
%}}

In some places—cities like Philadelphia and Cleveland—serial eviction filings were relatively rare. But in others they happen with striking regularity. For instance, over half of households that receive an eviction filing in Greenville, SC have received more than one at the same address. This was true of 44% of households in Las Vegas and 29% in Houston. Landlords are routinely burdening the courts in these jurisdictions with multiple case filings against the same households. 

In many ways, 2023 represented a return to the status quo. Overall, eviction caseloads returned to pre-pandemic levels. Racial and gender disparities in eviction rates—disparities that were {{< smartlink "at least partly addressed by pandemic-era renter protections like eviction moratoria and emergency rental assistance" "https://evictionlab.org/covid-era-policies-cut-eviction-filings-by-more-than-half/" >}}—were again strikingly large. And in many places landlords continued to turn quickly and often to the courts, using serial eviction filings to facilitate rent collection.

But our analysis also shows that renters’ exposure to eviction risk continues to vary significantly as a function of where they live. {{< smartlink "This was true prior to the pandemic" "https://evictionlab.org/new-eviction-data-2022/" >}}, and it’s all the more true now. Places like Houston and Phoenix saw far more eviction cases filed in 2023 than in a typical year before the pandemic, while in South Bend and Philadelphia caseloads shrank. In some places landlords are much more likely to file repeated eviction cases. These patterns shape the residential stability of low-income renters. Understanding eviction patterns—and the dynamics of rental markets and housing instability more generally—requires close attention to these local variations.

{{< blogfootnotes

 "We omit data from Boston and Tampa in these analyses because we currently do not have complete 2023 data for the city."
 "We drop Austin, Minneapolis-St. Paul, Nashville, New York, Phoenix, Pittsburgh and Richmond from this portion of the analysis due to varying levels of missingness of defendant names in the data."

>}}