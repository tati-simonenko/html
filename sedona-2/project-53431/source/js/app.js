(function () {
  var mainNavigation = document.querySelector('.main-nav');
  var mainNavigationToggle = document.querySelector('.main-nav__toggle');
  var headerToggle = document.querySelector('.header__toggle');

  headerToggle.addEventListener('click', function () {
    if (mainNavigation.classList.contains('main-nav--closed')) {
      mainNavigation.classList.remove('main-nav--closed');
      mainNavigation.classList.add('main-nav--opened');
    }
  });

  mainNavigationToggle.addEventListener('click', function () {
    mainNavigation.classList.remove('main-nav--opened');
    mainNavigation.classList.add('main-nav--closed');
  });


})();
