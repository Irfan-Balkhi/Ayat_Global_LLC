// EDIT / ADD PRODUCTS HERE. cat: phone | tablet | watch | accessory
const PRODUCTS = [
  {
    id: 1,
    name: "Iphone 18 Pro max",
    brand: "Iphone",
    cat: "phone",
    price: 1199,
    old: 1399,
    color: ["#F8B3AC", "#3D5B59"],
    specs: '6.7" OLED · 256GB · 5G',
    badge: "New",
  },
  {
    id: 2,
    name: "Aero X1",
    brand: "Aero",
    cat: "phone",
    price: 699,
    color: ["#f6c9c4", "#5f8a86"],
    specs: '6.4" OLED · 128GB · 5G',
  },
  {
    id: 3,
    name: "Lumo S24",
    brand: "Lumo",
    cat: "phone",
    price: 749,
    old: 829,
    color: ["#3D5B59", "#8fc4be"],
    specs: '6.5" AMOLED · 256GB · 5G',
    badge: "Sale",
  },
  {
    id: 4,
    name: "Lumo Lite",
    brand: "Lumo",
    cat: "phone",
    price: 329,
    color: ["#F8B3AC", "#ffd9d4"],
    specs: '6.1" LCD · 64GB · 4G',
  },
  {
    id: 5,
    name: "Terra Fold",
    brand: "Terra",
    cat: "phone",
    price: 1499,
    color: ["#2b4240", "#F8B3AC"],
    specs: '7.6" Foldable · 512GB · 5G',
    badge: "Hot",
  },
  {
    id: 6,
    name: "Terra Z5",
    brand: "Terra",
    cat: "phone",
    price: 549,
    color: ["#8fc4be", "#3D5B59"],
    specs: '6.6" OLED · 128GB · 5G',
  },
  {
    id: 7,
    name: "Aero Pad 11",
    brand: "Aero",
    cat: "tablet",
    price: 479,
    color: ["#F8B3AC", "#c9766d"],
    specs: '11" · 128GB · Wi-Fi',
  },
  {
    id: 8,
    name: "Lumo Tab Pro",
    brand: "Lumo",
    cat: "tablet",
    price: 649,
    color: ["#3D5B59", "#F8B3AC"],
    specs: '12.4" · 256GB · 5G',
  },
  {
    id: 9,
    name: "Coral Watch 3",
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
    brand: "Coral",
    cat: "accessory",
    price: 29,
    color: ["#3D5B59", "#8fc4be"],
    specs: "GaN · USB-C · Fast charge",
  },
  {
    id: 12,
    name: "Pine Armor Case",
    brand: "Coral",
    cat: "accessory",
    price: 19,
    color: ["#F8B3AC", "#f2877d"],
    specs: "Shockproof · Wireless-charge ready",
  },
];

// Draws a simple original phone / device illustration in CSS-gradient colours
function deviceArt(p) {
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
    <div class="card-art">${deviceArt(p)}</div>
    <p class="card-brand">${p.brand}</p>
    <h3>${p.name}</h3>
    <p class="card-specs">${p.specs}</p>
    <div class="card-foot">
      <div class="price">${SHOP.currency}${p.price}${p.old ? `<s>${SHOP.currency}${p.old}</s>` : ""}</div>
      <button class="btn btn-sm" data-add="${p.id}">Add</button>
    </div></article>`;
}
