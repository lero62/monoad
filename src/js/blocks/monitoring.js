// Мониторинг открытие блока в избранном
// ---------------------------------------------- 
var mons = $('._mon')
for (var i = 0; i < mons.length; i++) {
	var mon = mons[i]

	$(mon).on('click', function () {
		$('._mon').not($(this)).removeClass('_active')
		$(this).addClass('_active')
		var monOffsetTop = $(this).offset().top
		var monOffsetleft = $(this).offset().left
		var fccBoxHeight = $('._fcc-box-fav').innerHeight()
		var fccBoxWidth = $('._fcc-box-fav').innerWidth()
		var fccBoxPadBottom = parseInt($('._fcc-box-fav').css("padding-bottom"))
		var fccBoxPadRight = parseInt($('._fcc-box-fav').css("padding-right"))
		var monHeight = $(this).innerHeight()
		var monWidth = $(this).innerWidth()



		$('._fcc-box-fav').css({
			top: monOffsetTop - fccBoxHeight + monHeight + fccBoxPadBottom + 2 + 'px',
			left: monOffsetleft - fccBoxWidth + monWidth + fccBoxPadRight + 2 + 'px',

		}).addClass('_open')
		return false;
	})


}

$(window).on('resize', function () {
	if ($('._fcc-box-fav').hasClass('_open')) {
		var monOffsetTop = $('._mon._active').offset().top
		var monOffsetleft = $('._mon._active').offset().left
		var fccBoxHeight = $('._fcc-box-fav').innerHeight()
		var fccBoxWidth = $('._fcc-box-fav').innerWidth()
		var fccBoxPadBottom = parseInt($('._fcc-box-fav').css("padding-bottom"))
		var fccBoxPadRight = parseInt($('._fcc-box-fav').css("padding-right"))
		var monHeight = $('._mon._active').innerHeight()
		var monWidth = $('._mon._active').innerWidth()

		$('._fcc-box-fav').css({
			top: monOffsetTop - fccBoxHeight + monHeight + fccBoxPadBottom + 2 + 'px',
			left: monOffsetleft - fccBoxWidth + monWidth + fccBoxPadRight + 2 + 'px',

		})
	}
})


// Мониторинг открытие блока в каталоге и карточке товара
// ---------------------------------------------- 
var monCats = $('._monCat')
for (var i = 0; i < monCats.length; i++) {
	var monCat = monCats[i]

	$(monCat).on('click', function () {
		$('._monCat').not($(this)).removeClass('_active')
		$('._monCat').not($(this)).closest('._monWrapper').removeClass('_monWrapperActive')
		$(this).toggleClass('_active')
		$(this).closest('._monWrapper').toggleClass('_monWrapperActive')

		var monCatOffsetTop = $(this).closest('._monWrapper').offset().top
		var monCatOffsetleft = $(this).closest('._monWrapper').offset().left
		var monCatHeightFooter = $(this).closest('._monWrapper').find('.product-card__footer').innerHeight()
		var fccBoxHeight = $('._fcc-box-cat').innerHeight()
		var fccBoxWidth = $('._fcc-box-cat').innerWidth()
		var monCatHeight = $(this).closest('._monWrapper').innerHeight()
		var monCatWidth = $(this).closest('._monWrapper').innerWidth()

		$('._fcc-box-cat').css({
			top: monCatOffsetTop - fccBoxHeight + monCatHeight + monCatHeightFooter + 'px',
			left: monCatOffsetleft - fccBoxWidth + 'px',

		})
		if ($(this).hasClass('_active')) {
			$('._fcc-box-cat').addClass('_open')
		} else {
			$('._fcc-box-cat').removeClass('_open')
		}

		return false;
	})


}

$(window).on('resize', function () {
	if ($('._fcc-box-cat').hasClass('_open')) {
		var monCatOffsetTop = $('._monCat._active').closest('._monWrapper').offset().top
		var monCatOffsetleft = $('._monCat._active').closest('._monWrapper').offset().left
		var monCatHeightFooter = $('._monCat._active').closest('._monWrapper').find('.product-card__footer').innerHeight()
		var fccBoxHeight = $('._fcc-box-cat').innerHeight()
		var fccBoxWidth = $('._fcc-box-cat').innerWidth()
		var monCatHeight = $('._monCat._active').closest('._monWrapper').innerHeight()
		var monCatWidth = $('._monCat._active').closest('._monWrapper').innerWidth()

		$('._fcc-box-cat').css({
			top: monCatOffsetTop - fccBoxHeight + monCatHeight + monCatHeightFooter + 'px',
			left: monCatOffsetleft - fccBoxWidth + 'px',

		})
	}
})
