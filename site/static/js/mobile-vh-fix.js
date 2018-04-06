// On window resize, check if the width has changed, and if so unset transitions
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