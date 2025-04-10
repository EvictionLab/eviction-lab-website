---
draft: true
childof: blog
url: "/how-much-rental-assistance-did-your-community-receive-during-the-pandemic/"
contenttype: updates
collection: true
contentcat: blog
featured: true
in_index: true
title: "How Much Rental Assistance Did Your Community Receive During the Pandemic?"
date: 2025-04-18T15:28:51.756Z
postauthorname: Grace Hartley, Jacob Haas, and Peter Hepburn
description: "Over the course of 2021 and 2022, the U.S. carried out an unprecedented experiment: we invested $46.55 billion to help Americans pay rent when they fell behind. Here we provide insight into how this money was distributed and the impact it had."
listSummary: "Over the course of 2021 and 2022, the U.S. carried out an unprecedented experiment: we invested $46.55 billion to help Americans pay rent when they fell behind. Here we provide insight into how this money was distributed and the impact it had."
listSummaryMaxChars: 250
socialDescription: "Over the course of 2021 and 2022, the U.S. carried out an unprecedented experiment: we invested $46.55 billion to help Americans pay rent when they fell behind. Here we provide insight into how this money was distributed and the impact it had."
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
fbImage: todo.jpg
twImage: todo.jpg
scripts:
  - charts
  - mapbox
  - grouped-bar-chart
---
<style>
</style>

<span class="dropcap red">O</span>ver the course of 2021 and 2022, the U.S. carried out an unprecedented experiment: we invested $46.55 billion to help Americans pay rent when they fell behind. These emergency rental assistance (ERA) funds, paid primarily to tenants, landlords, and utility companies, were intended to help renters to catch up on unpaid bills and remain stably housed in the wake of the COVID-19 pandemic. 

In a new public data release, we provide insight into how this money was distributed. This dataset, which was produced through a collaboration between the Eviction Lab, the Housing Initiative at Penn, and the Urban Displacement Project, details the number of ERA recipients and the amount of ERA paid in most counties nationwide between January 2021 and March 2023. It represents the most precise picture yet available of when and where ERA funds were distributed. 

[GET THE DATA AND DOCUMENTATION]

WHY EMERGENCY RENTAL ASSISTANCE?

While a handful of ERA programs existed at the local level before the pandemic—for example, “one shot deals” in New York City—these programs had never been tested on a large scale. Early in the pandemic, state and local governments began building up ERA resources. At least $3.9 billion in ERA was made available through these programs in 2020. 

The infusion of federal funding in late 2020 and early 2021, though, represented a watershed moment. Between the Consolidated Appropriations Act of 2021 (December 2020) and the American Rescue Plan (March 2021), Congress provided nearly as much funding for ERA as they did in the previous year for the entire budget of the Department of Housing and Urban Development (HUD). 

ERA was just one of a range of policies that were hard to imagine before the pandemic. We expanded the scale of unemployment insurance and access to many social services, provided millions of households with stimulus checks, established two federal eviction moratoria (and many state-level moratoria), and expanded the tax credits that helped lift an unprecedented number of children out of poverty. 

WHAT’S IN OUR ERA DATABASE?

The ERA program was overseen by the Department of Treasury, but funds were paid out to state, territorial, county, city, and tribal grantees. Treasury set guidelines for the administration of the program, but each grantee established its own methods for processing applications and payments. Those grantees, with the exception of tribal grantees, were then required to submit periodic, detailed reports back to Treasury on the payments they made. 

The dataset that we’re releasing here relies on those confidential ERA payment reports that grantees submitted to Treasury. These reports were intended to offer payment-by-payment details on how ERA funds were distributed: amounts and dates of payments, addresses of the assisted property, justification for payment (e.g., rent arrearage), and more. The project team was granted access to these data through an agreement with HUD and Treasury.

Though Treasury published uniform reporting requirements, each grantee had its own mechanisms for data collection and management. Not all grantees submitted payment reports, and not all of the submitted reports followed the necessary guidelines to be usable. We conducted an extensive series of data cleaning and validation steps—described in the provided documentation—that allowed us to determine when data quality was high enough to ensure that we had an accurate picture of ERA distribution. 

For 2,218 counties (69% of all counties nationwide), we are able to say how much ERA funding was distributed and how many unique addresses were assisted in each month between January 2021 and March 2023. In total, these counties are home to 26.8 million renter households, or approximately six in every ten renter households nationwide. For an additional 56 counties, we couldn’t determine month-by-month ERA distribution, but the data were good enough to tell us the total amount of ERA spent and number of addresses assisted. Figure 1 provides a map showing where we have data coverage, either month-by-month or with just total distribution.

{{% mapbox
  id="mapbox3"
  data="./era-map.csv"
  shapes="./county_shapes.json"
  column="group"
  join="GEOID"
  name="NAME"
  gradientType="discrete"
  title="Figure 1. ERA distribution data coverage by county"
  colors="#94aabd;#434878;#2c897f"
  binValues="No data;Included only in County-Total;Included in County-Month and County-Total"
  useFullUSBounds=true
  noLegend=true
%}}
<div class="legend my-3">
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Included in County-Month and County-Total</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Included only in County-Total</div>
  </div>
  <div class="legend-item legend-item--3">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">No data</div>
  </div>
</div>

In total, these data reflect $20.6 billion in ERA spending, a little less than half of the total amount that Congress made available. Ideally, we would have complete data on how all ERA funds were spent. The reality is that grantees focused on getting this money to tenants and landlords as quickly as possible, and didn’t always have the technical capacity to perfectly maintain and report payment records. We used strict criteria to only include places where we know that we have reliable data from all grantees operating in a given county.

In Figure 2, we plot the timing of this spending, with each bar reflecting the total amount of ERA spent in the given month. Spending was relatively slow at the start of this period as grantees got their programs set up, but by May 2021, $438 million per month was flowing to tenants and landlords. Across these counties, spending peaked in October 2021 with almost $1.8 billion in ERA distributed. The pace of spending then declined gradually. By March 2023, only about $128 million was being distributed across these counties. 

Figure 2. ERA spending by month



Our database lets us better understand how the timing of ERA distribution varied across the country. Rental assistance was distributed much faster in some places than in others. Take Kodiak Island Borough, AK and Portage County, WI, for example. Both made roughly the same amount of total payments ($4,694,111 and $4,743,179, respectively), but as we show in Figure 3, those payments were processed much more quickly in Kodiak Island Borough. By the end of  2021, 74.8% of all payments had been made in Kodiak Island Borough, compared to just 44.7% in Portage County. Portage County didn’t hit the 75% spending threshold until September 2022, nearly nine months later.




Figure 3. ERA spending by month in Kodiak Island, AK and Portage County, WI



Note: red line in both panels is the overall national distribution of ERA, mirroring Figure 2 above.

We hope that this database helps researchers to analyze the effects of ERA on renters and their communities, for instance showing how rental assistance helped to safeguard health or prevent homelessness. We also want it to allow the general public to better understand how this program helped their neighbors. To that end, we encourage you to use the tool below to look up details on ERA spending in your county. Type your county into the look-up box and, if it’s included in our dataset, you’ll find details on how much ERA was distributed, to how many addresses, and at what pace.

Figure 4. ERA distribution by county
Dynamic look-up tool. We've done this before (e.g., Figure 1 here). I'd like three elements for every included county:
(1) total ERA distributed (from county-total)
(2) total addresses assisted (from county-total)
(3) a version of Figure 3 for the county. That is, the county-specific monthly spending between Jan 2021 and Mar 2023. It would be super cool to superimpose a density plot of Fig 3 (national spending) so that people can tell really quickly if their county's spending was relatively slower or faster



Rental assistance can be a key tool to stop people from falling into homelessness and struggling with economic difficulties. With this data, we hope that researchers, advocates, reporters and the general public can better understand how these programs worked in their communities. Hopefully, this will help us all to learn more about how financial aid programs can be designed to keep tenants safely housed, whether it is during a future emergency or as we face our current housing crisis.
