---
draft: false
h1: Hartford, Connecticut
slug: hartford-ct
date: 2024-08-30T04:00:00.000Z
rentersSite: Hartford
areaSite: true
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Hartford, Connecticut | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="09003"  >}}
{{</ report_intro >}}


{{% trends_chart id="trends" data="/uploads/hartford_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in Hartford over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data were collected by the [Connecticut Fair Housing Center](https://www.ctfairhousing.org/). 



{{%/ trends_chart %}}



{{% report_map shapes="/uploads/hartford_shapes.json" data="/uploads/hartford_map.csv" %}}

# The geography of eviction filings

Hartford is made up of 235 census tracts. In each of those tracts, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data were collected by the [Connecticut Fair Housing Center](https://www.ctfairhousing.org/). 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}


{{% report_chart id="race" data="/uploads/hartford_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Hispanic, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup>

1. Eviction filing data were collected by the [Connecticut Fair Housing Center](https://www.ctfairhousing.org/). 

{{%/ report_chart %}}