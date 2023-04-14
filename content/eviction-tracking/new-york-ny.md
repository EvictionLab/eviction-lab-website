---
collection: true
draft: false
h1: New York, New York
slug: new-york-ny
date: 2022-07-24T04:00:00.000Z
twImage: /images/assets/graphics/ets-bg-social.png
title: New York, New York | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
rentersSite: New York City
---

{{< report_intro site_id="36061" data="/uploads/table.csv" >}}



New York saw a number of steps taken to prevent a surge in eviction cases. A state-wide moratorium prevented landlords from filing eviction cases from late-March until June 20, 2020. Additional protections—including the [Tenant Safe Harbor Act](https://www.nysenate.gov/legislation/bills/2019/s8192/amendment/b) and the [automatic suspension of newly-filed eviction cases](http://nycourts.gov/whatsnew/pdf/ao160a20.pdf)—kept filings below historical averages. A state-wide moratorium was again implemented in late-December 2020. Pieces of the state-wide moratorium that allowed tenants to avoid a court case by declaring a COVID hardship were struck down by the Supreme Court in August 2021, but a new moratorium was enacted on September 2, 2021 that still afforded tenants certain protections in cases of COVID hardship. This moratorium expired on January 15, 2022. 

More detail on eviction protections in New York can be found on the [COVID-19 Housing Policy Scorecard](https://evictionlab.org/covid-policy-scorecard/ny/) and from the [Furman Center](https://furmancenter.org/thestoop/entry/data-update-eviction-filings-in-nyc-since-covid-19).



{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/newyork_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in New York City over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Eviction filing data for New York City were collected by the [Housing Data Coalition](https://www.housingdatanyc.org//). Historical averages cover the years 2016-2018.



{{%/ report_chart %}}


{{% report_median_claims id="medianFilings" data="/uploads/new york_claims_monthly.csv" %}}

# Changes in claim amounts

When a landlord files an eviction claim in New York, we observe the amount they claim the tenant owes in back rent, late fees, and damages. In this figure, we plot the typical (median) amount claimed in eviction filings for each month over the last year. We exclude cases in which the landlord doesn’t make a monetary claim, and we drop months if there were fewer than 10 eviction cases filed. The dashed horizontal line on the plot marks the typical claim on an eviction case filed before the pandemic.

{{%/ report_median_claims %}}


{{% report_map shapes="/uploads/new-york_shapes.json" data="/uploads/newyork_map.csv" %}}

# The geography of changes in eviction filings

New York City is divided into 299 zip codes. In each of those zip codes, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for New York City were collected by the [Housing Data Coalition](https://www.housingdatanyc.org//). Historical averages cover the years 2016-2018.
2. Zip code breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.

{{%/ report_map %}}



{{% report_chart id="race" data="/uploads/newyork_linechart.csv" imputedNoteNumber="2" %}}







# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize zip codes by their racial/ethnic majority: White, Black, Latinx, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of zip codes defined by racial/ethnic majority—between filings in 2020-2022 and average filings in 2016–2018.<sup>1</sup>

1. Eviction filing data for New York City were collected by the [Housing Data Coalition](https://www.housingdatanyc.org//). Historical averages cover the years 2016-2018.
2. Statistics rely on imputation of race/ethnicity and gender based on defendant names and addresses. A complete description of this process can be found in the [ETS methods page](https://evictionlab.org/eviction-tracking/methods/).

{{%/ report_chart %}}