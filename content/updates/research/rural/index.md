---
draft: true
childof: research
url: rural-evictions
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: Rural Evictions
date: 2024-01-09T00:20:51.942Z
postauthorname: Juan Pablo Garnham, Carl Gershenson, Olivia Jin, Jacob Haas, and Matthew Desmond
postauthortitle: The Eviction Lab
authorpic: /images/bios/elab_thumb_sm.jpg
image: dallas-public-housing.jpg
fbImage: dallas-public-housing.jpg
twImage: dallas-public-housing.jpg
description: 'lorem ipsum.'
listSummary: 'Lorem ipsum.'
scripts:
  - charts
---

<span class="dropcap green">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E
xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="figheader">Figure 1. Urban vs rural eviction filing rate by year</div>

<iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-viz"></iframe>

Metus aliquam eleifend mi in nulla posuere. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Quis ipsum suspendisse ultrices gravida. Feugiat in fermentum posuere urna.

<style>
  .stacked {
    display: block;
  }
  .side-by-side {
    display: none;
  }
  @media(min-width: 1200px) {
    .stacked {
      display: none;
    }
    .side-by-side {
      display: flex;
      /* charts will overflow (whitespace of the 3rd chart's margin-right), cut it off */
      overflow: hidden;
      width: 180%;
      margin-left: -40%; /* -(180 - 100)/2 */
    }
    .side-by-side .visual {
      margin: 0;
      width: 100%;
    }
    .side-by-side .vis-wrapper {
      /*
        redistribute the -40px margin on the 2nd chart and the 50px of empty margin-right
        on the 3rd chart** among the widths of the 3 charts. since this will exceed the
        width of the container, we set overflow: hidden on side-by-side above.
      */
      flex: 0 0 calc(100%/3 + (40px + 50px)/3);
      flex-wrap: nowrap;
    }
    .side-by-side .vis-wrapper:nth-of-type(1) {
      z-index: 1;
    }
    .side-by-side .vis-wrapper:nth-of-type(2) {
      /* 
        remove some of the empty margin on the middle chart**
        **charts all have equivalent total horiz margin to keep charts equal width despite axis
      */
      margin-left: -20px;
      margin-right: -20px;
    }

  }
</style>
<div class="figheader">Figure 2. Share of eviction filings by neighborhood composition</div>
<div class="stacked">
  <iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=black"></iframe>
  <iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=hispanic"></iframe>
  <iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=white"></iframe>
</div>
<div class="side-by-side">
  <div class="vis-wrapper"><iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=black&hideXAxis"></iframe></div>
  <div class="vis-wrapper"><iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=hispanic&hideYAxis"></iframe></div>
  <div class="vis-wrapper"><iframe class="visual" src="https://development--eviction-lab-site.netlify.app/blog/rural-race-viz/?dem=white&hideXAxis&hideYAxis"></iframe></div>
</div>

Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Amet consectetur adipiscing elit duis tristique sollicitudin. Sed viverra tellus in hac. In cursus turpis massa tincidunt. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor at risus viverra adipiscing at in tellus integer. Arcu risus quis varius quam quisque id. Sagittis vitae et leo duis ut diam. Nullam eget felis eget nunc lobortis mattis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Vitae justo eget magna fermentum iaculis eu non diam. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Bibendum enim facilisis gravida neque convallis a. Ultrices gravida dictum fusce ut placerat orci. Malesuada proin libero nunc consequat interdum varius sit amet mattis.