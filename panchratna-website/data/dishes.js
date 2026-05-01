/* ================================================
   PANCHRATNA — DISHES DATA
   Master data file: all dish objects with full
   ingredients, nutritional info, 3D model config,
   chef notes, and allergen flags.
   ================================================ */

'use strict';

const dishes = [

  // ═══════════════════════════════
  // SOUP
  // ═══════════════════════════════
  {
    slug:      "dal-palak-hing-shorba",
    name:      "Dal Palak Hing Shorba",
    course:    "Soup",
    tagline:   "A soul-warming lentil broth with spinach and the deep warmth of asafetida",
    weight:    "240gm",
    kcal:      252,
    modelType: "bowl",
    modelColors: { base: 0x8B6914, accent: 0x4CAF50 },
    hasSteam:  true,
    ingredients: [
      { name: "Masoor Dal",          note: "red lentils, slow cooked" },
      { name: "Fresh Spinach",       note: "wilted into broth" },
      { name: "Asafetida (Hing)",    note: "tempered in ghee",         allergen: true },
      { name: "Ghee",                note: "clarified butter",          allergen: true },
      { name: "Cumin Seeds",         note: "for tadka" },
      { name: "Ginger",              note: "freshly grated" },
      { name: "Green Chili",         note: "slit, mild heat" },
      { name: "Turmeric",            note: "¼ tsp" },
      { name: "Rock Salt",           note: "to taste" },
      { name: "Lemon Juice",         note: "finishing squeeze" }
    ],
    allergens: ["Milk"],
    nutrition: {
      calories: 252, protein: 11, carbs: 32, sugars: 3,
      fat: 8, saturatedFat: 4, fibre: 7, sodium: 310
    },
    chefNote: "The hing is bloomed in ghee at the very last second — that fleeting sizzle is what gives this shorba its soul. Don't skip it."
  },

  // ═══════════════════════════════
  // APPETIZERS
  // ═══════════════════════════════
  {
    slug:      "nimona-tikki",
    name:      "Nimona Tikki",
    course:    "Appetizer",
    tagline:   "A crisp medallion of green peas and cheese, kissed with yellow chili heat",
    weight:    "220gm",
    kcal:      609,
    modelType: "tikki",
    modelColors: { base: 0x5D8A3C, accent: 0xF5C518 },
    hasSteam:  false,
    ingredients: [
      { name: "Green Peas (Nimona)",    note: "fresh, coarsely mashed" },
      { name: "Paneer / Cheese",        note: "grated into patty",          allergen: true },
      { name: "Cumin Powder",           note: "roasted & ground" },
      { name: "Asafetida",              note: "pinch in mix" },
      { name: "Yellow Chili Powder",    note: "mild fruity heat" },
      { name: "Pineapple Curd Chutney", note: "served alongside",           allergen: true },
      { name: "Breadcrumbs",            note: "outer coating",              allergen: true },
      { name: "Refined Oil",            note: "for shallow fry" },
      { name: "Coriander",              note: "fresh, chopped" },
      { name: "Ginger Paste",           note: "1 tsp" }
    ],
    allergens: ["Milk", "Gluten"],
    nutrition: {
      calories: 609, protein: 18, carbs: 62, sugars: 9,
      fat: 32, saturatedFat: 11, fibre: 8, sodium: 480
    },
    chefNote: "The pineapple curd chutney is house-made daily. The acidity cuts right through the richness of the cheese — that contrast is the whole point."
  },

  {
    slug:      "dahi-bhalla",
    name:      "Dahi Bhalla",
    course:    "Appetizer",
    tagline:   "Pillowy urad dal fritters drowned in cold yoghurt, tamarind and mint",
    weight:    "180gm",
    kcal:      624,
    modelType: "bowl",
    modelColors: { base: 0xF5F5DC, accent: 0x8B4513 },
    hasSteam:  false,
    ingredients: [
      { name: "Urad Dal",              note: "soaked 6hrs, ground to batter" },
      { name: "Full-fat Yoghurt",      note: "chilled, whisked smooth",     allergen: true },
      { name: "Date & Tamarind Chutney", note: "sweet-sour drizzle" },
      { name: "Mint Chutney",          note: "fresh herb purée" },
      { name: "Cumin Powder",          note: "roasted, for dusting" },
      { name: "Black Salt",            note: "kala namak finish" },
      { name: "Red Chili Powder",      note: "light garnish" },
      { name: "Pomegranate Seeds",     note: "optional fresh garnish" },
      { name: "Refined Oil",           note: "for deep frying" },
      { name: "Baking Soda",           note: "pinch for fluff" }
    ],
    allergens: ["Milk"],
    nutrition: {
      calories: 624, protein: 14, carbs: 78, sugars: 22,
      fat: 26, saturatedFat: 7, fibre: 5, sodium: 560
    },
    chefNote: "The bhallas are soaked in warm water after frying to expel oil before meeting the yoghurt. Most places skip this. We don't."
  },

  {
    slug:      "achari-broccoli",
    name:      "Achari Broccoli",
    course:    "Appetizer",
    tagline:   "Char-kissed broccoli in a bold pickle spice crust with cooling mint",
    weight:    "180gm",
    kcal:      624,
    modelType: "tikki",
    modelColors: { base: 0x2D7A2D, accent: 0xFFD700 },
    hasSteam:  true,
    ingredients: [
      { name: "Broccoli",              note: "large florets, blanched" },
      { name: "Achari Masala",         note: "mustard, fennel, nigella, fenugreek" },
      { name: "Mustard Oil",           note: "marinade base" },
      { name: "Hung Curd",             note: "marinade binder",             allergen: true },
      { name: "Pineapple Curd Chutney",note: "served alongside",            allergen: true },
      { name: "Mint Chutney",          note: "fresh herb purée" },
      { name: "Ginger-Garlic Paste",   note: "2 tsp in marinade" },
      { name: "Turmeric",              note: "¼ tsp" },
      { name: "Amchur (Dry Mango)",    note: "sour top note" },
      { name: "Chaat Masala",          note: "finishing sprinkle" }
    ],
    allergens: ["Milk", "Mustard"],
    nutrition: {
      calories: 624, protein: 16, carbs: 44, sugars: 11,
      fat: 38, saturatedFat: 8, fibre: 9, sodium: 640
    },
    chefNote: "We finish these in a tandoor at 480°C for 90 seconds. That slight blackening on the crown — that's not a mistake, that's the flavour."
  },

  // ═══════════════════════════════
  // MAIN COURSE
  // ═══════════════════════════════
  {
    slug:      "subz-lazeez-handi",
    name:      "Subz Lazeez Handi",
    course:    "Main Course",
    tagline:   "A slow-cooked vegetable medley, finished with fresh cream and ancient spice blends",
    weight:    "210gm",
    kcal:      433,
    modelType: "bowl",
    modelColors: { base: 0xD4691E, accent: 0xFFD700 },
    hasSteam:  true,
    ingredients: [
      { name: "Seasonal Vegetables", note: "carrots, beans, cauliflower, peas" },
      { name: "Fresh Cream",         note: "stirred in at finish",           allergen: true },
      { name: "Onion Paste",         note: "slow-cooked golden base" },
      { name: "Tomato Purée",        note: "house-made" },
      { name: "Cashew Paste",        note: "for richness",                  allergen: true },
      { name: "Garam Masala",        note: "whole spice blend" },
      { name: "Kasuri Methi",        note: "dried fenugreek, rubbed into gravy" },
      { name: "Ghee",                note: "1 tbsp finishing",               allergen: true },
      { name: "Bay Leaf",            note: "removed before serving" },
      { name: "Green Cardamom",      note: "2 pods, bruised" }
    ],
    allergens: ["Milk", "Nuts"],
    nutrition: {
      calories: 433, protein: 9, carbs: 38, sugars: 12,
      fat: 27, saturatedFat: 14, fibre: 7, sodium: 520
    },
    chefNote: "The handi is sealed with dough and finished on slow dum for 18 minutes. Opening it at the table is part of the experience — that steam is the first course."
  },

  {
    slug:      "paneer-aapki-pasand",
    name:      "Paneer Aapki Pasand",
    course:    "Main Course",
    tagline:   "Four iconic paneer preparations — choose your mood, or have all four",
    weight:    "210gm",
    kcal:      "878 / 625 / 741 / 625",
    modelType: "bowl",
    modelColors: { base: 0xFF8C00, accent: 0xFFFFFF },
    hasSteam:  true,
    ingredients: [
      { name: "Fresh Paneer",        note: "house-made daily",               allergen: true },
      { name: "Lahori Spice Mix",    note: "coriander, anardana, dried chili" },
      { name: "Spinach (Palak)",     note: "blanched & puréed" },
      { name: "Butter",              note: "tikka masala base",              allergen: true },
      { name: "Tomato-Cashew Gravy", note: "tikka butter base",              allergen: true },
      { name: "Methi (Fenugreek)",   note: "fresh leaves for mutter variant" },
      { name: "Green Peas",          note: "in methi mutter" },
      { name: "Fresh Cream",         note: "finishing swirl",                allergen: true },
      { name: "Tandoor Smoke",       note: "tikka smoked pre-gravy" },
      { name: "Ginger Julienne",     note: "garnish" }
    ],
    allergens: ["Milk", "Nuts"],
    nutrition: {
      calories: "878 / 625 / 741 / 625",
      protein:  "28 / 22 / 26 / 20",
      carbs:    "18 / 14 / 22 / 16",
      fat:      "68 / 46 / 58 / 48",
      saturatedFat: "—",
      sugars:   "—",
      fibre:    "—",
      sodium:   "—",
      note: "Values per preparation — Lahori / Palak / Tikka Butter / Methi Mutter"
    },
    chefNote: "Paneer is pressed and set in-house each morning. By evening it's gone. There are no shortcuts with paneer at Panchratna."
  },

  {
    slug:      "maa-ki-dal",
    name:      "Maa ki Dal",
    course:    "Main Course",
    tagline:   "Black lentils slow-cooked for 12 hours with butter and cream — a dish that needs only time",
    weight:    "230gm",
    kcal:      655,
    modelType: "bowl",
    modelColors: { base: 0x1A0A00, accent: 0xC9A84C },
    hasSteam:  true,
    ingredients: [
      { name: "Whole Urad Dal",       note: "soaked overnight, slow cooked 12hrs" },
      { name: "Rajma (Kidney Beans)", note: "20% blend" },
      { name: "Tomato",               note: "purée, cooked in base" },
      { name: "Butter",               note: "generous — 2 tbsp",             allergen: true },
      { name: "Fresh Cream",          note: "stirred in at finish",           allergen: true },
      { name: "Ginger-Garlic",        note: "paste, deep cooked" },
      { name: "Dried Red Chili",      note: "whole, in tadka" },
      { name: "Cumin",                note: "seeds, bloomed in butter" },
      { name: "Kasuri Methi",         note: "finish herb" },
      { name: "Salt",                 note: "added in stages through cook" }
    ],
    allergens: ["Milk"],
    nutrition: {
      calories: 655, protein: 22, carbs: 58, sugars: 6,
      fat: 34, saturatedFat: 18, fibre: 14, sodium: 490
    },
    chefNote: "This dal has been on the menu since day one and will never leave. It cooks from 9pm to 9am. The night shift exists for this dal."
  },

  {
    slug:      "kashmiri-gucchi-pulao",
    name:      "Kashmiri Gucchi Pulao",
    course:    "Main Course",
    tagline:   "Rare Himalayan morels with saffron basmati and caramelised brown onion",
    weight:    "260gm",
    kcal:      787,
    modelType: "pulao",
    modelColors: { base: 0xF5DEB3, accent: 0xD4AF37 },
    hasSteam:  true,
    ingredients: [
      { name: "Gucchi (Morel Mushrooms)", note: "dried Kashmiri, rehydrated in warm water" },
      { name: "Basmati Rice",             note: "aged, long grain" },
      { name: "Chick Peas",               note: "boiled, added to rice" },
      { name: "Brown Onion",              note: "slow-fried 45min until deep mahogany" },
      { name: "Saffron",                  note: "Kashmiri Grade 1, bloomed in warm milk", allergen: true },
      { name: "Whole Spices",             note: "clove, cinnamon, black cardamom, star anise" },
      { name: "Ghee",                     note: "base and finish",            allergen: true },
      { name: "Fennel Powder",            note: "sonth-saunf dusting" },
      { name: "Dry Ginger",               note: "saunth — Kashmiri signature spice" },
      { name: "Fried Cashews",            note: "garnish",                    allergen: true }
    ],
    allergens: ["Milk", "Nuts"],
    nutrition: {
      calories: 787, protein: 18, carbs: 98, sugars: 8,
      fat: 32, saturatedFat: 14, fibre: 8, sodium: 430
    },
    chefNote: "Gucchi from Kashmir costs more per gram than most proteins on any menu in India. We use it anyway, because nothing else smells like the valley after rain."
  },

  // ═══════════════════════════════
  // DESSERTS
  // ═══════════════════════════════
  {
    slug:      "khubani-ka-meetha",
    name:      "Khubani ka Meetha",
    course:    "Dessert",
    tagline:   "A Hyderabadi classic — sun-dried apricots stewed to a jammy, fragrant compote",
    weight:    "100gm",
    kcal:      321,
    modelType: "dessert",
    modelColors: { base: 0xFF8C42, accent: 0xC9A84C },
    hasSteam:  false,
    ingredients: [
      { name: "Dried Apricots (Khubani)", note: "soaked overnight, pitted" },
      { name: "Sugar",                    note: "light syrup (1:0.5 ratio)" },
      { name: "Green Cardamom",           note: "2 pods, bruised" },
      { name: "Rose Water",               note: "½ tsp at finish" },
      { name: "Almonds",                  note: "blanched, from apricot kernels", allergen: true },
      { name: "Fresh Cream",              note: "quenelle on top",               allergen: true },
      { name: "Saffron Strand",           note: "garnish" },
      { name: "Pistachios",               note: "crushed, garnish",              allergen: true }
    ],
    allergens: ["Milk", "Nuts"],
    nutrition: {
      calories: 321, protein: 4, carbs: 58, sugars: 52,
      fat: 9, saturatedFat: 4, fibre: 5, sodium: 28
    },
    chefNote: "We use the kernel inside the apricot seed — blanched and peeled — as the garnish nut. Nothing from the fruit goes to waste."
  },

  {
    slug:      "halwa-of-the-day",
    name:      "Halwa of the Day",
    course:    "Dessert",
    tagline:   "A warm, ghee-laden pudding — the chef's daily expression in sugar and love",
    weight:    "200gm",
    kcal:      478,
    modelType: "dessert",
    modelColors: { base: 0xD4A24C, accent: 0xFFD700 },
    hasSteam:  true,
    ingredients: [
      { name: "Base ingredient",   note: "changes daily — gajar / moong / suji / lauki / badam" },
      { name: "Ghee",              note: "generous — 3 tbsp minimum",          allergen: true },
      { name: "Full-fat Milk",     note: "slow reduced",                        allergen: true },
      { name: "Sugar",             note: "to taste" },
      { name: "Green Cardamom",    note: "freshly crushed" },
      { name: "Mixed Dry Fruits",  note: "cashew, raisin, almond",             allergen: true },
      { name: "Kewra Water",       note: "fragrance drop" },
      { name: "Saffron",           note: "Kashmiri, in warm milk" }
    ],
    allergens: ["Milk", "Nuts"],
    nutrition: {
      calories: 478, protein: 8, carbs: 52, sugars: 42,
      fat: 26, saturatedFat: 15, fibre: 3, sodium: 95
    },
    chefNote: "Ask your server what today's halwa is. If the answer is gajar in winter, order two. That's not a suggestion — it's instruction."
  }

]; // end dishes[]

// ── Lookup helper ──────────────────────────────────────
function getDishBySlug(slug) {
  return dishes.find(d => d.slug === slug) || null;
}

// ── Export (works both as module and as global) ───────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { dishes, getDishBySlug };
} else {
  window.PanchratnaDishes     = dishes;
  window.getDishBySlug        = getDishBySlug;
}
