var swiper = new Swiper('.rev__slider', {
	autoHeight: true,
	loop: true,

	grabCursor: true,
	simulateTouch: true,
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 100,
	speed: 600,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},

})


burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}



const links = document.querySelectorAll("a.scroll-to");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}


const squareRange = document.querySelector('.calc__range--square');
const thicknessInput = document.querySelector('.calc__input--thickness');
const calculationOutput = document.querySelector('.calc__result-output');

let square = squareRange.value;
let thickness = thicknessInput.value;
let finalPrice = 0;

const data = {
	price50: 11000,
	price5190: 220,
	price91150: 200,
	price151: 180,
	cementBagPrice: 300,
	sandZIL: 4000,
	sandKAMAZ: 6000,
	deviceDelivery: 3000,
	cementDelivry: 1000,
}

squareRange.addEventListener('input', () => {
	square = squareRange.value;
	calculate()
});
thicknessInput.addEventListener('input', () => {
	thickness = thicknessInput.value;
	calculate()
});

function outputUpdate(value) {
	document.querySelector('.calc__text--square').textContent = value;
	calculate();
}

function calculate() {
	if (square && thickness) {
		finalPrice = 0;

		let workPrice = 0;
		if (square > 150) {
			workPrice = square * data.price151;
		} else if (square > 90) {
			workPrice = square * data.price91150;
		} else if (square > 50) {
			workPrice = square * data.price5190;
		} else {
			workPrice = data.price50;
		}

		const cementBags = Math.ceil(square * 0.24);
		const cementPrice = cementBags * data.cementBagPrice;
		const sandPrice = (square * thickness / 100) > 4.7 ? 6000 : 4000;

		finalPrice = workPrice + cementPrice + sandPrice + data.deviceDelivery + data.cementDelivry;
		calculationOutput.textContent = finalPrice.toString() + '₽';
	}
}
