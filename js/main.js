// Scroll suave para botones con data-scroll (accesible y sin depender de :target)
document.querySelectorAll('[data-scroll]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = document.querySelector(btn.getAttribute('data-scroll'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Pequeña mejora: resaltar nav al hacer scroll (opcional, sin librerías)
var nav = document.querySelector('header.nav');
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) nav.style.boxShadow = '0 4px 18px rgba(19,49,92,.10)';
  else nav.style.boxShadow = 'none';
}, { passive: true });
