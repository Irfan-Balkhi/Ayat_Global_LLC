// Contact form: opens the visitor's email app with the message filled in (no server needed).
document.getElementById("info").innerHTML = `
  <div class="info-card"><span>📞</span><div><b>Phone</b><p>${SHOP.phone}</p></div></div>
  <div class="info-card"><span>✉️</span><div><b>Email</b><p>${SHOP.email}</p></div></div>
  <a class="btn" target="_blank" rel="noopener" href="https://wa.me/${SHOP.whatsapp}">Chat on WhatsApp</a>`;

// Store cards: our store + partner store (edit both in config.js)
const mapUrl = (a) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}`;
const storeCard = (s, title, tag, i) => `
  <div class="panel store-card reveal ${s === SHOP.partner ? "is-partner" : ""}" style="--d:${i * 120}ms">
    <span class="store-tag">${tag}</span>
    <h3>${s.logo ? `<img class="store-logo" src="${s.logo}" alt="${s.name} logo">` : `<span class="store-flag">${s.flag}</span>`}<span>${title}<small>${s.city}</small></span></h3>
    ${s.address ? `<div class="info-card"><span>📍</span><div><b>Address</b><p>${s.address}</p></div></div>` : ""}
    ${s.hours ? `<div class="info-card"><span>🕒</span><div><b>Opening hours</b><p>${s.hours} <small>(local time)</small></p></div></div>` : ""}
    ${s.phone ? `<div class="info-card"><span>📞</span><div><b>Phone</b><p><a href="tel:${s.phone.replace(/\s/g, "")}">${s.phone}</a></p></div></div>` : ""}
    <div class="store-btns">
      ${s.address ? `<a class="btn btn-ghost" target="_blank" rel="noopener" href="${mapUrl(s.address)}">Get directions</a>` : ""}
      ${s.website ? `<a class="btn btn-ghost" target="_blank" rel="noopener" href="${s.website}">Visit website</a>` : ""}
    </div>
  </div>`;
const P = SHOP.partner;
document.getElementById("stores-note").innerHTML =
  `Our own store is in ${SHOP.store.city}. In ${P.city}, our products are also available at <b>${P.name}</b>, an independent partner store with its own name and branding.`;
document.getElementById("store-list").innerHTML =
  storeCard(SHOP.store, SHOP.name, "Our store", 0) + storeCard(P, P.name, "Partner store", 1);
observe();

document.getElementById("form").onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = `mailto:${SHOP.email}?subject=${encodeURIComponent("Message from "+f.get("name"))}&body=${encodeURIComponent(f.get("message")+"\n\nPhone: "+f.get("phone"))}`;
  toast("Opening your email app…");
};
