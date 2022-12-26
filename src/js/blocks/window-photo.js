

const windowHtml = `
	<div class="window-photo ">
		<div class="window-photo__close" data-close-window>
			<svg class="icon icon-close-2">
				<use xlink:href="img/sprite.svg#close-2"></use>
			</svg>
		</div>
		<div class="window-photo__wrap">
			<div class="window-photo__swiper">
				<div class="swiper-container">
					<div class="swiper-wrapper"> 
						
					</div>
				</div>
				<div class="swiper-button-prev window-photo__prev">
					<svg class="icon icon-swiper-arrow">
						<use xlink:href="img/sprite.svg#swiper-arrow"></use>
					</svg>
				</div>
				<div class="swiper-button-next window-photo__next">
					<svg class="icon icon-swiper-arrow">
						<use xlink:href="img/sprite.svg#swiper-arrow"></use>
					</svg>
				</div>
			</div>


			<div class="window-photo__swiper-thumbs">
				<div class="swiper-container">
					<div class="swiper-wrapper"></div>
				</div>
			</div>
		</div>
	</div>`;

const windowHtmlOne = `
	<div class="window-photo ">
		<div class="window-photo__close" data-close-window>
			<svg class="icon icon-close-2">
				<use xlink:href="img/sprite.svg#close-2"></use>
			</svg>
		</div>
		<div class="window-photo__wrap">
			<div class="window-photo__img"></div>
		</div>
	</div>`;

$('[data-open-window]').on('click', function () {
	bodyLock();

	if ($(this).closest('[data-window-gallery]').length) {
		let windowItemsIndex;
		$('.main-wrapper').append(windowHtml);
		if ($(this).closest('.swiper-slide').length) {
			windowItemsIndex = $(this).closest('.swiper-slide').index();

		} else {
			windowItemsIndex = $(this).index();
		}

		let windowItems = $(this).closest('[data-window-gallery]').find('[data-open-window]')

		let widndowItemsClass = $(this).attr('class');

		for (i = 0; i < windowItems.length; i++) {
			if (windowItems.eq(i).has('[data-window-info]').length) {

				$('.window-photo__swiper .swiper-wrapper').append(`
				<div class="swiper-slide">
					<div class="${windowItems.eq(i).attr('class')}">
					<img src="${windowItems.eq(i).find('[data-window-img]').data('window-img')}" alt=""/>	
					
					${windowItems.eq(i).find('[data-window-info]').prop('outerHTML')}
					</div>
				</div>
			`);
			} else {

				$('.window-photo__swiper .swiper-wrapper').append(`
					<div class="swiper-slide">
						<img src="${windowItems.eq(i).find('[data-window-img]').data('window-img')}" alt=""/>	
					</div>
				`);
			}


			$('.window-photo__swiper-thumbs .swiper-wrapper').append(`
				<div class="swiper-slide">
					<img src="${windowItems.eq(i).find('[data-window-img]').attr('src')}" alt=""/>	
				</div>
			`);
		}

		if ($('.window-photo__swiper-thumbs').length) {

			var windowPhotoThumbsSldier = new Swiper('.window-photo__swiper-thumbs .swiper-container', {
				loop: false,
				slidesPerView: 'auto',
				spaceBetween: 10,
				centerInsufficientSlides: true,
				watchOverflow: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
			})
		};

		var windowPhotoSldier = new Swiper('.window-photo__swiper .swiper-container', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 20,

			thumbs: {
				swiper: windowPhotoThumbsSldier
			},
			navigation: {
				nextEl: '.window-photo__next',
				prevEl: '.window-photo__prev',
			},


		})

		windowPhotoSldier.slideTo(windowItemsIndex, 0, false);
	} else {
		$('.main-wrapper').append(windowHtmlOne);
		let windowImg = $(this).find('[data-window-img]')

		$('.window-photo__img').append(`
			<img src="${windowImg.data('window-img')}" alt=""/>	
		`);
	}



})
$(document).on('click', '[data-close-window]', function () {
	windowClose($(this).closest('.window-photo'))
	bodyUnLock();
})


function windowClose(windowActive) {
	windowActive.remove();
}