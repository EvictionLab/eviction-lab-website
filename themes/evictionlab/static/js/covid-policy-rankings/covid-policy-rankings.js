// console.log('covid-policy-rankings.js loaded.');
$(document).ready(function () {
  // console.log('document ready');
  var rankings = {
    POLICY_SHEET_URL: 'https://spreadsheets.google.com/feeds/list/1_7NhsPRHMGhysge5SQYjEp8wHkQe0VoRIMYq_nB4a8U/1/public/values?alt=json',
    statesData: null,
    statesArr: [],
    statesArrFiltered: [],
    sortConfig: ['stars', 'desc'], // [sort by id of col head (string), sort order (asc, desc, or false)]
    filterConfig: [],
    sortStateData: function(callback) {
      // console.log('sortStateData()');
      // console.log('sortConfig, ', this.sortConfig);
      var sortArr = rankings.sortConfig;
      this.statesArrFiltered = this.statesArr.slice(0);
      if (sortArr.length > 0) {
        // console.log('there is a sort criterion');
        if (sortArr[0] === 'stname') {
          // console.log('sorting by alpha');
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
            // Remove commas before sorting.
            rankings.statesArrFiltered.sort(function(a, b) {
              var a = parseFloat(String(a[sortArr[0]]).replace(/,/g, ''));
              var b = parseFloat(String(b[sortArr[0]]).replace(/,/g, ''));
              return a - b;
            });
          } else {
            // console.log('sorting numeric descending');
            // Remove commas before sorting.
            rankings.statesArrFiltered.sort(function(a, b) {
              var a = parseFloat(String(a[sortArr[0]]).replace(/,/g, ''));
              var b = parseFloat(String(b[sortArr[0]]).replace(/,/g, ''));
              return b - a;
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
      // console.log('filterStateData()');
      // console.log('filterConfig, ', this.filterConfig);
      this.filterConfig.forEach(function(val, i) {
        // console.log('filtering for, ', val);
        rankings.statesArrFiltered = rankings.statesArrFiltered.filter(function(el) {
          // console.log('el, ', el[val])
          return el[val] === true;
        })
      });
      callback();
    },
    sortAndFilter: function() {
      // Daisy-chain sorting and filtering,
      // and call populateStates when complete.
      // console.log('sortAndFilter()');
      this.emptyStates(function() {
        rankings.sortStateData(function() {
          rankings.filterStateData(rankings.populateStates)
        })
      });
    },
    setStateListeners: function() {
      // Set click event listener for states.
      // console.log('setStateListeners() ');
      $('button.expand-state-details').on('click select', function(e) {
        // console.log('click open, ', e.currentTarget);
        var $target = $(e.currentTarget);
        // Remove excerpt-only class.
        // $target.parent().parent('tr').prev('.state-text').removeClass('excerpt-only');
        $target
          .parent()
          .parent('tr')
          .prev('.state-text')
          // Hide excerpt.
          .find('.state-excerpt')
          .animate({
            'max-height': 0
          }, 1, 'linear', function() {
            // Now open everything.
            window.setTimeout(function() {
              // Hide show button.
              $target.hide();
              $target
                .parent()
                .parent('tr')
                .prev('.state-text')
                .find('.state-full')
                // Show fill state text.
                .animate({
                  'max-height': 500
                }, 400, 'linear')
                .next('.expires')
                // Show expires text.
                .animate({
                  'max-height': 500
                }, 400)
                .parent()
                .parent('tr')
                .next('.state-details')
                .find('.state-details-list')
                .css({
                  'padding-top': '2rem',
                  'padding-bottom': '2rem'
                })
                // Show state details.
                .animate({
                  'max-height': 1200
                }, 800, 'linear')
                .next('.collapse-state-details')
                // Show collapse button.
                .show()
                .on('click select', function(e) {
                  // console.log('click collapse, ', e.currentTarget);
                  var $ctarget = $(e.currentTarget);
                  // Unbind click listener.
                  $ctarget.hide().unbind('click select');
                  // $ctarget.parent().parent('tr').prev('.state-text').addClass('excerpt-only');
                  // $target.show();
                  var state = $ctarget.data('state');
                  var top = $('tr[data-state="' + state + '"]').offset().top;
                  var fullHeight = window.innerHeight;
                  // Scroll state back into view.
                  $([document.documentElement, document.body]).animate({
                    scrollTop: top - fullHeight*0.33
                  }, 800, 'linear', function() {
                    // Set focus on state title.
                    $('tr[data-state="' + state + '"]').focus();
                    // Hide what was shown.
                    $ctarget
                    .parent()
                    .parent('tr')
                    .prev('.state-text')
                    .find('.state-full, .expires')
                    .animate({
                      'max-height': 0
                    }, 400)
                    // Hide state details.
                    $ctarget
                    .prev('.state-details-list')
                    .animate({
                      'max-height': 0,
                      'padding-top': 0,
                      'padding-bottom': 0
                    }, 400, 'linear', function() {
                      window.setTimeout(function() {
                        // After short timer expiry, show excerpt.
                        $ctarget
                        .parent()
                        .parent('tr')
                        .prev('.state-text')
                        .find('.state-excerpt')
                        .animate({
                          'max-height': 400
                        }, 400)
                      }, 200)
                    })
                    // Show the expand button.
                    $ctarget
                    .prev()
                    .prev('.expand-state-details')
                    .show()
                  });
                })
              }, 200)
            })
          })
    },
    handleStickyFilters: function() {
      // console.log('handleStickyFilters()');
      var doSticky = false;
      var filterOffset = null;
      var tableOffset = null;
      var $filters = $('#filters_panel .filters');
      var $table = $('#states_panel table');
      // var $theads = $('#states_panel thead th');
      $(window).on('load', function() {
        // console.log('loaded');
        if ($('div.mobile-filters').css('display') !== 'block') {
          // console.log('mobile filters is not shown.')
          doSticky = true;
          filterOffset = $filters.offset();
          tableOffset = $table.offset();
        } else {
          doSticky = false;
        }
      })
      $(window).on('resize', function() {
        // console.log('resized');
        if ($('div.mobile-filters').css('display') !== 'block') {
          // console.log('mobile filters is not shown.')
          doSticky = true;
          filterOffset = $filters.offset();
          tableOffset = $table.offset();
        } else {
          doSticky = false;
        }
      })
      $(window).on('scroll', function() {
        // console.log('scrolled');
        // console.log('tableOffset, ', tableOffset);
        if (!!doSticky) {
          // console.log('doSticky === true, proceeding. filterOffset = ', filterOffset);
          var wScrollTop = $(window).scrollTop();
          // console.log('wScrollTop, ', wScrollTop);
          var headerHeight = $('header .header-wrapper').height();
          // console.log('headerHeight, ', headerHeight);
          if (wScrollTop + headerHeight + 50 >= filterOffset.top) {
            // console.log('make the filter sticky');
            $filters.css({
              position: 'sticky',
              top: headerHeight + 50,
              left: filterOffset.left
            })
          }
          // if (wScrollTop + headerHeight + 50 >= tableOffset.top) {
          //   console.log('make the table sticky');
          //   $table.css({
          //     position: 'sticky',
          //     top: headerHeight + 50,
          //     left: tableOffset.left
          //   })
          // }
        }
      })
    },
    setUIListeners: function() {
      // console.log('setUIListeners()');
      // Sets listeners for:
      // Show and hide of filter for small-screen devices
      $('#mobile_filter').on('click select', function(e) {
        var $target = $(e.currentTarget);
        if ($target.hasClass('show-filters')) {
          // show the filters
          $('#filters_panel .filters').animate({'max-height': 400}, 400);
          // change button text
          $target.text('Hide filters');
          // change button class
          $target.removeClass('show-filters').addClass('hide-filters');
        } else {
          // show the filters
          $('#filters_panel .filters').animate({'max-height': 0}, 400);
          // change button text
          $target.text('Show filters');
          // change button class
          $target.removeClass('hide-filters').addClass('show-filters');
        }
      })
      // Table sort headings
      $table_headings = $('#states_table > thead > tr > th');
      $table_headings.on('click', function(e) {
        // console.log('sort clicked, ', e.currentTarget);
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
      var $clearfilters = $('button#clear_filters');
      $clearfilters.on('click select', function() {
        console.log('clear filters');
        $filters.prop('checked',false);
        rankings.filterConfig = [];
        rankings.sortAndFilter();
      });
    },
    loadHandlebarsTemplate: function(url, callback) {
      // Load handlebars template via xhr.
      // console.log('loadHandlebarsTemplate()')
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
    emptyStates: function(callback) {
      // Empties table of states.
      // console.log('emptyStates()');
      $('#states_table tbody tr').hide('slow').remove();
      callback();
    },
    populateStates: function() {
      // console.log('populateStates(), ', rankings.statesArrFiltered)
      // Fetch and render handlebars template.
      // Always draws from filtered array.
      var context = { states: rankings.statesArrFiltered };
      var url = '/js/covid-policy-rankings/states-template.html';
      rankings.loadHandlebarsTemplate(url, function(template) {
          $('#states_panel tbody').html(template(context)).find('tr').show('slow');
          var timer = window.setTimeout(function() { rankings.setStateListeners() }, 500);
      });
    },
    // sortPolicies: function(row) {
    //   // Sorts policies into positive and negative.
    //
    // },
    processData: function() {
      // console.log('processData()');
      // Build states array
      var statesProperties = Object.keys(this.statesData[0])
          .filter(function (p) { return p.startsWith("gsx$") })
          .map(function (p) { return p.substr(4); });
      // console.log('statesProperties', statesProperties)
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
              // For a11y
              row['stars'] = Number(row[p]);
              // For classnames
              row['stars_hb'] = String(row[p]).replace('.', '-');
            }
            if (p === 'sttext') {
              // Truncate text to create excerpt.
              var words = 18;
              if (row[p] !== null) {
                var string = String(row[p]).split(" ").splice(0, words).join(" ") + ' ...';
                row['stexcerpt'] = string;
              }
            }
            if (p === 'intlstupdt') {
              // Create date string for last updated for each state.
              // console.log('intlstupdt, ', row[p])
              var date = new Date(row[p]);
              row.updated = date.toLocaleDateString();
            }
            if (row[p] === null) {
                row[p] = '';
            }
        });
        return row;
      });
      // Remove the two rows the EL uses for internal titles and example.
      this.statesArr.shift();
      this.statesArr.shift();
      // console.log('this.statesArr', this.statesArr);
      // Put values from statesArr into array to be used for filtering.
      this.statesArrFiltered = this.statesArr.slice(0);
      // Set sort, filter, and population of states in motion.
      this.sortAndFilter();
    },
    loadStateData: function() {
      // console.log('loadStateData()')
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
      // console.log('EL policy rankingds table init.');
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
      this.loadStateData();
      this.setUIListeners();
      this.handleStickyFilters();
    }
  }
  rankings.init();
});
