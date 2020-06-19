---
draft: false
cascade:
  title: Eviction Tracking System | Get the Data
  description: Get the data for real time eviction tracking by city during COVID-19.
  fbImage: /images/assets/graphics/ets-bg-social.png
  twImage: /images/assets/graphics/ets-bg-social.png
  socialDescription: Get the data for real time eviction tracking by city during COVID-19.
h1: Get the Data
date: 2020-06-16T00:00:00.000Z
intro: >-
  Below are the aggregate data used in the Eviction Tracking System. We hope
  that you find new and productive ways to make use of them. When you do so,
  please cite as follows:


  > Peter Hepburn, Renee Louis, and Matthew Desmond. Eviction Tracking System: Version 1.0. Princeton: Princeton University, 2020.[www.evictionlab.org](http://www.evictionlab.org/).


  Scroll below the data table to find code samples for using the data in your own applications. Please submit additional examples!
headers:
  siteheader: Site
  baselineheader: Baseline Years
  geoheader: Smallest Geography
  fileheader: Data File
layout: downloads
data:
  - site: All Sites
    years: "-"
    geo: Census Tract / ZIP Code
    file: /uploads/all_sites_20200613.csv
  - site: Austin
    years: "2012"
    geo: ZIP Code
    file: /uploads/austin_20200613.csv
  - site: Boston
    years: 2012, 2013, 2015, 2016
    geo: Census Tract
    file: /uploads/boston_20200613.csv
  - site: Cincinnati
    years: 2012-2016
    geo: Census Tract
    file: /uploads/cincinnati_20200613.csv
  - site: Cleveland
    years: 2012, 2013, 2015, 2016
    geo: Census Tract
    file: /uploads/cleveland_20200613.csv
  - site: Houston
    years: 2012-2015
    geo: Census Tract
    file: /uploads/houston_20200613.csv
  - site: Jacksonville
    years: 2012-2015
    geo: Census Tract
    file: /uploads/duval_20200613.csv
  - site: Kansas City
    years: 2012-2015
    geo: Census Tract
    file: /uploads/jackson_20200613.csv
  - site: Milwaukee
    years: 2012-2016
    geo: Census Tract
    file: /uploads/milwaukee_20200613.csv
  - site: Pittsburgh
    years: 2012-2019
    geo: ZIP Code
    file: /uploads/allegheny_20200613.csv
  - site: Richmond
    years: "2016"
    geo: ZIP Code
    file: /uploads/richmond_20200613.csv
  - site: St Louis
    years: 2012, 2013, 2015, 2016
    geo: Census Tract
    file: /uploads/stlouis_20200613.csv
---
Sample code:

```r
# Sample R code to plot weekly filings
# For Milwaukee until week 24 (06/13/2020)

# library(dplyr)
# library(tidyr)
# library(ggplot2)
mke_tract_week_2020 %>%   
  group_by(week, week_date) %>% 
  summarize(filings_2020 = sum(filings_2020),
            filings_avg = sum(filings_avg, na.rm = T)) %>%
  pivot_longer(cols = filings_2020:filings_avg,
               names_to = "year",
               values_to = "filings",
               names_prefix = "filings_") %>% 
  mutate(year = recode(year,
                       avg = "2012-2016")) %>% 
  ggplot(aes(x = week,
             y = filings)) +
  geom_line(aes(color = year)) +
  labs(title = "Milwaukee Weekly Eviction Filings")
```

![](/uploads/sample_mke_plot.png)