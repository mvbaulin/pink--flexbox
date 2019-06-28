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
