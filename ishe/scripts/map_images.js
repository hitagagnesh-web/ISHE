/*************************************************
 * IMAGE MAP
 *************************************************/
window.IMAGES_MAP = {
  cleanser: "images/cleanser.jpg",
  moisturizer: "images/moisturizer.jpg",
  serum: "images/serum.jpg",
  sunscreen: "images/sunscreen.jpg",
  lipbalm: "images/lipbalm.jpg"
};

/*************************************************
 * PRODUCTS (FOR INDEX PAGE PREVIEW)
 *************************************************/
const INDEX_PRODUCTS = [
  {
    name: "Hydrating Cleanser",
    price: 299,
    img: IMAGES_MAP.cleanser,
    desc: "A gentle cleanser that deeply hydrates and refreshes skin."
  },
  {
    name: "Daily Moisturizer",
    price: 499,
    img: IMAGES_MAP.moisturizer,
    desc: "Lightweight moisturizer for all-day hydration."
  },
  {
    name: "Face Serum",
    price: 699,
    img: IMAGES_MAP.serum,
    desc: "Boosts glow and improves skin texture."
  },
  {
    name: "SPF 50 Sunscreen",
    price: 599,
    img: IMAGES_MAP.sunscreen,
    desc: "Protects skin from harmful UV rays."
  },
  {
    name: "Lip Balm",
    price: 199,
    img: IMAGES_MAP.lipbalm,
    desc: "Nourishes and repairs dry lips."
  }
];

/*************************************************
 * RENDER PRODUCTS ON INDEX PAGE
 *************************************************/
const container = document.getElementById("products");

if (container) {
  INDEX_PRODUCTS.forEach(p => {
    container.innerHTML += `
      <div class="card" onclick='openPreview(${JSON.stringify(p)})'>
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

/*************************************************
 * PREVIEW MODAL LOGIC (INDEX ONLY)
 *************************************************/
let selectedProduct = null;

function openPreview(p) {
  selectedProduct = p;
  document.getElementById("previewImg").src = p.img;
  document.getElementById("previewName").innerText = p.name;
  document.getElementById("previewDesc").innerText = p.desc;
  document.getElementById("previewPrice").innerText = "₹" + p.price;
  document.getElementById("previewModal").style.display = "block";
}

function closePreview() {
  document.getElementById("previewModal").style.display = "none";
}

function addCartFromPreview() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

function addWishFromPreview() {
  let wish = JSON.parse(localStorage.getItem("wishlist")) || [];
  wish.push(selectedProduct);
  localStorage.setItem("wishlist", JSON.stringify(wish));
  alert("Added to Wishlist");
}
