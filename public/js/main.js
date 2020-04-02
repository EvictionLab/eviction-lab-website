// Add toggling of menu
function setupMenu() {
  var menu = $('.app-menu');
  var menuClose = $('.app-menu .menu-close');
  var menuButton = $('.el-button-menu');

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
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerWrapper.addClass('condensed');
      $('body').addClass('header-condensed');
    } else {
      headerWrapper.removeClass('condensed');
      $('body').removeClass('header-condensed');
    }
    isScrolling = undefined;
  }

  window.addEventListener('scroll', function (event) {
    if (isScrolling === undefined) {
      toggleCondense();
    } else {
      window.clearTimeout(isScrolling);
    }
    isScrolling = setTimeout(toggleCondense, debounceTime);
  }, false);
}

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

function initCovidTable() {
  // Fetches data from google sheets table and generates new
  // console.log('initCovidTable()')

  // Parse JSON response and insert a table row for each row of data in the sheet.
  function reqHandler(source, req) {
    // console.log('reqHandler')
    // console.log('req', req)
    var rows = JSON.parse(req.responseText).feed.entry;
    // console.log('rows', rows);
    var properties = Object.keys(rows[0])
        .filter(function (p) { return p.startsWith("gsx$"); })
        .map(function (p) { return p.substr(4); });
    // console.log('properties', properties)
    var items = rows.map(function (r) {
      var row = {};
      properties.forEach(function (p) {
          row[p.replace('.', '')] = r["gsx$" + p].$t === "" ? null : r["gsx$" + p].$t;
          if (row[p] === null) {
              row[p] = '';
          }
      });
      // console.log('row', row)
      return row;
    });
    // console.log('items', items)
    items.forEach((item) => {
      if (String(item.linktosourcenewspressreleaseetc).length > 30) {
        item.linktruncated = (item.linktosourcenewspressreleaseetc).trim().substring(0, 30)+ "...";
      }
      var rowMarkup = '<tr class="">' +
        '<td>' + item.placename + '</td>' +
        '<td>' + item.levelofgovernmentlocalstatenational + '</td>' +
        '<td>' + item.typeofaction + '</td>' +
        '<td>' + item.datesineffect + '</td>' +
        '<td>' + (!!item.linktosourcenewspressreleaseetc ? '<a href="' + item.linktosourcenewspressreleaseetc + '" target="_blank">' + item.linktruncated + '</a>' : '') + '</td>' +
      '</tr>';
      $('#covid-blog table tr').last().after(rowMarkup);
    })
  }

  // Sheet must be published as public 
  var SHEET_URL = 'https://spreadsheets.google.com/feeds/list/1XX9bBi_4ERpeqw_WyqHEIkfpShbif1i6HenBfymYv_U/1/public/values?alt=json'
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
 * Mobile vh fix
 * ----
 * On window resize, check if the width has changed, and if so unset transitions
 */
$(document).ready(function () {
  var width = window.innerWidth;
  window.addEventListener("resize", function (e) {
    // Only trigger transition if the width has changed, otherwise exit
    if (window.innerWidth === width) {
      return;
    }
    width = window.innerWidth;

    $('.mobile-vh').each(function () {
      var el = $(this);
      el.css('transition', 'none');
      el.css('height', el.outerHeight() + 'px');

      setTimeout(function () {
        el.css('height', null)
        setTimeout(function () {
          el.css('transition', null);
        });
      }, 350);
    });
  });
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
function createMediaTable(oneLastUpdated, oneRowCount, lastUpdated, rows, totalLMSReferrals) {
  var updatedOne = Date.parse(oneLastUpdated.slice(0, 10));
  var updatedTwo = Date.parse(lastUpdated.slice(0, 10));
  var dateNum = updatedOne >= updatedTwo ? updatedOne : updatedTwo;
  var updatedDate = new Date(dateNum);
  var updatedStr = updatedDate.toLocaleDateString("en-US");
  var lmsReferralStr = totalLMSReferrals > 0 ? ', ' + totalLMSReferrals + ' LMS referrals' : ''

  $("#lastUpdated").html(updatedStr);
  $("#numLocalStories").html(oneRowCount.toLocaleString());
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
  var SHEET_BASE = 'https://spreadsheets.google.com/feeds/list/1fIHfkpG134ax5neHQGfipUrWbzPd-EAlVVlYqm4i9iE/';
  var SHEET_END = '/public/values?alt=json';
  var SHEET_1_URL = SHEET_BASE + '1' + SHEET_END;
  var SHEET_2_URL = SHEET_BASE + '2' + SHEET_END;
  var SHEET_LMS_URL = SHEET_BASE + '3' + SHEET_END;

  if ($("#national-media-table").length) {
    $.getJSON(SHEET_1_URL, function (data) {
      var sheetOneUpdated = data.feed.updated.$t;
      var sheetOneRowCount = data.feed.entry.length;

      $.getJSON(SHEET_2_URL, function (data) {
        var rows = data.feed.entry;
        var lastUpdated = data.feed.updated.$t;
        var properties = Object.keys(rows[0])
          .filter(function (p) { return p.startsWith("gsx$"); })
          .map(function (p) { return p.substr(4); });

        var cleanedRows = rows.map(function (r) {
          var row = {};
          properties.forEach(function (p) {
            row[p] = r["gsx$" + p].$t === "" ? null : r["gsx$" + p].$t;
            if (row[p] === null) {
              row[p] = '';
            }
          });
          return row;
        });

        $.getJSON(SHEET_LMS_URL, function (data) {
          var totalLMSReferrals = data.feed.entry.length

          createMediaTable(sheetOneUpdated, sheetOneRowCount, lastUpdated, cleanedRows, totalLMSReferrals);
        });


      });
    });
  }
});
