/*  This visualization was made possible by modifying code provided by:

Scott Murray, Choropleth example from "Interactive Data Visualization for the Web"
https://github.com/alignedleft/d3-book/blob/master/chapter_12/05_choropleth.html

Malcolm Maclean, tooltips example tutorial
http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html

Mike Bostock, Pie Chart Legend
http://bl.ocks.org/mbostock/3888852  */

stateLookupObj = {
  DC: 'District of Columbia',
  AK: 'Alaska',
  AL: 'Alabama',
  AR: 'Arkansas',
  AZ: 'Arizona',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  IA: 'Iowa',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  MA: 'Massachusetts',
  MD: 'Maryland',
  ME: 'Maine',
  MI: 'Michigan',
  MN: 'Minnesota',
  MO: 'Missouri',
  MS: 'Mississippi',
  MT: 'Montana',
  NC: 'North Carolina',
  ND: 'North Dakota',
  NE: 'Nebraska',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NV: 'Nevada',
  NY: 'New York',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VA: 'Virginia',
  VT: 'Vermont',
  WA: 'Washington',
  WI: 'Wisconsin',
  WV: 'West Virginia',
  WY: 'Wyoming'
}

//Width and height of map
var width = 960;
var height = 500;

// D3 Projection
var projection = d3.geo.albersUsa()
   .translate([width/2, height/2])    // translate to center of screen
   .scale([1000]);          // scale things down so see entire US

// Define path generator
var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
  .projection(projection);  // tell path generator to use albersUsa projection


// Define linear scale for output
var color = d3.scale.linear()
  .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"]);

var legendText = ["Cities Lived", "States Lived", "States Visited", "Nada"];

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
      .attr("perserveAspectRatio", "xMinYMid")
      .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}

//Create SVG element and append map to the SVG
var svg = d3.select("#map_container") // changed from "body"
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .call(d3.behavior.zoom().on("zoom", function () {
    // Scales svg with parent.
    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
    // Hides or shows text labels for local events
    // based on zoom level.
    if (d3.event.scale > 4) {
      d3.selectAll("svg text")
        .transition()
        .delay(150)
        .duration(550)
        .attr("fill-opacity", 1);
    } else {
      d3.selectAll("svg text")
      .transition()
      .delay(150)
      .duration(550)
      .attr("fill-opacity", 0);
    }
  }))
  .call(responsivefy)
  .append("g");

// Append Div for tooltip to SVG
var div = d3.select("#map_container") // changed from "body"
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

var hasStateActionsColor = '#8CD3CD';
var noStateActionsColor = '#f8f8f8';
var localActionColor = '#2C897F';
var localActionLabelColor = '#212529';

// Load in all interventions data
d3.json("https://spreadsheets.google.com/feeds/list/1XX9bBi_4ERpeqw_WyqHEIkfpShbif1i6HenBfymYv_U/1/public/values?alt=json", function(data) {
  // console.log('loaded gsheet', data);
  var rows = data.feed.entry;
  // console.log('rows', rows);
  var properties = Object.keys(rows[0])
      .filter(function (p) { return p.startsWith("gsx$"); })
      .map(function (p) { return p.substr(4); });
  // console.log('properties', properties)
  var items = rows.map(function (r) {
    var row = {};
    properties.forEach(function (p) {
        row[p.replace('.', '')] = r["gsx$" + p].$t === "" ? null : r["gsx$" + p].$t;
        if (p === 'levelofgovernmentlocalstatenational') {
          row[p] = String(row[p]).toLowerCase();
        }
        if (p === 'long') {
          var storeVal = row[p];
          // row[p] = String(row[p]).toLowerCase();
          delete(row[p])
          row['lng'] = storeVal;
        }
        if (p === 'state') {
          var storeVal = row[p];
          var getStateName = stateLookupObj[storeVal];
          delete(row[p])
          row[p] = getStateName;
        }
        if (row[p] === null) {
            row[p] = '';
        }
    });
    // console.log('row', row)
    return row;
  });
  // console.log(items)
  var localActions = [];
  // Load GeoJSON data and merge with states data
  d3.json("/js/covid-map/us-states.json", function(json) {

    // Loop through each state data value in the .csv file
    for (var i = 0; i < items.length; i++) {

      // Values to be saved to feature
      var placename = items[i].placename;
      var lat = items[i].lat;
      var lng = items[i].lng;
      var state = items[i].state;
      var govtLevel = items[i].levelofgovernmentlocalstatenational
      var typeofaction = items[i].typeofaction
      var datesineffect = items[i].datesineffect
      var link = items[i].linktosourcenewspressreleaseetc

      if (govtLevel === 'local') {
        // console.log('building array of local items');
        localActions.push({
          placename: placename,
          lat: lat,
          lng: lng,
          state: state,
          govtLevel: govtLevel,
          typeofaction: typeofaction,
          datesineffect: datesineffect,
          link: link
        })
      }

      // Find the corresponding state inside the GeoJSON
      for (var j = 0; j < json.features.length; j++)  {
        var jsonState = json.features[j].properties.name;

        if (state == jsonState) {
          // Copy the data value into the JSON
          // json.features[j].properties.visited = dataValue;
          if (items[i].levelofgovernmentlocalstatenational === 'state') {
            // console.log('It\'s a state');
            // Create an array of state-level actions if one doesn't exist.
            if (!json.features[j].properties.actions) {
              json.features[j].properties.actions = [];
            }
            var action = {
              placename: placename,
              state: state,
              govtLevel: govtLevel,
              typeofaction: typeofaction,
              datesineffect: datesineffect,
              link: link
            };
            // If it's a state, add state data to the feature properties.actions.
            json.features[j].properties.actions.push(action);
            json.features[j].properties.hasStateActions = true;

          } else if (items[i].levelofgovernmentlocalstatenational === 'local') {
            // console.log('It\'s local.');
            if (!json.features[j].properties.localActions) {
              json.features[j].properties.localActions = [];
            }
            var action = {
              placename: placename,
              lat: lat,
              lng: lng,
              state: state,
              govtLevel: govtLevel,
              typeofaction: typeofaction,
              datesineffect: datesineffect,
              link: link
            }
            json.features[j].properties.localActions.push(action)
          } else {
            // console.log('Not state or local, do nothing.');
          }
          // Stop looking through the JSON
          break;
        }
      }
    }
  var zoom = d3.behavior.zoom()
    .translate(projection.translate())
    .scale(projection.scale())
    .scaleExtent([height, 8 * height])
    .on("zoom", zoomed);
  function clicked(d) {
    var centroid = path.centroid(d),
        translate = projection.translate();

    projection.translate([
      translate[0] - centroid[0] + width / 2,
      translate[1] - centroid[1] + height / 2
    ]);

    zoom.translate(projection.translate());

    // g.selectAll("path").transition()
    d3.select("svg").transition()
        .duration(700)
        .attr("d", path);
  }

  function zoomed() {
    projection.translate(d3.event.translate).scale(d3.event.scale);
    g.selectAll("path").attr("d", path);
  }
  // Bind the data to the SVG and create one path per GeoJSON feature
  svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("stroke", "#fff")
    .style("stroke-width", "1")
    .style("fill", function(d) {
      // Get data value
      var value = d.properties.hasStateActions;
      if (value) {
        //If value exists…
        return hasStateActionsColor; // color(value);
      } else {
        //If value is undefined…
        return noStateActionsColor; // "rgb(213,222,217)";
      }
    })
    .on("click", function(d) {
      console.log('clicked: ', d)
      clicked(d)
    });

  // Map the localities that have actions.
  // console.log('before localities foreach, localActions = ', localActions);
  svg.selectAll("circle")
    .data(localActions)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return projection([d.lng, d.lat])[0];
    })
    .attr("cy", function(d) {
      return projection([d.lng, d.lat])[1];
    })
    .attr("r", function(d) {
      return 2; // Math.sqrt(d.years) * 4;
    })
    .style("fill", localActionColor)
    .style("opacity", 0.85)

  svg.selectAll("text")
    .data(localActions)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", 2)
    .attr("dx", function(d){
      return projection([d.lng, d.lat])[0];
    })
    .attr("dy", function(d){
      return projection([d.lng, d.lat])[1] - 3;
    })
    .attr("fill", localActionLabelColor)
    .attr("fill-opacity", 0)
    .text(function(d){return d.placename})

    // console.log('localLabels', localLabels)

    // Modification of custom tooltip code provided by Malcolm Maclean, "D3 Tips and Tricks"
    // http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html
    // .on("mouseover", function(d) {
    //     console.log('mouseover')
    //   	div.transition()
    //     	   .duration(200)
    //          .style("opacity", .9);
    //          div.text(d.place)
    //          .style("left", (d3.event.pageX) + "px")
    //          .style("top", (d3.event.pageY - 28) + "px");
    // })
    // 
    // .on("click", function(d) {
    //     console.log('click')
    //     console.log(d)
    //     // div.transition()
    //     //      .duration(200)
    //     //      .style("opacity", .9);
    //     //      div.text(d.place)
    //     //      .style("left", (d3.event.pageX) + "px")
    //     //      .style("top", (d3.event.pageY - 28) + "px");
    // })
    // 
    // // fade out tooltip on mouse out
    // .on("mouseout", function(d) {
    //     div.transition()
    //        .duration(500)
    //        .style("opacity", 0);
    // });
  });

// Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
// var legend = d3.select("#map_container").append("svg")
//       		.attr("class", "legend")
//      			.attr("width", 140)
//     			.attr("height", 200)
//           // .attr("viewbox", `0 0 140 200`)
//           // .attr("preserveAspectRatio", "xMidYMid meet")
//           // .call(responsivefy)
//    				.selectAll("g")
//    				.data(color.domain().slice().reverse())
//    				.enter()
//           // .call(responsivefy)
//    				.append("g")
//      			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
// 
//   	legend.append("rect")
//    		  .attr("width", 18)
//    		  .attr("height", 18)
//    		  .style("fill", color);
// 
//   	legend.append("text")
//   		  .data(legendText)
//       	  .attr("x", 24)
//       	  .attr("y", 9)
//       	  .attr("dy", ".35em")
//       	  .text(function(d) { return d; });

    // legend.call(responsivefy);
  });

// }
// );
