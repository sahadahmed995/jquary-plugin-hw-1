$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    prevArrow: `.leftArrow`,
    nextArrow: `.rightArrow`,
    dotsClass: `mydots`,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
});
