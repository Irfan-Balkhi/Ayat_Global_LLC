// Shared on every page: header, footer, cart drawer, scroll animations, counters.
const page = document.body.dataset.page;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Layout (edit menu / footer here) ---------- */
const links = [
  ["index.html", "Home", "home"],
  ["shop.html", "Shop", "shop"],
  ["contact.html", "Contact", "contact"],
];
$("#site-header").innerHTML = `
  <div class="wrap nav">
    <a class="brand" href="index.html"><img src="images/logo.svg" alt="">${SHOP.name}</a>
    <nav id="menu">${links.map((l) => `<a href="${l[0]}" class="${page === l[2] ? "active" : ""}">${l[1]}</a>`).join("")}</nav>
    <div class="nav-actions">
      <button class="icon-btn theme-toggle" id="theme" aria-label="Switch dark / light mode" title="Dark / light mode"><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg><svg class="moon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg></button>
      <button class="icon-btn" id="cart-open" aria-label="Open cart">🛒<span id="cart-count">0</span></button>
      <button class="icon-btn burger" id="burger" aria-label="Menu">☰</button>
    </div>
  </div>`;
$("#site-footer").innerHTML = `
  <div class="wrap foot-grid">
    <div><a class="brand" href="index.html"><img src="images/logo.svg" alt="">${SHOP.name}</a><p>${SHOP.tagline}</p></div>
    <div><h4>Pages</h4>${links.map((l) => `<a href="${l[0]}">${l[1]}</a>`).join("")}</div>
    <div><h4>Visit us</h4><p>${SHOP.address}<br>${SHOP.hours}</p></div>
    <div><h4>Contact</h4><a href="tel:${SHOP.phone.replace(/\s/g, "")}">${SHOP.phone}</a><a href="mailto:${SHOP.email}">${SHOP.email}</a></div>
  </div>
  <div class="copy">© ${new Date().getFullYear()} ${SHOP.name}. All rights reserved.</div>
  
  <div id="cart-root"></div><div id="toast"></div>`;
document.title = document.title.replace("{shop}", SHOP.name);

/* ---------- Header behaviour ---------- */
$("#burger").onclick = () => $("#menu").classList.toggle("open");
addEventListener("scroll", () =>
  $("#site-header").classList.toggle("scrolled", scrollY > 20),
);

/* ---------- Cart ---------- */
const Cart = {
  items: JSON.parse(localStorage.getItem("pm_cart") || "[]"),
  location: SHOP.locations.includes(localStorage.getItem("pm_location"))
    ? localStorage.getItem("pm_location")
    : "",
  save() {
    localStorage.setItem("pm_cart", JSON.stringify(this.items));
    this.render();
  },
  add(id) {
    const it = this.items.find((i) => i.id == id);
    it ? it.qty++ : this.items.push({ id: +id, qty: 1 });
    this.save();
    toast("Added to cart ✓");
  },
  change(id, d) {
    const it = this.items.find((i) => i.id == id);
    it.qty += d;
    if (it.qty < 1) this.items = this.items.filter((i) => i.id != id);
    this.save();
  },
  setLocation(loc) {
    this.location = loc;
    localStorage.setItem("pm_location", loc);
    this.render();
  },
  total() {
    return this.items.reduce(
      (s, i) => s + PRODUCTS.find((p) => p.id == i.id).price * i.qty,
      0,
    );
  },
  render() {
    $("#cart-count").textContent = this.items.reduce((s, i) => s + i.qty, 0);
    const rows = this.items
      .map((i) => {
        const p = PRODUCTS.find((x) => x.id == i.id);
        return `<div class="c-row"><div class="c-art">${deviceArt(p)}</div><div><b>${p.name}</b><small>${SHOP.currency}${p.price}</small>
      <div class="qty"><button data-q="${p.id}" data-d="-1">−</button><span>${i.qty}</span><button data-q="${p.id}" data-d="1">+</button></div></div></div>`;
      })
      .join("");
    const msg = encodeURIComponent(
      "Hello " +
        SHOP.name +
        ", I want to order:\n" +
        this.items
          .map((i) => {
            const p = PRODUCTS.find((x) => x.id == i.id);
            return `• ${p.name} x${i.qty}`;
          })
          .join("\n") +
        `\nTotal: ${SHOP.currency}${this.total()}` +
        `\n\n📍 RECEIVE IN: ${this.location.toUpperCase()}`,
    );
    const locs = SHOP.locations
      .map((l) => `<button class="chip ${this.location === l ? "active" : ""}" data-loc="${l}">${l}</button>`)
      .join("");
    $("#cart-root").innerHTML =
      `<div class="overlay" id="overlay"></div><aside class="drawer" id="drawer">
      <div class="d-head"><h3>Your cart</h3><button class="icon-btn" id="cart-close">✕</button></div>
      <div class="d-body">${rows || '<p class="empty">Your cart is empty.</p>'}</div>
      ${
        this.items.length
          ? `<div class="d-foot"><div class="d-total"><span>Total</span><b>${SHOP.currency}${this.total()}</b></div>
      <div class="d-loc"><span>Where will you receive it?</span><div>${locs}</div></div>
      ${
        this.location
          ? `<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${SHOP.whatsapp}?text=${msg}">Order on WhatsApp</a>`
          : `<button class="btn btn-off" id="need-loc">Order on WhatsApp</button>`
      }</div>`
          : ""
      }</aside>`;
    if (this.open) this.show(true);
  },
  show(v) {
    this.open = v;
    $("#drawer").classList.toggle("open", v);
    $("#overlay").classList.toggle("open", v);
  },
};
document.addEventListener("click", (e) => {
  const t = e.target;
  if (t.closest("#cart-open")) Cart.show(true);
  if (t.closest("#cart-close") || t.id === "overlay") Cart.show(false);
  if (t.dataset.add) Cart.add(t.dataset.add);
  if (t.dataset.q) Cart.change(t.dataset.q, +t.dataset.d);
  if (t.dataset.loc) Cart.setLocation(t.dataset.loc);
  if (t.closest("#need-loc")) toast("Please choose Dubai or USA first");
});
function toast(m) {
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}
Cart.render();

/* ---------- Scroll animations & counters ---------- */
function observe() {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
        if (e.target.dataset.count) countUp(e.target);
      }),
    { threshold: 0.15 },
  );
  $$(".reveal:not(.in), [data-count]:not(.done)").forEach((el) =>
    io.observe(el),
  );
}
function countUp(el) {
  el.classList.add("done");
  const end = +el.dataset.count,
    suf = el.dataset.suffix || "";
  let n = 0;
  const step = () => {
    n += Math.ceil(end / 50);
    if (n >= end) {
      el.textContent = end + suf;
      return;
    }
    el.textContent = n + suf;
    requestAnimationFrame(step);
  };
  step();
}
observe();

/* ---------- Dark / light mode button ---------- */
$("#theme").onclick = () => {
  const root = document.documentElement,
    next = root.dataset.theme === "dark" ? "light" : "dark";
  root.classList.add("theme-anim"); // smooth colour fade
  root.dataset.theme = next;
  localStorage.setItem("cp_theme", next);
  setTimeout(() => root.classList.remove("theme-anim"), 600);
};
