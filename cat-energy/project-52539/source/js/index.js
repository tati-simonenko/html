var catPictureBefore = document.querySelector(".example__picture-wrapper--before");
var catPictureAfter = document.querySelector(".example__picture-wrapper--after");
var buttonBefore = document.querySelector(".example__button-box-input--before");
var buttonAfter = document.querySelector(".example__button-box-input--after");

buttonBefore.addEventListener("click", function () {
  catPictureBefore.classList.add("example__picture-wrapper--show");
  catPictureAfter.classList.remove("example__picture-wrapper--show");
});

buttonAfter.addEventListener("click", function () {
  catPictureAfter.classList.add("example__picture-wrapper--show");
  catPictureBefore.classList.remove("example__picture-wrapper--show");
});
