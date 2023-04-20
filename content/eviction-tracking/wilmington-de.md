---
collection: true
draft: false
h1: Wilmington, Delaware
slug: wilmington-de
date: 2022-07-24T04:00:00.000Z
rentersSite: Wilmington
twImage: /images/assets/graphics/ets-bg-social.png
title: Wilmington, Delaware | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="10003" data="/uploads/table.csv" >}}

Delaware implemented a state-wide eviction moratorium between March 17 and July 1, 2020. Almost no new eviction cases were filed in New Castle County (Wilmington and the surrounding areas) during this period. After the moratorium lifted, however, new case filings increased.



{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/wilmington_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Wilmington over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data for New Castle County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}



{{% report_map shapes="/uploads/wilmington_shapes.json" data="/uploads/wilmington_map.csv" %}}

# The geography of eviction filings

New Castle County is divided into 131 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for New Castle County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/wilmington_linechart.csv" imputedNoteNumber="2" %}}



# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2016–2019.<sup>1</sup>

1. Eviction filing data for New Castle County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Statistics rely on imputation of race/ethnicity and gender based on defendant names and addresses. A complete description of this process can be found in the [ETS methods page](https://evictionlab.org/eviction-tracking/methods/).

{{%/ report_chart %}}