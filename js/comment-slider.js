let commentSlider = document.querySelector('.comment-slider');

function commentSliderNojs() {
	if (commentSlider.classList.contains('comment-slider--nojs')) {
		commentSlider.classList.remove('comment-slider--nojs');
	}
}

commentSliderNojs();