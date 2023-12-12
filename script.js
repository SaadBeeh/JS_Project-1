// document.addEventListener("DOMContentLoaded", function () {
//   let search = document.querySelector("#search");
//   let searchBtn = document.querySelector("#search-icon");

//   searchBtn.onclick = () => {
//     search.classList.toggle("active");
//   };
// });
var cart = document.querySelector(".cart-H");
var userCard = document.querySelector(".user");

document.querySelector(".cart-btn").onclick = () => {
  cart.classList.toggle("active");
  userCard.classList.remove("active");
};

document.querySelector(".user-btn").onclick = () => {
  userCard.classList.toggle("active");
  cart.classList.remove("active");
};
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const url = "./products.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const { id, name, image, rating, price } = item;

        const productContainer = document.querySelector(".products-container");

        const newProduct = document.createElement("div");
        newProduct.classList.add("box");

        newProduct.innerHTML = `
        <img src="${image}" alt="${name}" />
        <div class="content">
          <h2>${name}</h2>
          <box-icon type="solid" name="star"></box-icon>
          <box-icon type="solid" name="star"></box-icon>
          <box-icon type="solid" name="star"></box-icon>
          <box-icon type="solid" name="star"></box-icon>
          <box-icon name="star-half" type="solid"></box-icon>
          <br />
          <span>EGP ${price} </span>
          <box-icon name="cart-download" type="solid"></box-icon>
        </div>
      `;

        productContainer.appendChild(newProduct);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
