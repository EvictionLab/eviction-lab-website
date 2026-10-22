---
draft: true
childof: research
url: /beyond-eviction
contenttype: updates
collection: true
contentcat: research
featured: true
in_index: true
title: "Beyond eviction: Landlords, community, and housing exploitation in two immigrant Neighborhoods"
date: 2026-10-31T18:49:04.271Z
postauthorname: The Eviction Lab
postauthortitle: Princeton University
authorpic: /images/bios/elab_thumb_sm.jpg
description: lorem ipsum
listSummary: lorem ipsum
twImage: dallas-data-update.jpg
image: dallas-data-update.jpg
fbImage: dallas-data-update.jpg
scripts:
  - charts
  - mapbox
---
<style>
  .visual--mapbox {
    width: 100% !important;
    margin-left: 0% !important;
  }
</style>
<span class="dropcap green">I</span>n Houston, an undocumented couple and their five young children crammed themselves into a one-bedroom apartment, transforming the closet into a bed for their oldest son. About 1,600 miles away, in Boston, another mother showed us how her family used curtains to set up makeshift bedrooms for their children in the living room. All while two couples shared the lease for a two-bedroom apartment, taking turns with the stove every day, a daily inconvenience in exchange for lower rents.

</div>
</div>
</div>
<div class="row mx-4">
<div class="col-12">
<div class="figheader px-0 px-md-3 mt-0 mb-1">Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
</div>
  
  <div class="col-12 col-lg-6 col-x4l-5 offset-x4l-1 px-0 px-md-2">


{{% mapbox
  id="mapbox1"
  data="./boston.csv"
  shapes="./boston.json"
  column="level"
  join="neighborho"
  name="name"
  gradientType="discrete"
  title="Chinatown, Boston"
  filteredPlaceNames="Boston"
  noLegend="true"
  colors="rgba(0, 4, 226, 0.33);rgba(0, 4, 226, 0.66);rgb(0, 15, 226)"
%}}

  </div>

  <div class="col-12 col-lg-6 col-x4l-5 px-0 px-md-2">


{{% mapbox
  id="mapbox2"
  data="./houston.csv"
  shapes="./houston.json"
  column="level"
  join="neighborho"
  name="name"
  gradientType="discrete"
  title="Gulfton, Houston"
  filteredPlaceNames="Houston"
  noLegend="true"
  colors="rgba(0, 203, 226, 0.33);rgba(0, 146, 179, 0.66);rgb(0, 140, 145)"
%}}

  </div>
   
  <div class="figcaption col-12 col-lg-7 col-xxxl-6 col-x4l-5 mx-auto mt-3 mb-0"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
  </div>

<div class="center-content-post updates-post pb-2">
<div class="page-content pt-4 pt-md-0">
<div class="post-body pt-lg-3">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

<script>
  window.addEventListener("load", function () {
    // extra labels per map id, added on top of the base style's labels
    var extraLabels = {
      mapbox1: [{ name: "Chinatown", coordinates: [-71.06168, 42.3438] }],
      mapbox2: [{ name: "Gulfton", coordinates: [-95.48, 29.685] }],
    };
    // maps that can't be zoomed or panned (hover tooltips still work)
    ["mapbox1", "mapbox2"].forEach(function (id) {
      var map = window.elabMaps && window.elabMaps[id];
      if (!map) return;
      ["scrollZoom", "boxZoom", "dragPan", "dragRotate", "keyboard", "doubleClickZoom", "touchZoomRotate", "touchPitch"].forEach(function (h) {
        if (map[h]) map[h].disable();
      });
      // mapbox.js re-enables scroll zoom on ctrl/cmd + wheel, so make enable() a no-op
      map.scrollZoom.enable = function () {};
      // hide the +/- navigation control
      var ctrl = document.querySelector("#" + id + " .mapboxgl-ctrl-top-right");
      if (ctrl) ctrl.style.display = "none";
    });
    Object.keys(extraLabels).forEach(function (id) {
      var map = window.elabMaps && window.elabMaps[id];
      if (!map) return;
      function addLabels() {
        if (map.getSource(id + "-extra-labels")) return;
        map.addSource(id + "-extra-labels", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: extraLabels[id].map(function (l) {
              return {
                type: "Feature",
                properties: { name: l.name },
                geometry: { type: "Point", coordinates: l.coordinates },
              };
            }),
          },
        });
        map.addLayer({
          id: id + "-extra-labels",
          type: "symbol",
          source: id + "-extra-labels",
          layout: {
            "text-field": ["get", "name"],
            "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
            "text-size": 12,
            "text-allow-overlap": true,
            "text-ignore-placement": true,
          },
          paint: { "text-color": "#333", "text-halo-color": "#fff", "text-halo-width": 1.5 },
        });
      }
      if (map.loaded()) addLabels();
      else map.once("load", addLabels);
    });
  });
</script>