// console.log('covid-policy-rankings.js loaded.');
$(document).ready(function () {
  // console.log('document ready');
  var rankings = {
   // POLICY_SHEET_URL: 'https://spreadsheets.google.com/feeds/list/1_7NhsPRHMGhysge5SQYjEp8wHkQe0VoRIMYq_nB4a8U/2/public/values?alt=json',
    POLICY_SHEET_URL: '/docs/policy-rankings.json',
    pageType: null,
    singleState: null,
    statesData: null,
    statesArr: [],
    statesArrFiltered: [],
    sortConfig: ['stars', 'desc'], // [sort by id of col head (string), sort order (asc, desc, or false)]
    filterConfig: [],
    allFilters: [
      {
        stage: 1,
        title: 'Initiation of Eviction',
        filters: [
          {
            id: 'plcnoticebool',
            label: 'No notice to quit',
            tooltip: 'In most states, landlords must post a "notice to quit" before filing for eviction.'
          },
          {
            id: 'plccofilbool',
            label: 'No filing if tenant has COVID-19 hardship'
          },
          {
            id: 'plcnonpbool',
            label: 'No filing for nonpayment'
          },
          {
            id: 'plcnofilbool',
            label: 'No filing, except emergencies'
          },
          {
            id: 'plccaresbool',
            label: 'CARES certification required',
            tooltip: 'Whether a landlord must certify that the dwelling is not subject to the federal CARES Act eviction moratorium. This measure isn’t scored.'
          },
        ]
      },
      {
        stage: 2,
        title: 'Court Process',
        filters: [
          {
            id: 'plcnohearbool',
            label: 'Hearings suspended'
          },
          {
            id: 'plcnonewbool',
            label: 'Judgments of possession stayed',
            tooltip: '"Staying" eviction judgments, orders or writs of possession means that the court will not process eviction orders for the duration of the "stay."'
          },
          {
            id: 'plctldbool',
            label: 'Deadlines extended or tolled',
            tooltip: '"Tolling" or "extending" deadlines means extending the amount of time a landlord or tenant has to respond to a court notice.'
          },
          {
            id: 'plcsealbool',
            label: 'Eviction records sealed',
            medal: true
          }
        ]
      },
      {
        stage: 3,
        title: 'Enforcement of Eviction Order',
        filters: [
          {
            id: 'plccovenfbool',
            label: 'No removal if tenant has COVID-19 hardship'
          },
          {
            id: 'plcpayenfbool',
            label: 'No removal of tenant for nonpayment'
          },
          {
            id: 'plcnoenfbool',
            label: 'No removal of tenant, except emergencies'
          },
        ]
      },
      {
        stage: 4,
        title: 'Short-Term Supports',
        filters: [
          {
            id: 'plcextmorbool',
            label: 'Moratorium extends past emergency declaration',
            medal: true
          },
          {
            id: 'plcnoshbool',
            label: 'No utility disconnection',
            tooltip: 'This measure isn\'t scored, because orders may not protect all tenants in the state due to differences in state laws. See Methodology Report for more info.'
          },
          {
            id: 'plcfrrcbool',
            label: 'Free utility reconnection',
            tooltip: 'This measure isn\'t scored, because orders may not protect all tenants in the state due to differences in state laws. See Methodology Report for more info.'
          },
          {
            id: 'plcarsbool',
            label: 'Grace period to pay rent',
            medal: true,
            tooltip: 'Measures that require landlords to offer a grace period or payment plan to tenants. See Methodology Report for more info.'
          },
          {
            id: 'plcnorepbool',
            label: 'No report to credit bureau',
            tooltip: 'For this measure, we only look at emergency orders, not existing laws. See Methodology Report for more info.',
            medal: true
          },
          {
            id: 'plcnofcbool',
            label: 'Foreclosure moratorium'
          },
        ]
      },
      {
        stage: 5,
        title: 'Tenancy Preservation Measures',
        filters: [
          {
            id: 'plclatfbool',
            label: 'No late fees',
            medal: true
          },
          {
            id: 'plcraisebool',
            label: 'No rent raises',
            medal: true
          },
          {
            id: 'plcdebtbool',
            label: 'Housing stabilization',
            medal: true,
            tooltip: 'Measures that increase housing or reduce or cancel tenants\' debt. See Methodology Report for more info.'
          },
          {
            id: 'plccgbool',
            label: 'Legal counsel for tenants',
            medal: true
          }
        ]
      }
    ],
    filtersMobileShown: false,
    setSortAndFilterCaption: function() {
      var sortStr = 'Not sorted.';
      if (rankings.sortConfig[0] && rankings.sortConfig[1] !== false) {
        var sortBy = $('#' + rankings.sortConfig[0] + ' span.name').text();
        // var sortHow = $('#' + rankings.sortConfig[0]).data('filter');
        var sortHowStr = rankings.sortConfig[1] === 'desc' ? 'descending' : 'ascending';
        sortStr = 'Sorted by ' + sortBy + ', ' + sortHowStr + '.';
      }
      $('table caption .sorted-by').text(sortStr);
      var filteredStr = 'Not filtered.';
      // console.log('rankings.filterConfig: ', rankings.filterConfig);
      var checkAgainstArr = rankings.filterConfig.map(function(el) {
        return el[0];
      })
      if (rankings.filterConfig.length > 0) {
        filteredStr = 'Filtered for ';
        var filters = [];
        rankings.allFilters.forEach(function(el) {
          el.filters.forEach(function(item) {
            // console.log('item is ', item);
            if (checkAgainstArr.indexOf(item.id) >= 0) {
              // console.log('item is in filterConfig')
              filteredStr += item.label + ', ';
            }
          })
        })
      }
      $('table caption .filtered-for').text(filteredStr);
    },
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
    filterForSingleState: function(state) {
      // console.log('filterForSingleState(), ', state);
      var arr = rankings.statesArr.filter(function(el) {
        // console.log('el, ', el)
        return el['stabbrev'] === String(state).toUpperCase();
      })
      // console.log(arr);
      return arr[0];
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
      rankings.setSortAndFilterCaption();
    },
    setStateListeners: function() {
      // Set click event listener for states.
      // console.log('setStateListeners() ');
      $('button.expand-state-details').on('click select', function(e) {
        // console.log('click open, ', e.currentTarget);
        var $target = $(e.currentTarget);
        $target.attr('aria-hidden', true);
        var $textRow = $target.parent().parent('tr').prev('.state-text');
        var $detailsRow = $target.parent().parent('tr')
        var $setFocus = $detailsRow.find('set-focus');
        var $cTargets = $target.siblings('.collapse-state-details');

        $textRow.removeClass('text-excerpt').addClass('text-full');
        $detailsRow.removeClass('prompt-only').addClass('details-full');
        $detailsRow.find('.state-details-list').css('display', 'flex');
        $setFocus.focus();

        $cTargets.attr('aria-hidden', false);
        $cTargets.on('click select', function(e) {
          // console.log(e);
          var $el = $(e.currentTarget);
          var state = $el.data('state');
          var top = $('tr[data-state="' + state + '"]').offset().top;
          // console.log('top, ', top);
          var scrolledTo = $(window).scrollTop();
          // console.log('scrolledTo, ', scrolledTo);
          var fullHeight = window.innerHeight;
          // Scroll state back into view, only if it's out of the view.
          if (scrolledTo > top) {
            $([document.documentElement, document.body]).animate({
              scrollTop: top - fullHeight*0.33
            }, 800, 'linear');
          }
          $textRow.removeClass('text-full').addClass('text-excerpt');
          $detailsRow.removeClass('details-full').addClass('prompt-only');
          setTimeout(function() {
            $detailsRow.find('state-details-list').css('display', 'none');
          }, 800);
          $cTargets.unbind('click select');
        });
      });
    },
    toggleMobileFilters: function($target, action) {
      // console.log('toggleMobileFilters(), action = ', action);
      // var $target = $('#mobile_filter');
      var $row = $('#filters_panel');
      if (action === 'show') {
        // if show
        // show the filters
        $('#filters_panel .filters-list').css('display', 'flex');
        $('#filters_panel .filters').animate({'max-height': 1200}, 400, null, function() {
          // $('#filters_panel .filters, #filters_panel .filters-list').css('overflow-y', 'visible');
        });
        // change button text
        $target.text('Hide filters');
        // change button class
        $target.removeClass('show-filters').addClass('hide-filters');
        $row.removeClass('show-filters').addClass('hide-filters');
        $row.find('#clear_filters, input').attr({'tabindex': 0});
      } else {
        $('#filters_panel .filters, #filters_panel .filters-list').css('overflow-y', 'hidden');
        // hide the filters
        $('#filters_panel .filters').animate({'max-height': 0}, 400, null, function() {
          $('#filters_panel .filters-list').css('display', 'none');
        });
        // change button text
        $target.text('Show filters');
        // change button class
        $target.removeClass('hide-filters').addClass('show-filters');
        $row.removeClass('hide-filters').addClass('show-filters');
        $row.find('#clear_filters, input').attr({'tabindex': '-1'});
      }
    },
    handleStickyFilters: function() {
      // console.log('handleStickyFilters()');
      var $scrollToButton = $('#scroll_to_filters');
      var filterOffset = null;
      var $filtersPanel = $('#filters_panel');
      var filtersPanelOffset = $filtersPanel.offset();
      var $footerOffset = $('.disclaimer').offset();
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();
      var targetWidth = 768;
      $(window).on('load', function() {
        // console.log('loaded');
        filtersPanelOffset = $filtersPanel.offset();
        viewportWidth = $(window).width();
        $footerOffset = $('.disclaimer').offset();
      })
      $(window).on('resize', function() {
        // console.log('loaded');
        filtersPanelOffset = $filtersPanel.offset();
        viewportWidth = $(window).width();
        $footerOffset = $('.disclaimer').offset();
      })
      $(window).on('scroll', function() {
        // console.log('scrolled');
        var wScrollTop = $(window).scrollTop();
        $footerOffset = $('.disclaimer').offset();
        var headerHeight = $('header .header-wrapper').height();
        // If the bottom matter is in view, absolute position and exit.
        if (wScrollTop + viewportHeight >= $footerOffset.top) {
          // console.log('footer is visible');
          $scrollToButton.css({
            position: 'absolute',
            top: $footerOffset.top - 40 - $scrollToButton.width()*0.66,
            right: 0,
            display: 'block'
          }).addClass('filter-bottom').removeClass('filter-sticky');
          return;
        }
        // Otherwise fixed-position the button.
        if (wScrollTop + headerHeight >= filtersPanelOffset.top + $filtersPanel.height()) {
          // console.log('make the button sticky');
          $scrollToButton.css({
            position: 'fixed',
            top: viewportHeight - 40 - $scrollToButton.width()*0.66,
            right: 0,
            display: 'block'
          }).addClass('filter-sticky').removeClass('filter-bottom');
        } else {
          $scrollToButton.css({
            position: 'inherit',
            display: 'none'
          }).removeClass('filter-sticky').removeClass('filter-bottom');
        }
      })
    },
    initTooltip: function() {
      // Hot-load tooltips script to init tooltips for filters (after markup inserted).
      $.getScript('/js/covid-policy-rankings/tooltips.js', function() {
        // console.log('tooltips loaded');
      });
    },
    setUIListeners: function() {
      // console.log('setUIListeners()');
      // Sets listeners for:
      // Show and hide of filter for small-screen devices
      $('#mobile_filter').on('click select', function(e) {
        var $target = $(e.currentTarget);
        if ($target.hasClass('show-filters')) {
          rankings.toggleMobileFilters($target, 'show');
        } else {
          rankings.toggleMobileFilters($target, 'hide');
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
      });
      var $clearfilters = $('button#clear_filters');
      $clearfilters.on('click select', function() {
        // console.log('clear filters');
        $filters.prop('checked',false);
        rankings.filterConfig = [];
        rankings.sortAndFilter();
      });
      rankings.initTooltip();
      $('#scroll_to_filters').on('click select', function() {
        // console.log('clicked scroll to filters');
        $filtersOffset = $('#filters_panel').offset();
        $headerHeight = $('.header-wrapper').height();
        $([document.documentElement, document.body]).animate({
          scrollTop: $filtersOffset.top - $headerHeight
        }, 800, 'linear');
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
      $('#states_table tbody tr').hide().remove();
      callback();
    },
    populateStates: function() {
      // console.log('populateStates(), ');
      // Fetch and render handlebars template.
      // Always draws from filtered array.
      var context = { states: rankings.statesArrFiltered, filters: rankings.allFilters };
      var url = '/js/covid-policy-rankings/states-template.html';
      rankings.loadHandlebarsTemplate(url, function(template) {
          $('#states_panel tbody').html(template(context)).find('tr').show('slow');
          var timer = window.setTimeout(function() { rankings.setStateListeners() }, 500);
      });
    },
    populateSingleState: function() {
      console.log('populateSingleState()');
      var context = { state: this.filterForSingleState(this.singleState) };
      console.log('context = ', context);
      var url = '/js/covid-policy-rankings/single-state-template.html';
      rankings.loadHandlebarsTemplate(url, function(template) {
        // Hide the loading indicator.
        $('.row.insert-after').css({'max-height': 0, 'min-height': 0});
        // Insert template data. Do some page setup after that.
        $('.insert-after').after(template(context)).show('slow', function() {
          // Load script and add event listeners for single state page.
          rankings.initTooltip();
          // Set up listener for print button.
          $('#print_page').on('click select', function(e) {
            // console.log('print clicked');
            window.print();
          });
          $('[data-toggle="tooltip"]').tooltip({
            boundary: 'window',
            delay: { "show": 500, "hide": 100 }
          });
        });
      });
    },
    populateFilters: function() {
      // console.log('populateFilters()')
      // Fetch and render handlebars template.
      // Always draws from filtered array.
      var context = { categories: rankings.allFilters };
      var url = '/js/covid-policy-rankings/filters-template.html';
      rankings.loadHandlebarsTemplate(url, function(template) {
          $('#filters_panel .filters .filters-list').html(template(context));
          $('[data-toggle="tooltip"]').tooltip({
            boundary: 'window',
            delay: { "show": 500, "hide": 100 }
          });
      });
    },
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
              row[p] = true;
            } else {
              row[p] = false;
            }
          }
          if (p === 'stars') {
            // Round to nearest 0.5
            var rounded = Math.round(Number(row[p])*2)/2;
            // For a11y
            row['stars_rounded'] = rounded;
            // row['stars'] = rounded; // Number(row[p]);
            // For classnames
            row['stars_hb'] = String(rounded).replace('.', '-'); // String(row[p]).replace('.', '-');
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
          // Handle null values.
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
      if (this.pageType === 'single') {
        this.populateSingleState();
      } else {
        // Put values from statesArr into array to be used for filtering.
        this.statesArrFiltered = this.statesArr.slice(0);
        // Set sort, filter, and population of states in motion.
        this.sortAndFilter();
      }
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
      // console.log('page_page_type = ', page_page_type);
      this.pageType = page_page_type;
      this.singleState = page_state_abbrev;
      // console.log('EL policy rankingds table init.');
      Handlebars.registerHelper("tolowercase", function(context, options) {
        // console.log('helper context, ', context);
        return String(context).toLowerCase();
      });
      Handlebars.registerHelper("getsamedal", function(context, options) {
        // console.log('getsamedal context, ', context);
        var filters = [];
        rankings.allFilters.forEach(function(el) {
          el.filters.forEach(function(item) {
            filters.push(item);
          })
        })
        // console.log('filters: ', filters);
        var getsmedal = filters.filter(function(el) {
          return el.id === context;
        })
        // console.log('getsmedal, ', getsmedal[0].medal);
        if (!!getsmedal[0].medal) {
          // console.log('returning context');
          return options.fn(this);
        }
      });
      Handlebars.registerHelper("getsatooltip", function(context, options) {
        // console.log('getsatooltip context, ', context);
        var filters = [];
        rankings.allFilters.forEach(function(el) {
          el.filters.forEach(function(item) {
            filters.push(item);
          })
        })
        // console.log('filters: ', filters);
        var getstip = filters.filter(function(el) {
          return el.id === context;
        })
        // console.log('getstip, ', getstip);
        // return getsmedal[0].medal;
        if (getstip[0]) {
          if (getstip[0].tooltip) {
            if (getstip[0].tooltip.length > 0) {
              var tooltipParsed = String(getstip[0].tooltip).replace(/"/g, '&quot;')
              return '<i class="icon icon-tooltip fa fa-question-circle" data-toggle="tooltip" data-placement="right" title="' + tooltipParsed + '"></i>';
            }
          }
        }
      });
      Handlebars.registerHelper("getsatooltipstring", function(context, options) {
        // console.log('getsatooltip context, ', context);
        var filters = [];
        rankings.allFilters.forEach(function(el) {
          el.filters.forEach(function(item) {
            filters.push(item);
          })
        })
        // console.log('filters: ', filters);
        var getstip = filters.filter(function(el) {
          return el.id === context;
        })
        // console.log('getstip, ', getstip);
        // return getsmedal[0].medal;
        if (getstip[0]) {
          if (getstip[0].tooltip) {
            if (getstip[0].tooltip.length > 0) {
              var tooltipParsed = String(getstip[0].tooltip).replace(/"/g, '&quot;')
              return '<span class="sr-only"> Tooltip: ' + tooltipParsed + '</span>';
            }
          }
        }
      });
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
      if (this.pageType === 'single') {
        // console.log('handling single');
        this.loadStateData();
      } else {
        this.populateFilters();
        this.loadStateData();
        this.handleStickyFilters();
        window.setTimeout(function() {rankings.setUIListeners();}, 1000);
      }
    }
  }
  rankings.init();
});
