---
draft: true
childof: blog
url: we-made-a-simple-eviction-data-request-to-all-50-states-this-is-what-we-learned
contenttype: updates
collection: true
contentcat: blog
featured: true
in_index: true
title: "We made a simple eviction data request to all 50 states. This is what we learned"
date: 2024-10-11T18:49:04.271Z
postauthorname: Camila Vallejo
postauthortitle: The Eviction Lab
authorpic: /about/page-content/research-team-bios/camila-vallejo/cvallejo_thumb.jpg
description: "The federal government doesn’t track evictions and there is no national mandate for courts to collect it, so we made a request for eviction data in all 50 states. Spoiler: In many places, it wasn’t easy to find these numbers."
listSummary: "The federal government doesn’t track evictions and there is no national mandate for courts to collect it, so we made a request for eviction data in all 50 states. Spoiler: In many places, it wasn’t easy to find these numbers."
twImage: map.png
image: map.png
fbImage: map.png
scripts:
  - charts
  - maps
---
<style>
  .svg-map__legend {
    display: none;
  }

  .svg-map__shape--hovered {
    stroke: #fff;
    stroke-width: 3;
  }

  .vertical-spacer {
    display: block;
    height: 0.75rem;
  }
</style>
download
<span class="dropcap red">I</span>n the United States, we track monthly {{< smartlink "unemployment" "https://www.dol.gov/general/topic/statistics/employment" >}} and {{< smartlink "inflation" "https://www.bls.gov/cpi/home.htm" >}} trends. Every year, we get updates on {{< smartlink "population growth" "https://www.census.gov/" >}} and {{< smartlink "educational outcomes" "https://nces.ed.gov/" >}}. Why? Because these metrics give us a sense of whether our country is on the right track or we need to sound an alarm. Yet when it comes to housing—particularly rental housing—we often lack the numbers we need to track stability. Eviction figures are one example.  

“I think it's kind of telling that we have entire infrastructures related to tracking the things that are really important to U.S. policymakers, and… [to] some extent it feels like housing has kind of slipped through the cracks,” said Sabiha Zainulbhai, Deputy Director of Domestic Housing for New America's Future of Land and Housing program.

{{< pullquote "“It's kind of telling that we have entire infrastructures related to tracking the things that are really important to U.S. policymakers... it feels like housing has kind of slipped through the cracks.”" >}}

Since the federal government doesn’t track evictions and there is no national mandate for courts to collect it, how well do states track this issue? To answer this question, we decided to make a baseline request for eviction data in all 50 states. Spoiler: In many places, it wasn’t easy to find these numbers.

Although there are national efforts to collect these data from organizations like the {{< smartlink "Legal Services Corporation" "https://civilcourtdata.lsc.gov/data/eviction" >}}, the {{< smartlink "Court Statistics Project" "https://www.courtstatistics.org/" >}}, {{< smartlink "New America" "https://www.newamerica.org/future-land-housing/reports/why-is-eviction-data-bad/" >}}, and the {{< smartlink "Eviction Lab" "https://evictionlab.org/" >}}, as well as local initiatives, through this exercise we realized that actual numbers on what is happening in real-time, state by state, and year by year, are difficult to pinpoint.

<br/>

### A closer look: Does your judicial branch make state-level data available? 

<br/>

We set out to ask each state the same question about eviction records: <strong>how many residential evictions were filed from 2018 to 2021 in your entire state?</strong> Asking this direct and seemingly simple question to all 50 states would give us a scope of the problem and a sense of how far we could be from a national eviction data tracking system. While insightful, it’s important to note that annual eviction numbers just scratch the surface of the eviction crisis and don’t tell us where evictions are happening or who they happen to — the next step in understanding the crisis.  

<!-- TODO: add to _chart-demo -->
{{% state-map
  id="statemap1"
  data="./map_data.csv"
  title="Availability of 2018-2021 State-Level Eviction Data"
  idColumn="fips"
  valueColumn="score1"
  minVal="0"
  maxVal="2"
  valueTemplate=""
  valueFormat=".2f"
  binValues="Data not available;Data found after request;Data on website"
  colors="#94aabd;#434878;#2c897f"
%}}
<div class="legend mb-3">
  <div class="legend-item legend-item--2">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Data on website</div>
  </div>
  <div class="legend-item legend-item--1">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Data found after request</div>
  </div>
  <div class="legend-item legend-item--3">
  <div class="legend-item__color"></div>
  <div class="legend-item__label">Data not available<sup>1,2</sup></div>
  </div>
</div>


We found data for 41 states either via requests or through the state’s judicial branch website. Nearly a third of the states had this information available on dashboards or annual reports, though in some it was easier to track down than in others. This was the case in large states like Ohio, but also in less populous states like New Hampshire. 

<a class="btn buttonlink" href="./statewide-eviction-data.csv" target="_blank" rel="noreferrer noopener" style="width: unset; max-width: 324px">Download the Data</a>

Jeanette Bilodeau is a business analyst for the circuit courts in New Hampshire who's been in charge of creating eviction filing reports for the state since late 2018. 

While the will from the judicial branch was key, she said it wouldn’t have been possible without the existing foundation. 

“[New Hampshire has] a centralized court system where we all use the same case management system. We are fortunate to have this structure, because it enables us to get some data that I've seen other states struggle with,” Bilodeau says. 

Data analysts in other states might not have the same resources. 
“I wouldn't want to have to be a data person in [those other states] because it's like wrangling cats. You're just working with a lot of variation and a lot of inconsistency,” Bilodeau emphasized.

{{< pullquote "The reality is eviction data can differ county to county depending on the place, making an overall understanding of the crisis all that much more difficult." >}}

Information about eviction filings, or the start of an official court case that returns possession to the owner, relies on local court clerks. While facts about the case can be recorded in a digital database, some clerks may still track it manually or not at all.  And even if the information is tracked, it doesn’t mean it’s funneled to one central location that could pinpoint how many filings are happening in real time. That’s the case in states like Montana and Mississippi. In these states, evictions are handled by local courts and each court tracks that data individually. The reality is eviction data can differ county to county depending on the place, making an overall understanding of the crisis all that much more difficult. 

The obstacles to seamless eviction filing data are abundant and they became very clear in nine states when we made our data request. In Tennessee, Louisiana and South Carolina, we were unable to pinpoint a contact or gather any answers from the judicial branch. In the other six states, court personnel informed us that they were unable to provide statewide eviction data. 

While the reasons vary, it mostly comes down to lack of investment. 

Prior to 2022, Illinois did not make data public on eviction cases as these cases were filed under an umbrella case category. Today, insight on how many evictions are filed each quarter are now possible. 

“At least in Illinois, the clerks are kind of the front line as far as data collection,” said Katherine Keefe, a circuit court clerk in McHenry County, Illinois. She said working directly with clerks and what they needed has helped Illinois make that change. 

In order for McHenry County to upgrade their case management system, Keefe estimates it took an investment of about $50,000. The majority of the money came from court automation fees — a fee charged when civil and criminal cases are filed to help the court improve technology without having to rely on government funding. But money isn’t the only requirement. Another layer of making this possible are {{< smartlink "court data standards" "https://www.newamerica.org/future-land-housing/collections/towards-uniform-court-eviction-data-standards/" >}} — a common methodology all courts should follow when collecting data to ensure uniformity. 

As it stands now many local courts gather information to close the case, not to necessarily provide insight on who is being evicted and surely not to feed a national eviction database. 

<br/>

### Limitations and complexities in obtaining eviction data

<br/>


1. **Are we speaking the same language?** 
  While some states understood what we meant by “residential evictions,” others had different names for eviction filings.  These included summary process, unlawful detainer, forcible entry and detainer, landlord and tenant cases, summary ejectment, and more.
  <br/><span class="vertical-spacer"></span>
  In some states it was even more complicated. For example, as of 2021, Nebraska implemented subtypes including: forcible entry and detainer damages, forcible entry and detainer, Uniform mobile home LLTA, and more—all included in our request.

1. **Some caveats**:
While nine states could not provide the data we wanted, there were some things to note. Some states, like Illinois and Indiana, began tracking evictions after 2020. While this data is available now, it could not fulfill our requested timeline of 2018-2021. Meanwhile, in some states non-profit organizations have taken the lead as data is hard to come by.  While these partnerships are critical, transparency efforts should come from courts, freeing resources so that non-profit organizations can focus on analysis and solutions. 

1. **Why we hit some dead ends**:
For the states that weren’t able to fulfill our requests, some had the will but didn’t have the resources. Some states required payments of at least $50 per hour of work for the specific reports we were looking for. This is often due to courts not tracking this information as-is.  Other courts simply told us it wasn’t required of them to create reports outside of their daily needs. 

1. **Can anyone help us?**
Tracking down the right person to send the request to was sometimes a hassle. In some states we were kicked from one department to the other with no clear insight as to who might have this information request. 

1. **Needle in a haystack**:
Even in states that offer this data online, these numbers could be hidden in reports that are dozens of pages long. Simplification is still needed. 

<br/>

### How do we dig ourselves out of this data ditch?

<br/>

Housing advocates, researchers and policy makers alike have been calling on the {{< smartlink "federal government to establish national eviction data collection" "https://www.nytimes.com/2021/01/28/opinion/eviction-crisis-moratorium.html?smid=tw-share" >}} while states have tried to take matters into their own hands. And while a step in the right direction to see the majority of states providing eviction numbers for this project, we are still far from understanding the true impact. 

Erin Feichtinger, policy director for the Women’s Fund of Omaha, worked alongside state lawmakers in 2021 to pass legislation requiring the state supreme court to provide the legislature with eviction data twice a year.  The data would include the number of eviction cases filed, the number of tenants represented by legal counsel during eviction proceedings, and more. The goal of this legislation was to help the state identify and address gaps. 

“Without that data piece on what are the sheer numbers of homelessness and housing instability and what that means for communities, I don't know that we ever actually fully solve the affordable housing crisis at all,” Feichtinger said. 

While Nebraska generated the reports after the law went into effect, they ultimately did not provide the information advocates were looking for because the underlying data wasn’t being collected.

“We have to overhaul the entire justice database in order to just find information that should be included on the pleadings to begin with? Like, that's a problem,” Feichtinger said.

Nebraska’s dilemma is representative of why we need data, and also why it’s often such a challenge: the patchwork effort we have employed on the local level to collect eviction data is flawed. 

Our country was and continues to be in a housing crisis. Today, a {{< smartlink "record" "https://www.jchs.harvard.edu/americas-rental-housing-2024" >}} 22.4 million renters across the country are cost burdened, spending more than 30% of their income on housing, while production of rental housing is not keeping up with demand. We know the best way to help a tenant experiencing an eviction is by preventing it all together via legal aid, rental assistance, strong tenant protections and so much more. But help is only as effective as its reach, and data is one of the few metrics that can let us know at what scale help is really needed. 

<hr />
<div class="footnotes">
<ol>
<li>
While Indiana and Illinois could not fulfill the request for the required years (2018-2021),  they now have real time eviction filing data available on their judicial websites. 
</li>
<li>
As of March 2024, eviction filing data for South Carolina is available via Legal Services Corporation thanks to a {{< smartlink "lawsuit" "https://www.southcarolinapublicradio.org/sc-news/2024-03-14/south-carolina-naacp-won-the-right-to-publish-current-eviction-data-the-data-are-finally-out" >}}. 
</li>
</ol>