var menu = document.querySelector(".main-nav");
var menuButton = document.querySelector(".page-header__burger");

menuButton.classList.remove("burger--hide");
menu.classList.remove("main-nav--show");
menu.classList.add("main-nav--absolute");


menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--show");
  menuButton.classList.toggle("burger--close");
});












ymaps.ready(function () {
  document.querySelector('.contacts__map-img').getElementsByClassName.display = 'none';
  var mapCenter = [59.938850, 30.323100];
  var iconCenter = mapCenter;
  var iconImageSize = [62, 53];
  var iconImageOffset = [-25, -50];

  if (document.body.clientWidth >= '768') {
    iconImageSize = [124, 106];
    iconImageOffset = [-60, -100];
  }

  if (document.body.clientWidth >= '1300') {
    mapCenter = [59.939000, 30.319555];
  }

  var myMap = new ymaps.Map('map', {
          center: mapCenter,
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      });

  var myPlacemark = new ymaps.Placemark(iconCenter, {
          hintContent: 'Магазин функционального питания для котов "Cat Energy"',
          balloonContent: 'ул. Большая Конюшенная, д. 19/8, Санкт-Петербург'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/map-pin.png',
          // Размеры метки.
          iconImageSize: iconImageSize,
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: iconImageOffset
      });

  myMap.geoObjects.add(myPlacemark);

});
