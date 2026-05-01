/* ================================================
   PANCHRATNA — MENU.JS
   Menu data, VanillaTilt, course filter, dish card rendering
   ================================================ */

'use strict';

// ——— Full Menu Data ———
const menuData = {
  price: 3000,
  currency: "INR",
  type: "Vegetarian Chef's Menu",
  note: "All food is cooked in ghee / refined vegetable oil.",
  courses: [
    {
      course: "SOUP",
      id: "soup",
      emoji: "🍲",
      items: [
        {
          name: "Dal Palak Hing Shorba",
          description: "Lentil / asafetida",
          weight: "240gm",
          kcal: 252,
          img: "../assets/images/menu/dal-palak-hing-shorba.jpg",
          gradient: "linear-gradient(135deg, #1a3a1a 0%, #0a1a0a 100%)"
        }
      ]
    },
    {
      course: "APPETIZER",
      id: "appetizer",
      emoji: "🌿",
      items: [
        {
          name: "Nimona Tikki",
          description: "Green peas / cheese / cumin / asafetida / yellow chili / pineapple curd chutney",
          weight: "220gm",
          kcal: 609,
          img: "../assets/images/menu/nimona-tikki.jpg",
          gradient: "linear-gradient(135deg, #2a3a0a 0%, #0a1a00 100%)"
        },
        {
          name: "Dahi Bhalla",
          description: "Urad dal fritter / date chutney / yoghurt / mint chutney",
          weight: "180gm",
          kcal: 624,
          img: "../assets/images/menu/dahi-bhalla.jpg",
          gradient: "linear-gradient(135deg, #3a2a0a 0%, #1a0a00 100%)"
        },
        {
          name: "Achari Broccoli",
          description: "Broccoli / pineapple curd chutney / mint chutney",
          weight: "180gm",
          kcal: 624,
          img: "../assets/images/menu/achari-broccoli.jpg",
          gradient: "linear-gradient(135deg, #0a3a0a 0%, #001a00 100%)"
        }
      ]
    },
    {
      course: "MAIN COURSE",
      id: "main",
      emoji: "🍛",
      items: [
        {
          name: "Subz Lazeez Handi",
          description: "Mixed vegetables / fresh cream / Indian spices",
          weight: "210gm",
          kcal: 433,
          img: "../assets/images/menu/subz-lazeez-handi.jpg",
          gradient: "linear-gradient(135deg, #3a1a00 0%, #1a0800 100%)"
        },
        {
          name: "Paneer Aapki Pasand",
          description: "Lahori paneer / Palak paneer / Paneer tikka butter masala / Methi mutter paneer",
          weight: "210gm",
          kcal: "878 / 625 / 741 / 625",
          img: "../assets/images/menu/paneer-aapki-pasand.jpg",
          gradient: "linear-gradient(135deg, #3a2000 0%, #200a00 100%)"
        },
        {
          name: "Maa ki Dal",
          description: "Sabut urad lentil / butter / cream",
          weight: "230gm",
          kcal: 655,
          img: "../assets/images/menu/maa-ki-dal.jpg",
          gradient: "linear-gradient(135deg, #2a1a10 0%, #150800 100%)"
        },
        {
          name: "Kashmiri Gucchi Pulao",
          description: "Morels / chick peas / brown onion",
          weight: "260gm",
          kcal: 787,
          img: "../assets/images/menu/kashmiri-gucchi-pulao.jpg",
          gradient: "linear-gradient(135deg, #1a2a10 0%, #0a1500 100%)"
        }
      ]
    },
    {
      course: "BREADS",
      id: "breads",
      emoji: "🫓",
      items: [
        { name: "Roti",         description: "Refined flour / milk",                                  weight: "80gm",  kcal: 188 },
        { name: "Naan",         description: "Wheat flour / milk",                                    weight: "80gm",  kcal: 299 },
        { name: "Lachha Paratha",description: "Refined flour / clarified butter",                    weight: "80gm",  kcal: 389 },
        { name: "Kulcha",       description: "Refined flour / spiced potato / brown onion",          weight: "100gm", kcal: 394 },
        { name: "Missi Roti",   description: "Gram flour / refined flour",                           weight: "80gm",  kcal: 189 },
        { name: "Roomali Roti", description: "Refined flour / whole wheat flour / milk",             weight: "100gm", kcal: 346 }
      ]
    },
    {
      course: "DESSERT",
      id: "dessert",
      emoji: "🍮",
      items: [
        {
          name: "Khubani ka Meetha",
          description: "Apricot / dry fruit",
          weight: "100gm",
          kcal: 321,
          img: "../assets/images/menu/khubani-ka-meetha.jpg",
          gradient: "linear-gradient(135deg, #3a2800 0%, #1a1000 100%)"
        },
        {
          name: "Halwa of the Day",
          description: "Pudding",
          weight: "200gm",
          kcal: 478,
          img: "../assets/images/menu/halwa-of-the-day.jpg",
          gradient: "linear-gradient(135deg, #2a1a0a 0%, #150800 100%)"
        }
      ]
    }
  ],
  allergens: [
    { name: "Molluscs",    emoji: "🦪" },
    { name: "Eggs",        emoji: "🥚" },
    { name: "Fish",        emoji: "🐟" },
    { name: "Lupin",       emoji: "🌸" },
    { name: "Soya",        emoji: "🫘" },
    { name: "Milk",        emoji: "🥛" },
    { name: "Peanuts",     emoji: "🥜" },
    { name: "Gluten",      emoji: "🌾" },
    { name: "Crustaceans", emoji: "🦐" },
    { name: "Mustard",     emoji: "🌿" },
    { name: "Nuts",        emoji: "🌰" },
    { name: "Sesame",      emoji: "🌱" },
    { name: "Celery",      emoji: "🥬" },
    { name: "Sulphites",   emoji: "🧪" },
    { name: "Mushroom",    emoji: "🍄" }
  ]
};

// ——— Render Menu ———
function renderMenu() {
  const menuContainer = document.getElementById('menu-courses');
  if (!menuContainer) return;

  menuData.courses.forEach((course, idx) => {
    const section = document.createElement('section');
    section.classList.add('menu-section');
    section.dataset.course = course.id;
    section.id = 'course-' + course.id;

    const courseNum = String(idx + 1).padStart(2, '0');
    const isBread   = course.id === 'breads';

    section.innerHTML = `
      <div class="container">
        <div class="course-header reveal-up">
          <div class="course-number">${courseNum}</div>
          <div>
            <span class="course-title">${course.emoji} Course ${courseNum}</span>
            <h2 class="course-name">${course.course}</h2>
          </div>
          <div class="course-line"></div>
        </div>

        <div class="${isBread ? 'dish-cards-grid breads-grid' : 'dish-cards-grid'}" id="grid-${course.id}">
          ${renderItems(course.items, isBread)}
        </div>
      </div>
    `;

    menuContainer.appendChild(section);
  });

  renderAllergens();
  initTilt();
  initCourseFilter();
}

function renderItems(items, isBread) {
  return items.map(item => {
    if (isBread) {
      return `
        <div class="dish-row reveal-up">
          <div class="dish-row-left">
            <div class="dish-row-name">${item.name}</div>
            <div class="dish-row-desc">${item.description}</div>
          </div>
          <div class="dish-row-right">
            <div class="dish-kcal">${item.kcal} kcal</div>
            <div class="dish-weight" style="margin-top:4px;text-align:right;">${item.weight}</div>
          </div>
        </div>
      `;
    }

    const hasImg   = item.img;
    const gradient = item.gradient || 'linear-gradient(135deg, rgba(59,10,10,0.5) 0%, rgba(13,4,3,0.9) 100%)';

    return `
      <div class="dish-card" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
        <div class="dish-card-image" style="background:${gradient};">
          ${hasImg
            ? `<img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">`
            : `<div class="dish-img-placeholder">${item.name.split(' ')[0]}</div>`
          }
        </div>
        <div class="dish-card-body">
          <h3 class="dish-card-name">${item.name}</h3>
          <p class="dish-card-desc">${item.description}</p>
          <div class="dish-card-meta">
            <span class="dish-weight">${item.weight}</span>
            <span class="dish-kcal">${item.kcal} kcal</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ——— Render Allergens ———
function renderAllergens() {
  const grid = document.getElementById('allergen-grid');
  if (!grid) return;

  grid.innerHTML = menuData.allergens.map(a => `
    <div class="allergen-item reveal-up">
      <div class="allergen-icon">${a.emoji}</div>
      <span class="allergen-label">${a.name}</span>
    </div>
  `).join('');
}

// ——— VanillaTilt Init ———
function initTilt() {
  if (typeof VanillaTilt === 'undefined') return;
  const cards = document.querySelectorAll('[data-tilt]');
  VanillaTilt.init(cards, {
    max:      15,
    speed:    400,
    glare:    true,
    'max-glare': 0.3,
  });
}

// ——— Course Filter ———
function initCourseFilter() {
  const filterBtns    = document.querySelectorAll('.course-filter-btn');
  const sections      = document.querySelectorAll('.menu-section');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.course;

      sections.forEach(section => {
        if (target === 'all' || section.dataset.course === target) {
          section.style.display = '';
          section.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
}

// ——— Init on DOM Ready ———
document.addEventListener('DOMContentLoaded', renderMenu);
