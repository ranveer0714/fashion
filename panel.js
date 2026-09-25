const panelContent = {
  service: {
    ready: {
      eyebrow: "Ready to wear",
      title: "The <em>ready edit.</em>",
      image: "images/img3.jpg",
      intro:
        "Small-run pieces designed for the moments already on your calendar and the ones that appear at the last minute.",
      points: [
        "Limited seasonal collections",
        "Size guidance from the studio",
        "Prepared and delivered across India",
      ],
      action: "Shop new arrivals",
      link: "collections.html",
    },
    styling: {
      eyebrow: "Personal styling",
      title: "An outfit with a <em>point of view.</em>",
      image: "images/img15.jpg",
      intro:
        "Bring an occasion, a reference or simply a mood. We help you build a look that feels considered without looking overdone.",
      points: [
        "One-to-one styling conversation",
        "Silhouette and colour pairing",
        "A personal note after your session",
      ],
      action: "Plan a styling session",
      link: "contact.html",
    },
    "made-to-order": {
      eyebrow: "Made to order",
      title: "A Kalaah piece, <em>made closer to you.</em>",
      image: "images/img8.jpg",
      intro:
        "Selected styles can be refined for your preferred length, sleeve, finish or fit, with the same care we give every piece in our studio.",
      points: [
        "Fit and finishing consultation",
        "Selected design refinements",
        "Clear production timeline before we begin",
      ],
      action: "Start a request",
      link: "contact.html",
    },
    alterations: {
      eyebrow: "Alterations",
      title: "The difference is in the <em>last detail.</em>",
      image: "images/img4.jpg",
      intro:
        "A thoughtful adjustment changes how a garment sits, moves and stays with you. We help your Kalaah piece feel properly yours.",
      points: [
        "Hem and fit refinement",
        "Sleeve and length adjustments",
        "Care notes for long wear",
      ],
      action: "Ask the studio",
      link: "contact.html",
    },
  },
  material: {
    linen: {
      eyebrow: "Material counter",
      title: "Washed <em>linen.</em>",
      image: "images/img1.jpg",
      intro:
        "A breathable natural fibre with an easy, lived-in character. The one to reach for when you want polish without stiffness.",
      points: [
        "Best for: warm days and travel",
        "Feel: light, dry and breathable",
        "Care: gentle wash or dry clean",
      ],
      action: "See linen pieces",
      link: "collections.html?category=Dresses",
    },
    cotton: {
      eyebrow: "Material counter",
      title: "Soft <em>cotton.</em>",
      image: "images/img2.jpg",
      intro:
        "Comfort-forward and quietly refined, our soft cotton options are made for layering, long days and repeating often.",
      points: [
        "Best for: everyday layers",
        "Feel: natural and soft",
        "Care: cool wash, low iron",
      ],
      action: "See cotton pieces",
      link: "collections.html?category=Tops",
    },
    satin: {
      eyebrow: "Material counter",
      title: "Fluid <em>satin.</em>",
      image: "images/img3.jpg",
      intro:
        "Light catches differently on fluid satin. It skims the body, moves beautifully and brings understated drama to an evening plan.",
      points: [
        "Best for: dinners and occasions",
        "Feel: smooth and luminous",
        "Care: professional dry clean",
      ],
      action: "See occasion pieces",
      link: "collections.html?category=Evening%20Wear",
    },
    blend: {
      eyebrow: "Material counter",
      title: "Structured <em>blend.</em>",
      image: "images/img4.jpg",
      intro:
        "A considered blend that holds its shape while keeping the line modern and easy. Made for tailoring with a softer point of view.",
      points: [
        "Best for: clean tailoring",
        "Feel: smooth and composed",
        "Care: dry clean recommended",
      ],
      action: "See tailored pieces",
      link: "collections.html?category=Jackets",
    },
    knit: {
      eyebrow: "Material counter",
      title: "Fine rib <em>knit.</em>",
      image: "images/img6.jpg",
      intro:
        "Fine rib creates gentle definition without restriction. It is the quiet foundation of a wardrobe built for comfort and shape.",
      points: [
        "Best for: soft layering",
        "Feel: flexible and sculpted",
        "Care: hand wash cold",
      ],
      action: "See knit pieces",
      link: "collections.html?category=Co-ords",
    },
    weave: {
      eyebrow: "Material counter",
      title: "Textured <em>weave.</em>",
      image: "images/img9.jpg",
      intro:
        "A tactile fabric with just enough character to make a simple silhouette feel special. The texture does the talking.",
      points: [
        "Best for: statement separates",
        "Feel: tactile and distinctive",
        "Care: follow garment label",
      ],
      action: "See the collection",
      link: "collections.html",
    },
  },
};

function renderPanel() {
  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "service";
  const id = params.get("id") || "ready";
  const item = panelContent[type]?.[id] || panelContent.service.ready;
  document.title = `${item.title.replace(/<[^>]*>/g, "")} | Kalaah`;
  document.querySelector("[data-panel-page]").innerHTML =
    `<section class="panel-hero"><div class="panel-image"><img src="${item.image}" alt="${item.title.replace(/<[^>]*>/g, "")}" /></div><div class="panel-copy"><a class="panel-back" href="index.html#${type === "material" ? "materials" : "services"}"><i class="fa-solid fa-arrow-left"></i> Back to ${type === "material" ? "materials" : "services"}</a><p class="eyebrow">${item.eyebrow}</p><h1>${item.title}</h1><p>${item.intro}</p><ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul><a class="btn btn-dark" href="${item.link}">${item.action}</a></div></section>`;
}

renderPanel();
