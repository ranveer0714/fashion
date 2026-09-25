const products = [
  { id: 1, name: "Serein Satin Dress", price: 8490, category: "Dresses", color: "Red", image: "images/img1.jpg", desc: "A bias-cut satin midi with a sculpted neckline and a soft, liquid drape." },
  { id: 2, name: "Mira Linen Set", price: 7290, category: "Co-ords", color: "Beige", image: "images/img2.jpg", desc: "An easy linen co-ord set, tailored with a relaxed point of view." },
  { id: 3, name: "Noor Column Dress", price: 10990, category: "Evening Wear", color: "Black", image: "images/img3.jpg", desc: "A floor-skimming column silhouette made for an entrance and an encore." },
  { id: 4, name: "Solange Blazer", price: 8990, category: "Jackets", color: "White", image: "images/img4.jpg", desc: "A precise single-breasted blazer with softened shoulders and a clean line." },
  { id: 5, name: "Aster Pleated Skirt", price: 4990, category: "Bottoms", color: "Blue", image: "images/img5.jpg", desc: "Fine pleats give this flowing skirt a sense of movement with every step." },
  { id: 6, name: "Celine Silk Top", price: 4590, category: "Tops", color: "White", image: "images/img6.jpg", desc: "A silk-touch top that brings a quiet glow to tailoring and denim alike." },
  { id: 7, name: "Muse Mini Bag", price: 3890, category: "Accessories", color: "Black", image: "images/img7.jpg", desc: "A compact leather mini bag with a distinctive curved profile." },
  { id: 8, name: "Leonie Wrap Dress", price: 7990, category: "Dresses", color: "Beige", image: "images/img8.jpg", desc: "A considered wrap dress that ties softly at the waist." },
  { id: 9, name: "Marlow Trouser", price: 5690, category: "Bottoms", color: "Black", image: "images/img9.jpg", desc: "A high-waisted trouser with a full-length, leg-lengthening line." },
  { id: 10, name: "Elara Earrings", price: 2490, category: "Accessories", color: "Gold", image: "images/img10.jpg", desc: "Sculptural earrings with a warm brushed-gold finish." },
  { id: 11, name: "Vera Knit Set", price: 6990, category: "Co-ords", color: "Blue", image: "images/img11.jpg", desc: "A ribbed knit pairing that feels polished without trying too hard." },
  { id: 12, name: "Isla Evening Top", price: 5190, category: "Evening Wear", color: "Red", image: "images/img12.jpg", desc: "A softly luminous top to build your after-dark wardrobe around." },
];

const money = (value) => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
}).format(value);

const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem("kalaah-cart") || "[]");
  } catch {
    return [];
  }
};

const setCart = (cart) => {
  localStorage.setItem("kalaah-cart", JSON.stringify(cart));
  updateCount();
};

function header() {
  const page = document.body.dataset.page || "";

  document.querySelectorAll("[data-site-header]").forEach((host) => {
    host.innerHTML = `
      <header class="site-header">
        <a class="brand" href="atelier.html" aria-label="Kalaah Fashion Studio home">
          <img class="brand-logo" src="images/kalaah-logo.svg" alt="Kalaah Fashion Studio" />
        </a>

        <nav class="nav-links" aria-label="Main navigation">
          <a class="${page === "atelier" ? "active" : ""}" href="atelier.html">Atelier</a>
          <a class="${page === "services" ? "active" : ""}" href="services.html">Services</a>
          <a class="${page === "fabrics" ? "active" : ""}" href="fabrics.html">Fabrics</a>
          <a class="${page === "process" ? "active" : ""}" href="process.html">Process</a>
          <a class="${page === "visit" ? "active" : ""}" href="visit.html">Visit</a>
          <a class="cart-link ${page === "cart" ? "active" : ""}" href="cart.html" aria-label="Shopping bag">
            <i class="fa-solid fa-bag-shopping"></i>
            <sup class="cart-count">0</sup>
          </a>
        </nav>

        <a class="planning-portal-btn" href="panel.html?type=service&id=styling">
          Planning Portal
        </a>

        <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
      </header>
    `;
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  nav.id = "main-navigation";

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    toggle.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

function footer() {
  document.querySelectorAll("[data-site-footer]").forEach((host) => {
    host.innerHTML = `
      <footer class="site-footer">
        <div class="footer-grid">
          <div>
            <a class="brand" href="atelier.html" aria-label="Kalaah Fashion Studio home">
              <img class="brand-logo" src="images/kalaah-logo.svg" alt="Kalaah Fashion Studio" />
            </a>
            <p>Modern femininity, designed with intention in Mumbai.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="collections.html">New arrivals</a>
            <a href="collections.html?category=Dresses">Dresses</a>
            <a href="collections.html?category=Co-ords">Co-ords</a>
            <a href="collections.html?category=Accessories">Accessories</a>
          </div>
          <div>
            <h4>Studio</h4>
            <a href="about.html">Our story</a>
            <a href="contact.html">Contact</a>
            <a href="panel.html?type=service&id=styling">Planning Portal</a>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Kalaah Fashion Studio</span>
          <span>Made with intention.</span>
        </div>
      </footer>
    `;
  });
}

function updateCount() {
  const count = getCart().reduce((total, item) => total + Number(item.qty || 0), 0);
  document.querySelectorAll(".cart-count").forEach((element) => {
    element.textContent = count;
  });
}

function card(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </a>
        <button class="wish-btn" type="button" aria-label="Add ${product.name} to wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button class="quick-view" type="button" data-quick="${product.id}">Quick view</button>
      </div>
      <div class="product-info">
        <span class="category-label">${product.category}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>${money(product.price)}</p>
        <button class="small-add" type="button" data-add="${product.id}" aria-label="Add ${product.name} to bag">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </article>
  `;
}

function toast(message) {
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  document.body.appendChild(element);
  window.setTimeout(() => element.remove(), 2200);
}

function addCart(id, size = "M", color = null) {
  const product = products.find((item) => item.id === Number(id));
  if (!product) return;

  const cart = getCart();
  const selectedColor = color || product.color;
  const existing = cart.find((item) => item.id === product.id && item.size === size && item.color === selectedColor);

  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, qty: 1, size, color: selectedColor });

  setCart(cart);
  toast(`${product.name} added to your bag`);
}

function bindProductActions(root = document) {
  root.querySelectorAll("[data-add]").forEach((button) => {
    button.onclick = () => addCart(button.dataset.add);
  });

  root.querySelectorAll("[data-quick]").forEach((button) => {
    button.onclick = () => quickView(button.dataset.quick);
  });

  root.querySelectorAll(".wish-btn").forEach((button) => {
    button.onclick = () => {
      button.innerHTML = '<i class="fa-solid fa-heart"></i>';
      toast("Added to your wishlist");
    };
  });
}

function quickView(id) {
  const product = products.find((item) => item.id === Number(id));
  const host = document.querySelector("[data-modal]");
  if (!product || !host) return;

  host.innerHTML = `
    <div class="modal-backdrop">
      <div class="quick-modal">
        <button class="modal-close" type="button" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        <img src="${product.image}" alt="${product.name}" />
        <div class="quick-modal-copy">
          <p class="eyebrow">${product.category}</p>
          <h2>${product.name}</h2>
          <p>${money(product.price)}</p>
          <p>${product.desc}</p>
          <a class="text-link" href="product.html?id=${product.id}">View full details <i class="fa-solid fa-arrow-right"></i></a>
          <button class="btn btn-dark" data-add="${product.id}" type="button">Add to bag</button>
        </div>
      </div>
    </div>
  `;

  host.querySelector(".modal-close").onclick = () => { host.innerHTML = ""; };
  host.querySelector(".modal-backdrop").onclick = (event) => {
    if (event.target === event.currentTarget) host.innerHTML = "";
  };
  bindProductActions(host);
}

function home() {
  const target = document.querySelector(".featured-products");
  if (!target) return;
  target.innerHTML = products.slice(0, 4).map(card).join("");
  bindProductActions(target);
}

function heroSlider() {
  const hero = document.querySelector(".atelier-hero");
  if (!hero) return;

  const slides = [...hero.querySelectorAll(".hero-slide")];
  const controls = [...hero.querySelectorAll(".hero-pagination button")];
  if (slides.length < 2) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let timer;

  const show = (next) => {
    if (next === current) return;
    const previous = slides[current];
    previous.classList.remove("is-active");
    previous.classList.add("is-leaving");
    current = next;
    slides[current].classList.remove("is-leaving");
    slides[current].classList.add("is-active");
    controls.forEach((control, index) => control.classList.toggle("is-active", index === current));
    window.setTimeout(() => previous.classList.remove("is-leaving"), 1150);
  };

  const start = () => {
    window.clearInterval(timer);
    if (!reducedMotion.matches) timer = window.setInterval(() => show((current + 1) % slides.length), 4000);
  };

  controls.forEach((control, index) => control.addEventListener("click", () => { show(index); start(); }));
  hero.addEventListener("mouseenter", () => window.clearInterval(timer));
  hero.addEventListener("mouseleave", start);
  reducedMotion.addEventListener("change", start);
  start();
}

function collections() {
  const catalog = document.querySelector(".catalog-products");
  if (!catalog) return;

  const categories = ["Dresses", "Tops", "Bottoms", "Co-ords", "Jackets", "Accessories"];
  const colors = ["Black", "White", "Beige", "Red", "Blue"];
  const params = new URLSearchParams(location.search);
  let state = { category: params.get("category") || "", color: "", sort: "newest", page: 1 };

  const categoryFilter = document.querySelector('[data-filter="category"]');
  const colorFilter = document.querySelector('[data-filter="color"]');

  if (categoryFilter) categoryFilter.innerHTML = categories.map((value) => `<label><input type="checkbox" value="${value}" ${state.category === value ? "checked" : ""} />${value}</label>`).join("");
  if (colorFilter) colorFilter.innerHTML = colors.map((value) => `<label><input type="checkbox" value="${value}" ${state.color === value ? "checked" : ""} />${value}</label>`).join("");

  const render = () => {
    let list = products.filter((item) => (!state.category || item.category === state.category) && (!state.color || item.color === state.color));
    if (state.sort === "low") list.sort((a, b) => a.price - b.price);
    if (state.sort === "high") list.sort((a, b) => b.price - a.price);

    const perPage = 6;
    const pages = Math.max(1, Math.ceil(list.length / perPage));
    state.page = Math.min(state.page, pages);
    const start = (state.page - 1) * perPage;
    catalog.innerHTML = list.length ? list.slice(start, start + perPage).map(card).join("") : '<p class="empty-cart">No pieces match these filters.</p>';

    const total = document.querySelector(".product-total");
    if (total) total.textContent = `${list.length} piece${list.length === 1 ? "" : "s"}`;

    const pagination = document.querySelector(".pagination");
    if (pagination) pagination.innerHTML = Array.from({ length: pages }, (_, index) => `<button class="${state.page === index + 1 ? "active" : ""}" data-page-num="${index + 1}">${index + 1}</button>`).join("");

    pagination?.querySelectorAll("[data-page-num]").forEach((button) => button.addEventListener("click", () => { state.page = Number(button.dataset.pageNum); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }));
    bindProductActions(catalog);
  };

  document.querySelectorAll(".filter-options input").forEach((input) => input.addEventListener("change", () => {
    const type = input.closest(".filter-options")?.dataset.filter;
    state[type] = input.checked ? input.value : "";
    state.page = 1;
    render();
  }));

  document.querySelector(".sort-select")?.addEventListener("change", (event) => { state.sort = event.target.value; render(); });
  document.querySelector(".clear-filters")?.addEventListener("click", () => { state = { category: "", color: "", sort: "newest", page: 1 }; document.querySelectorAll(".filter-options input").forEach((input) => { input.checked = false; }); render(); });
  document.querySelector(".filter-trigger")?.addEventListener("click", () => document.querySelector(".filters")?.classList.add("show"));
  document.querySelector(".filter-close")?.addEventListener("click", () => document.querySelector(".filters")?.classList.remove("show"));
  render();
}

function productPage() {
  const target = document.querySelector(".product-detail");
  if (!target) return;

  const id = Number(new URLSearchParams(location.search).get("id") || 1);
  const product = products.find((item) => item.id === id) || products[0];
  let size = "M";
  let color = product.color;

  target.innerHTML = `
    <div class="product-gallery"><div class="main-product-image"><img src="${product.image}" alt="${product.name}" /></div></div>
    <section class="product-copy"><p class="eyebrow">${product.category}</p><h1>${product.name}</h1><p class="product-price">${money(product.price)}</p><p class="product-description">${product.desc}</p><span class="option-label">Size <b class="selected-size">${size}</b></span><div class="size-options">${["XS", "S", "M", "L", "XL"].map((value) => `<button data-size="${value}" class="${value === size ? "selected" : ""}">${value}</button>`).join("")}</div><span class="option-label">Colour <b class="selected-color">${color}</b></span><div class="color-options">${[color, "Black", "Ivory"].filter((value, index, list) => list.indexOf(value) === index).map((value) => `<button data-color="${value}" class="${value === color ? "selected" : ""}">${value}</button>`).join("")}</div><div class="product-actions"><button class="btn btn-dark add-detail" type="button">Add to bag</button><button class="wishlist" type="button" aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button></div></section>
  `;

  target.querySelectorAll("[data-size]").forEach((button) => button.addEventListener("click", () => { size = button.dataset.size; target.querySelectorAll("[data-size]").forEach((item) => item.classList.remove("selected")); button.classList.add("selected"); target.querySelector(".selected-size").textContent = size; }));
  target.querySelectorAll("[data-color]").forEach((button) => button.addEventListener("click", () => { color = button.dataset.color; target.querySelectorAll("[data-color]").forEach((item) => item.classList.remove("selected")); button.classList.add("selected"); target.querySelector(".selected-color").textContent = color; }));
  target.querySelector(".add-detail")?.addEventListener("click", () => addCart(product.id, size, color));
  target.querySelector(".wishlist")?.addEventListener("click", (event) => { event.currentTarget.innerHTML = '<i class="fa-solid fa-heart"></i>'; toast("Added to your wishlist"); });
}

function cartPage() {
  const host = document.querySelector(".cart-items");
  if (!host) return;

  const render = () => {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (products.find((product) => product.id === item.id)?.price || 0) * item.qty, 0);
    const shipping = total === 0 || total >= 5000 ? 0 : 199;

    host.innerHTML = cart.length ? cart.map((item) => { const product = products.find((value) => value.id === item.id); return `<article class="cart-row"><img src="${product.image}" alt="${product.name}" /><div><h3>${product.name}</h3><p>Size ${item.size} · ${item.color}</p><div class="quantity"><button data-change="${item.id}" data-size="${item.size}" data-delta="-1">−</button><span>${item.qty}</span><button data-change="${item.id}" data-size="${item.size}" data-delta="1">+</button></div></div><div><strong>${money(product.price * item.qty)}</strong><button class="remove-item" data-remove="${item.id}" data-size="${item.size}">Remove</button></div></article>`; }).join("") : '<div class="empty-cart">Your bag is waiting for its first beautiful piece.</div>';

    document.querySelector(".subtotal")?.replaceChildren(document.createTextNode(money(total)));
    document.querySelector(".shipping")?.replaceChildren(document.createTextNode(shipping ? money(shipping) : "Complimentary"));
    document.querySelector(".total")?.replaceChildren(document.createTextNode(money(total + shipping)));

    host.querySelectorAll("[data-change]").forEach((button) => button.addEventListener("click", () => { const updated = getCart(); const item = updated.find((value) => value.id === Number(button.dataset.change) && value.size === button.dataset.size); if (item) item.qty += Number(button.dataset.delta); setCart(updated.filter((value) => value.qty > 0)); render(); }));
    host.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => { setCart(getCart().filter((value) => !(value.id === Number(button.dataset.remove) && value.size === button.dataset.size))); render(); }));
  };

  document.querySelector(".checkout")?.addEventListener("click", () => toast("Checkout is ready for your payment provider."));
  render();
}

function forms() {
  document.querySelectorAll(".newsletter-form, .contact-form, .auth-form").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const message = form.querySelector(".form-message");
    if (message) message.textContent = form.classList.contains("contact-form") ? "Thank you. Your note has been sent." : "All set. Welcome to Kalaah.";
    form.reset();
  }));
}

header();
footer();
updateCount();
home();
heroSlider();
collections();
productPage();
cartPage();
forms();
