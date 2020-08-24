import "owl.carousel";

class Slider {
  constructor() {
    this.initSlider();
  }

  initSlider() {
    $(".slider__inner-container").owlCarousel({
      autoplay: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      loop: true,
      autoplay: true,
      slideTransition: "linear",
      autoplayTimeout: 6000,
      autoplaySpeed: 6000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          margin: 15,
        },
        470: {
          items: 2,
          margin: 20,
        },
        720: {
          items: 3,
          margin: 20,
        },
        940: {
          items: 4,
          margin: 20,
        },
        1140: {
          items: 5,
          margin: 30,
        },
      },
    });
  }
}

export default Slider;
