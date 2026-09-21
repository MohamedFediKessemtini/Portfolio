// Menu mobile
(function () {
  var menu = document.querySelector('.menu');
  var nav = document.querySelector('.nav nav');
  if (!menu || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  menu.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) setOpen(false);
  });
})();
