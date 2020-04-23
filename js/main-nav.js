(function () {
  var pageLogo = document.querySelector('.page-header__logo');
  var mainNav = document.querySelector('.main-nav');
  var mainNavOpen = mainNav.querySelector('.main-nav__open');
  var mainNavClose = mainNav.querySelector('.main-nav__close');
  var mainNavLinks = mainNav.querySelectorAll('.main-nav__link');

  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.add('main-nav--closed');
  pageLogo.classList.add('page-header__logo--closed');

  var openNav = function() {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    pageLogo.classList.add('page-header__logo--opened');
  };

  var closeNav = function() {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    pageLogo.classList.remove('page-header__logo--opened');
    pageLogo.classList.add('page-header__logo--closed');
  };

  mainNavOpen.addEventListener('click', function() {
    openNav();
  });

  mainNavClose.addEventListener('click', function() {
    closeNav();
  });

  mainNavLinks.forEach(function (item) {
    item.addEventListener('click', function() {
      closeNav();
    });
  });
})();
