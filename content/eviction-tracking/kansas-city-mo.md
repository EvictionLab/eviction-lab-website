---
collection: true
draft: false
h1: Kansas City, Missouri
slug: kansas-city-mo
date: 2022-07-20T04:00:00.000Z
rentersSite: Kansas City
twImage: /images/assets/graphics/ets-bg-social.png
title: Kansas City, Missouri | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="29095" data="/uploads/table.csv" >}}

Eviction filings in Kansas City fell sharply in April 2020. Compared to equivalent periods in previous years (2012–2015), eviction filings were down nearly 80% in April and May 2020. Filings rose in the following months.<sup>2</sup>


In most locations that we track, we are able to access eviction filing records shortly after they are filed with the courts. In Kansas City, however, these records are only available with a delay. We update this page with the most recent data that we have available. The past month reported here is the most recent month for which we have data.

2. Jackson County eviction filings are delayed in being uploaded to online court records. Recent data may be an undercounting.

{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/kansascity_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Kansas City over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Filing data for 2020 onward collected by [January Advisors](https://www.januaryadvisors.com/)

{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/kansascity_hotspots_output.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Kansas City (Jackson County) to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.
{{%/ report_top_evictors %}}



{{% report_map shapes="/uploads/kansas_shapes.json" data="/uploads/kansascity_map.csv" topFilers="/uploads/kansascity_hotspots_media_report.csv" %}}

# The geography of eviction filings

Jackson County is divided into 199 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/kansascity_linechart.csv" imputedNoteNumber="2" %}}





# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2012–2015.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015


{{%/ report_chart %}}