---
collection: true
draft: false
h1: Houston, Texas
slug: houston-tx
date: 2022-07-20T04:00:00.000Z
rentersSite: Houston
twImage: /images/assets/graphics/ets-bg-social.png
title: Houston, Texas | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="48201" data="/uploads/table.csv" >}}

Eviction filings in Harris and Galveston Counties, TX (Houston) fell sharply once eviction proceedings were suspended across Texas on March 19, 2020. Compared to equivalent periods in previous years (2012–2015), eviction filings were far below average over the last two weeks of March, and through April and May. Eviction protections in Texas began to expire on May 18, 2020. Courts in Harris County resumed business shortly thereafter, followed by the courts in Galveston County in early June.

More detail on eviction protections in Texas can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/tx/).

{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/houston_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in Houston over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Filing data for 2020 onward collected by [January Advisors](https://www.januaryadvisors.com/)

{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/houston_hotspots_output.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Houston to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated quarterly.
{{%/ report_top_evictors %}}



{{% report_median_claims id="medianFilings" data="/uploads/houston_claims_monthly.csv" %}}








# Changes in claim amounts

When a landlord files an eviction claim in Houston, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the last year. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed before the pandemic.

This data on claim amounts only covers Harris County. We do not currently collect claim amount data for Galveston County.








{{%/ report_median_claims %}}



{{% report_map shapes="/uploads/houston_shapes.json" data="/uploads/houston_map.csv" topData="/uploads/houston_hotspots_media_report.csv" %}}

# The geography of changes in eviction filings

Harris and Galveston counties are divided into 853 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/houston_linechart.csv" imputedNoteNumber="2" %}}





# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last six months and average filings in 2012–2015. <sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Statistics rely on imputation of race/ethnicity and gender based on defendant names and addresses. A complete description of this process can be found in the [ETS methods page](https://evictionlab.org/eviction-tracking/methods/).

{{%/ report_chart %}}