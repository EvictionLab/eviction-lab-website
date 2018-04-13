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

  function toggleCondense () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerWrapper.addClass('condensed');
    } else {
      headerWrapper.removeClass('condensed');
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
    setTimeout(function() { $("body").addClass("modal-open") }, 500);
  });
}

$(document).ready(function () {
  setupMenu();
  setupScrollEnd();
  if ($('#contactform').length) {
    setupContactForm();
  }
  setupModals();
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
    if (window.innerWidth === width) { return; }
    width = window.innerWidth;

    $('.mobile-vh').each(function () {
      var el = $(this);
      el.css('transition', 'none');
      el.css('height', el.outerHeight() + 'px');

      setTimeout(function () {
        el.css('height', null)
        setTimeout(function () { el.css('transition', null); }); 
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
    var target = $(path.hash);
    target = target.length ? target : $('[name="' + path.hash.slice(1) + '"]');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - (getWindowOffset() + getPageOffset(location.pathname)) + 'px'
      }, 1000); // The number here represents the speed of the scroll in milliseconds
      if (cb) cb(target);
      return false;
    }
  }
}

$(function() {
  // Run smoothscroll on page load
  smoothScroll(window.location, function(target) {
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
 * Social Share Popup 
 * ---
 * Add event listeners to all social share popups that open links in a popup window
 */
$(document).ready(function () {
  $('a.social-share-popup').each(function () {
    var el = $(this);
    el.on('click', function(e) {
      e.preventDefault();
      window.open(el.attr('href'), 'Social Share', 'height=285,width=550,resizable=1');
    });
  });
});

/**
 * Subnav link highlighting
 */

$(document).ready(function() {
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
