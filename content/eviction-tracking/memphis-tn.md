---
draft: false
h1: Memphis, Tennessee
slug: memphis-tn
date: 2024-08-30T04:00:00.000Z
rentersSite: Memphis
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Memphis, Tennessee | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="47157" data="/uploads/table.csv" >}}

The state of Tennessee implemented an eviction moratorium that ran from March 13 to June 1, 2020, and courts in Shelby County (Memphis) were closed until June 15, 2020. During this period, new eviction filings were still allowed. The rate of new filings picked up after the moratorium lifted.

{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/memphis_barchart.csv" %}}





# Trends in eviction filings

This plot shows monthly eviction filings in Memphis over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data for Shelby County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.





{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/memphis_hotspots_output.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Memphis (Shelby County) to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.


{{%/ report_top_evictors %}}


{{% report_map shapes="/uploads/memphis_shapes.json" data="/uploads/memphis_map.csv" topFilers="/uploads/memphis_hotspots_media_report.csv" %}}

# The geography of eviction filings

Shelby County is divided into 248 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Shelby County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts. We exclude buildings with fewer than 15 filings, in which case fewer than 100 buildings will be displayed. 

{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/memphis_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2016–2019.<sup>1</sup>

1. Eviction filing data for Shelby County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}