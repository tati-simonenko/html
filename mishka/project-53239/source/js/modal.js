var orderBtn = document.querySelectorAll(".features__btn");
var modalCart = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
}

if(overlay) {
  overlay.addEventListener("click", function() {
    modalCart.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    modalCart.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  }
});
