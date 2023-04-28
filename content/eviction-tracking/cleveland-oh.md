---
collection: true
draft: false
h1: Cleveland, Ohio
slug: cleveland-oh
date: 2022-07-20T04:00:00.000Z
rentersSite: Cleveland
twImage: /images/assets/graphics/ets-bg-social.png
title: Cleveland Ohio | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="39035" data="/uploads/table.csv" >}}

While the state of Ohio did not institute a general eviction moratorium, the Cleveland Municipal Housing Court halted the processing of non-emergency eviction filings on March 16, 2020. This policy reduced filings to near zero until its expiration on June 15, 2020, after which filings increased. During the summer of 2020, Cleveland also extended the [right to counsel for many tenants facing eviction](https://freeevictionhelp.org/).



[](https://twitter.com/intent/tweet?url=https%3A%2F%2Fstaging--eviction-lab.netlify.app%2Feviction-tracking%2Fkansas-city-mo%2F)

{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/cleveland_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Cleveland over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Average eviction filings are based on data from 2016-2019, collected by [LSC](https://www.lsc.gov/).
2. Filing data for 2020 onwards collected by [LSC](https://www.lsc.gov/).



{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/cleveland_hotspots_output.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Cleveland to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated quarterly.
{{%/ report_top_evictors %}}



{{% report_map shapes="/uploads/cleveland_shapes.json" data="/uploads/cleveland_map.csv" %}}



# The geography of eviction filings

Cleveland is divided into 177 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Average eviction filings are based on data from 2016-2019, collected by [LSC](https://www.lsc.gov/).
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.



{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/cleveland_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings in 2020-2022 and average filings in 2012–2016.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, 2015, and 2016


{{%/ report_chart %}}