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
  var debounceTime = 100;
  var isScrolling;
  var headerWrapper = document.querySelector('.header-wrapper');

  window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      if (document.documentElement.scrollTop === 0) {
        headerWrapper.classList.remove('condensed');
      } else {
        headerWrapper.classList.add('condensed');
      }
    }, debounceTime);
  }, false);
}

document.addEventListener("DOMContentLoaded", function (event) {
  setupMenu();
  setupScrollEnd();
});
