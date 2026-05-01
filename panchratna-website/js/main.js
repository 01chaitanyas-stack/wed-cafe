/* ================================================
   PANCHRATNA — MAIN.JS
   Global init: navbar, custom cursor, smooth scroll, mobile menu
   ================================================ */

'use strict';

// ——— Custom Cursor ———
const cursorOrb  = document.getElementById('cursor-orb');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorOrb) {
    cursorOrb.style.left  = mouseX + 'px';
    cursorOrb.style.top   = mouseY + 'px';
  }
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  if (cursorRing) {
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scale cursor orb on hover over interactive elements
document.querySelectorAll('a, button, .masonry-item, .dish-card, .gallery-filter-btn, .party-size-btn, .course-filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursorOrb) {
      cursorOrb.style.transform = 'translate(-50%, -50%) scale(2.5)';
      cursorOrb.style.mixBlendMode = 'screen';
    }
    if (cursorRing) {
      cursorRing.style.width  = '50px';
      cursorRing.style.height = '50px';
      cursorRing.style.opacity = '0.9';
    }
  });
  el.addEventListener('mouseleave', () => {
    if (cursorOrb) {
      cursorOrb.style.transform = 'translate(-50%, -50%) scale(1)';
    }
    if (cursorRing) {
      cursorRing.style.width  = '32px';
      cursorRing.style.height = '32px';
      cursorRing.style.opacity = '0.6';
    }
  });
});

// ——— Navbar Scroll Behavior ———
const navbar = document.querySelector('.navbar');

function updateNavbar() {
  if (!navbar) return;
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ——— Active Nav Link ———
(function setActiveNavLink() {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (
      href === currentPath ||
      (currentPath === '' && href === 'index.html') ||
      (currentPath === 'index.html' && href === '') ||
      (currentPath === href)
    ) {
      link.classList.add('active');
    }
  });
})();

// ——— Mobile Menu Toggle ———
const hamburger   = document.querySelector('.nav-hamburger');
const mobileMenu  = document.querySelector('.nav-mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on mobile link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ——— Smooth Scroll for anchor links ———
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ——— Button ripple effect ———
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect   = this.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    const x      = e.clientX - rect.left - size / 2;
    const y      = e.clientY - rect.top  - size / 2;
    const wave   = document.createElement('span');
    wave.classList.add('ripple-wave');
    wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
    this.classList.add('ripple-container');
    this.appendChild(wave);
    setTimeout(() => wave.remove(), 700);
  });
});

// ——— Ornament Separator ———
document.querySelectorAll('.gold-divider, .ornament-separator').forEach(el => {
  el.classList.add('glow-element');
});

// ——— Simple IntersectionObserver reveal (fallback for pages without GSAP) ———
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ——— Lazy-load images ———
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imgObserver.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}
