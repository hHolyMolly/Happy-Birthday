function menuBurger() {
  const burger = document.getElementById("burger-icon");
  const burgerMenu = document.getElementById("menu-body");

  const body = document.body;

  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    burgerMenu.classList.toggle("_active");

    if (burgerMenu.classList.contains("_active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });
}

menuBurger();
