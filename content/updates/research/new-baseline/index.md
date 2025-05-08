---
draft: true
listSummaryMaxChars: 250
childof: research
url: /new-baseline/
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "A New Baseline: Changes to Our Eviction Metrics"
date: 2025-05-08T15:28:51.756Z
postauthorname: Sarah Johnson, Grace Hartley, and Peter Hepburn
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
description: "todo."
listSummary: "todo."
scripts:
  - charts
  - arrow-chart2
  - mapbox
socialDescription: "todo."
twImage: todo.jpg
fbImage: todo.jpg
---
<span class="dropcap green">W</span>e launched the {{< smartlink "Eviction Tracking System" "https://evictionlab.org/eviction-tracking/" >}} (ETS) in June 2020, three months after the COVID-19 pandemic had locked down much of the country. As millions were struggling to pay their bills, we wanted to know how many new evictions landlords were filing around the country. For example, in May of 2020, 394 eviction cases were filed in {{< smartlink "Franklin County, Ohio" "https://evictionlab.org/eviction-tracking/columbus-oh/" >}}, home to Columbus and its inner-ring suburbs. 

But what did that number of evictions really mean, in the context of an unprecedented crisis? As we were building the website, we wanted to contextualize those statistics. In a vacuum, “394 eviction cases” might mean little even to experts. Were emergency measures working? Or were landlords evicting tenants as usual? We decided that the best way to provide this context was to compare these numbers to what was typical before the pandemic. 

For each site in the ETS, we established a baseline of one or more pre-pandemic years to which we compared current filings. For example, in Franklin County our baseline was the average number of cases filed over three years when we knew we had high-quality data (2012, 2013, and 2015). Using that baseline, we could say that, on average, 1,622 eviction cases were filed in Franklin County in a typical May. The 394 cases filed in 2020 were less than a quarter of normal levels. 

Five years after starting the ETS, we’ve decided that it’s time to change that baseline. Moving forward, we will compare current eviction filings to a “post-pandemic” baseline of filings in 2023 and 2024. We think this post-pandemic baseline will offer more relevant comparisons and better context for eviction filing data. The ETS now reflects this new baseline, and this post offers an in-depth look at what that means.

What Changes with a New Baseline

The total eviction filing numbers that we report remain the same, and the basic structure of each ETS site remains stable. What changes are statistics measuring change over time. To explain what this looks like, it’s helpful to take two sites: Franklin County and {{< smartlink "Philadelphia, Pennsylvania" "https://evictionlab.org/eviction-tracking/philadelphia-pa/" >}}. In March of 2025, landlords filed 1,934 eviction cases in Franklin County and 1,139 cases in Philadelphia (see Table 1). 

In an average month prior to the pandemic, both sites would have seen a little over 1,600 cases. Comparing the March 2025 numbers to those pre-pandemic levels shows that filings were 19% above baseline in Franklin County (1,934/1621 = 119%) but 32% below baseline in Philadelphia (1,139/1,669 = 68%, which is 32% less than 100%). 

<style>
   .table.table--text td {
    width: unset;
   }
   .table.table--text td.numeric {
    font-family: "Gotham A", "Gotham B", sans-serif;
    font-weight: 400;
   }

  .table.table--text .arrow {
    background: url("arrow2.png") no-repeat center;
    width: 25px;
    height: 15px;
    display: inline-block;
    background-size: contain;
    vertical-align: middle;
    margin: 0 2px;
  }

  table.pivot-condensed th,
  table.original-condensed th {
    border: 2px solid #efefef;
  }
  table.pivot-condensed,
  table.original-condensed,
  table.pivot-verbose {
    display: block;
  }
  table.pivot-verbose thead tr th:nth-child(3) {
    color: white;
    background: #434878;
  }
  table.pivot-verbose thead tr th:nth-child(4) {
    color: white;
    background: #2c897f;
  }
  table.pivot-verbose tbody tr:first-child td {
    font-family: Akkurat-Bold, sans-serif;
  }
  table.pivot-verbose tbody tr td:nth-child(2) {
    background: #94aabd22;
  }
  table.pivot-verbose tbody tr td:nth-child(3),
  table.pivot-verbose tbody tr td:nth-child(4) {
    background: #43487822;
  }
  table.pivot-verbose tbody tr td:nth-child(5),
  table.pivot-verbose tbody tr td:nth-child(6) {
    background: #2c897f22;
  }

</style>

<div class="figheader">Table 1a. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>
<!-- <div class="upscale pb-0 pb-xxl-0"> -->
<table class="table table--text blog-table pivot-condensed table-responsive" style="width:100%">
  <thead>
   <tr>
    <th></th>
    <th>March 2025<br>filings</th>
    <th>...as % of<br>Pre-COVID Baseline</th>
    <th>...as % of<br>2023-2024 Baseline</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Franklin County</td>
    <td class="numeric"><strong>1,934</strong></td>
    <td class="numeric"><strong>+19%</strong> (1,621<span class="arrow"></span>1,934)</td>
    <td class="numeric"><strong>-32%</strong> (1,669<span class="arrow"></span>1,139)</td>
  </tr>
  <tr>
    <td>Philadelphia</td>
    <td class="numeric"><strong>1,139</strong></td>
    <td class="numeric"><strong>+9%</strong> (1,770<span class="arrow"></span>1,934)</td>
    <td class="numeric"><strong>-0.3%</strong> (1,142<span class="arrow"></span>1,139)</td>
  </tr>
  </tbody>
</table>

<div class="figcaption"><p>Pivoted, combined columns. Clearest communication of comparison? <br/> "...as % of" could also be "change from" or "3/25 filings as % of"</p></div>

<div class="figheader">Table 1b. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>

<div class="upscale pb-0 pb-xxl-0">
<table class="table original-condensed blog-table table--text table-responsive" style="width:100%">
   <thead>
   <tr>
    <th></th>
    <th>Franklin County</th>
    <th>Philadelphia</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>March 2025</td>
    <td><strong>1,934</strong></td>
    <td><strong>1,139</strong></td>
  </tr>
  <tr>
    <td>Pre-COVID Baseline</td>
    <td><strong>1,621</strong> (+19%)</td>
    <td><strong>1,669</strong> (-32%)</td>
  </tr>
  <tr>
    <td>2023-2024 Baseline</td>
    <td><strong>1,770</strong> (+9%)</td>
    <td><strong>1,142</strong> (-0.3%)</td>
  </tr>
  </tbody>
</table>
</div>

<div class="figcaption"><p>The percentages in parentheses indicate how the March 2025 value has changed from this baseline.<br />OR<br />In parentheses we compare the March 2025 value to the baseline.</p></div>

<div class="figheader">Table 1bb. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>

<div class="upscale pb-0 pb-xxl-0">
<table class="table original-condensed blog-table table--text table-responsive" style="width:100%">
   <thead>
   <tr>
    <th></th>
    <th>Franklin County</th>
    <th>Philadelphia</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>March 2025 filings</td>
    <td><strong>1,934</strong></td>
    <td><strong>1,139</strong></td>
  </tr>
  <tr>
    <td>...as % of Pre-COVID Baseline</td>
    <td><strong>+19%</strong> (1,621<span class="arrow"></span>1,934)</td>
    <td><strong>-32%</strong> (1,669<span class="arrow"></span>1,139)</td>
  </tr>
  <tr>
    <td>...as % of 2023-2024 Baseline</td>
    <td><strong>+9%</strong> (1,770<span class="arrow"></span>1,934)</td>
    <td><strong>-0.3%</strong> (1,142<span class="arrow"></span>1,139)</td>
  </tr>
  </tbody>
</table>
</div>

<div class="figcaption"><p>Originalish</p></div>

<!-- </div> -->

<hr/>
<div class="figheader">Table 1c. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>
<div class="upscale124 pb-0 pb-xxl-0">
<table class="table table--text blog-table pivot-verbose table-responsive" style="width:100%">
  <thead>
   <tr>
    <th></th>
    <th></th>
    <th colspan="2">Pre-COVID Baseline</th>
    <th colspan="2">2023-2024 Baseline</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td></td>
    <td>March 2025<br>filings</td>
    <td>Average<br>Filings</td>
    <td>3/25 filings as<br>% of baseline</td>
    <td>Average<br>Filings</td>
    <td>3/25 filings as<br>% of baseline</td>
  </tr>
  <tr>
    <td>Franklin County</td>
    <td class="numeric">1,934</td>
    <td class="numeric"> 1,621</td>
    <td class="numeric">+19%</td>
    <td class="numeric"> 1,669</td>
    <td class="numeric">-32%</td>
  </tr>
  <tr>
    <td>Philadelphia</td>
    <td class="numeric">1,139</td>
    <td class="numeric"> 1,770</td>
    <td class="numeric">+9%</td>
    <td class="numeric"> 1,142</td>
    <td class="numeric">-0.3%</td>
  </tr>
  </tbody>
</table>
</div>

<div class="figcaption"><p>Pivoted, grouped columns</p></div>

<hr/>
<div class="figheader">Table 1d. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>

<table class="table table--text blog-table table-responsive" style="width:100%">
  <thead>
   <tr>
    <th></th>
    <th>Franklin County</th>
    <th>Philadelphia</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>March 2025</td>
    <td class="numeric"><strong>1,934</strong></td>
    <td class="numeric"><strong>1,139</strong></td>
  </tr>
  <tr>
    <td>Change from Pre-COVID Baseline</td>
    <td class="numeric"><strong>+19%</strong> (1,934/1,621)</td>
    <td class="numeric"><strong>-32%</strong> (1,139/1,669)</td>
  </tr>
  <tr>
    <td>Change from 2023-2024 Baseline</td>
    <td class="numeric"><strong>+9%</strong> (1,934/1,770)</td>
    <td class="numeric"><strong>-0.3%</strong> (1,139/1,142)</td>
  </tr>
  </tbody>
</table>

<div class="figcaption"><p>Combined rows & columns</p></div>
<hr />


<div class="figheader">Table 1e. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>

<div class="upscale pb-0 pb-xxl-0">
<table class="table table--text blog-table table-responsive" style="width:100%">
  <thead>
   <tr>
    <th></th>
    <th></th>
    <th>Franklin County</th>
    <th>Philadelphia</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>March 2025</td>
    <td>Filings</td>
    <td class="numeric">1,934</td>
    <td class="numeric">1,139</td>
  </tr>
  <tr>
    <td>Pre-COVID Baseline</td>
    <td>Filings (2025 as % of baseline)</td>
    <td class="numeric">1,621 (+19%)</td>
    <td class="numeric">1,669 (-32%)</td>
  </tr>
  <tr>
    <td>2023-2024 Baseline</td>
    <td>Filings (2025 as % of baseline)</td>
    <td class="numeric">1,770 (+9%)</td>
    <td class="numeric">1,142 (-0.3%)</td>
  </tr>
  </tbody>
</table>
</div>

<div class="figcaption"><p>Combined rows, updated styles</p></div>

<hr />


<div class="figheader">Table 1f. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>

<div class="upscale pb-0 pb-xxl-0">
<table class="blog-table table-responsive" style="width:100%">
  <tbody>
   <tr>
    <td></td>
    <td></td>
    <td>Franklin County</td>
    <td>Philadelphia</td>
  </tr>
  <tr>
    <td>March 2025</td>
    <td>Eviction filings</td>
    <td>1,934</td>
    <td>1,139</td>
  </tr>
  <tr>
    <td rowspan="2">OLD BASELINE</td>
    <td>Baseline filings</td>
    <td>1,621</td>
    <td>1,669</td>
  </tr>
  <tr>
    <td>2025 as % of baseline</td>
    <td>+19%</td>
    <td>-32%</td>
  </tr>
  <tr>
    <td rowspan="2">NEW BASELINE</td>
    <td>Baseline filings</td>
    <td>1,770</td>
    <td>1,142</td>
  </tr>
  <tr>
    <td>2025 as % of baseline</td>
    <td>+9%</td>
    <td>-0.3%</td>
  </tr>
  </tbody>
</table>
</div>

<div class="figcaption"><p>Original</p></div>


When we switch to our new baseline of filings in 2023 and 2024, these numbers shift. On average, in March of those two years, we would expect 1,770 eviction filings in Franklin County and 1,142 in Philadelphia. Comparing the March 2025 numbers to this new baseline, we now report that filings were 9% above average in Franklin County and only 0.3% below average in Philadelphia. 

This affects numbers throughout each ETS site page. For example, this doesn’t just change the percentages in March 2025, but in all previous months as well. This means our plots of eviction filings by month look different under the new baseline. For example, here’s the default chart of eviction filings by month relative to average levels with the old and the new baseline in Franklin County.

Figure 1. Comparing monthly eviction filings relative to different baselines


In Franklin County, eviction filings were higher in 2023 and 2024 than they were prior to the pandemic. That means that our post-pandemic baseline in that county is bigger than our pre-pandemic baseline. When we were comparing to pre-pandemic levels (left panel), filings between April 2024 and March 2025 were consistently above the historical average. Switching to the new, higher baseline (right panel), reported numbers are relatively smaller. 

These changes are also reflected in our maps of eviction filing rates, which incorporate the new baselines. Specifically, if you select the “Relative to Average” option, the map now reflects a comparison between current filings and the post-pandemic baseline filings (see Figure 2 for an example in Cleveland). This update also affects our estimates of eviction filings by neighborhood racial composition when you select the “Vs. Average” toggle button. 

{{% bar-chart
  id="2a"
  data="./fig-1-columbus.csv"
  x="date"
  y="pct_diff_old"
  axis="time"
  timeUnit="month"
  yMin="0"
  yMax="1.7"
  yTransform="y => (y + 100)/100"
  yFormat=".0%"
  avgLines="1,pre-COVID,;1,baseline,true"
  title="Figure 2. Eviction filings relative to average in Cleveland, Ohio"
  margin="8 70 50 40"
%}}
{{% bar-chart
  id="2b"
  data="./fig-1-columbus.csv"
  x="date"
  y="pct_diff_new"
  axis="time"
  timeUnit="month"
  yMin="0"
  yMax="1.7"
  yTransform="y => (y + 100)/100"
  yFormat=".0%"
  avgLines="1,2023-24,;1,baseline,true"
  title="Figure 2. Eviction filings relative to average in Cleveland, Ohio"
  margin="8 70 50 40"
%}}

{{% mapbox
  id="mapbox2"
  data="./cleve.csv"
  shapes="./cleveland_shapes.json"
  column="rel_new"
  join="GEOID"
  format="percent"
  name="NAME"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="Figure 2. Eviction filings relative to average in Cleveland, Ohio"
  legendTitle="Filings relative to baseline"
%}}
  <!-- --choro1: #434878;
  --choro2: #c1c5ea;
  --choro3: rgba(241, 241, 241, 0.7);
  --choro4: #e99c7e;
  --choro5: #e24000; -->

Where Changes are Largest

In some of the places we track, eviction filing counts in 2023 and 2024 looked similar to what was typical prior to the pandemic. In these places, the change in baseline makes very little difference to the numbers we report. In other places, the changes are more pronounced. In Figure 3, we plot changes in baseline for each site. The arrows signal the size and direction of the change. A left-facing arrow means that average monthly filings are smaller under the new, post-pandemic baseline than they were under the pre-pandemic baseline. A right-facing arrow indicates the opposite: a higher baseline. 

{{% arrow-chart2
  id="fig3"
  title="Figure 3. Change in average monthly filings between the pre- and post-pandemic baselines"
  data="./fig-3-baseline-changes.csv"
  nameCol="site_label"
  nameWidth="180"
  beforeCol="start"
  format=".0%"
  afterCol="pct_change"
  customSort="(a, b) => (a.after < b.after ? 1 : -1)"
  axisLabelText="Change in baseline"
  legendDecArrowText="Decrease"
  legendIncArrowText="Increase"
  simpleLegend="true"
%}}

Of the 45 jurisdictions in the ETS—10 states and 35 metro-area sites—the new post-pandemic baseline is higher in 23 sites. For example, in {{< smartlink "Harris and Galveston Counties, Texas" "https://evictionlab.org/eviction-tracking/houston-tx/" >}}, average monthly eviction filings increased from 4,865 in the pre-pandemic baseline to 6,743 in the post-pandemic baseline, an increase of 38%. When we compare new filings to this larger post-pandemic baseline, we’re dividing by a bigger number, so they appear relatively smaller. 

By contrast, our baseline has gotten much smaller in some places, most notably {{< smartlink "New York City" "https://evictionlab.org/eviction-tracking/new-york-ny/" >}}. Our pre-pandemic baseline covered the years 2016-2018 and implied a monthly average of 18,795 filings. {{< smartlink "Due to a combination of policy changes, eviction filings have been falling in NYC since at least 2019" "https://evictionlab.org/in-the-most-expensive-city-in-the-country-evictions-remain-lower-than-before-covid-19/" >}}. The average month in the post-pandemic baseline only includes 8,130 eviction cases, less than half of what was previously normal. 

What Doesn’t Change

Some numbers that we report on the ETS are unaffected by the change in baseline. The change does not shift:


If you prefer the pre-pandemic baselines, they’re still available in the CSV files that any user can download from our site. We have expanded our data downloads—both the weekly and monthly files—to include both the original pre-pandemic baselines and the new 2023-2024 baseline. These are included in all {{< smartlink "data download files available here" "https://evictionlab.org/eviction-tracking/get-the-data/" >}}. Reports and analyses that we will conduct with these data will primarily rely on the new baseline, but we wanted to retain these data for any researchers doing their own work.  

[break]

We want to keep the ETS a useful resource for advocates, researchers, journalists, policymakers, and the general public. In that spirit, we’re always looking for ways to include new places and expand the features that we’re able to offer. That’s why we’re making this change to the baseline, something that we’ll continue to revisit moving forward. If you have suggestions on how to improve or expand the ETS, {{< smartlink "please reach out and let us know" "mailto:research@evictionlab.org" >}}!
