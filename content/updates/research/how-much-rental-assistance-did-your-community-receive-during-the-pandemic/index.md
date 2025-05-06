---
draft: true
listSummaryMaxChars: 250
childof: research
url: /pandemic-rental-assistance/
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: How Much Rental Assistance Did Your Community Receive During the Pandemic?
date: 2025-04-18T15:28:51.756Z
postauthorname: Grace Hartley, Jacob Haas, and Peter Hepburn
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: "Over the course of 2021 and 2022, the U.S. carried out an
  unprecedented experiment: we invested $46.55 billion to help Americans pay
  rent when they fell behind. Here we provide insight into how this money was
  distributed and the impact it had."
listSummary: "Over the course of 2021 and 2022, the U.S. carried out an
  unprecedented experiment: we invested $46.55 billion to help Americans pay
  rent when they fell behind. Here we provide insight into how this money was
  distributed and the impact it had."
scripts:
  - charts
  - mapbox
  - grouped-bar-chart
socialDescription: "Over the course of 2021 and 2022, the U.S. carried out an
  unprecedented experiment: we invested $46.55 billion to help Americans pay
  rent when they fell behind. Here we provide insight into how this money was
  distributed and the impact it had."
image: era-blog-se-map.png  
twImage: era-blog-se-map.png
fbImage: era-blog-se-map.png
---
<style>
  /* map tooltip */
  .visual__tooltip h1 {
    font-size: 14px;
    font-family: GT-Eesti-Display-Bold, sans-serif;
    text-transform: uppercase;
    letter-spacing: .07em;
    margin-bottom: 4px;
  }
  .visual__tooltip div {
    font-size: 12px;
    line-height: 1.5;
  }

  .county-comparison .chart {
    width: 100%;
    margin: 0;
  }
  .county-comparison h3 {
    font-family: 'Akkurat-Bold' !important;
    font-size: 16px !important;
    letter-spacing: .1px !important;
    color: #5a5a5a !important;
  }

  /* figure 4 chart panel  */
  .chart--fig4 .chart__panel p span {
    font-weight: 500;
    font-family: var(--number-font);
  }

  @media(max-width: 767px) {
    /* on small screens position name above stats */
    .chart--fig4 .chart__panel .chart__panel-name {
      flex-basis: 100%;
      text-align: center;
    }
   }
 .chart--fig4 .chart__panel .chart__panel-name {
    /* font-family: 'Akkurat-Bold' !important; */
    /* font-family: gt-eesti-display-bold, sans-serif;
    font-family: var(--heading-font);
    color: #434878;
    color: var(--c2);
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    margin-bottom: 12px; */
  } 
</style>

<span class="dropcap green">O</span>ver the course of 2021 and 2022, the U.S. carried out an unprecedented experiment: we invested $46.55 billion to help Americans pay rent when they fell behind. These emergency rental assistance (ERA) funds, paid primarily to tenants, landlords, and utility companies, were intended to help renters to catch up on unpaid bills and remain stably housed in the wake of the COVID-19 pandemic. 

In a new public data release, we provide insight into how this money was distributed. This dataset, which was produced through a collaboration between the Eviction Lab, the {{< smartlink "Housing Initiative at Penn" "https://www.design.upenn.edu/work/housing-initiative-penn-hip" >}}, and the {{< smartlink "Urban Displacement Project" "https://www.urbandisplacement.org/" >}}, details the number of ERA recipients and the amount of ERA paid in most counties nationwide between January 2021 and March 2023. It represents the most precise picture yet available of when and where ERA funds were distributed. 

<!-- <p style="text-align:center;"><strong><a href="https://housinginitiative.github.io/era-county-level-dataset-public/" download target="_blank">GET THE DATA AND DOCUMENTATION</a></strong></p>
<a class="btn buttonlink mb-2" href="https://housinginitiative.github.io/era-county-level-dataset-public/" target="_blank" rel="noreferrer noopener">GET THE DATA AND DOCUMENTATION</a>
-->

<a class="link-button" href="https://housinginitiative.github.io/era-county-level-dataset-public/" style="color: #fff;" target="_blank">
<span>Get the data and documentation <i class="fa fa-chevron-right"></i></span>
</a> 

### Why emergency rental assistance?

While a handful of ERA programs existed at the local level before the pandemic—for example, {{< smartlink "“one shot deals” in New York City" "https://access.nyc.gov/programs/one-shot-deal/" >}}—these programs had never been tested on a large scale. Early in the pandemic, state and local governments began building up ERA resources. {{< smartlink "At least $3.9 billion in ERA was made available through these programs in 2020" "https://nlihc.org/sites/default/files/Emergency-Rental-Assistance-Programs-3.pdf" >}}. 

The infusion of federal funding in late 2020 and early 2021, though, represented a watershed moment. Between the Consolidated Appropriations Act of 2021 (December 2020) and the American Rescue Plan (March 2021), {{< smartlink "Congress provided nearly as much funding for ERA as they did in the previous year for the entire budget of the Department of Housing and Urban Development (HUD)" "https://www.novoco.com/notes-from-novogradac/2020-appropriations-provides-hud-funding-increases-5-billion-nmtc-1-billion-lihtc-calif-wildfires" >}}. 

ERA was just one of a {{< smartlink "range of policies that were hard to imagine before the pandemic" "https://www.nytimes.com/interactive/2022/03/11/us/how-covid-stimulus-money-was-spent.html" >}}. We expanded {{< smartlink "the scale of unemployment insurance" "https://pandemicoversight.gov/news/articles/how-much-money-did-pandemic-unemployment-programs-pay-out" >}} and {{< smartlink "access to many social services" "https://www.rsfjournal.org/content/9/3/32" >}}, provided millions of households with {{< smartlink "stimulus checks" "https://www.pandemicoversight.gov/data-interactive-tools/data-stories/update-three-rounds-stimulus-checks-see-how-many-went-out-and" >}}, established two federal eviction moratoria (and {{< smartlink "many state-level moratoria" "https://evictionlab.org/assessing-state-eviction-prevention-covid-19/" >}}), and expanded the tax credits that helped lift {{< smartlink "an unprecedented number of children out of poverty" "https://www.nber.org/system/files/working_papers/w29285/w29285.pdf" >}}. We believe it’s important to understand how these policies worked in practice, who they helped, and how this varies across the country. This ERA database is our contribution to that broader project.

### WHAT’S IN OUR ERA DATABASE?

{{< smartlink "The ERA program was overseen by the Department of Treasury" "https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program" >}}, but funds were paid out to state, territorial, county, city, and tribal grantees. Treasury set guidelines for the administration of the program, but each grantee established its own methods for processing applications and payments. Those grantees, with the exception of tribal grantees, were then required to submit periodic, detailed reports back to Treasury on the payments they made. 

The dataset that we’re releasing here relies on those confidential ERA payment reports that grantees submitted to Treasury. These reports were intended to offer payment-by-payment details on how ERA funds were distributed: amounts and dates of payments, addresses of the assisted property, justification for payment (e.g., rent arrearage), and more. The project team was granted access to these data through an agreement with HUD and Treasury.

While ERA was distributed nationwide, this dataset covers only part of the country. Though Treasury published uniform reporting requirements, each grantee had its own mechanisms for data collection and management. Not all grantees submitted payment reports, and not all of the submitted reports followed the necessary guidelines to be usable. We conducted an extensive series of data cleaning and validation steps—described in the provided documentation—that allowed us to determine when data quality was high enough to ensure that we had an accurate picture of ERA distribution. 

For 2,218 counties (69% of all counties nationwide), we are able to say how much ERA funding was distributed and how many unique addresses were assisted in each month between January 2021 and March 2023. In total, these counties are home to 26.8 million renter households, or approximately six in every ten renter households nationwide. For an additional 56 counties, we couldn’t determine month-by-month ERA distribution, but the data were good enough to tell us the total amount of ERA spent and number of addresses assisted. Figure 1 provides a map showing where we have data coverage, either month-by-month or with just total distribution.

{{% mapbox
  id="mapbox3"
  data="./figure1e.csv"
  shapes="./county_shapes.json"
  column="source"
  join="GEOID"
  name="NAME"
  gradientType="discrete"
  title="Figure 1. ERA distribution data coverage by county"
  colors="#999999;#94aabd;#434878;#2c897f"
  binValues="No data;Data suppressed;Data Only on Total Distribution;Data on Monthly Distribution"
  useFullUSBounds=true
  noLegend=true
%}}

<div class="legend my-3">
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Data on Monthly Distribution</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Data Only on Total Distribution</div>
  </div>
  <div class="legend-item legend-item--3">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Data suppressed<sup>1</sup></div>
  </div>
  <div class="legend-item">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">No data</div>
  </div>
</div>

In total, these data reflect $20.6 billion in ERA spending, a little less than half of the total amount that Congress made available. Ideally, we would have complete data on how all ERA funds were spent. The reality is that grantees focused on getting this money to tenants and landlords as quickly as possible, and didn’t always have the technical capacity to perfectly maintain and report payment records. We used strict criteria to only include places where we know that we have reliable data from all grantees operating in a given county. For example, if both a city and a state ERA program were operating in the same county, we had to have reliable data from both grantees. In many cases, counties marked as having “no data” in Figure 1 in fact did have some data available, but not enough to meet our validation criteria. Treasury continues to collect data from grantees, and we hope that future data releases will be able to expand coverage over more of the country.

In Figure 2, we plot the timing of this spending, with each bar reflecting the total amount of ERA spent in the given month. Spending was relatively slow at the start of this period as grantees got their programs set up, but by May 2021, $438 million per month was flowing to tenants and landlords. Across these counties, spending peaked in October 2021 with almost $1.8 billion in ERA distributed. The pace of spending then declined gradually. By March 2023, only about $128 million was being distributed across these counties. 

{{% bar-chart
  id="fig2"
  data="./figure2d.csv"
  x="month_of_payment"
  axis="time"
  timeUnit="month"
  y="total_assistance"
  yMax="2000000000"
  yFormat="y => d3.format('$.2s')(y).replace('G','B')"
  yTooltipFormat="y => d3.format('$.3s')(y).replace('G','B')"
  title="Figure 2. ERA spending by month"
  margin="8 8 50 50"
%}}

Our database lets us better understand how the timing of ERA distribution varied across the country. Rental assistance was distributed much faster in some places than in others. Take Kodiak Island Borough, AK and Portage County, WI, for example. Both made roughly the same amount of total payments ($4,694,111 and $4,743,179, respectively), but as we show in Figure 3, those payments were processed much more quickly in Kodiak Island Borough. By the end of  2021, 74.8% of all payments had been made in Kodiak Island Borough, compared to just 44.7% in Portage County. Portage County didn’t hit the 75% spending threshold until September 2022, nearly nine months later.

</div>
</div>
</div>
<div class="row mx-4 county-comparison">
<div class="col-12">
<div class="figheader px-0 px-md-3 my-0">Figure 3. ERA spending by month in two sites</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 pl-md-2">

{{% bar-chart 
  id="fig3"
  data="./figure3AK.csv"
  x="month_of_payment"
  xMin="01/01/2021"
  xMax="03/01/2023"
  y="pct_county_all_spending_monthly"
  lineData="./figure2d.csv"
  lineX="month_of_payment"
  lineY="pct"
  axis="time"
  timeUnit="month"
  yMin="0"
  yFormat="y => d3.format('.0%')(y/100)"
  title="Kodiak Island, AK"
  margin="4 4 60 40"
%}}

  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 pr-md-2">

{{% bar-chart
  id="fig3b"
  data="./figure3WI.csv"
  x="month_of_payment"
  xMin="01/01/2021"
  xMax="03/01/2023"
  y="pct_county_all_spending_monthly"
  lineData="./figure2d.csv"
  lineX="month_of_payment"
  lineY="pct"
  axis="time"
  timeUnit="month"
  yMin="0"
  yFormat="y => d3.format('.0%')(y/100)"
  title="Portage County, WI"
  margin="4 4 60 40"
%}}

  </div>
  <div class="figcaption col-12 mt-1 mb-0"><p>Note: red line in both panels is the overall national distribution of ERA, mirroring Figure 2 above</p></div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content pt-4 pt-md-0">
<div class="post-body pt-lg-3">
<!-- <p class="figcaption">Note: red line in both panels is the overall national distribution of ERA, mirroring Figure 2 above.</p> -->

We hope that this database helps researchers to analyze the effects of ERA on renters and their communities, for instance showing how rental assistance helped to safeguard health or prevent homelessness. We also want it to allow the general public to better understand how this program helped their neighbors. To that end, we encourage you to use the tool below to look up details on ERA spending in your county. Type your county into the search box and, if it’s included in our dataset, you’ll find details on how much ERA was distributed, to how many addresses, and at what pace.

<!-- TODO: add to chart gallery -->

{{% bar-chart
  id="fig4"
  searchId="geoid"
  defaultSearchValue="Los Angeles County, CA"
  data="./figure4ii.csv"
  x="month_of_payment"
  xMin="01/01/2021"
  xMax="03/01/2023"
  y="pct_county_all_spending_monthly"
  lineData="./figure2d.csv"
  lineX="month_of_payment"
  lineY="pct"
  lineYMin="0"
  axis="time"
  timeUnit="month"
  yFormat="y => d3.format('.0%')(y/100)"
  yMin="0"
  title="Figure 4. ERA distribution by county"
  margin="8 8 50 50"
  panelProps="name;total;addresses"
  panelPropFormatters="v => v + ':';v => `<span>${d3.format('$,d')(v)}</span> distributed`;v => `<span>${d3.format(',d')(v)}</span> addresses assisted`"
  yMaxNoData="10"
  noDataWarning="Monthly county data not available"
%}}

  <div class="figcaption col-12 mb-3"><p>Note: red line is the overall national distribution of ERA, mirroring Figure 2 above. If a county does not appear in the search results, it either did not have data available or its data have been suppressed.<sup>1</sup></p></div>

Rental assistance can be a key tool to stop people from falling into homelessness and struggling with economic difficulties. With this data, we hope that researchers, advocates, reporters and the general public can better understand how these programs worked in their communities. Hopefully, this will help us all to learn more about how financial aid programs can be designed to keep tenants safely housed, whether it is during a future emergency or as we face our current housing crisis.

<hr />
<div class="footnotes">
<ol>
<li>
To comply with Department of Housing and Urban Development data standards, we cannot report any county or county-month totals when less than 11 households received assistance.
</li>
</ol>