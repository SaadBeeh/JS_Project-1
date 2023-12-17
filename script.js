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
let UserName = document.querySelector("#UserName");
let user_btn = document.querySelector(".user-btn");
if (localStorage.getItem("username")) {
  UserName.innerHTML += ` ${localStorage.getItem(
    "username"
  )} <br> <a id='logout'>Logout</a>`;
  userCard.classList.remove("active");
}

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
  const url = "https://fakestoreapi.com/products";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const { id, title, image, rating, price } = item;

        const productContainer = document.querySelector(".products-container");

        const newProduct = document.createElement("div");
        newProduct.classList.add("box");

        newProduct.innerHTML = `
        <img src="${image}" alt="${title}" />
        <div class="content">
          <h2>${title}</h2>
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
UserName;
let username_Saved = localStorage.getItem("username");
let password_Saved = localStorage.getItem("Password");
let loginBtn = document.getElementById("login_btn");
let user_login = document.getElementById("UserName_login");
let password_login = document.getElementById("Password_login");
let logout_btn = document.getElementById("logout");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    username_Saved.trim() === user_login.value &&
    password_Saved === password_login.value
  ) {
    alert("Welcome!");
    userCard.classList.remove("active");
    UserName.style.display = "flex";
  } else {
    alert("Incorrect username or password.");
  }
});
logout_btn.addEventListener("click", () => {
  localStorage.clear();
  UserName.innerHTML = "";
});

// let register_btn = document.querySelector("#register");
// register_btn.addEventListener("click", () => {
//   alert("hello");
// });
// window.location.href = "index.html";
