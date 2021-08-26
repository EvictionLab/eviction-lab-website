---
draft: false
scripts:
  - mapbox
  - charts
childof: research
url: /filing-and-vaccination-rates/
contenttype: updates
contentcat: research
featured: true
in_index: true
title: Neighborhoods with Highest Eviction Filing Rates have Lowest Levels of
  COVID-19 Vaccination
date: 2021-06-11T00:46:40.089Z
postauthorname: Olivia Jin, Emily Lemmerman, Peter Hepburn, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
image: null
description: Where do vaccination rates stand in neighborhoods that have seen
  most eviction filings during the pandemic? We found a pattern of higher
  eviction filing rates in neighborhoods with lower vaccination rates in every
  jurisdiction for which we were able to locate data.
listSummary: Where do vaccination rates stand in neighborhoods that have seen
  most eviction filings during the pandemic? We found a pattern of higher
  eviction filing rates in neighborhoods with lower vaccination rates in every
  jurisdiction for which we were able to locate data.
socialDescription: We found a pattern of higher eviction filing rates in
  neighborhoods with lower vaccination rates in every jurisdiction for which we
  were able to locate data.
researchtype: elresearch
twImage: vaccine-filing-rates-social.png
collection: true
fbImage: vaccine-filing-rates-social.png
---
In the Lower Manhattan zip code 10006—home to One World Trade Center, the historic Trinity Church, and several luxury apartment buildings—almost 9 in 10 adults were fully vaccinated against COVID-19 by the start of June. Twelve miles north in the West Bronx (zip code 10457), a far different story played out, with just over 4 in 10 adults fully vaccinated. By contrast, those residents of the Bronx were far more likely to have received an eviction filing. Landlords filed 1,521 eviction cases in the West Bronx since March 15, 2020, compared to just 23 in the Financial District. Put differently: one in every 16 renter households in the West Bronx has received an eviction filing during the pandemic, compared to one in 58 in the Financial District. And the New York experience is not unique.

{{< scaleimg_page img="ny-photo-quadrants.jpg" scale="124" title="" caption="Left: Lower Manhattan. Right: The West Bronx." alt="Skylines of Lower Manhattan and the West Bronx" >}}

The COVID-19 pandemic caused widespread unemployment, putting millions of U.S. families at risk of losing their homes. Fearing that a spike in eviction and homelessness would accelerate disease spread, the CDC issued [a federal eviction moratorium](/six-months-cdc/). With that moratorium set to expire on June 30, we wanted to assess whether those at greatest risk of displacement were now protected against COVID-19 infection due to widespread vaccination. Where do vaccination rates stand in neighborhoods that have seen most eviction filings during the pandemic?

We found a pattern of higher eviction filing rates in neighborhoods with lower vaccination rates in every jurisdiction for which we were able to locate data. COVID-19 vaccines do not seem to be reaching those in high-eviction neighborhoods. Our findings suggest that those most at risk of being evicted are still at high risk of contracting and passing the virus. 

To analyze the relationship between vaccination rates and eviction risk, we brought together vaccine distribution data collected from state and local governments{{< sup 1 >}} and eviction filing data from the [Eviction Tracking System](/eviction-tracking). We identified nine cities with sufficient data: Austin, Dallas, Fort Worth, Houston, Indianapolis, Philadelphia, Phoenix, New York, and South Bend. Figure 1 depicts the relationship between eviction filing rates and the rate of fully vaccinated adult residents, by zip code, in each city. Each zip code is shaded according to its racial majority. We superimpose trend lines for each city, showing the linear relationship between the two rates.

<div class="d-none d-md-block">
{{< scaleimg_page img="vax-filings-charts-lg2.svg" scale="135" title="Figure 1: Eviction Filings vs. Vaccination by Zip Code" caption="" alt="Charts showing relationship of eviction filings and vaccinations in nine U.S. cities"  >}}
</div>

<div class="d-block d-md-none">
{{< scaleimg_page img="vax-filings-charts-sm2.svg" scale="100" title="Figure 1: Eviction Filings vs. Vaccination by Zip Code" caption="" alt="Charts showing relationship of eviction filings and vaccinations in nine U.S. cities" >}}
</div>

In all cities we find that zip codes with higher eviction filing rates were more likely to have lower vaccination rates. The differences between neighborhoods were not small. In Phoenix, for instance, the average neighborhood with a low eviction filing rate since the start of the pandemic (under 5%), had a vaccination rate of 56%. By contrast, the average zip code with a high eviction filing rate (above 15%) had a vaccination rate of just 35%.  

Patterns displayed in Figure 1 reflect racial disparities in both eviction risk and vaccine access. Black renters [routinely face higher risk of being evicted](/demographics-of-eviction/), a pattern that has [been maintained during the pandemic](https://evictionlab.org/pandemic-filing-demographics/). Black and Latinx people are also {{< extlink "much less likely to be vaccinated against COVID-19" "https://www.kff.org/coronavirus-covid-19/issue-brief/latest-data-on-covid-19-vaccinations-race-ethnicity/" >}}. {{< extlink "The racial gap in vaccinations is decreasing" "https://www.nytimes.com/interactive/2021/05/14/us/vaccine-race-gap.html?action=click&module=Spotlight&pgtype=Homepage" >}}, but Black and Latinx people still face challenges in getting access to vaccines. Figure 1 shows that the highest evicting zip codes in each city tend to be in communities of color, while most neighborhoods in the top-left of each panel—those with high vaccination rates and low eviction filing rates—tend to be majority-white. 

{{< pullquote "Those most at risk of being evicted are still at high risk of contracting and passing the virus." >}}

Figure 2 puts these disparities into spatial perspective, showing two maps of Houston: a side-by-side comparison of eviction filing rates and vaccination rates across the city. Eviction filing rates were around 10% in two zip codes near Greenspoint, but vaccination rates were below 30% (compared to the mean of 48% for all zip codes in Houston). The neighborhood is made up of around 9% white, 30% Black, and 56% Latinx residents. By contrast, relatively few evictions have been filed during the pandemic in and around Downtown Houston, an area with some of the highest vaccination rates in the city. Although not all neighborhoods with low vaccination rates have high eviction rates, there is a strong correlation between the two rates.

</div>
</div>
</div>

<div class="row mx-4">
<div class="col-12">
<div class="figheader mt-0 mt-md-2 mb-1">Figure 2: Maps of Houston with eviction filing rates and unvaccinated rates{{< sup 2 >}}</div>
</div>
<div class="col-12 col-lg-6 px-0 px-md-2">

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
  colors="rgba(241, 241, 241, 0.5);rgba(234, 187, 169, 0.51);#e99c7e;#e24000"
%}}

</div>
<div class="col-12 col-lg-6 px-0 px-md-2">
{{% mapbox
  id="houston_vax_2"
  data="/uploads/houston_vaccine_map2.csv"
  shapes="/uploads/houston-zips.json"
  column="unvax_pct"
  join="ZCTA5CE10"
  name="ZCTA5CE10"
  format="percent"
  title="Proportion of those not fully vaccinated in Houston"
  legendTitle="Unvaccinated rate (%)"
  colors="rgba(241, 241, 241, 0.5);rgba(234, 187, 169, 0.51);#e99c7e;#e24000"
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

<hr/>

We published an updated version of this analysis in the journal *Socius*. That piece is available, open-access, [here](https://journals.sagepub.com/doi/full/10.1177/23780231211040885).

{{< blogfootnotes

"We used vaccination data from the <a href='https://www.azdhs.gov/covid19/data/index.php#zipcode-vaccinations' target='_blank' rel='noreferrer noopener'>Arizona Department of Health Services</a>, the <a href='https://www.opendataphilly.org/dataset/covid-vaccinations' target='_blank' rel='noreferrer noopener'>City of Philadelphia</a>, the <a href='https://hub.mph.in.gov/dataset/covid-19-vaccinations-by-zip' target='_blank' rel='noreferrer noopener'>Indiana Department of Health</a>, the <a href='https://www1.nyc.gov/site/doh/covid/covid-19-data-vaccines.page' target='_blank' rel='noreferrer noopener'>New York City Department of Health and Mental Hygiene</a>, and the <a href='https://dshs.texas.gov/coronavirus/AdditionalData.aspx' target='_blank' rel='noreferrer noopener'>Texas Department of State Health Services</a>."

"Three zip code areas in Houston (77030, 77046, 77056) reported fully-vaccinated numbers that exceed the 5-year estimates of the population over the age of 15 from the 2019 ACS data. The unvaccinated rates for those zip code areas have been reported as 0% on the map." >}}

<div class="text-center" style="color:#6b6b6b"><i>Manhattan photo: {{< extlink "Marcus Lenk on Unsplash" "https://unsplash.com/@marcuslenk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" >}} </i></div>