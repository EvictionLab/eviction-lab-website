---
collection: true
draft: false
h1: Indianapolis, Indiana
slug: indianapolis-in
date: 2022-07-20T04:00:00.000Z
rentersSite: Indianapolis
twImage: /images/assets/graphics/ets-bg-social.png
title: Indianapolis, Indiana | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
<!-- hardcode "stats" url in app since it's same for all sites -->
{{< report_intro id="18097" data="/uploads/table.csv" stats="/uploads/filing_data_by_site.csv" site="Indianapolis" >}}

The state of Indiana implemented an eviction moratorium that ran from March 19 to August 14, 2020. Filings in Marion County (Indianapolis) increased after that moratorium lifted.

More detail on eviction protections in Indianapolis can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/in/).

{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/indianapolis_barchart.csv" %}}

# Changes in eviction filings

Eviction filings in Indianapolis ran above historical averages in January and February of 2020.<sup>1</sup> Filings began to drop in March, and remained well below average between April and July 2020, after which filings increased.

1. Eviction filing data for Marion County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/indianapolis_hotspots_output.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Indianapolis to determine where the most cases are being filed during the pandemic. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the full pandemic and over the last eight weeks.

Eviction Hotspot data will be updated quarterly.
{{%/ report_top_evictors %}}



{{% report_map shapes="/uploads/indianapolis_shapes.json" data="/uploads/indianapolis_map.csv" topData="/uploads/indianapolis_hotspots_media_report.csv" %}}

# The geography of changes in eviction filings

Marion County is divided into 224 census tracts. In each of those tracts, we map the number of eviction filings over the last four weeks. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Marion County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/indianapolis_linechart.csv" %}}

# Eviction filings by neighborhood demographics

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last six months and average filings in 2016–2019.<sup>1</sup>

1. Eviction filing data for Marion County were collected by [LSC](https://www.lsc.gov/). Historical averages cover the years 2016-2019.

{{%/ report_chart %}}