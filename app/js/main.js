$(function(){
     new Swiper(".swiper",{
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            speed: 3000,
          },
        //   autoplay: {
        //     delay: 3000,
        //     },
     });
}());