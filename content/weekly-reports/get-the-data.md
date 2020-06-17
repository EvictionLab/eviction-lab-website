---
draft: true
cascade:
  title: Weekly Eviction Reports Downloads | Eviction Lab
  description: Get the data for real time eviction tracking by city during COVID-19.
  fbImage: /images/og/eviction-lab-about-us-fb.jpg
  twImage: /images/og/eviction-lab-about-us-tw.jpg
  socialDescription: Get the data for real time eviction tracking by city during COVID-19.
h1: Get the Data
date: 2020-06-16T00:00:00.000Z
intro: >-
  

  Below are data used in the Eviction Tracking System. 


  Scroll below the table to find code samples for using the data in your own applications. 


  Please cite as follows. 
headers:
  siteheader: Site
  baselineheader: Baseline Years
  geoheader: Smallest Geography
  fileheader: Data File
layout: downloads
data:
  - site: Allegheny
    years: 2012-2016
    geo: ZIP Code
    file: /uploads/allegheny_20200613.csv
  - site: Austin
    years: 2012-2016
    geo: ZIP Code
    file: /uploads/austin_20200613.csv
  - site: Boston
    years: 2012-2016
    geo: Census Tract
    file: /uploads/boston_20200613.csv
  - site: Cincinnati
    years: 2012-2016
    geo: Census Tract
    file: /uploads/cincinnati_20200613.csv
  - site: Cleveland
    years: 2012-2016
    geo: Census Tract
    file: /uploads/cleveland_20200613.csv
---
Sample code:

    tract_week_2020 %>%   
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
        geom_line(aes(color = year))