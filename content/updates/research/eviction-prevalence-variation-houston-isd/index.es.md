---
draft: false
childof: research
url: /eviction-prevalence-variation-houston-isd/
contenttype: updates
contentcat: research
featured: true
in_index: true
title: "Eviction Prevalence and Spatial Variation Within the Houston Independent School District"
date: 2021-04-27T00:46:40.089Z
postauthortitle: The Eviction Lab
listSummary: >-
  We provide a snapshot of U.S. eviction filing patterns in 2020 and a first description of how effective these policies were. In a year that was unprecedented in many respects, we aim to show how renters fared, and what they may be facing in 2021.
socialDescription: We provide a snapshot of U.S. eviction filing patterns in 2020 and a first description of how effective these policies were. In a year that was unprecedented in many respects, we aim to show how renters fared, and what they may be facing in 2021.
researchtype: elresearch
postauthorname: Lavar Edmonds, Peter Hepburn, Olivia Jin, and Matthew Desmond

twImage: us-eviction-filing-patterns-2020-social.png
authorpic: /images/bios/elab_thumb_sm.jpg
description: We provide a snapshot of U.S. eviction filing patterns in 2020 and a first description of how effective these policies were. In a year that was unprecedented in many respects, we aim to show how renters fared, and what they may be facing in 2021.
fbImage: us-eviction-filing-patterns-2020-social.png
image:
scripts:
  - charts
---

### INTRODUCTION AND OVERVIEW 
<br />
Residential mobility affects children’s education, generally for the worse. Moving can adversely af-fect standardized test performance, academic achievement growth, and students’ social ties.1 Not all residential moves are equal, however. Forced mobility—involuntary moves over which residents have little or no control—has the potential to be more disruptive, and thus more detrimental to children’s academic performance, than planned moves.2 Households with children are at height-ened risk of eviction3, an especially disruptive form of forced mobility. 

This research brief examines the distribution of eviction filings across the Houston Independent School District (HISD) in 2017 and 2018. The analysis aims to inform HISD of hot spots within the district: school zones in which students may be at particularly high risk of forced mobility. We find that eviction is a common occurrence throughout HISD, though a few zones were especially hard hit.

### DATA AND METHODS
<br />
This analysis makes use of individual-level Harris County eviction court data from 2017 and 2018. These data were collected by January Advisors and cleaned, deduplicated, and geocoded by the Eviction Lab. Our analysis focuses on eviction filings, rather than eviction judgments, in order to assess the extent of eviction risk within HISD. An eviction filing refers to any non-commercial evic-tion (i.e., residential housing not occupied by a business) case for which we observe a court record. 

Using elementary school zone shapefiles provided by HISD, we aggregated cases to obtain counts of eviction filings within a given school zone. We incorporated data from the Houston Education Research Consortium (HERC) linking school zones to Census Block Groups, thereby allowing us to incorporate data from the American Community Survey (ACS)4. We calculated two-year filing rates in each school zone by dividing the number of filings in 2017 and 2018 by the number of renter-oc-cupied households in that area according to ACS estimates for 2014–2018.

These estimates provided a measure of eviction filings within each of HISD’s 163 elementary school zones.5 Not all of these cases were filed against families of HISD students, but this analysis none-theless allows us to highlight areas where students are relatively more likely to face the threat of eviction. High levels of housing insecurity also erode a community’s collective efficacy, social con-trol, and cohesion.6 Even when not personally affected by an eviction, high levels of eviction with a neighborhood may adversely impact students’ social networks, collective comfort, and sense of belonging in the neighborhood.

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

TABLE 1. TOP ELEMENTARY SCHOOL ZONES BY FILING COUNTS AND FILING RATES, 2017-2018

Table 1 presents the top 10 elementary school zones by the total number of filings in the two-year period (left panel) and by eviction filing rate (right panel)7.  While households in every school zone experienced eviction filings, the problem was especially acute in a select few zones. Of the 163 el-ementary school zones in the HISD, 29.4% of all eviction cases originated in the 10 zones in the left panel of Table 1, just six percent of all school zones. 

In the right panel of the table, we rank school zones by filing rates. Eviction filing rates allow us to account for the number of renter households in the zone, creating a metric for comparing filing prevalence across zones. The Shadydale school zone had the highest recorded eviction filing rate in Houston: the 12.6% eviction filing rate in this zone means that one in every eight renters was filed against for eviction each year. This high eviction filing rate in the Shadydale zone was partic-ularly striking because only a third of households in the zone were renters, relative to an average of 53% across all zones. Relatively few students at Shadydale elementary school were likely to be renters, but they were at higher-than-normal risk of displacement.   

Mapping the spatial variation in filings allows us to observe whether evictions clustered in certain regions of the district (Figure 2). In general, we found this not to be the case: the hardest hit areas were not necessarily adjacent to each other. The far western portion of the district illuminates this feature. Households zoned to Bush elementary school, the farthest west school zone in light blue shading, saw relatively few filings over this two-year period (145), while those zoned to Dai-ly elementary school, just to the east of the Bush zone in dark blue shading, were inundated with eviction filings (1,630). Over ten times as many eviction cases were filed in the Daily zone as in the Bush zone, despite being adjacent to each other.

FIGURE 2. SPATIAL DISTRIBUTION OF EVICTION FILINGS IN HISD, 2017-2018

Figure 3 shows the spatial variation of eviction filing rates, which allows us to control for variations in renter population density. Similar to Figure 2, we observed that school zones with high eviction filing rates were not clustered together. Interestingly, we found that areas with high filing rates did not necessarily line up with the areas with high filing counts. For example, the Dogan elementary school zone had the second highest eviction filing rate (9.3%) within HISD despite having a rela-tively low number of filings (454) over the two-year period. In contrast, the Daily elementary school zone had a relatively low eviction filing rate (4.3%) despite having the highest number of eviction filings (1,630) in the district. Eviction filing rates, in addition to eviction filing counts, may be im-portant in better understanding the eviction risk experienced by students in respective school zones.

Eviction is a destabilizing event that can profoundly affect children and families. School zones with high numbers of evictions and high eviction rates are likely to have more students living through the repercussions of displacement. There are no existing “best practices” for schools and local governments attempting to support children experiencing eviction, but several possibilities are promising:

* Target additional counseling services in schools in which displacement is common. This should take into account absolute eviction filing numbers as well as rates (i.e., both panels of Table 1). 

* Provide school counselors and administrators with resources related to local legal aid and hous-ing assistance programs in Harris County, such as those provided by Lone Star Legal Aid and Tex-as Housers. These could be included in the resources already provided by wraparound services specialists. 

* Establish a district-wide mechanism so that parents can alert schools that they are facing evic-tion or have been evicted. This alert system can be used to disseminate information to school counselors and teachers at a student’s current school and—in the event that eviction necessi-tates school change—in their next school, thereby easing the transition. It could also be used to prompt parents to update contact information and mailing addresses as needed, thereby facili-tating parent-school commincation.

* Collect more data at the court level, requiring landlords to report if they are filing an eviction against a household that includes children age 18 or under. Data sharing between the courts and the schools could allow for targeted interventions.

{{< blogfootnotes 

"Grigg, Jeffrey. 2012. “School Enrollment Changes and Student Achievement Growth: A Case Study in Educational Disruption and Continuity.” _Sociology of Education_ 85(4). <br/><br/>Schwartz, Amy Ellen, Leanna Stiefel, and Sarah A. Cordes. 2017. “Moving Matters: The Causal Effect of Moving Schools on Student Performance.” Journal of Education Finance and Policy 12(4):419–46."

"Metzger, Molly W., Patrick J. Fowler, and Todd Swanstrom. 2016. “Hypermobility and Educational Outcomes: The Case of St. Louis.” Urban Education 53(6):774–805."

"Desmond, Matthew, Weihua An, Richelle Winkler, and, Thomas Ferriss. 2013. “Evicting Children,” Social Forces 92: 303-27."

"Census Block groups do not perfectly align with school zones. School zones contain between 4 and 41 Block groups, with an average of 14. One Block group may feed into more than one zone. 18 Block groups from the school data that did not merge to the ACS data block groups data set. These were clustered in seven of the 163 school zones: Two of the 10 Block groups reported to feed into the Almeda Elementary school zone; 2/17 for Bell; 3/13 for Fondren; 1/15 for Frost; 3/13 for Law; 3/11 for Mitchell; 4/11 for Windsor Village."

"There were 21 additional HISD elementary schools that did not have an associated attendance zone."

"Sampson, Robert J., Stephen W. Raudenbush, and Felton Earls. 1997. “Neighborhoods and Violent Crime: A Multilevel Study of Collective Efficacy.” Science 277(5328):918–24. Sampson, Robert J. and William Julius Wilson. 1995. “Toward a Theory of Race, Crime, and Urban Inequality.” P. 13 in Crime and Inequality. Stanford University Press."

"When estimating eviction filing rates we employ a conservative approach that includes all renter households in all Block groups that link to a particular school zone when establishing the denominator. By thereby inflating the denominators, we systematically underestimate filing rates by school zones."

>}}