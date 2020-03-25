/*  This visualization was made possible by modifying code provided by:

Scott Murray, Choropleth example from "Interactive Data Visualization for the Web"
https://github.com/alignedleft/d3-book/blob/master/chapter_12/05_choropleth.html

Malcolm Maclean, tooltips example tutorial
http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html

Mike Bostock, Pie Chart Legend
http://bl.ocks.org/mbostock/3888852  */

// Object of state names and abbreviations.
var stateLookupObj = {
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
};

// [State name (e.g. Indiana)]: [Eviction rate]
// In 2016, approximately 1 in 25 Indiana renting households received an eviction notice. [X] Indiana cities appear in the top 25 evicting areas [link out to rankings].
// Statewide actions:
// [Action 1 for state]. Dates in effect: [dates]. Link to source [link]
// Do same for additional actions
// 
// ----------------------
// 
// Local/County Actions:
// [Name of locality 1]: [Eviction Rate]
// [Local eviction rate context, as above for states -- can put some lorem ipsum here for now]
// [Action 1 for locality 1]. Dates in effect: [dates]. Link to source [link]
// Same for additional actions
// [Name of locality 2]: [Eviction Rate]
// [Local eviction rate context, as above for states -- can put some lorem ipsum here for now]
// [Action 1 for locality 2] ... etc.

var printTemplateErrors = false; // Disable for live.

// Returns an array of actions.
function getActions(arr) {
  console.log('getActions()')
  var markup = '';
  arr.forEach(function(el, i) {
    console.log(el)
    if (!!el.typeofaction) {
      markup += '<h5 class="action">' + el.typeofaction + '</h5>' +
       '<p class="dates-in-effect">Dates in Effect</p>' +
       '<p class="dates">' + (String(el.datesineffect).length >= 1 ? el.datesineffect : 'Not available.') + '</p>' +
       (String(el.link).length >= 1 ? '<a class="link-to-source" href="' + el.link + '" target="_blank">Link to source</a>' : null );
    } else {
      if (printTemplateErrors) {
        markup += `MISSING DATA: feature.properties.typeofaction, feature.properties.datesineffect, feature.properties.link`;
      }
    }
  });
  console.log(markup)
  return markup;
}

function getLocalitiesMarkup(feature) {
  console.log('getLocalitiesMarkup');
  var markup = '';
  feature.properties.localities.forEach(function(el, i) {
    // Print locality name
    markup += '<h5 class="locality">';
    if (!!el.name && !!el.rate) {
      markup += '<span>' + el.name + '</span>'; // ': <span class="rate">' + el.rate + '</span>';
    } else {
      // If data is missing, return nothing.
      if (printTemplateErrors) {
        markup += 'MISSING DATA: feature.properties.localities.name'  ;
      }
    }
    if (!!el.rate) {
      markup += ': <span class="rate">' + el.rate + '</span>';
    } else {
      // If data is missing, return nothing.
      if (printTemplateErrors) {
        markup += 'MISSING DATA: feature.properties.localities.rate'  ;
      }
    }
    markup += '</h5>';
    // Print locality prose
    if (!!el.xinx && !!el.ranking) {
      markup += '<p class="locality-eviction-prose">In 2016, approximately ' + el.xinx + ' ' + el.name + ' renting households received an eviction notice. ' +  el.name + ' is ranked ' + el.ranking + ' for evictions among similar locations.' +
      '<a class="oulink-icon" href="/rankings/"><svg aria-hidden="true" data-prefix="fas" data-icon="external-link-square-alt" class="svg-inline--fa fa-external-link-square-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path></svg></a></p>';
    } else {
      // If data is missing, return nothing.
      if (printTemplateErrors) {
        markup += 'MISSING DATA: feature.properties.localities.xinx or feature.properties.localities.ranking'  ;
      }
    }
    markup += getActions(el.actions);
  })
  return markup;
}

function getSlideoutContents(feature) {
  var markup = ''; // `<div class="side-panel-contents">`;
  if (feature.properties.name) {
    markup += '<h3 class="state-name">' + feature.properties.name + '</h3>';
  } else {
    if (printTemplateErrors) {
      markup += 'MISSING DATA: feature.properties.name';
    }
  }
  if (feature.properties.rate) {
    markup += '<p class="state-eviction-rate">Eviction Rate: ' + feature.properties.rate + '%</p>';
  } else {
    if (printTemplateErrors) {
      markup += 'MISSING DATA: feature.properties.rate';
    }
  }
  markup += '<hr class="full-divider">';
  if (!!feature.properties.xinx && !!feature.properties.name && feature.properties.ranking) {
    markup += '<p class="state-eviction-prose">In 2016, approximately ' + feature.properties.xinx + ' ' + feature.properties.name + ' renting households received an eviction notice. ' + feature.properties.ranking + ' ' + feature.properties.name + ' cities appear in the top 25 evicting areas. <a class="oulink-icon" href="/rankings/" target="_blank"><svg aria-hidden="true" data-prefix="fas" data-icon="external-link-square-alt" class="svg-inline--fa fa-external-link-square-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path></svg></a></p>';
  } else {
    if (printTemplateErrors) {
      markup += 'MISSING DATA: '
    }
  }
  markup += '<hr class="partial-divider">';
  markup += '<h4 class="actions-list state">Statewide Actions</h4>';
  if (feature.properties.actions) {
    markup += getActions(feature.properties.actions);
  } else {
    markup += '<p>No state actions at this time.</p>';
  }
  markup += '<hr class="partial-divider">';
  markup += '<h4 class="actions-list local">Local/County Actions</h4>';
  if (feature.properties.localities) {
    markup += getLocalitiesMarkup(feature);
  } else {
    markup += '<p>No local or county actions at this time.</p>';
  }
  markup += ''; // '</div>';
  return markup;
}

jQuery(document).ready(function() {

  function openPanel() {
    $('#map_panel').animate({'left': '0'});
    $('#map_panel .close').on('click', function() {
      closePanel();
      $('#map_panel .close').unbind('click')
    })
  }

  function closePanel() {
    $('#map_panel').animate({'left': '-400px'});
  }

  // executes when HTML-Document is loaded and DOM is ready
  // console.log("document is ready");
  // var $ = jQuery;
  // function displayIntroPanel() {
  //   console.log('displayIntroPanel()')
  //   // $('#intro_panel_overlay').show();
  //   $('#intro_panel_overlay').css('display', 'flex');
  //   // Add event listener to dialog button
  //   $('#close_intro_panel').on('click', function(el) {
  //     console.log('clicked close button');
  //     // $('#intro_panel_overlay').hide();
  //     $('#intro_panel_overlay').css('display', 'none');
  //     $('#close_intro_panel').unbind('click');
  //   })
  // }
  // 
  // // Page load intro panel setup
  // var hasCookie = false;
  // // If !cookie, display overlay
  // hasCookie = Cookies.get('evictionlab-covid-map');
  // if (!hasCookie) {
  //   console.log('No cookie.')
  //   displayIntroPanel();
  // } else {
  //   console.log('Has a cookie.')
  //   // displayIntroPanel(); // Remove this when done testing.
  // }
  // // Set or update cookie
  // Cookies.set('evictionlab-covid-map', true, { expires: 7 })

  //Width and height of map
  var width = 960;
  var height = 600;
  // var isDragging = false;
  // D3 Projection
  var projection = d3.geo.albersUsa()
     .translate([width/2, height/2])    // translate to center of screen
     .scale([1200]);          // scale things down so see entire US

  // Define path generator
  var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
    .projection(projection);  // tell path generator to use albersUsa projection


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
    .call(
      d3.behavior.drag()
        .on("dragstart", function () {
          console.log('dragstart')
          // Stop clicks from registering during/just after drag
          d3.event.sourceEvent.stopPropagation();
        })
        .on("dragend", function() {
          // isDragging = false;
          // setTimeout(function() {isDragging = false}, 100);
        })
    )
    .append("g");

  // Append Div for tooltip to SVG
  var div = d3.select("#map_container") // changed from "body"
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // Color variables for states and dots
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
        var placename = items[i].placenameformap;
        var lat = items[i].lat;
        var lng = items[i].lng;
        var state = items[i].state;
        var govtLevel = items[i].levelofgovernmentlocalstatenational;
        var typeofaction = items[i].typeofaction;
        var datesineffect = items[i].datesineffect;
        var link = items[i].linktosourcenewspressreleaseetc;
        var rate = items[i].evictionrate ? items[i].evictionrate : 3.5;
        var ranking = items[i].evictionranking ? items[i].evictionranking : 2;
        var xinx = items[i].xinx ? items[i].xinx : '1 in 8';

        // This is the list of dots to display. 
        // If not latlng is entered, we will not display.
        if (govtLevel === 'local' && !!lat && !!lng) {
          // console.log('building array of local items');
          localActions.push({
            placename: placename,
            lat: lat,
            lng: lng,
            state: state,
            govtLevel: govtLevel,
            typeofaction: typeofaction,
            datesineffect: datesineffect,
            link: link,
            rate: rate,
            ranking: ranking,
            xinx: xinx
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
              // Add the oneoff prose variables to the properties node
              json.features[j].properties.rate = rate;
              json.features[j].properties.ranking = ranking;
              json.features[j].properties.xinx = xinx;
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
              json.features[j].properties.rate = rate;
              json.features[j].properties.ranking = ranking;
              json.features[j].properties.xinx = xinx;
              if (!json.features[j].properties.localities) {
                json.features[j].properties.localities = [];
              }
              var node = String(placename).replace(/\s+/g, '').toLowerCase();
              // console.log('node is', node);
              if (!json.features[j].properties.localities[node]) {
                // No node, add the node.
                json.features[j].properties.localities[node] = {};
              }
              json.features[j].properties.localities[node].name = placename;
              json.features[j].properties.localities[node].rate = rate;
              json.features[j].properties.localities[node].ranking = ranking;
              json.features[j].properties.localities[node].xinx = xinx;
              if (!json.features[j].properties.localities[node].actions) {
                // No node, add the node.
                json.features[j].properties.localities[node].actions = [];
              }
              var action = {
                placename: placename,
                lat: lat,
                lng: lng,
                state: state,
                govtLevel: govtLevel,
                typeofaction: typeofaction,
                datesineffect: datesineffect,
                link: link,
                rate: rate,
                ranking: ranking,
                xinx: xinx
              }
              var arr = json.features[j].properties.localities[node].actions.push(action);
              // arr.push(action);
              // json.features[j].properties.localities[node] = arr;
            } else {
              // console.log('Not state or local, do nothing.');
            }
            // Stop looking through the JSON
            break;
          }
        }
      }

    function clicked(d) {
      console.log('clicked()', d);
      if (d3.event.defaultPrevented) return;
      // console.log('html = ', getSlideoutContents(d))
      // if (!isDragging) {
        if (d.properties.localities) {
          d.properties.localities = Object.values(d.properties.localities);
        }
        $('#map_panel .panel-content').html(getSlideoutContents(d));
        openPanel();
      // }
    }

    // Bind the data to the SVG and create one path per GeoJSON feature
    svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", "state")
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
        console.log('clicked listener', d)
        clicked(d)
        
        // TODO: If panel visible, hide panel
        // TODO: If panel not visible, show panel
        // TODO: update panel visible
        // TODO: If focused state === clicked state, zoom and translate map
        // TODO: If state already focused, zoom back out
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
  
  var labels = svg.selectAll("text")
      .data(localActions)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", 2)
      .attr("font-family", "Akkurat-Regular, sans-serif")
      .attr("dx", function(d){
        return projection([d.lng, d.lat])[0];
      })
      .attr("dy", function(d){
        return projection([d.lng, d.lat])[1] - 3;
      })
      .attr("fill", localActionLabelColor)
      .attr("fill-opacity", 0)
      .text(function(d){return d.placename})
  
      // TODO: programmatically space out the text labels
  
      // console.log('localLabels', localLabels)
    });
  });
});
