// Add event listeners to all social share popups that open links in a popup window
$(document).ready(function () {
  $('a.social-share-popup').each(function () {
    var el = $(this);
    el.on('click', function(e) {
      e.preventDefault();
      window.open(el.attr('href'), 'Social Share', 'height=285,width=550,resizable=1');
    });
  });
});
