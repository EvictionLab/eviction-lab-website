---
collection: true
draft: false
h1: Austin, Texas
slug: austin-tx
date: 2022-07-20T04:00:00.000Z
rentersSite: Austin
twImage: /images/assets/graphics/ets-bg-social.png
title: Austin Texas | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
geographies: zips
---

{{< report_intro site_id="48453" area_site="true" >}}
{{</ report_intro >}}



{{% trends_chart id="trends" data="/uploads/austin_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in Austin over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for Travis County are collected by [January Advisors](https://www.januaryadvisors.com/)



{{%/ trends_chart %}}



{{% report_map shapes="/uploads/austin_shapes.json" data="/uploads/austin_map.csv" %}}

# The geography of eviction filings

Travis County is divided into 64 zip codes. In each of those zip codes, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filings data for 2014-2019 for Travis county were collected by [BASTA Austin](http://www.bastaaustin.org/) and [Open Austin](https://www.open-austin.org/). Eviction filing data for Travis County are collected by [January Advisors](https://www.januaryadvisors.com/).
2. Zip code breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/austin_linechart.csv" imputedNoteNumber="2" %}}







# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Hispanic, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.  

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup>

1. Eviction filings data for 2014-2019 for Travis County were collected by [BASTA Austin](http://www.bastaaustin.org/) and [Open Austin](https://www.open-austin.org/). Eviction filing data for Travis County are collected by [January Advisors](https://www.januaryadvisors.com/).


{{%/ report_chart %}}