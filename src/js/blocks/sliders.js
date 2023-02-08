// Swiper Slider
// ---------------------------------------------- 


if ($('.products-slider').length) {

	var productsSldier = new Swiper('.products-slider .swiper-container', {
		loop: false,
		slidesPerView: 4,
		spaceBetween: 0,

		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.products-slider-next',
			prevEl: '.products-slider-prev',
		},
		breakpoints: {
			100: {
				slidesPerView: 2,
			},

			576: {
				slidesPerView: 3,

			},



			768: {
				slidesPerView: 4,
			},
		}

	})
};

if ($('.together-cheaper-slider').length) {

	var togetherCheaper = new Swiper('.together-cheaper-slider .swiper-container', {
		loop: false,
		slidesPerView: 1,
		autoHeight: true,
		spaceBetween: 20,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observeParents: true,
		navigation: {
			nextEl: '.together-cheaper-slider-next',
			prevEl: '.together-cheaper-slider-prev',
		},

	})
};

if ($('.packing-slider').length) {

	var packingSlider = new Swiper('.packing-slider .swiper-container', {
		loop: false,
		slidesPerView: 4,
		spaceBetween: 26,

		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.packing-slider-next',
			prevEl: '.packing-slider-prev',
		},
		breakpoints: {
			100: {
				slidesPerView: 1,
				spaceBetween: 12,

			},
			370: {
				slidesPerView: 2,
				spaceBetween: 12,

			},
			575: {
				slidesPerView: 3,
				spaceBetween: 26,

			},
			768: {
				slidesPerView: 4,

			},

			992: {
				slidesPerView: 4,
			},
		}

	})
};
if ($('.learn-slider').length) {

	var learnSlider = new Swiper('.learn-slider .swiper-container', {
		loop: true,
		slidesPerView: 1.8,
		spaceBetween: 26,
		centeredSlides: true,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.learn-slider-next',
			prevEl: '.learn-slider-prev',
		},
		breakpoints: {

			100: {
				slidesPerView: 1,

			},

			992: {
				slidesPerView: 1.8,
			},
		}

	})
};

if ($('.atc-sale').length) {

	var atcSldier = new Swiper('.atc-sale .swiper-container', {
		loop: false,
		slidesPerView: 4,
		spaceBetween: 26,
		slidesPerColumn: 1,
		slidesPerColumnFill: 'column',
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.atc-sale-swiper-next',
			prevEl: '.atc-sale-swiper-prev',
		},
		breakpoints: {

			100: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				spaceBetween: 16,
			},

			992: {
				slidesPerView: 4,
				slidesPerColumn: 1,
				slidesPerColumnFill: 'column',
				spaceBetween: 26,
			},
		}

	})
};

if ($('._cb-colors-small').length) {

	var productsSldier = new Swiper('._cb-colors-small .swiper-container', {
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 7,

		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.cb-colors-slider-next',
			prevEl: '.cb-colors-slider-prev',
		},


	})
};

if ($('._cb-colors-big').length) {

	var productsSldier = new Swiper('._cb-colors-big .swiper-container', {
		loop: false,
		slidesPerView: 5,
		spaceBetween: 8,

		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.cb-colors-slider-next',
			prevEl: '.cb-colors-slider-prev',
		},
		breakpoints: {
			100: {
				slidesPerView: 5,
			},
			480: {
				slidesPerView: 6,
			},
			576: {
				slidesPerView: 8,
			},
			768: {
				slidesPerView: 10,
			},

			1025: {
				slidesPerView: 5,
			},
		}


	})
};

if ($('.card-slider').length) {
	var cardSliderbreakpoint = window.matchMedia('(min-width:1025px)');
	var cardSwiper;

	var breakpointChecker = function () {

		if (cardSliderbreakpoint.matches === true) {
			if (cardSwiper !== undefined) cardSwiper.destroy(true, true);
			return;
		} else if (cardSliderbreakpoint.matches === false) {

			return enableSwiper();
		}
	};


	var enableSwiper = function () {
		cardSwiper = new Swiper('.card-slider .swiper-container', {
			loop: false,
			slidesPerView: 1,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

	};

	cardSliderbreakpoint.addListener(breakpointChecker);
	breakpointChecker();
}

if ($('.reviews-box-swiper').length) {
	var reviewsSliderbreakpoint = window.matchMedia('(min-width:1400px)');
	var reviewsSwiper;

	var breakpointCheckerReviewsSwiper = function () {

		if (reviewsSliderbreakpoint.matches === true) {
			if (reviewsSwiper !== undefined) reviewsSwiper.destroy(true, true);
			return;
		} else if (reviewsSliderbreakpoint.matches === false) {

			return enableReviewsSwiper();
		}
	};


	var enableReviewsSwiper = function () {
		reviewsSwiper = new Swiper('.reviews-box-swiper .swiper-container', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			pagination: {
				el: ".reviews-box-swiper-pagination",
				clickable: true,
			},
		});

	};

	reviewsSliderbreakpoint.addListener(breakpointCheckerReviewsSwiper);
	breakpointCheckerReviewsSwiper();
}

if ($('.wsl-slider').length) {

	var wslSlider = new Swiper('.wsl-slider .swiper-container', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},


	})
};

if ($('.review-grid-swiper').length) {

	var reviewGridSlider = new Swiper('.review-grid-swiper .swiper-container', {
		loop: false,
		slidesPerView: 2,
		spaceBetween: 30,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		autoHeight: false,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			100: {
				slidesPerView: 1,

			},

			1400: {
				slidesPerView: 2,
			},
		}


	})
};

if ($('.arhive-swiper').length) {

	var arhiveSlider = new Swiper('.arhive-swiper .swiper-container', {
		loop: false,
		slidesPerView: 2,
		spaceBetween: 40,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			100: {
				slidesPerView: 1,

			},

			768: {
				slidesPerView: 2,
				spaceBetween: 20,

			},

			1200: {
				slidesPerView: 2,
				spaceBetween: 40,
			},


		}


	})
};


if ($('.collections-swiper').length) {

	var collectionsSlider = new Swiper('.collections-swiper .swiper-container', {
		loop: false,
		slidesPerView: 4,
		spaceBetween: 40,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.collections-swiper__next',
			prevEl: '.collections-swiper__prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			100: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			576: {
				slidesPerView: 2,
				spaceBetween: 20,

			},

			1400: {
				slidesPerView: 3,
				spaceBetween: 30,

			},

			1800: {
				slidesPerView: 4,
				spaceBetween: 40,
			},


		}


	})
};
if ($('.collections-one-swiper').length) {

	var collectionsOneSlider = new Swiper('.collections-one-swiper .swiper-container', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.collections-one-swiper__next',
			prevEl: '.collections-one-swiper__prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			100: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			576: {
				slidesPerView: 2,
				spaceBetween: 20,

			},

			1400: {
				slidesPerView: 3,
				spaceBetween: 30,

			},

			1600: {
				slidesPerView: 1,
				spaceBetween: 20,
			},


		}


	})
};


