---
collection: true
draft: false
h1: Philadelphia, Pennsylvania
slug: philadelphia-pa
date: 2021-05-11T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: Philadelphia, Pennsylvania | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{% report_intro id="42101" data="/uploads/table.csv" %}}

The state of Pennsylvania enacted a strong eviction moratorium that extended until August 31, 2020. Eviction filings related to nonpayment of rent were not accepted during that period, and filings in Philadelphia County were down to zero in April, May, and June. Filings increased following the end of the moratorium. Execution of eviction orders are generally banned until at least May 16, 2021.

As of April 1, 2021, Philadelphia landlords must apply for rental assistance, enroll in the city's eviction diversion program, and then wait 45 days before filing for eviction for non-payment of rent. 

More detail on eviction protections in Philadelphia can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/pa/).

{{%/ report_intro %}}



{{% report_chart id="avg" data="/uploads/philadelphia_barchart.csv" %}}





# Changes in eviction filings

Eviction filings in Philadelphia were slightly higher than average in January and February of 2020.<sup>1</sup> Filings fell in March and held at zero from April through June. Following the end of the state eviction moratorium on August 31, new eviction filings increased, though remain well below historical averages.

1. Eviction filing data for Philadelphia County were collected by Jonathan Pyle at [Philadelphia Legal Assistance](https://philalegal.org/). Historical averages cover the years 2016-2019.





{{%/ report_chart %}}

{{% report_top_evictors id="topEvictorsSection" data="/uploads/harris_top_evictors.csv" %}}
# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and 2021. We analyzed eviction records in Philadelphia to determine where the most cases are being filed during the pandemic. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the full pandemic and over the last eight weeks. We also display the plaintiff name most often listed with a given building in the court filings.
{{%/ report_top_evictors %}}


{{% report_median_claims id="medianFilings" data="/uploads/philadelphia_claims_monthly.csv" %}}
# Changes in claim amounts

When a landlord files an eviction claim in Philadelphia, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month since January 2020. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed.

1. Average eviction filings taken from Eviction Lab data for 2012–2015
2. Filing data for 2020-2021 collected by [January Advisors](https://www.januaryadvisors.com/)
{{%/ report_median_claims %}}




{{% report_map shapes="/uploads/philadelphia_shapes.json" data="/uploads/philadelphia_map.csv" %}}


# The geography of changes in eviction filings

Philadelphia County is divided into 384 census tracts. In each of those tracts, we map the number of eviction filings over the last four weeks. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Philadelphia County were collected by Jonathan Pyle at [Philadelphia Legal Assistance](https://philalegal.org/). Historical averages cover the years 2016-2019.
2. Tract racial majority determined using American Community Survey (ACS) estimates for 2014–2018





{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/philadelphia_linechart.csv" %}}



# Eviction filings by neighborhood demographics

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. In January and February 2020, eviction filings were concentrated in majority-Black neighborhoods. From March onwards, eviction filings have dropped steeply across all neighborhoods, though filing counts are rebounding fastest in majority-Black neighborhoods. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings in 2020-2021 and average filings in 2016–2019.<sup>1</sup> 

1. Eviction filing data for Philadelphia County were collected by Jonathan Pyle at [Philadelphia Legal Assistance](https://philalegal.org/). Historical averages cover the years 2016-2019.



{{%/ report_chart %}}