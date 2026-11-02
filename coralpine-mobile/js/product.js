// Product page (product.html?id=…): photo, price, description, full details, related products.
// Text comes from products.js (year, colors) and product-details.js (desc, details per product id).
const p = PRODUCTS.find((x) => x.id == new URLSearchParams(location.search).get("id"));
const box = document.getElementById("product");

const catName = { phone: "Phone", tablet: "Tablet", watch: "Smartwatch", accessory: "Accessory" };

// Turns "6.9\" OLED · 256GB · 5G · New" into labelled rows
function specRows(p) {
  const rows = [["Brand", p.brand], ["Type", catName[p.cat] || p.cat]];
  p.specs.split("·").map((s) => s.trim()).forEach((s) => {
    if (/^(New|Used)$/i.test(s)) return;
    if (/"/.test(s)) rows.push(["Display", s]);
    else if (/\d+\s?(GB|TB)/i.test(s)) rows.push(["Storage", s]);
    else if (/^(5G|4G|Wi-Fi)$/i.test(s)) rows.push(["Network", s]);
    else rows.push(["Feature", s]);
  });
  Object.entries(p.details || {}).forEach((r) => rows.push(r));
  if (p.year) rows.push(["Released", p.year]);
  if (p.colors) rows.push(["Colours", p.colors.join(", ")]);
  rows.push(["Condition", condition(p)]);
  return rows;
}
function condition(p) {
  return /·\s*Used\b/.test(p.specs) ? "Used – checked & tested" : "Brand new";
}
function description(p) {
  const used = /Used/.test(condition(p));
  const text = p.desc ||
    `The ${p.name} from ${p.brand}${p.year ? `, first released in ${p.year}` : ""}. ` +
    `Key specs: ${p.specs.replace(/\s*·\s*(New|Used)$/, "").replace(/ · /g, ", ")}.`;
  return text + " " + (used
    ? "This is a used device: we check and test every phone before sale. Ask us on WhatsApp for photos, battery health and exact condition."
    : "Brand new. Ask us on WhatsApp about stock and delivery.");
}

if (!p) {
  box.innerHTML = `<div class="empty" style="text-align:center;padding:60px 0"><h2>Product not found</h2><p class="muted" style="margin:10px 0 24px">It may have been removed.</p><a class="btn" href="shop.html">Go to shop</a></div>`;
  document.getElementById("related-wrap").remove();
} else {
  document.title = `${p.name} – ${SHOP.name}`;
  box.innerHTML = `<div class="pd">
    <div class="pd-art reveal">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}${deviceArt(p)}</div>
    <div class="pd-info reveal">
      <p class="card-brand">${p.brand} · ${catName[p.cat] || p.cat}</p>
      <h1>${p.name}</h1>
      <p class="pd-cond">${condition(p)}</p>
      <div class="price pd-price">${SHOP.currency}${p.price}${p.old ? `<s>${SHOP.currency}${p.old}</s>` : ""}</div>
      ${p.colors ? `<p class="muted pd-colors">Available colours: ${p.colors.join(" · ")}</p>` : ""}
      <p class="pd-desc">${description(p)}</p>
      <div class="pd-actions">
        <button class="btn" data-add="${p.id}">Add to cart</button>
        <a class="btn btn-ghost" target="_blank" rel="noopener" href="https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(`Hello ${SHOP.name}, I have a question about the ${p.name} (${SHOP.currency}${p.price}).`)}">Ask on WhatsApp</a>
      </div>
      <h3 class="pd-h">Details</h3>
      <table class="pd-table">${specRows(p).map((r) => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</table>
    </div></div>`;
  const related = PRODUCTS.filter((x) => x.id !== p.id && x.cat === p.cat)
    .sort((a, b) => (b.brand === p.brand) - (a.brand === p.brand) || Math.abs(a.price - p.price) - Math.abs(b.price - p.price))
    .slice(0, 4);
  document.getElementById("related").innerHTML = related.map(productCard).join("");
  if (!related.length) document.getElementById("related-wrap").remove();
}
observe();
