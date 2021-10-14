'use strict';

const navLinks = document.querySelectorAll('.nav__link[data-goto]');

const ibg = () => {
  let ibg=document.querySelectorAll(".ibg");

  for (let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}

const onMenuLinkClick = (evt) => {
  evt.preventDefault();
  const menuLink = evt.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const currentNavLink = document.querySelector(menuLink.dataset.goto);
    const currentNavLinkValue = currentNavLink.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: currentNavLinkValue,
      behavior: "smooth"
    });
  }
}

const onMenuLinkClickHandler = () => {
  if (navLinks.length > 0) {
    navLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });
  }
}

onMenuLinkClickHandler();
ibg();
