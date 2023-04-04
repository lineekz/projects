document.addEventListener("DOMContentLoaded", () => {
    $(".auto__slider").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      });
    
      $(".teachers__wrapper").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      });
});