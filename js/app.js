
var swiper = new Swiper('.cases__slider', {
	autoHeight: true,
	loop: true,
	spaceBetween: 100,
	grabCursor: true,
	simulateTouch: true,
	centeredSlides: true,
	slidesPerView: 1,
	speed: 700,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		1025: {
			slidesPerView: 3,

		}
	},
})


var swiper = new Swiper('.rev__slider', {
	autoHeight: true,
	loop: true,

	grabCursor: true,
	simulateTouch: true,
	centeredSlides: true,
	slidesPerView: 1,
	speed: 600,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		1025: {
			slidesPerView: 3,
			spaceBetween: 30,

		}
	},
})





