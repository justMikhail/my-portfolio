'use strict';

const navLinks = document.querySelectorAll('.nav__link[data-goto]');
const navBurgerIcon = document.querySelector('.nav-burger-icon');
const navListWrapper = document.querySelector('.nav__list-wrapper');

const ibg = () => {
  let ibg=document.querySelectorAll(".ibg");

  for (let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}

const onNavLinkClick = (evt) => {
  evt.preventDefault();
  const menuLink = evt.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const currentNavLink = document.querySelector(menuLink.dataset.goto);
    const currentNavLinkValue = currentNavLink.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    if (navBurgerIcon.classList.contains('nav-burger-icon--opened')) {
      document.body.classList.remove('scroll-lock');
      navBurgerIcon.classList.toggle('nav-burger-icon--closed');
      navBurgerIcon.classList.toggle('nav-burger-icon--opened');
      navListWrapper.classList.toggle('nav__list-wrapper--opened');
      navListWrapper.classList.toggle('nav__list-wrapper--closed');
    }

    window.scrollTo({
      top: currentNavLinkValue,
      behavior: "smooth"
    });
  }
}

const onNavLinkClickHandler = () => {
  if (navLinks.length > 0) {
    navLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onNavLinkClick);
    });
  }
}

const onNavBurgerIconCLick = (evt) => {
  evt.preventDefault();
  document.body.classList.toggle('scroll-lock');
  navBurgerIcon.classList.toggle('nav-burger-icon--closed');
  navBurgerIcon.classList.toggle('nav-burger-icon--opened');
  navListWrapper.classList.toggle('nav__list-wrapper--closed');
  navListWrapper.classList.toggle('nav__list-wrapper--opened');
}

const onNavBurgerIconCLickHandler = (BurgerIcon) => {
  if (BurgerIcon) {
    BurgerIcon.addEventListener("click", onNavBurgerIconCLick);
  }
}

onNavBurgerIconCLickHandler(navBurgerIcon);
onNavLinkClickHandler();
ibg();
