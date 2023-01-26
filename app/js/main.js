$(
  (function () {
    console.log(123)
    $(".header__btn").on("click", function () {
      $(".header__content").toggleClass("header__content--active");
      $("body").toggleClass("body__hidden");
    });

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
      loop: false,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 50,
      containerModifierClass: "teams",
      slideClass: "teams-slide",
      wrapperClass: "teams-wrapper",

      breakpoints: {
        300:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600:{
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 2,
          spaceBetween: 50,
        }
      }
    });

    (function quantityProducts() {
      var $quantityArrowMinus = $(".single__minus");
      var $quantityArrowPlus = $(".single__plus");
      var $quantityNum = $(".single__num");
  
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
  
      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }
  
      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();

    $(".tabs__link").on("click", function (e) {
      e.preventDefault();
      $(".tabs__link").removeClass("tabs__link--active");
      $(this).addClass("tabs__link--active");
  
      $(".tabs__item").removeClass("tabs__item--active");
      $($(this).attr("href")).addClass("tabs__item--active");
    });

  



    Fancybox.bind("[data-fancybox]", {});
  })() 
);
