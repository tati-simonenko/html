  var popupForm = document.querySelector(".btn-contacts");
  var popup = document.querySelector(".popup-write-us");
  var close = popup.querySelector(".popup-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  popupForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
        login.focus();
        }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

  /*Карта*/
  var mapLink = document.querySelector(".btn-map");
  var mapPopup = document.querySelector(".popup-map");
  var mapClose = mapPopup.querySelector(".popup-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("popup-show")) {
        mapPopup.classList.remove("popup-show");
      }
    }
  });

  /*Каталог НЕ  РАБОТАЕТ*/
  var popupBuy = document.querySelectorAll(".to-buy");
  var popupCatalog = popup.querySelector(".input-basket");
  var closeCatalog = popup.querySelector(".popup-close");
  var basket = popup.querySelector(".btn-input-basket");

  popupBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.add("popup-show");
    basket.focus();
  });

  /*
  closeCatalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.remove("popup-show");
    popupCatalog.classList.remove("popup-error");
  });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupCatalog.classList.contains("popup-show")) {
      popupCatalog.classList.remove("popup-show");
      popupCatalog.classList.remove("popup-error");
    }
  }
}); */
