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
