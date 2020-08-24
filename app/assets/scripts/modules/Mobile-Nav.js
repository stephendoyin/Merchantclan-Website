class MobileNav {
  constructor() {
    this.NavMenu = document.querySelector(".nav__menu");
    this.nav = document.querySelector(".nav");
    this.menuBtn = document.querySelector(".nav__menu-icon");
    this.navMenuIconLine = document.querySelector(".nav__menu-icon__line");
    this.mobileEvent();
  }
  mobileEvent() {
    this.menuBtn.addEventListener("click", e => {
      this.navMenuIconLine.classList.toggle("nav__menu-icon__line--crossed");
      this.NavMenu.classList.toggle("nav__menu--show");
      this.nav.classList.add("nav__sticky", "bg-white", "shadow-sm");
    });
  }
}

export default MobileNav;
