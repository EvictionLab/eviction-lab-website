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

document.addEventListener("DOMContentLoaded", function (event) {
  setupMenu();
});
