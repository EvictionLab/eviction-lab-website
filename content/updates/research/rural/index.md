---
draft: true
childof: research
url: more-than-200000-rural-families-face-an-eviction-every-year
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: More than 200,000 rural families face an eviction every year
date: 2024-01-09T00:20:51.942Z
postauthorname: Juan Pablo Garnham
researchauthorname: Carl Gershenson and Matthew Desmond
image: rv-park2.jpg
fbImage: rv-park.jpg
twImage: rv-park.jpg
description: 'Most research to date has focused on the impact of eviction on cities and suburbs. Our new paper documents the many families in rural counties facing eviction every year, a crisis disproportionately affecting Black communities.'
listSummary: 'Most research to date has focused on the impact of eviction on cities and suburbs. Our new paper documents the many families in rural counties facing eviction every year, a crisis disproportionately affecting Black communities.'
scripts:
  - charts
---

<style>
  .stacked {
    display: block;
  }
  .side-by-side {
    display: none;
  }
  .visual {
    margin-bottom: 1rem !important;
  }
  @media(min-width: 992px) {
    .visual {
      margin-bottom: 3rem !important;
    }
  }
  @media(min-width: 1200px) {
    .stacked {
      display: none;
    }
    .side-by-side {
      display: flex;
      /* charts will overflow (whitespace of the 3rd chart's margin-right), cut it off */
      overflow: hidden;
      width: 180%;
      margin-left: -40%; /* -(180 - 100)/2 */
    }
    .side-by-side .visual {
      margin: 0;
      width: 100%;
    }
    .side-by-side .vis-wrapper {
      /*
        redistribute the -40px margin on the 2nd chart and the 50px of empty margin-right
        on the 3rd chart** among the widths of the 3 charts. since this will exceed the
        width of the container, we set overflow: hidden on side-by-side above.
      */
      flex: 0 0 calc(100%/3 + (40px + 50px)/3);
      flex-wrap: nowrap;
    }
    .side-by-side .vis-wrapper:nth-of-type(1) {
      z-index: 1;
    }
    .side-by-side .vis-wrapper:nth-of-type(2) {
      /* 
        remove some of the empty margin on the middle chart**
        **charts all have equivalent total horiz margin to keep charts equal width despite axis
      */
      margin-left: -20px;
      margin-right: -20px;
    }
  }
</style>

<span class="dropcap green">I</span>n rural Vance County, North Carolina, housing is cheap compared to the big cities nearby like Raleigh and Durham. Most people own their homes, but the situation can be dire for those who don’t: rents may be low, but wages are lower. For these and other reasons, Vance County has an eviction filing rate of over 20%. This isn’t an isolated example: some of the highest rural eviction rates are seen in the southern United States, places like South Carolina (17.8%), Mississippi (11.1%), Georgia (10.3%) and North Carolina (7.3%). These rates are higher than in large cities like Chicago, Los Angeles, and New York City.

Evictions are commonplace in the United States, but most research to date has focused on the impact of evictions in cities and [suburbs](https://evictionlab.org/growing-risk-of-suburban-eviction/). Rural evictions are a hidden feature of our national housing crisis. In a paper published in Rural Sociology [LINK], we document for the first time the hundreds of thousands of families who face evictions every year in rural counties and show how this crisis disproportionately affects Black communities. This situation is likely to worsen as development pressures push into rural communities while USDA affordable housing programs expire.

LINK TO THE PAPER/JOURNAL

Approximately 17 million people rented homes in rural America in 2018. As in the rest of the country, these tenants are burdened by unaffordable rents and a shortage of rental housing. Using the [Eviction Lab’s national database](http://www.evictionlab.org/map), we found that approximately 220,000 evictions were filed against rural renters each year between 2000 to 2018. The annual eviction filing rate in rural counties was 4.3%, lower than the national average and the 9.7% rate in urban counties, but {{< extlink "still higher than what we see in other high-income countries" "https://www.oecd.org/els/family/HC3-3-Evictions.pdf" >}}. And while urban eviction rates fell over this period, rural rates remained flat.

<div class="figheader">Figure 1. Urban vs rural eviction filing rate by year</div>
<iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-viz"></iframe>

Evictions can have a series of negative effects on tenants and their families: they can {{< extlink "deepen financial hardship" "https://www.nber.org/papers/w30382" >}}, {{< extlink "harm physical and mental health" "https://www.tandfonline.com/doi/abs/10.1080/10511482.2020.1812690" >}}, {{< extlink "make it more difficult to find a job" "https://academic.oup.com/socpro/article-abstract/63/1/46/1844105?redirectedFrom=fulltext" >}}, and disrupt the education of children. Evictions are even {{< extlink "associated with early mortality" "https://www.sciencedirect.com/science/article/pii/S0277953623007554" >}}. Reducing evictions is one way rural communities could combat economic and demographic decline trends. 

Forced displacement does not impact every community equally, and race is a big part of the explanation. In North Carolina, there were twenty rural counties with eviction filing rates under 4%, while in other places like Vance and Wilson Counties, it was over 20%—nearly three times higher than the national average. We found that the size of the Black population was among the strongest predictors of differences in county-level eviction rates. Although more than half of rural eviction filings were against families with a white head of household, eviction filing rates were four times higher for Black households (5.5% versus 1.4%).

{{< pullquote "The size of the Black population was among the strongest predictors of differences in county-level eviction rates... eviction filing rates were four times higher for Black households." >}}
<!-- {{< pullquote "In nearly every rural county, Black renter households were overrepresented in eviction filings. In counties that are 20% Black, 50% of evictions are filed against Black households. In counties that are over 50% Black, around 75% of evictions are filed against Black households.." >}} -->

This plays out in part due to a history of denying Black residents ownership of productive farmland, which runs from before the founding of the United States through an incomplete Reconstruction. In the present day, Black landowners continue to lose land through sales forced by foreclosures and legal devices like heir property. This forces high levels of rentership on rural Black communities, opening the door to the creation of dual housing markets that mirror those in urban areas and play into modern segregation.

At the same time, our research also found eviction risk for Black renters was not just restricted to majority-Black counties. In nearly every rural county, Black renter households were overrepresented in eviction filings. In counties that are 20% Black, 50% of evictions are filed against Black households. In counties that are over 50% Black, around 75% of evictions are filed against Black households.

<div class="figheader">Figure 2. Share of eviction filings by demographic composition in rural counties</div>
<div class="stacked">
  <iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=black"></iframe>
  <iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=hispanic"></iframe>
  <iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=white"></iframe>
</div>
<div class="side-by-side">
  <div class="vis-wrapper"><iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=black&hideXAxis"></iframe></div>
  <div class="vis-wrapper"><iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=hispanic&hideYAxis"></iframe></div>
  <div class="vis-wrapper"><iframe class="visual" src="https://staging--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=white&hideXAxis&hideYAxis"></iframe></div>
</div>

We also found that counties with higher levels of rent burden—tenants paying large shares of their income toward rent—experienced higher rates of eviction filing. In fact, the most impoverished rural communities were not necessarily those with the highest eviction filing rates. Extremely isolated communities may have low eviction rates because of the sheer affordability of housing. But in places like Vance County, a quick 40-minute drive up the I-85 from Durham, housing costs tend to be higher relative to income and eviction filings were extremely common.

“​​Vance county is an economically depressed county. We used to have mills and some other manufacturing that went to Mexico or overseas, so we have a fair number of unemployed people,” said Jane King, co-chair of the board of directors of Community Partners of Hope, a men’s shelter in the area.

<!-- {{< pullquote "Counties with higher levels of rent burden—tenants paying large shares of their income toward rent—experienced higher rates of eviction filing." >}} -->
{{< pullquote "Across rural America, inequality in safe and stable housing is shaped by deep structural inequities, something that is especially clear in the rural areas of the Black Belt." >}}

Rural renters are four times more likely to be cost-burdened than rural homeowners, many of whom already fully own their homes. And rural residents also face higher utility and transportation costs than their urban counterparts, something that exacerbates the vulnerability of renters in the countryside. Social services and organizations like King’s are also less common in many of these communities, leaving tenants in need with few resources.

King explained that in her county, evictions happen quickly and finding a cheap place to rent can be close to impossible. “We just don’t have low-income housing… People end up going to homeless shelters, live with family or try to find a low-income area in a place like Wake Forest,” she said. But while locals struggle with rising rents, real estate in the area can look attractive to people fleeing even higher rents in North Carolina’s urban centers, which have been exploding in the last decade.

Across rural America, inequality in safe and stable housing is shaped by deep structural inequities, something that is especially clear in the rural areas of the Black Belt. Policymakers could directly address low rates of Black homeownership by pairing Federal Housing Administration loans with greater down payment assistance, {{< extlink "which one study suggests would increase Black homeownership rates by around 8 percentage points" "https://www.jchs.harvard.edu/research-areas/working-papers/how-much-can-downpayment-assistance-close-homeownership-gaps-black" >}}.

{{< pullquote "Strengthening programs dedicated to rural constituencies would save many rural renters from the high rent burdens that are associated with evictions." >}}

For members of the community who will remain renters, other options include strengthening landlord-tenant laws and promoting municipal or non-profit ownership of mobile home parks as an affordable and stable option. Direct investment in subsidized housing would perhaps go the farthest to reduce cost burdens and decrease the number of evictions in rural areas. 

The Low Income Housing Tax Credit (LIHTC) program is responsible for most affordable housing construction in rural communities, eclipsing programs dedicated to rural housing like the {{< extlink "USDA Section 515 and Section 538 programs" "https://www.nlihc.org/sites/default/files/2023-03/2023AG4-15_USDA-Rural-Rental-Housing-Programs.pdf" >}}. In fact, the pending expiration of affordable units supported by Section 515 threatens a substantial portion of the subsidized housing that currently exists. Strengthening these programs dedicated to rural constituencies would save many rural renters from the high rent burdens that are associated with evictions.

If local leaders want to save rural communities, addressing the dire shortage of affordable housing is a key step in stopping the demographic decline that so many of these communities are experiencing and opens up the possibility of progress on other challenges they will face in the coming decades.
