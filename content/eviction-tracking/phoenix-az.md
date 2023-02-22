---
collection: true
draft: false
h1: Phoenix, Arizona
slug: phoenix-az
date: 2022-07-24T04:00:00.000Z
rentersSite: Phoenix
twImage: /images/assets/graphics/ets-bg-social.png
title: Phoenix Arizona | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro id="04013" data="/uploads/table.csv" >}}

Eviction filings in Maricopa County, AZ (Phoenix) fell sharply in April 2020. The state of Arizona instituted an eviction moratorium in late-March 2020, but this policy only suspended enforcement of COVID-19-related nonpayment evictions, and new filings were being accepted. These eviction protections in the state expired at the end of October 2020.

More detail on eviction protections in Arizona can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/az/).

{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/phoenix_barchart.csv" %}}









# Changes in eviction filings

Eviction filings in Phoenix were near or above historical averages in January, February, and March of 2020.<sup>1</sup> New filings fell in April and May 2020 but increased in the months following. 

1. Eviction filings data are provided by the [Maricopa County Justice Courts](http://justicecourts.maricopa.gov/). Historical averages are taken over the years 2015-2019.









{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/phoenix_hotspots_output.csv" %}}




# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Phoenix (Maricopa County) to determine where the most cases are being filed during the pandemic. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the full pandemic and over the last eight weeks. We also display the plaintiff name most often listed with a given building in the court filings.

Eviction Hotspot data will be updated quarterly.




{{%/ report_top_evictors %}}



{{% report_median_claims id="medianFilings" data="/uploads/phoenix_claims_monthly.csv" %}}









# Changes in claim amounts

When a landlord files an eviction claim in Phoenix, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month since January 2020. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed.










{{%/ report_median_claims %}}



{{% report_map shapes="/uploads/phoenix_shapes.json" data="/uploads/phoenix_map.csv" %}}









# The geography of changes in eviction filings

Maricopa County is divided into 916 census tracts. In each of those tracts, we map the number of eviction filings over the last four weeks. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filings data are provided by the [Maricopa County Justice Courts](http://justicecourts.maricopa.gov/). Historical averages are taken over the years 2015-2019. 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.









{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/phoenix_linechart.csv" %}}











# Eviction filings by neighborhood demographics

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last six months and average filings in 2015-2019.<sup>1</sup>

1. Eviction filings data are provided by the [Maricopa County Justice Courts](http://justicecourts.maricopa.gov/). Historical averages are taken over the years 2015-2019.











{{%/ report_chart %}}