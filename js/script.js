"use strict";

const swiper = new Swiper(".slider-materials", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", function () {
  scrollY > 0
    ? document.querySelector(".header").classList.add("scroll")
    : document.querySelector(".header").classList.remove("scroll");
});




document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  console.log(targetItem);
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  } else if (targetItem.closest(".menu__link")) {
    document.documentElement.classList.toggle("menu-open");
  }
}
