---
statePage: true
collection: true
draft: false
h1: Indiana
layout: state
slug: indiana
date: 2022-07-20T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: Indiana | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
rentersSite: Indiana
---

{{< report_intro site_id="18" data="/uploads/states_table.csv" >}}

The state of Indiana implemented an eviction moratorium that ran from March 19 to August 14, 2020. Filings spiked immediately after that moratorium lifted.

 Additional information is available on eviction filing patterns in [Indianapolis](https://evictionlab.org/eviction-tracking/indianapolis-in/) and [South Bend](https://evictionlab.org/eviction-tracking/south-bend-in/).

{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/indiana_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Indiana over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data for Indiana were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}



{{% report_map shapes="/uploads/indiana_shapes.json" data="/uploads/indiana_map.csv" %}}

# The geography of changes in eviction filings

Indiana is divided into 92 counties. In each of those counties, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the county—or compared to the typical number of filings in the average year.<sup>1</sup>

1. Eviction filing data for Indiana were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. County breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}