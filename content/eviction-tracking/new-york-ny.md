---
collection: true
draft: false
h1: New York, New York
slug: new-york-ny
date: 2022-07-24T04:00:00.000Z
rentersSite: New York City
twImage: /images/assets/graphics/ets-bg-social.png
title: New York, New York | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
geographies: zips
---

{{< report_intro site_id="36061" area_site="true" >}}
{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/newyork_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in New York City over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for New York City were collected by the [Housing Data Coalition](https://www.housingdatanyc.org//). 



{{%/ report_chart %}}


{{% report_median_claims id="medianFilings" data="/uploads/new york_claims_monthly.csv" %}}

# Changes in claim amounts

When a landlord files an eviction claim in New York, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the past 12 months. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed during 2023 and 2024 (our baseline).

{{%/ report_median_claims %}}


{{% report_map shapes="/uploads/newyork_shapes.json" data="/uploads/newyork_map.csv" %}}

# The geography of eviction filings

New York City is divided into 299 zip codes. In each of those zip codes, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data for New York City were collected by the [Housing Data Coalition](https://www.housingdatanyc.org//). 
2. Zip code breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/newyork_linechart.csv" imputedNoteNumber="2" %}}







# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize zip codes by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to baseline, comparisons are being drawn—within the same set of zip codes defined by racial/ethnic majority—between filings over the past 12 months and average filings in 2023–2024.<sup>1</sup>

1. Eviction filing data for New York City were collected by the [Housing Data Coalition](https://www.housingdatanyc.org//). 


{{%/ report_chart %}}