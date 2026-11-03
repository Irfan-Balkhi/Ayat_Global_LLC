// EDIT / ADD PRODUCTS HERE. cat: phone | tablet | watch | accessory
// img (optional): photo from images/, e.g. "images/phones/iphone-17.png" – without it a drawing in `color` is shown
// Product page text (description + details table) lives in product-details.js, by product id.
const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 18 Pro Max",
    brand: "Apple",
    cat: "phone",
    price: 1299,
    img: "images/phones/iphone-18-pro-max.png", year: 2026, colors: ["Black","Silver","Glacier","Burgundy"],
    color: ["#F8B3AC", "#3D5B59"],
    specs: '6.9" OLED · 256GB · 5G',
    badge: "New",
  },
  // iPhone line-up. Prices = US online market, Nov 2026: Apple's own price for models
  // Apple still sells ("New"), average used-market value for discontinued ones ("Used").
  { id: 13, name: "iPhone Duo", brand: "Apple", cat: "phone", price: 1999, img: "images/phones/iphone-duo.png", year: 2026, colors: ["Night Sky","Star White"], specs: '7.6" foldable OLED · 5G · New' },
  { id: 14, name: "iPhone 18 Pro", brand: "Apple", cat: "phone", price: 1199, img: "images/phones/iphone-18-pro.png", year: 2026, colors: ["Black","Silver","Glacier","Burgundy"], specs: '6.3" OLED · 256GB · 5G · New' },
  { id: 15, name: "iPhone Air", brand: "Apple", cat: "phone", price: 1099, img: "images/phones/iphone-air.png", year: 2025, colors: ["Space Black","Cloud White","Light Gold","Sky Blue"], specs: '6.5" OLED · 256GB · 5G · New' },
  { id: 16, name: "iPhone 17", brand: "Apple", cat: "phone", price: 899, img: "images/phones/iphone-17.png", year: 2025, colors: ["Black","White","Mist Blue","Sage","Lavender"], specs: '6.3" OLED · 256GB · 5G · New' },
  { id: 17, name: "iPhone 17e", brand: "Apple", cat: "phone", price: 699, img: "images/phones/iphone-17e.png", year: 2026, colors: ["Black","White","Soft Pink"], specs: '6.1" OLED · 256GB · 5G · New' },
  { id: 18, name: "iPhone 16", brand: "Apple", cat: "phone", price: 799, img: "images/phones/iphone-16.png", year: 2024, colors: ["Black","White","Pink","Teal","Ultramarine"], specs: '6.1" OLED · 128GB · 5G · New' },
  { id: 19, name: "iPhone 17 Pro Max", brand: "Apple", cat: "phone", price: 1036, img: "images/phones/iphone-17-pro-max.png", year: 2025, colors: ["Silver","Cosmic Orange","Deep Blue"], specs: '6.9" OLED · 256GB · 5G · Used' },
  { id: 20, name: "iPhone 17 Pro", brand: "Apple", cat: "phone", price: 928, img: "images/phones/iphone-17-pro.png", year: 2025, colors: ["Silver","Cosmic Orange","Deep Blue"], specs: '6.3" OLED · 256GB · 5G · Used' },
  { id: 21, name: "iPhone 16 Pro Max", brand: "Apple", cat: "phone", price: 715, img: "images/phones/iphone-16-pro-max.png", year: 2024, colors: ["Black Titanium","White Titanium","Natural Titanium","Desert Titanium"], specs: '6.9" OLED · 256GB · 5G · Used' },
  { id: 22, name: "iPhone 16 Pro", brand: "Apple", cat: "phone", price: 626, img: "images/phones/iphone-16-pro.png", year: 2024, colors: ["Black Titanium","White Titanium","Natural Titanium","Desert Titanium"], specs: '6.3" OLED · 128GB · 5G · Used' },
  { id: 23, name: "iPhone 16 Plus", brand: "Apple", cat: "phone", price: 523, img: "images/phones/iphone-16-plus.png", year: 2024, colors: ["Black","White","Pink","Teal","Ultramarine"], specs: '6.7" OLED · 128GB · 5G · Used' },
  { id: 24, name: "iPhone 16e", brand: "Apple", cat: "phone", price: 420, img: "images/phones/iphone-16e.png", year: 2025, colors: ["Black","White"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 25, name: "iPhone 15 Pro Max", brand: "Apple", cat: "phone", price: 558, img: "images/phones/iphone-15-pro-max.png", year: 2023, colors: ["Black Titanium","White Titanium","Blue Titanium","Natural Titanium"], specs: '6.7" OLED · 256GB · 5G · Used' },
  { id: 26, name: "iPhone 15 Pro", brand: "Apple", cat: "phone", price: 480, img: "images/phones/iphone-15-pro.png", year: 2023, colors: ["Black Titanium","White Titanium","Blue Titanium","Natural Titanium"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 27, name: "iPhone 15 Plus", brand: "Apple", cat: "phone", price: 385, img: "images/phones/iphone-15-plus.png", year: 2023, colors: ["Black","Blue","Green","Yellow","Pink"], specs: '6.7" OLED · 128GB · 5G · Used' },
  { id: 28, name: "iPhone 15", brand: "Apple", cat: "phone", price: 350, img: "images/phones/iphone-15.png", year: 2023, colors: ["Black","Blue","Green","Yellow","Pink"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 29, name: "iPhone 14 Pro Max", brand: "Apple", cat: "phone", price: 430, img: "images/phones/iphone-14-pro-max.png", year: 2022, colors: ["Silver","Gold","Space Black","Deep Purple"], specs: '6.7" OLED · 128GB · 5G · Used' },
  { id: 30, name: "iPhone 14 Pro", brand: "Apple", cat: "phone", price: 368, img: "images/phones/iphone-14-pro.png", year: 2022, colors: ["Silver","Gold","Space Black","Deep Purple"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 31, name: "iPhone 14 Plus", brand: "Apple", cat: "phone", price: 287, img: "images/phones/iphone-14-plus.png", year: 2022, colors: ["Midnight","Starlight","(PRODUCT)RED","Blue","Purple","Yellow"], specs: '6.7" OLED · 128GB · 5G · Used' },
  { id: 32, name: "iPhone 14", brand: "Apple", cat: "phone", price: 252, img: "images/phones/iphone-14.png", year: 2022, colors: ["Midnight","Starlight","(PRODUCT)RED","Blue","Purple","Yellow"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 33, name: "iPhone SE (3rd generation)", brand: "Apple", cat: "phone", price: 119, img: "images/phones/iphone-se-3rd-gen.png", year: 2022, colors: ["(PRODUCT)RED","Starlight","Midnight"], specs: '4.7" LCD · 64GB · 5G · Used' },
  { id: 34, name: "iPhone 13 Pro Max", brand: "Apple", cat: "phone", price: 365, img: "images/phones/iphone-13-pro-max.png", year: 2021, colors: ["Graphite","Gold","Silver","Sierra Blue","Alpine Green"], specs: '6.7" OLED · 128GB · 5G · Used' },
  { id: 35, name: "iPhone 13 Pro", brand: "Apple", cat: "phone", price: 310, img: "images/phones/iphone-13-pro.png", year: 2021, colors: ["Graphite","Gold","Silver","Sierra Blue","Alpine Green"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 36, name: "iPhone 13", brand: "Apple", cat: "phone", price: 218, img: "images/phones/iphone-13.png", year: 2021, colors: ["(PRODUCT)RED","Starlight","Midnight","Blue","Pink","Green"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 37, name: "iPhone 13 mini", brand: "Apple", cat: "phone", price: 220, img: "images/phones/iphone-13-mini.png", year: 2021, colors: ["(PRODUCT)RED","Starlight","Midnight","Blue","Pink","Green"], specs: '5.4" OLED · 128GB · 5G · Used' },
  { id: 38, name: "iPhone 12 Pro Max", brand: "Apple", cat: "phone", price: 277, img: "images/phones/iphone-12-pro-max.jpg", year: 2020, colors: ["Silver","Graphite","Gold","Pacific Blue"], specs: '6.7" OLED · 128GB · 5G · Used' },
  { id: 39, name: "iPhone 12 Pro", brand: "Apple", cat: "phone", price: 211, img: "images/phones/iphone-12-pro.jpg", year: 2020, colors: ["Silver","Graphite","Gold","Pacific Blue"], specs: '6.1" OLED · 128GB · 5G · Used' },
  { id: 40, name: "iPhone 12", brand: "Apple", cat: "phone", price: 149, img: "images/phones/iphone-12.png", year: 2020, colors: ["Black","White","(PRODUCT)RED","Green","Blue","Purple"], specs: '6.1" OLED · 64GB · 5G · Used' },
  { id: 41, name: "iPhone 12 mini", brand: "Apple", cat: "phone", price: 134, img: "images/phones/iphone-12-mini.png", year: 2020, colors: ["Black","White","(PRODUCT)RED","Green","Blue","Purple"], specs: '5.4" OLED · 64GB · 5G · Used' },
  { id: 42, name: "iPhone SE (2nd generation)", brand: "Apple", cat: "phone", price: 84, img: "images/phones/iphone-se-2nd-gen.jpg", year: 2020, colors: ["White","Black","(PRODUCT)RED"], specs: '4.7" LCD · 64GB · 4G · Used' },
  { id: 43, name: "iPhone 11 Pro Max", brand: "Apple", cat: "phone", price: 202, img: "images/phones/iphone-11-pro-max.jpg", year: 2019, colors: ["Silver","Space Gray","Gold","Midnight Green"], specs: '6.5" OLED · 64GB · 4G · Used' },
  { id: 44, name: "iPhone 11 Pro", brand: "Apple", cat: "phone", price: 163, img: "images/phones/iphone-11-pro.jpg", year: 2019, colors: ["Silver","Space Gray","Gold","Midnight Green"], specs: '5.8" OLED · 64GB · 4G · Used' },
  { id: 45, name: "iPhone 11", brand: "Apple", cat: "phone", price: 126, img: "images/phones/iphone-11.jpg", year: 2019, colors: ["Purple","Green","Yellow","Black","White","(PRODUCT)RED"], specs: '6.1" LCD · 64GB · 4G · Used' },
  { id: 46, name: "iPhone XS Max", brand: "Apple", cat: "phone", price: 131, img: "images/phones/iphone-xs-max.jpg", year: 2018, colors: ["Silver","Space Gray","Gold"], specs: '6.5" OLED · 64GB · 4G · Used' },
  { id: 47, name: "iPhone XS", brand: "Apple", cat: "phone", price: 103, img: "images/phones/iphone-xs.jpg", year: 2018, colors: ["Silver","Space Gray","Gold"], specs: '5.8" OLED · 64GB · 4G · Used' },
  { id: 48, name: "iPhone XR", brand: "Apple", cat: "phone", price: 104, img: "images/phones/iphone-xr.jpg", year: 2018, colors: ["Black","White","Blue","Yellow","Coral","(PRODUCT)RED"], specs: '6.1" LCD · 64GB · 4G · Used' },
  { id: 49, name: "iPhone X", brand: "Apple", cat: "phone", price: 98, img: "images/phones/iphone-x.jpg", year: 2017, colors: ["Silver","Space Gray"], specs: '5.8" OLED · 64GB · 4G · Used' },
  // Samsung line-up. Prices = Samsung US online store (unlocked, base storage), Nov 2026; `old` = Samsung list price.
  { id: 2, name: "Galaxy S26 Ultra", brand: "Samsung", cat: "phone", price: 1149, old: 1399, img: "images/samsung/galaxy-s26-ultra.png", specs: '6.9" AMOLED · 256GB · 5G · S Pen', badge: "Sale" },
  { id: 3, name: "Galaxy S26+", brand: "Samsung", cat: "phone", price: 999, img: "images/samsung/galaxy-s26-plus.png", specs: '6.7" AMOLED · 256GB · 5G' },
  { id: 4, name: "Galaxy S26", brand: "Samsung", cat: "phone", price: 799, img: "images/samsung/galaxy-s26.png", specs: '6.3" AMOLED · 256GB · 5G' },
  { id: 5, name: "Galaxy Z Fold8", brand: "Samsung", cat: "phone", price: 1699, old: 1899, img: "images/samsung/galaxy-z-fold8.png", specs: '7.6" foldable AMOLED · 256GB · 5G', badge: "Hot" },
  { id: 6, name: "Galaxy S26 FE", brand: "Samsung", cat: "phone", price: 699, img: "images/samsung/galaxy-s26-fe.png", specs: '6.7" AMOLED · 128GB · 5G' },
  {
    id: 7,
    name: "Aero Pad 11",
    img: "images/products/aero-pad-11.svg",
    brand: "Aero",
    cat: "tablet",
    price: 479,
    color: ["#F8B3AC", "#c9766d"],
    specs: '11" · 128GB · Wi-Fi',
  },
  {
    id: 8,
    name: "Lumo Tab Pro",
    img: "images/products/lumo-tab-pro.svg",
    brand: "Lumo",
    cat: "tablet",
    price: 649,
    color: ["#3D5B59", "#F8B3AC"],
    specs: '12.4" · 256GB · 5G',
  },
  {
    id: 9,
    name: "Coral Watch 3",
    img: "images/products/coral-watch-3.svg",
    brand: "Coral",
    cat: "watch",
    price: 199,
    color: ["#F8B3AC", "#3D5B59"],
    specs: '1.4" AMOLED · GPS · 7-day battery',
    badge: "Best seller",
  },
  {
    id: 10,
    name: "Coral Buds Air",
    img: "images/products/coral-buds-air.svg",
    brand: "Coral",
    cat: "accessory",
    price: 79,
    old: 99,
    color: ["#8fc4be", "#F8B3AC"],
    specs: "ANC · 30h battery",
    badge: "Sale",
  },
  {
    id: 11,
    name: "Coral 65W Charger",
    img: "images/products/coral-65w-charger.svg",
    brand: "Coral",
    cat: "accessory",
    price: 29,
    color: ["#3D5B59", "#8fc4be"],
    specs: "GaN · USB-C · Fast charge",
  },
  {
    id: 12,
    name: "Pine Armor Case",
    img: "images/products/pine-armor-case.svg",
    brand: "Coral",
    cat: "accessory",
    price: 19,
    color: ["#F8B3AC", "#f2877d"],
    specs: "Shockproof · Wireless-charge ready",
  },
];

// Shows the product photo (p.img), else draws a simple device illustration in CSS-gradient colours
function deviceArt(p) {
  if (p.img) return `<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">`;
  const [a, b] = p.color,
    id = "g" + p.id;
  let shape;
  if (p.cat === "tablet")
    shape = `<rect x="22" y="38" width="156" height="124" rx="14" fill="url(#${id})"/><rect x="30" y="46" width="140" height="108" rx="7" fill="#0b1020" opacity=".85"/>`;
  else if (p.cat === "watch")
    shape = `<rect x="78" y="14" width="44" height="30" rx="8" fill="#2a3150"/><rect x="78" y="156" width="44" height="30" rx="8" fill="#2a3150"/><rect x="62" y="44" width="76" height="112" rx="22" fill="url(#${id})"/><rect x="69" y="52" width="62" height="96" rx="16" fill="#0b1020" opacity=".85"/>`;
  else if (p.cat === "accessory")
    shape = `<circle cx="100" cy="100" r="58" fill="url(#${id})"/><circle cx="100" cy="100" r="38" fill="#0b1020" opacity=".6"/><circle cx="100" cy="100" r="14" fill="url(#${id})"/>`;
  else
    shape = `<rect x="58" y="14" width="84" height="172" rx="16" fill="url(#${id})"/><rect x="64" y="22" width="72" height="156" rx="11" fill="#0b1020" opacity=".85"/><rect x="88" y="27" width="24" height="5" rx="2.5" fill="url(#${id})" opacity=".8"/>`;
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>${shape}</svg>`;
}

function productCard(p, i = 0) {
  return `<article class="card reveal" style="--d:${(i % 4) * 80}ms">
    ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
    <a class="card-art" href="product.html?id=${p.id}">${deviceArt(p)}</a>
    <p class="card-brand">${p.brand}</p>
    <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
    <p class="card-specs">${p.specs}</p>
    <div class="card-foot">
      <div class="price">${SHOP.currency}${p.price}${p.old ? `<s>${SHOP.currency}${p.old}</s>` : ""}</div>
      <button class="btn btn-sm" data-add="${p.id}">Add</button>
    </div>
    <a class="btn btn-sm btn-ghost card-view" href="product.html?id=${p.id}">View details</a></article>`;
}
