---
draft: true
childof: research
url: gentrifications-role-in-the-eviction-crisis
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: Gentrification’s Role in the Eviction Crisis
date: 2023-09-22T16:20:51.942Z
postauthorname: Peter Hepburn, Renee Louis, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
fbImage: growing-risk-suburban-eviction-social.png
twImage: growing-risk-suburban-eviction-social.png
description: 'American suburbs have changed dramatically over the last several decades. Over time, they’ve become poorer, more diverse, and the site of a growing share of eviction cases.'
listSummary: 'American suburbs have changed dramatically over the last several decades. Over time, they’ve become poorer, more diverse, and the site of a growing share of eviction cases.'
scripts:
  - charts
  - grouped-bar-chart
---
<style>
  #fig3-mfr .chart__bar.mfr_hi {
    fill: var(--c1);
  }
  
  #fig3-mfr .chart__bar.mfr_20 {
    fill: var(--c2);
  }
  
</style>

<span class="dropcap green">F</span>or decades, one of the fiercest debates in sociology and urban studies has been about the nature of gentrification: does the arrival of new, better-educated, upwardly-mobile  neighbors inevitably result in the displacement of long-term residents? It has long been assumed that gentrification and displacement must go hand-in-hand. Indeed, when she first introduced the concept almost 60 years ago,  Ruth Glass wrote that “once this process of ‘gentrification’ starts in a district it goes on rapidly until all or most of the working class occupiers are displaced.”

But in the last twenty years, a number of researchers have questioned this relationship. While there’s a large body of qualitative research supporting a link between gentrification and displacement, recent work using large-scale quantitative data paints a more complex picture. When quantitative researchers went looking for signs that displacement was concentrated in these changing neighborhoods, they simply could not find it. But these researchers have also struggled to define “displacement” and to measure it, which is a major shortcoming.  

In a study published in the journal Social Forces, we use eviction—likely the best metric we have to track people getting directly displaced from their homes—to offer new insights into the relationship between gentrification and displacement. Analyzing patterns of gentrification and eviction in metropolitan areas across the country, we show that eviction rates were lower and decreasing faster in gentrifying areas, relative to comparable neighborhoods not undergoing gentrification. What we found should reshape how we think about the effects of gentrification and the concentration of displacement. 

[LINK TO PAPER]

In the study, we draw on the records of over six million eviction cases filed across 72 metropolitan areas in the U.S. between 2000 and 2016. In each of these metropolitan areas we categorize neighborhoods. First, those that were relatively well-off in 2000 we treat as ineligible to gentrify and label “high-SES” (high socioeconomic status). Second, those that were lower-SES in 2000 and saw a large increase in socioeconomic status of residents by 2016 we mark “gentrifying.” Third, the remainder—the poorer neighborhoods that didn’t see much socio-demographic change over time—we label “low-SES.” 

Our first step was to look at the association between gentrification and eviction at the metropolitan level. Based on how we measured gentrification, we found that about 13% of neighborhoods counted as gentrifying between 2000 and 2016. But some cities experienced much more change than others. For example, less than 8% of neighborhoods in Akron, OH gentrified over this period, compared to more than 20% of neighborhoods in Asheville, NC. It’s possible that the places with more gentrification might have experienced more eviction, but that’s not what we found. In fact, we found no correlation between these variables at all. 

Our second step was to move down to the neighborhood level, looking at where evictions happened within metropolitan areas. We found that most evictions occurred in low-SES neighborhoods that did not gentrify. Figure 1 displays the share of neighborhoods by gentrification status and the share of evictions between 2012 and 2016. Gentrifying neighborhoods comprised 13.2% of all neighborhoods and saw 11.7% of evictions. In comparison, low-income neighborhoods that did not gentrify comprised 45.7% of all neighborhoods but saw over 60% of evictions. Nine out of every ten evictions occurred outside of gentrifying neighborhoods, mostly in low-income areas.

{{% grouped-bar-chart 
  id="fig1" 
  saneLoading="true"
  titlePrefix="Figure 1. Share of neighborhoods and eviction judgments by gentrification classification (2012-2016)" 
  data="./fig1saneLoading.csv" 
  yTicks="5" 
  yMin="0"
  yFormat=".1%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}

We observed the same pattern when we examined eviction rates as well: Between 2012 and 2016, eviction rates were highest in low-SES neighborhoods. The typical low-SES neighborhood experienced an eviction rate of 3.53%, compared to 2.65% in the typical gentrifying neighborhood and 1.62% in the typical high-SES neighborhood. 

However, each metropolitan area experienced gentrification pressure differently, and we wanted to take that variation into account. In Figure 2 we show differences in eviction rates between gentrifying and low-SES neighborhoods for every metropolitan area in the sample. The typical gentrifying neighborhood had a lower eviction rate than the typical low-SES neighborhoods in 62 of the 72 metropolitan areas in our sample. There were some specific locations, like Las Vegas, where eviction rates were higher in gentrifying areas than in low-income communities, but in most cities it was the opposite.

{{% arrow-chart
  id="arrows-fig"
  variant="lollipop"
  title="Figure 2. Median eviction rate by neighborhood gentrification classification and metropolitan areas (2012-2016)"
  data="./fig2.csv"
  xMax="125"
  scaleFactor="10"
  axisLabelText="Median Eviction Rate"
  legendDecArrowText="Gentrifying"
  legendIncArrowText="Low-SES"
  legendLabelText=""
%}}

These analyses, though, just tell us about patterns at the end of the study period (near 2016). To investigate changes in eviction rates over time, we analyzed data from 38 of the metropolitan areas where we had eviction data from both the start and the end of the study timeframe (both near 2000 and near 2016). We found that gentrifying neighborhoods saw larger declines in eviction rates than otherwise-comparable low-SES tracts. That is, eviction rates fell more in the places that were gentrifying than in very similar neighborhoods that weren’t.

Still, this sort of analysis might miss sudden jumps in evictions during the gentrification process. We plotted out eviction rates for every year between 2000 and 2016 (see Figure 3). In 2000, eviction rates in low-SES neighborhoods that went on to gentrify and those that did not were quite similar. Those rates overlapped for much of the first five years, but were consistently lower in gentrifying tracts from 2007 onwards. 

<div class="figheader">Figure 3. Average (weighted) eviction rate over time by neighborhood gentrification classification</div>
<iframe class="visual" src="https://blog-fresh--eviction-lab-site.netlify.app/blog/gentrification2/"></iframe>
<div class="legend mb-3">
  <div class="legend-item legend-item--0">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Low-SES</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Gentrifying</div>
  </div>
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label eesti--bold">High-SES</div>
  </div>
</div>

We also searched for unexpected spikes in evictions within each neighborhood, relative to all other neighborhoods in the same metropolitan area. We found that eviction spikes did occur in gentrifying neighborhoods, but significantly less often than in low-SES neighborhoods. One in seven gentrifying neighborhoods experienced at least one such spike, compared to nearly one in four low-SES tracts.

To rule out the possibility that our findings were driven by the way that we were measuring gentrification, we re-ran all of our analyses using three other alternative measures. Regardless of the definition of gentrification that we used, we came to very similar conclusions: gentrifying neighborhoods account for a smaller share of evictions than non-gentrifying poor areas. Gentrifying neighborhoods have also experienced larger declines in eviction rates over time than comparable and non-gentrifying neighborhoods, and have not seen a disproportionate share of spikes in eviction.

All of this raises a key follow-up question: how can it be that these neighborhoods are changing so much without an increase in eviction? The received wisdom is that gentrification must force out long-term residents, but the data suggests another story. One of the key differences between gentrifying and low-SES neighborhoods is that the former see a much larger increase in the number of available housing units than the latter: gentrifying neighborhoods grow more. And those gentrifying neighborhoods that grow the most—where the supply of housing is less-constrained—see lower eviction rates than in slower-growth neighborhoods. By increasing supply, these neighborhoods can accommodate new arrivals without necessarily having to push out long-term residents through evictions. Indeed, using data from the Census Bureau, we find that the share of long-term renters in these gentrifying neighborhoods is just as high as in low-SES neighborhoods. 

[break]

Housing loss and residential churn are all too common in poor urban neighborhoods—and in turn are connected to other aspects of neighborhood life, like public safety and political participation. Displacement is not a passing trend in these communities, but rather a durable component of neighborhood disadvantage. Residents of these neighborhoods don’t need gentrification to be rent burdened and landlords don’t need gentrification to turn a profit. 

Rapid neighborhood change poses a serious challenge for our cities, and in some places it’s likely to be a bigger problem than in others. But focusing too much on gentrification as a driver of housing instability can lead us to overlook the extent to which that sort of instability is concentrated in poor neighborhoods away from the public’s attention.

This is especially true for majority Black neighborhoods. Previous research has demonstrated that these sorts of neighborhoods are less likely to gentrify, but we find that they account for a large share of evictions. In the metropolitan areas we studied, one in sixteen renter households was evicted each year in majority-Black neighborhoods, compared to one in thirty-eight renter households in gentrifying neighborhoods. Rather than think of eviction as a byproduct of gentrification, it’s more productive to understand it as a deeply racialized phenomenon, disproportionately concentrated in segregated Black communities.

It’s important to acknowledge that eviction is only one type of displacement, and forms of displacement other than eviction might be happening in gentrifying neighborhoods. Still, gentrification occurred in only about one in eight neighborhoods during this time period. Even if gentrification definitely caused some forms of displacement, it would be hard to argue that it is a leading cause of forced moves. 

This study highlights the need for more research that documents the geography, causes, and consequences of urban displacement. This includes addressing fundamental unanswered questions: Why did rents in low-SES neighborhoods accelerate at such a fast pace? Are evictions diffuse across neighborhoods or concentrated in specific blocks or buildings? Where do people go after being displaced from poor neighborhoods? How does residential instability affect daily life in communities? Addressing questions like these is essential to understanding housing and neighborhood dynamics for most low-income families in the United States.
 
From a policy perspective, this study supports a push to direct resources like rental assistance and legal aid to the areas with most need. Our response to the eviction crisis should be driven by data that allow us to target the neighborhoods—or even the buildings—at greatest risk. In previous work, we’ve shown how this includes places that we don’t usually worry about, like suburbs. This study helps us understand how our preconceptions about gentrification and displacement should be checked. Generally, it’s the poor neighborhoods that aren’t seeing signs of improvement that need the most help.
