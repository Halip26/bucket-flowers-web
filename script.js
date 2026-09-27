// flower bucket collection
const flowers = [
  {
    title: "Blush Romance",
    image:
      "https://i.pinimg.com/736x/5d/00/7f/5d007f5147869df51eb97ea6fcc0eed9.jpg",
    desc: "A soft and romantic mix of blush pink blooms, perfect for birthdays, congratulations, or simply making someone smile.",
    price: "Rp 185.000",
    stars: 5,
    rating: "5.0",
    stock: "Available",
  },
  {
    title: "Bucket Daisy",
    image: "assets/bucket1.jpg",
    desc: "A cheerful mix of yellow, pink and white daisies, perfect for brightening up any space.",
    price: "Rp 400.000",
    stars: 5,
    rating: "5.0",
    stock: "Available",
  },
  {
    title: "Blue Daisy",
    image:
      "https://i.pinimg.com/736x/1f/c2/9b/1fc29bdea2fd081c64b03657a1826872.jpg",
    desc: "Cheerful yellow and white flowers arranged into a bright bucket that brings a little sunshine to any room.",
    price: "Rp 150.000",
    stars: 4,
    rating: "4.8",
    stock: "Available",
  },
  {
    title: "White Bouquet",
    image:
      "https://i.pinimg.com/736x/48/c9/22/48c922d52b06254bd37804bed6a2fe20.jpg",
    desc: "An elegant lavender-toned arrangement with a calm, dreamy character. A lovely choice for a thoughtful gift.",
    price: "Rp 210.000",
    stars: 5,
    rating: "4.9",
    stock: "Available",
  },
  {
    title: "White Elegance",
    image:
      "https://i.pinimg.com/736x/14/e9/7e/14e97eeaa207423a606815d98074ec36.jpg",
    desc: "Clean, graceful white blooms with a timeless look. Minimal, classy, and easy to love.",
    price: "Rp 225.000",
    stars: 5,
    rating: "5.0",
    stock: "Available",
  },
  {
    title: "Green Bouquet",
    image:
      "https://i.pinimg.com/1200x/fd/7d/f8/fd7df896931640c7a432ce5fd21b77e6.jpg",
    desc: "A unique and modern aesthetic featuring lush eucalyptus leaves, succulents, and subtle pastel blooms. Fresh, vibrant, and full of natural life.",
    author: "Mike Thompson",
    price: "Rp 300.000",
    stars: 5,
    rating: 4.7,
    stock: "In Stock",
  },
  {
    title: "Garden Party",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
    desc: "A colorful garden-inspired bucket filled with fresh-looking blooms for celebrations and happy occasions.",
    price: "Rp 195.000",
    stars: 4,
    rating: "4.7",
    stock: "Available",
  },
  {
    title: "Pink Peony",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=85",
    desc: "A romantic pink arrangement with a soft, luxurious feel. Designed to make a beautiful first impression.",
    price: "Rp 250.000",
    stars: 5,
    rating: "4.9",
    stock: "Limited",
  },
];

const gridContainer = document.getElementById("flower-grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalStars = document.getElementById("modal-stars");
const modalRating = document.getElementById("modal-rating");
const modalPrice = document.getElementById("modal-price");
const modalStock = document.getElementById("modal-stock");
const closeBtn = document.querySelector(".close-btn");

function renderStars(stars) {
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}

flowers.forEach((item) => {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerHTML = `
    <div class="image-wrap">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="overlay">
        <span>View bouquet</span>
      </div>
      <span class="price-tag">${item.price}</span>
    </div>
    <div class="card-info">
      <div>
        <h3>${item.title}</h3>
        <div class="card-rating">
          <span class="stars">${renderStars(item.stars)}</span>
          <span>${item.rating}</span>
        </div>
      </div>
      <span class="arrow">↗</span>
    </div>
  `;

  card.addEventListener("click", () => {
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    modalStars.textContent = renderStars(item.stars);
    modalRating.textContent = `${item.rating} / 5`;
    modalPrice.textContent = item.price;
    modalStock.textContent = item.stock;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });

  gridContainer.appendChild(card);
});

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// update year to current year
document.getElementById("year").textContent = new Date().getFullYear();
