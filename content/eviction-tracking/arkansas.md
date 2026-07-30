---
statePage: true
geographies: counties
collection: true
draft: false
h1: Arkansas
layout: state
slug: arkansas
date: 2026-07-28T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: Arkansas | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
rentersSite: Arkansas
---

{{< report_intro site_id="05"  >}}

 A closer look at eviction filing patterns in Little Rock and the surrounding area is [available here](https://evictionlab.org/eviction-tracking/little-rock-ar/).

{{< /report_intro >}}



{{% trends_chart id="trends" data="/uploads/arkansas_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Arkansas over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for Arkansas were collected by [January Advisors](https://www.januaryadvisors.com/).

{{%/ trends_chart %}}



{{% report_map shapes="/uploads/arkansas_shapes.json" data="/uploads/arkansas_map.csv" %}}

# The geography of eviction filings

Arkansas is divided into 75 counties. In each of those counties, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the county—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1 2</sup>

1. Eviction filing data for Arkansas were collected by [January Advisors](https://www.januaryadvisors.com/).
2. County breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}
