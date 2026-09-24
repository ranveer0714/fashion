const products = [
  {
    id: 1,
    name: "Serein Satin Dress",
    price: 8490,
    category: "Dresses",
    color: "Red",
    image: "images/img1.jpg",
    desc: "A bias-cut satin midi with a sculpted neckline and a soft, liquid drape.",
  },
  {
    id: 2,
    name: "Mira Linen Set",
    price: 7290,
    category: "Co-ords",
    color: "Beige",
    image: "images/img2.jpg",
    desc: "An easy linen co-ord set, tailored with a relaxed point of view.",
  },
  {
    id: 3,
    name: "Noor Column Dress",
    price: 10990,
    category: "Evening Wear",
    color: "Black",
    image: "images/img3.jpg",
    desc: "A floor-skimming column silhouette made for an entrance and an encore.",
  },
  {
    id: 4,
    name: "Solange Blazer",
    price: 8990,
    category: "Jackets",
    color: "White",
    image: "images/img4.jpg",
    desc: "A precise single-breasted blazer with softened shoulders and a clean line.",
  },
  {
    id: 5,
    name: "Aster Pleated Skirt",
    price: 4990,
    category: "Bottoms",
    color: "Blue",
    image: "images/img5.jpg",
    desc: "Fine pleats give this flowing skirt a sense of movement with every step.",
  },
  {
    id: 6,
    name: "Celine Silk Top",
    price: 4590,
    category: "Tops",
    color: "White",
    image: "images/img6.jpg",
    desc: "A silk-touch top that brings a quiet glow to tailoring and denim alike.",
  },
  {
    id: 7,
    name: "Muse Mini Bag",
    price: 3890,
    category: "Accessories",
    color: "Black",
    image: "images/img7.jpg",
    desc: "A compact leather mini bag with a distinctive curved profile.",
  },
  {
    id: 8,
    name: "Leonie Wrap Dress",
    price: 7990,
    category: "Dresses",
    color: "Beige",
    image: "images/img8.jpg",
    desc: "A considered wrap dress that ties softly at the waist.",
  },
  {
    id: 9,
    name: "Marlow Trouser",
    price: 5690,
    category: "Bottoms",
    color: "Black",
    image: "images/img9.jpg",
    desc: "A high-waisted trouser with a full-length, leg-lengthening line.",
  },
  {
    id: 10,
    name: "Elara Earrings",
    price: 2490,
    category: "Accessories",
    color: "Gold",
    image: "images/img10.jpg",
    desc: "Sculptural earrings with a warm brushed-gold finish.",
  },
  {
    id: 11,
    name: "Vera Knit Set",
    price: 6990,
    category: "Co-ords",
    color: "Blue",
    image: "images/img11.jpg",
    desc: "A ribbed knit pairing that feels polished without trying too hard.",
  },
  {
    id: 12,
    name: "Isla Evening Top",
    price: 5190,
    category: "Evening Wear",
    color: "Red",
    image: "images/img12.jpg",
    desc: "A softly luminous top to build your after-dark wardrobe around.",
  },
];
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
const getCart = () => JSON.parse(localStorage.getItem("kalaah-cart") || "[]");
const setCart = (c) => {
  localStorage.setItem("kalaah-cart", JSON.stringify(c));
  updateCount();
};
function header() {
  const p = document.body.dataset.page;
  document
    .querySelectorAll("[data-site-header]")
    .forEach(
      (el) =>
        (el.innerHTML = `<header class="site-header"><a class="brand" href="index.html" aria-label="Kalaah Fashion Studio home"><img class="brand-logo" src="images/kalaah-logo.svg" alt="Kalaah Fashion Studio"></a><button class="nav-toggle" aria-label="Toggle navigation"><i class="fa-solid fa-bars"></i></button><nav class="nav-links"><a class="${p === "home" ? "active" : ""}" href="index.html">Home</a><a class="${p === "collections" || p === "product" ? "active" : ""}" href="collections.html">New Arrivals</a><a class="${p === "about" ? "active" : ""}" href="about.html">About</a><a class="${p === "contact" ? "active" : ""}" href="contact.html">Contact</a><a class="cart-link ${p === "cart" ? "active" : ""}" href="cart.html" aria-label="Shopping bag"><i class="fa-solid fa-bag-shopping"></i><sup class="cart-count">0</sup></a></nav></header>`),
    );
  document
    .querySelector(".nav-toggle")
    ?.addEventListener("click", () =>
      document.querySelector(".nav-links").classList.toggle("open"),
    );
}
function footer() {
  document
    .querySelectorAll("[data-site-footer]")
    .forEach(
      (el) =>
        (el.innerHTML = `<footer class="site-footer"><div class="footer-grid"><div><a class="brand" href="index.html" aria-label="Kalaah Fashion Studio home"><img class="brand-logo" src="images/kalaah-logo.svg" alt="Kalaah Fashion Studio"></a><p>Modern femininity, designed with intention in Mumbai.</p></div><div><h4>Shop</h4><a href="collections.html">New arrivals</a><a href="collections.html?category=Dresses">Dresses</a><a href="collections.html?category=Co-ords">Co-ords</a><a href="collections.html?category=Accessories">Accessories</a></div><div><h4>Studio</h4><a href="about.html">Our story</a><a href="contact.html">Contact</a><a href="login.html">My account</a></div><div><h4>Follow</h4><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">Facebook</a></div></div><div class="footer-bottom"><span>© 2026 Kalaah Fashion Studio</span><span>Made with intention.</span></div></footer>`),
    );
}
function updateCount() {
  const count = getCart().reduce((sum, i) => sum + i.qty, 0);
  document
    .querySelectorAll(".cart-count")
    .forEach((x) => (x.textContent = count));
}
function card(p) {
  return `<article class="product-card"><div class="product-image"><a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a><button class="wish-btn" aria-label="Add ${p.name} to wishlist"><i class="fa-regular fa-heart"></i></button><button class="quick-view" data-quick="${p.id}">Quick view</button></div><div class="product-info"><span class="category-label">${p.category}</span><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><p>${money(p.price)}</p><button class="small-add" data-add="${p.id}" aria-label="Add ${p.name} to bag"><i class="fa-solid fa-plus"></i></button></div></article>`;
}
function bindProductActions(root = document) {
  root
    .querySelectorAll("[data-add]")
    .forEach((b) => (b.onclick = () => addCart(+b.dataset.add)));
  root
    .querySelectorAll("[data-quick]")
    .forEach((b) => (b.onclick = () => quickView(+b.dataset.quick)));
  root
    .querySelectorAll(".wish-btn")
    .forEach(
      (b) =>
        (b.onclick = () => (b.innerHTML = '<i class="fa-solid fa-heart"></i>')),
    );
}
function addCart(id, size = "M", color) {
  const cart = getCart(),
    found = cart.find((x) => x.id === id && x.size === size);
  if (found) found.qty++;
  else
    cart.push({
      id,
      qty: 1,
      size,
      color: color || products.find((p) => p.id === id).color,
    });
  setCart(cart);
  toast("Added to your bag");
}
function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.append(el);
  setTimeout(() => el.remove(), 2200);
}
function quickView(id) {
  const p = products.find((x) => x.id === id),
    host = document.querySelector("[data-modal]");
  host.innerHTML = `<div class="modal-backdrop"><div class="quick-modal"><button class="modal-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><img src="${p.image}" alt="${p.name}"><div class="quick-modal-copy"><p class="eyebrow">${p.category}</p><h2>${p.name}</h2><p class="product-price">${money(p.price)}</p><p>${p.desc}</p><a class="text-link" href="product.html?id=${id}">View full details <i class="fa-solid fa-arrow-right"></i></a><button class="btn btn-dark" data-add="${id}" style="width:100%;margin-top:25px">Add to bag</button></div></div></div>`;
  host.querySelector(".modal-close").onclick = () => (host.innerHTML = "");
  host.querySelector(".modal-backdrop").onclick = (e) => {
    if (e.target === e.currentTarget) host.innerHTML = "";
  };
  bindProductActions(host);
}
function home() {
  const target = document.querySelector(".featured-products");
  if (target) {
    target.innerHTML = products.slice(0, 4).map(card).join("");
    bindProductActions(target);
  }
}

function heroSlider() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = [...hero.querySelectorAll(".hero-slide")];
  const controls = [...hero.querySelectorAll(".hero-pagination button")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentSlide = 0;
  let slideTimer;

  function showSlide(nextSlide) {
    if (nextSlide === currentSlide) return;

    const previous = slides[currentSlide];
    previous.classList.remove("is-active");
    previous.classList.add("is-leaving");

    currentSlide = nextSlide;
    slides[currentSlide].classList.remove("is-leaving");
    slides[currentSlide].classList.add("is-active");

    controls.forEach((control, index) => {
      control.classList.toggle("is-active", index === currentSlide);
    });

    window.setTimeout(() => previous.classList.remove("is-leaving"), 1150);
  }

  function startAutoPlay() {
    window.clearInterval(slideTimer);
    if (reducedMotion.matches) return;

    slideTimer = window.setInterval(() => {
      showSlide((currentSlide + 1) % slides.length);
    }, 3000);
  }

  controls.forEach((control, index) => {
    control.addEventListener("click", () => {
      showSlide(index);
      startAutoPlay();
    });
  });

  hero.addEventListener("mouseenter", () => window.clearInterval(slideTimer));
  hero.addEventListener("mouseleave", startAutoPlay);
  reducedMotion.addEventListener("change", startAutoPlay);
  startAutoPlay();
}

function motionShowcase() {
  const showcase = document.querySelector(".motion-showcase");
  if (!showcase) return;

  const slides = [...showcase.querySelectorAll(".motion-frame")];
  const title = showcase.querySelector(".motion-copy h2");
  const description = showcase.querySelector(".motion-description");
  const count = showcase.querySelector(".motion-count");
  const previous = showcase.querySelector(".motion-previous");
  const next = showcase.querySelector(".motion-next");
  let activeSlide = 0;

  function showSlide(index) {
    slides[activeSlide].classList.remove("is-active");
    slides[activeSlide].querySelector("video").pause();

    activeSlide = (index + slides.length) % slides.length;
    const slide = slides[activeSlide];
    slide.classList.add("is-active");
    title.innerHTML = slide.dataset.title.replace(" ", "<br /><em>") + "</em>";
    description.textContent = slide.dataset.copy;
    count.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    slide
      .querySelector("video")
      .play()
      .catch(() => {});
  }

  previous.addEventListener("click", () => showSlide(activeSlide - 1));
  next.addEventListener("click", () => showSlide(activeSlide + 1));
  slides[0]
    .querySelector("video")
    .play()
    .catch(() => {});
}

function faqs() {
  document.querySelectorAll(".faq-list article").forEach((item) => {
    item.querySelector("button").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}
function collections() {
  const catalog = document.querySelector(".catalog-products");
  if (!catalog) return;
  const categories = [
    "Dresses",
    "Tops",
    "Bottoms",
    "Co-ords",
    "Jackets",
    "Accessories",
  ];
  const colors = ["Black", "White", "Beige", "Red", "Blue"];
  const qs = new URLSearchParams(location.search);
  let state = {
    category: qs.get("category") || "",
    size: "",
    color: "",
    sort: "newest",
    page: 1,
  };
  const filter = document.querySelector('[data-filter="category"]');
  filter.innerHTML = categories
    .map(
      (x) =>
        `<label><input type="checkbox" value="${x}" ${state.category === x ? "checked" : ""}>${x}</label>`,
    )
    .join("");
  document.querySelector('[data-filter="size"]').innerHTML = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
  ]
    .map((x) => `<label><input type="checkbox" value="${x}">${x}</label>`)
    .join("");
  document.querySelector('[data-filter="color"]').innerHTML = colors
    .map(
      (x) =>
        `<label><input type="checkbox" value="${x}"><span class="color-dot" style="background:${x === "Beige" ? "#d9cbbe" : x.toLowerCase()}"></span>${x}</label>`,
    )
    .join("");
  function render() {
    let list = products.filter(
      (p) =>
        (!state.category || p.category === state.category) &&
        (!state.color || p.color === state.color),
    );
    if (state.sort === "low") list.sort((a, b) => a.price - b.price);
    if (state.sort === "high") list.sort((a, b) => b.price - a.price);
    const per = 6,
      pages = Math.ceil(list.length / per) || 1;
    state.page = Math.min(state.page, pages);
    catalog.innerHTML =
      list
        .slice((state.page - 1) * per, state.page * per)
        .map(card)
        .join("") || "<p>No pieces match these filters.</p>";
    document.querySelector(".product-total").textContent =
      `${list.length} piece${list.length === 1 ? "" : "s"}`;
    document.querySelector(".pagination").innerHTML = Array.from(
      { length: pages },
      (_, i) =>
        `<button class="${state.page === i + 1 ? "active" : ""}" data-page-num="${i + 1}">${i + 1}</button>`,
    ).join("");
    document.querySelectorAll("[data-page-num]").forEach(
      (b) =>
        (b.onclick = () => {
          state.page = +b.dataset.pageNum;
          render();
          scrollTo({ top: 0, behavior: "smooth" });
        }),
    );
    bindProductActions(catalog);
  }
  document
    .querySelectorAll(".filter-group-title")
    .forEach(
      (b) => (b.onclick = () => b.parentElement.classList.toggle("open")),
    );
  document.querySelectorAll(".filter-options input").forEach(
    (input) =>
      (input.onchange = () => {
        const type = input.closest(".filter-options").dataset.filter;
        state[type] = input.checked ? input.value : "";
        state.page = 1;
        render();
      }),
  );
  document.querySelector(".sort-select").onchange = (e) => {
    state.sort = e.target.value;
    render();
  };
  document.querySelector(".clear-filters").onclick = () => {
    state = { category: "", size: "", color: "", sort: "newest", page: 1 };
    document
      .querySelectorAll(".filter-options input")
      .forEach((x) => (x.checked = false));
    render();
  };
  document.querySelector(".filter-trigger").onclick = () =>
    document.querySelector(".filters").classList.add("show");
  document.querySelector(".filter-close").onclick = () =>
    document.querySelector(".filters").classList.remove("show");
  render();
}
function productPage() {
  const target = document.querySelector(".product-detail");
  if (!target) return;
  const id = +(new URLSearchParams(location.search).get("id") || 1),
    p = products.find((x) => x.id === id) || products[0];
  let size = "M",
    color = p.color;
  target.innerHTML = `<div class="product-gallery"><div class="thumbs">${[p.image, p.image + "#a", p.image + "#b"].map((src, i) => `<button class="${i === 0 ? "active" : ""}" data-image="${p.image}"><img src="${src}" alt="${p.name} view ${i + 1}"></button>`).join("")}</div><div class="main-product-image"><img src="${p.image}" alt="${p.name}"></div></div><section class="product-copy"><p class="eyebrow">${p.category}</p><h1>${p.name}</h1><p class="product-price">${money(p.price)}</p><p class="product-description">${p.desc}</p><span class="option-label">Size: <b class="selected-size">M</b></span><div class="size-options">${["XS", "S", "M", "L", "XL"].map((x) => `<button class="${x === "M" ? "selected" : ""}" data-size="${x}">${x}</button>`).join("")}</div><span class="option-label">Colour: <b class="selected-color">${p.color}</b></span><div class="color-options">${[
    p.color,
    "Black",
    "Ivory",
  ]
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(
      (x) =>
        `<button class="${x === p.color ? "selected" : ""}" data-color="${x}">${x}</button>`,
    )
    .join(
      "",
    )}</div><div class="product-actions"><button class="btn btn-dark add-detail">Add to bag</button><button class="wishlist" aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button></div><div class="accordion">${[
    [
      "Fabric & Care",
      "Made in a premium blend selected for its softness and drape. Dry clean or hand wash separately in cold water.",
    ],
    [
      "Size & Fit",
      "Designed for a relaxed yet considered fit. Choose your regular size; refer to our size guide for garment measurements.",
    ],
    [
      "Shipping & Returns",
      "Complimentary shipping within India on orders above ₹5,000. Returns are accepted within 14 days of delivery.",
    ],
  ]
    .map(
      (x) =>
        `<button>${x[0]} <i class="fa-solid fa-plus"></i></button><p>${x[1]}</p>`,
    )
    .join("")}</div></section>`;
  target.querySelectorAll("[data-size]").forEach(
    (b) =>
      (b.onclick = () => {
        size = b.dataset.size;
        target
          .querySelectorAll("[data-size]")
          .forEach((x) => x.classList.remove("selected"));
        b.classList.add("selected");
        target.querySelector(".selected-size").textContent = size;
      }),
  );
  target.querySelectorAll("[data-color]").forEach(
    (b) =>
      (b.onclick = () => {
        color = b.dataset.color;
        target
          .querySelectorAll("[data-color]")
          .forEach((x) => x.classList.remove("selected"));
        b.classList.add("selected");
        target.querySelector(".selected-color").textContent = color;
      }),
  );
  target.querySelector(".add-detail").onclick = () =>
    addCart(p.id, size, color);
  target.querySelector(".wishlist").onclick = (e) =>
    (e.currentTarget.innerHTML = '<i class="fa-solid fa-heart"></i>');
  target
    .querySelectorAll(".accordion button")
    .forEach((b) => (b.onclick = () => b.classList.toggle("open")));
  const related = document.querySelector(".related-products");
  related.innerHTML = products
    .filter((x) => x.id !== p.id)
    .slice(0, 4)
    .map(card)
    .join("");
  bindProductActions(related);
}
function cartPage() {
  const host = document.querySelector(".cart-items");
  if (!host) return;
  function render() {
    const cart = getCart(),
      total = cart.reduce(
        (s, i) => s + (products.find((p) => p.id === i.id)?.price || 0) * i.qty,
        0,
      ),
      shipping = total === 0 ? 0 : total >= 5000 ? 0 : 199;
    host.innerHTML = cart.length
      ? cart
          .map((i) => {
            const p = products.find((x) => x.id === i.id);
            return `<article class="cart-row"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>Size ${i.size} · ${i.color}</p><p>${money(p.price)}</p><div class="quantity"><button data-change="${p.id}" data-size="${i.size}" data-delta="-1">−</button><span>${i.qty}</span><button data-change="${p.id}" data-size="${i.size}" data-delta="1">+</button></div></div><div><strong>${money(p.price * i.qty)}</strong><button class="remove-item" data-remove="${p.id}" data-size="${i.size}">Remove</button></div></article>`;
          })
          .join("")
      : '<div class="empty-cart">Your bag is waiting for its first beautiful piece.</div>';
    document.querySelector(".subtotal").textContent = money(total);
    document.querySelector(".shipping").textContent = shipping
      ? "₹199"
      : "Complimentary";
    document.querySelector(".total").textContent = money(total + shipping);
    host.querySelectorAll("[data-change]").forEach(
      (b) =>
        (b.onclick = () => {
          let c = getCart(),
            i = c.find(
              (x) => x.id === +b.dataset.change && x.size === b.dataset.size,
            );
          i.qty += +b.dataset.delta;
          c = c.filter((x) => x.qty > 0);
          setCart(c);
          render();
        }),
    );
    host.querySelectorAll("[data-remove]").forEach(
      (b) =>
        (b.onclick = () => {
          setCart(
            getCart().filter(
              (x) => !(x.id === +b.dataset.remove && x.size === b.dataset.size),
            ),
          );
          render();
        }),
    );
  }
  document.querySelector(".checkout").onclick = () =>
    toast("Checkout is ready for your payment provider.");
  render();
}
function forms() {
  document
    .querySelectorAll(".newsletter-form,.contact-form,.auth-form")
    .forEach((form) =>
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const msg = form.querySelector(".form-message");
        if (!form.checkValidity()) {
          msg.textContent = "Please complete the required fields correctly.";
          msg.style.color = "#a10f2b";
          form.reportValidity();
          return;
        }
        msg.style.color = "inherit";
        msg.textContent = form.classList.contains("newsletter-form")
          ? "You are on the list. Welcome to Kalaah."
          : document.body.dataset.page === "contact"
            ? "Thank you. Your note has been sent."
            : document.body.dataset.page === "forgot"
              ? "Your reset link is on its way."
              : "All set. Welcome to Kalaah.";
        form.reset();
      }),
    );
}
header();
footer();
updateCount();
home();
heroSlider();
motionShowcase();
faqs();
collections();
productPage();
cartPage();
forms();
