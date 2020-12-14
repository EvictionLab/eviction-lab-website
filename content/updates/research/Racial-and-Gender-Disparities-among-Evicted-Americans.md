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
aliases:
---

The Eviction Lab was established with the goal of better understanding the causes and consequences of eviction in the United States. To do so, we have compiled court records from across the country into a national database. Court records provide a unique opportunity to examine the prevalence of eviction across time and space. But these records contain limited information about each case: case numbers, names of plaintiffs (e.g., landlords, property managers) and defendants (tenants), defendant addresses, filing dates, and case outcomes. Defendant gender and race/ethnicity are not not included in eviction records.

Documenting populations disproportionately at risk of eviction informs researchers, advocates, and policymakers striving to better understand and address disparities in access to stable housing. The lack of data on defendant gender, race, and ethnicity limit our ability to address some of the most pressing questions in the field. Are Black and Latinx renters evicted at higher rates than their white counterparts? Are women renters evicted at higher rates than men? Is this true for all racial and ethnic groups? Answering these questions is central to addressing the long history of excluding women and communities of color from housing, banking, and credit opportunities in the U.S. In a new study published in Sociological Science, we develop strategies to overcome limitations in the data and begin to answer these questions. Despite progress the U.S. made in legislating the Fair Housing Act and Equal Credit Opportunity Act, which banned discrimination by race, gender, and marital status, we found that property owners disproportionately threaten Black and Latinx renters—particularly women—with eviction.

{{% barchart id="county_rd_disp" titlePrefix="Figure 1: Share of all renters, eviction filings, and eviction judgments" titleSuffix=" by race/ethnicity." data="/uploads/county_prop_lookup.csv" x="countyfips" y="renters_prop_w" yTicks="5" yFormat=".0%" xTicks="Asian;Black;Latinx;White" columns="cofips,state,county,year_string,renters_prop_a,defendant_prop_a,judgment_prop_a,renters_prop_b,defendant_prop_b,judgment_prop_b,renters_prop_l,defendant_prop_l,judgment_prop_l,renters_prop_w,defendant_prop_w,judgment_prop_w" xBars="renters_prop_a,defendant_prop_a,judgment_prop_a;renters_prop_b,defendant_prop_b,judgment_prop_b;renters_prop_l,defendant_prop_l,judgment_prop_l;renters_prop_w,defendant_prop_w,judgment_prop_w" xFormat="" highlight="renters;defendant;judgment" active="0" searchId="cofips" searchLabel="county" type="barGroup" legendItems="Share of renters;Share of defendants;Share of judgments" search="true" searchPrompt="Use the search bar to select from <span id=\"countyCount\"></span> counties. If a county does not appear in the dropdown list, we do not have its eviction demographics data." %}}

The average renter faced a 4.1% eviction filing rate, and an eviction rate of 2.3%. Put another way, approximately one in 25 renters was threatened with eviction every year, and one in 40 was evicted. These rates varied considerably by race/ethnicity. Black renters experienced the highest average rates of eviction filing (6.2%) and eviction judgement (3.4%). By contrast, the average eviction filing rate among white renters was 3.4% and the average eviction rate was 2.0%. Nearly one in four black renters lived in a county in which the black eviction rate was more than double the white eviction rate. These patterns are reflected in Figure 2, which displays the distributions of filing rates (top panel) and eviction rates (bottom panel) for female and male renters by race/ethnicity.

Figure 2. Median eviction filing rates and eviction rates, by gender and race/ethnicity

Second, among renters, women—especially Black and Latinx women—faced higher eviction rates than men. Across all renters, the risk of eviction was approximately 2% higher for women than for men. Among Black renters this increases to 4%, and for Latinx renters it jumps to 9%. These differences—the gaps that we see between the male and female rates in the bottom panel of Figure 2—may appear small, but they translate into thousands more women than men evicted each year. Across the 1,195 counties in our dataset, we predicted that 341,756 women were evicted annually, approximately 16% more than the 294,908 evicted men.

The absolute and relative disparities in total evictions were greatest for Black renters: 113,415 women evicted compared to 83,182 men (36.3% more Black women than Black men).
For Latinx renters, we predicted 56,400 women evictees and 51,456 men evictees (9.6% more Latinx women than Latinx men).
Among white renters there was a smaller gap in total evictions by gender: 153,954 women relative to 142,934 men (7.7% more white women than white men).

Third, Black and Latinx renters who were filed against for eviction were most likely to be repeatedly filed against at the same address. The average Black renter experienced a serial eviction filing rate of 14.7%. Put another way, one in every seven Black renters who was filed against for eviction was repeatedly filed against at the same address. The equivalent average rates were 13.1% for Latinx renters, 11.2% for Asian renters, and 9.7% for white renters.

This study finds that Black and Latinx renters in general, and women in particular, are disproportionately threatened with eviction and disproportionately evicted from their homes. Blank, Latinx, and women renters are thus disproportionately exposed to the many documented negative consequences of eviction, [from homelessness and material hardship to job loss and depression](https://academic.oup.com/sf/article-abstract/94/1/295/1754025). The large racial disparities in eviction rates documented here likely contribute to racial inequalities with respect to economic, social, and health outcomes. Eviction is not only a consequence of poverty, but also a cause. This paper provides new evidence of the extent to which people of color—especially women of color—are systematically excluded from housing stability that could allow them and their families to flourish in society.
