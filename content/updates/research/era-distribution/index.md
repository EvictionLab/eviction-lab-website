---
draft: true
childof: research
url: did-emergency-rental-assistance-reach-the-renters-who-needed-it-most
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Did Emergency Rental Assistance Reach the Renters Who Needed It Most?"
date: 2026-04-19T00:49:04.271Z
postauthorname: Peter Hepburn, Jacob Haas, Grace Hartley, Nick Graetz, Carl Gershenson, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: lorem ipsum
listSummary: lorem ipsum
twImage: ets-2025-hero-social.png
image: ets-2025-hero-social.png
fbImage: ets-2025-hero-social.png
scripts:
  - charts
  - grouped-bar-chart
---

When the COVID-19 pandemic hit, millions of households fell behind on rent and utility payments. {{< smartlink "The federal government and many states established eviction moratoria intended to keep people safely housed" "https://evictionlab.org/assessing-state-eviction-prevention-covid-19/" >}}, but these protections never cancelled rent. With families falling further behind, Congress provided $46.6 billion in Emergency Rental Assistance (ERA), a huge sum of money intended to help renters pay back what they owed. These funds were a lifesaver, but they also presented a logistical challenge: In a matter of months, hundreds of state, local, and tribal programs had to develop application systems and start making payments—many building these systems from scratch—all while the pandemic was still unfolding.

That raises an obvious question: Did the money reach the neighborhoods where renters were most likely to lose their homes? In a new study published in the Journal of Urban Affairs, we find that, on the whole, ERA was well-targeted to places where need was greatest. Using Treasury Department payment records, we show that more aid went to places where eviction had been more common before the pandemic. In those same neighborhoods, a larger share of low-income renter households also got help faster.

{{< researchpaperlink "ARTICLE TITLE" "https://doi.org/10.1080/07352166.2026.2649238" "Peter Hepburn, Jacob Haas, Grace Hartley, Nick Graetz, Carl Gershenson, and Matthew Desmond" "social-forces.jpg" >}}


The ERA program was large and fast-moving. The first round of ERA funding was approved by Congress in the last days of 2020, with more following in March, 2021. We had access to data on over half of all ERA payments, totaling approximately $20 billion ({{< smartlink "we have released a public-use version of these data" "https://evictionlab.org/pandemic-rental-assistance/" >}}). Figure 1 shows the timing, by month, of when this money was distributed. Payments to renters and landlords rose quickly through 2021, peaked later that year, and then continued well into 2022 as programs spent down the money they had received. But the pace of this distribution varied across the country, with some places moving much faster than others. This is why we look not only at how much money went out, but also at when and where it was distributed.

<div class="figheader">Figure 1. ERA Spending by Month</div>
<!-- TODO: merge dev -> staging -> prod on el-site and update URL -->
<iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/era-distribution"></iframe>
<div class="legend">
  <div class="legend-item legend-item--0">
    <div class="legend-item__color"></div>
    <div class="legend-item__label">ERA 1</div>
  </div>
  <div class="legend-item legend-item--1">
    <div class="legend-item__color"></div>
    <div class="legend-item__label">ERA 2</div>
  </div>
</div>

Rental assistance payments were not spread evenly across neighborhoods. Instead, they were concentrated in places where landlords had filed the most eviction cases before the pandemic. That matters because eviction is rarely random: {{< smartlink "Filings tend to show up in areas where renters are under more financial stress and at greater risk of losing their homes." "https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/" >}}

We found that neighborhoods with higher eviction risk generally received more total ERA. In addition, we found that a larger share of low-income renter households in those neighborhoods received help in the program's first full year. We also looked at the distribution of ERA across neighborhoods with different racial make-up and income levels. Within counties, neighborhoods that were mostly Black, Hispanic, or had no single racial or ethnic majority often received more aid than majority-white neighborhoods. Majority-Black neighborhoods stood out most clearly as receiving more assistance. {{< smartlink "Given that Black renters face a higher risk of eviction than members of any other group" "https://evictionlab.org/who-is-evicted-in-america/" >}}, this is again an encouraging sign that ERA was reaching those most likely to experience housing loss. 

This does not mean that the program addressed all inequalities. Still, it’s significant to see a very large federal aid program reach communities that had long faced higher eviction risk. The finding may sound intuitive, but there was no guarantee that it’s what would happen. Large emergency programs are often criticized for missing people who really need help. Here, the evidence points in a more hopeful direction, one in which the distribution of aid matched the geography of housing insecurity.

Even though these patterns were consistent nationwide, the rollout did not look the same everywhere. Some programs moved quickly through their funds, while others spent more slowly and continued paying out ERA longer. Some states were able to distribute much more aid per low-income renter household than others. The share of low-income renter households helped in 2021 also varied considerably. In the typical Census tract in Alaska, for example, 37% of low-income renter households received ERA in 2021. As Figure 2 demonstrates, ERA reached fewer low-income renter households in 2021 in the other states in which we have data.


{{% bar-chart
  id="fig5"
  data="./figure_5_data.csv"
  x="state_name"
  y="state_med_tract_total_unique_assisted_addresses_2021_renters_le80"
  yMin="0"
  yMax="0.4"
  yTooltipFormat=".1%"
  yFormat=".0%"
  sort="desc"
  title="Figure 2. Share of Low-Income Renter Households Receiving ERA in 2021 in the typical Census tract, by State"
  margin="8 8 120 40"
%}}

Part of that difference came from how the program was funded. Congress’s allocation of funding guaranteed every state a minimum amount of money. For smaller states, that meant they ended up with more funding per low-income renter than larger states. Those less-populated states tended to spend more slowly overall, likely because they had more funding relative to need. In spite of this, their spending patterns were similar to those of the larger states: The extra funding was still focused on those higher-risk neighborhoods. 

Our analysis also shows that the design of these programs promoted faster distribution of the funds, but targeting was not necessarily better or worse when comparing different states. Programs that allowed direct payments to tenants tended to move money out faster and reached a larger share of low-income renter households in 2021, compared to programs that did not. But there is much less evidence that these choices changed the basic map of where the assistance went. The bigger story is that the money usually flowed toward higher-need neighborhoods, even when programs took different, and possibly slower, routes to get there.

{{< pullquote "Large emergency programs are often criticized for missing people who really need help. Here, the evidence points in a more hopeful direction, one in which the distribution of aid matched the geography of housing insecurity." >}}

Public programs are often judged by how fast they move, and speed mattered a great deal during the pandemic. But this study suggests that scale and targeting do not have to be at odds. A program can be large, complex, and locally administered and still send aid toward the communities with the most need.

That lesson is especially important because ERA was built in an emergency. It was rolled out quickly, with changing federal guidance and uneven local capacity for distribution. A program built under those conditions could easily have ended up favoring the places with the most staff, the best technology, or the loudest advocates. Instead, the evidence suggests that aid often reached neighborhoods where renters were most at risk.

There are still many unanswered questions about ERA, including just how effective it was in preventing households from facing eviction cases. But this study answers a set of basic and important questions about where the money went and how quickly it was distributed. The answer is better than many critics might have expected: When the federal government made a once-in-a-generation investment in rental relief, it generally sent that help toward the places that needed it most.
