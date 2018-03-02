// Get smooth scroll offset depending on window width
function getWindowOffset() {
  var BREAK_MOBILE = 600;
  var BREAK_TABLET = 800;
  var BREAK_DESKTOP = 1200;

  var OFFSET_MOBILE = 60;
  var OFFSET_TABLET = 80;
  var OFFSET_DESKTOP = 80;

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
    return 40;
  }
  return 0;
}

$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - (getWindowOffset() + getPageOffset(location.pathname)) + 'px'
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
