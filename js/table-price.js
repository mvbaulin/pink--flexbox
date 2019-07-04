let priceTable = document.querySelector('.section-price__table');
let priceTableDots = document.querySelectorAll('.section-price__dot');
let priceTableNeedWidthToScroll = 87.5;

function priceTableNoJs () {
	if (priceTable.classList.contains('section-price__table--nojs')) {
		priceTable.classList.remove('section-price__table--nojs')
	}
}

let priceTableCurrentPostion = 0;
let priceTableCurrentDot = 0;

for (let i = 0; i < priceTableDots.length; i++) {
	priceTableDots[i].addEventListener('click', function() {
		priceTableCurrentDot = i;
		priceTableCurrentPostion = - priceTableNeedWidthToScroll * i;
		priceTableDots.forEach(function(item, index, array) {
			item.classList.remove('slider-dot--active');
			array[priceTableCurrentDot]. classList.add('slider-dot--active');
			priceTable.style.transform = "translateX(" + priceTableCurrentPostion + "vw)";
		})
	});
}

priceTableNoJs();