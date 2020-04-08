// console.log('covid-policy-rankings.js loaded.');
$(document).ready(function () {
  // console.log('document ready');
  var rankings = {
    POLICY_SHEET_URL: 'https://spreadsheets.google.com/feeds/list/1_7NhsPRHMGhysge5SQYjEp8wHkQe0VoRIMYq_nB4a8U/1/public/values?alt=json',
    statesData: null,
    statesArr: [],
    statesArrFiltered: [],
    sortConfig: ['stname', 'asc'], // [sort by id of col head (string), sort order (asc, desc, or false)]
    filterConfig: [],
    sortStateData: function(callback) {
      console.log('sortStateData()');
      // console.log('sortConfig, ', this.sortConfig);
      var sortArr = rankings.sortConfig;
      this.statesArrFiltered = this.statesArr.slice(0);
      if (sortArr.length > 0) {
        console.log('there is a sort criterion');
        if (sortArr[0] === 'stname') {
          console.log('sorting by alpha');
          if (sortArr[1] === 'asc') {
            // console.log('sorting alpha ascending');
            rankings.statesArrFiltered.sort(function (a, b) {
              if (a[sortArr[0]] < b[sortArr[0]]) return -1;
              else if (a[sortArr[0]] > b[sortArr[0]]) return 1;
              return 0;
            });
          } else {
            // console.log('sorting alpha descending');
            rankings.statesArrFiltered.sort(function (a, b) {
              if (a[sortArr[0]] > b[sortArr[0]]) return -1;
              else if (a[sortArr[0]] < b[sortArr[0]]) return 1;
              return 0;
            });
          }
        } else {
          // console.log('sorting by numeric');
          if (sortArr[1] === 'asc') {
            // console.log('sorting numeric ascending');
            rankings.statesArrFiltered.sort(function(a, b) {
              return parseFloat(a[sortArr[0]]) - parseFloat(b[sortArr[0]]);
            });
          } else {
            // console.log('sorting numeric descending');
            rankings.statesArrFiltered.sort(function(a, b) {
              return parseFloat(b[sortArr[0]]) - parseFloat(a[sortArr[0]]);
            });
          }
        }
      } else {
        // Revert to order when loaded.
        this.statesArrFiltered = this.statesArr.slice(0);
      }
      // console.log('done sorting. rankings.statesArrFiltered = ', rankings.statesArrFiltered);
      callback();
    },
    filterStateData: function(callback) {
      console.log('filterStateData()');
      console.log('filterConfig, ', this.filterConfig);
      this.filterConfig.forEach(function(val, i) {
        console.log('filtering for, ', val);
        rankings.statesArrFiltered = rankings.statesArrFiltered.filter(function(el) {
          console.log('el, ', el[val])
          return el[val] === true;
        })
      });
      callback();
    },
    sortAndFilter: function() {
      // Daisy-chain sorting and filtering,
      // and call populateStates when complete.
      console.log('sortAndFilter()');
      console.log('this.statesArr, ', this.statesArr);
      console.log('this.statesArrFiltered, ', this.statesArrFiltered);
      this.emptyStates(function() {
        rankings.sortStateData(function() {
          rankings.filterStateData(rankings.populateStates)
        })
      });
    },
    setStateListeners: function() {
      // Set click event listener for states.
    },
    setUIListeners: function() {
      console.log('setUIListeners()');
      // Sets listeners for:
      // Table sort headings
      $table_headings = $('#states_table > thead > tr > td');
      $table_headings.on('click', function(e) {
        console.log('sort clicked, ', e.currentTarget);
        // Change sort status for clicked element
        // Capture target.
        var $target = $(e.currentTarget);
        // Capture target's current sort state.
        var oldState = String($target.attr('data-filter'));
        // Reset all headings so we only sort by one column at a time.
        $table_headings.attr('data-filter', 'false');
        // console.log('sortState, ', sortState);
        var newState = null;
        if (oldState === 'false') {
          // console.log('sortState === false');
          newState = 'asc';
          // $target.attr('data-filter', 'asc');
        } else if (oldState === 'asc') {
          newState = 'desc';
          // $target.attr('data-filter', 'desc');
        } else {
          newState = 'false';
          // $target.attr('data-filter', 'false');
        }
        $target.attr('data-filter', newState);
        rankings.sortConfig = [];
        if (newState !== 'false') {
          rankings.sortConfig= [$target.attr('id'), newState];
        }
        rankings.sortAndFilter();
        // console.log('rankings.sortConfig, ', rankings.sortConfig);
      })
      // Filter checkboxes
      $filters = $('#filters_panel .filters .filters-list input');
      // console.log($filters);
      $filters.on('change', function(e) {
        // console.log('filter clicked, ', e.currentTarget);
        // Gather sorting data.
        rankings.filterConfig = [];
        $filters.each(function(i) {
          if ($(this).prop('checked')) {
            rankings.filterConfig.push([$(this).attr('id')]);
          }
          // rankings.filterConfig[$(this).attr('id')] = $(this).prop('checked');
        })
        rankings.sortAndFilter();
        // console.log('rankings.filterConfig, ', rankings.filterConfig);
      })
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
    emptyStates: function(callback) {
      console.log('emptyStates()');
      console.log('this.statesArr, ', this.statesArr);
      console.log('this.statesArrFiltered, ', this.statesArrFiltered);
      $('#states_table tbody tr').hide('slow').remove();
      callback();
    },
    populateStates: function() {
      console.log('populateStates(), ', rankings.statesArrFiltered)
      // Fetch and render handlebars template.
      // Always draws from filtered array.
      var context = { states: rankings.statesArrFiltered };
      var url = '/js/covid-policy-rankings/states-template.html';
      rankings.loadHandlebarsTemplate(url, function(template) {
          $('#states_panel tbody').html(template(context)).find('tr').show('slow');
      });
    },
    sortPolicies: function(row) {
      // Sorts policies into positive and negative.
      
    },
    processData: function() {
      console.log('processData()');
      // console.log('states data: ', this.statesData);
        // Build states array
      var statesProperties = Object.keys(this.statesData[0])
          .filter(function (p) { return p.startsWith("gsx$") })
          .map(function (p) { return p.substr(4); });
      // console.log('properties', properties)
      this.statesArr = this.statesData.map(function (r) {
        var row = {};
        var date = new Date(r.updated.$t);
        row.updated = date.toLocaleTimeString([], {timeStyle: 'short'}) + ', ' + date.toLocaleDateString();
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
              row['stars'] = Number(row[p]);
              row['stars_hb'] = String(row[p]).replace('.', '-');
            }
            if (row[p] === null) {
                row[p] = '';
            }
        });
        // row = this.sortPolicies(row);
        // console.log('row', row);
        return row;
      });
      this.statesArr.shift();
      this.statesArr.shift();
      // this.statesArrFiltered = this.statesArr;
      this.statesArrFiltered = this.statesArr.slice(0);
      // this.populateStates();
      this.sortAndFilter();
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
      Handlebars.registerHelper("isfalse", function(context, options) {
        // console.log('helper context, ', context);
        if (context === false) {
          return options.fn(this);
        }
      });
      Handlebars.registerHelper("istrue", function(context, options) {
        // console.log('helper context, ', context);
        if (context === true) {
          return options.fn(this);
        }
      });
      // Handlebars.registerHelper("noactions", function(context, options) {
      //   // console.log('helper context, ', context);
      //   if (context === 0) {
      //     return options.fn(this);
      //   }
      // });
      // Handlebars.registerHelper("getsricon", function(context, options) {
      //   // console.log('helper context, ', context);
      //   if (context === false) {
      //     return 'Icon: State lacks ';
      //   } else if (context === true) {
      //     return 'Icon: State has implemented ';
      //   } else {
      //     return '';
      //   }
      // });
      this.loadStateData();
      this.setUIListeners();
    }
  }
  rankings.init();
});
