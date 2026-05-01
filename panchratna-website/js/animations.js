/* ================================================
   PANCHRATNA — ANIMATIONS.JS
   GSAP ScrollTrigger: staggered reveals, heading splits, parallax
   ================================================ */

'use strict';

(function initAnimations() {
  // Guard: require GSAP
  if (typeof gsap === 'undefined') {
    console.warn('Panchratna: GSAP not loaded — skipping enhanced animations.');
    return;
  }

  // Register ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ——— Navbar Shrink on scroll (GSAP version) ———
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 'top -80',
      onEnter:     () => navbar.classList.add('scrolled'),
      onLeaveBack: () => navbar.classList.remove('scrolled'),
    });
  }

  // ——— Section Headings: Character Stagger ———
  // Uses gsap.utils.toArray to target all section headings
  gsap.utils.toArray('.section-heading').forEach(heading => {
    // Split into words (SplitText not available, so we split manually)
    const words = heading.textContent.split(' ');
    heading.innerHTML = words.map(w =>
      `<span class="word-wrap" style="overflow:hidden;display:inline-block;vertical-align:bottom;margin-right:0.25em;">
         <span class="word-inner" style="display:inline-block;">${w}</span>
       </span>`
    ).join('');

    const wordInners = heading.querySelectorAll('.word-inner');
    gsap.fromTo(wordInners,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          once: true,
        }
      }
    );
  });

  // ——— Dish Cards: Staggered fade-up in batches of 3 ———
  gsap.utils.toArray('.dish-cards-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.dish-card, .dish-row');
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          once: true,
        }
      }
    );
  });

  // ——— About Section: Horizontal Slide ———
  const aboutImg  = document.querySelector('.about-preview-image, .about-image');
  const aboutText = document.querySelector('.about-preview-text, .about-text');

  if (aboutImg) {
    gsap.fromTo(aboutImg,
      { opacity: 0, x: -80 },
      {
        opacity: 1, x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: aboutImg, start: 'top 80%', once: true }
      }
    );
  }

  if (aboutText) {
    gsap.fromTo(aboutText,
      { opacity: 0, x: 80 },
      {
        opacity: 1, x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: aboutText, start: 'top 80%', once: true }
      }
    );
  }

  // ——— Masonry items stagger ———
  gsap.utils.toArray('.masonry-item').forEach((item, idx) => {
    gsap.fromTo(item,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7,
        delay: (idx % 3) * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          once: true,
        }
      }
    );
  });

  // ——— Gallery Strip Items ———
  gsap.utils.toArray('.gallery-strip-item').forEach((item, idx) => {
    gsap.fromTo(item,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1,
        duration: 0.8,
        delay: idx * 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gallery-strip-grid',
          start: 'top 80%',
          once: true,
        }
      }
    );
  });

  // ——— Stats strip counter animation ———
  gsap.utils.toArray('.hero-stat-number').forEach(el => {
    const target = parseInt(el.textContent);
    if (isNaN(target)) return;
    const suffix = el.textContent.replace(/[0-9]/g, '');
    gsap.fromTo({ val: 0 },
      { val: 0 },
      {
        val: target,
        duration: 2,
        ease: 'power1.out',
        onUpdate: function() {
          el.textContent = Math.ceil(this.targets()[0].val) + suffix;
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        }
      }
    );
  });

  // ——— Section label reveal ———
  gsap.utils.toArray('.section-label').forEach(label => {
    gsap.fromTo(label,
      { opacity: 0, y: 20, letterSpacing: '0.5em' },
      {
        opacity: 1, y: 0, letterSpacing: '0.25em',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: label,
          start: 'top 88%',
          once: true,
        }
      }
    );
  });

  // ——— Allergen items stagger ———
  const allergenItems = document.querySelectorAll('.allergen-item');
  if (allergenItems.length) {
    gsap.fromTo(allergenItems,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: { amount: 1.2, grid: 'auto', from: 'start' },
        ease: 'back.out(1.4)',
        duration: 0.6,
        scrollTrigger: {
          trigger: '.allergen-grid',
          start: 'top 82%',
          once: true,
        }
      }
    );
  }

  // ——— Pricing badge intro ———
  const badge = document.querySelector('.menu-pricing-badge');
  if (badge) {
    gsap.fromTo(badge,
      { opacity: 0, scale: 0.8, y: -20 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      }
    );
  }

  // ——— Footer Parallax Rise ———
  const footer = document.querySelector('.footer');
  if (footer) {
    gsap.fromTo(footer,
      { y: 60 },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom',
          end: 'top 60%',
          scrub: 1.5,
        }
      }
    );
  }

  // ——— Reservation card entrance ———
  const bookingCard = document.querySelector('.booking-card');
  if (bookingCard) {
    gsap.fromTo(bookingCard,
      { opacity: 0, y: 60, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      }
    );
  }

  // ——— Sidebar cards stagger ———
  const sidebarCards = document.querySelectorAll('.sidebar-card');
  if (sidebarCards.length) {
    gsap.fromTo(sidebarCards,
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }

  // ——— Page header ———
  const pageHeader = document.querySelector('.page-header-content');
  if (pageHeader) {
    gsap.fromTo(pageHeader.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }

})();
