class NavLink {
  constructor() {
    this.navLinks = document.querySelectorAll(".nav__link--js");
    this.navMenu = document.querySelector(".nav__menu");
    this.navMenuLine = document.querySelector(".nav__menu-icon__line");

    this.initClickEvent();
  }

  initClickEvent() {
    this.navLinks.forEach(element => {
      element.addEventListener("click", e => {
        if (this.navMenu.classList.contains("nav__menu--show")) {
          this.navMenu.classList.remove("nav__menu--show");
          this.navMenuLine.classList.remove("nav__menu-icon__line--crossed");
        }
      });
    });
  }
}

export default NavLink;
