---
collection: true
draft: false
h1: Houston, Texas
slug: houston-tx
date: 2021-08-04T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: Houston, Texas | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{% report_intro id="48201" data="/uploads/table.csv" %}}





Eviction filings in Harris and Galveston Counties, TX (Houston) fell sharply once eviction proceedings were suspended across Texas on March 19, 2020. Compared to equivalent periods in previous years (2012–2015), eviction filings were far below average over the last two weeks of March, and through April and May. Eviction protections in Texas began to expire on May 18, 2020. Courts in Harris County resumed business shortly thereafter, followed by the courts in Galveston County in early June.

More detail on eviction protections in Texas can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/tx/).





{{%/ report_intro %}}



{{% report_chart id="avg" data="/uploads/houston_barchart.csv" %}}





# Changes in eviction filings

Eviction filings in Houston were higher than average in January and February of 2020.<sup>1</sup> That pattern reversed in March following the suspension of eviction proceedings. Eviction filings in April and May of 2020 were well below average. Filings have increased since then but remain below historical averages.<sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Filing data for 2020-2021 collected by [January Advisors](https://www.januaryadvisors.com/)





{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/houston_output_20210825.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and 2021. We analyzed eviction records in Houston to determine where the most cases are being filed during the pandemic. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the full pandemic and over the last eight weeks. We also display the plaintiff name most often listed with a given building in the court filings.


{{%/ report_top_evictors %}}



{{% report_median_claims id="medianFilings" data="/uploads/houston_claims_monthly.csv" %}}
# Changes in claim amounts

When a landlord files an eviction claim in Houston, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month since January 2020. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed.

This data on claim amounts only covers Harris County. We do not currently collect claim amount data for Galveston County.
{{%/ report_median_claims %}}



{{% report_map shapes="/uploads/houston_shapes.json" data="/uploads/houston_map.csv" %}}





# The geography of changes in eviction filings

Harris and Galveston counties are divided into 853 census tracts. In each of those tracts, we map the number of eviction filings over the last four weeks. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Tract racial majority determined using American Community Survey (ACS) estimates for 2014–2018





{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/houston_linechart.csv" %}}





# Eviction filings by neighborhood demographics

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. In January and February 2020, eviction filings were concentrated in neighborhoods in the Latinx and Other/None categories. In March, eviction filings dropped steeply across all neighborhoods, though they have increased closer to historical averages since then.

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings in 2020-2021 and average filings in 2012–2015. This allows us to see, for example, that filings in majority-white neighborhoods were higher than average in the first three months of 2020.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012–2015





{{%/ report_chart %}}