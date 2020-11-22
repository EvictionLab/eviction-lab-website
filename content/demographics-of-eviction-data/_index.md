---
draft: false
cascade:
  title: Code and Data for Demographics of Eviction
  description: Get the data for demographics of eviction.
  fbImage: 
  twImage: 
  socialDescription: Get the data for real time eviction tracking in U.S. cities during COVID-19.
h1: Code and Data for Demographics of Eviction
date: 2020-11-17T00:00:00.000Z
intro: 
headers:
  header1: Step
  header2: Script
  header3: Data File Description
  header4: Data File
layout: demographics-of-eviction-data
data:
  - step: Calculating Denominators
    scriptname: get_denominators_20201103.R
    script: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/get_denominators_20201103.R
    description: IPUMS data
    filename: usa_00005.csv
    file: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/usa_00005.csv
  - step: 
    script: 
    description: PUMA-tract crosswalk
    filename: state.county.puma.csv
    file: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/state.county.puma.csv
  - step: Analysis
    scriptname: demographics_analysis_20201030.R
    script: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/demographics_analysis_20201030.R
    description: county-level denominators
    filename: county_denominators.csv
    file: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/county_denominators.csv
  - step: 
    script: 
    description: county-level numerators
    filename: county_numerators.csv
    file: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/county_numerators.csv
  - step: 
    script: 
    description: renter-level rates
    filename: expanded_rates_all.rda
    file: https://eviction-lab-data-downloads.s3.amazonaws.com/demographics-of-eviction-data/expanded_rates_all.rda
---