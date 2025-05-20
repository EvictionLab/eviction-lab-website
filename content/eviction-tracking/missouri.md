---
statePage: true
geographies: counties
collection: true
draft: false
h1: Missouri
layout: state
slug: missouri
date: 2022-07-24T04:00:00.000Z
rentersSite: Missouri
twImage: /images/assets/graphics/ets-bg-social.png
title: Missouri | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="29"  >}}
{{</ report_intro >}}



{{% trends_chart id="trends" data="/uploads/missouri_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Missouri over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Missouri state court microdata for 2012–2015.
2. Filing data for 2020 onward collected by [January Advisors](https://www.januaryadvisors.com/).

{{%/ trends_chart %}}



{{% report_map shapes="/uploads/missouri_shapes.json" data="/uploads/missouri_map.csv" %}}

# The geography of eviction filings

Missouri is divided into 115 counties and county-equivalents. In each, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the county—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Missouri from 2020 onward were collected by [January Advisors](https://www.januaryadvisors.com/). 
2. County breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}