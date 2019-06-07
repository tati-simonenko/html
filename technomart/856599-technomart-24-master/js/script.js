(function () {
  var popup = document.querySelector(".modal-write-us");
  if (!popup) {
    return;
  }
  var button = document.querySelector(".main-contacts-button");
  var close = popup.querySelector(".close");

  var firstName = popup.querySelector("#name");
  var email = popup.querySelector("#email");
  var letter = popup.querySelector("#letter");
  var form = popup.querySelector(".form-modal-write-us");

  var storageName = "";
  var storageMail = "";
  var isStorageSupport = true;

  try {
    storageName = localStorage.getItem("name");
    storageMail = localStorage.getItem("email");
  }
  catch (err) {
    isStorageSupport = false;
  }

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storageName) {
      firstName.value = storageName;
    }
    if (storageMail) {
      email.value = storageMail;
    }
    if (!firstName.value) {
      firstName.focus();
    } else {
      if (!email.value) {
        email.focus();
      } else letter.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-error")
    popup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-error")
        popup.classList.remove("modal-show");
      }
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!firstName.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      setTimeout(function () {
        popup.classList.add("modal-error");
      }, 1);
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", firstName.value);
        localStorage.setItem("email", email.value);
      }
    }
  });
})();

(function () {
  var popupMap = document.querySelector(".modal-map");
  if (!popupMap) {
    return;
  }

  var buttonMap = document.querySelector(".main-contacts-map");
  var closeMap = popupMap.querySelector(".close");

  buttonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");

  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
      }
    }
  });
})();

(function () {
  if (!document.querySelector(".offer")) {
    return;
  }
  var slide = document.querySelectorAll(".slider");
  var buttonLeft = document.querySelector(".slider-button-left");
  var buttonRight = document.querySelector(".slider-button-right");

  var buttonLabel = document.querySelectorAll(".button-label");
  var buttonFirst = document.querySelector(".slider-button-first");
  var buttonSecond = document.querySelector(".slider-button-second");

  for (var j = 0; j < slide.length; j++) {
    subscribe(j);
  }

  function subscribe(j) {
    var button = buttonLabel[j];
    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (!button.classList.contains("button-checked")) {
        for (var i = 0; i < slide.length; i++) {
          slide[i].classList.toggle("slider-checked");
          buttonLabel[i].classList.toggle("button-checked");
        }
      }
    });
  }

  buttonLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var i = 0; i < slide.length; i++) {
      slide[i].classList.toggle("slider-checked");
      buttonLabel[i].classList.toggle("button-checked");
    }
  });

  buttonRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var i = 0; i < slide.length; i++) {
      slide[i].classList.toggle("slider-checked");
      buttonLabel[i].classList.toggle("button-checked");
    }
  });
})();

(function () {
  if (!document.querySelector(".services")) {
    return;
  }

  var buttonDelivery = document.querySelector(".button-delivery");
  var buttonWarranty = document.querySelector(".button-warranty");
  var buttonCredit = document.querySelector(".button-credit");

  var serviceDelivery = document.querySelector(".service-delivery");
  var serviceWarranty = document.querySelector(".service-warranty");
  var serviceCredit = document.querySelector(".service-credit");

  var metka = document.querySelector(".service-show");
  var metkaButton = document.querySelector(".button-active");

  buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!serviceDelivery.classList.contains("service-show")) {
      serviceDelivery.classList.add("service-show");
      buttonDelivery.classList.add("button-active");
      metka.classList.remove("service-show");
      metkaButton.classList.remove("button-active");

      metka = serviceDelivery;
      metkaButton = buttonDelivery;
    }
  });
  buttonWarranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!serviceWarranty.classList.contains("service-show")) {
      serviceWarranty.classList.add("service-show");
      buttonWarranty.classList.add("button-active");
      metka.classList.remove("service-show");
      metkaButton.classList.remove("button-active");

      metka = serviceWarranty;
      metkaButton = buttonWarranty;
    }
  });
  buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!serviceCredit.classList.contains("service-show")) {
      serviceCredit.classList.add("service-show");
      buttonCredit.classList.add("button-active");
      metka.classList.remove("service-show");
      metkaButton.classList.remove("button-active");

      metka = serviceCredit;
      metkaButton = buttonCredit;
    }
  });
})();

(function () {

  var popupCatalog = document.querySelector(".modal-message");
  if (!popupCatalog) {
    return;
  }
  var buttonCatalog = document.querySelectorAll(".button-buy");
  var closeCatalog = popupCatalog.querySelector(".close");
  var continueCatalog = popupCatalog.querySelector(".continue");
  var checkoutCatalog = popupCatalog.querySelector(".button");

  for (var i = 0; i < buttonCatalog.length; i++) {
    buttonCatalog[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupCatalog.classList.add("modal-show");
    });
  }

  checkoutCatalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.remove("modal-show");
  });

  closeCatalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.remove("modal-show");
  });

  continueCatalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupCatalog.classList.contains("modal-show")) {
        popupCatalog.classList.remove("modal-show");
      }
    }
  });
})();
