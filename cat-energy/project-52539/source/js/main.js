var mainNav = document.querySelector(".main-nav");
var toggleNav = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

toggleNav.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");
});
