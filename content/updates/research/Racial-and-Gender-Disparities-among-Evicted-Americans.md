---
draft: false
childof: research
contenttype: updates
contentcat: research
featured: "home"
researchtype: elresearch
title: "Racial and Gender Disparities among Evicted Americans"
date: 2020-12-03T16:46:40.089Z
postauthorname: Peter Hepburn and Alieza Durana
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: Surveying disparities amongst eviction data.
listSummary: "List Summary"
socialDescription: Surveying disparities amongst eviction data.
# image: '/images/assets/blog/rent_margin_display.jpg'
fbImage: "/images/assets/blog/filing-shifts-social.png"
twImage: "/images/assets/blog/filing-shifts-social.png"
url: /racial-and-gender-disparities-among-evicted-americans
scripts:
  - barchart
  - linechart
aliases:
---

The Eviction Lab was established with the goal of better understanding the causes and consequences of eviction in the United States. To do so, we have compiled court records from across the country into a national database. Court records provide a unique opportunity to examine the prevalence of eviction across time and space. But these records contain limited information about each case: case numbers, names of plaintiffs (e.g., landlords, property managers) and defendants (tenants), defendant addresses, filing dates, and case outcomes. Defendant gender and race/ethnicity are not not included in eviction records.
 
Documenting populations disproportionately at risk of eviction informs researchers, advocates, and policymakers striving to better understand and address disparities in access to stable housing. The lack of data on defendant gender, race, and ethnicity limit our ability to address some of the most pressing questions in the field. Are Black and Latinx renters evicted at higher rates than their white counterparts? Are women renters evicted at higher rates than men? Is this true for all racial and ethnic groups? Answering these questions is central to addressing the long history of excluding women and communities of color from housing, banking, and credit opportunities in the U.S. In a new study published in Sociological Science, we develop strategies to overcome limitations in the data and begin to answer these questions. Despite progress the U.S. made in legislating the Fair Housing Act and Equal Credit Opportunity Act, which banned discrimination by race, gender, and marital status, we found that property owners disproportionately threaten Black and Latinx renters—particularly women—with eviction.

{{% barchart id="summed" title="Figure 2: Weekly Filings Compared to Historical Averages" data="/uploads/summed_sites_20200922a.csv" x="week_date" y="ratio" groupBy="city" yTicks="5" yFormat=".0%" xTicks="week" xFormat="" highlight="Hartford, CT;St Louis, MO;Fort Worth, TX"  curve="curveLinear" %}}

{{% linechart id="summed" title="Figure 2: Weekly Filings Compared to Historical Averages" data="/uploads/summed_sites_20200922a.csv" x="week_date" y="ratio" groupBy="city" yTicks="5" yFormat=".0%" xTicks="week" xFormat="" highlight="Hartford, CT;St Louis, MO;Fort Worth, TX"  curve="curveLinear" %}}
