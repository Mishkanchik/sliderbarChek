var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000, 
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 15,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

