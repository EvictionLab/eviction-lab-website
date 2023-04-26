---
collection: true
draft: false
h1: Albuquerque, New Mexico
slug: albuquerque-nm
date: 2022-07-21T04:00:00.000Z
rentersSite: Albuquerque
twImage: /images/assets/graphics/ets-bg-social.png
title: Albuquerque, New Mexico | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---

{{< report_intro site_id="35001" data="/uploads/table.csv" >}}



Eviction filings in Albuquerque fell sharply in early 2020. While eviction filings and hearings were allowed to proceed, on March 24, 2020, the New Mexico Supreme Court implemented a stay on the execution of writs for nonpayment of rent. This order remained in effect through March 2022.



{{</ report_intro >}}



{{% report_chart id="avg" data="/uploads/albuquerque_barchart.csv" %}}



# Trends in eviction filings

This plot shows monthly eviction filings in Bernalillo County (Albuquerque) over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup>

1. Data for Bernalillo County are provided by the [New Mexico Administrative Office of the Courts](https://www.nmcourts.gov/). Historical averages cover 2017-2019.



{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/albuquerque_hotspots_output.csv" %}}



# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in Bernalillo County to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated quarterly.



{{%/ report_top_evictors %}}



{{% report_map shapes="/uploads/albuquerque_shapes.json" data="/uploads/albuquerque_map.csv" topData="/uploads/albuquerque_hotspots_media_report.csv" %}}



# The geography of eviction filings

Bernalillo County is divided into 153 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Eviction filing data for Bernalillo County are provided by the [New Mexico Administrative Office of the Courts](https://www.nmcourts.gov/). Historical averages cover 2017-2019. 
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts.





{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/albuquerque_linechart.csv" imputedNoteNumber="2" %}}



# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, Latinx, or Other/None. In this barplot, we show the distribution of eviction filings over the last year by neighborhood racial/ethnic majority.  

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in 2017–2019.<sup>1</sup>

1. Eviction filing data for Bernalillo County are provided by the [New Mexico Administrative Office of the Courts](https://www.nmcourts.gov/). Historical averages cover 2017-2019.
2. Statistics rely on imputation of race/ethnicity and gender based on defendant names and addresses. A complete description of this process can be found in the [ETS methods page](https://evictionlab.org/eviction-tracking/methods/).

{{%/ report_chart %}}