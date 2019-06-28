let commentSlider = document.querySelector('.comment-slider');
let sliderWrapper = document.querySelector('.comment-slider__pages')
let pages = document.querySelectorAll('.comment-slider__page');
let dots = document.querySelectorAll('.comment-slider__dot');
let arrowPrev = document.querySelector('.comment-slider__arrow--prev');
let arrowNext = document.querySelector('.comment-slider__arrow--next');

function commentSliderNojs() {
	if (commentSlider.classList.contains('comment-slider--nojs')) {
		commentSlider.classList.remove('comment-slider--nojs');
	}
}



let currentPosition = 0;
let currentDot = 0;

function scrollSlider(needWidthToScroll, chosenDot) {
	currentPosition += needWidthToScroll;
	currentDot += chosenDot;
	if (currentPosition > 0) {
		currentPosition = -sliderWrapper.offsetWidth + (sliderWrapper.offsetWidth / pages.length);
	}
	else if (currentPosition < -sliderWrapper.offsetWidth + (sliderWrapper.offsetWidth / pages.length)) {
		currentPosition = 0;
	}
	sliderWrapper.style.transform = "translateX("+currentPosition+"px)";
	
	
	dots.forEach(function(item, index, array) {
		item.classList.remove('slider-dot--active');
		console.log(currentDot);
		if (currentDot > dots.length -1) {
			currentDot = 0;
		}
		if (currentDot < 0) {
			currentDot = dots.length - 1;
		}
		dots[currentDot].classList.add('slider-dot--active');
		
	})
}

arrowPrev.addEventListener('click', function() {
	scrollSlider(sliderWrapper.offsetWidth / pages.length, -1);
});

arrowNext.addEventListener('click', function() {
	scrollSlider(-sliderWrapper.offsetWidth / pages.length, 1);
});


for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', function() {
		currentDot = i;
		currentPosition = -i * pages[0].offsetWidth;
		
		dots.forEach(function(item, index, array) {
			item.classList.remove('slider-dot--active');
		})
		
		dots[currentDot].classList.add('slider-dot--active');
		
		sliderWrapper.style.transform = "translateX(" + currentPosition + "px)"
	})
}


















commentSliderNojs();