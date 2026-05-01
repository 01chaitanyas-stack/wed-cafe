/* ================================================
   PANCHRATNA — GALLERY.JS
   Masonry layout, lightbox open/close, keyboard navigation
   ================================================ */

'use strict';

const galleryData = [
  {
    src:     '../assets/images/gallery/ambiance-1.jpg',
    caption: 'Candlelit Dining Room',
    cat:     'ambiance',
    height:  320,
    desc:    'Intimate dining beneath golden chandeliers'
  },
  {
    src:     '../assets/images/gallery/ambiance-2.jpg',
    caption: 'The Table',
    cat:     'ambiance',
    height:  260,
    desc:    'An invitation to indulge'
  },
  {
    src:     '../assets/images/gallery/food-spread.jpg',
    caption: 'The Tasting Feast',
    cat:     'food',
    height:  400,
    desc:    'A symphony of flavors from our Chef\'s Table'
  },
  {
    src:     '../assets/images/gallery/nashik-view.jpg',
    caption: 'Nashik, Maharashtra',
    cat:     'nashik',
    height:  300,
    desc:    'Where vines meet the sacred Godavari'
  },
  // Duplicate entries (rotated/cropped aesthetic variants) to fill grid
  {
    src:     '../assets/images/gallery/ambiance-1.jpg',
    caption: 'Private Alcove',
    cat:     'ambiance',
    height:  280,
    desc:    'Secluded luxury for intimate occasions'
  },
  {
    src:     '../assets/images/gallery/food-spread.jpg',
    caption: 'Vegetarian Elegance',
    cat:     'food',
    height:  340,
    desc:    'Twelve courses of pure artistry'
  },
  {
    src:     '../assets/images/gallery/nashik-view.jpg',
    caption: 'Vineyard Sundown',
    cat:     'nashik',
    height:  260,
    desc:    'The golden hour over Nashik\'s wine country'
  },
  {
    src:     '../assets/images/gallery/ambiance-2.jpg',
    caption: 'Curated Details',
    cat:     'ambiance',
    height:  360,
    desc:    'Every element tells a story of craftsmanship'
  },
];

let lightboxImages = [...galleryData];
let currentIndex   = 0;

// ——— Build Masonry Grid ———
function buildGallery(filter = 'all') {
  const grid = document.getElementById('masonry-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? galleryData
    : galleryData.filter(img => img.cat === filter);

  lightboxImages = filtered;

  grid.innerHTML = filtered.map((img, idx) => `
    <div class="masonry-item reveal-up" data-index="${idx}" style="animation-delay:${idx * 0.07}s">
      <img
        src="${img.src}"
        alt="${img.caption}"
        style="min-height:${img.height}px; object-fit:cover;"
        loading="lazy"
        onerror="this.parentElement.style.minHeight='${img.height}px';this.style.display='none';"
      >
      <div class="masonry-overlay">
        <div class="masonry-caption">
          ${img.caption}
          <small>${img.cat.toUpperCase()}</small>
        </div>
      </div>
      <div class="masonry-expand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>
    </div>
  `).join('');

  // Bind click for lightbox
  grid.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index);
      openLightbox(idx);
    });
  });

  // Re-observe reveals
  grid.querySelectorAll('.reveal-up').forEach(el => {
    el.classList.remove('in-view');
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  });
}

// ——— Lightbox ———
const lightboxOverlay = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');

function openLightbox(idx) {
  currentIndex = idx;
  updateLightboxContent();
  if (lightboxOverlay) {
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  if (lightboxOverlay) {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updateLightboxContent() {
  const img = lightboxImages[currentIndex];
  if (!img) return;

  if (lightboxImg) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.caption;
  }
  if (lightboxCaption) {
    lightboxCaption.innerHTML = `${img.caption} <span style="color:var(--color-muted);font-style:normal;font-size:0.85rem;"> — ${img.desc}</span>`;
  }
  if (lightboxCounter) {
    lightboxCounter.textContent = `${currentIndex + 1} / ${lightboxImages.length}`;
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  updateLightboxContent();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxContent();
}

// Close button
const closeBtn = document.getElementById('lightbox-close');
if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

// Nav buttons
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
if (prevBtn) prevBtn.addEventListener('click', prevImage);
if (nextBtn) nextBtn.addEventListener('click', nextImage);

// Click backdrop to close
if (lightboxOverlay) {
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightboxOverlay || !lightboxOverlay.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft')  prevImage();
  if (e.key === 'Escape')     closeLightbox();
});

// Touch/swipe support
let touchStartX = 0;
if (lightboxOverlay) {
  lightboxOverlay.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightboxOverlay.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? nextImage() : prevImage();
    }
  }, { passive: true });
}

// ——— Filter Buttons ———
document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildGallery(btn.dataset.filter);
  });
});

// ——— Init ———
document.addEventListener('DOMContentLoaded', () => {
  buildGallery('all');
});
