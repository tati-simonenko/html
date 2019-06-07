var link = document.querySelector(".main-button-email");

var popupwindow = document.querySelector(".modal-window");
var popupwinclose = document.querySelector(".close-write-us");
//блок слайдов внизу странцы на главной
var rd = document.querySelector(".label-delivery");
var ds = document.querySelector(".delivery-slider");

var rw = document.querySelector(".label-warranty");
var ws = document.querySelector(".warranty-slider");

var rc = document.querySelector(".label-credit");
var cs = document.querySelector(".credit-slider");

//слайды на главной
var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");

var radioslider1 = document.querySelector(".label-radio-1");
var radioslider2 = document.querySelector(".label-radio-2");

var buttonleft = document.querySelector(".button-left");
var buttonright = document.querySelector(".button-right");

//Карта
var modalmap = document.querySelector(".modal-map")

var buttonmap = document.querySelector(".office-map")

var closemap = document.querySelector(".close-map")

//модалка в каталоге
var modalwindow = document.querySelector(".modalwindow-catalog");

var modalclose = document.querySelector(".modalwindow-close");
var modalcontinue = document.querySelector(".continue");

var buy = document.querySelectorAll(".buy");

buttonleft.addEventListener("click", function (evt) {
  slider2.classList.remove("slider-show");
  slider1.classList.add("slider-show");
  radioslider2.classList.remove("radio-main-slider-active");
  radioslider1.classList.add("radio-main-slider-active");
})

buttonright.addEventListener("click", function (evt) {
  slider1.classList.remove("slider-show");
  slider2.classList.add("slider-show");
  radioslider1.classList.remove("radio-main-slider-active");
  radioslider2.classList.add("radio-main-slider-active");
})

radioslider1.addEventListener("click", function (evt) {
  slider2.classList.remove("slider-show");
  slider1.classList.add("slider-show");
  radioslider2.classList.remove("radio-main-slider-active");
  radioslider1.classList.add("radio-main-slider-active");
})

radioslider2.addEventListener("click", function (evt) {
  slider1.classList.remove("slider-show");
  slider2.classList.add("slider-show");
  radioslider1.classList.remove("radio-main-slider-active");
  radioslider2.classList.add("radio-main-slider-active");
})



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupwindow.classList.add("modal-window-show");
});

popupwinclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupwindow.classList.remove("modal-window-show");
})
//нижние слайды главной страницы
rd.addEventListener("click", function (evt) {
  ws.classList.remove("warranty-slider-show");
  cs.classList.remove("credit-slider-show");
  ds.classList.add("delivery-slider-show");
})

rw.addEventListener("click", function (evt) {
  cs.classList.remove("credit-slider-show");
  ds.classList.remove("delivery-slider-show");
  ws.classList.add("warranty-slider-show");
})

rc.addEventListener("click", function (evt) {
  ws.classList.remove("warranty-slider-show");
  ds.classList.remove("delivery-slider-show");
  cs.classList.add("credit-slider-show");
})

//карта
buttonmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmap.classList.add("modal-map-show");
})

closemap.addEventListener("click", function (evt) {
  modalmap.classList.remove("modal-map-show");
})

//модалка в каталоге
buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.add("modalwindow-catalog-show");
})

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.remove("modalwindow-catalog-show");
})

modalcontinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.remove("modalwindow-catalog-show");
})

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalwindow.classList.add("modalwindow-catalog-show");
})}
