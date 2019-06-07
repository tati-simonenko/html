var link = document.querySelector(".contacts-us");
var popup = document.querySelector(".contacts");
var close = popup.querySelector(".modal-cross")
var form = popup.querySelector(".contacts-form")
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("contacts-show")
  if (storage) {
 userName.value = storage;
 email.focus();
} else {
 userName.focus();
  }
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("contacts-show");
popup.classList.remove("contacts-error");
if (storage) {
  userName.value = storage;
}
});

form.addEventListener("submit", function (evt) {
if (!userName.value || !email.value) {
evt.preventDefault();
popup.classList.remove("contacts-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("contacts-error");
} else {
  if (isStorageSupport) {
localStorage.setItem("name", userName.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
 evt.preventDefault();
 if (popup.classList.contains("contacts-show")) {
   popup.classList.remove("contacts-show");
   popup.classList.remove("contacts-error");
 }
}
});
