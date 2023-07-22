import './assets/scss/all.scss';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 0,

  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});