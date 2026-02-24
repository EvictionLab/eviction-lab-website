---
draft: false
h1: Houston, Texas
slug: houston-tx
date: 2024-08-30T04:00:00.000Z
rentersSite: Houston
areaSite: true
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: Houston, Texas | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="48201"  >}}
{{</ report_intro >}}


{{% trends_chart id="trends" data="/uploads/houston_barchart.csv" %}}









# Trends in eviction filings

This plot shows monthly eviction filings in Houston over the past 12 months. Filings are displayed relative to average filings for the same set of months across 2023 and 2024 (the "baseline"). You can toggle the plot to display filing counts.<sup>1</sup>

1. Filing data for 2020 onward collected by [January Advisors](https://www.januaryadvisors.com/)









{{%/ trends_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/houston_hotspots_media_report.csv" %}}



# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), continued in 2020 and beyond. We analyzed eviction records in Houston to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the past 12 months. We also display the plaintiff name most often listed with a given building in the court filings. Below we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.



{{%/ report_top_evictors %}}



{{% report_median_claims id="medianFilings" data="/uploads/houston_claims_monthly.csv" %}}












# Changes in claim amounts

When a landlord files an eviction claim in Houston, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the past 12 months. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed during 2023 and 2024 (our baseline).

This data on claim amounts only covers Harris County. We do not currently collect claim amount data for Galveston County.












{{%/ report_median_claims %}}


{{% report_map shapes="/uploads/houston_shapes.json" data="/uploads/houston_map.csv" topFilers="/uploads/houston_hotspots_media_report.csv" %}}

# The geography of eviction filings

Harris and Galveston counties are divided into 1218 census tracts. In each of those tracts, we map the number of eviction filings over the past 12 months. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in 2023–2024 (the "baseline").<sup>1</sup>

1. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2016–2020.
2. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts. We exclude buildings with fewer than 15 filings, in which case fewer than 100 buildings will be displayed. 

{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/houston_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Hispanic, or Other/None. This barplot shows the distribution of eviction filings in the past 12 months by neighborhood racial/ethnic majority.

Toggle the figure to compare recent filings to average filings in 2023–2024, keeping constant the racial/ethnic majority of each neighborhood. <sup>1</sup>


{{%/ report_chart %}}