document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const navMenuContainer = document.querySelector(".nav__menu-container");

  hamburgerMenu.addEventListener("click", function () {
    navMenuContainer.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });
});
