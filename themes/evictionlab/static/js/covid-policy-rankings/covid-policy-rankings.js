// console.log('covid-policy-rankings.js loaded.');
$(document).ready(function () {
  // console.log('document ready');
  var rankings = {
    POLICY_SHEET_URL: 'https://spreadsheets.google.com/feeds/list/1_7NhsPRHMGhysge5SQYjEp8wHkQe0VoRIMYq_nB4a8U/1/public/values?alt=json',
    statesData: null,
    statesArr: null,
    statesArrFiltered: null,
    sortStateData: function(sortBy) {
      console.log('sortStateData()');
    },
    filterStateData: function(filters) {
      console.log('filterStateData()');
    },
    setStateListeners: function() {
      // Set click event listener for states.
    },
    setUIListeners: function() {
      // Sets listeners for:
      // Table sort headings
      // Filter checkboxes
    },
    loadHandlebarsTemplate: function(url, callback) {
      // Load handlebars template via xhr.
      console.log('loadHandlebarsTemplate()')
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var raw = xhr.responseText;
          var compiled = Handlebars.compile(raw);
          callback(compiled);
        }
      };
      xhr.send();
    },
    populateStateDetails: function(state) {
      console.log('populateStateDetails()');
    },
    populateStates: function() {
      console.log('populateStates(), ', this.statesArr)
      // Fetch and render handlebars template.
      // Always draws from filtered array.
      var context = { states: this.statesArrFiltered };
      var url = '/js/covid-policy-rankings/states-template.html';
      this.loadHandlebarsTemplate(url, function(template) {
          $('#states_panel tbody').html(template(context));
      });
    },
    processData: function() {
      console.log('processData()');
      // console.log('states data: ', this.statesData);
        // Build states array
      var statesProperties = Object.keys(this.statesData[0])
          .filter(function (p) { return p.startsWith("gsx$"); })
          .map(function (p) { return p.substr(4); });
      // console.log('properties', properties)
      this.statesArr = this.statesData.map(function (r) {
        var row = {};
        statesProperties.forEach(function (p) {
          // console.log('in props loop, ', p);
            row[p.replace('.', '')] = r["gsx$" + p].$t === "" ? null : r["gsx$" + p].$t;
            if (String(p).indexOf('bool') >= 0) {
              if (row[p] === '1') {
              // console.log('it should be a bool: ', p)
                row[p] = true;
              } else {
                row[p] = false;
              }
            }
            if (p === 'stars') {
              row[p] = String(row[p]).replace('.', '-');
            }
            if (row[p] === null) {
                row[p] = '';
            }
        });
        // console.log('row', row);
        return row;
      });
      this.statesArr.shift();
      this.statesArr.shift();
      this.statesArrFiltered = this.statesArr;
      this.populateStates();
      // console.log('allStatesArr, ', allStatesArr);
    },
    loadStateData: function() {
      console.log('loadStateData()')
      // Fetch states data
      var mediaReq = new XMLHttpRequest();
      mediaReq.addEventListener("load",  function() {
        // console.log(mediaReq);
        rankings.statesData = JSON.parse(mediaReq.responseText).feed.entry;
        rankings.processData();
      });
      mediaReq.open("GET", this.POLICY_SHEET_URL);
      mediaReq.send();
    },
    init: function() {
      console.log('init');
      this.loadStateData();
    }
  }
  rankings.init();
});
