---
draft: true
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
description: "When we launched the Eviction Tracking System, the best way to provide context was to compare against what was typical before the pandemic. Five years later, we’ve decided it’s time to change that baseline."
listSummary: "When we launched the Eviction Tracking System, the best way to contextualize the numbers was to compare against what was typical before the pandemic. Five years later, we’ve decided it’s time to change that baseline."
scripts:
  - charts
  - arrow-chart2
  - mapbox
socialDescription: "When we launched the Eviction Tracking System, the best way to provide context was to compare against what was typical before the pandemic. Five years later, we’ve decided it’s time to change that baseline."
twImage: el-baseline-thumb2.png
fbImage: el-baseline-thumb2.png
image: el-baseline2.gif
---
<span class="dropcap green">W</span>e launched the {{< smartlink "Eviction Tracking System" "https://evictionlab.org/eviction-tracking/" >}} (ETS) in June 2020, three months after the COVID-19 pandemic had locked down much of the country. As millions were struggling to pay their bills, we wanted to know how many new evictions landlords were filing around the country. For example, in May of 2020, 394 eviction cases were filed in {{< smartlink "Franklin County, Ohio" "https://evictionlab.org/eviction-tracking/columbus-oh/" >}}, home to Columbus and its inner-ring suburbs. 

But what did that number of evictions really mean, in the context of an unprecedented crisis? As we were building the website, we wanted to contextualize those statistics. In a vacuum, “394 eviction cases” might mean little even to experts. Were emergency measures working? Or were landlords evicting tenants as usual? We decided that the best way to provide this context was to compare these numbers to what was typical before the pandemic. 

For each site in the ETS, we established a baseline of one or more pre-pandemic years to which we compared current filings. For example, in Franklin County our baseline was the average number of cases filed over three years when we knew we had high-quality data (2012, 2013, and 2015). Using that baseline, we could say that, on average, 1,622 eviction cases were filed in Franklin County in a typical May. The 394 cases filed in 2020 were less than a quarter of normal levels. 

Five years after starting the ETS, we’ve decided that it’s time to change that baseline. Moving forward, we will compare current eviction filings to a “post-pandemic” baseline of filings in 2023 and 2024. We think this post-pandemic baseline will offer more relevant comparisons and better context for eviction filing data. The ETS now reflects this new baseline, and this post offers an in-depth look at what that means.

<br>

### What Changes with a New Baseline

<br>

The total eviction filing numbers that we report remain the same, and the basic structure of each ETS site remains stable. What changes are statistics measuring change over time. To explain what this looks like, it’s helpful to take two sites: Franklin County and {{< smartlink "Philadelphia, Pennsylvania" "https://evictionlab.org/eviction-tracking/philadelphia-pa/" >}}. In March of 2025, landlords filed 1,934 eviction cases in Franklin County and 1,139 cases in Philadelphia (see Table 1). 

In an average month prior to the pandemic, both sites would have seen a little over 1,600 cases. Comparing the March 2025 numbers to those pre-pandemic levels shows that filings were 19% above baseline in Franklin County (1,934/1621 = 119%) but 32% below baseline in Philadelphia (1,139/1,669 = 68%, which is 32% less than 100%). 

<style>
    table {
      margin-left: -42px !important;
      margin-right: -42px !important;
      min-width: calc(100% + 84px) !important;
    }
    table th {
      border: 2px solid #efefef;
    }
   table td {
    width: unset !important;
   }
   table td.numeric {
    font-family: "Gotham A", "Gotham B", sans-serif;
    font-weight: 400;
   }
   table strong {
    margin-right: 4px;
   }

  table .arrow {
    background: url("arrow2.png") no-repeat center;
    width: 25px;
    height: 15px;
    display: inline-block;
    background-size: contain;
    vertical-align: middle;
    margin: 0 2px;
  }

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
</style>

<div class="figheader mb-0">Table 1. Eviction filings in greater Columbus (Franklin County) and Philadelphia</div>

<div>
<table class="table blog-table table--text table-responsive">
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
    <td>1,934</td>
    <td>1,139</td>
  </tr>
  <tr>
    <td>...as % of Pre-COVID Baseline</td>
    <td>+19%</td>
    <td>-32%</td>
  </tr>
  <tr>
    <td>...as % of 2023-2024 Baseline</td>
    <td>+9%</td>
    <td>-0.3%</td>
  </tr>
  </tbody>
</table>
</div>

<!-- <div class="figcaption"><p>Originalish</p></div> -->
<br>

When we switch to our new baseline of filings in 2023 and 2024, these numbers shift. On average, in March of those two years, we would expect 1,770 eviction filings in Franklin County and 1,142 in Philadelphia. Comparing the March 2025 numbers to this new baseline, we now report that filings were 9% above average in Franklin County and only 0.3% below average in Philadelphia. 

This affects numbers throughout each ETS site page. For example, this doesn’t just change the percentages in March 2025, but in all previous months as well. This means our plots of eviction filings by month look different under the new baseline. For example, here’s the default chart of eviction filings by month relative to average levels with the old and the new baseline in Franklin County.

</div>
</div>
</div>
<div class="row mx-4 county-comparison">
<div class="col-12">
<div class="figheader px-0 px-md-3 my-0">Figure 1. Monthly eviction filings relative to pre- and post-pandemic baselines in Franklin County</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 pl-md-2">

{{% bar-chart
  id="2a"
  data="./fig-1-columbus.csv"
  x="date"
  y="pct_diff_old"
  axis="time"
  timeUnit="month"
  yMin="0"
  yMax="1.8"
  yTicks="6"
  yTransform="y => (y + 100)/100"
  yFormat=".0%"
  avgLines="1,pre-COVID,;1,baseline,true"
  title="Pre-COVID baseline"
  margin="4 70 60 40"
%}}

  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 pr-md-2">

{{% bar-chart
  id="2b"
  data="./fig-1-columbus.csv"
  x="date"
  y="pct_diff_new"
  axis="time"
  timeUnit="month"
  yMin="0"
  yMax="1.8"
  yTicks="6"
  yTransform="y => (y + 100)/100"
  yFormat=".0%"
  avgLines="1,2023-24,;1,baseline,true"
  title="2023-2024 baseline"
  margin="4 70 60 40"
%}}

  </div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content pt-6 pt-md-0">
<div class="post-body pt-lg-3">

<br>

In Franklin County, eviction filings were higher in 2023 and 2024 than they were prior to the pandemic. That means that our post-pandemic baseline in that county is bigger than our pre-pandemic baseline. When we were comparing to pre-pandemic levels (left panel), filings between April 2024 and March 2025 were consistently above the historical average. Switching to the new, higher baseline (right panel), reported numbers are relatively smaller. 

These changes are also reflected in our maps of eviction filing rates, which incorporate the new baselines. Specifically, if you select the “Relative to Baseline” option, the map now reflects a comparison between current filings and the post-pandemic baseline filings (see Figure 2 for an example in Cleveland). This update also affects our estimates of eviction filings by neighborhood racial composition when you select the “Vs. Baseline” toggle button. 

</div>
</div>
</div>
<div class="row mx-4 county-comparison">
<div class="col-12">
<div class="figheader px-0 px-md-3 my-0">Figure 2. Eviction filings relative to pre- and post-pandemic baselines in Cleveland, Ohio</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 px-md-2">

{{% mapbox
  id="mapbox1"
  data="./cleve.csv"
  shapes="./cleveland_shapes.json"
  column="rel_old"
  join="GEOID"
  format="percent"
  name="NAME"
  gradientType="diverging"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="Pre-COVID baseline"
%}}

  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 px-md-2">

{{% mapbox
  id="mapbox2"
  data="./cleve.csv"
  shapes="./cleveland_shapes.json"
  column="rel_new"
  join="GEOID"
  format="percent"
  name="NAME"
  gradientType="diverging"
  colors="#434878;#c1c5ea;rgba(241, 241, 241, 0.7);#e99c7e;#e24000"
  title="2023-2024 baseline"
%}}

  </div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content pt-8 pt-md-0">
<div class="post-body pt-lg-3">

  <!-- --choro1: #434878;
  --choro2: #c1c5ea;
  --choro3: rgba(241, 241, 241, 0.7);
  --choro4: #e99c7e;
  --choro5: #e24000; -->

<br>

### Where Changes are Largest

<br>

In some of the places we track, eviction filing counts in 2023 and 2024 looked similar to what was typical prior to the pandemic. In these places, the change in baseline makes very little difference to the numbers we report. In other places, the changes are more pronounced. In Figure 3, we plot changes in baseline for each site. The arrows signal the size and direction of the change. A left-facing arrow means that average monthly filings are smaller under the new, post-pandemic baseline than they were under the pre-pandemic baseline. A right-facing arrow indicates the opposite: a higher baseline. 


{{% arrow-chart2
  id="fig3"
  title="Figure 3. Change in average monthly filings between pre- and post-pandemic baselines"
  data="./fig-3-baseline-changes.csv"
  nameCol="site_label"
  nameWidth="200"
  beforeCol="start"
  format=".0%"
  afterCol="pct_change"
  customSort="(a, b) => (a.after < b.after ? 1 : -1)"
  axisLabelText="Change in baseline filings"
  legendDecArrowText="Decrease"
  legendIncArrowText="Increase"
  simpleLegend="true"
%}}

<br>

Of the 45 jurisdictions in the ETS—10 states and 35 metro-area sites—the new post-pandemic baseline is higher in 23 sites. For example, in {{< smartlink "Harris and Galveston Counties, Texas" "https://evictionlab.org/eviction-tracking/houston-tx/" >}}, average monthly eviction filings increased from 4,865 in the pre-pandemic baseline to 6,743 in the post-pandemic baseline, an increase of 38%. When we compare new filings to this larger post-pandemic baseline, we’re dividing by a bigger number, so they appear relatively smaller. 

By contrast, our baseline has gotten much smaller in some places, most notably {{< smartlink "New York City" "https://evictionlab.org/eviction-tracking/new-york-ny/" >}}. Our pre-pandemic baseline covered the years 2016-2018 and implied a monthly average of 18,795 filings. {{< smartlink "Due to a combination of policy changes, eviction filings have been falling in NYC since at least 2019" "https://evictionlab.org/in-the-most-expensive-city-in-the-country-evictions-remain-lower-than-before-covid-19/" >}}. The average month in the post-pandemic baseline only includes 8,130 eviction cases, less than half of what was previously normal. 
<br><br>

### What Doesn’t Change

<br>

Some numbers that we report on the ETS are unaffected by the change in baseline. The change does not shift:

- The total number of eviction cases filed every month or every year
- Our calculation of eviction hotspots
- Estimates of eviction filings by defendant race/ethnicity or gender


If you prefer the pre-pandemic baselines, they’re still available in the CSV files that any user can download from our site. We have expanded our data downloads—both the weekly and monthly files—to include both the original pre-pandemic baselines and the new 2023-2024 baseline. These are included in all {{< smartlink "data download files available here" "https://evictionlab.org/eviction-tracking/get-the-data/" >}}. Reports and analyses that we will conduct with these data will primarily rely on the new baseline, but we wanted to retain these data for any researchers doing their own work.  

<hr />

We want to keep the ETS a useful resource for advocates, researchers, journalists, policymakers, and the general public. In that spirit, we’re always looking for ways to include new places and expand the features that we’re able to offer. That’s why we’re making this change to the baseline, something that we’ll continue to revisit moving forward. If you have suggestions on how to improve or expand the ETS, {{< smartlink "please reach out and let us know" "mailto:research@evictionlab.org" >}}!
