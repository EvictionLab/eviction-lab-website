// Add event listeners to all social share popups that open links in a popup window
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll('a.social-share-popup').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(el.href, 'Social Share', 'height=285,width=550,resizable=1');
    });
  });
});
