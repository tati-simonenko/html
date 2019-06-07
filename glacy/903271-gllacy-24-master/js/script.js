var write = document.querySelector(".btn_write");
var popup = document.querySelector(".popup_window");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".popup_close");
var user_name = popup.querySelector("[name=your_name]");
var user_mail = popup.querySelector("[name=your_email]");


write.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup_show");
    overlay.classList.add("overlay_show")
    if (popup.classList.contains("popup_wrong")) {
        popup.classList.remove("popup_wrong");
    }
    user_name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup_show");
    overlay.classList.remove("overlay_show")
});


popup.addEventListener("submit", function (evt) {
    if (!user_name.value) {
        evt.preventDefault();
        console.log("Заполните все поля!");
        popup.classList.add("popup_wrong");
        ;
    } else if (!user_mail.value) {
        evt.preventDefault();
        console.log("Заполните все поля!");
        popup.classList.add("popup_wrong");
    }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("popup_show")) {
            popup.classList.remove("popup_show");
        }
    }
});