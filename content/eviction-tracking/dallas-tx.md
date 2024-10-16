---
collection: true
draft: false
h1: Dallas, Texas
slug: dallas-tx
date: 2022-07-20T04:00:00.000Z
rentersSite: Dallas
twImage: /images/assets/graphics/ets-bg-social.png
title: Dallas, Texas | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="48113" data="/uploads/table.csv" >}}

Eviction filings in Dallas fell sharply when eviction proceedings were suspended across Texas on March 19, 2020. Eviction protections in Texas began to expire on May 18, 2020, after which new filings increased.



{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/dallas_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Dallas over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Data for Dallas County were collected by the [Child Poverty Action Lab](https://childpovertyactionlab.org/); historical averages cover 2017-2019.

{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/dallas_hotspots_output.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Dallas to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.
{{%/ report_top_evictors %}}


{{% report_median_claims id="medianFilings" data="/uploads/dallas_claims_monthly.csv" %}}

# Changes in claim amounts

When a landlord files an eviction claim in Dallas, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the last year. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed before the pandemic.

{{%/ report_median_claims %}}

{{% report_map shapes="/uploads/dallas_shapes.json" data="/uploads/dallas_map.csv" topFilers="/uploads/dallas_hotspots_media_report.csv" %}}

# The geography of eviction filings

Dallas County is divided into 529 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Data for Dallas County were collected by the [Child Poverty Action Lab](https://childpovertyactionlab.org/); historical averages cover 2017-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/dallas_linechart.csv" imputedNoteNumber="2" %}}



# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in the historical years.<sup>1</sup>

1. Data for Dallas County were collected by the [Child Poverty Action Lab](https://childpovertyactionlab.org/); historical averages cover 2017-2019.


{{%/ report_chart %}}