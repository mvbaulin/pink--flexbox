let burgerMenu = document.querySelector('.burger-menu');
let mainMenuList = document.querySelector('.burger-menu__list');
let burgerBtn = document.querySelector('.burger-menu__burger');

function  mainMenuListNoJS() {
	if (mainMenuList.classList.contains('burger-menu__list--nojs')) {
		mainMenuList.classList.remove('burger-menu__list--nojs')
	}
}


burgerBtn.addEventListener('click', function() {
	toggleMenu();
})

function toggleMenu() {
	burgerBtn.classList.toggle('burger-menu__burger--active');
	mainMenuList.classList.toggle('burger-menu__list--active');
	burgerMenu.classList.toggle('burger-menu--active');
}








mainMenuListNoJS();
