---
draft: true
childof: research
url: /tenants-pay-for-cheap-evictions-embed/
contenttype: updates
contentcat: research
featured: false
title: ""
date: 2023-06-06T16:46:40.089Z
postauthortitle: The Eviction Lab
listSummary:  nothing 
socialDescription: nothing 
researchtype: elresearch
postauthorname: Henry Gomory, Douglas S. Massey, James R. Hendrickson, and Matthew Desmond
twImage: sasha-israel-camden-1h9a5044.jpg
authorpic: /images/bios/elab_thumb_sm.jpg
description: We show that higher filing fees lead to lower eviction rates, and that effects are largest for renters in majority-Black neighborhoods.
aliases: null
collection: false
fbImage: sasha-israel-camden-1h9a5044.jpg
image: sasha-israel-camden-1h9a5044.jpg
photoCredit: Sasha Israel
scripts:
  - charts
  - mapbox
  - grouped-bar-chart
---
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<style>
  body > *:not(#fee_by_county_map) {
    display: none;
  }
  #fee_by_county_map, #fee_by_county_map .map {
    /* height: calc(50vw); */
    /* max-height: 100%; */
    width: 100% !important;
    margin: 0 !important;
    height: 100vh;
  }

  .visual__mapbox {
    min-height: unset;
  }
  .visual--mapbox .legend {
    z-index: 10;
    background: white;
    position: fixed; 
    bottom: 20px;
  }
</style>

{{% mapbox
  id="fee_by_county_map"
  data="./filing_fees.csv"
  shapes="./usa.json"
  column="fee"
  join="GEOID"
  name="NAME"
  format="currency"
  legendTitle=""
  gradientType="discrete"
  cutoffs="15,55,97,134,350"
  colors="rgba(226,64,1,0.35);rgba(226,64,1,0.5);rgba(226,64,1,0.75);rgba(226,64,1,1)" %}}
