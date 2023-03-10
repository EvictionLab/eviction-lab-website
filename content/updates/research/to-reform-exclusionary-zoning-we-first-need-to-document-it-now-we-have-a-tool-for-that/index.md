---
draft: true
childof: research
url: zoning-restrictiveness-index
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: To reform exclusionary zoning, we first need to document it. Now we have
  a tool for that.
date: 2023-03-09T20:04:56.565Z
postauthorname: Matt Mleczko
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
fbImage: growing-risk-suburban-eviction-social.png
twImage: growing-risk-suburban-eviction-social.png
description: 'The U.S. needs more housing—lots of it. We have millions fewer housing units than we need, particularly affordable housing units. This shortfall has devastating impacts, especially for low-income renters.'
listSummary: 'The U.S. needs more housing—lots of it. We have millions fewer housing units than we need, particularly affordable housing units. This shortfall has devastating impacts, especially for low-income renters.'
scripts:
  - charts
  - mapbox
---
<span class="dropcap green">T</span>he U.S. needs more housing—lots of it. We have <a href="https://www.freddiemac.com/research/insight/20210507-housing-supply" target="_blank" rel="noreferrer noopener">millions fewer housing units than we need</a>, particularly affordable housing units. <a href="https://nlihc.org/gap" target="_blank" rel="noreferrer noopener">This shortfall has devastating impacts</a>, especially for low-income renters facing ever-greater challenges securing safe, affordable housing. Yet despite the glaring need, building to meet this demand is often infeasible—if not outright illegal—because of local land use and zoning laws. 

Consider the case of Fulshear, Texas, a small but growing municipality located on the western fringe of the Houston metro area. About one-fifth of the city is zoned as an “Estate Residential” district where developers can only build single-family detached homes on a minimum of two acres per lot. That restriction makes it impossible to develop multi-family properties, essentially banning affordable housing development in a substantial portion of the municipality. This is exclusionary zoning. 

Zoning is fundamental to the make-up of our communities and our neighborhoods, but understanding these regulations and how they vary within and between places is enormously challenging. In large part, that’s because we lack straightforward, nationwide data. There is no comprehensive database of U.S. zoning and land use policies. Researchers have conducted  a number of important surveys that begin to describe the landscape of exclusionary zoning, but these data miss much of the country (including places like Fulshear), are not regularly updated, and likely contain inaccuracies.  

To help solve this problem, we used publicly available zoning and land use information to build the National Zoning and Land Use Database (NZLUD).This process, which we describe in a new paper published in Urban Studies, involved downloading and processing the text of municipal codes containing zoning and land use policies. Rather than do this by hand, we used tools from computer science to automate the process. To make sure that these methods produced reliable results, we then replicated zoning and land use measures from previous studies for over 2,600 municipalities across the U.S., yielding very similar conclusions. 

READ OUR LATEST PAPER ON ZONING HERE

The NZLUD describes key elements of zoning codes and the limitations that municipalities establish on housing development. This includes previously available measures like minimum lot size and maximum permitted density, but also new items such as minimum parking requirements and maximum building height restrictions. We view the database as a living, evolving resource. We make our code and data <a href="https://github.com/mtmleczko/nzlud" target="_blank" rel="noreferrer noopener">publicly available</a> for anyone to access and build on, representing the most open-source method for zoning and land use data creation to date. 

{{< pullquote "Exclusionary zoning is more common than many have acknowledged, both across and within metro areas." >}}

In the article, we condense all of these land use policies into a single measure of exclusionary zoning: the Zoning Restrictiveness Index (ZRI). This allows us to compare the restrictiveness of policies across municipalities and metro areas. We find highly-restrictive zoning policies in some of the coastal metro areas you might expect—Washington DC, New York, Seattle—but also in rustbelt metro areas like Milwaukee and Detroit. This underscores that exclusionary zoning is more common than many have acknowledged, both across and within metro areas. 

<table class="blog-table table-responsive my-3" cellspacing="0" cellpadding="0">
<thead>
<tr>
<td style="background-color: #fbf6f3;" class="blog-table__text subhead">Rank</td>
<td style="background-color: #fbf6f3;" class="blog-table__text subhead">Metropolitan area	Zoning</td>
<td style="background-color: #fbf6f3;" class="blog-table__text subhead">Restrictiveness Index score</td>
</tr>
</thead>
<tbody>

<tr>

<td>1</td>
<td>Washington-Arlington-Alexandria, DC-VA-MD-WV</td>
<td>2.05</td>
</tr>
<tr>
<td>2</td>
<td>New York-Northern New Jersey-Long Island, NY-NJ-PA</td>
<td>2.01</td>
</tr>
<tr>
<td>3</td>
<td>Providence-New Bedford-Fall River, RI-MA</td>
<td>1.81</td>
</tr>

<tr>
<td>4</td>
<td>Seattle-Tacoma-Bellevue, WA</td>
<td>1.6</td>
</tr>
<tr>

<td>5</td>
<td>Tampa-St. Petersburg-Clearwater, FL</td>
<td>1.44</td>
</tr>
<tr>

<td>6</td>
<td>Milwaukee-Waukesha-West Allis, WI</td>
<td>1.27</td>
</tr>
<tr>

<td>7</td>
<td>Miami-Fort Lauderdale-Pompano Beach, FL</td>
<td>1.2</td>
</tr>
<tr>

<td>8</td>
<td>Detroit-Warren-Livonia, MI</td>
<td>1.14</td>
</tr>
<tr>

<td>9</td>
<td>Boston-Cambridge-Quincy, MA-NH</td>
<td>1.14</td>
</tr>
<tr>

<td>10</td>
<td>Springfield, MA</td>
<td>1.01</td>
</tr>
<tr>

</tr>
</tbody>
</table>
</div>

We not only replicate zoning and land use measures for municipalities included in prior studies, but also go a step further, collecting and coding data on a host of cities where we haven’t had any information previously. For instance, prior zoning data cover only 38% of the San Francisco metro area and a mere 16% of the Houston metro area. Using our methods, we downloaded and created zoning data for 100% of the San Francisco metro area and 70% of the Houston metro area. Equipped with those data, we can much more confidently draw conclusions about zoning and land use policies in these areas. In doing so, we can  demonstrate how much more restrictive the average municipality in the San Francisco metro area is compared to one in the Houston metro area, but also that exclusionary municipalities exist within the Houston metro as well. It’s only with these more comprehensive data, for example, that we’re able to identify Fulshear and understand it as a pocket of exclusionary zoning in the otherwise-permissive Houston metro area. 

</div>
</div>
</div>
<div class="row mx-4">

  <div class="col-12">
    <div class="figheader px-0 px-md-3 mt-0 mb-1">
      Figure 2: A comparison of the ZRI (all measures) values in two different MSAs
    </div>
  </div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 px-md-2">
    {{% mapbox
      id="cali-map"
      data="./ZRI_full.csv"
      shapes="./ca_cities.json"
      column="quint"
      join="NAMEID"
      name="NAME"
      format="integer"
      title="San-Francisco-Oakland-Fremont MSA"
      gradientType="discrete"
      colors="#434878;#c1c5ea;#d5d5d5;#e99c7e;#e24000"
    %}}
  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 px-md-2">
    {{% mapbox
      id="tex-map"
      data="./zri_tx.csv"
      shapes="./tx_cities.json"
      column="quint"
      join="NAMEID"
      name="NAME"
      format="integer"
      title="Houston-Sugar Land-Baytown MSA"
      gradientType="discrete"
      colors="green;#434878;#c1c5ea;#e8dce8;#e99c7e;#e24000"
    %}}
  </div>

  <div class="col-12 mt-2 d-flex justify-content-center px-0">
    {{< inlinesvg svg="content/updates/research/to-reform-exclusionary-zoning-we-first-need-to-document-it-now-we-have-a-tool-for-that/quintiles-legend.svg"  >}}
  </div>

</div>
<div class="center-content-post updates-post pb-2">
<div class="page-content pt-4 pt-md-0">
<div class="post-body pt-lg-3">
  
Accurate and up-to-date zoning and land use information is critical both in working toward reform and for enforcing fair housing compliance. For example, facing exclusionary zoning in the 1970s, members of the Southern Burlington County NAACP sued Mount Laurel, NJ for its refusal to allow construction of multi-family housing. This group, led by civil rights activist Ethel Lawrence, eventually prevailed in court, leading to the landmark Mount Laurel Doctrine, which held that New Jersey municipalities had an affirmative obligation to adopt zoning and land use laws that ensured the development of their fair share of regional affordable housing needs. Enforcing the doctrine, however, has proved challenging, in no small part because it isn’t always clear what regulations exist. 

Access to clear and accurate zoning and land use data can assist these efforts. It can provide reform-minded citizens and advocates the information necessary to target their efforts by identifying municipalities that are employing particularly exclusionary policies. This is an important step along the way to ensuring that our housing policies promote housing affordability and opportunity for all. 

Researchers also need timely, detailed, and accurate information to document not only which zoning policies cause higher housing prices or lock in segregation, but also to assess the impact of burgeoning zoning reform efforts underway in <a href="https://www.nytimes.com/2021/08/26/business/california-duplex-senate-bill-9.html?referringSource=articleShare" target="_blank" rel="noreferrer noopener">California</a> and <a href="https://www.planetizen.com/features/117584-four-low-hanging-fruit-zoning-reforms" target="_blank" rel="noreferrer noopener">elsewhere</a>. We believe that our data and code can promote this goal and complement <a href="https://www.zoningatlas.org/" target="_blank" rel="noreferrer noopener">similar exciting efforts</a>, helping researchers to access and establish longitudinal, nationwide zoning and land use data moving forward.

<div class="footnotes">
<ol>
<li> See the paper and its online supplementary materials for more of the technical details.
</li>
<li>The municipalities in the Houston metro area that we downloaded represent 99% of the Houston metro area population and 95% of its land area.
</li>
<li> For instance, see <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3792544" target="_blank" rel="noreferrer noopener">Bronin, 2022</a>; <a href="https://drive.google.com/file/d/1Dd0KKH7oS1-mxNVAOblRTj-rmnX0wI0D/view" target="_blank" rel="noreferrer noopener">Sahn, 2022</a>; <a href="https://brendanshanks.com/wp-content/uploads/shanks_jmp.pdf" target="_blank" rel="noreferrer noopener">Shanks, 2022</a>; <a href="https://static1.squarespace.com/static/6160e89a75cba2217fc14866/t/61a3f4ea1898562e22cf38d8/1638135020614/Jaehee_Song_JMP_share.pdf" target="_blank" rel="noreferrer noopener">Song, 2021</a>; <a href="https://greaterdc.urban.org/blog/we-need-better-zoning-data-data-science-can-help" target="_blank" rel="noreferrer noopener">Tyagi and MacDonald, 2019</a></li>
</ol>
</div>
