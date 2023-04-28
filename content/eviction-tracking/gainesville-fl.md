---
collection: true
draft: false
h1: Gainesville, Florida
slug: gainesville-fl
date: 2022-07-20T04:00:00.000Z
rentersSite: Gainesville
twImage: /images/assets/graphics/ets-bg-social.png
title: Gainesville Florida | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="12001" data="/uploads/table.csv" >}}

Eviction filings in Gainesville fell significantly below average when a state-wide eviction moratorium was instituted in April 2020. These eviction protections expired at the end of July 2020. After the moratorium expired, execution of eviction orders was also delayed until October 1, 2020.

Note: Data collection in Alachua County is currently on hold as we switch to a different data source.



{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/gainesville_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Gainesville over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data were collected by Drew Nolan in association with the [Alachua County Labor Coalition](https://laborcoalition.org/). Historical averages are calculated for the years 2017-2019.



{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/gainesville_hotspots_output.csv" %}}

# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Alachua County to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated quarterly.
{{%/ report_top_evictors %}}



{{% report_map shapes="/uploads/gainesville_shapes.json" data="/uploads/gainesville_map.csv" topData="/uploads/gainesville_hotspots_media_report.csv" %}}



# The geography of eviction filings

Gainesville is divided into 56 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data were collected by Drew Nolan in association with the [Alachua County Labor Coalition](https://laborcoalition.org/). Historical averages are calculated for the years 2017-2019. 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.



{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/gainesville_linechart.csv" imputedNoteNumber="2" %}}



# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2017–2019.<sup>1</sup>

1. Eviction filing data were collected by Drew Nolan in association with the [Alachua County Labor Coalition](https://laborcoalition.org/). Historical averages are calculated for the years 2017-2019.




{{%/ report_chart %}}