---
draft: false
cascade:
  title: Weekly Eviction Reports | Eviction Lab
  description: Real time eviction tracking by city during COVID-19.
  fbImage: /images/og/eviction-lab-about-us-fb.jpg
  twImage: /images/og/eviction-lab-about-us-tw.jpg
  socialDescription: We’ve built the first nationwide database of evictions.
h1: Methods
layout: content
date: 2020-06-03T00:00:00.000Z
---
# Methods

Initial site selection for the Eviction Tracking System (ETS) was based on (1) the availability of valid baseline data in the given county from the Eviction Lab, and (2) the availability of eviction filing data through public-facing court websites. We briefly explain both criteria.

## Valid Baseline Data

Individual-level eviction records between 2000 and 2016 have been collected by The Eviction Lab, LexisNexis Risk Solutions, and American Information Research Services and then compiled by the Eviction Lab at Princeton University. Records were cleaned, stripped of duplicates and commercial eviction cases, geocoded, and validated against publicly-available data sources published by county- and state-court systems.

Data validation was conducted at the individual level where the Eviction Lab could secure state court data. This process involved merging and comparing the data using case numbers and court numbers. To validate our estimates of eviction case volume, we also compared our counts directly to state-reported county-level statistics on eviction filings. These aggregate estimates were considered reliable if the total number of filings in a county fell between 86 and 114 percent of the county courts’ publicly reported total for that year.

Within counties, years that were not marked as valid data points between the first and last years of availability were imputed if there were no more than two consecutive years of missing data. When only one year of data was missing within a county between two years of valid data, the case volume was imputed using the average of the preceding and following years. When two consecutive years of data were missing, we linearly interpolated between the last known and reliable value and the next known and reliable value.

These externally-validated data represent the baseline against which 2020 data are compared. County-level years of data available for baseline comparison vary as a function of external validation. For example, in Richmond, VA, we compare against just 2016 data, whereas in Hamilton County, OH (Cincinnati) we can compare against average filings between 2012 and 2016. 

Using these data, we compiled a set of 73 of the 200 largest U.S. metropolitan areas in which at least 50% of Census tracts had valid data for at least one year between 2012 and 2016. Within each of those metropolitan areas we identified the counties with valid data during that period (n=224). We systematically checked for the availability of publicly-accessible eviction filing data through court web systems. We prioritized counties with larger renter populations and with higher eviction and eviction filing rates. We also aimed to select cities and counties that had instituted a range of eviction moratoria and renter protections in response to the COVID-19 pandemic.

In two sites, additional baseline data were provided by partner organizations. [BASTA Austin](http://www.bastaaustin.org/) and [Open Austin](https://www.open-austin.org/) provided baseline data for Travis County, TX. The [CREATE Lab](https://www.cmucreatelab.org/home) at Carnegie Mellon University provided both baseline and 2020 data for Allegheny County, PA. 

## 2020 Eviction Filing Data

Data about eviction cases are accessed through public-facing websites by each county or jurisdiction that we are monitoring. We query these websites each week and collect the case filings into a dataset for analysis. From there, we geocode the defendant/property address and add Census tract details. Three jurisdictions – Richmond, VA, Travis County, TX, and Allegheny County, PA – only provide data on defendant zip code, not the full address. Although the data we collect is limited to information made publicly available by each jurisdiction, this approach offers an accurate method for understanding eviction case volume, and for subsequent analysis.