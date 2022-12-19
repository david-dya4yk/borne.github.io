// const { default: Swiper } = require("swiper");

$(
  (function () {
    new Swiper(".swiper", {
      direction: "vertical",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        speed: 3000,
      },
      autoplay: {
        delay: 3000,
      },
    });

    new Swiper(".teams", {
      loop: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 50,
      containerModifierClass: "teams-",
      slideClass: "teams-slide",
      wrapperClass: "teams-wrapper",
    });
    Fancybox.bind("[data-fancybox]", {});
  })()
);
