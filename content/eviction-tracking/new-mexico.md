---
statePage: true
geographies: counties
collection: true
draft: false
h1: New Mexico
layout: state
slug: new-mexico
date: 2022-07-20T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: New Mexico | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
rentersSite: New Mexico
---

{{< report_intro site_id="35"  >}}
{{</ report_intro >}}



{{% trends_chart id="trends" data="/uploads/newmexico_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in New Mexico over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Data for New Mexico are provided by the [New Mexico Administrative Office of the Courts](https://www.nmcourts.gov/). 



{{%/ trends_chart %}}



{{% report_map shapes="/uploads/newmexico_shapes.json" data="/uploads/newmexico_map.csv" %}}



# The geography of eviction filings

New Mexico is divided into 33 counties. In each, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the county—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Bernalillo County are provided by the [New Mexico Administrative Office of the Courts](https://www.nmcourts.gov/). 
2. County breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.



{{%/ report_map %}}