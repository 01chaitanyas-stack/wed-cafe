# Panchratna — Luxury Fine Dining Website
## Nashik, Maharashtra, India

> *Where Every Meal Tells a Story*

A complete luxury fine dining hotel website built with Mughal opulence meets modern 3D luxury aesthetic — dark, rich, and immersive.

---

## 🚀 Quick Start

No build step required. Open directly in a browser:

```bash
# Option 1: Direct file open
Open index.html in any modern browser

# Option 2: Local dev server (recommended for Three.js)
npx serve . -p 3000
# Then visit: http://localhost:3000

# Option 3: Python server
python -m http.server 3000
```

> **Note:** Three.js canvas requires serving from a local server (not `file://`) for best results due to browser CORS policies. The site still works fully via `file://` but the 3D canvas may not initialize in some browsers.

---

## 📁 File Structure

```
panchratna-website/
├── index.html                  ← Homepage
├── pages/
│   ├── menu.html               ← Full Chef's Menu (5 courses, allergens)
│   ├── about.html              ← Hotel story & Nashik heritage
│   ├── gallery.html            ← Masonry gallery + lightbox
│   └── reservations.html       ← Table booking form
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg         ← Hero background (replace with your image)
│   │   ├── logo.svg            ← Mandala emblem (SVG — edit directly)
│   │   ├── about-arch.jpg      ← About page archway image
│   │   ├── menu/               ← Dish images (see guide below)
│   │   └── gallery/            ← Gallery photos
│   ├── fonts/                  ← Self-hosted fonts (optional)
│   └── icons/
│       └── favicon.ico
├── css/
│   ├── main.css                ← Design system + variables + navbar + footer
│   ├── hero.css                ← Hero section + homepage sections
│   ├── menu.css                ← Menu page styles
│   ├── gallery.css             ← Masonry + lightbox
│   ├── reservations.css        ← Booking form + glassmorphism
│   └── animations.css          ← All @keyframes + GSAP helpers
├── js/
│   ├── main.js                 ← Cursor + navbar + scroll + mobile menu
│   ├── hero-3d.js              ← Three.js mandala + particles + parallax
│   ├── menu.js                 ← Menu data + card rendering + tilt + filter
│   ├── gallery.js              ← Masonry + lightbox + swipe
│   ├── reservations.js         ← Form validation + toast
│   └── animations.js           ← GSAP ScrollTrigger animations
├── lib/                        ← Vendor libraries (local, no CDN)
│   ├── three.min.js
│   ├── gsap.min.js
│   ├── ScrollTrigger.min.js
│   └── vanilla-tilt.min.js
└── README.md
```

---

## 🖼️ Image Replacement Guide

### Hero Background
Replace `assets/images/hero-bg.jpg` with a high-resolution (min 2560×1440px) dark, moody restaurant interior or vineyard twilight shot. The image is filtered to 35% brightness automatically.

### About Archway
Replace `assets/images/about-arch.jpg` with an ornate doorway or heritage architecture photo.

### Gallery Photos
Replace files in `assets/images/gallery/`:
| File | Recommended Content |
|---|---|
| `ambiance-1.jpg` | Candlelit dining room wide shot |
| `ambiance-2.jpg` | Table setting close-up |
| `food-spread.jpg` | Overhead food photography |
| `nashik-view.jpg` | Vineyard or city backdrop |

### Dish Images
Add dish photos to `assets/images/menu/`. Each file should be named exactly:
| Filename | Dish |
|---|---|
| `dal-palak-hing-shorba.jpg` | Dal Palak Hing Shorba |
| `nimona-tikki.jpg` | Nimona Tikki |
| `dahi-bhalla.jpg` | Dahi Bhalla |
| `achari-broccoli.jpg` | Achari Broccoli |
| `subz-lazeez-handi.jpg` | Subz Lazeez Handi |
| `paneer-aapki-pasand.jpg` | Paneer Aapki Pasand |
| `maa-ki-dal.jpg` | Maa ki Dal |
| `kashmiri-gucchi-pulao.jpg` | Kashmiri Gucchi Pulao |
| `khubani-ka-meetha.jpg` | Khubani ka Meetha |
| `halwa-of-the-day.jpg` | Halwa of the Day |

If a dish image is missing, the card shows a gradient color placeholder automatically.

---

## 🎨 Color Token Reference

Defined as CSS variables in `css/main.css`:

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0D0403` | Page background |
| `--color-primary` | `#3B0A0A` | Deep burgundy sections |
| `--color-gold` | `#C9A84C` | All gold accents, headings |
| `--color-gold-light` | `#E8C96A` | Hover gold highlights |
| `--color-ivory` | `#F5F0E8` | Body text, headings on dark |
| `--color-muted` | `#A89070` | Secondary text, captions |
| `--color-glass` | `rgba(201,168,76,0.08)` | Glassmorphism base |

To change the brand color, update `--color-gold` and `--color-gold-light` in `:root`.

---

## ✏️ Updating Menu Data

All menu content is in `js/menu.js` as the `menuData` object. To add/edit dishes:

```js
// In js/menu.js → menuData.courses[n].items
{
  name: "Your Dish Name",
  description: "Ingredient 1 / Ingredient 2 / ...",
  weight: "200gm",
  kcal: 350,
  img: "../assets/images/menu/your-dish.jpg",    // optional
  gradient: "linear-gradient(135deg, #1a3a00 0%, #0a1a00 100%)"  // fallback
}
```

To change the tasting menu price, update `menuData.price` and also update the badge text in `pages/menu.html`.

---

## 🔌 Contact Information

Update the following across all HTML files:

| Field | Location | Default Value |
|---|---|---|
| Phone | Footer + reservations sidebar | `+91 253 XXX XXXX` |
| Email | Footer | `dining@panchratna.in` |
| Address | Footer + reservations sidebar | Nashik, MH 422001 |

---

## 📱 Mobile Behaviour

- **Three.js canvas** is hidden on screens < 768px (replaced by CSS gold glow animation)
- **Masonry grid** collapses to 2 columns on tablet, 1 column on mobile
- **Lightbox** hides prev/next arrows on very small screens; swipe gestures work instead
- **Navbar** becomes a full-screen overlay menu on mobile

---

## 🛠️ Browser Support

Tested and verified on:
- Chrome 115+
- Firefox 115+
- Safari 16+
- Edge 115+

> **IE is not supported.** The site uses CSS Grid, `backdrop-filter`, `IntersectionObserver`, and WebGL.

---

## 📄 License

All design, code, and content © 2025 Panchratna Fine Dining, Nashik. All rights reserved.
