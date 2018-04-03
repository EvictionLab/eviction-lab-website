// Add toggling of menu
function setupMenu() {
  var menu = document.querySelector('.app-menu');
  var menuClose = document.querySelector('.app-menu .menu-close');
  var menuButton = document.querySelector('.el-button-menu');

  menuButton.addEventListener('click', function () {
    menu.classList.add('expanded');
    menu.querySelectorAll('a').forEach(function (el) {
      el.tabIndex = null;
    });
  });

  menuClose.addEventListener('click', function () {
    menu.classList.remove('expanded');
    menu.querySelectorAll('a').forEach(function (el) {
      el.tabIndex = -1;
    });
  });
}

// Toggle condensed class on header if scrolled to top
function setupScrollEnd() {
  var debounceTime = 50;
  var isScrolling;
  var headerWrapper = document.querySelector('header');

  function toggleCondense () {
    if (document.documentElement.scrollTop === 0) {
      headerWrapper.classList.remove('condensed');
    } else {
      headerWrapper.classList.add('condensed');
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

document.addEventListener("DOMContentLoaded", function (event) {
  setupMenu();
  setupScrollEnd();
  if ($('#contactform').length) {
    setupContactForm();
  }
  setupModals();
});
