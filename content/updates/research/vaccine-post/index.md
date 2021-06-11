---
draft: false
childof: research
url: /vaccine/
contenttype: updates
contentcat: research
featured: true
in_index: true
title: "Neighborhoods with Highest Eviction Filing Rates have Lowest Levels of COVID-19 Vaccination"
date: 2021-06-08T00:46:40.089Z
postauthortitle: The Eviction Lab
listSummary: >-
  Residential mobility affects children’s education, generally for the worse. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.
socialDescription: Residential mobility affects children’s education, generally for the worse. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.
researchtype: elresearch
postauthorname: Olivia Jin, Emily Lemmerman, Peter Hepburn, and Matthew Desmond
twImage: eviction-filings-houston-isd2.png
authorpic: /images/bios/elab_thumb_sm.jpg
description: Residential mobility affects children’s education, generally for the worse. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.
fbImage: eviction-filings-houston-isd2.png
image:
scripts:
  - mapbox
  - charts
---

In the Lower Manhattan zip code 10006—home to One World Trade Center, the historic Trinity Church, and several luxury apartment buildings—almost 9 in 10 adults were fully vaccinated against COVID-19 by the start of June. Twelve miles north in the West Bronx (zip code 10457), a far different story played out, with just over 4 in 10 adults fully vaccinated. By contrast, those residents of the Bronx were far more likely to have received an eviction filing. Landlords filed 1,521 eviction cases in the West Bronx since March 15, 2020, compared to just 23 in the Financial District. Put differently: one in every 16 renter households in the West Bronx has received an eviction filing during the pandemic, compared to one in 58 in the Financial District. And the New York experience is not unique.

The COVID-19 pandemic caused widespread unemployment, putting millions of U.S. families at risk of losing their homes. Fearing that a spike in eviction and homelessness would accelerate disease spread, the CDC issued [a federal eviction moratorium](/six-months-cdc/). With that moratorium set to expire on June 30, we wanted to assess whether those at greatest risk of displacement were now protected against COVID-19 infection due to widespread vaccination. Where do vaccination rates stand in neighborhoods that have seen most eviction filings during the pandemic?


In all cities we find that zip codes with higher eviction filing rates were more likely to have lower vaccination rates. The differences between neighborhoods were not small. In Phoenix, for instance, the average neighborhood with a low eviction filing rate since the start of the pandemic (under 5%), had a vaccination rate of 56%. By contrast, the average zip code with a high eviction filing rate (above 15%) had a vaccination rate of just 35%.  

Patterns displayed in Figure 1 reflect racial disparities in both eviction risk and vaccine access. Black renters [routinely face higher risk of being evicted](/demographics-of-eviction/), a pattern that has [been maintained during the pandemic](https://evictionlab.org/pandemic-filing-demographics/). Black and Latinx people are also {{< extlink "much less likely to be vaccinated against COVID-19" "https://www.kff.org/coronavirus-covid-19/issue-brief/latest-data-on-covid-19-vaccinations-race-ethnicity/" >}}. {{< extlink "The racial gap in vaccinations is decreasing" "https://www.nytimes.com/interactive/2021/05/14/us/vaccine-race-gap.html?action=click&module=Spotlight&pgtype=Homepage" >}}, but Black and Latinx people still face challenges in getting access to vaccines. Figure 1 shows that the highest evicting zip codes in each city tend to be in communities of color, while most neighborhoods in the top-left of each panel—those with high vaccination rates and low eviction filing rates—tend to be majority-white. 

Figure 2 puts these disparities into spatial perspective, showing two maps of Houston: a side-by-side comparison of eviction filing rates and vaccination rates across the city. Eviction filing rates were around 10% in two zip codes near Greenspoint, but vaccination rates were below 30% (compared to the mean of 48% for all zip codes in Houston). The neighborhood is made up of around 9% white, 30% Black, and 56% Latinx residents. By contrast, relatively few evictions have been filed during the pandemic in and around Downtown Houston, an area with some of the highest vaccination rates in the city. Although not all neighborhoods with low vaccination rates have high eviction rates, there is a strong correlation between the two rates.



</div>
</div>
</div>

<div class="row mx-4">
<div class="col-6">

{{% mapbox
  id="houston_vax_1"
  data="/uploads/houston_vaccine_map2.csv"
  shapes="/uploads/houston-zips.json"
  column="evict_pct"
  join="ZCTA5CE10"
  name="ZCTA5CE10"
  format="percent"
  title="Eviction filing rates in Houston ZIP codes since 3/15/2020"
  legendTitle="Eviction filing rate (%)"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
%}}
</div>
<div class="col-6">
{{% mapbox
  id="houston_vax_2"
  data="/uploads/houston_vaccine_map2.csv"
  shapes="/uploads/houston-zips.json"
  column="unvax_pct"
  join="ZCTA5CE10"
  name="ZCTA5CE10"
  format="percent"
  title="Unvaccinated rates in Houston ZIP codes since 3/15/2020"
  legendTitle="Unvaccinated residents (%)"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
%}}
</div>
</div>

<div class="center-content-post updates-post pb-2">
<div class="page-content">
<div class="post-body">

In New York City, neighborhoods that are predominantly Black and Latinx have experienced not only {{< extlink "higher rates of COVID-19, but also higher eviction rates" "https://anhd.org/blog/220000-tenants-brink-and-counting" >}}. Our analysis suggests that the relationship between eviction filings and vaccination rates is just as strong, if not more so, and just as deeply linked with race.

A {{< extlink "combination of lack of access and vaccine hesitancy" "https://www.nytimes.com/2021/05/12/us/covid-vaccines-vulnerable.html" >}} drive disparities in vaccination rate. An estimated 30 million Americans who are willing to be vaccinated have not been; 28 million more say they probably or definitely will not be vaccinated for COVID-19. We also found geographic disparities both between and within cities. In the most vulnerable quarter of counties—defined by poverty rate, access to transit, and crowded housing—vaccination rates are as much as 7% lower than in the least vulnerable quarter of counties. These are the very same counties where previous Eviction Lab research has found a higher prevalence of eviction filings. 

This strong correlation between high eviction filing rates and low vaccination rates presents a case for intervention. {{<  extlink "Areas with low levels of immunization may be at particular risk for COVID-19 resurgence" "https://www.nytimes.com/live/2021/06/09/world/covid-vaccine-coronavirus-mask/covid-vaccine-rates-hospitalizations-cases" >}}, especially given the spread of more-contagious variants. A surge in eviction—which has been associated with COVID-19 {{< extlink "transmission" "https://www.medrxiv.org/content/10.1101/2020.10.27.20220897v2" >}}, {{< extlink "infection" "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3739576" >}}, and {{< extlink "mortality" "https://www.nber.org/papers/w28394" >}}—would only increase that risk. From a public health perspective, improving access to vaccination in these high-eviction neighborhoods should be a priority, especially in light of the looming end of the CDC eviction moratorium. Simultaneously, legal aid groups and housing advocacy organizations should be targeting their efforts to these spaces. Increasing access to legal aid, emergency rental assistance, and vaccines in these neighborhoods may be critical in heading off an upturn in COVID-19 infections.

The COVID-19 pandemic is far from over, and while vaccination access is improving, it’s still limited in disadvantaged communities that are at greatest risk for eviction. The CDC eviction moratorium is, for many tenants behind on rent, the last remaining protection from the threat of displacement. As its expiration nears, few protections stand in the way of a family losing their home, and potentially contracting a life-threatening virus. 


