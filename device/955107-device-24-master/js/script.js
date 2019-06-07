var write = document.querySelector(".write-button");
var form = document.querySelector(".write-us");
var close = document.querySelector(".modal-close");
var you = form.querySelector("[name=name]");
var correct = form.querySelector("form");
var mail = form.querySelector("[name=email]");

var mapopen = document.querySelector(".button-map");
var mapform = document.querySelector(".map-popup");
var mapclose = mapform.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

mapopen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapform.classList.add("modal-show");
    });
    
mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapform.classList.remove("modal-show"); 
    });

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
    if (mapform.classList.contains("modal-show")) {
    evt.preventDefault();
    mapform.classList.remove("modal-show");
    }
}
});


write.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.add("modal-show");
    you.focus();
    if (storage) {
        you.value = storage;
        mail.focus();
} 
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.remove("modal-show"); 
    form.classList.remove("modal-error");
});


correct.addEventListener("submit", function (evt) {
if (!you.value || !mail.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
} else {
    if (isStorageSupport) {
    localStorage.setItem("name", you.value);
    }
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
    if (form.classList.contains("modal-show")) {
    evt.preventDefault();
    form.classList.remove("modal-show");
    form.classList.remove("modal-error");
    }
}
});