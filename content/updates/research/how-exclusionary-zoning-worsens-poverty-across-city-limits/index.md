---
draft: false
childof: research
url: /how-exclusionary-zoning-worsens-poverty-across-city-limits/
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "How exclusionary zoning worsens poverty across city limits"
date: 2026-03-10T15:28:51.756Z
postauthorname: Matt Mleczko
postauthortitle: The Eviction Lab
authorpic: /images/bios/mmleczko_thumb.jpg
description: "Exclusionary zoning laws exacerbate the national housing shortage, housing costs, and segregation."
listSummary: "Exclusionary zoning laws exacerbate the national housing shortage, housing costs, and segregation."
scripts:
  - charts
  - mapbox
socialDescription: "Exclusionary zoning laws exacerbate the national housing shortage, housing costs, and segregation."
twImage: exclusionary-zoning-worsens-poverty.jpg
fbImage: exclusionary-zoning-worsens-poverty.jpg
image: exclusionary-zoning-worsens-poverty.jpg
---

<style>
/* Font loading */
@font-face {
  font-family: "Akkurat-Italic";
  src: url("/css/font/Akkurat-Italic/lineto-akkurat-italic.woff2") format("woff2"),
       url("/css/font/Akkurat-Italic/lineto-akkurat-italic.woff") format("woff");
}

/* Table styles */
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
}

/* County comparison styles */
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
p.legend__title {
  font-family: 'GT-Eesti-Display-Bold', 'sans-serif' !important;
  font-size: 1.4rem !important;
  letter-spacing: .08rem;
  margin: 16px 0 8px !important;
  text-align: center;
  text-transform: uppercase;
  color: #212529;
  width: 100%;
}

/* Chart wrapper styles */
.chart {
  width: 100%;
  margin: unset;
}
.chart1-wrapper,
.chart2-wrapper,
.chart3-wrapper {
  position: relative;
  width: 100%;
}
.chart1-wrapper svg,
.chart2-wrapper svg,
.chart3-wrapper svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Chart bar styles */
.chart1-bar {
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.chart1-bar:hover {
  opacity: 0.85;
}

/* Hitarea styles */
.chart1-hitarea,
.chart2-hitarea,
.chart3-hitarea {
  position: absolute;
  cursor: pointer;
}

/* Tooltip styles */
.chart1-hitarea .chart1-tooltip,
.chart2-hitarea .chart1-tooltip,
.chart3-hitarea .chart1-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.87);
  color: #fff;
  padding: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 100;
  font-family: Akkurat-Regular, sans-serif;
  font-size: 12px;
  white-space: nowrap;
  margin-bottom: -16px;
}
.chart1-hitarea:hover .chart1-tooltip,
.chart2-hitarea:hover .chart1-tooltip,
.chart3-hitarea:hover .chart1-tooltip {
  opacity: 1;
}
.chart1-hitarea:hover + svg .chart1-bar-hover {
  opacity: 0.85;
}
.chart1-tooltip .tooltip__title {
  font-size: 14px;
  font-family: GT-Eesti-Display-Bold, sans-serif;
  text-transform: uppercase;
  margin-bottom: 4px;
  letter-spacing: 0.07em;
}
.chart1-tooltip .tooltip__item {
  font-size: 14px;
  line-height: 1.5;
}

h3.bordered-header {
  font-size: 1.8rem !important;
}
.bordered-header {
  border-top: 4px solid;
}
.map-intro {
    font-family: "Akkurat-Italic" !important; 
}
.map-notes {
     color: #5a5a5a !important;
}
.map-notes, ol.map-notes li {
   /* font-family: "Akkurat-Italic" !important; */
    font-size: 1.5rem !important;
}
ol.map-notes {
  margin-bottom: 0 !important;
}
hr.research__paperlink--hr {
  border-color:  #434878 !important;
  border-width: 4px;
}
.research__paperlink a, .research__paperlink .journal-subheading {
  color:  #434878 !important;
}

</style>

<span class="dropcap green">Z</span>oning regulations govern virtually everything about development in our communities. If you want to construct a new building, zoning codes determine how large it can be, how many parking units it has to include, and even how far it must be set back from the street. During the last decade, there has been growing recognition that exclusionary zoning laws that make it harder to build multifamily and affordable housing are playing a major role in the national housing shortage, the rising cost of housing, and the segregation we see across our communities.

Most conversations about exclusionary zoning focus on how it blocks low-income residents from sought-after communities. In a new article published in Demography, I go further, showing how exclusionary zoning is even more consequential: It can both lock people out of opportunity and put additional strain on already high-poverty communities next door. 

{{< researchpaperlink "The Cumulative Exposure to Exclusionary Zoning in Impoverished Neighborhoods " "https://read.dukeupress.edu/demography/article-abstract/doi/10.1215/00703370-12468457/407848/The-Cumulative-Exposure-to-Exclusionary-Zoning-in" "Matt Mleczko" "cover.png" >}}

In this research, I compare impoverished communities in metropolitan regions with exclusionary zoning policies to similarly impoverished communities in regions with less-strict zoning regulations. Imagine two similar, high-poverty neighborhoods. One neighborhood is subject to exclusionary zoning, either in its own municipality or in the municipalities that surround it. The other is in a place with less restrictive zoning regulations, allowing for easier development. Both neighborhoods have high poverty rates, but do these differences in zoning lead to higher housing costs and more housing precarity in the first sort of neighborhood than in the second?

The first step in answering this question was measuring zoning regulations over time. I combine the {{< smartlink "National Zoning and Land Use Database" "https://evictionlab.org/national-zoning-and-land-use-database/" >}} and earlier zoning and land use survey data so that I have land use information in two periods: from 2003-2006 and again from 2018-2022. For these same time periods, I construct measures of material hardship in poor neighborhoods, including rent, property values, households experiencing rent burden, and availability of low-cost housing. 

The data allow me to identify metro areas with highly restrictive zoning ordinances like Trenton-Princeton and Milwaukee, both displayed below. I also find metro areas with less restrictive regulations, areas like San Antonio and Pittsburgh, also displayed below. These findings alone are noteworthy because metro areas like Milwaukee are typically not thought of as highly-restrictive relative to much higher cost metro areas like San Francisco and New York. Moreover, even relatively less restrictive metro areas like Pittsburgh still feature pockets of restrictive zoning. This research helps illustrate that exclusionary zoning is more prevalent than many realize. 

<h3 class="mt-7 mb-3 bordered-header blue">How maps show the impact of zoning laws</h3>

<p class="map-intro">Zoning restrictiveness can vary enormously from region to region, and even within regions. In the following maps, you can see this variation: orange/red areas have tight zoning regulations, while green areas tend to be more flexible.</p>

</div>
</div>
</div>

<div class="row mx-4 mt-n4 county-comparison">
<div class="col-12">
<div class="figheader px-0 px-md-3 mb-2">Figure 1. Metro areas with highly restrictive zoning ordinances</div>
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
  legendTitle="Zoning Restrictiveness Index"
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
  legendTitle="Zoning Restrictiveness Index"
%}}
  </div>

<div class="center-content-post updates-post research-post pb-2">
<div class="page-content pt-8 pt-md-0">
<div class="post-body pt-lg-3 pb-0">

<p class="map-notes">
Notes:
<ol class="map-notes">
<li>Heat maps of ZRI scores (2019-2022) in above-average restrictive MSAs. Higher levels of the ZRI indicate higher levels of zoning and land use restrictiveness. </li>
<li>The two metro areas shown illustrate a highly restrictive metro area characterized by low restrictiveness in the central city and uniformly restrictive suburban municipalities (Trenton-Princeton) as well as a metro area characterized by average levels of zoning restrictiveness in the central city but also some highly restrictive suburban municipalities (Milwaukee).</li>
<li>Hover over a municipality to see its ZRI score in 2019-2022.</li>
</ol>
</p>
</div>
</div>
</div>
<div class="col-12 mt-0">
<div class="figheader px-0 px-md-3 mb-2">Figure 2. Metro areas with less restrictive zoning ordinances</div>
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
  legendTitle="Zoning Restrictiveness Index"
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
  legendTitle="Zoning Restrictiveness Index"
%}} 

  </div>
  </div>

<div class="center-content-post updates-post research-post pb-2">
<div class="page-content pt-8 pt-md-0">
<div class="post-body pt-lg-3">
<p class="map-notes">
Notes:
<ol class="map-notes">
<li>Heat maps of ZRI scores (2019-2022) in above-average restrictive MSAs. Higher levels of the ZRI indicate higher levels of zoning and land use restrictiveness. </li>
<li>The two metro areas shown illustrate a highly restrictive metro area characterized by low restrictiveness in the central city and uniformly restrictive suburban municipalities (Trenton-Princeton) as well as a metro area characterized by average levels of zoning restrictiveness in the central city but also some highly restrictive suburban municipalities (Milwaukee).</li>
<li>Hover over a municipality to see its ZRI score in 2019-2022.</li>
</ol>
</p>
<br>

<h3 class="mb-4 bordered-header blue"></h3>


I compare impoverished neighborhoods between more- and less-restrictive municipalities and metro areas to determine whether exclusionary zoning explains differences in housing prices, rent burden, and the availability of low-cost housing. 

Restrictive zoning means higher costs for families in poorer neighborhoods. Each decade of exclusionary zoning is associated with an average increase in monthly median rent of $24-27 in impoverished neighborhoods. Similarly, each decade of exclusionary zoning is associated with an estimated one percentage point increase in the share of renting households experiencing rent burden in these neighborhoods. 

<div class="chart chart2-wrapper">
<h3 class="chart__title" style="pointer-events: auto;">Figure 3. Additional average monthly rent in neighborhoods exposed to exclusionary zoning (at MSA and municipal level)</h3>
<div class="chart2-hitarea" style="left: 31.55%; top: 46.68%; width: 20.66%; height: 40.92%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">MSA</div>
    <div class="tooltip__item"><strong>$27.50</strong></div>
    <div class="tooltip__item">CI: $8.81 to $50.96</div>
  </div>
</div>
<div class="chart2-hitarea" style="left: 54.80%; top: 51.48%; width: 20.66%; height: 35.12%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">Municipal</div>
    <div class="tooltip__item"><strong>$23.65</strong></div>
    <div class="tooltip__item">CI: $5.29 to $40.66</div>
  </div>
</div>
<svg width="542" height="318" viewBox="0 0 542 316" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4413_662)">
<mask id="mask0_4413_662" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="542" height="344">
<path d="M542 0H0V344H542V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_4413_662)">
<path d="M-0.25 -199H542V344H-0.25V-199Z" fill="#F5F7F9"/>
<path d="M54.5 20.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M54.5 67.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M54.5 114.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M54.5 161.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M54.5 208.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M54.5 255.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M54.5 302.5H526.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M283 304H171V175.069C171 174.416 171.895 173.887 173 173.887H281C282.105 173.887 283 174.416 283 175.069V304Z" fill="url(#paint0_linear_4413_662)"/>
<path d="M409 304H297V193.5C297 192.847 297.895 192.318 299 192.318H407C408.105 192.318 409 192.847 409 193.5V304Z" fill="url(#paint1_linear_4413_662)"/>
<path d="M17.5307 24.3822V23.4822C16.7477 23.3922 16.0187 23.0772 15.4067 22.5912L15.9827 21.7722C16.4957 22.1862 16.9817 22.4562 17.5667 22.5462V20.7822C16.2527 20.4402 15.6407 19.9452 15.6407 18.9372V18.9192C15.6407 17.9472 16.4057 17.2902 17.5307 17.2002V16.6782H18.3137V17.2182C18.9707 17.2992 19.5107 17.5332 20.0057 17.9022L19.5017 18.7482C19.1057 18.4512 18.7007 18.2622 18.2777 18.1722V19.8822C19.6457 20.2242 20.2307 20.7732 20.2307 21.7362V21.7542C20.2307 22.7352 19.4567 23.3922 18.3137 23.4912V24.3822H17.5307ZM17.5667 19.6932V18.1092C16.9997 18.1542 16.7027 18.4602 16.7027 18.8562V18.8742C16.7027 19.2432 16.8737 19.4862 17.5667 19.6932ZM18.2777 22.5822C18.8447 22.5372 19.1687 22.2492 19.1687 21.8172V21.7992C19.1687 21.4032 18.9797 21.1602 18.2777 20.9532V22.5822ZM23.7731 23.6082C22.9991 23.6082 22.4411 23.3652 22.0181 22.9512C21.5411 22.4652 21.2531 21.8082 21.2531 20.5392V20.5212C21.2531 18.5952 22.1711 17.0922 23.9531 17.0922C24.7721 17.0922 25.3301 17.3532 25.8791 17.7942L25.2851 18.6492C24.8441 18.3072 24.4661 18.1002 23.9171 18.1002C22.9811 18.1002 22.4591 18.9462 22.4051 20.0982C22.7381 19.7742 23.1701 19.4682 23.9081 19.4682C25.1321 19.4682 26.1131 20.1882 26.1131 21.4482V21.4662C26.1131 22.7172 25.0961 23.6082 23.7731 23.6082ZM23.7461 22.6542C24.5291 22.6542 25.0061 22.1592 25.0061 21.5112V21.4932C25.0061 20.8632 24.5021 20.3952 23.7191 20.3952C22.9361 20.3952 22.4411 20.8992 22.4411 21.5022V21.5202C22.4411 22.1592 22.9541 22.6542 23.7461 22.6542ZM29.8954 23.6082C28.2394 23.6082 27.1594 22.1682 27.1594 20.3682V20.3502C27.1594 18.5502 28.2574 17.0922 29.9134 17.0922C31.5604 17.0922 32.6494 18.5322 32.6494 20.3322V20.3502C32.6494 22.1502 31.5514 23.6082 29.8954 23.6082ZM29.9134 22.6092C30.8944 22.6092 31.5064 21.6102 31.5064 20.3682V20.3502C31.5064 19.1082 30.8674 18.0912 29.8954 18.0912C28.9234 18.0912 28.3024 19.0812 28.3024 20.3322V20.3502C28.3024 21.5922 28.9324 22.6092 29.9134 22.6092ZM33.5953 23.5002V22.2672H34.7923V23.5002H33.5953ZM38.4735 23.6082C36.8175 23.6082 35.7375 22.1682 35.7375 20.3682V20.3502C35.7375 18.5502 36.8355 17.0922 38.4915 17.0922C40.1385 17.0922 41.2275 18.5322 41.2275 20.3322V20.3502C41.2275 22.1502 40.1295 23.6082 38.4735 23.6082ZM38.4915 22.6092C39.4725 22.6092 40.0845 21.6102 40.0845 20.3682V20.3502C40.0845 19.1082 39.4455 18.0912 38.4735 18.0912C37.5015 18.0912 36.8805 19.0812 36.8805 20.3322V20.3502C36.8805 21.5922 37.5105 22.6092 38.4915 22.6092ZM44.9862 23.6082C43.3302 23.6082 42.2502 22.1682 42.2502 20.3682V20.3502C42.2502 18.5502 43.3482 17.0922 45.0042 17.0922C46.6512 17.0922 47.7402 18.5322 47.7402 20.3322V20.3502C47.7402 22.1502 46.6422 23.6082 44.9862 23.6082ZM45.0042 22.6092C45.9852 22.6092 46.5972 21.6102 46.5972 20.3682V20.3502C46.5972 19.1082 45.9582 18.0912 44.9862 18.0912C44.0142 18.0912 43.3932 19.0812 43.3932 20.3322V20.3502C43.3932 21.5922 44.0232 22.6092 45.0042 22.6092Z" fill="#7D7D7D"/>
<path d="M17.8384 71.3822V70.4822C17.0554 70.3922 16.3264 70.0772 15.7144 69.5912L16.2904 68.7722C16.8034 69.1862 17.2894 69.4562 17.8744 69.5462V67.7822C16.5604 67.4402 15.9484 66.9452 15.9484 65.9372V65.9192C15.9484 64.9472 16.7134 64.2902 17.8384 64.2002V63.6782H18.6214V64.2182C19.2784 64.2992 19.8184 64.5332 20.3134 64.9022L19.8094 65.7482C19.4134 65.4512 19.0084 65.2622 18.5854 65.1722V66.8822C19.9534 67.2242 20.5384 67.7732 20.5384 68.7362V68.7542C20.5384 69.7352 19.7644 70.3922 18.6214 70.4912V71.3822H17.8384ZM17.8744 66.6932V65.1092C17.3074 65.1542 17.0104 65.4602 17.0104 65.8562V65.8742C17.0104 66.2432 17.1814 66.4862 17.8744 66.6932ZM18.5854 69.5822C19.1524 69.5372 19.4764 69.2492 19.4764 68.8172V68.7992C19.4764 68.4032 19.2874 68.1602 18.5854 67.9532V69.5822ZM23.7839 70.6082C22.8209 70.6082 22.0649 70.2212 21.4709 69.6452L22.1549 68.8442C22.6589 69.3122 23.1899 69.6002 23.7749 69.6002C24.5309 69.6002 25.0259 69.1682 25.0259 68.5112V68.4932C25.0259 67.8542 24.4859 67.4492 23.7209 67.4492C23.2709 67.4492 22.8839 67.5752 22.5599 67.7282L21.8939 67.2872L22.0739 64.2002H25.8359V65.1812H23.0279L22.9289 66.6572C23.2259 66.5492 23.5049 66.4772 23.9279 66.4772C25.1519 66.4772 26.1149 67.1252 26.1149 68.4572V68.4752C26.1149 69.7622 25.1789 70.6082 23.7839 70.6082ZM29.8955 70.6082C28.2395 70.6082 27.1595 69.1682 27.1595 67.3682V67.3502C27.1595 65.5502 28.2575 64.0922 29.9135 64.0922C31.5605 64.0922 32.6495 65.5322 32.6495 67.3322V67.3502C32.6495 69.1502 31.5515 70.6082 29.8955 70.6082ZM29.9135 69.6092C30.8945 69.6092 31.5065 68.6102 31.5065 67.3682V67.3502C31.5065 66.1082 30.8675 65.0912 29.8955 65.0912C28.9235 65.0912 28.3025 66.0812 28.3025 67.3322V67.3502C28.3025 68.5922 28.9325 69.6092 29.9135 69.6092ZM33.5954 70.5002V69.2672H34.7924V70.5002H33.5954ZM38.4736 70.6082C36.8176 70.6082 35.7376 69.1682 35.7376 67.3682V67.3502C35.7376 65.5502 36.8356 64.0922 38.4916 64.0922C40.1386 64.0922 41.2276 65.5322 41.2276 67.3322V67.3502C41.2276 69.1502 40.1296 70.6082 38.4736 70.6082ZM38.4916 69.6092C39.4726 69.6092 40.0846 68.6102 40.0846 67.3682V67.3502C40.0846 66.1082 39.4456 65.0912 38.4736 65.0912C37.5016 65.0912 36.8806 66.0812 36.8806 67.3322V67.3502C36.8806 68.5922 37.5106 69.6092 38.4916 69.6092ZM44.9863 70.6082C43.3303 70.6082 42.2503 69.1682 42.2503 67.3682V67.3502C42.2503 65.5502 43.3483 64.0922 45.0043 64.0922C46.6513 64.0922 47.7403 65.5322 47.7403 67.3322V67.3502C47.7403 69.1502 46.6423 70.6082 44.9863 70.6082ZM45.0043 69.6092C45.9853 69.6092 46.5973 68.6102 46.5973 67.3682V67.3502C46.5973 66.1082 45.9583 65.0912 44.9863 65.0912C44.0143 65.0912 43.3933 66.0812 43.3933 67.3322V67.3502C43.3933 68.5922 44.0233 69.6092 45.0043 69.6092Z" fill="#7D7D7D"/>
<path d="M17.311 118.382V117.482C16.528 117.392 15.799 117.077 15.187 116.591L15.763 115.772C16.276 116.186 16.762 116.456 17.347 116.546V114.782C16.033 114.44 15.421 113.945 15.421 112.937V112.919C15.421 111.947 16.186 111.29 17.311 111.2V110.678H18.094V111.218C18.751 111.299 19.291 111.533 19.786 111.902L19.282 112.748C18.886 112.451 18.481 112.262 18.058 112.172V113.882C19.426 114.224 20.011 114.773 20.011 115.736V115.754C20.011 116.735 19.237 117.392 18.094 117.491V118.382H17.311ZM17.347 113.693V112.109C16.78 112.154 16.483 112.46 16.483 112.856V112.874C16.483 113.243 16.654 113.486 17.347 113.693ZM18.058 116.582C18.625 116.537 18.949 116.249 18.949 115.817V115.799C18.949 115.403 18.76 115.16 18.058 114.953V116.582ZM24.2284 117.5V116.087H21.0514L20.8444 115.295L24.3454 111.155H25.2904V115.178H26.1904V116.087H25.2904V117.5H24.2284ZM22.1584 115.178H24.2284V112.685L22.1584 115.178ZM29.8954 117.608C28.2394 117.608 27.1594 116.168 27.1594 114.368V114.35C27.1594 112.55 28.2574 111.092 29.9134 111.092C31.5604 111.092 32.6494 112.532 32.6494 114.332V114.35C32.6494 116.15 31.5514 117.608 29.8954 117.608ZM29.9134 116.609C30.8944 116.609 31.5064 115.61 31.5064 114.368V114.35C31.5064 113.108 30.8674 112.091 29.8954 112.091C28.9234 112.091 28.3024 113.081 28.3024 114.332V114.35C28.3024 115.592 28.9324 116.609 29.9134 116.609ZM33.5953 117.5V116.267H34.7923V117.5H33.5953ZM38.4735 117.608C36.8175 117.608 35.7375 116.168 35.7375 114.368V114.35C35.7375 112.55 36.8355 111.092 38.4915 111.092C40.1385 111.092 41.2275 112.532 41.2275 114.332V114.35C41.2275 116.15 40.1295 117.608 38.4735 117.608ZM38.4915 116.609C39.4725 116.609 40.0845 115.61 40.0845 114.368V114.35C40.0845 113.108 39.4455 112.091 38.4735 112.091C37.5015 112.091 36.8805 113.081 36.8805 114.332V114.35C36.8805 115.592 37.5105 116.609 38.4915 116.609ZM44.9862 117.608C43.3302 117.608 42.2502 116.168 42.2502 114.368V114.35C42.2502 112.55 43.3482 111.092 45.0042 111.092C46.6512 111.092 47.7402 112.532 47.7402 114.332V114.35C47.7402 116.15 46.6422 117.608 44.9862 117.608ZM45.0042 116.609C45.9852 116.609 46.5972 115.61 46.5972 114.368V114.35C46.5972 113.108 45.9582 112.091 44.9862 112.091C44.0142 112.091 43.3932 113.081 43.3932 114.332V114.35C43.3932 115.592 44.0232 116.609 45.0042 116.609Z" fill="#7D7D7D"/>
<path d="M17.8735 165.382V164.482C17.0905 164.392 16.3615 164.077 15.7495 163.591L16.3255 162.772C16.8385 163.186 17.3245 163.456 17.9095 163.546V161.782C16.5955 161.44 15.9835 160.945 15.9835 159.937V159.919C15.9835 158.947 16.7485 158.29 17.8735 158.2V157.678H18.6565V158.218C19.3135 158.299 19.8535 158.533 20.3485 158.902L19.8445 159.748C19.4485 159.451 19.0435 159.262 18.6205 159.172V160.882C19.9885 161.224 20.5735 161.773 20.5735 162.736V162.754C20.5735 163.735 19.7995 164.392 18.6565 164.491V165.382H17.8735ZM17.9095 160.693V159.109C17.3425 159.154 17.0455 159.46 17.0455 159.856V159.874C17.0455 160.243 17.2165 160.486 17.9095 160.693ZM18.6205 163.582C19.1875 163.537 19.5115 163.249 19.5115 162.817V162.799C19.5115 162.403 19.3225 162.16 18.6205 161.953V163.582ZM23.8819 164.608C22.7839 164.608 22.0009 164.149 21.4699 163.501L22.2439 162.781C22.6939 163.312 23.1979 163.609 23.8999 163.609C24.5209 163.609 24.9889 163.231 24.9889 162.655V162.637C24.9889 162.016 24.4219 161.665 23.5399 161.665H23.0269L22.8469 160.972L24.5479 159.163H21.8209V158.2H25.9879V159.028L24.2329 160.828C25.1869 160.954 26.0869 161.431 26.0869 162.601V162.619C26.0869 163.78 25.1869 164.608 23.8819 164.608ZM29.8954 164.608C28.2394 164.608 27.1594 163.168 27.1594 161.368V161.35C27.1594 159.55 28.2574 158.092 29.9134 158.092C31.5604 158.092 32.6494 159.532 32.6494 161.332V161.35C32.6494 163.15 31.5514 164.608 29.8954 164.608ZM29.9134 163.609C30.8944 163.609 31.5064 162.61 31.5064 161.368V161.35C31.5064 160.108 30.8674 159.091 29.8954 159.091C28.9234 159.091 28.3024 160.081 28.3024 161.332V161.35C28.3024 162.592 28.9324 163.609 29.9134 163.609ZM33.5953 164.5V163.267H34.7923V164.5H33.5953ZM38.4735 164.608C36.8175 164.608 35.7375 163.168 35.7375 161.368V161.35C35.7375 159.55 36.8355 158.092 38.4915 158.092C40.1385 158.092 41.2275 159.532 41.2275 161.332V161.35C41.2275 163.15 40.1295 164.608 38.4735 164.608ZM38.4915 163.609C39.4725 163.609 40.0845 162.61 40.0845 161.368V161.35C40.0845 160.108 39.4455 159.091 38.4735 159.091C37.5015 159.091 36.8805 160.081 36.8805 161.332V161.35C36.8805 162.592 37.5105 163.609 38.4915 163.609ZM44.9862 164.608C43.3302 164.608 42.2502 163.168 42.2502 161.368V161.35C42.2502 159.55 43.3482 158.092 45.0042 158.092C46.6512 158.092 47.7402 159.532 47.7402 161.332V161.35C47.7402 163.15 46.6422 164.608 44.9862 164.608ZM45.0042 163.609C45.9852 163.609 46.5972 162.61 46.5972 161.368V161.35C46.5972 160.108 45.9582 159.091 44.9862 159.091C44.0142 159.091 43.3932 160.081 43.3932 161.332V161.35C43.3932 162.592 44.0232 163.609 45.0042 163.609Z" fill="#7D7D7D"/>
<path d="M17.9175 212.382V211.482C17.1345 211.392 16.4055 211.077 15.7935 210.591L16.3695 209.772C16.8825 210.186 17.3685 210.456 17.9535 210.546V208.782C16.6395 208.44 16.0275 207.945 16.0275 206.937V206.919C16.0275 205.947 16.7925 205.29 17.9175 205.2V204.678H18.7005V205.218C19.3575 205.299 19.8975 205.533 20.3925 205.902L19.8885 206.748C19.4925 206.451 19.0875 206.262 18.6645 206.172V207.882C20.0325 208.224 20.6175 208.773 20.6175 209.736V209.754C20.6175 210.735 19.8435 211.392 18.7005 211.491V212.382H17.9175ZM17.9535 207.693V206.109C17.3865 206.154 17.0895 206.46 17.0895 206.856V206.874C17.0895 207.243 17.2605 207.486 17.9535 207.693ZM18.6645 210.582C19.2315 210.537 19.5555 210.249 19.5555 209.817V209.799C19.5555 209.403 19.3665 209.16 18.6645 208.953V210.582ZM21.568 211.5V210.627L23.737 208.782C24.601 208.053 24.916 207.648 24.916 207.081C24.916 206.46 24.475 206.1 23.899 206.1C23.323 206.1 22.927 206.415 22.441 207.045L21.658 206.433C22.261 205.587 22.855 205.11 23.98 205.11C25.213 205.11 26.059 205.866 26.059 206.991V207.009C26.059 207.999 25.537 208.539 24.421 209.448L23.125 210.528H26.122V211.5H21.568ZM29.8955 211.608C28.2395 211.608 27.1595 210.168 27.1595 208.368V208.35C27.1595 206.55 28.2575 205.092 29.9135 205.092C31.5605 205.092 32.6495 206.532 32.6495 208.332V208.35C32.6495 210.15 31.5515 211.608 29.8955 211.608ZM29.9135 210.609C30.8945 210.609 31.5065 209.61 31.5065 208.368V208.35C31.5065 207.108 30.8675 206.091 29.8955 206.091C28.9235 206.091 28.3025 207.081 28.3025 208.332V208.35C28.3025 209.592 28.9325 210.609 29.9135 210.609ZM33.5954 211.5V210.267H34.7924V211.5H33.5954ZM38.4736 211.608C36.8176 211.608 35.7376 210.168 35.7376 208.368V208.35C35.7376 206.55 36.8356 205.092 38.4916 205.092C40.1386 205.092 41.2276 206.532 41.2276 208.332V208.35C41.2276 210.15 40.1296 211.608 38.4736 211.608ZM38.4916 210.609C39.4726 210.609 40.0846 209.61 40.0846 208.368V208.35C40.0846 207.108 39.4456 206.091 38.4736 206.091C37.5016 206.091 36.8806 207.081 36.8806 208.332V208.35C36.8806 209.592 37.5106 210.609 38.4916 210.609ZM44.9863 211.608C43.3303 211.608 42.2503 210.168 42.2503 208.368V208.35C42.2503 206.55 43.3483 205.092 45.0043 205.092C46.6513 205.092 47.7403 206.532 47.7403 208.332V208.35C47.7403 210.15 46.6423 211.608 44.9863 211.608ZM45.0043 210.609C45.9853 210.609 46.5973 209.61 46.5973 208.368V208.35C46.5973 207.108 45.9583 206.091 44.9863 206.091C44.0143 206.091 43.3933 207.081 43.3933 208.332V208.35C43.3933 209.592 44.0233 210.609 45.0043 210.609Z" fill="#7D7D7D"/>
<path d="M19.8686 259.382V258.482C19.0856 258.392 18.3566 258.077 17.7446 257.591L18.3206 256.772C18.8336 257.186 19.3196 257.456 19.9046 257.546V255.782C18.5906 255.44 17.9786 254.945 17.9786 253.937V253.919C17.9786 252.947 18.7436 252.29 19.8686 252.2V251.678H20.6516V252.218C21.3086 252.299 21.8486 252.533 22.3436 252.902L21.8396 253.748C21.4436 253.451 21.0386 253.262 20.6156 253.172V254.882C21.9836 255.224 22.5686 255.773 22.5686 256.736V256.754C22.5686 257.735 21.7946 258.392 20.6516 258.491V259.382H19.8686ZM19.9046 254.693V253.109C19.3376 253.154 19.0406 253.46 19.0406 253.856V253.874C19.0406 254.243 19.2116 254.486 19.9046 254.693ZM20.6156 257.582C21.1826 257.537 21.5066 257.249 21.5066 256.817V256.799C21.5066 256.403 21.3176 256.16 20.6156 255.953V257.582ZM24.68 258.5V253.28L23.546 253.595L23.312 252.695L25.004 252.155H25.778V258.5H24.68ZM29.8954 258.608C28.2394 258.608 27.1594 257.168 27.1594 255.368V255.35C27.1594 253.55 28.2574 252.092 29.9134 252.092C31.5604 252.092 32.6494 253.532 32.6494 255.332V255.35C32.6494 257.15 31.5514 258.608 29.8954 258.608ZM29.9134 257.609C30.8944 257.609 31.5064 256.61 31.5064 255.368V255.35C31.5064 254.108 30.8674 253.091 29.8954 253.091C28.9234 253.091 28.3024 254.081 28.3024 255.332V255.35C28.3024 256.592 28.9324 257.609 29.9134 257.609ZM33.5953 258.5V257.267H34.7923V258.5H33.5953ZM38.4735 258.608C36.8175 258.608 35.7375 257.168 35.7375 255.368V255.35C35.7375 253.55 36.8355 252.092 38.4915 252.092C40.1385 252.092 41.2275 253.532 41.2275 255.332V255.35C41.2275 257.15 40.1295 258.608 38.4735 258.608ZM38.4915 257.609C39.4725 257.609 40.0845 256.61 40.0845 255.368V255.35C40.0845 254.108 39.4455 253.091 38.4735 253.091C37.5015 253.091 36.8805 254.081 36.8805 255.332V255.35C36.8805 256.592 37.5105 257.609 38.4915 257.609ZM44.9862 258.608C43.3302 258.608 42.2502 257.168 42.2502 255.368V255.35C42.2502 253.55 43.3482 252.092 45.0042 252.092C46.6512 252.092 47.7402 253.532 47.7402 255.332V255.35C47.7402 257.15 46.6422 258.608 44.9862 258.608ZM45.0042 257.609C45.9852 257.609 46.5972 256.61 46.5972 255.368V255.35C46.5972 254.108 45.9582 253.091 44.9862 253.091C44.0142 253.091 43.3932 254.081 43.3932 255.332V255.35C43.3932 256.592 44.0232 257.609 45.0042 257.609Z" fill="#7D7D7D"/>
<path d="M38.5278 306.382V305.482C37.7448 305.392 37.0158 305.077 36.4038 304.591L36.9798 303.772C37.4928 304.186 37.9788 304.456 38.5638 304.546V302.782C37.2498 302.44 36.6378 301.945 36.6378 300.937V300.919C36.6378 299.947 37.4028 299.29 38.5278 299.2V298.678H39.3108V299.218C39.9678 299.299 40.5078 299.533 41.0028 299.902L40.4988 300.748C40.1028 300.451 39.6978 300.262 39.2748 300.172V301.882C40.6428 302.224 41.2278 302.773 41.2278 303.736V303.754C41.2278 304.735 40.4538 305.392 39.3108 305.491V306.382H38.5278ZM38.5638 301.693V300.109C37.9968 300.154 37.6998 300.46 37.6998 300.856V300.874C37.6998 301.243 37.8708 301.486 38.5638 301.693ZM39.2748 304.582C39.8418 304.537 40.1658 304.249 40.1658 303.817V303.799C40.1658 303.403 39.9768 303.16 39.2748 302.953V304.582ZM44.9862 305.608C43.3302 305.608 42.2502 304.168 42.2502 302.368V302.35C42.2502 300.55 43.3482 299.092 45.0042 299.092C46.6512 299.092 47.7402 300.532 47.7402 302.332V302.35C47.7402 304.15 46.6422 305.608 44.9862 305.608ZM45.0042 304.609C45.9852 304.609 46.5972 303.61 46.5972 302.368V302.35C46.5972 301.108 45.9582 300.091 44.9862 300.091C44.0142 300.091 43.3932 301.081 43.3932 302.332V302.35C43.3932 303.592 44.0232 304.609 45.0042 304.609Z" fill="#7D7D7D"/>
<path d="M235 318.833C235 318.281 235.448 317.833 236 317.833H246C246.552 317.833 247 318.281 247 318.833V328.833C247 329.386 246.552 329.833 246 329.833H236C235.448 329.833 235 329.386 235 328.833V318.833Z" fill="#42477A"/>
<path d="M284 318.833C284 318.281 284.448 317.833 285 317.833H295C295.552 317.833 296 318.281 296 318.833V328.833C296 329.386 295.552 329.833 295 329.833H285C284.448 329.833 284 329.386 284 328.833V318.833Z" fill="#E34101"/>
<path d="M352.953 111.891V279.006" stroke="#B0B0B0" stroke-width="2"/>
<path d="M345.5 111.891H360.5" stroke="#B0B0B0" stroke-width="2"/>
<path d="M345.5 279.006H360.5" stroke="#B0B0B0" stroke-width="2"/>
<path d="M226.953 63.2251V262.375" stroke="#B0B0B0" stroke-width="2"/>
<path d="M219.5 63.2251H234.5" stroke="#B0B0B0" stroke-width="2"/>
<path d="M219.5 262.375H234.5" stroke="#B0B0B0" stroke-width="2"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_4413_662" x1="227" y1="174.069" x2="227" y2="304" gradientUnits="userSpaceOnUse">
<stop stop-color="#9198D9"/>
<stop offset="1" stop-color="#3E4375"/>
</linearGradient>
<linearGradient id="paint1_linear_4413_662" x1="353" y1="192.259" x2="353" y2="304" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7944"/>
<stop offset="1" stop-color="#E24000"/>
</linearGradient>
<clipPath id="clip0_4413_662">
<rect width="542" height="318" fill="white"/>
</clipPath>
</defs>
</svg>
  <div class="legend my-3" style="pointer-events: auto;">
    <div class="legend-item legend-item--1" style="pointer-events: auto;">
    <div class="legend-item__color"></div>
    <div class="legend-item__label" style="pointer-events: auto;">MSA</div>
    </div>
    <div class="legend-item legend-item--0 ">
    <div class="legend-item__color"></div>
    <div class="legend-item__label">Municipal</div>
    </div>
  </div>
</div>

<p class="map-notes text-center mb-5">
Note: estimated average difference (and 95% confidence intervals) in monthly median rent between impoverished neighborhoods with high and low levels of exclusionary zoning, separately for above-average poverty (>13%) neighborhoods at the metro level (blue bar) and the municipal level (orange bar).
</p>

While these may at first appear to be relatively small numbers, they add up. In areas that have had above-average levels of exclusionary zoning for the past two decades, this amounts to $50 more in rent each month and $600 more in rent each year since 2000. These are additional costs on top of all the other factors driving housing to be more expensive everywhere. This means that residents in the most disadvantaged neighborhoods are paying more for arbitrary zoning rules, oftentimes implemented in other, more affluent jurisdictions. 

{{< pullquote "Residents in the most disadvantaged neighborhoods are paying more for arbitrary zoning rules, oftentimes implemented in other, more affluent jurisdictions. " >}}

Property values also increase faster in poor neighborhoods in more-restrictively zoned areas, pushing properties out of reach for low-income households. Results indicate that each decade of restrictive zoning is associated with an average decline of 1-2 percentage points in the stock of housing affordable to households with below-median earnings. In the New York City metro area, this corresponds to an estimated loss of just over 137,000 low-cost apartments over two decades simply due to exclusionary zoning. 

<div class="chart chart3-wrapper">
<h3 class="chart__title" style="pointer-events: auto;">Figure 4. Increase in median home values in neighborhoods exposed to exclusionary zoning (at MSA and municipal level)</h3>
<div class="chart3-hitarea" style="left: 20.51%; top: 52.8%; width: 20.60%; height: 28.13%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">MSA / Above-Average Poverty</div>
    <div class="tooltip__item"><strong>$16,067</strong></div>
    <div class="tooltip__item">CI: $6,430 to $26,407</div>
  </div>
</div>
<div class="chart3-hitarea" style="left: 43.73%; top: 41.95%; width: 20.60%; height: 38.92%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">Municipal / Above-Average Poverty</div>
    <div class="tooltip__item"><strong>$22,341</strong></div>
    <div class="tooltip__item">CI: $13,907 to $31,909</div>
  </div>
</div>
<div class="chart3-hitarea" style="left: 66.95%; top:38.06%; width: 20.60%; height: 42.85%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">Municipal / High Poverty</div>
    <div class="tooltip__item"><strong>$24,588</strong></div>
    <div class="tooltip__item">CI: $6,133 to $47,223</div>
  </div>
</div>
<svg width="534" height="316" viewBox="0 0 534 316" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4413_616)">
<mask id="mask0_4413_616" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="534" height="342">
<path d="M534 0H0V342H534V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_4413_616)">
<path d="M0 -186H534V342H0V-186Z" fill="#F5F7F9"/>
<path d="M58.5 21.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 49.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 77.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 105.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 133.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 161.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 189.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 217.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 245.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 273.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M58.5 301.5H518.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M219.5 300H109.5V212.21C109.5 211.58 110.395 211.07 111.5 211.07H217.5C218.605 211.07 219.5 211.58 219.5 212.21V300Z" fill="url(#paint0_linear_4413_616)"/>
<path d="M343.5 300H233.5V177.931C233.5 177.301 234.395 176.791 235.5 176.791H341.5C342.605 176.791 343.5 177.301 343.5 177.931V300Z" fill="url(#paint1_linear_4413_616)"/>
<path d="M467.5 300H357.5V165.653C357.5 165.023 358.395 164.513 359.5 164.513H465.5C466.605 164.513 467.5 165.023 467.5 165.653V300Z" fill="url(#paint2_linear_4413_616)"/>
<path d="M16.0757 24.3822V23.4822C15.2927 23.3922 14.5637 23.0772 13.9517 22.5912L14.5277 21.7722C15.0407 22.1862 15.5267 22.4562 16.1117 22.5462V20.7822C14.7977 20.4402 14.1857 19.9452 14.1857 18.9372V18.9192C14.1857 17.9472 14.9507 17.2902 16.0757 17.2002V16.6782H16.8587V17.2182C17.5157 17.2992 18.0557 17.5332 18.5507 17.9022L18.0467 18.7482C17.6507 18.4512 17.2457 18.2622 16.8227 18.1722V19.8822C18.1907 20.2242 18.7757 20.7732 18.7757 21.7362V21.7542C18.7757 22.7352 18.0017 23.3922 16.8587 23.4912V24.3822H16.0757ZM16.1117 19.6932V18.1092C15.5447 18.1542 15.2477 18.4602 15.2477 18.8562V18.8742C15.2477 19.2432 15.4187 19.4862 16.1117 19.6932ZM16.8227 22.5822C17.3897 22.5372 17.7137 22.2492 17.7137 21.8172V21.7992C17.7137 21.4032 17.5247 21.1602 16.8227 20.9532V22.5822ZM22.0212 23.6082C21.0582 23.6082 20.3022 23.2212 19.7082 22.6452L20.3922 21.8442C20.8962 22.3122 21.4272 22.6002 22.0122 22.6002C22.7682 22.6002 23.2632 22.1682 23.2632 21.5112V21.4932C23.2632 20.8542 22.7232 20.4492 21.9582 20.4492C21.5082 20.4492 21.1212 20.5752 20.7972 20.7282L20.1312 20.2872L20.3112 17.2002H24.0732V18.1812H21.2652L21.1662 19.6572C21.4632 19.5492 21.7422 19.4772 22.1652 19.4772C23.3892 19.4772 24.3522 20.1252 24.3522 21.4572V21.4752C24.3522 22.7622 23.4162 23.6082 22.0212 23.6082ZM28.1328 23.6082C26.4768 23.6082 25.3968 22.1682 25.3968 20.3682V20.3502C25.3968 18.5502 26.4948 17.0922 28.1508 17.0922C29.7978 17.0922 30.8868 18.5322 30.8868 20.3322V20.3502C30.8868 22.1502 29.7888 23.6082 28.1328 23.6082ZM28.1508 22.6092C29.1318 22.6092 29.7438 21.6102 29.7438 20.3682V20.3502C29.7438 19.1082 29.1048 18.0912 28.1328 18.0912C27.1608 18.0912 26.5398 19.0812 26.5398 20.3322V20.3502C26.5398 21.5922 27.1698 22.6092 28.1508 22.6092ZM31.6437 24.8052L31.5267 24.3462C32.0757 24.2382 32.3367 23.9592 32.2917 23.5002H31.8327V22.2672H33.0297V23.3112C33.0297 24.3102 32.5527 24.7332 31.6437 24.8052ZM36.7109 23.6082C35.0549 23.6082 33.9749 22.1682 33.9749 20.3682V20.3502C33.9749 18.5502 35.0729 17.0922 36.7289 17.0922C38.3759 17.0922 39.4649 18.5322 39.4649 20.3322V20.3502C39.4649 22.1502 38.3669 23.6082 36.7109 23.6082ZM36.7289 22.6092C37.7099 22.6092 38.3219 21.6102 38.3219 20.3682V20.3502C38.3219 19.1082 37.6829 18.0912 36.7109 18.0912C35.7389 18.0912 35.1179 19.0812 35.1179 20.3322V20.3502C35.1179 21.5922 35.7479 22.6092 36.7289 22.6092ZM43.2236 23.6082C41.5676 23.6082 40.4876 22.1682 40.4876 20.3682V20.3502C40.4876 18.5502 41.5856 17.0922 43.2416 17.0922C44.8886 17.0922 45.9776 18.5322 45.9776 20.3322V20.3502C45.9776 22.1502 44.8796 23.6082 43.2236 23.6082ZM43.2416 22.6092C44.2226 22.6092 44.8346 21.6102 44.8346 20.3682V20.3502C44.8346 19.1082 44.1956 18.0912 43.2236 18.0912C42.2516 18.0912 41.6306 19.0812 41.6306 20.3322V20.3502C41.6306 21.5922 42.2606 22.6092 43.2416 22.6092ZM49.7363 23.6082C48.0803 23.6082 47.0003 22.1682 47.0003 20.3682V20.3502C47.0003 18.5502 48.0983 17.0922 49.7543 17.0922C51.4013 17.0922 52.4903 18.5322 52.4903 20.3322V20.3502C52.4903 22.1502 51.3923 23.6082 49.7363 23.6082ZM49.7543 22.6092C50.7353 22.6092 51.3473 21.6102 51.3473 20.3682V20.3502C51.3473 19.1082 50.7083 18.0912 49.7363 18.0912C48.7643 18.0912 48.1433 19.0812 48.1433 20.3322V20.3502C48.1433 21.5922 48.7733 22.6092 49.7543 22.6092Z" fill="#7D7D7D"/>
<path d="M16.2866 52.3822V51.4822C15.5036 51.3922 14.7746 51.0772 14.1626 50.5912L14.7386 49.7722C15.2516 50.1862 15.7376 50.4562 16.3226 50.5462V48.7822C15.0086 48.4402 14.3966 47.9452 14.3966 46.9372V46.9192C14.3966 45.9472 15.1616 45.2902 16.2866 45.2002V44.6782H17.0696V45.2182C17.7266 45.2992 18.2666 45.5332 18.7616 45.9022L18.2576 46.7482C17.8616 46.4512 17.4566 46.2622 17.0336 46.1722V47.8822C18.4016 48.2242 18.9866 48.7732 18.9866 49.7362V49.7542C18.9866 50.7352 18.2126 51.3922 17.0696 51.4912V52.3822H16.2866ZM16.3226 47.6932V46.1092C15.7556 46.1542 15.4586 46.4602 15.4586 46.8562V46.8742C15.4586 47.2432 15.6296 47.4862 16.3226 47.6932ZM17.0336 50.5822C17.6006 50.5372 17.9246 50.2492 17.9246 49.8172V49.7992C17.9246 49.4032 17.7356 49.1602 17.0336 48.9532V50.5822ZM23.204 51.5002V50.0872H20.027L19.82 49.2952L23.321 45.1552H24.266V49.1782H25.166V50.0872H24.266V51.5002H23.204ZM21.134 49.1782H23.204V46.6852L21.134 49.1782ZM28.358 51.6082C27.395 51.6082 26.639 51.2212 26.045 50.6452L26.729 49.8442C27.233 50.3122 27.764 50.6002 28.349 50.6002C29.105 50.6002 29.6 50.1682 29.6 49.5112V49.4932C29.6 48.8542 29.06 48.4492 28.295 48.4492C27.845 48.4492 27.458 48.5752 27.134 48.7282L26.468 48.2872L26.648 45.2002H30.41V46.1812H27.602L27.503 47.6572C27.8 47.5492 28.079 47.4772 28.502 47.4772C29.726 47.4772 30.689 48.1252 30.689 49.4572V49.4752C30.689 50.7622 29.753 51.6082 28.358 51.6082ZM31.6436 52.8052L31.5266 52.3462C32.0756 52.2382 32.3366 51.9592 32.2916 51.5002H31.8326V50.2672H33.0296V51.3112C33.0296 52.3102 32.5526 52.7332 31.6436 52.8052ZM36.7108 51.6082C35.0548 51.6082 33.9748 50.1682 33.9748 48.3682V48.3502C33.9748 46.5502 35.0728 45.0922 36.7288 45.0922C38.3758 45.0922 39.4648 46.5322 39.4648 48.3322V48.3502C39.4648 50.1502 38.3668 51.6082 36.7108 51.6082ZM36.7288 50.6092C37.7098 50.6092 38.3218 49.6102 38.3218 48.3682V48.3502C38.3218 47.1082 37.6828 46.0912 36.7108 46.0912C35.7388 46.0912 35.1178 47.0812 35.1178 48.3322V48.3502C35.1178 49.5922 35.7478 50.6092 36.7288 50.6092ZM43.2235 51.6082C41.5675 51.6082 40.4875 50.1682 40.4875 48.3682V48.3502C40.4875 46.5502 41.5855 45.0922 43.2415 45.0922C44.8885 45.0922 45.9775 46.5322 45.9775 48.3322V48.3502C45.9775 50.1502 44.8795 51.6082 43.2235 51.6082ZM43.2415 50.6092C44.2225 50.6092 44.8345 49.6102 44.8345 48.3682V48.3502C44.8345 47.1082 44.1955 46.0912 43.2235 46.0912C42.2515 46.0912 41.6305 47.0812 41.6305 48.3322V48.3502C41.6305 49.5922 42.2605 50.6092 43.2415 50.6092ZM49.7362 51.6082C48.0802 51.6082 47.0002 50.1682 47.0002 48.3682V48.3502C47.0002 46.5502 48.0982 45.0922 49.7542 45.0922C51.4012 45.0922 52.4902 46.5322 52.4902 48.3322V48.3502C52.4902 50.1502 51.3922 51.6082 49.7362 51.6082ZM49.7542 50.6092C50.7352 50.6092 51.3472 49.6102 51.3472 48.3682V48.3502C51.3472 47.1082 50.7082 46.0912 49.7362 46.0912C48.7642 46.0912 48.1432 47.0812 48.1432 48.3322V48.3502C48.1432 49.5922 48.7732 50.6092 49.7542 50.6092Z" fill="#7D7D7D"/>
<path d="M15.5483 80.3822V79.4822C14.7653 79.3922 14.0363 79.0772 13.4243 78.5912L14.0003 77.7722C14.5133 78.1862 14.9993 78.4562 15.5843 78.5462V76.7822C14.2703 76.4402 13.6583 75.9452 13.6583 74.9372V74.9192C13.6583 73.9472 14.4233 73.2902 15.5483 73.2002V72.6782H16.3313V73.2182C16.9883 73.2992 17.5283 73.5332 18.0233 73.9022L17.5193 74.7482C17.1233 74.4512 16.7183 74.2622 16.2953 74.1722V75.8822C17.6633 76.2242 18.2483 76.7732 18.2483 77.7362V77.7542C18.2483 78.7352 17.4743 79.3922 16.3313 79.4912V80.3822H15.5483ZM15.5843 75.6932V74.1092C15.0173 74.1542 14.7203 74.4602 14.7203 74.8562V74.8742C14.7203 75.2432 14.8913 75.4862 15.5843 75.6932ZM16.2953 78.5822C16.8623 78.5372 17.1863 78.2492 17.1863 77.8172V77.7992C17.1863 77.4032 16.9973 77.1602 16.2953 76.9532V78.5822ZM22.4657 79.5002V78.0872H19.2887L19.0817 77.2952L22.5827 73.1552H23.5277V77.1782H24.4277V78.0872H23.5277V79.5002H22.4657ZM20.3957 77.1782H22.4657V74.6852L20.3957 77.1782ZM28.1327 79.6082C26.4767 79.6082 25.3967 78.1682 25.3967 76.3682V76.3502C25.3967 74.5502 26.4947 73.0922 28.1507 73.0922C29.7977 73.0922 30.8867 74.5322 30.8867 76.3322V76.3502C30.8867 78.1502 29.7887 79.6082 28.1327 79.6082ZM28.1507 78.6092C29.1317 78.6092 29.7437 77.6102 29.7437 76.3682V76.3502C29.7437 75.1082 29.1047 74.0912 28.1327 74.0912C27.1607 74.0912 26.5397 75.0812 26.5397 76.3322V76.3502C26.5397 77.5922 27.1697 78.6092 28.1507 78.6092ZM31.6436 80.8052L31.5266 80.3462C32.0756 80.2382 32.3366 79.9592 32.2916 79.5002H31.8326V78.2672H33.0296V79.3112C33.0296 80.3102 32.5526 80.7332 31.6436 80.8052ZM36.7108 79.6082C35.0548 79.6082 33.9748 78.1682 33.9748 76.3682V76.3502C33.9748 74.5502 35.0728 73.0922 36.7288 73.0922C38.3758 73.0922 39.4648 74.5322 39.4648 76.3322V76.3502C39.4648 78.1502 38.3668 79.6082 36.7108 79.6082ZM36.7288 78.6092C37.7098 78.6092 38.3218 77.6102 38.3218 76.3682V76.3502C38.3218 75.1082 37.6828 74.0912 36.7108 74.0912C35.7388 74.0912 35.1178 75.0812 35.1178 76.3322V76.3502C35.1178 77.5922 35.7478 78.6092 36.7288 78.6092ZM43.2235 79.6082C41.5675 79.6082 40.4875 78.1682 40.4875 76.3682V76.3502C40.4875 74.5502 41.5855 73.0922 43.2415 73.0922C44.8885 73.0922 45.9775 74.5322 45.9775 76.3322V76.3502C45.9775 78.1502 44.8795 79.6082 43.2235 79.6082ZM43.2415 78.6092C44.2225 78.6092 44.8345 77.6102 44.8345 76.3682V76.3502C44.8345 75.1082 44.1955 74.0912 43.2235 74.0912C42.2515 74.0912 41.6305 75.0812 41.6305 76.3322V76.3502C41.6305 77.5922 42.2605 78.6092 43.2415 78.6092ZM49.7362 79.6082C48.0802 79.6082 47.0002 78.1682 47.0002 76.3682V76.3502C47.0002 74.5502 48.0982 73.0922 49.7542 73.0922C51.4012 73.0922 52.4902 74.5322 52.4902 76.3322V76.3502C52.4902 78.1502 51.3922 79.6082 49.7362 79.6082ZM49.7542 78.6092C50.7352 78.6092 51.3472 77.6102 51.3472 76.3682V76.3502C51.3472 75.1082 50.7082 74.0912 49.7362 74.0912C48.7642 74.0912 48.1432 75.0812 48.1432 76.3322V76.3502C48.1432 77.5922 48.7732 78.6092 49.7542 78.6092Z" fill="#7D7D7D"/>
<path d="M16.893 108.382V107.482C16.11 107.392 15.381 107.077 14.769 106.591L15.345 105.772C15.858 106.186 16.344 106.456 16.929 106.546V104.782C15.615 104.44 15.003 103.945 15.003 102.937V102.919C15.003 101.947 15.768 101.29 16.893 101.2V100.678H17.676V101.218C18.333 101.299 18.873 101.533 19.368 101.902L18.864 102.748C18.468 102.451 18.063 102.262 17.64 102.172V103.882C19.008 104.224 19.593 104.773 19.593 105.736V105.754C19.593 106.735 18.819 107.392 17.676 107.491V108.382H16.893ZM16.929 103.693V102.109C16.362 102.154 16.065 102.46 16.065 102.856V102.874C16.065 103.243 16.236 103.486 16.929 103.693ZM17.64 106.582C18.207 106.537 18.531 106.249 18.531 105.817V105.799C18.531 105.403 18.342 105.16 17.64 104.953V106.582ZM22.9014 107.608C21.8034 107.608 21.0204 107.149 20.4894 106.501L21.2634 105.781C21.7134 106.312 22.2174 106.609 22.9194 106.609C23.5404 106.609 24.0084 106.231 24.0084 105.655V105.637C24.0084 105.016 23.4414 104.665 22.5594 104.665H22.0464L21.8664 103.972L23.5674 102.163H20.8404V101.2H25.0074V102.028L23.2524 103.828C24.2064 103.954 25.1064 104.431 25.1064 105.601V105.619C25.1064 106.78 24.2064 107.608 22.9014 107.608ZM28.358 107.608C27.395 107.608 26.639 107.221 26.045 106.645L26.729 105.844C27.233 106.312 27.764 106.6 28.349 106.6C29.105 106.6 29.6 106.168 29.6 105.511V105.493C29.6 104.854 29.06 104.449 28.295 104.449C27.845 104.449 27.458 104.575 27.134 104.728L26.468 104.287L26.648 101.2H30.41V102.181H27.602L27.503 103.657C27.8 103.549 28.079 103.477 28.502 103.477C29.726 103.477 30.689 104.125 30.689 105.457V105.475C30.689 106.762 29.753 107.608 28.358 107.608ZM31.6436 108.805L31.5266 108.346C32.0756 108.238 32.3366 107.959 32.2916 107.5H31.8326V106.267H33.0296V107.311C33.0296 108.31 32.5526 108.733 31.6436 108.805ZM36.7108 107.608C35.0548 107.608 33.9748 106.168 33.9748 104.368V104.35C33.9748 102.55 35.0728 101.092 36.7288 101.092C38.3758 101.092 39.4648 102.532 39.4648 104.332V104.35C39.4648 106.15 38.3668 107.608 36.7108 107.608ZM36.7288 106.609C37.7098 106.609 38.3218 105.61 38.3218 104.368V104.35C38.3218 103.108 37.6828 102.091 36.7108 102.091C35.7388 102.091 35.1178 103.081 35.1178 104.332V104.35C35.1178 105.592 35.7478 106.609 36.7288 106.609ZM43.2235 107.608C41.5675 107.608 40.4875 106.168 40.4875 104.368V104.35C40.4875 102.55 41.5855 101.092 43.2415 101.092C44.8885 101.092 45.9775 102.532 45.9775 104.332V104.35C45.9775 106.15 44.8795 107.608 43.2235 107.608ZM43.2415 106.609C44.2225 106.609 44.8345 105.61 44.8345 104.368V104.35C44.8345 103.108 44.1955 102.091 43.2235 102.091C42.2515 102.091 41.6305 103.081 41.6305 104.332V104.35C41.6305 105.592 42.2605 106.609 43.2415 106.609ZM49.7362 107.608C48.0802 107.608 47.0002 106.168 47.0002 104.368V104.35C47.0002 102.55 48.0982 101.092 49.7542 101.092C51.4012 101.092 52.4902 102.532 52.4902 104.332V104.35C52.4902 106.15 51.3922 107.608 49.7362 107.608ZM49.7542 106.609C50.7352 106.609 51.3472 105.61 51.3472 104.368V104.35C51.3472 103.108 50.7082 102.091 49.7362 102.091C48.7642 102.091 48.1432 103.081 48.1432 104.332V104.35C48.1432 105.592 48.7732 106.609 49.7542 106.609Z" fill="#7D7D7D"/>
<path d="M16.1108 136.382V135.482C15.3278 135.392 14.5988 135.077 13.9868 134.591L14.5628 133.772C15.0758 134.186 15.5618 134.456 16.1468 134.546V132.782C14.8328 132.44 14.2208 131.945 14.2208 130.937V130.919C14.2208 129.947 14.9858 129.29 16.1108 129.2V128.678H16.8938V129.218C17.5508 129.299 18.0908 129.533 18.5858 129.902L18.0818 130.748C17.6858 130.451 17.2808 130.262 16.8578 130.172V131.882C18.2258 132.224 18.8108 132.773 18.8108 133.736V133.754C18.8108 134.735 18.0368 135.392 16.8938 135.491V136.382H16.1108ZM16.1468 131.693V130.109C15.5798 130.154 15.2828 130.46 15.2828 130.856V130.874C15.2828 131.243 15.4538 131.486 16.1468 131.693ZM16.8578 134.582C17.4248 134.537 17.7488 134.249 17.7488 133.817V133.799C17.7488 133.403 17.5598 133.16 16.8578 132.953V134.582ZM22.1192 135.608C21.0212 135.608 20.2382 135.149 19.7072 134.501L20.4812 133.781C20.9312 134.312 21.4352 134.609 22.1372 134.609C22.7582 134.609 23.2262 134.231 23.2262 133.655V133.637C23.2262 133.016 22.6592 132.665 21.7772 132.665H21.2642L21.0842 131.972L22.7852 130.163H20.0582V129.2H24.2252V130.028L22.4702 131.828C23.4242 131.954 24.3242 132.431 24.3242 133.601V133.619C24.3242 134.78 23.4242 135.608 22.1192 135.608ZM28.1327 135.608C26.4767 135.608 25.3967 134.168 25.3967 132.368V132.35C25.3967 130.55 26.4947 129.092 28.1507 129.092C29.7977 129.092 30.8867 130.532 30.8867 132.332V132.35C30.8867 134.15 29.7887 135.608 28.1327 135.608ZM28.1507 134.609C29.1317 134.609 29.7437 133.61 29.7437 132.368V132.35C29.7437 131.108 29.1047 130.091 28.1327 130.091C27.1607 130.091 26.5397 131.081 26.5397 132.332V132.35C26.5397 133.592 27.1697 134.609 28.1507 134.609ZM31.6436 136.805L31.5266 136.346C32.0756 136.238 32.3366 135.959 32.2916 135.5H31.8326V134.267H33.0296V135.311C33.0296 136.31 32.5526 136.733 31.6436 136.805ZM36.7108 135.608C35.0548 135.608 33.9748 134.168 33.9748 132.368V132.35C33.9748 130.55 35.0728 129.092 36.7288 129.092C38.3758 129.092 39.4648 130.532 39.4648 132.332V132.35C39.4648 134.15 38.3668 135.608 36.7108 135.608ZM36.7288 134.609C37.7098 134.609 38.3218 133.61 38.3218 132.368V132.35C38.3218 131.108 37.6828 130.091 36.7108 130.091C35.7388 130.091 35.1178 131.081 35.1178 132.332V132.35C35.1178 133.592 35.7478 134.609 36.7288 134.609ZM43.2235 135.608C41.5675 135.608 40.4875 134.168 40.4875 132.368V132.35C40.4875 130.55 41.5855 129.092 43.2415 129.092C44.8885 129.092 45.9775 130.532 45.9775 132.332V132.35C45.9775 134.15 44.8795 135.608 43.2235 135.608ZM43.2415 134.609C44.2225 134.609 44.8345 133.61 44.8345 132.368V132.35C44.8345 131.108 44.1955 130.091 43.2235 130.091C42.2515 130.091 41.6305 131.081 41.6305 132.332V132.35C41.6305 133.592 42.2605 134.609 43.2415 134.609ZM49.7362 135.608C48.0802 135.608 47.0002 134.168 47.0002 132.368V132.35C47.0002 130.55 48.0982 129.092 49.7542 129.092C51.4012 129.092 52.4902 130.532 52.4902 132.332V132.35C52.4902 134.15 51.3922 135.608 49.7362 135.608ZM49.7542 134.609C50.7352 134.609 51.3472 133.61 51.3472 132.368V132.35C51.3472 131.108 50.7082 130.091 49.7362 130.091C48.7642 130.091 48.1432 131.081 48.1432 132.332V132.35C48.1432 133.592 48.7732 134.609 49.7542 134.609Z" fill="#7D7D7D"/>
<path d="M16.893 164.382V163.482C16.11 163.392 15.381 163.077 14.769 162.591L15.345 161.772C15.858 162.186 16.344 162.456 16.929 162.546V160.782C15.615 160.44 15.003 159.945 15.003 158.937V158.919C15.003 157.947 15.768 157.29 16.893 157.2V156.678H17.676V157.218C18.333 157.299 18.873 157.533 19.368 157.902L18.864 158.748C18.468 158.451 18.063 158.262 17.64 158.172V159.882C19.008 160.224 19.593 160.773 19.593 161.736V161.754C19.593 162.735 18.819 163.392 17.676 163.491V164.382H16.893ZM16.929 159.693V158.109C16.362 158.154 16.065 158.46 16.065 158.856V158.874C16.065 159.243 16.236 159.486 16.929 159.693ZM17.64 162.582C18.207 162.537 18.531 162.249 18.531 161.817V161.799C18.531 161.403 18.342 161.16 17.64 160.953V162.582ZM20.5434 163.5V162.627L22.7124 160.782C23.5764 160.053 23.8914 159.648 23.8914 159.081C23.8914 158.46 23.4504 158.1 22.8744 158.1C22.2984 158.1 21.9024 158.415 21.4164 159.045L20.6334 158.433C21.2364 157.587 21.8304 157.11 22.9554 157.11C24.1884 157.11 25.0344 157.866 25.0344 158.991V159.009C25.0344 159.999 24.5124 160.539 23.3964 161.448L22.1004 162.528H25.0974V163.5H20.5434ZM28.358 163.608C27.395 163.608 26.639 163.221 26.045 162.645L26.729 161.844C27.233 162.312 27.764 162.6 28.349 162.6C29.105 162.6 29.6 162.168 29.6 161.511V161.493C29.6 160.854 29.06 160.449 28.295 160.449C27.845 160.449 27.458 160.575 27.134 160.728L26.468 160.287L26.648 157.2H30.41V158.181H27.602L27.503 159.657C27.8 159.549 28.079 159.477 28.502 159.477C29.726 159.477 30.689 160.125 30.689 161.457V161.475C30.689 162.762 29.753 163.608 28.358 163.608ZM31.6436 164.805L31.5266 164.346C32.0756 164.238 32.3366 163.959 32.2916 163.5H31.8326V162.267H33.0296V163.311C33.0296 164.31 32.5526 164.733 31.6436 164.805ZM36.7108 163.608C35.0548 163.608 33.9748 162.168 33.9748 160.368V160.35C33.9748 158.55 35.0728 157.092 36.7288 157.092C38.3758 157.092 39.4648 158.532 39.4648 160.332V160.35C39.4648 162.15 38.3668 163.608 36.7108 163.608ZM36.7288 162.609C37.7098 162.609 38.3218 161.61 38.3218 160.368V160.35C38.3218 159.108 37.6828 158.091 36.7108 158.091C35.7388 158.091 35.1178 159.081 35.1178 160.332V160.35C35.1178 161.592 35.7478 162.609 36.7288 162.609ZM43.2235 163.608C41.5675 163.608 40.4875 162.168 40.4875 160.368V160.35C40.4875 158.55 41.5855 157.092 43.2415 157.092C44.8885 157.092 45.9775 158.532 45.9775 160.332V160.35C45.9775 162.15 44.8795 163.608 43.2235 163.608ZM43.2415 162.609C44.2225 162.609 44.8345 161.61 44.8345 160.368V160.35C44.8345 159.108 44.1955 158.091 43.2235 158.091C42.2515 158.091 41.6305 159.081 41.6305 160.332V160.35C41.6305 161.592 42.2605 162.609 43.2415 162.609ZM49.7362 163.608C48.0802 163.608 47.0002 162.168 47.0002 160.368V160.35C47.0002 158.55 48.0982 157.092 49.7542 157.092C51.4012 157.092 52.4902 158.532 52.4902 160.332V160.35C52.4902 162.15 51.3922 163.608 49.7362 163.608ZM49.7542 162.609C50.7352 162.609 51.3472 161.61 51.3472 160.368V160.35C51.3472 159.108 50.7082 158.091 49.7362 158.091C48.7642 158.091 48.1432 159.081 48.1432 160.332V160.35C48.1432 161.592 48.7732 162.609 49.7542 162.609Z" fill="#7D7D7D"/>
<path d="M16.1548 192.382V191.482C15.3718 191.392 14.6428 191.077 14.0308 190.591L14.6068 189.772C15.1198 190.186 15.6058 190.456 16.1908 190.546V188.782C14.8768 188.44 14.2648 187.945 14.2648 186.937V186.919C14.2648 185.947 15.0298 185.29 16.1548 185.2V184.678H16.9378V185.218C17.5948 185.299 18.1348 185.533 18.6298 185.902L18.1258 186.748C17.7298 186.451 17.3248 186.262 16.9018 186.172V187.882C18.2698 188.224 18.8548 188.773 18.8548 189.736V189.754C18.8548 190.735 18.0808 191.392 16.9378 191.491V192.382H16.1548ZM16.1908 187.693V186.109C15.6238 186.154 15.3268 186.46 15.3268 186.856V186.874C15.3268 187.243 15.4978 187.486 16.1908 187.693ZM16.9018 190.582C17.4688 190.537 17.7928 190.249 17.7928 189.817V189.799C17.7928 189.403 17.6038 189.16 16.9018 188.953V190.582ZM19.8053 191.5V190.627L21.9743 188.782C22.8383 188.053 23.1533 187.648 23.1533 187.081C23.1533 186.46 22.7123 186.1 22.1363 186.1C21.5603 186.1 21.1643 186.415 20.6783 187.045L19.8953 186.433C20.4983 185.587 21.0923 185.11 22.2173 185.11C23.4503 185.11 24.2963 185.866 24.2963 186.991V187.009C24.2963 187.999 23.7743 188.539 22.6583 189.448L21.3623 190.528H24.3593V191.5H19.8053ZM28.1328 191.608C26.4768 191.608 25.3968 190.168 25.3968 188.368V188.35C25.3968 186.55 26.4948 185.092 28.1508 185.092C29.7978 185.092 30.8868 186.532 30.8868 188.332V188.35C30.8868 190.15 29.7888 191.608 28.1328 191.608ZM28.1508 190.609C29.1318 190.609 29.7438 189.61 29.7438 188.368V188.35C29.7438 187.108 29.1048 186.091 28.1328 186.091C27.1608 186.091 26.5398 187.081 26.5398 188.332V188.35C26.5398 189.592 27.1698 190.609 28.1508 190.609ZM31.6437 192.805L31.5267 192.346C32.0757 192.238 32.3367 191.959 32.2917 191.5H31.8327V190.267H33.0297V191.311C33.0297 192.31 32.5527 192.733 31.6437 192.805ZM36.7109 191.608C35.0549 191.608 33.9749 190.168 33.9749 188.368V188.35C33.9749 186.55 35.0729 185.092 36.7289 185.092C38.3759 185.092 39.4649 186.532 39.4649 188.332V188.35C39.4649 190.15 38.3669 191.608 36.7109 191.608ZM36.7289 190.609C37.7099 190.609 38.3219 189.61 38.3219 188.368V188.35C38.3219 187.108 37.6829 186.091 36.7109 186.091C35.7389 186.091 35.1179 187.081 35.1179 188.332V188.35C35.1179 189.592 35.7479 190.609 36.7289 190.609ZM43.2236 191.608C41.5676 191.608 40.4876 190.168 40.4876 188.368V188.35C40.4876 186.55 41.5856 185.092 43.2416 185.092C44.8886 185.092 45.9776 186.532 45.9776 188.332V188.35C45.9776 190.15 44.8796 191.608 43.2236 191.608ZM43.2416 190.609C44.2226 190.609 44.8346 189.61 44.8346 188.368V188.35C44.8346 187.108 44.1956 186.091 43.2236 186.091C42.2516 186.091 41.6306 187.081 41.6306 188.332V188.35C41.6306 189.592 42.2606 190.609 43.2416 190.609ZM49.7363 191.608C48.0803 191.608 47.0003 190.168 47.0003 188.368V188.35C47.0003 186.55 48.0983 185.092 49.7543 185.092C51.4013 185.092 52.4903 186.532 52.4903 188.332V188.35C52.4903 190.15 51.3923 191.608 49.7363 191.608ZM49.7543 190.609C50.7353 190.609 51.3473 189.61 51.3473 188.368V188.35C51.3473 187.108 50.7083 186.091 49.7363 186.091C48.7643 186.091 48.1433 187.081 48.1433 188.332V188.35C48.1433 189.592 48.7733 190.609 49.7543 190.609Z" fill="#7D7D7D"/>
<path d="M18.8442 220.382V219.482C18.0612 219.392 17.3322 219.077 16.7202 218.591L17.2962 217.772C17.8092 218.186 18.2952 218.456 18.8802 218.546V216.782C17.5662 216.44 16.9542 215.945 16.9542 214.937V214.919C16.9542 213.947 17.7192 213.29 18.8442 213.2V212.678H19.6272V213.218C20.2842 213.299 20.8242 213.533 21.3192 213.902L20.8152 214.748C20.4192 214.451 20.0142 214.262 19.5912 214.172V215.882C20.9592 216.224 21.5442 216.773 21.5442 217.736V217.754C21.5442 218.735 20.7702 219.392 19.6272 219.491V220.382H18.8442ZM18.8802 215.693V214.109C18.3132 214.154 18.0162 214.46 18.0162 214.856V214.874C18.0162 215.243 18.1872 215.486 18.8802 215.693ZM19.5912 218.582C20.1582 218.537 20.4822 218.249 20.4822 217.817V217.799C20.4822 217.403 20.2932 217.16 19.5912 216.953V218.582ZM23.6556 219.5V214.28L22.5216 214.595L22.2876 213.695L23.9796 213.155H24.7536V219.5H23.6556ZM28.358 219.608C27.395 219.608 26.639 219.221 26.045 218.645L26.729 217.844C27.233 218.312 27.764 218.6 28.349 218.6C29.105 218.6 29.6 218.168 29.6 217.511V217.493C29.6 216.854 29.06 216.449 28.295 216.449C27.845 216.449 27.458 216.575 27.134 216.728L26.468 216.287L26.648 213.2H30.41V214.181H27.602L27.503 215.657C27.8 215.549 28.079 215.477 28.502 215.477C29.726 215.477 30.689 216.125 30.689 217.457V217.475C30.689 218.762 29.753 219.608 28.358 219.608ZM31.6436 220.805L31.5266 220.346C32.0756 220.238 32.3366 219.959 32.2916 219.5H31.8326V218.267H33.0296V219.311C33.0296 220.31 32.5526 220.733 31.6436 220.805ZM36.7108 219.608C35.0548 219.608 33.9748 218.168 33.9748 216.368V216.35C33.9748 214.55 35.0728 213.092 36.7288 213.092C38.3758 213.092 39.4648 214.532 39.4648 216.332V216.35C39.4648 218.15 38.3668 219.608 36.7108 219.608ZM36.7288 218.609C37.7098 218.609 38.3218 217.61 38.3218 216.368V216.35C38.3218 215.108 37.6828 214.091 36.7108 214.091C35.7388 214.091 35.1178 215.081 35.1178 216.332V216.35C35.1178 217.592 35.7478 218.609 36.7288 218.609ZM43.2235 219.608C41.5675 219.608 40.4875 218.168 40.4875 216.368V216.35C40.4875 214.55 41.5855 213.092 43.2415 213.092C44.8885 213.092 45.9775 214.532 45.9775 216.332V216.35C45.9775 218.15 44.8795 219.608 43.2235 219.608ZM43.2415 218.609C44.2225 218.609 44.8345 217.61 44.8345 216.368V216.35C44.8345 215.108 44.1955 214.091 43.2235 214.091C42.2515 214.091 41.6305 215.081 41.6305 216.332V216.35C41.6305 217.592 42.2605 218.609 43.2415 218.609ZM49.7362 219.608C48.0802 219.608 47.0002 218.168 47.0002 216.368V216.35C47.0002 214.55 48.0982 213.092 49.7542 213.092C51.4012 213.092 52.4902 214.532 52.4902 216.332V216.35C52.4902 218.15 51.3922 219.608 49.7362 219.608ZM49.7542 218.609C50.7352 218.609 51.3472 217.61 51.3472 216.368V216.35C51.3472 215.108 50.7082 214.091 49.7362 214.091C48.7642 214.091 48.1432 215.081 48.1432 216.332V216.35C48.1432 217.592 48.7732 218.609 49.7542 218.609Z" fill="#7D7D7D"/>
<path d="M18.1059 248.382V247.482C17.3229 247.392 16.5939 247.077 15.9819 246.591L16.5579 245.772C17.0709 246.186 17.5569 246.456 18.1419 246.546V244.782C16.8279 244.44 16.2159 243.945 16.2159 242.937V242.919C16.2159 241.947 16.9809 241.29 18.1059 241.2V240.678H18.8889V241.218C19.5459 241.299 20.0859 241.533 20.5809 241.902L20.0769 242.748C19.6809 242.451 19.2759 242.262 18.8529 242.172V243.882C20.2209 244.224 20.8059 244.773 20.8059 245.736V245.754C20.8059 246.735 20.0319 247.392 18.8889 247.491V248.382H18.1059ZM18.1419 243.693V242.109C17.5749 242.154 17.2779 242.46 17.2779 242.856V242.874C17.2779 243.243 17.4489 243.486 18.1419 243.693ZM18.8529 246.582C19.4199 246.537 19.7439 246.249 19.7439 245.817V245.799C19.7439 245.403 19.5549 245.16 18.8529 244.953V246.582ZM22.9173 247.5V242.28L21.7833 242.595L21.5493 241.695L23.2413 241.155H24.0153V247.5H22.9173ZM28.1327 247.608C26.4767 247.608 25.3967 246.168 25.3967 244.368V244.35C25.3967 242.55 26.4947 241.092 28.1507 241.092C29.7977 241.092 30.8867 242.532 30.8867 244.332V244.35C30.8867 246.15 29.7887 247.608 28.1327 247.608ZM28.1507 246.609C29.1317 246.609 29.7437 245.61 29.7437 244.368V244.35C29.7437 243.108 29.1047 242.091 28.1327 242.091C27.1607 242.091 26.5397 243.081 26.5397 244.332V244.35C26.5397 245.592 27.1697 246.609 28.1507 246.609ZM31.6436 248.805L31.5266 248.346C32.0756 248.238 32.3366 247.959 32.2916 247.5H31.8326V246.267H33.0296V247.311C33.0296 248.31 32.5526 248.733 31.6436 248.805ZM36.7108 247.608C35.0548 247.608 33.9748 246.168 33.9748 244.368V244.35C33.9748 242.55 35.0728 241.092 36.7288 241.092C38.3758 241.092 39.4648 242.532 39.4648 244.332V244.35C39.4648 246.15 38.3668 247.608 36.7108 247.608ZM36.7288 246.609C37.7098 246.609 38.3218 245.61 38.3218 244.368V244.35C38.3218 243.108 37.6828 242.091 36.7108 242.091C35.7388 242.091 35.1178 243.081 35.1178 244.332V244.35C35.1178 245.592 35.7478 246.609 36.7288 246.609ZM43.2235 247.608C41.5675 247.608 40.4875 246.168 40.4875 244.368V244.35C40.4875 242.55 41.5855 241.092 43.2415 241.092C44.8885 241.092 45.9775 242.532 45.9775 244.332V244.35C45.9775 246.15 44.8795 247.608 43.2235 247.608ZM43.2415 246.609C44.2225 246.609 44.8345 245.61 44.8345 244.368V244.35C44.8345 243.108 44.1955 242.091 43.2235 242.091C42.2515 242.091 41.6305 243.081 41.6305 244.332V244.35C41.6305 245.592 42.2605 246.609 43.2415 246.609ZM49.7362 247.608C48.0802 247.608 47.0002 246.168 47.0002 244.368V244.35C47.0002 242.55 48.0982 241.092 49.7542 241.092C51.4012 241.092 52.4902 242.532 52.4902 244.332V244.35C52.4902 246.15 51.3922 247.608 49.7362 247.608ZM49.7542 246.609C50.7352 246.609 51.3472 245.61 51.3472 244.368V244.35C51.3472 243.108 50.7082 242.091 49.7362 242.091C48.7642 242.091 48.1432 243.081 48.1432 244.332V244.35C48.1432 245.592 48.7732 246.609 49.7542 246.609Z" fill="#7D7D7D"/>
<path d="M24.6538 276.382V275.482C23.8708 275.392 23.1418 275.077 22.5298 274.591L23.1058 273.772C23.6188 274.186 24.1048 274.456 24.6898 274.546V272.782C23.3758 272.44 22.7638 271.945 22.7638 270.937V270.919C22.7638 269.947 23.5288 269.29 24.6538 269.2V268.678H25.4368V269.218C26.0938 269.299 26.6338 269.533 27.1288 269.902L26.6248 270.748C26.2288 270.451 25.8238 270.262 25.4008 270.172V271.882C26.7688 272.224 27.3538 272.773 27.3538 273.736V273.754C27.3538 274.735 26.5798 275.392 25.4368 275.491V276.382H24.6538ZM24.6898 271.693V270.109C24.1228 270.154 23.8258 270.46 23.8258 270.856V270.874C23.8258 271.243 23.9968 271.486 24.6898 271.693ZM25.4008 274.582C25.9678 274.537 26.2918 274.249 26.2918 273.817V273.799C26.2918 273.403 26.1028 273.16 25.4008 272.953V274.582ZM30.5992 275.608C29.6362 275.608 28.8802 275.221 28.2862 274.645L28.9702 273.844C29.4742 274.312 30.0052 274.6 30.5902 274.6C31.3462 274.6 31.8412 274.168 31.8412 273.511V273.493C31.8412 272.854 31.3012 272.449 30.5362 272.449C30.0862 272.449 29.6992 272.575 29.3752 272.728L28.7092 272.287L28.8892 269.2H32.6512V270.181H29.8432L29.7442 271.657C30.0412 271.549 30.3202 271.477 30.7432 271.477C31.9672 271.477 32.9302 272.125 32.9302 273.457V273.475C32.9302 274.762 31.9942 275.608 30.5992 275.608ZM36.7108 275.608C35.0548 275.608 33.9748 274.168 33.9748 272.368V272.35C33.9748 270.55 35.0728 269.092 36.7288 269.092C38.3758 269.092 39.4648 270.532 39.4648 272.332V272.35C39.4648 274.15 38.3668 275.608 36.7108 275.608ZM36.7288 274.609C37.7098 274.609 38.3218 273.61 38.3218 272.368V272.35C38.3218 271.108 37.6828 270.091 36.7108 270.091C35.7388 270.091 35.1178 271.081 35.1178 272.332V272.35C35.1178 273.592 35.7478 274.609 36.7288 274.609ZM43.2235 275.608C41.5675 275.608 40.4875 274.168 40.4875 272.368V272.35C40.4875 270.55 41.5855 269.092 43.2415 269.092C44.8885 269.092 45.9775 270.532 45.9775 272.332V272.35C45.9775 274.15 44.8795 275.608 43.2235 275.608ZM43.2415 274.609C44.2225 274.609 44.8345 273.61 44.8345 272.368V272.35C44.8345 271.108 44.1955 270.091 43.2235 270.091C42.2515 270.091 41.6305 271.081 41.6305 272.332V272.35C41.6305 273.592 42.2605 274.609 43.2415 274.609ZM49.7362 275.608C48.0802 275.608 47.0002 274.168 47.0002 272.368V272.35C47.0002 270.55 48.0982 269.092 49.7542 269.092C51.4012 269.092 52.4902 270.532 52.4902 272.332V272.35C52.4902 274.15 51.3922 275.608 49.7362 275.608ZM49.7542 274.609C50.7352 274.609 51.3472 273.61 51.3472 272.368V272.35C51.3472 271.108 50.7082 270.091 49.7362 270.091C48.7642 270.091 48.1432 271.081 48.1432 272.332V272.35C48.1432 273.592 48.7732 274.609 49.7542 274.609Z" fill="#7D7D7D"/>
<path d="M43.2778 304.382V303.482C42.4948 303.392 41.7658 303.077 41.1538 302.591L41.7298 301.772C42.2428 302.186 42.7288 302.456 43.3138 302.546V300.782C41.9998 300.44 41.3878 299.945 41.3878 298.937V298.919C41.3878 297.947 42.1528 297.29 43.2778 297.2V296.678H44.0608V297.218C44.7178 297.299 45.2578 297.533 45.7528 297.902L45.2488 298.748C44.8528 298.451 44.4478 298.262 44.0248 298.172V299.882C45.3928 300.224 45.9778 300.773 45.9778 301.736V301.754C45.9778 302.735 45.2038 303.392 44.0608 303.491V304.382H43.2778ZM43.3138 299.693V298.109C42.7468 298.154 42.4498 298.46 42.4498 298.856V298.874C42.4498 299.243 42.6208 299.486 43.3138 299.693ZM44.0248 302.582C44.5918 302.537 44.9158 302.249 44.9158 301.817V301.799C44.9158 301.403 44.7268 301.16 44.0248 300.953V302.582ZM49.7362 303.608C48.0802 303.608 47.0002 302.168 47.0002 300.368V300.35C47.0002 298.55 48.0982 297.092 49.7542 297.092C51.4012 297.092 52.4902 298.532 52.4902 300.332V300.35C52.4902 302.15 51.3922 303.608 49.7362 303.608ZM49.7542 302.609C50.7352 302.609 51.3472 301.61 51.3472 300.368V300.35C51.3472 299.108 50.7082 298.091 49.7362 298.091C48.7642 298.091 48.1432 299.081 48.1432 300.332V300.35C48.1432 301.592 48.7732 302.609 49.7542 302.609Z" fill="#7D7D7D"/>
<path d="M412.5 41.9751V266.488" stroke="#B0B0B0" stroke-width="2"/>
<path d="M405 41.9751H420" stroke="#B0B0B0" stroke-width="2"/>
<path d="M405 266.488H420" stroke="#B0B0B0" stroke-width="2"/>
<path d="M288.5 125.648V224.013" stroke="#B0B0B0" stroke-width="2"/>
<path d="M281 125.648H296" stroke="#B0B0B0" stroke-width="2"/>
<path d="M281 224.013H296" stroke="#B0B0B0" stroke-width="2"/>
<path d="M164.5 155.715V264.867" stroke="#B0B0B0" stroke-width="2"/>
<path d="M157 264.867H172" stroke="#B0B0B0" stroke-width="2"/>
<path d="M157 155.715H172" stroke="#B0B0B0" stroke-width="2"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_4413_616" x1="164.5" y1="212.21" x2="164.5" y2="300" gradientUnits="userSpaceOnUse">
<stop stop-color="#9198D9"/>
<stop offset="1" stop-color="#3E4375"/>
</linearGradient>
<linearGradient id="paint1_linear_4413_616" x1="288.5" y1="177.931" x2="288.5" y2="300" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7944"/>
<stop offset="1" stop-color="#E24000"/>
</linearGradient>
<linearGradient id="paint2_linear_4413_616" x1="412.5" y1="300" x2="412.5" y2="165.653" gradientUnits="userSpaceOnUse">
<stop stop-color="#429E94"/>
<stop offset="1" stop-color="#55B6AD"/>
</linearGradient>
<clipPath id="clip0_4413_616">
<rect width="534" height="316" fill="white"/>
</clipPath>
</defs>
</svg>
  <div class="legend my-3" style="pointer-events: auto;">
    <div class="legend-item legend-item--1" style="pointer-events: auto;">
    <div class="legend-item__color"></div>
    <div class="legend-item__label" style="pointer-events: auto;">MSA / Above-Average Poverty</div>
    </div>
    <div class="legend-item legend-item--0 ">
      <div class="legend-item__color"></div>
      <div class="legend-item__label">Municipal / Above-Average Poverty</div>
    </div>
    <div class="legend-item legend-item--2 ">
      <div class="legend-item__color"></div>
      <div class="legend-item__label">Municipal / High Poverty</div>
    </div>
  </div>
</div>

<p class="map-notes text-center mb-5">
Note: estimated average difference (and 95% confidence intervals) in median property value between impoverished neighborhoods with high and low levels of exclusionary zoning, separately for above-average poverty (>13%) neighborhoods at the metro level (blue bar), above-average poverty neighborhoods at the municipal level (orange bar), and high poverty (>=40%) neighborhoods at the municipal level (green bar). 
</p>

<!--
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
-->



<div class="chart chart1-wrapper">
<h3 class="chart__title" style="pointer-events: auto;">Figure 5. Decline in share of affordable units in metro areas exposed to exclusionary zoning</h3>
<div class="chart1-hitarea" style="left: 31.65%; top: 19.23%; width: 20.97%; height: 33.64%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">Very Low-Income</div>
    <div class="tooltip__item"><strong>-1.3 pp</strong></div>
    <div class="tooltip__item">CI: -2.4 pp to -0.04 pp</div>
  </div>
</div>
<div class="chart1-hitarea" style="left: 55.34%; top: 19.23%; width: 20.97%; height: 51.66%;">
  <div class="chart1-tooltip">
    <div class="tooltip__title">Low-Income</div>
    <div class="tooltip__item"><strong>-2.0 pp</strong></div>
    <div class="tooltip__item">CI: -3.3 pp to -0.5 pp</div>
  </div>
</div>
<svg width="515" height="321" viewBox="0 0 515 321" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4413_582)">
<mask id="mask0_4413_582" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="515" height="347">
<path d="M515 0H0V347H515V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_4413_582)">
<path d="M0 0H515V352H0V0Z" fill="#F5F7F9"/>
<path d="M44.5 20.5H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 61.25H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 102H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 142.75H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 183.5H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 224.25H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 265H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M44.5 305.75H499.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M271 20H163V126.517C163 127.281 163.895 127.9 165 127.9H269C270.105 127.9 271 127.281 271 126.517V20Z" fill="url(#paint0_linear_4413_582)"/>
<path d="M393 20H285V185.84C285 186.604 285.895 187.223 287 187.223H391C392.105 187.223 393 186.604 393 185.84V20Z" fill="url(#paint1_linear_4413_582)"/>
<path d="M36.7365 23.6078C35.0805 23.6078 34.0005 22.1678 34.0005 20.3678V20.3498C34.0005 18.5498 35.0985 17.0918 36.7545 17.0918C38.4015 17.0918 39.4905 18.5318 39.4905 20.3318V20.3498C39.4905 22.1498 38.3925 23.6078 36.7365 23.6078ZM36.7545 22.6088C37.7355 22.6088 38.3475 21.6098 38.3475 20.3678V20.3498C38.3475 19.1078 37.7085 18.0908 36.7365 18.0908C35.7645 18.0908 35.1435 19.0808 35.1435 20.3318V20.3498C35.1435 21.5918 35.7735 22.6088 36.7545 22.6088Z" fill="#7D7D7D"/>
<path d="M9.62793 62.1767V61.1057H12.2919V62.1767H9.62793ZM16.0468 64.5077C14.3908 64.5077 13.3108 63.0677 13.3108 61.2677V61.2497C13.3108 59.4497 14.4088 57.9917 16.0648 57.9917C17.7118 57.9917 18.8008 59.4317 18.8008 61.2317V61.2497C18.8008 63.0497 17.7028 64.5077 16.0468 64.5077ZM16.0648 63.5087C17.0458 63.5087 17.6578 62.5097 17.6578 61.2677V61.2497C17.6578 60.0077 17.0188 58.9907 16.0468 58.9907C15.0748 58.9907 14.4538 59.9807 14.4538 61.2317V61.2497C14.4538 62.4917 15.0838 63.5087 16.0648 63.5087ZM19.7467 64.3997V63.1667H20.9437V64.3997H19.7467ZM24.6249 64.5077C22.9689 64.5077 21.8889 63.0677 21.8889 61.2677V61.2497C21.8889 59.4497 22.9869 57.9917 24.6429 57.9917C26.2899 57.9917 27.3789 59.4317 27.3789 61.2317V61.2497C27.3789 63.0497 26.2809 64.5077 24.6249 64.5077ZM24.6429 63.5087C25.6239 63.5087 26.2359 62.5097 26.2359 61.2677V61.2497C26.2359 60.0077 25.5969 58.9907 24.6249 58.9907C23.6529 58.9907 23.0319 59.9807 23.0319 61.2317V61.2497C23.0319 62.4917 23.6619 63.5087 24.6429 63.5087ZM31.1376 64.5077C29.4816 64.5077 28.4016 63.0677 28.4016 61.2677V61.2497C28.4016 59.4497 29.4996 57.9917 31.1556 57.9917C32.8026 57.9917 33.8916 59.4317 33.8916 61.2317V61.2497C33.8916 63.0497 32.7936 64.5077 31.1376 64.5077ZM31.1556 63.5087C32.1366 63.5087 32.7486 62.5097 32.7486 61.2677V61.2497C32.7486 60.0077 32.1096 58.9907 31.1376 58.9907C30.1656 58.9907 29.5446 59.9807 29.5446 61.2317V61.2497C29.5446 62.4917 30.1746 63.5087 31.1556 63.5087ZM37.1373 64.5077C36.1743 64.5077 35.4183 64.1207 34.8243 63.5447L35.5083 62.7437C36.0123 63.2117 36.5433 63.4997 37.1283 63.4997C37.8843 63.4997 38.3793 63.0677 38.3793 62.4107V62.3927C38.3793 61.7537 37.8393 61.3487 37.0743 61.3487C36.6243 61.3487 36.2373 61.4747 35.9133 61.6277L35.2473 61.1867L35.4273 58.0997H39.1893V59.0807H36.3813L36.2823 60.5567C36.5793 60.4487 36.8583 60.3767 37.2813 60.3767C38.5053 60.3767 39.4683 61.0247 39.4683 62.3567V62.3747C39.4683 63.6617 38.5323 64.5077 37.1373 64.5077Z" fill="#7D7D7D"/>
<path d="M18.2148 103.077V102.006H20.8788V103.077H18.2148ZM24.6337 105.408C22.9777 105.408 21.8977 103.968 21.8977 102.168V102.15C21.8977 100.35 22.9957 98.8916 24.6517 98.8916C26.2987 98.8916 27.3877 100.332 27.3877 102.132V102.15C27.3877 103.95 26.2897 105.408 24.6337 105.408ZM24.6517 104.409C25.6327 104.409 26.2447 103.41 26.2447 102.168V102.15C26.2447 100.908 25.6057 99.8906 24.6337 99.8906C23.6617 99.8906 23.0407 100.881 23.0407 102.132V102.15C23.0407 103.392 23.6707 104.409 24.6517 104.409ZM28.3336 105.3V104.067H29.5306V105.3H28.3336ZM33.2118 105.408C31.5558 105.408 30.4758 103.968 30.4758 102.168V102.15C30.4758 100.35 31.5738 98.8916 33.2298 98.8916C34.8768 98.8916 35.9658 100.332 35.9658 102.132V102.15C35.9658 103.95 34.8678 105.408 33.2118 105.408ZM33.2298 104.409C34.2108 104.409 34.8228 103.41 34.8228 102.168V102.15C34.8228 100.908 34.1838 99.8906 33.2118 99.8906C32.2398 99.8906 31.6188 100.881 31.6188 102.132V102.15C31.6188 103.392 32.2488 104.409 33.2298 104.409ZM38.0335 105.3V100.08L36.8995 100.395L36.6655 99.4946L38.3575 98.9546H39.1315V105.3H38.0335Z" fill="#7D7D7D"/>
<path d="M12.6162 143.977V142.906H15.2802V143.977H12.6162ZM19.035 146.308C17.379 146.308 16.299 144.868 16.299 143.068V143.05C16.299 141.25 17.397 139.792 19.053 139.792C20.7 139.792 21.789 141.232 21.789 143.032V143.05C21.789 144.85 20.691 146.308 19.035 146.308ZM19.053 145.309C20.034 145.309 20.646 144.31 20.646 143.068V143.05C20.646 141.808 20.007 140.791 19.035 140.791C18.063 140.791 17.442 141.781 17.442 143.032V143.05C17.442 144.292 18.072 145.309 19.053 145.309ZM22.7349 146.2V144.967H23.9319V146.2H22.7349ZM27.6132 146.308C25.9572 146.308 24.8772 144.868 24.8772 143.068V143.05C24.8772 141.25 25.9752 139.792 27.6312 139.792C29.2782 139.792 30.3672 141.232 30.3672 143.032V143.05C30.3672 144.85 29.2692 146.308 27.6132 146.308ZM27.6312 145.309C28.6122 145.309 29.2242 144.31 29.2242 143.068V143.05C29.2242 141.808 28.5852 140.791 27.6132 140.791C26.6412 140.791 26.0202 141.781 26.0202 143.032V143.05C26.0202 144.292 26.6502 145.309 27.6312 145.309ZM32.4349 146.2V140.98L31.3009 141.295L31.0669 140.395L32.7589 139.855H33.5329V146.2H32.4349ZM37.1373 146.308C36.1743 146.308 35.4183 145.921 34.8243 145.345L35.5083 144.544C36.0123 145.012 36.5433 145.3 37.1283 145.3C37.8843 145.3 38.3793 144.868 38.3793 144.211V144.193C38.3793 143.554 37.8393 143.149 37.0743 143.149C36.6243 143.149 36.2373 143.275 35.9133 143.428L35.2473 142.987L35.4273 139.9H39.1893V140.881H36.3813L36.2823 142.357C36.5793 142.249 36.8583 142.177 37.2813 142.177C38.5053 142.177 39.4683 142.825 39.4683 144.157V144.175C39.4683 145.462 38.5323 146.308 37.1373 146.308Z" fill="#7D7D7D"/>
<path d="M16.3076 184.877V183.806H18.9716V184.877H16.3076ZM22.7264 187.208C21.0704 187.208 19.9904 185.768 19.9904 183.968V183.95C19.9904 182.15 21.0884 180.692 22.7444 180.692C24.3914 180.692 25.4804 182.132 25.4804 183.932V183.95C25.4804 185.75 24.3824 187.208 22.7264 187.208ZM22.7444 186.209C23.7254 186.209 24.3374 185.21 24.3374 183.968V183.95C24.3374 182.708 23.6984 181.691 22.7264 181.691C21.7544 181.691 21.1334 182.681 21.1334 183.932V183.95C21.1334 185.192 21.7634 186.209 22.7444 186.209ZM26.4264 187.1V185.867H27.6234V187.1H26.4264ZM31.3046 187.208C29.6486 187.208 28.5686 185.768 28.5686 183.968V183.95C28.5686 182.15 29.6666 180.692 31.3226 180.692C32.9696 180.692 34.0586 182.132 34.0586 183.932V183.95C34.0586 185.75 32.9606 187.208 31.3046 187.208ZM31.3226 186.209C32.3036 186.209 32.9156 185.21 32.9156 183.968V183.95C32.9156 182.708 32.2766 181.691 31.3046 181.691C30.3326 181.691 29.7116 182.681 29.7116 183.932V183.95C29.7116 185.192 30.3416 186.209 31.3226 186.209ZM34.9214 187.1V186.227L37.0904 184.382C37.9544 183.653 38.2694 183.248 38.2694 182.681C38.2694 182.06 37.8284 181.7 37.2524 181.7C36.6764 181.7 36.2804 182.015 35.7944 182.645L35.0114 182.033C35.6144 181.187 36.2084 180.71 37.3334 180.71C38.5664 180.71 39.4124 181.466 39.4124 182.591V182.609C39.4124 183.599 38.8904 184.139 37.7744 185.048L36.4784 186.128H39.4754V187.1H34.9214Z" fill="#7D7D7D"/>
<path d="M10.709 225.777V224.706H13.373V225.777H10.709ZM17.1278 228.108C15.4718 228.108 14.3918 226.668 14.3918 224.868V224.85C14.3918 223.05 15.4898 221.592 17.1458 221.592C18.7928 221.592 19.8818 223.032 19.8818 224.832V224.85C19.8818 226.65 18.7838 228.108 17.1278 228.108ZM17.1458 227.109C18.1268 227.109 18.7388 226.11 18.7388 224.868V224.85C18.7388 223.608 18.0998 222.591 17.1278 222.591C16.1558 222.591 15.5348 223.581 15.5348 224.832V224.85C15.5348 226.092 16.1648 227.109 17.1458 227.109ZM20.8277 228V226.767H22.0247V228H20.8277ZM25.7059 228.108C24.0499 228.108 22.9699 226.668 22.9699 224.868V224.85C22.9699 223.05 24.0679 221.592 25.7239 221.592C27.3709 221.592 28.4599 223.032 28.4599 224.832V224.85C28.4599 226.65 27.3619 228.108 25.7059 228.108ZM25.7239 227.109C26.7049 227.109 27.3169 226.11 27.3169 224.868V224.85C27.3169 223.608 26.6779 222.591 25.7059 222.591C24.7339 222.591 24.1129 223.581 24.1129 224.832V224.85C24.1129 226.092 24.7429 227.109 25.7239 227.109ZM29.3227 228V227.127L31.4917 225.282C32.3557 224.553 32.6707 224.148 32.6707 223.581C32.6707 222.96 32.2297 222.6 31.6537 222.6C31.0777 222.6 30.6817 222.915 30.1957 223.545L29.4127 222.933C30.0157 222.087 30.6097 221.61 31.7347 221.61C32.9677 221.61 33.8137 222.366 33.8137 223.491V223.509C33.8137 224.499 33.2917 225.039 32.1757 225.948L30.8797 227.028H33.8767V228H29.3227ZM37.1373 228.108C36.1743 228.108 35.4183 227.721 34.8243 227.145L35.5083 226.344C36.0123 226.812 36.5433 227.1 37.1283 227.1C37.8843 227.1 38.3793 226.668 38.3793 226.011V225.993C38.3793 225.354 37.8393 224.949 37.0743 224.949C36.6243 224.949 36.2373 225.075 35.9133 225.228L35.2473 224.787L35.4273 221.7H39.1893V222.681H36.3813L36.2823 224.157C36.5793 224.049 36.8583 223.977 37.2813 223.977C38.5053 223.977 39.4683 224.625 39.4683 225.957V225.975C39.4683 227.262 38.5323 228.108 37.1373 228.108Z" fill="#7D7D7D"/>
<path d="M16.2637 266.677V265.606H18.9277V266.677H16.2637ZM22.6825 269.008C21.0265 269.008 19.9465 267.568 19.9465 265.768V265.75C19.9465 263.95 21.0445 262.492 22.7005 262.492C24.3475 262.492 25.4365 263.932 25.4365 265.732V265.75C25.4365 267.55 24.3385 269.008 22.6825 269.008ZM22.7005 268.009C23.6815 268.009 24.2935 267.01 24.2935 265.768V265.75C24.2935 264.508 23.6545 263.491 22.6825 263.491C21.7105 263.491 21.0895 264.481 21.0895 265.732V265.75C21.0895 266.992 21.7195 268.009 22.7005 268.009ZM26.3824 268.9V267.667H27.5794V268.9H26.3824ZM31.2606 269.008C29.6046 269.008 28.5246 267.568 28.5246 265.768V265.75C28.5246 263.95 29.6226 262.492 31.2786 262.492C32.9256 262.492 34.0146 263.932 34.0146 265.732V265.75C34.0146 267.55 32.9166 269.008 31.2606 269.008ZM31.2786 268.009C32.2596 268.009 32.8716 267.01 32.8716 265.768V265.75C32.8716 264.508 32.2326 263.491 31.2606 263.491C30.2886 263.491 29.6676 264.481 29.6676 265.732V265.75C29.6676 266.992 30.2976 268.009 31.2786 268.009ZM37.2354 269.008C36.1374 269.008 35.3544 268.549 34.8234 267.901L35.5974 267.181C36.0474 267.712 36.5514 268.009 37.2534 268.009C37.8744 268.009 38.3424 267.631 38.3424 267.055V267.037C38.3424 266.416 37.7754 266.065 36.8934 266.065H36.3804L36.2004 265.372L37.9014 263.563H35.1744V262.6H39.3414V263.428L37.5864 265.228C38.5404 265.354 39.4404 265.831 39.4404 267.001V267.019C39.4404 268.18 38.5404 269.008 37.2354 269.008Z" fill="#7D7D7D"/>
<path d="M10.709 307.577V306.506H13.373V307.577H10.709ZM17.1278 309.908C15.4718 309.908 14.3918 308.468 14.3918 306.668V306.65C14.3918 304.85 15.4898 303.392 17.1458 303.392C18.7928 303.392 19.8818 304.832 19.8818 306.632V306.65C19.8818 308.45 18.7838 309.908 17.1278 309.908ZM17.1458 308.909C18.1268 308.909 18.7388 307.91 18.7388 306.668V306.65C18.7388 305.408 18.0998 304.391 17.1278 304.391C16.1558 304.391 15.5348 305.381 15.5348 306.632V306.65C15.5348 307.892 16.1648 308.909 17.1458 308.909ZM20.8277 309.8V308.567H22.0247V309.8H20.8277ZM25.7059 309.908C24.0499 309.908 22.9699 308.468 22.9699 306.668V306.65C22.9699 304.85 24.0679 303.392 25.7239 303.392C27.3709 303.392 28.4599 304.832 28.4599 306.632V306.65C28.4599 308.45 27.3619 309.908 25.7059 309.908ZM25.7239 308.909C26.7049 308.909 27.3169 307.91 27.3169 306.668V306.65C27.3169 305.408 26.6779 304.391 25.7059 304.391C24.7339 304.391 24.1129 305.381 24.1129 306.632V306.65C24.1129 307.892 24.7429 308.909 25.7239 308.909ZM31.6807 309.908C30.5827 309.908 29.7997 309.449 29.2687 308.801L30.0427 308.081C30.4927 308.612 30.9967 308.909 31.6987 308.909C32.3197 308.909 32.7877 308.531 32.7877 307.955V307.937C32.7877 307.316 32.2207 306.965 31.3387 306.965H30.8257L30.6457 306.272L32.3467 304.463H29.6197V303.5H33.7867V304.328L32.0317 306.128C32.9857 306.254 33.8857 306.731 33.8857 307.901V307.919C33.8857 309.08 32.9857 309.908 31.6807 309.908ZM37.1373 309.908C36.1743 309.908 35.4183 309.521 34.8243 308.945L35.5083 308.144C36.0123 308.612 36.5433 308.9 37.1283 308.9C37.8843 308.9 38.3793 308.468 38.3793 307.811V307.793C38.3793 307.154 37.8393 306.749 37.0743 306.749C36.6243 306.749 36.2373 306.875 35.9133 307.028L35.2473 306.587L35.4273 303.5H39.1893V304.481H36.3813L36.2823 305.957C36.5793 305.849 36.8583 305.777 37.2813 305.777C38.5053 305.777 39.4683 306.425 39.4683 307.757V307.775C39.4683 309.062 38.5323 309.908 37.1373 309.908Z" fill="#7D7D7D"/>
<path d="M217 22V219" stroke="#B0B0B0" stroke-width="2"/>
<path d="M209.5 218H224.5" stroke="#B0B0B0" stroke-width="2"/>
<path d="M209.5 22H224.5" stroke="#B0B0B0" stroke-width="2"/>
<path d="M341 61.46V293.64" stroke="#B0B0B0" stroke-width="2"/>
<path d="M333.5 293.64H348.5" stroke="#B0B0B0" stroke-width="2"/>
<path d="M333.5 61.46H348.5" stroke="#B0B0B0" stroke-width="2"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_4413_582" x1="217" y1="20" x2="217" y2="127.9" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E4375"/>
<stop offset="1" stop-color="#9198D9"/>
</linearGradient>
<linearGradient id="paint1_linear_4413_582" x1="339" y1="20" x2="339" y2="185.84" gradientUnits="userSpaceOnUse">
<stop stop-color="#E24000"/>
<stop offset="1" stop-color="#FF7944"/>
</linearGradient>
<clipPath id="clip0_4413_582">
<rect width="515" height="321" fill="white"/>
</clipPath>
</defs>
</svg>
  <div class="legend my-3" style="pointer-events: auto;">
    <div class="legend-item legend-item--1" style="pointer-events: auto;">
    <div class="legend-item__color"></div>
    <div class="legend-item__label" style="pointer-events: auto;">Very Low-Income</div>
    </div>
    <div class="legend-item legend-item--0 ">
    <div class="legend-item__color"></div>
    <div class="legend-item__label">Low-Income</div>
    </div>
  </div>
</div>

<p class="map-notes text-center mb-3">
Note: estimated average difference (and 95% confidence intervals) in the share of housing units affordable to very-low (blue bar) and low-income (orange bar) households (those earning 50% and 80% of national median income, respectively) between metro areas with high and low levels of exclusionary zoning.
</p>
<br>

Poor neighborhoods within a region with more restrictive zoning laws experience higher average housing costs and more rent burden relative to similarly poor neighborhoods in areas with less restrictive zoning. In other words, exclusionary zoning can exacerbate poverty on the margins. 

These costs for poor neighborhoods are often incurred due to policies determined in other communities, which raises important fair housing questions. After all, it’s one thing if residents of an affluent town or neighborhood decide to block an apartment building, excluding middle or low-income tenants from the area. It’s quite another when those policies negatively impact residents in other communities. That’s exactly what I’ve shown here: Zoning laws can have unanticipated spillover effects, making aggravating poverty in communities beyond the community in which they’re enacted. 

{{< pullquote "It’s one thing if residents of an affluent town or neighborhood decide to block an apartment building, excluding middle or low-income tenants from the area. It’s quite another when those policies negatively impact residents in other communities." >}}

How do we solve this kind of a problem? There are important efforts underway to reform our unfair zoning and land use laws, but few address this issue. This is because zoning rules are typically set—and then reformed—town by town, city by city. We need a comprehensive solution that would establish a more sensible balance of zoning authority between municipal, regional, and state governments to overcome the incentives to implement and maintain exclusionary zoning. After all, if our housing markets are metropolitan in nature, then our development policies should be as well.

Such reform may seem like a daunting political task, but we have examples of it working in places like New Jersey. There, the state legislature recently strengthened its commitment to fair and affordable housing by streamlining its fair share housing program, ushered in by the  {{< smartlink "Mount Laurel Doctrine" "https://www.fairsharehousing.org/wp-content/uploads/2023/01/Mount-Laurel-Factsheet.pdf" >}} over forty years ago. After decades of delay and political grandstanding, New Jersey’s fair share housing program now reflects  {{< smartlink "record levels" "https://www.insidernj.com/press-release/new-affordable-housing-law-delivers-results-nearly-all-nj-towns-resolve-challenges-by-dec-31-deadline/" >}} of participation among municipalities statewide. A related effort—the  {{< smartlink "Great Homes and Neighborhoods for All (GHNA) initiative" "https://www.njfuture.org/collaboratives/great-homes-and-neighborhoods-for-all/" >}} has helped lead a coordinated approach among a diverse array of stakeholders to achieve more equitable housing outcomes across the state, which includes sensible zoning and land use reforms. (Disclaimer: I serve on the steering committee of the GHNA initiative.)

{{< pullquote "After all, if our housing markets are metropolitan in nature, then our development policies should be as well." >}}


Housing advocates sometimes express an ambivalence about exclusionary zoning, arguing that it is really only an issue in high-demand places or in the context of opening up exclusionary communities to multifamily housing. As I show here, exclusionary zoning is widely prevalent and has spillover effects that impact entire metropolitan areas, including impoverished neighborhoods. Addressing our restrictive zoning laws should be a priority for anyone interested in reducing poverty. The longer we maintain exclusionary zoning, the longer impoverished communities will struggle with precarious and unaffordable housing through no fault of their own. 

