---
draft: false
h1: St. Louis, Missouri
slug: st-louis-mo
date: 2024-08-30T04:00:00.000Z
rentersSite: Saint Louis
twImage: /images/assets/graphics/ets-bg-social.png
collection: true
title: St. Louis, Missouri | Eviction Tracking System
fbImage: /images/assets/graphics/ets-bg-social.png
---
{{< report_intro site_id="29510" data="/uploads/table.csv" >}}

While the state of Missouri did not enact any protections for renters, the 22nd Judicial Circuit (City of St. Louis) did suspend eviction proceedings in mid-March through July 22, 2020. Eviction filings in St. Louis declined precipitously in April, May and June 2020 before picking up again in July 2020. The execution of certain types of eviction orders in St. Louis City and St. Louis County was suspended until August 27, 2021. 

In most locations that we track, we are able to access eviction filing records shortly after they are filed with the courts. In St. Louis, however, these records are only available with a delay. We update this page with the most recent data that we have available. The past month reported here is the most recent month for which we have data.

{{</ report_intro >}}


{{% report_chart id="avg" data="/uploads/stlouis_barchart.csv" %}}





# Trends in eviction filings

This plot shows monthly eviction filings in St. Louis City and St. Louis County over the last year. Filings are displayed relative to the pre-pandemic average for the same set of months. You can toggle the plot to display filing counts and to extend the time frame back to January 2020.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, 2015, and 2016
2. Filing data for 2020 onward collected by [January Advisors](https://www.januaryadvisors.com/)





{{%/ report_chart %}}



{{% report_top_evictors id="topEvictorsSection" data="/uploads/stlouis_hotspots_output.csv" %}}


# Eviction Hotspots

Eviction filings aren’t spread evenly across cities: a small number of buildings are responsible for a disproportionate share of eviction cases. This pattern, [which existed before the pandemic](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/), has continued in 2020 and beyond. We analyzed eviction records in St. Louis to determine where the most cases are being filed. This is a list of eviction hot spots—the 10 buildings responsible for the most filings—over the course of the last year. We also display the plaintiff name most often listed with a given building in the court filings. In the next section, we map the top 100 hotspots across the county.

Eviction Hotspot data are updated semi-annually.


{{%/ report_top_evictors %}}


{{% report_map shapes="/uploads/stlouis_shapes.json" data="/uploads/stlouis_map.csv" topFilers="/uploads/stlouis_hotspots_media_report.csv" %}}

# The geography of eviction filings

St. Louis is made up of 341 census tracts. In each of those tracts, we map the number of eviction filings over the last year. If you toggle below you can see these numbers as eviction filing rates—the number of eviction filings divided by the number of renter households in the area—or compared to the typical number of filings in the average year.<sup>1</sup> <sup>2</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, 2015, and 2016
2. Tract-level breakdown of renter race/ethnicity determined using American Community Survey (ACS) estimates for 2015–2019.
3. Tract-level eviction data are updated more regularly than eviction hotspots, which may result in some disagreement in filing counts. We exclude buildings with fewer than 15 filings, in which case fewer than 100 buildings will be displayed. 

{{%/ report_map %}}

{{% report_chart id="race" data="/uploads/stlouis_linechart.csv" imputedNoteNumber="2" %}}

# The demographics of eviction filings

**Eviction filings by neighborhood race/ethnicity**

American Community Survey (ACS) data allow us to categorize neighborhoods by their racial/ethnic majority: White, Black, or Other/None. 

When you toggle the figure to see data relative to average, comparisons are being drawn—within the same set of neighborhoods defined by racial/ethnic majority—between filings over the last year and average filings in previous years.<sup>1</sup>

1. Average eviction filings taken from Eviction Lab data for 2012, 2013, 2015, and 2016

{{%/ report_chart %}}