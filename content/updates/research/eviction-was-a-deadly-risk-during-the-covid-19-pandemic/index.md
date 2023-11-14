---
draft: true
childof: research
url: eviction-was-a-deadly-risk-during-the-covid-19-pandemic
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: Eviction was a Deadly Risk During the COVID-19 Pandemic
date: 2023-11-18T00:20:51.942Z
postauthorname: Nick Gratez, Peter Hepburn, Carl Gershenson, Emily Lemmerman, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
image: GettyImages-1245604936.jpg
fbImage: GettyImages-1245604936.jpg
twImage: GettyImages-1245604936.jpg
description: 'While many groups experienced higher-than-normal rates of death during the pandemic, the excess mortality of renters threatened with eviction was ten times higher than that of the general population.'
listSummary: 'While many groups experienced higher-than-normal rates of death during the pandemic, the excess mortality of renters threatened with eviction was ten times higher than that of the general population.'
scripts:
  - charts
---
<span class="dropcap green">A</span>merican death rates rose significantly during the COVID-19 pandemic, but the toll could have been higher. Policymakers at all levels of government instituted programs—[many justified on public health grounds](https://evictionlab.org/assessing-state-eviction-prevention-covid-19/)—designed to restrict evictions, improve housing stability, and keep people safe during the health crisis. These policies [cut eviction filings over the first two years of the pandemic by more than half](https://evictionlab.org/covid-era-policies-cut-eviction-filings-by-more-than-half/). {{< extlink "Previous research has demonstrated" "https://pubmed.ncbi.nlm.nih.gov/34309643/" >}} that these measures also {{< extlink "limited the spread of COVID-19" "https://pubmed.ncbi.nlm.nih.gov/34459904/" >}}. 

Yet, despite these policies, evictions never fully stopped and hundreds of thousands of renters still did face this threat in the midst of the public health emergency. In an article published in the Journal of the American Medical Association, we show that the mortality rate for renters threatened with eviction doubled during the pandemic. Many groups experienced higher-than-normal rates of death during the pandemic—{{< extlink "often referred to as “excess mortality”" "https://www.cdc.gov/nchs/nvss/vsrr/covid19/excess_deaths.htm" >}}—but the experience of renters facing eviction stands out. Indeed, we show that tenants who were threatened with eviction experienced excess mortality that was ten times higher than that of the general population. 

[READ THE STUDY]
<!-- {{< researchpaperlink "Beyond Gentrification: Housing Loss, Poverty, and the Geography of Displacement" "https://doi.org/10.1093/sf/soad123" "Peter Hepburn, Renee Louis, and Matthew Desmond" "social-forces.jpg" "Open Access Preprint" "https://osf.io/preprints/socarxiv/pyfa8/" >}} -->

This research is based on our [groundbreaking collaboration with the U.S. Census Bureau](https://evictionlab.org/who-is-evicted-in-america/). For this study, we matched eviction filing data we collected during the pandemic through the  [Eviction Tracking System](https://evictionlab.org/eviction-tracking/) (ETS) with death records provided by the Census. This, plus our pre-pandemic eviction data, allowed us to calculate excess mortality: how much higher than normal death rates were following eviction filing during the pandemic. 

{{< pullquote "People who faced an eviction filing during the pandemic died at over twice the rate that was normal prior to the pandemic" >}}

For renters facing eviction, observed mortality rates during the pandemic were 238.6 per 100,000 person-months, 106% higher than what we would have expected based on pre-pandemic patterns (116.5; see Figure 1). In other words, people who faced an eviction filing during the pandemic died at over twice the rate that was normal prior to the pandemic. By comparison, pre-pandemic mortality among the general population was lower and it increased by less: excess mortality among the general population in these same locations was only 9% higher than expected. Put another way, excess mortality was ten times higher for renters threatened with eviction as compared to the general population.

Could this just be a result of higher risks in disadvantaged areas where eviction is common? To test that possibility, we compared our results for renters facing eviction with mortality estimates in these kinds of high-poverty neighborhoods with high eviction filing rates. In those areas, for people who weren’t threatened with eviction, mortality was 25% higher than expected during the pandemic. That’s well above rates in the general population, but still far lower than experienced by renters facing eviction.
<style>
  .arrow-chart__body .legend-desc {
    transform: translate(-5px, 22px) !important;
  }
  .chart-row text.name {
    transform: translate(-3px, 5px) !important;
  }
</style>
{{% arrow-chart
  id="arrows-fig"
  variant="lollipop"
  title="Figure 1. Mortality rates prior to and during the COVID-19 pandemic"
  data="./fig1.csv"
  xMinMobile="-51"
  xMax="131"
  rowHeight="14"
  scaleFactor="0.5"
  axisLabelText="Mortality (age-standardized, cumulative, per 100,000 person-months)"
  legendDecArrowText="Pre-pandemic"
  legendIncArrowText=" Pandemic"
  legendLabelText=""
  mobileCutoff="Infinity"
  nameCol="category"
  beforeCol="expected"
  afterCol="observed"
  isPercent=false
%}}

These results help to highlight the effects of pandemic-era anti-eviction policies in terms of lives saved. During the period of the pandemic that we examine in this study and across the subset of ETS locations that we can include here—home to about one in ten renter households in the U.S.—eviction filings were 44.7% lower than normal. We estimate that if eviction filings had remained at normal levels, more than 9,000 additional renters would likely have died just in these jurisdictions. By contrast, if we had eliminated eviction filings altogether, more than 8,000 lives could have been saved.

This study has several important limitations beyond just the restricted geographic scope. The death records we examine do not allow us to determine the cause of death, so we cannot determine how much excess mortality was directly attributable to COVID-19 relative to other possible causes. In addition, we only demonstrate excess mortality for those listed on eviction records. [As we have demonstrated in previous research](https://evictionlab.org/who-is-evicted-in-america/), these cases affect households that include a large number of people who are not listed in the cases, including seniors who may have been at particularly high risk of death during the pandemic. As such, we are likely underestimating the scale of excess mortality. 

{{< pullquote "If eviction filings had remained at normal levels, more than 9,000 additional renters would likely have died just in these jurisdictions... if we had eliminated eviction filings altogether, more than 8,000 lives could have been saved." >}}

Still, our findings highlight housing instability as a key social determinant of health. In previous research, [we have shown that high rent burden and eviction were linked to increased risk of death well before the COVID-19 pandemic](/rising-rents-and-evictions-linked-to-premature-death). But increases in mortality for threatened renters were particularly pronounced during the pandemic. This study underscores the importance of an equity perspective in documenting mortality from COVID-19. Those facing housing instability and eviction represent a particularly at-risk population. 

Our findings also inform emerging research on targeting resources in emergency situations, such as screening for housing instability and targeting healthcare resources for individuals and families experiencing such instability. Our results highlight the importance of monitoring health outcomes among marginalized populations and underscore the need for policymakers and researchers to take into consideration access to safe and stable housing when designing health interventions. Finally, this study contributes to a growing body of research demonstrating the public health benefits of policy interventions that reduced eviction filings during the COVID-19 pandemic.
