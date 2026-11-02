# CoralPine Mobile – Static Mobile Shop Website

Modern, animated, mobile-friendly shop with a **dark / light mode button**. Pure HTML, CSS and JavaScript – **no server, no install, no build step**. Brand colours: `#F8B3AC` (coral pink) and `#3D5B59` (pine teal).

## How to run
1. Unzip the folder.
2. Double-click `index.html`. Done.
   *(Optional local server: `python -m http.server 8000` → http://localhost:8000)*

## Folder structure – which file does what
```
coralpine-mobile/
├── index.html         Home: hero, category tiles, phone finder, hot picks, why-us, steps, stats, reviews, FAQ, CTA
├── shop.html          Shop: category chips, search, sort, product grid
├── contact.html       Contact: message form + shop details
├── README.md          This file
├── css/
│   └── style.css      ALL styling. Section 1 = colours for LIGHT and DARK themes. 15 numbered sections.
├── js/
│   ├── theme-init.js  Picks light/dark before the page paints (saved choice, else device setting)
│   ├── config.js      YOUR SHOP INFO: name, WhatsApp, email, phone, address, hours, currency
│   ├── products.js    YOUR PRODUCTS list + code that draws device pictures and product cards
│   ├── main.js        Every page: header menu, footer, dark/light button, cart drawer (WhatsApp order),
│   │                  scroll animations, number counters, toast message
│   ├── home.js        Home only: "Hot picks" + budget phone finder
│   ├── shop.js        Shop only: filter, search, sort
│   └── contact.js     Contact only: shop details + form (opens visitor's email app)
└── images/
    ├── phones/        Official Apple iPhone images (one per model, all colours), sized for product cards
    ├── samsung/       Official Samsung product images (samsung.com US store), sized for product cards
    ├── products/      Temporary drawings (SVG) for items not yet swapped to real products – see "Real product swap" below
    ├── logo.svg       Logo (header + footer)  → replace with your real logo (same name)
    └── favicon.svg    Browser tab icon
```

## Dark / light mode
- Button sits in the header (sun/moon icon). The choice is saved in the visitor's browser.
- First visit follows the visitor's device setting.
- Change theme colours in `css/style.css` → section 1 (`[data-theme="light"]` and `[data-theme="dark"]`).

## Common changes
| I want to…                        | Edit                                                           |
|-----------------------------------|----------------------------------------------------------------|
| Shop name, phone, WhatsApp number | `js/config.js`                                                 |
| Add / edit products               | `js/products.js` (copy one line in `PRODUCTS`, use a new `id`) |
| Real product photos               | `products.js` → add `img: "images/phones/iphone-17.png"` to a product (official iPhone images for X → 18 Pro Max / Duo are in `images/phones/`) |
| Colours                           | `css/style.css` → section 1                                    |
| Menu links / footer               | `js/main.js` → "Layout" block                                  |
| Home page text, FAQ, reviews      | `index.html`                                                   |
| Finder budget range               | `index.html` → `<input id="budget" min max step>`              |
| Logo                              | Replace `images/logo.svg` and `images/favicon.svg`             |

## Ordering
Visitors add to cart (saved in their browser), choose where they will receive the order (**Dubai, UAE** or **USA** — set in `locations` in `config.js`), and tap **Order on WhatsApp**; a message with items, total and the receive location opens for the number in `config.js`. No online payment (static site).

## Notes
- Brands (Aero, Lumo, Terra, Coral), prices and reviews are **sample data** – replace with your own.
- Contact form uses `mailto:`. For a real form backend later, use a service like Formspree.

## Real product swap (done one slice at a time)
The original demo items (Aero, Lumo, Terra, Coral) were made-up brands, so they had no real photos. They are being replaced with real products and official images.

| # | Slice | Status |
|---|-------|--------|
| 1 | Phones → Galaxy S26 Ultra, S26+, S26, Z Fold8, S26 FE (images + prices from samsung.com/us) | Done 2026-11-02 |
| 2 | Tablets + watch → replace Aero Pad 11, Lumo Tab Pro, Coral Watch 3 | Todo |
| 3 | Accessories → replace Coral Buds Air, Coral 65W Charger, Pine Armor Case | Todo |
