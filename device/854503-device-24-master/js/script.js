var minimap = document.querySelector(".minimap");
var modal_map = document.querySelector(".modal-map");
var modal_map_close = document.querySelector(".modal-close");
var writeus = document.querySelector(".write-us-toggle");
var modal_writeus = document.querySelector(".modal-writeus");
var modal_writeus_close = document.querySelector(".modal-writeus-close");
var form_writeus = document.querySelector(".form-writeus");
var user_name = document.querySelector("[name=name]");
var user_email = document.querySelector("[name=e-mail]");
var message_text = document.querySelector("[name=text]");
var first_link = document.querySelector(".first-link");
var catalog_container = document.querySelector(".catalog-container");

first_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  catalog_container.classList.toggle("catalog-container-show");
});

minimap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.add("modal-show");
});

modal_map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
});

writeus.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modal_writeus.classList.contains("modal-error")) {
    modal_writeus.classList.remove("modal-error");
  }
  modal_writeus.classList.toggle("modal-show");
});

modal_writeus_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_writeus.classList.remove("modal-show");
  modal_writeus.classList.remove("modal-error");
});

form_writeus.addEventListener("submit", function (evt) {
  if (!user_name.value || !user_email.value || !message_text.value) {
    evt.preventDefault();
    modal_writeus.classList.remove("modal-error");
    modal_writeus.offsetWidth = modal_writeus.offsetWidth;
    modal_writeus.classList.add("modal-error");
  }
});