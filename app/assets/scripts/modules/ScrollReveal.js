class ScrollRevealScript {
  constructor() {
    this.startScrollReveal();
  }

  startScrollReveal() {
    ScrollReveal().reveal(".steps__item", {
      scale: 1,
      duration: 1500,
      interval: 30,
      mobile: false,
      origin: "bottom",
      distance: "50px",
    });
    ScrollReveal().reveal(".js-slide-up", {
      scale: 1,
      duration: 1500,
      interval: 30,
      mobile: false,
      origin: "bottom",
      distance: "50px",
    });
    ScrollReveal().reveal(".js-slide-left-in", {
      scale: 1,
      duration: 1500,
      interval: 30,
      mobile: false,
      origin: "left",
      distance: "50px",
    });
    ScrollReveal().reveal(".js-slide-right-in", {
      scale: 1,
      duration: 1500,
      interval: 30,
      mobile: false,
      origin: "right",
      distance: "50px",
    });
    ScrollReveal().reveal(".js-scale-up", {
      
      // distance: "200px",
      duration: 1000,
      easing: "ease-in",
      scale: 0.5,
      origin: "left",
      opacity: 0.05,
    });
  }
}

export default ScrollRevealScript;
