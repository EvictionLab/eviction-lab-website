// Add toggling of menu
function setupMenu() {
  var menu = $('.app-menu');
  var menuClose = $('.app-menu .menu-close');
  var menuButton = $('.el-button-menu');

  $('.app-menu').removeClass("no-animation")

  menuButton.click(function () {
    menu.addClass('expanded');
    menu.find('a').each(function () {
      $(this).attr('tabindex', null);
    });
    menuClose.attr('tabindex', null);
  });

  menuClose.click(function () {
    menu.removeClass('expanded');
    menu.find('a').each(function () {
      $(this).attr('tabindex', -1);
    });
    menuClose.attr('tabindex', -1);
  });
}


// Toggle condensed class on header if scrolled to top
function setupScrollEnd() {
  var debounceTime = 50;
  var isScrolling;
  var headerWrapper = $('header');
  
  function toggleCondense() {
    if ($( "body" ).hasClass( "page-the-eviction-lab" )) {
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        headerWrapper.addClass('condensed');
        $('body').addClass('header-condensed');
      } else {
        headerWrapper.removeClass('condensed');
        $('body').removeClass('header-condensed');
      };
    };
    if (!$( "body" ).hasClass( "page-the-eviction-lab" )) {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        headerWrapper.addClass('condensed');
        $('body').addClass('header-condensed');
      } else {
        headerWrapper.removeClass('condensed');
        $('body').removeClass('header-condensed');
      };
    }
    isScrolling = undefined;
  }

  window.addEventListener('scroll', function (event) {
    if ($( "body" ).hasClass( "page-the-eviction-lab" )) {
        toggleCondense();
    };
    if (!$( "body" ).hasClass( "page-the-eviction-lab" )) {
      if (isScrolling === undefined) {
        toggleCondense();
      } else {
        window.clearTimeout(isScrolling);
      }
    };
    isScrolling = setTimeout(toggleCondense, debounceTime);
  }, false);
} 

// Fade-in on scroll for selected div elements


const fadeElements = document.querySelectorAll(".fade-in-element");

function handleScroll() {
  const windowCenter = window.innerHeight / 1.1;

  fadeElements.forEach((element) => {
    if (!element.classList.contains("fade-in")) {
      const { top, height } = element.getBoundingClientRect();
      const elementCenter = top + height / 1.1;

      if (windowCenter + height / 1.1 >= elementCenter) {
        element.classList.add("fade-in");
      }
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial fade-in on page load


  // Carousel

$('.carousel .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
  next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo($(this));
    }
});

// Update contact form action with selected email path
function setupContactForm() {
  var form = $('#contactform');
  var formActionBase = 'https://formspree.io/';
  form.attr('action', formActionBase + $("input:radio[name=routing]:checked").data('email'));
  $('.contact-radio').click(function (el) {
    var selected = $(this);
    form.attr('action', formActionBase + selected.data('email'));
  });
}

// Make sure modal-open class is added to the body whenever a modal is opened
function setupModals() {
  $(".modal").on("show.bs.modal", function () {
    setTimeout(function () {
      $("body").addClass("modal-open")
    }, 500);
  });
}

// Container for complete collection of items.
var covidItemsAll = [];
var activeStates = [];
/**
 * emptyCovidTable: Empties covid table rows (not headings)
 * @return null
 */
function emptyCovidTable() {
  // console.log('emptyCovidTable()');
  return $('#covid-blog table tbody tr').hide().remove();
}

/**
 * populateCovidRows: Inserts rows into covid table
 * @return null
 */
function populateCovidRows(items) {
  // console.log('populateCovidRows()');
  items.forEach(function(item) {
    if (String(item.linktosourcenewspressreleaseetc).length > 30) {
      item.linktruncated = (item.linktosourcenewspressreleaseetc).trim().substring(0, 30)+ "...";
    }
    var rowMarkup = '<tr class="">' +
      '<td>' +
        (item.levelofgovernmentlocalstatenational !== 'Local' ?
        item.placename :
        item.placenameformap + ', ' + item.state) +
      '</td>' +
      '<td>' + item.levelofgovernmentlocalstatenational + '</td>' +
      '<td>' + item.typeofaction + '</td>' +
      '<td>' + item.datesineffect + '</td>' +
      '<td>' + (!!item.linktosourcenewspressreleaseetc ? '<a href="' + item.linktosourcenewspressreleaseetc + '" target="_blank">' + item.linktruncated + '</a>' : '') + '</td>' +
    '</tr>';
    if ($('#covid-blog table tbody tr').length <= 0) {
      $('#covid-blog table tbody').html(rowMarkup);
    } else {
      $('#covid-blog table tbody tr').last().after(rowMarkup);
    }
  })
}

/**
 * filterCovidTable Returns filtered set of items.
 * @param  Array  arr     Array to filter.
 * @param  String filter  Select item name for filtering.
 * @return Array          Returns filtered array of objects.
 */
function filterCovidTable(arr, filter) {
  // console.log('filterCovidTable()');
  var filteredArr = null;
  if (filter === 'all') {
    // Federal, return all federal action types.
    filteredArr = arr;
  } else if (filter === 'allfederal') {
    // Federal, return all federal action types.
    filteredArr = arr.filter(function(el) {
      return el.levelofgovernmentlocalstatenational === 'Federal';
    })
  } else if (filter === 'allstate') {
    // Return all state-level actions.
    filteredArr = arr.filter(function(el) {
      return el.levelofgovernmentlocalstatenational === 'State';
    })
  } else {
    // Filter for a particular state.
    filteredArr = arr.filter(function(el) {
      return el.state === filter;
    })
  }
  return filteredArr;
}

function initCovidTable() {
  // Fetches data from google sheets table and generates new
  // console.log('initCovidTable()')
  // Parse JSON response and insert a table row for each row of data in the sheet.
  function reqHandler(source, req) {
    var rows = JSON.parse(req.responseText).values;
    var values = rows.slice(1);
    var properties = rows[0];
    var items = values.map(function (r) {
      var row = {};
      properties.forEach(function (p, i) {
        row[p.replace(/[^\w]/gi, "").toLowerCase()] = r[i];
      });
      // console.log("row", row);
      if (
        (row.levelofgovernmentlocalstatenational === "State") |
        (row.levelofgovernmentlocalstatenational === "Local") |
        (row.levelofgovernmentlocalstatenational === "Local/Federal District")
      ) {
        if (activeStates.indexOf(row.state) <= -1) {
          activeStates.push(row.state);
        }
      }
      return row;
    });
    covidItemsAll = items;
    populateCovidRows(covidItemsAll);
    // Remove disabled class from select items that should not be disabled.
    activeStates.forEach(function (el, i) {
      $('#filter_covid_table ul li > a[data-value="' + el + '"]')
        .parent("li")
        .removeClass("disabled");
    });
    // Listen for select event.
    $("#filter_covid_table ul li:not(.disabled) > a").on(
      "select, click",
      function (e) {
        // console.log('Clicked or selected filter item.');
        // console.log($(e.currentTarget).attr('data-value'));
        var filterBy = $(e.currentTarget).attr("data-value");
        emptyCovidTable();
        populateCovidRows(filterCovidTable(covidItemsAll, filterBy));
        $("span#selected_filter").text($(e.currentTarget).text());
      }
    );
  }

  // Sheet must be published as public
  // var SHEET_URL_LOCAL = "../docs/policies-table.json";
  var SHEET_URL =
    "https://sheets.googleapis.com/v4/spreadsheets/1XX9bBi_4ERpeqw_WyqHEIkfpShbif1i6HenBfymYv_U/values/Policy%20Table?alt=json&key=AIzaSyD1qajG1iNe_ISqbiCNY3mbrkTTo7v3j4U";
  // Fetch intervention data
  var mediaReq = new XMLHttpRequest();
  mediaReq.addEventListener("load",  function() { reqHandler('media', mediaReq) });
  mediaReq.open("GET", SHEET_URL);
  mediaReq.send();
}

$(document).ready(function () {
  setupMenu();
  setupScrollEnd();
  if ($('#contactform').length) {
    setupContactForm();
  }
  setupModals();
  if ($('#covid-blog').length >= 1) {
    // console.log('covid table is in the page.')
    initCovidTable();
  }
});

/**
 * Fill height
 * ----
 * 
 */
$(document).ready(function () {

  var el = $('.fill-height')

  var setSplashHeight = function() {
    var height = window.innerHeight - el.offset().top
    if (height > 1)
      el.css('height', height + 'px')
  }
  if (el.length) {
    window.addEventListener("resize", setSplashHeight);
    setSplashHeight();
  }
});

/**
 * Smooth Scroll
 * ---
 * 
 */
// Get smooth scroll offset depending on window width
function getWindowOffset() {
  var BREAK_MOBILE = 767;
  var BREAK_TABLET = 1023;
  var BREAK_DESKTOP = 1440;

  var OFFSET_MOBILE = 56;
  var OFFSET_TABLET = 56;
  var OFFSET_DESKTOP = 56;

  if (window.innerWidth < BREAK_MOBILE) {
    return OFFSET_MOBILE;
  } else if (window.innerWidthwidth < BREAK_TABLET) {
    return OFFSET_TABLET;
  } else {
    return OFFSET_DESKTOP;
  }
}

// Add an additional page offset where needed by checking the URL
function getPageOffset(url) {
  if (url.indexOf('help-faq') !== -1) {
    return 80;
  }
  if (url.indexOf('methods') !== -1) {
    return 80;
  }
  if (url.indexOf('about') !== -1) {
    return 80;
  }
  if (url.indexOf('why-eviction-matters') !== -1) {
    return 80;
  }
  if (url.indexOf('covid-policy-scorecard') !== -1) {
    return 80;
  }
  return 0;
}


function smoothScroll(path, cb) {
  if (
    location.pathname.replace(/^\//, '') == path.pathname.replace(/^\//, '') &&
    location.hostname == path.hostname &&
    path.hash.length
  ) {
    // check for accordion link
    var target = $('[href="' + path.hash + '"].collapsed');
    // if no accordion link look for an element with the ID
    if (target.length === 0) { target = $(path.hash); }
    // if no ID element look for an element with the name
    if (target.length === 0) { target = $('[name="' + path.hash.slice(1) + '"]'); }
    // scroll to the target
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - (getWindowOffset() + getPageOffset(location.pathname)) + 'px'
      }, 1000); // The number here represents the speed of the scroll in milliseconds
      if (cb) cb(target);
      return false;
    }
  }
}

$(function () {
  // Run smoothscroll on page load
  smoothScroll(window.location, function (target) {
    // If link is an accordion, toggle it
    if (target.hasClass('collapsed')) {
      target.collapse('toggle');
      $(target.attr('href')).collapse('toggle');
    }
  });

  $('.smoothScroll').click(function () {
    smoothScroll(this);
    // Close dropdown if dropdown link
    if ($(this).hasClass('dropdown-item')) {
      $(this).closest('div.dropdown').find('.dropdown-toggle').dropdown('toggle');
    }
  });
});

/**
 * Update URL on accordion expand
 */
$(function() {
  $('.accordion-section .collapsed').click(function() {
    if (history.pushState) {
      history.replaceState(null, null, $(this).attr('href'));
    }
    else {
      location.hash = $(this).attr('href');
    }
  });
});

/** 
 * Social Share Popup 
 * ---
 * Add event listeners to all social share popups that open links in a popup window
 */
   $(document).ready(function () {
    $('a.social-share-popup').each(function () {
      var el = $(this);
      el.on('click', function (e) {
        e.preventDefault();
        window.open(el.attr('href'), 'Social Share', 'height=285,width=550,resizable=1');
      });
    });
  });
  

// Single post Twitter share

$('.twittershare').off('click').on('click', function() {
  var field_list = {
    text: this.getAttribute('data-text'),
    url: this.getAttribute('data-url'),
  }
  window.open('https://twitter.com/share?'+$.param(field_list), '_blank', 'width=550,height=420').focus();
});

/**
 * Subnav link highlighting
 */

$(document).ready(function () {
  $(".nav a").click(function () {
    $(".nav a").css("color", "#050403").removeClass("highlight");
    $(".nav li").removeClass("active");
    $(this).css("color", "#E24000").addClass("highlight");
  });

  $(".subnav a").click(function () {
    $(".subnav a").css("color", "#050403").removeClass("highlight");
    $(this).css("color", "#E24000").addClass("highlight");
  });

  $(".video-panel .nav a").click(function () {
    $(".nav a").css("color", "#fff").removeClass("highlight");
    $(".nav li").removeClass("active");
    $(this).css("color", "#E24000").addClass("highlight");
  });
});

/**
 * Google Sheets-backed media table
 */
function createMediaTable(rows, totalLMSReferrals) {

  var lmsReferralStr = totalLMSReferrals > 0 ? ', ' + totalLMSReferrals + ' LMS referrals' : ''
  $("#numNationalStories").html(rows.length.toLocaleString());
  $("#numLMSReferrals").html(lmsReferralStr);

  $("#national-media-table").append("<tbody></tbody>");
  var tbody = $("#national-media-table tbody");
  var colNames = ["Title", "Description", "Date", "Outlet"];
  var props = ["title", "description", "date", "outlet"];
  var headerRow = $("<tr></tr>");
  for (var i = 0; i < colNames.length; ++i) {
    headerRow.append("<th>" + colNames[i] + "</th>");
  }
  tbody.append(headerRow);

  for (var i = 0; i < rows.length; ++i) {
    var tr = $("<tr></tr>");
    for (var pi = 0; pi < props.length; ++pi) {
      if (props[pi] === "title") {
        var td = $("<td><a href='" + rows[i].link + "' target='_blank'>" + rows[i].title + "</a></td>")
      } else {
        var td = $("<td>" + rows[i][props[pi]] + "</td>");
      }
      tr.append(td);
    }
    tbody.append(tr);
  }
}

/**
 * Loading Google Sheets national media table, set up map embed
 */
$(document).ready(function () {
  var SHEET_BASE = 'https://sheets.googleapis.com/v4/spreadsheets/1fIHfkpG134ax5neHQGfipUrWbzPd-EAlVVlYqm4i9iE/values/';
  var SHEET_END = '?alt=json&key=AIzaSyD1qajG1iNe_ISqbiCNY3mbrkTTo7v3j4U';
  var SHEET_1_URL = SHEET_BASE + 'Local' + SHEET_END;
  var SHEET_2_URL = SHEET_BASE + 'National' + SHEET_END;
  var SHEET_LMS_URL = SHEET_BASE + 'LMS' + SHEET_END;

  if ($("#national-media-table").length) {
    $.getJSON(SHEET_1_URL, function (data) {

      $.getJSON(SHEET_2_URL, function (data) {
        var rows = data.values.slice(1);
        var properties = data.values[0];
        var cleanedRows = rows.map(function (r) {
          var row = {};
          properties.forEach(function (p, i) {
            row[p.replace(/[^\w]/gi, "").toLowerCase()] = r[i];
          });
          return row;
        });

        $.getJSON(SHEET_LMS_URL, function (data) {
          var totalLMSReferrals = data.values.slice(1).length

          createMediaTable(cleanedRows, totalLMSReferrals);
        });


      });
    });
  }
});

$('.carousel').on('touchstart', function(event){
  const xClick = event.originalEvent.touches[0].pageX;
  $(this).one('touchmove', function(event){
      const xMove = event.originalEvent.touches[0].pageX;
      const sensitivityInPx = 5;

      if( Math.floor(xClick - xMove) > sensitivityInPx ){
          $(this).carousel('next');
      }
      else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
          $(this).carousel('prev');
      }
  });
  $(this).on('touchend', function(){
      $(this).off('touchmove');
  });
});

$('.carousel').on('slide.bs.carousel', function(event){
  const numElements = $(this).find(".carousel-item").length
  if(event.to === numElements - 1) {
    $(this).find(".carousel-control-next").addClass("inactive")
  }else {
    $(this).find(".carousel-control-next").removeClass("inactive")
  }

  if(event.to === 0) {
    $(this).find(".carousel-control-prev").addClass("inactive")
  }else {
    $(this).find(".carousel-control-prev").removeClass("inactive")
  }
});


// Homepage counter

/* var count3 = new countUp.CountUp("homeCounter", 3600000, {
  duration: 3.8,
}); 
if (!count3.error) {
  count3.start();
} else {
  console.error(count3.error);
}
*/

/**
 * Check for banner cookie
 * For now always show the banner
 */
// $(function () {
//   const $Superheader = $(".superheader");
//   const bannerText = $Superheader.text();
//   // console.log("current banner: ", bannerText);
//   if (localStorage && localStorage.getItem("el-banner") == bannerText) {
//     // console.log("header already dismissed");
//   } else {
//     // transition header from off-screen
//     $Superheader.css("margin-top", `-${$Superheader.height()}px`);
//     setTimeout(() => {
//       $Superheader.removeClass("inactive");
//       $Superheader.css("margin-top", 0);
//     }, 200);
//   }

//   $Superheader.find(".close").click(function () {
//     // transition header off-screen before removing
//     $Superheader.css("margin-top", `-${$Superheader.height()}px`);
//     setTimeout(() => $Superheader.addClass("inactive"), 200);

//     if (localStorage) {
//       localStorage.setItem("el-banner", bannerText);
//     }
//   });
// });

