---
draft: false
childof: research
contenttype: updates
contentcat: research
featured: true
researchtype: elresearch
title: "Racial and Gender Disparities among Evicted Americans"
date: 2020-12-16T00:46:40.089Z
postauthorname: Peter Hepburn, Renee Louis, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: Documenting populations disproportionately at risk of eviction.
listSummary: Are Black and Latinx renters evicted at higher rates than their white counterparts? Are women renters evicted at higher rates than men? Is this true for all racial and ethnic groups? Answering these questions is central to addressing the long history of excluding women and communities of color from housing, banking, and credit opportunities in the U.S.
socialDescription: Documenting populations disproportionately at risk of eviction.
# image: '/images/assets/blog/rent_margin_display.jpg'
fbImage: historical-demographics-social.png
twImage: historical-demographics-social.png
url: /demographics-of-eviction/
scripts:
  - grouped-bar-chart
aliases:
  - /racial-and-gender-disparities-among-evicted-americans/
---

The Eviction Lab aims to better understand the causes and consequences of eviction in the United States. To do so, we have compiled court records from across the country into a national database. These court records provide a unique opportunity to examine the prevalence of eviction across time and space. But these records contain limited information about each case: case numbers, names of plaintiffs (e.g., landlords, property managers) and defendants (tenants), defendant addresses, filing dates, and case outcomes. Defendant gender and race/ethnicity are not included in eviction records.

Documenting populations disproportionately at risk of eviction informs researchers, advocates, and policymakers striving to better understand and address long-standing disparities in access to stable housing. The lack of data on defendant gender, race, and ethnicity limit our ability to address some of the most pressing questions in the field. Are Black and Latinx renters evicted at higher rates than their white counterparts? Are women renters evicted at higher rates than men? Is this true for all racial and ethnic groups? Answering these questions is central to addressing the long history of excluding women and communities of color from housing, banking, and credit opportunities in the U.S.

{{< pullquote "Filing and eviction rates were, on average, significantly higher for Black renters than for white renters." >}}

In a new study published in _Sociological Science_, we develop strategies to overcome limitations in the data and begin to answer these questions. Despite progress the U.S. made in legislating the Fair Housing Act and Equal Credit Opportunity Act, which banned discrimination by race, gender, and marital status, we found that property owners disproportionately threaten Black and Latinx renters—particularly women—with eviction.

<a class="link-button" href="https://sociologicalscience.com/articles-v7-27-649/" target="_blank" style="color: #fff;" target="_blank"><span>Read the study <i class="fa fa-chevron-right"></i></span></a>

In the study, we used a set of statistical techniques to impute—to predict based on available information—the gender and race/ethnicity of individuals facing eviction on the basis of names and addresses. The intuition is straightforward: Joseph Smith living in the predominantly-white Lincoln Park neighborhood of Chicago is likely to be a man and white, while Maura Smitts in the majority-Black Bronzeville neighborhood is likely to be a woman and Black.{{< sup 1 >}} Given Census and Social Security data about the distribution of names by gender and race/ethnicity, we assigned every defendant in our data a probability of being a member of a given gender-by-race/ethnicity category.{{< sup 2 >}} We used these probabilities to produce annual estimates of the number of individuals filed against and evicted in each group within each included county.

{{< pullquote "Nearly one in four black renters lived in a county in which the black eviction rate was more than double the white eviction rate. " >}}

These absolute numbers are important, but the data are often more informative when presented as _rates_. Producing eviction rates allows researchers to compare the prevalence of eviction across counties of different sizes or racial composition. Because there are no established counts of the number of adult renters in each county by gender and race/ethnicity, we developed a new technique to estimate these numbers. In the hopes of inspiring further analysis, we are making all data used in this paper—as well as code to replicate our work—publicly available here:

<a class="link-button" href="/demographics-of-eviction-data" style="color: #fff;" target="_blank">
<span>Download the data and code <i class="fa fa-chevron-right"></i></span>
</a>

With these data in hand, we calculated three statistics for every gender-by-race/ethnicity category:

<ol> 
<li>The <strong>eviction filing rate</strong>: the number of eviction filings divided by the renter population. An eviction filing is typically the first step in the eviction process recorded by the civil court system. Many tenants vacate their homes upon receipt of an eviction filing. Even when they do so, having been filed against for eviction marrs tenants’ credit and rental history, limiting their future housing options and potentially damaging their credit.{{< sup 3 >}}</li>

<li>The <strong>eviction rate</strong>: the number of eviction judgments divided by the renter population. An eviction judgment is rendered by the courts when a case is decided in favor of the plaintiff (property owner or manager). The eviction rate is our best measure of the percentage of renters forcibly removed from their homes by court order. Eviction rate estimates are also adjusted for serial eviction filings, treating the outcome of the most recently-observed case as final.</li>

<li>The <strong>serial eviction filing rate</strong>: the number of individuals who are serially filed against divided by the total number of unique filing recipients. This rate allows us to assess whether certain demographic groups are at increased risk of being filed against repeatedly at the same address, a process that entails considerable financial costs because of late charges and legal fees that are shifted to tenants.</li>
</ol>

Our analysis yielded three major findings.

First, **filing and eviction rates were, on average, significantly higher for Black renters than for white renters**. The share of eviction filings and eviction judgments against Black renters was considerably higher than their share of the renter population (see Figure 1).

- Black individuals made up 19.9% of all adult renters in the counties for which we had data, but 32.7% of all eviction filing defendants.
- One in every five adult renters in our sample was Black, yet one in every three eviction filings were served to a Black renter.
- By contrast, whites made up over half the population of adult renters (51.5%) but received only 42.7% of eviction filings.

This resulted in a striking racial disparity. There were just under 40 Black renters for every 100 white renters in these counties. Yet for every 100 eviction filings to white renters, we estimated that there were nearly 80 eviction filings to Black renters.

{{% grouped-bar-chart id="county_rd_disp" titlePrefix="Figure 1: Share of all renters, eviction filings, and eviction judgments, by race/ethnicity" titleSuffix=" by race/ethnicity." data="/uploads/county_prop_lookup.csv" x="countyfips" y="renters_prop_w" yTicks="5" yFormat=".0%" xTicks="Asian;Black;Latinx;White" columns="cofips,state,county,year_string,renters_prop_a,defendant_prop_a,judgment_prop_a,renters_prop_b,defendant_prop_b,judgment_prop_b,renters_prop_l,defendant_prop_l,judgment_prop_l,renters_prop_w,defendant_prop_w,judgment_prop_w" xBars="renters_prop_a,defendant_prop_a,judgment_prop_a;renters_prop_b,defendant_prop_b,judgment_prop_b;renters_prop_l,defendant_prop_l,judgment_prop_l;renters_prop_w,defendant_prop_w,judgment_prop_w" xFormat="" highlight="renters;defendant;judgment" active="0" searchId="cofips" searchLabel="county" type="barGroup" legendItems="Share of renters;Share of defendants;Share of judgments" search="true" searchPrompt="" %}}

<div class="figcaption">
  <p>
   Use the search bar to select from 1,195 counties in our dataset. If a county does not appear in the dropdown list, its eviction demographics data is unavailable.
 </p> 
 </div>

The average renter faced a 4.1% eviction filing rate, and an eviction rate of 2.3%. Put another way, approximately one in 25 renters was threatened with eviction every year, and one in 40 was evicted. These rates varied considerably by race/ethnicity.

- Black renters experienced the highest average rates of eviction filing (6.2%) and eviction judgement (3.4%).
- By contrast, the average eviction filing rate among white renters was 3.4% and the average eviction rate was 2.0%.
- Nearly one in four black renters lived in a county in which the black eviction rate was more than _double_ the white eviction rate.

These patterns are reflected in Figure 2, which displays the distributions of filing rates (top panel) and eviction rates (bottom panel) for female and male renters by race/ethnicity.

<div class="figheader">Figure 2. Median eviction filing rates and eviction rates, by gender and race/ethnicity</div>

<img class="upscale108" src="/images/assets/blog/hist_demo_figure_2.png" />

Second, **among renters, women—especially Black and Latinx women—faced higher eviction rates than men**. Across all renters, the risk of eviction was approximately 2% higher for women than for men. Among Black renters this increases to 4%, and for Latinx renters it jumps to 9%.

{{< pullquote "Across the 1,195 counties in our sample, we predicted that 341,756 women were evicted annually, approximately 16% more than the 294,908 evicted men." >}}

These differences—the gaps that we see between the male and female rates in the bottom panel of Figure 2—may appear small, but they translate into thousands more women than men evicted each year. Across the 1,195 counties in our sample, we predicted that 341,756 women were evicted annually, approximately 16% more than the 294,908 evicted men.

- The absolute and relative disparities in total evictions were greatest for Black renters: 113,415 women evicted compared to 83,182 men (36.3% more Black women than Black men).
- For Latinx renters, we predicted 56,400 women evictees and 51,456 men evictees (9.6% more Latinx women than Latinx men).
- Among white renters there was a smaller gap in total evictions by gender: 153,954 women relative to 142,934 men (7.7% more white women than white men).

{{< pullquote "This study finds that Black and Latinx renters in general, and women in particular, are disproportionately threatened with eviction and disproportionately evicted from their homes." >}}

Third, **Black and Latinx renters who were filed against for eviction were most likely to be <a href="/serial-eviction-filings/">repeatedly filed against at the same address</a>**. The average Black renter experienced a serial eviction filing rate of 14.7%. Put another way, one in every seven Black renters who was filed against for eviction was repeatedly filed against at the same address. The equivalent average rates were 13.1% for Latinx renters, 11.2% for Asian renters, and 9.7% for white renters.

This study finds that Black and Latinx renters in general, and women in particular, are disproportionately threatened with eviction and disproportionately evicted from their homes. Black, Latinx, and women renters are thus disproportionately exposed to the many documented negative consequences of eviction, <a href="https://academic.oup.com/sf/article-abstract/94/1/295/1754025" target="_blank">from homelessness and material hardship to job loss and depression</a>. Eviction is not only a consequence of poverty, but also a cause. The large racial disparities in eviction rates documented here likely contribute to U.S. racial and gender inequalities in economic, social, and health outcomes. This paper provides new evidence of the extent to which people of color—especially women of color—are systematically excluded from housing stability that could allow them and their families to flourish in society.

<hr />

<div class="footnotes">

<ol>
<li>We refer to “gender” while acknowledging that our imputation process is necessarily imprecise and cannot capture important subtleties in individuals’ gender identification.</li>

<li>To extend our example, we might assign Joseph Smith a 90% probability of being white, a 95% probability of being a man, and an 85.5% joint probability of being a “white man” (0.9*0.95=0.855). Joseph would also be assigned probabilities of being “Black man” or “Latinx woman,” but they would be much lower.
</li>

<li> The eviction filing rates reported here are <a href="/serial-eviction-filings/">adjusted for serial eviction filings</a>, counting only one instance of each serially-filed case within each county-year. Adjusting for serial eviction filings allows us to avoid double-counting defendants in our numerator, and thereby gets us closer to counting the number of unique individuals filed against.
</li>
</ol>
</div>
