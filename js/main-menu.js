/*  BAVIGATION*/

let burgerMenu = document.querySelector('.burger-menu');
let mainNav = document.querySelector('.burger-menu__navigation');
let burgerBtn = document.querySelector('.burger-menu__burger');

function  mainMenuListNoJS() {
	if (mainNav.classList.contains('burger-menu__navigation--nojs')) {
		mainNav.classList.remove('burger-menu__navigation--nojs')
	}
}


burgerBtn.addEventListener('click', function() {
	toggleMenu();
})

function toggleMenu() {
	burgerBtn.classList.toggle('burger-menu__burger--active');
	mainNav.classList.toggle('burger-menu__navigation--active');
	burgerMenu.classList.toggle('burger-menu--active');
}

mainMenuListNoJS();

/*LOGO HOVER*/

let logo = document.querySelector('.logo');
let logoImage = document.querySelector('.logo picture');
let logoSources = logoImage.children;

logo.addEventListener('mouseover', function() {
	logoHover();
});

logo.addEventListener('mouseout', function() {
	logoDefault();
})

logo.addEventListener('mousedown', function() {
	logoClick();
})

function logoHover() {
	logoSources[0].srcset = 'img/logo-desktop--hover.svg';
	logoSources[1].srcset = 'img/logo-tablet--hover.svg';
	logoSources[2].src = 'img/logo-mobile--hover.svg';
}

function logoDefault() {
	logo.style.opacity = '1';
	logoSources[0].srcset = 'img/logo-desktop.svg';
	logoSources[1].srcset = 'img/logo-tablet.svg';
	logoSources[2].src = 'img/logo-mobile.svg';
}

function logoClick() {
	logoDefault();
	logo.style.opacity = '0.3';
}

/* FOOTER-LOGO-HOVER */

let footerLogo = document.querySelector('.main-footer__logo');
let footerLogoImage = document.querySelector('.main-footer__logo picture');
let footerLogoSources = footerLogoImage.children;

footerLogo.addEventListener('mouseover', function() {
	footerLogoHover();
})

footerLogo.addEventListener('mouseout', function() {
	footerLogoDefault();
})

footerLogo.addEventListener('mousedown', function() {
	footerLogoClick();
})

function footerLogoHover() {
	footerLogoSources[0].srcset = 'img/footer-logo-desktop--hover.svg';
	footerLogoSources[1].srcset = 'img/footer-logo-tablet--hover.svg';
	footerLogoSources[2].src = 'img/footer-logo-mobile--hover.svg';
}

function footerLogoDefault() {
	footerLogo.style.opacity = '1';
	footerLogoSources[0].srcset = 'img/footer-logo-desktop.svg';
	footerLogoSources[1].srcset = 'img/footer-logo-tablet.svg';
	footerLogoSources[2].src = 'img/footer-logo-mobile.svg';
}

function footerLogoClick() {
	footerLogoDefault();
	footerLogo.style.opacity = '0.3';
}