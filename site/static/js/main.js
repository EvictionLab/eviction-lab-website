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
  });

  menuClose.click(function () {
    menu.removeClass('expanded');
    menu.find('a').each(function () {
      $(this).attr('tabindex', -1);
    });
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
  $('#contact-select').change(function (el) {
    var selected = $(this).find('option:selected');
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
