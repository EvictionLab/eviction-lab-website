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
  console.log(window.location);
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
