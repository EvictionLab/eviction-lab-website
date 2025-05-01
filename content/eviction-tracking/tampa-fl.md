---
draft: false
h1: Tampa, Florida
slug: tampa-fl
date: 2024-08-30T04:00:00.000Z
rentersSite: Tampa
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Tampa, Florida | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="12103" area_site="true" >}}

Eviction filings in Tampa fell sharply during the early months of the pandemic. Florida instituted a state-wide eviction moratorium which expired at the end of July 2020. After the moratorium expired, execution of eviction orders was also delayed until October 1, 2020. Regardless, new eviction filings increased by August 2020.

{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/tampa_barchart.csv" %}}





# Trends in eviction filings

This plot shows monthly eviction filings in Tampa over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for Pinellas and Hillsborough Counties were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.





{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/tampa_hotspots_media_report.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Tampa (Hillsborough and Pinellas Counties) to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the past 12 months. We also display the plaintiff name most often listed with a given building in the court filings. Below we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.


{{%/ report_top_evictors %}}


{{% report_map shapes="/uploads/tampa_shapes.json" data="/uploads/tampa_map.csv" topFilers="/uploads/tampa_hotspots_media_report.csv" %}}

# The geography of eviction filings

Pinellas and Hillsborough counties are divided into 611 census tracts. In each of those tracts, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Pinellas and Hillsborough Counties were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts. We exclude buildings with fewer than 15 filings, in which case fewer than 100 buildings will be displayed. 

{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/tampa_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to baseline, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the past 12 months and average filings in 2023–2024.<sup>1</sup>

1. Eviction filing data for Pinellas and Hillsborough Counties were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}