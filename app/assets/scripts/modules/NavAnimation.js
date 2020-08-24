class NavAnim {
  constructor() {
    this.navigation = document.querySelector(".nav");
    this.navMenu = document.querySelector(".nav__menu");
    this.scrollEvent();
    // this.NavMenu.classList.toggle("nav__menu--show")
  }

  scrollEvent() {
    window.addEventListener("scroll", e => {
      if (window.pageYOffset > 100) {
        this.navigation.classList.add("nav--sticky", "shadow-sm", "bg-white");
      } else if (window.pageYOffset < 100) {
        if (!this.navMenu.classList.contains("nav__menu--show")) {
          this.navigation.classList.remove(
            "nav--sticky",
            "shadow-sm",
            "bg-white"
          );
        }
      }
    });
  }
}

export default NavAnim;
