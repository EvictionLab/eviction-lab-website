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
    script: https://drive.google.com/file/d/1KlNMSpe7AhWp2UF9VkFHFiq-hxmG1yOT/view?usp=sharing
    description: IPUMS data
    filename: usa_00005.csv
    file: https://drive.google.com/file/d/1nXpwqcNbGcorPnwEa4ZAn6zpsAQj2ZZh/view?usp=sharing
  - step: 
    script: 
    description: PUMA-tract crosswalk
    filename: state.county.puma.csv
    file: https://drive.google.com/file/d/1ms7aFk-Eokk34BwloPMxi371DbqaZB5i/view?usp=sharing
  - step: Analysis
    scriptname: demographics_analysis_20201030.R
    script: https://drive.google.com/file/d/1sjaVwhIiqPo4wW-WWqu6yI7nHp_RZsop/view?usp=sharing
    description: county-level denominators
    filename: county_denominators.csv
    file: https://drive.google.com/file/d/15vq3q3wAIzIKjUKAWd-omPa0cAkbz9ME/view?usp=sharing
  - step: 
    script: 
    description: county-level numerators
    filename: county_numerators.csv
    file: https://drive.google.com/file/d/1Ez679ob3szuaKe71WeWCqK_iE5xiFSjF/view?usp=sharing
  - step: 
    script: 
    description: renter-level rates
    filename: expanded_rates_all.rda
    file: https://drive.google.com/file/d/17Ch7_MLbxT269QRoxXazhMlSr_sH2m9A/view?usp=sharing
---