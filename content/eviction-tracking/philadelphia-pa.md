---
collection: true
draft: false
h1: Philadelphia, Pennsylvania
slug: philadelphia-pa
date: 2022-07-24T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: Philadelphia, Pennsylvania | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
rentersSite: Philadelphia
---

{{< report_intro site_id="42101" data="/uploads/table.csv" >}}

The state of Pennsylvania enacted a strong eviction moratorium that extended until August 31, 2020. Eviction filings related to nonpayment of rent were not accepted during that period, and filings in Philadelphia County were down to zero in April, May, and June 2020. Filings increased following the end of the moratorium. Execution of eviction orders were generally banned until at least May 16, 2021.

Starting in April 2021, Philadelphia landlords were required to participate in the city's eviction diversion program before filing for eviction for non-payment of rent. 

More detail on eviction protections in Philadelphia can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/pa/).

{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/philadelphia_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Philadelphia over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data for Philadelphia County were collected by Jonathan Pyle at [Philadelphia Legal Assistance](https://philalegal.org/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/philadelphia_hotspots_output.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Philadelphia to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated quarterly.
{{%/ report_top_evictors %}}



{{% report_median_claims id="medianFilings" data="/uploads/philadelphia_claims_monthly.csv" %}}







# Changes in claim amounts

When a landlord files an eviction claim in Philadelphia, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the last year. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed before the pandemic.









{{%/ report_median_claims %}}



{{% report_map shapes="/uploads/philadelphia_shapes.json" data="/uploads/philadelphia_map.csv" %}}

# The geography of changes in eviction filings

Philadelphia County is divided into 384 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Philadelphia County were collected by Jonathan Pyle at [Philadelphia Legal Assistance](https://philalegal.org/). Historical averages cover the years 2016-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/philadelphia_linechart.csv" imputedNoteNumber="2" %}}



# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings in 2020-2022 and average filings in 2016–2019.<sup>1</sup> 

1. Eviction filing data for Philadelphia County were collected by Jonathan Pyle at [Philadelphia Legal Assistance](https://philalegal.org/). Historical averages cover the years 2016-2019.
2. Statistics rely on imputation of race/ethnicity and gender based on defendant names and addresses. A complete description of this process can be found in the [ETS methods page](https://evictionlab.org/eviction-tracking/methods/).

{{%/ report_chart %}}