// import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";

// Init Multi Slide Swiper
const swiper1 = new Swiper(".multi-slide-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1.9,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.2,
    },
    550: {
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 1.9,
      spaceBetween: 24,
    },
  },
});

// Init Single Slide Swiper

// init Swiper:
const swiper2 = new Swiper(".single-slide-swiper", {
  // configure Swiper to use modules
  modules: [Navigation],

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
