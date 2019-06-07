var order = document.querySelector('.product-week__order');
var close_order = document.querySelector('.modal__button');
var modal_form = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');

var basket_links_1 = document.querySelector('.catalog__basket-links--1');
var basket_links_2 = document.querySelector('.catalog__basket-links--2');
var basket_links_3 = document.querySelector('.catalog__basket-links--3');

var open = document.querySelector('.main-nav__toggle');
var site_list = document.querySelector('.main-nav__site-list');
var users_list = document.querySelector('.main-nav__users-list');


var mapContainer = document.querySelector('.contacts__map-box');
var img_box = document.querySelector('.contacts__img-box');

// mapContainer.classList.add('visually-hidden');

users_list.classList.remove('main-nav__users-list--nojs');
site_list.classList.remove('main-nav__site-list--nojs');
open.classList.remove('main-nav__toggle--nojs');

if (open) {
  open.addEventListener('click', function(event) {
    event.preventDefault();
    users_list.classList.toggle('main-nav__users-list--open');
    site_list.classList.toggle('main-nav__site-list--open');
    open.classList.toggle('main-nav__toggle-open');
  });
}

if (order) {
  order.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.add('modal--show');
    overlay.classList.add('modal-overlay--show');
  })

  close_order.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.remove('modal--show');
    overlay.classList.remove('modal-overlay--show');
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_from.classList.remove('modal--show');
      overlay.classList.remove('modal-overlay--show');
    }
  });
}

if (basket_links_1) {
  basket_links_1.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.add('modal--show');
    overlay.classList.add('modal-overlay--show');
  })

  close_order.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.remove('modal--show')
    overlay.classList.remove('modal-overlay--show');
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_from.classList.remove('modal--show');
      overlay.classList.remove('modal-overlay--show');
    }
  });
}

if (basket_links_2) {
  basket_links_2.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.add('modal--show');
    overlay.classList.add('modal-overlay--show');
  })

  close_order.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.remove('modal--show')
    overlay.classList.remove('modal-overlay--show');
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_from.classList.remove('modal--show');
      overlay.classList.remove('modal-overlay--show');
    }
  });
}

if (basket_links_3) {
  basket_links_3.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.add('modal--show');
    overlay.classList.add('modal-overlay--show');
  })

  close_order.addEventListener('click', function(event) {
    event.preventDefault();
    modal_form.classList.remove('modal--show')
    overlay.classList.remove('modal-overlay--show');
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_from.classList.remove('modal--show');
      overlay.classList.remove('modal-overlay--show');
    }
  });
}

if (mapContainer) {
  window.onload = function() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(59.9369, 30.3218)
    }
    var map = new google.maps.Map(mapContainer, mapOptions);
    var image = {
      url: "./../img/icon-map-pin.svg",
      scaledSize: new google.maps.Size(100, 100)
    }
    var myLatLng = new google.maps.LatLng(59.9363, 30.3217);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      optimized: false,
      icon: image
    });
  }
}
