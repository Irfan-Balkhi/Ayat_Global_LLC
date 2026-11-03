// Home page: featured products + "Find my phone" budget finder.
document.getElementById("featured").innerHTML = PRODUCTS.filter(p => p.badge).slice(0, 4).map(productCard).join("");

const range = document.getElementById("budget"), kind = document.getElementById("kind"), out = document.getElementById("finder-out");
function find(){
  const max = +range.value;
  document.getElementById("budget-val").textContent = SHOP.currency + max;
  const list = PRODUCTS.filter(p => p.cat === kind.value && p.price <= max).sort((a,b) => b.price - a.price).slice(0, 3);
  out.innerHTML = list.length ? list.map(p => productCard(p)).join("") : '<p class="empty">Nothing at this budget yet – try raising the slider.</p>';
  out.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}
range.oninput = find; kind.onchange = find; find();

// "Visit us" teaser: compact store cards; full details live on contact.html#stores
document.getElementById("home-stores-note").innerHTML = storesNote();
document.getElementById("home-store-list").innerHTML = storeCards(true);
observe();
