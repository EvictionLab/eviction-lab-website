---
draft: false
h1: Pittsburgh, Pennsylvania
slug: pittsburgh-pa
date: 2023-01-11T05:00:00.000Z
rentersSite: Pittsburgh
twImage: /images/assets/graphics/ets-bg-social.png
title: Pittsburgh, Pennsylvania | Eviction Tracking System
geographies: zips
collection: true
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="42003" area_site="true" >}}
{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/pittsburgh_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in Pittsburgh over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data were collected by [Legal Services Corporation](https://www.lsc.gov/). Additional data were provided by [Lancaster Stands Up](https://lancasterstandsup.org/) and the [CMU CREATE Lab](https://docs.google.com/presentation/d/1Dtzm3l7ylTzU9Aj9H94EWBfxb79o8CRWb5t8-vVY9kU/edit#slide=id.p).



{{%/ report_chart %}}



{{% report_map shapes="/uploads/pittsburgh_shapes.json" data="/uploads/pittsburgh_map.csv" %}}



# The geography of eviction filings

Allegheny County is divided into 115 zip codes. In each of those zip codes, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data were collected by [Legal Services Corporation](https://www.lsc.gov/). Additional data were provided by [Lancaster Stands Up](https://lancasterstandsup.org/) and the [CMU CREATE Lab](https://docs.google.com/presentation/d/1Dtzm3l7ylTzU9Aj9H94EWBfxb79o8CRWb5t8-vVY9kU/edit#slide=id.p).
2. Zip code breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.



{{%/ report_map %}}


{{% report_chart id="race" data="/uploads/pittsburgh_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup> 

1. Eviction filing data were collected by Legal Services Corporation. Additional data were provided by Lancaster Stands Up and the CMU CREATE Lab.

{{%/ report_chart %}}