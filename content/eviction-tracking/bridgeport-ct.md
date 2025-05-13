---
draft: false
h1: Bridgeport, Connecticut
slug: bridgeport-ct
date: 2024-08-30T04:00:00.000Z
rentersSite: Bridgeport
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Bridgeport, Connecticut | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="09001" area_site="true" >}}
{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/bridgeport_barchart.csv" %}}







# Trends in eviction filings

This plot shows monthly eviction filings in Bridgeport over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Eviction filing data were collected by the [Connecticut Fair Housing Center](https://www.ctfairhousing.org/). 







{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/bridgeport_hotspots_media_report.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), continued in 2020 and beyond. We analyzed eviction records in Fairfield County to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the past 12 months. We also display the plaintiff name most often listed with a given building in the court filings. Below we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.


{{%/ report_top_evictors %}}


{{% report_map shapes="/uploads/bridgeport_shapes.json" data="/uploads/bridgeport_map.csv" topFilers="/uploads/bridgeport_hotspots_media_report.csv" %}}

# The geography of eviction filings

Fairfield County is made up of 227 census tracts. In each of those tracts, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup> <sup>2</sup>

1. Eviction filing data were collected by the [Connecticut Fair Housing Center](https://www.ctfairhousing.org/). 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts. We exclude buildings with fewer than 15 filings, in which case fewer than 100 buildings will be displayed. 

{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/bridgeport_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Hispanic, or Other/None. 

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood.<sup>1</sup>

1. Eviction filing data were collected by the [Connecticut Fair Housing Center](https://www.ctfairhousing.org/). 

{{%/ report_chart %}}