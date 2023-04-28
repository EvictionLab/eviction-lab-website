---
collection: true
draft: false
h1: New Orleans, Louisiana
slug: new-orleans-la
date: 2022-11-11T05:00:00.000Z
rentersSite: New Orleans
twImage: /images/assets/graphics/ets-bg-social.png
title: New Orleans, Louisiana | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="22071" data="/uploads/table.csv" >}}

Eviction filings in New Orleans fell sharply in late-March 2020 and have remained below historical averages. The state of Louisiana instituted an eviction moratorium in March 2020, but those statewide protections expired in mid-June 2020. In August and September 2021, Hurricane Ida caused local courts to close and led Governor Edwards to halt court proceedings until September 24. 



{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/neworleans_barchart.csv" %}}

# Trends in eviction filings

This plot shows monthly eviction filings in New Orleans over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data were collected by [Professor Davida Finger](https://law.loyno.edu/academics/faculty-and-staff-directory/davida-finger) (Loyola University New Orleans College of Law). Professor Finger works in partnership with [Jane Place Neighborhood Sustainability Initiative.](https://www.jpnsi.org/evictions) Historical averages are taken from 2019 data.



{{%/ report_chart %}}


{{% report_median_claims id="medianFilings" data="/uploads/new orleans_claims_monthly.csv" %}}

# Changes in claim amounts

When a landlord files an eviction claim in New Orleans, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the last year. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed before the pandemic.

{{%/ report_median_claims %}}

{{% report_map shapes="/uploads/orleans-parish-tracts.json" data="/uploads/neworleans_map.csv" %}}



# The geography of eviction filings

New Orleans is divided into 177 census tracts. In most of those tracts, we map the number of eviction filings over the last year.<sup>1</sup> If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>2</sup>

1. We do not have tract-level data for areas covered by the Second City Court, on the West Bank of Orleans Parish (south of the Mississippi River). Eviction filing data were collected by [Professor Davida Finger](https://law.loyno.edu/academics/faculty-and-staff-directory/davida-finger) (Loyola University New Orleans College of Law). Professor Finger works in partnership with [Jane Place Neighborhood Sustainability Initiative.](https://www.jpnsi.org/evictions) Historical averages are taken from 2019 data. 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.



{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/neworleans_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2019.<sup>1</sup>

1. We do not have tract-level data for areas covered by the Second City Court, on the West Bank of Orleans Parish (south of the Mississippi River). Eviction filing data were collected by [Professor Davida Finger](https://law.loyno.edu/academics/faculty-and-staff-directory/davida-finger) (Loyola University New Orleans College of Law). Professor Finger works in partnership with [Jane Place Neighborhood Sustainability Initiative.](https://www.jpnsi.org/evictions) Historical averages are taken from 2019 data.




{{%/ report_chart %}}