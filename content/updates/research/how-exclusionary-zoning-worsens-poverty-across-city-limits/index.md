---
draft: true
childof: research
url: /how-exclusionary-zoning-worsens-poverty-across-city-limits/
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "How exclusionary zoning worsens poverty across city limits"
date: 2026-03-06T15:28:51.756Z
postauthorname: Matt Mleczko
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: "lorem ipsum "
listSummary: "lorem ipsum "
scripts:
  - charts
  - mapbox
socialDescription: "lorem ipsum "
twImage: era-blog-se-map.png
fbImage: era-blog-se-map.png
image: era-blog-se-map.png
---

<style>
    @media(max-width: 768px) {

      table {
        margin-left: -42px !important;
      margin-right: -42px !important;
      min-width: calc(100% + 84px) !important;
      }
    }
    table th {
      border: 2px solid #efefef;
    }
    table th span {
      font-family: GT Eesti Display, sans-serif;
      text-transform: none;
      font-weight: 400;
      transform: scale(0.8);
    }
    .table.table--text tbody td:first-child {
      font-family: Akkurat-Regular, sans-serif;
      /* text-transform: none; */
    }
    /* table td {
    width: unset !important;
    } */
    /* table td.numeric {
      font-family: "Gotham A", "Gotham B", sans-serif;
      font-weight: 400;
    } */
     .county-comparison .chart,
  .county-comparison .visual {
    width: 100%;
    margin: 0;
  }
  .county-comparison h3 {
    font-family: 'Akkurat-Bold' !important;
    font-size: 16px !important;
    letter-spacing: .1px !important;
    color: #5a5a5a !important;
    margin: 24px 0 8px !important;
  }
</style>

<span class="dropcap green">Z</span>oning regulations govern virtually everything about development in our communities. If you want to build a new building, zoning codes determine how large it can be, how many parking units it has to include, and even how far it must be set back from the street. During the last decade, there has been growing recognition that exclusionary zoning laws that make it harder to build affordable housing are playing a major role in the national housing shortage, the rising cost of housing, and the segregation we see in our cities.

Most conversations about exclusionary zoning focus on how it blocks low-income residents from sought-after communities. In a new article published in Demography, I go further, showing how exclusionary zoning is even more consequential: It can both lock people out of opportunity and put additional strain on already high-poverty communities next door. 

{{< researchpaperlink "The Cumulative Exposure to Exclusionary Zoning in Impoverished Neighborhoods " "https://read.dukeupress.edu/demography/article-abstract/doi/10.1215/00703370-12468457/407848/The-Cumulative-Exposure-to-Exclusionary-Zoning-in" "Matt Mleczko" "cover.png" >}}

In this research, I compare impoverished communities in metropolitan regions with exclusionary zoning policies to similarly impoverished communities in regions with less-strict zoning regulations. Imagine two similar, high-poverty neighborhoods. One neighborhood is subject to exclusionary zoning, either in its own municipality or in the municipalities that surround it. The other is in a place with less restrictive zoning regulations, allowing for easier development. Both neighborhoods have high poverty rates, but do these differences in zoning lead to higher housing costs and more housing precarity in the first sort of neighborhood than in the second?

The first step in answering this question was measuring zoning and changes in regulations over time. I combine the {{< smartlink "National Zoning and Land Use Database" "https://evictionlab.org/national-zoning-and-land-use-database/" >}} and earlier zoning and land use survey data so that I have land use information in two periods: from 2003-2006 and again from 2018-2022. For these same time periods, I construct measures of material hardship in poor neighborhoods, including rent, property values, households experiencing rent burden, and availability of low-cost housing. 

The data allow me to identify metro areas with highly restrictive zoning ordinances like Trenton-Princeton and Milwaukee, both displayed below. I also find metro areas with much less restrictive regulations, places like San Antonio and Pittsburgh, also displayed below. These findings alone are noteworthy because metro areas like Milwaukee are typically not thought of as highly-restrictive metro areas relative to much higher cost metro areas like San Francisco and New York. Moreover, even relatively less restrictive regions like Pittsburgh still feature pockets of restrictive zoning. This research helps illustrate that exclusionary zoning is more prevalent than many realize. 


</div>
</div>
</div>

<div class="row mx-4 county-comparison">
<div class="col-12">
<div class="figheader px-0 px-md-3 my-0">Figure 1. Metro areas with highly restrictive zoning ordinances</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 px-md-2">
{{% mapbox
  id="mapbox-prince"
  data="./princeton.csv"
  shapes="./princeton_shapes.json"
  column="zri_st_2022"
  join="GEOID_full"
  handleMissing="true"
  name="NAME.x"
  gradientType="diverging-symmetric"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="Trenton–Princeton MSA"
%}}
  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 px-md-2">
{{% mapbox
  id="mapbox-wauk"
  data="./milwaukee.csv"
  shapes="./milwaukee_shapes.json"
  column="zri_st_2022"
  join="GEOID_full"
  handleMissing="true"
  name="NAME.x"
  gradientType="diverging-symmetric"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="Milwaukee–Waukesha MSA"
%}}
  </div>

<br />
<br />
<br />

<div class="col-12 mt-4">
<div class="figheader px-0 px-md-3 my-0">Figure 2. Metro areas with less restrictive zoning ordinances</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 px-md-2">

{{% mapbox
  id="mapbox-santo"
  data="./san_antonio.csv"
  shapes="./san_antonio_shapes.json"
  column="zri_st_2022"
  join="GEOID_full"
  handleMissing="true"
  name="NAME.x"
  gradientType="diverging-symmetric"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="San Antonio–New Braunfels MSA"
%}}

  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 px-md-2">

{{% mapbox
  id="mapbox-pitts"
  data="./pittsburgh.csv"
  shapes="./pittsburgh_shapes.json"
  column="zri_st_2022"
  join="GEOID_full"
  handleMissing="true"
  name="NAME.x"
  gradientType="diverging-symmetric"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="Pittsburgh MSA"
%}} 

  </div>
  </div>

<div class="center-content-post updates-post research-post pb-2">
<div class="page-content pt-8 pt-md-0">
<div class="post-body pt-lg-3">

I compare impoverished neighborhoods between more- and less-restrictive municipalities and metro areas to determine whether exclusionary zoning explains differences in housing prices, rent burden, and the availability of low-cost housing. 

Restrictive zoning means higher costs for poor families. Each decade of exclusionary zoning is associated with an average increase in monthly median rent of $24-27 in impoverished neighborhoods. Similarly, each decade of exclusionary zoning is associated with an estimated one percentage point increase in the share of renting households experiencing rent burden in these neighborhoods. 
While these may at first appear to be relatively small numbers, they add up. In areas that have had above-average levels of exclusionary zoning for the past two decades, this amounts to $50 more in rent each month and $600 more in rent each year since 2000. These are additional costs on top of all the other factors driving housing to be more expensive everywhere. This means that residents in the most disadvantaged neighborhoods are paying more for arbitrary zoning rules, oftentimes implemented in other, more affluent jurisdictions. 

{{< pullquote "Residents in the most disadvantaged neighborhoods are paying more for arbitrary zoning rules, oftentimes implemented in other, more affluent jurisdictions. " >}}

Property values also increase faster in poor neighborhoods in more-restrictively zoned areas, pushing properties out of reach for low-income households. Results indicate that each decade of restrictive zoning is associated with an average decline of 1-2 percentage points in the stock of housing affordable to households with below-median earnings. In the New York City metro area, this corresponds to an estimated loss of just over 137,000 low-cost apartments over two decades simply due to exclusionary zoning. 


<div class="figheader mb-0">Table 1. Notable results from MSM analyses</div>

<div>
<table class="table blog-table table--text table-responsive">
   <thead>
   <tr>
    <th>Measure</th>
    <th>Level</th>
    <th>Poverty/income level</th>
    <th>Per-decade result <span>Difference between neighborhoods experiencing high and low levels of exclusionary zoning</span></th>
    <th>95% confidence interval </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Monthly median gross rent</td>
    <td>Metro</td>
    <td>Above-average (poverty rate > 0.13)</td>
    <td>$24 </td>
    <td>($8.81, $50.96)</td>
  </tr>
  <tr>
    <td>Monthly median gross rent</td>
    <td>Municipal</td>
    <td>Above-average (poverty rate > 0.13)</td>
    <td>$27</td>
    <td></td>
  </tr>
  <tr>
    <td>Share of renting households experiencing rent burden</td>
    <td>Municipal </td>
    <td>Above-average (poverty rate > 0.13)</td>
    <td>1 percentage point</td>
    <td></td>
  </tr>
  <tr>
    <td>Median property value</td>
    <td>Metro</td>
    <td>Above-average (poverty rate > 0.13)</td>
    <td>$16,000</td>
    <td>($6,429.86, $26,406.69)</td>
  </tr>
  <tr>
    <td>Median property value</td>
    <td>Municipal </td>
    <td>Above-average (poverty rate > 0.13)</td>
    <td>$22,000</td>
    <td></td>
  </tr>
  <tr>
    <td>Median property value</td>
    <td>Municipal </td>
    <td>High-poverty (poverty rate > 0.4)</td>
    <td>$25,000</td>
    <td></td>
  </tr>
  <tr>
    <td>Share of housing units affordable to households earning below-median incomes</td>
    <td>Metro</td>
    <td>Housing units affordable for very low-income (50% of area median income)</td>
    <td>1 percentage point</td>
    <td>(-0.024, -0.0004)</td>
  </tr>
  
  <tr>
    <td>Share of housing units affordable to households earning below-median incomes</td>
    <td>Metro</td>
    <td>Housing units affordable for low-income (80% of area median income)</td>
    <td>2 percentage points</td>
    <td>(-0.033, -0.005) </td>
  </tr>
  
  </tbody>
</table>
</div>

<br>

Poor neighborhoods within a region with more restrictive zoning laws experience higher average housing costs and more rent burden relative to similarly poor neighborhoods in areas with less restrictive zoning. In other words, exclusionary zoning exacerbates poverty on the margins. 

These costs for poor neighborhoods are often incurred due to policies determined in other communities, which raises important fair housing questions. After all, it’s one thing if residents of an affluent town or neighborhood decide to block an apartment building, excluding middle or low-income tenants from the area. It’s quite another when those policies negatively impact residents in other communities. That’s exactly what I’ve shown here: Zoning laws can have unanticipated spillover effects, making people poorer in communities beyond the city or town in which they’re enacted. 

{{< pullquote "It’s one thing if residents of an affluent town or neighborhood decide to block an apartment building, excluding middle or low-income tenants from the area. It’s quite another when those policies negatively impact residents in other communities." >}}

How do we solve this kind of a problem? There are important efforts underway to reform our unfair zoning and land use laws, but few address this issue. This is because zoning rules are typically set—and then reformed—town by town, city by city. We need a comprehensive solution that would establish a more sensible balance of zoning authority between municipal, regional, and state governments to overcome the incentives to implement and maintain exclusionary zoning. After all, if our housing markets are metropolitan in nature, then our development policies should be as well.

Such reform may seem like a daunting political task, but we have examples of it working in places like New Jersey. There, the state legislature recently strengthened its commitment to fair and affordable housing by streamlining its fair share housing program, ushered in by the  {{< smartlink "Mount Laurel Doctrine" "https://www.fairsharehousing.org/wp-content/uploads/2023/01/Mount-Laurel-Factsheet.pdf" >}} over forty years ago. After decades of delay and political grandstanding, New Jersey’s fair share housing program now reflects  {{< smartlink "record levels" "https://www.insidernj.com/press-release/new-affordable-housing-law-delivers-results-nearly-all-nj-towns-resolve-challenges-by-dec-31-deadline/" >}} of participation among municipalities statewide. A related effort—the  {{< smartlink "Great Homes and Neighborhoods for All (GHNA) initiative" "https://www.njfuture.org/collaboratives/great-homes-and-neighborhoods-for-all/" >}} has helped lead a coordinated approach among a diverse array of stakeholders to achieve more equitable housing outcomes across the state, which includes sensible zoning and land use reforms. (Disclaimer: I serve on the steering committee of the GHNA initiative.)

{{< pullquote "After all, if our housing markets are metropolitan in nature, then our development policies should be as well." >}}

Housing advocates sometimes express an ambivalence about exclusionary zoning, arguing that it is really only an issue in high-demand places or in the context of opening up exclusionary communities to multifamily housing. As I show here, exclusionary zoning is widely prevalent and has spillover effects that impact entire metropolitan areas, including impoverished neighborhoods. Addressing our restrictive zoning laws should be a priority for anyone interested in reducing poverty. The longer we maintain exclusionary zoning, the longer impoverished communities will struggle with precarious and unaffordable housing through no fault of their own. 
