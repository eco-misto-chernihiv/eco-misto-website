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
    nextEl: ".multi-swiper-button-next",
    prevEl: ".multi-swiper-button-prev",
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
      slidesPerView: 2.3,
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
    nextEl: ".single-swiper-button-next",
    prevEl: ".single-swiper-button-prev",
  },
});

// Init Team Member Swiper
const swiper3 = new Swiper(".team-members-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1.9,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".team-swiper-button-next",
    prevEl: ".team-swiper-button-prev",
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
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// Init Related Projects Swiper
const swiper4 = new Swiper(".related-projects-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 24,

  // Navigation arrows
  // TODO: Custom Names
  navigation: {
    nextEl: ".related-swiper-button-next",
    prevEl: ".related-swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "progressbar",
  // },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.3,
    },
    550: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
