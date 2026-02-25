---
statePage: true
draft: false
h1: Minnesota
layout: state
slug: minnesota
date: 2025-01-03T05:00:00.000Z
rentersSite: Minnesota
twImage: /images/assets/graphics/ets-bg-social.png
title: Minnesota | Eviction Tracking System
geographies: counties
collection: true
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="27"  >}}
{{</ report_intro >}}


{{% trends_chart id="trends" data="/uploads/minnesota_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Minnesota over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for Minnesota were provided by the [Court Services Division of the Minnesota Judicial Branch](<1. https://www.mncourts.gov/State-Court-Administrators-Office/Court-Services.aspx>). 

{{%/ trends_chart %}}



{{% report_map shapes="/uploads/minnesota_shapes.json" data="/uploads/minnesota_map.csv" %}}

# The geography of eviction filings

Minnesota is divided into 87 counties. In each of those counties, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the county—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1 2</sup> 

1. Eviction filing data for Minnesota were provided by the [Court Services Division of the Minnesota Judicial Branch](<1. https://www.mncourts.gov/State-Court-Administrators-Office/Court-Services.aspx>). 
2. County breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}