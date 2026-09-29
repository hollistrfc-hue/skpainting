/* ============================================================
   SK PAINTING SOLUTIONS — main.js
   Mobile menu, footer year, active nav, form success.
   ============================================================ */

(function () {
  'use strict';

  /* === Mobile menu === */
  var hamburger   = document.querySelector('.nav-hamburger');
  var mobilePanel = document.querySelector('.nav-mobile-panel');
  var overlay     = document.querySelector('.nav-overlay');

  if (hamburger && mobilePanel && overlay) {
    var openMenu = function () {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobilePanel.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    var closeMenu = function () {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobilePanel.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', function () {
      hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    mobilePanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobilePanel.classList.contains('open')) closeMenu();
    });
  }

  /* === Footer year === */
  document.querySelectorAll('.footer-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* === Active nav link === */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (currentFile === '') currentFile = 'index.html';

  document.querySelectorAll('.nav-links a, .nav-mobile-panel a').forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop();
    if (href === currentFile) link.classList.add('active');
  });

  /* === Contact form: show success message if redirected back with ?success=1 === */
  if (window.location.search.indexOf('success=1') !== -1) {
    var successEl = document.getElementById('form-success');
    if (successEl) {
      successEl.style.display = 'block';
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    var formEl = document.getElementById('quote-form');
    if (formEl) formEl.style.display = 'none';
  }

})();
