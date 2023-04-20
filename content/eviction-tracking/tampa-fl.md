---
collection: true
draft: false
h1: Tampa, Florida
slug: tampa-fl
date: 2022-07-24T04:00:00.000Z
rentersSite: Tampa
twImage: /images/assets/graphics/ets-bg-social.png
title: Tampa, Florida | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="12103" data="/uploads/table.csv" >}}

Eviction filings in Tampa fell sharply during the early months of the pandemic. Florida instituted a state-wide eviction moratorium which expired at the end of July 2020. After the moratorium expired, execution of eviction orders was also delayed until October 1, 2020. Regardless, new eviction filings increased by August 2020.



{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/tampa_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Tampa ran close to historical averages in January and February of 2020.<sup>1</sup> They began to drop in March 2020, and over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data for Pinellas and Hillsborough Counties were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/tampa_hotspots_output.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Tampa (Hillsborough and Pinellas Counties) to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated quarterly.
{{%/ report_top_evictors %}}



{{% report_map shapes="/uploads/tampa_shapes.json" data="/uploads/tampa_map.csv" topData="/uploads/tampa_hotspots_media_report.csv" %}}

# The geography of eviction filings

Pinellas and Hillsborough counties are divided into 567 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Pinellas and Hillsborough Counties were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/tampa_linechart.csv" imputedNoteNumber="2" %}}





# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2016–2019.<sup>1</sup>

1. Eviction filing data for Pinellas and Hillsborough Counties were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Statistics rely on imputation of race/ethnicity and gender based on defendant names and addresses. A complete description of this process can be found in the [ETS methods page](https://evictionlab.org/eviction-tracking/methods/).

{{%/ report_chart %}}