const data = [
  {
    id: 1,
    name: "Armani Exchange",
    img: "https://m.media-amazon.com/images/I/71uh+E6zyeL._UL1500_.jpg",
    price: 12000,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Fast Track",
    img: "https://m.media-amazon.com/images/I/71fN5Lk1sQL._UY679_.jpg",
    price: 5000,
    cat: "Dress",
  },
  {
    id: 3,
    name: "Titan",
    img: "https://m.media-amazon.com/images/I/713HTsZBZcL._UY679_.jpg",
    price: 6000,
    cat: "Casual",
  },
  {
    id: 4,
    name: "Fossil",
    img: "https://m.media-amazon.com/images/I/51lYxwTMq4L._UL1000_.jpg",
    price: 9000,
    cat: "Luxury",
  },
  {
    id: 5,
    name: "Casio",
    img: "https://m.media-amazon.com/images/I/71uh+E6zyeL._UL1500_.jpg",
    price: 10000,
    cat: "Casual",
  },
  {
    id: 5,
    name: "Swiss Military",
    img: "https://m.media-amazon.com/images/I/61h-1zs6nHL._UY679_.jpg",
    price: 20000,
    cat: "Luxury",
  },
  {
    id: 5,
    name: "Fossil Sports",
    img: "https://m.media-amazon.com/images/I/71oshJ0rrSS._UX679_.jpg",
    price: 11000,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Timex",
    img: "https://m.media-amazon.com/images/I/813zxeJIeoS._UY679_.jpg",
    price: 3000,
    cat: "Casual",
  },
  {
    id: 5,
    name: "Fire-Boltt",
    img: "https://m.media-amazon.com/images/I/41D85m0hGIL._SX300_SY300_QL70_FMwebp_.jpg",
    price: 4000,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Titan",
    img: "https://m.media-amazon.com/images/I/71cMHKKyNdL._UY879_.jpg",
    price: 5000,
    cat: "Dress",
  },
  {
    id: 5,
    name: "Emporio Armani Gun-Metal ",
    img: "https://m.media-amazon.com/images/I/614yBk2UsdL._UX679_.jpg",
    price: 23000,
    cat: "Luxury",
  },
  {
    id: 5,
    name: "Diesel",
    img: "https://m.media-amazon.com/images/I/61TTluRCTlL._UY679_.jpg",
    price: 11500,
    cat: "Casual",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const CategoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

//to display products
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
        <div class="product">
        <img
          src=${product.img}
          alt="watch"
        />
        <span class="name">${product.name}</span>
        <span class="priceValue">${product.price}</span>
        </div>
        `
    )
    .join("");
};
displayProducts(data);

//to filter in search
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

//set the categories
const setCategories = () => {
  //to get all categories
  const allCats = data.map((item) => item.cat);
  // console.log(allCats)
  //to get all filter categories
  const categories = [
    "All",
    ...allCats.filter((item, index) => {
      return allCats.indexOf(item) === index;
    }),
  ];
  CategoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
    <span class="cat">${cat}</span>
    `
    )
    .join("");

  //to add click event for each categories
  CategoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "₹" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "₹" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
