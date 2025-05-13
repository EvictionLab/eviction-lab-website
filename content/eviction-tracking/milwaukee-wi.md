---
draft: false
h1: Milwaukee, Wisconsin
slug: milwaukee-wi
date: 2024-08-30T04:00:00.000Z
rentersSite: Milwaukee
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Milwaukee, Wisconsin | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="55079" area_site="true" >}}
{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/milwaukee_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in Milwaukee over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2016
2. Filing data for 2020 onward collected by [January Advisors](https://www.januaryadvisors.com/)



{{%/ report_chart %}}



{{% report_map shapes="/uploads/milwaukee_shapes.json" data="/uploads/milwaukee_map.csv" %}}

# The geography of eviction filings

Milwaukee is made up of 302 census tracts. In each of those tracts, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2016
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}


{{% report_chart id="race" data="/uploads/milwaukee_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Hispanic, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2016

{{%/ report_chart %}}