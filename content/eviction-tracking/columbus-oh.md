---
draft: false
h1: Columbus, Ohio
slug: columbus-oh
date: 2024-08-30T04:00:00.000Z
rentersSite: Columbus
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Columbus Ohio | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="39049" data="/uploads/table.csv" >}}

While the state of Ohio did not institute a general eviction moratorium, the courts in Franklin County (Columbus) halted the processing of non-emergency eviction filings between March 16 and June 1, 2020. 

{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/columbus_barchart.csv" %}}





# Trends in eviction filings

This plot shows monthly eviction filings in Columbus over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, and 2015
2. Filing data for 2020 onward provided by the [Franklin County Municipal Court](http://www.fcmcclerk.com/reports/evictions)





{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/columbus_hotspots_media_report.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Columbus to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. Below we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.


{{%/ report_top_evictors %}}


{{% report_map shapes="/uploads/columbus_shapes.json" data="/uploads/columbus_map.csv" topFilers="/uploads/columbus_hotspots_media_report.csv" %}}

# The geography of eviction filings

Columbus is divided into 328 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, and 2015
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts. We exclude buildings with fewer than 15 filings, in which case fewer than 100 buildings will be displayed. 

{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/columbus_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn–within the same set of neighborhoods defined by racial/ethnic majority–between filings over the last year and average filings in previous years.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, and 2015

{{%/ report_chart %}}