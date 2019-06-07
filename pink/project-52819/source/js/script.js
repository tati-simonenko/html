var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.main-nav__toggle');


pageHeader.classList.remove('main-nav--nojs');
pageHeader.classList.remove('main-nav--opened');
pageHeader.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('main-nav--closed')) {
        pageHeader.classList.remove('main-nav--closed');
        pageHeader.classList.add('main-nav--opened');
    } else {
        pageHeader.classList.add('main-nav--closed');
        pageHeader.classList.remove('main-nav--opened');
    }
});
