---
draft: false
scripts:
  - linechart
  - bar-chart
childof: research
url: /six-months-cdc
contenttype: updates
contentcat: research
featured: true
in_index: true
title: "Preliminary Analysis: Six Months of the CDC Eviction Moratorium"
date: 2021-03-08T00:00:40.089Z
listSummary: Now that the CDC moratorium has been in place for six months—and
  given that it is set to expire at the end of March—we conducted a preliminary
  analysis of how effective it has been.
photoCredit: Sasha Israel
postauthorname: Peter Hepburn and Renee Louis
postauthortitle: The Eviction Lab
socialDescription: Now that the CDC moratorium has been in place for six
  months—and given that it is set to expire at the end of March—we conducted a
  preliminary analysis of how effective it has been.
researchtype: elresearch
twImage: /images/assets/blog/ready-tenant-sasha-israel.jpg
authorpic: /images/bios/elab_thumb_sm.jpg
image: /images/assets/blog/ready-tenant-sasha-israel.jpg
description: TNow that the CDC moratorium has been in place for six months—and
  given that it is set to expire at the end of March—we conducted a preliminary
  analysis of how effective it has been.
fbImage: /images/assets/blog/ready-tenant-sasha-israel.jpg
---
On September 4, 2020, the Centers for Disease Control and Prevention (CDC) ordered a [nationwide eviction moratorium](/moratorium-extended-evictions-continue/). This policy limited evictions when tenants provided a declaration attesting that they qualified for protections. But housing courts interpreted the CDC's order differently across the country and, in October, the CDC clarified that the order was {{< extlink "intended to halt the execution of eviction cases" "https://www.cdc.gov/coronavirus/2019-ncov/downloads/eviction-moratoria-order-faqs.pdf" >}}, but not any court operations—including receiving eviction filings.

Now that the CDC moratorium has been in place for six months—and given that it is set to expire at the end of March—we conducted a preliminary analysis of how effective it has been. To do so, we drew on data from the [Eviction Tracking System (ETS)](/eviction-tracking/), to compare eviction case filings since the CDC moratorium was enacted to what we would expect to see in a typical year.

{{< pullquote "Focusing on just those cities that had no additional protections—or just those times when no such protections were in place in a given city—we find that eviction filings were at 50.1% of historical average." >}}

**We observed 163,716 eviction filings between September 4, 2020 and February 27, 2021 across all ETS sites.** This is 44% as many filings as we would expect over the same period in a typical year (369,292). This number, however, is skewed downward: it includes a number of cities and states that maintained stronger local eviction moratoria for some or all of this period. For example, Minnesota’s eviction moratorium has kept filings in the [Twin Cities](/eviction-tracking/minneapolis-saint-paul-mn/) over 90% below historical average over the last six months, and filings in [Boston](/eviction-tracking/boston-ma/) were quite low until Massachusetts’ eviction moratorium {{< extlink "expired on October 17, 2020" "https://www.mass.gov/info-details/expiration-of-moratorium-on-evictions-and-foreclosures" >}}. 

When we remove cities and states with stronger tenant protections, a slightly different picture emerges. Focusing on just those cities that had no additional protections—or just those times when no such protections were in place in a given city—we find that eviction filings were at 50.1% of historical average. This is a much smaller effect than we observed when [analyzing the effectiveness of state and local eviction moratoria](/moratoria-and-filings/), even those that, like the CDC moratorium, permitted case filings. Various factors might account for this difference, including the requirement under the CDC moratorium that tenants proactively declare eligibility. 

{{< pullquote "Where you live plays a major role in determining how well the CDC moratorium protects you." >}}

The CDC moratorium has had much larger effects in some cities than in others. Interpretation, adoption, and implementation of the order has varied widely, and we see that reflected in the data. 

In Figure 1 we plot eviction filings relative to historical average over the last six months in ETS cities. To capture just the effect of the CDC moratorium, we exclude periods (if any) when additional protections were in place in a given city. To account for any seasonal variation in filing patterns, we compare what we observed over the last six months to the exact same period in previous years. 

{{% bar-chart
  id="cdcavgbar2"
  data="/uploads/cdc_sites_ratio.csv"
  x="site_name_full"
  y="filings_ratio"
  yMin="0"
  yMax="1"
  yTooltipFormat=".1%"
  yFormat=".0%"
  title="Figure 1: Filings Relative to Historical Average"
%}}

<p class="figcaption">Hover or tap to interact with the chart.</p>

Where you live plays a major role in determining how well the CDC moratorium protects you. Since early September of last year, eviction filings in [Richmond, VA](/eviction-tracking/richmond-va/) have been at only 30.1% of historical average. This is followed closely by [Philadelphia](/eviction-tracking/philadelphia-pa/) (34.8%), [Pittsburgh](/eviction-tracking/pittsburgh-pa/) (36.9%), and [Kansas City, MO](/eviction-tracking/kansas-city-mo/) (37.%8). [New York City](/eviction-tracking/new-york-ny/) had no local protections between September 4 and December 28; eviction filings were at 38.9% of average for that period. During the subsequent {{< extlink "statewide eviction moratorium" "https://www.nycourts.gov/covid-eefpa.shtml" >}}, which ran from December 28 to February 26, filings in the city dropped to 4.18% of average. 

By contrast, the CDC moratorium appears to have little appreciable effect in reducing filings in any of the cities we monitor in Florida. Filings are near 90% of average in [Tampa](/eviction-tracking/tampa-fl/) and [Jacksonville](/eviction-tracking/jacksonville-fl/), and aren’t far behind in [Gainesville](/eviction-tracking/gainesville-fl/) (84.3%). In Ohio, both [Columbus](/eviction-tracking/columbus-oh/) and [Cincinnati](/eviction-tracking/cincinnati-oh/) have had filings above 69% of normal, which stands in contrast to the experience of [Cleveland](/eviction-tracking/cleveland-oh/) (44.9% of average). 

The rate at which cases have been filed has also changed over the last six months. In Figure 2 we again plot eviction filings relative to historical average, but here split the data by city and month. 

Each blue line in the plot represents one of the cities listed in Figure 1. 
The orange line is the average across all sites. 
We again exclude any periods when additional protections were in place in a given city.

{{% linechart
  id="cdcavg"
  data="/uploads/cdc_linechart.csv"
  x="xfilemonth"
  y="filings_ratio"
  groupBy="site_name_full"
  yFormat=".1s"
  xTicks="month"
  xFormat="%b"
  xTooltipFormat="%B"
  yFormat=".0%"
  highlight="Average"
  title="Figure 2: Filings Relative to Historical Average"
%}}

<p class="figcaption">Hover or tap to interact with the chart.</p>

Eviction filings increased over the first four months of the CDC moratorium, but declined in early 2021. In September 2020, CDC protections kept eviction filings at 48.7% of average across cities analyzed here. By December 2020, when the moratorium was originally scheduled to expire, that number was up to 65.7%. In the final days of 2020, the moratorium was extended and Congress passed the Consolidated Appropriations Act, which included $25 Billion in emergency rental assistance. Since then, eviction filings have decreased relative to historical average, but still remain above 50% of normal.

Figure 2 also highlights variation across sites, and how that variation has increased over the last six months. In September, all cities experienced filings between 32.3% of average (Philadelphia) and 80% of average (Gainesville), a range of 47.7 percentage points. In February, by contrast, this range had increased to 89.6 percentage points, running from 15.2% of average (Richmond) to 104.8% of average (Tampa). 

{{< pullquote "Eviction filings during the pandemic will have lasting negative consequences for renters." >}}

The CDC’s eviction moratorium represented a historic step: a nationwide ban on eviction proceedings that—on paper—afforded protections to a broad range of tenants. But because it required the tenant to understand and exercise rights and allowed landlords to file evictions and challenge tenant declarations of eligibility, it left substantial gaps in protection. These gaps were widened by agency guidance that allowed landlords to challenge tenant declarations, courts to adjudicate cases, and widespread inconsistency in interpretation, adoption, and enforcement at the state and local level. 

Eviction filings during the pandemic will have {{< extlink "lasting negative consequences for renters" "https://www.texasobserver.org/evictions-texas-housing/" >}}. Eviction records—{{< extlink "even the records of cases that do not result in an eviction" "https://lcbh.org/reports/prejudged" >}}—can {{< extlink "negatively impact credit scores and tenants’ ability to find future housing" "https://www.washingtonpost.com/dc-md-va/2021/02/05/eviction-covid-credit-score/" >}}. Cases that are later dismissed by the courts—potentially because of availability of rental assistance—could be used to deny tenants housing in the future. Receiving an eviction filing can also lead tenants to move, even before their case is heard by the courts. By allowing the continued filing of cases, the CDC moratorium contributes to long-term housing instability and undermines its stated goal of reducing displacement. 

Despite being a federal policy that applies in every state and territory, in practice the CDC moratorium afforded different protections to renters in Richmond than those in Gainesville. We document the results here: a defense from the threat of displacement that has varied significantly over time and depending on where you live.