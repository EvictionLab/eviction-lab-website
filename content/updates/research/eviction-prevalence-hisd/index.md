---
draft: false
childof: research
url: /eviction-prevalence-hisd/
contenttype: updates
contentcat: research
featured: true
in_index: true
title: "Eviction Prevalence and Spatial Variation Within the Houston Independent School District"
date: 2021-06-08T00:46:40.089Z
postauthortitle: The Eviction Lab
listSummary: >-
  Residential mobility affects children’s education, generally for the worse. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.
socialDescription: Residential mobility affects children’s education, generally for the worse. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.
researchtype: elresearch
postauthorname: Lavar Edmonds, Peter Hepburn, Olivia Jin, and Matthew Desmond
twImage: eviction-filings-houston-isd2.png
authorpic: /images/bios/elab_thumb_sm.jpg
description: Residential mobility affects children’s education, generally for the worse. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.
fbImage: eviction-filings-houston-isd2.png
image:
scripts:
  - charts
  - mapbox
---

### INTRODUCTION AND OVERVIEW 
<br />
Residential mobility affects children’s education, generally for the worse. Moving can adversely affect standardized test performance, academic achievement growth, and students’ social ties.{{< sup 1 >}}   Not all residential moves are equal, however. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.{{< sup 2 >}} Households with children are at heightened risk of eviction {{< sup 3 >}}, an especially disruptive form of forced mobility. 

This research brief examines the distribution of eviction filings across the Houston Independent School District (HISD) in 2017 and 2018. The analysis aims to inform HISD of hot spots within the district: school zones in which students may be at particularly high risk of forced mobility. We find that eviction is a common occurrence throughout HISD, though a few zones were especially hard hit.

### DATA AND METHODS
<br />
This analysis makes use of individual-level Harris County eviction court data from 2017 and 2018. These data were collected by January Advisors and cleaned, deduplicated, and geocoded by the Eviction Lab. Our analysis focuses on eviction filings, rather than eviction judgments, in order to assess the extent of eviction risk within HISD. An eviction filing refers to any non-commercial eviction (i.e., residential housing not occupied by a business) case for which we observe a court record. 

Using elementary school zone shapefiles provided by HISD, we aggregated cases to obtain counts of eviction filings within a given school zone. We incorporated data from the Houston Education Research Consortium (HERC) linking school zones to Census Block Groups, thereby allowing us to incorporate data from the American Community Survey (ACS){{< sup 4 >}}. We calculated two-year filing rates in each school zone by dividing the number of filings in 2017 and 2018 by the number of renter-occupied households in that area according to ACS estimates for 2014–2018.

These estimates provided a measure of eviction filings within each of HISD’s 163 elementary school zones.{{< sup 5 >}} Not all of these cases were filed against families of HISD students, but this analysis nonetheless allows us to highlight areas where students are relatively more likely to face the threat of eviction. High levels of housing insecurity also erode a community’s collective efficacy, social control, and cohesion.{{< sup 6 >}} Even when not personally affected by an eviction, high levels of eviction with a neighborhood may adversely impact students’ social networks, collective comfort, and sense of belonging in the neighborhood.

### RESULTS
<br /> 
Eviction filings are common in Harris County: 35,208 eviction cases were filed within HISD bounds over this two-year time period. We observed evictions cases filed in all but one school zone in both 2017 and 2018. The median elementary zone experienced 121 eviction filings across the two years. Figure 1 reveals several outliers: multiple zones containing over 500 filings.


{{% histogram
  id="hist1"
  data="/uploads/hisd_data.csv"
  x="totalfilings"
  thresholds="40"
  title="Figure 1: Distribution of eviction filings within school zones, 2017-2018"
  xLabel="Number of Filings"
  yLabel="Number of School Zones"
  tooltipTemplate="{total} school zones with {range} eviction filings."
  xMin="-25"
  yMax="45"
  margin="8 8 104 56"
%}}

<div class="figheader">Table 1: Top Elementary School Zones by Filing Counts and Filing Rates, 2017-2018</div>

<table class="table table--text table--filings table-responsive" cellspacing="0" cellpadding="0">
  <thead>
    <tr>
      <th style="text-align: center !important" colspan="3">FILING COUNTS</th>
      <th style="text-align: center !important" colspan="2">FILING RATES</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td></td>
      <td>Zone</td>
      <td>Filings</td>
      <td>Zone</td>
      <td>Rate (%)</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Daily</td>
      <td>1,630</td>
      <td>Shadydale</td>
      <td>12.6</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Piney Point</td>
      <td>1,510</td>
      <td>Dogan</td>
      <td>9.3</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Briargrove</td>
      <td>1,220</td>
      <td>Lewis</td>
      <td>7.9</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Pilgrim</td>
      <td>998</td>
      <td>Isaacs</td>
      <td>7</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Lewis</td>
      <td>973</td>
      <td>Askew</td>
      <td>6.1</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Askew</td>
      <td>865</td>
      <td>Kashmere Gardens</td>
      <td>5.9</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Shadydale</td>
      <td>854</td>
      <td>Elrod</td>
      <td>5.9</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Shadowbriar</td>
      <td>801</td>
      <td>Cook</td>
      <td>5.9</td>
    </tr>
    <tr>
      <td>9</td>
      <td>St. George</td>
      <td>760</td>
      <td>Hilliard</td>
      <td>5.5</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Emerson</td>
      <td>723</td>
      <td>Lovett</td>
      <td>5.3</td>
    </tr>
  </tbody>
</table>

<br/>
<br/>

Table 1 presents the top 10 elementary school zones by the total number of filings in the two-year period (left panel) and by eviction filing rate (right panel){{< sup 7 >}}.  While households in every school zone experienced eviction filings, the problem was especially acute in a select few zones. Of the 163 elementary school zones in the HISD, 29.4% of all eviction cases originated in the 10 zones in the left panel of Table 1, just six percent of all school zones. 

In the right panel of the table, we rank school zones by filing rates. Eviction filing rates allow us to account for the number of renter households in the zone, creating a metric for comparing filing prevalence across zones. The Shadydale school zone had the highest recorded eviction filing rate in Houston: the 12.6% eviction filing rate in this zone means that one in every eight renters was filed against for eviction each year. This high eviction filing rate in the Shadydale zone was particularly striking because only a third of households in the zone were renters, relative to an average of 53% across all zones. Relatively few students at Shadydale elementary school were likely to be renters, but they were at higher-than-normal risk of displacement.   

Mapping the spatial variation in filings allows us to observe whether evictions clustered in certain regions of the district (Figure 2). In general, we found this not to be the case: the hardest hit areas were not necessarily adjacent to each other. The far western portion of the district illuminates this feature. Households zoned to Bush elementary school, the farthest west school zone in light orange shading, saw relatively few filings over this two-year period (145), while those zoned to Daily elementary school, just to the east of the Bush zone in dark orange shading, were inundated with eviction filings (1,630). Over ten times as many eviction cases were filed in the Daily zone as in the Bush zone, despite being adjacent to each other.

{{% mapbox
  id="mapbox1"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="totalfilings"
  join="Code"
  name="school"
  format="integer"
  title="Figure 2: Spatial Distribution of eviction filings within school zones, 2017-2018"
  legendTitle="Eviction Filings (2017 - 2018)"
  colors="rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
%}}

<br/>
<br/>

Figure 3 shows the spatial variation of eviction filing rates, which allows us to control for variations in renter population density. Similar to Figure 2, we observed that school zones with high eviction filing rates were not clustered together. Interestingly, we found that areas with high filing rates did not necessarily line up with the areas with high filing counts. For example, the Dogan elementary school zone had the second highest eviction filing rate (9.3%) within HISD despite having a relatively low number of filings (454) over the two-year period. In contrast, the Daily elementary school zone had a relatively low eviction filing rate (4.3%) despite having the highest number of eviction filings (1,630) in the district. Eviction filing rates, in addition to eviction filing counts, may be important in better understanding the eviction risk experienced by students in respective school zones.

{{% mapbox
  id="mapbox2"
  data="/uploads/hisd_data.csv"
  shapes="/uploads/hisd_shapes.json"
  column="filingrate"
  join="Code"
  format="percent"
  name="school"
  colors="#dfefed;#7bcac1;#2c897f"
  title="Figure 3: Spatial Distribution of eviction filing rates within school zones, 2017-2018"
  legendTitle="Filing Rate (2017 - 2018)"
%}}

<br/>
<br/>

Eviction is a destabilizing event that can profoundly affect children and families. School zones with high numbers of evictions and high eviction rates are likely to have more students living through the repercussions of displacement. There are no existing “best practices” for schools and local governments attempting to support children experiencing eviction, but several possibilities are promising:

* Target additional counseling services in schools in which displacement is common. This should take into account absolute eviction filing numbers as well as rates (i.e., both panels of Table 1). 

* Provide school counselors and administrators with resources related to local legal aid and housing assistance programs in Harris County, such as those provided by Lone Star Legal Aid and Texas Housers. These could be included in the resources already provided by wraparound services specialists. 

* Establish a district-wide mechanism so that parents can alert schools that they are facing eviction or have been evicted. This alert system can be used to disseminate information to school counselors and teachers at a student’s current school and—in the event that eviction necessitates school change—in their next school, thereby easing the transition. It could also be used to prompt parents to update contact information and mailing addresses as needed, thereby facilitating parent-school communication.

* Collect more data at the court level, requiring landlords to report if they are filing an eviction against a household that includes children age 18 or under. Data sharing between the courts and the schools could allow for targeted interventions.

<div class="text-center">
<p><a href="Eviction Lab Research Brief-Eviction Prevalence and Spatial Variation Within the Houston Independent School District.pdf">Download this post as a research brief (PDF)</a></p>
</div>

{{< blogfootnotes 

"Grigg, Jeffrey. 2012. “School Enrollment Changes and Student Achievement Growth: A Case Study in Educational Disruption and Continuity.” _Sociology of Education_ 85(4). <br/><br/>Schwartz, Amy Ellen, Leanna Stiefel, and Sarah A. Cordes. 2017. “Moving Matters: The Causal Effect of Moving Schools on Student Performance.” Journal of Education Finance and Policy 12(4):419–46."

"Metzger, Molly W., Patrick J. Fowler, and Todd Swanstrom. 2016. “Hypermobility and Educational Outcomes: The Case of St. Louis.” Urban Education 53(6):774–805."

"Desmond, Matthew, Weihua An, Richelle Winkler, and, Thomas Ferriss. 2013. “Evicting Children,” Social Forces 92: 303-27."

"Census Block groups do not perfectly align with school zones. School zones contain between 4 and 41 Block groups, with an average of 14. One Block group may feed into more than one zone. 18 Block groups from the school data that did not merge to the ACS data block groups data set. These were clustered in seven of the 163 school zones: Two of the 10 Block groups reported to feed into the Almeda Elementary school zone; 2/17 for Bell; 3/13 for Fondren; 1/15 for Frost; 3/13 for Law; 3/11 for Mitchell; 4/11 for Windsor Village."

"There were 21 additional HISD elementary schools that did not have an associated attendance zone."

"Sampson, Robert J., Stephen W. Raudenbush, and Felton Earls. 1997. “Neighborhoods and Violent Crime: A Multilevel Study of Collective Efficacy.” Science 277(5328):918–24. Sampson, Robert J. and William Julius Wilson. 1995. “Toward a Theory of Race, Crime, and Urban Inequality.” P. 13 in Crime and Inequality. Stanford University Press."

"When estimating eviction filing rates we employ a conservative approach that includes all renter households in all Block groups that link to a particular school zone when establishing the denominator. By thereby inflating the denominators, we systematically underestimate filing rates by school zones."

>}}