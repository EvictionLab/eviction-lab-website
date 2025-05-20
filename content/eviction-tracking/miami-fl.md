---
collection: true
draft: false
title: Miami, Florida | Eviction Tracking System
h1: Miami, Florida
rentersSite: Miami
slug: miami-fl
date: 2025-05-21T03:27:06.983Z
---
{{< report_intro site_id="12086" area_site="true" >}}
{{</ report_intro >}}

{{% trends_chart id="trends" data="/uploads/miami_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Miami over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data for Miami-Dade County was collected by the [Shimberg Center for Housing Studies](http://www.shimberg.ufl.edu/) at the University of Florida. 

{{%/ trends_chart %}}


{{% report_map shapes="/uploads/miami_shapes.json" data="/uploads/miami_map.csv" %}}

# The geography of eviction filings

Miami-Dade County is divided into 707 census tracts. In each of those tracts, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Miami-Dade County was collected by the [Shimberg Center for Housing Studies](http://www.shimberg.ufl.edu/) at the University of Florida. 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.

{{%/ report_map %}}


{{% report_chart id="race" data="/uploads/miami_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Miami-Dade County was collected by the [Shimberg Center for Housing Studies](http://www.shimberg.ufl.edu/) at the University of Florida. 

{{%/ report_chart %}}