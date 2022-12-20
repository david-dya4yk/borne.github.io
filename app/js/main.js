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
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 50,
      containerModifierClass: "teams-",
      slideClass: "teams-slide",
      wrapperClass: "teams-wrapper",
    });

    $(".header__btn").on("click", function () {
      $("header").toggleClass("header__menu");
      // $(this).addClass("header__btn--active");
    });

    Fancybox.bind("[data-fancybox]", {});
  })()
);
