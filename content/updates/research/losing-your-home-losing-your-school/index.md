---
draft: true
childof: research
url: "/eviction-and-educational-trajectories/"
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Losing your home, losing your school: how evictions affect kids' educational trajectories"
date: 2025-04-04T15:28:51.756Z
postauthorname: Peter Hepburn, Danny Grubbs-Donovan, Nick Graetz, Olivia Jin & Matthew Desmond
description: Kids whose parents face eviction cases are more likely to leave their district, end up in schools with fewer resources, and experience an increase in absences and suspensions.
listSummary: Kids whose parents face eviction cases are more likely to leave their district, end up in schools with fewer resources, and experience an increase in absences and suspensions.
socialDescription: Kids whose parents face eviction cases are more likely to leave their district, end up in schools with fewer resources, and experience an increase in absences and suspensions.
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
image: pexels-caleboquendo-3042432-small.jpg
fbImage: pexels-caleboquendo-3042432-small.jpg
twImage: pexels-caleboquendo-3042432-small.jpg
scripts:
  - charts
  - grouped-bar-chart
---
<span class="dropcap green">W</span>hen parents face an eviction case, it has consequences for their kids. In an article published in the journal <i>Sociology of Education</i>, we for the first time explore what some of these consequences are for students’ academic trajectories. Using the case study of children enrolled in the Houston Independent School District, we show that kids whose parents face eviction cases are more likely than students not facing eviction to leave the district. The students who remained in the district and experienced eviction filings were more likely to have switched schools, often relocating to campuses with fewer resources, more student turnover, and lower test scores. Students whose parents faced eviction experienced an increase in absences and, among those who switched schools, more suspensions.

[ARTICLE LINK]

[READ COVERAGE IN THE ASSOCIATED PRESS: LINK]
<!-- {{< researchpaperlink "Eviction and the Rental Housing Crisis in Rural America" "https://onlinelibrary.wiley.com/doi/full/10.1111/ruso.12528" "Carl Gershenson and Matthew Desmond" "rural-sociology-cover.jpg" >}} -->


One of the cruel realities of housing in America is that nearly three million children risk losing their homes every year through the eviction process. In fact, if you are a renter and have kids, your chances of facing an eviction filing are twice as high as people without kids, as previous {{< smartlink "Eviction Lab research shows" "https://evictionlab.org/who-is-evicted-in-america/" >}}. Yet, there’s been little study of how evictions affect classrooms and children’s education. We know that any move can have long-lasting effects on children, but what happens when a move is sudden and involuntary for the whole family?

To address that question, we built a new linkage of housing court data and educational records. The court data include the records of all 728,952 eviction cases filed in Harris County, TX between 2002 and 2016. The educational records were accessed through the {{< smartlink "Houston Education Research Consortium" "https://kinder.rice.edu/centers/houston-education-research-consortium" >}} (HERC), a partnership between the Kinder Institute at Rice University and eight Houston-area school districts. HERC staff conduct research on a range of critical issues to improve educational equity, and also facilitate partnerships with external researchers like us. Their records contain enrollment, attendance, disciplinary, and grade data for over 685,000 students enrolled in the Houston Independent School District over the 2002-2016 period. Because of how parents register their kids with the school each fall, we have a consistent annual record of where and with whom students live each year. We were able to link parents’ names and addresses from the enrollment records to defendant names and addresses in eviction filings. We identified over 13,000 students whose parents were filed against for eviction at least once. {{< smartlink "In line with our previous research, it’s extremely common to be impacted by evictions more than once" "https://evictionlab.org/serial-eviction-filings/" >}}: nearly a quarter had parents who were filed against repeatedly. 

{{< pullquote "Eviction filings put students at increased risk of switching schools and leaving the district." >}}

Our analysis of these data yielded three key findings.

<span class="h3-like">First,</span> eviction filings put students at increased risk of switching schools and leaving the district. Switching schools is hard on kids. It means new teachers, new classmates, new rules. An extensive body of education research demonstrates the harms associated with school mobility, including lowered academic performance, higher odds of school drop-out, and a greater frequency of student behavioral issues. If eviction cases are driving higher rates of school mobility, that is cause for concern. 

We found that 12.3% of kids whose parents were filed against for eviction finished the current academic year in a different school than they started in. This is almost three times higher than students not facing eviction (see Figure 1). In Houston, most students tend to stay in the same school, but that’s not the case if landlords have tried to evict your family: while more than 70% of the students that didn’t experience an eviction filing remained in the same school in the following year, less than a half of the kids threatened with an eviction were able to stay. 

<style>
  @media(max-width: 540px) {
    .chart__body .chart__axis--bargroup g.tick text {
      transform: rotate(-10deg) translate(35px, 0px);
    }
  }
</style>

{{% grouped-bar-chart 
  id="fig3" 
  saneLoading="true"
  titlePrefix="Figure 1. Student school changes within and between academic years by eviction status" 
  data="./ed_blog_data2.csv" 
  yTicks="5" 
  yMin="0"
  yFormat=".0%" 
  type="barGroup" 
  search="false" 
  themed="true"
  autoGenLegend="true"
%}}

Some of these disparities could be explained by student or school characteristics rather than the eviction cases, so to be sure of our results we carried out a series of regressions accounting for a broad set of socio-demographic factors and measures of school quality. Even when controlling for all of these factors, we found that students facing eviction were significantly more likely than their peers to switch schools.

<span class="h3-like">Our second finding</span> was that eviction-led school moves tended to be to campuses of lower quality, as measured by per-pupil budgets, standardized test scores, and other factors related to student disadvantage. Here we again found statistically significant—though often relatively small—gaps between moves that appeared to be eviction-related and those that were not. 

For example, eviction-led moves were to schools with larger shares of students qualifying for free or reduced-price lunch and identified by the school district as economically disadvantaged. These schools also had significantly higher attrition rates, the sort of routine student turnover that can be disruptive to learning. On top of this, students moving after an eviction went to schools with worse scores on standardized tests than students that moved for other reasons.

{{< pullquote "In the year in which their parents are filed against for eviction, students have two more absences than would otherwise be expected." >}}

<span class="h3-like">Our third finding</span> relates to the effects that eviction filings have on absences and suspensions. Here we carried out a set of tests that let us compare the experience of students facing eviction to those of students not facing eviction. But we also went a step further and analyzed whether the combination of an eviction filing and a school move—or a school move without an eviction filing—had different effects. 

We found that both eviction filings and school moves led to increases in absences, especially in the year in which the eviction case and/or school move happens. For instance, in the year in which their parents are filed against for eviction, students have two more absences than would otherwise be expected. Given that students average just over seven absences per year, this represents a meaningful increase in missed days of school. 

Students facing eviction also get suspended more often, but we only find this effect for students who switch schools. These students were suspended, on average, one more day per year in the years following eviction filing. Students who were not threatened with eviction but nonetheless made a school move also received significantly more suspensions in the year they moved, but the effect is much smaller. Results suggest that students who switch schools—particularly students whose moves are eviction-related—face increased suspensions in their new schools, both immediately and in the following years. This could be because of the trouble students face fitting in to a new environment and the stress associated with moving. 

<hr class="my-5" />

Previous research has documented the toll that residential and school mobility has on children and their schooling. Especially for low-income and minority children, moving and changing schools can result in academic delays and a range of negative outcomes. Most of this work, though, doesn’t distinguish between voluntary mobility—which may occur for a range of positive reasons, like parents’ getting better jobs—and forced moves. This study is important in that it offers a first accounting of the sorts of costs that children pay when their parents face eviction. There’s still a lot more to learn about the scale of these costs. We only began to scratch the surface of academic outcomes here, and we haven’t yet tackled topics like children’s health, emotional well-being, or long-term trajectories. Still, we show that even the threat of eviction can increase the  odds of school moves and disenrollment, moves to worse-off schools, and increased school absences and suspensions—events that have significant long-term consequences.

These results contribute to a growing body of literature that highlights the consequences of eviction filings, even those that don’t lead to formal eviction judgments. Not all households receiving an eviction filing were ultimately evicted, and not all moved. In supplementary analyses, we demonstrate similar trends among children whose parents received an eviction judgment, suggesting that a lot of harm accrues at the eviction-filing stage. This may be due to the underlying factors that lead to eviction filing, like when parents lose their jobs, experience a health emergency or even just the financial stress caused by the eviction case itself.
 
Previous research has detailed strategies that schools, teachers, families, and students can use to address problems associated with residential and school mobility. But it’s just as important—if not more so—to reduce eviction filing rates and minimize the number of children at risk of losing their homes. Studies have identified multiple ways of doing so, such as {{< smartlink "increasing notice requirements" "https://evictionlab.org/new-eviction-data-2022/" >}}, {{< smartlink "raising eviction filing fees" "https://evictionlab.org/tenants-pay-for-cheap-evictions/" >}}, and {{< smartlink "providing legal counsel to families threatened with eviction" "https://doi.org/10.1080/10511482.2020.1825009" >}}. 

As we have seen that kids are disproportionately impacted by the eviction crisis, policymakers could explore ways to provide additional eviction protections for families with school-age children, whether by reforming the eviction process or providing emergency rental assistance. Our findings highlight the need to target housing stabilization services to at-risk students through the schools. The {{< smartlink "Elementary Housing Assistance Program in Tacoma, WA" "https://www.tacomahousing.org/about/programs-projects/education-programs/" >}}, a partnership between the Tacoma Public Schools and the Tacoma Housing Authority, provided housing choice vouchers for at-risk families. {{< smartlink "In Rochester, MN, the public school district has hired an eviction specialist to connect families to resources that can help them stay stably housed." "https://www.mprnews.org/story/2025/03/12/in-rochester-a-new-program-helps-students-families-avoid-eviction" >}} These sorts of programs provide examples of creative, up-stream solutions that can help students avoid the dislocation associated with eviction. 

