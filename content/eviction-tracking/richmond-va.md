---
draft: false
h1: Richmond, Virginia
slug: richmond-va
date: 2025-01-03T05:00:00.000Z
rentersSite: Richmond
twImage: /images/assets/graphics/ets-bg-social.png
title: Richmond, Virginia | Eviction Tracking System
geographies: zips
collection: true
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="51760" area_site="true" >}}
{{</ report_intro >}}


{{% trends_chart id="trends" data="/uploads/richmond_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Richmond over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for Virginia are collected by [LSC](https://www.lsc.gov/). 




{{%/ trends_chart %}}



{{% report_map shapes="/uploads/richmond_shapes.json" data="/uploads/richmond_map.csv" %}}

# The geography of eviction filings

Richmond is divided into 36 zip codes. In each of those zip codes, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Virginia are collected by [LSC](https://www.lsc.gov/). 
2. Zip code breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}


{{% report_chart id="race" data="/uploads/richmond_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2016-2019.

{{%/ report_chart %}}