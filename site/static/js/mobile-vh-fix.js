// On window resize, check if the width has changed, and if so unset transitions
document.addEventListener("DOMContentLoaded", function (event) {
  var width = window.innerWidth;
  window.addEventListener("resize", function (e) {
    // Only trigger transition if the width has changed, otherwise exit
    if (window.innerWidth === width) { return; }
    width = window.innerWidth;

    document.querySelectorAll('.mobile-vh').forEach(function (el) {
      el.style.transition = 'none';
      el.style.height = el.offsetHeight + 'px';

      setTimeout(function () {
        el.style.height = null;
        setTimeout(function () { el.style.transition = null; }); 
      }, 350);
    });
  });
});