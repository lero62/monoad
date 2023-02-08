// Tabs 
// ---------------------------------------------- 
$('._tab__navitem').on('click', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('_parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('_active')) {
		$(this).closest('._tab').find('._tab__navitem').removeClass('_active');
		$(this).addClass('_active');
		$(this).closest('._tab').find('._tab__item').removeClass('_active').eq(eq).addClass('_active');
		// Mobile tab
		$(this).closest('._tab').find('._tab__head').removeClass('_active').eq(eq).addClass('_active');

		if ($(this).closest('._tab').find('._tab__header')) {
			// headers title
			$(this).closest('._tab').find('._tab__header').removeClass('_active').eq(eq).addClass('_active');
		}
	}
});

// Mobile tab 
$('._tab__head').on('click.smoothscroll', function (event) {
	var eq = $(this).data('tab-index');
	if (!$(this).hasClass('_active')) {
		$(this).closest('._tab').find('._tab__head').not($(this)).removeClass('_active');
		$(this).addClass('_active');
		$(this).closest('._tab').find('._tab__item').not($(this).next('._tab__item')).removeClass('_active')
		$(this).next('._tab__item').addClass('_active');

		if ($(this).closest('._tab').find('._tab__header')) {
			$(this).closest('._tab').find('._tab__header').removeClass('_active').eq(eq).addClass('_active');
		}
		let bl_top2 = $(this).offset().top;
		let bl_top3 = $(this).position();

		$(this).closest('._tab').find('._tab__navitem').removeClass('_active').eq(eq).addClass('_active');
		if ($(this).closest('.popup').hasClass('_open')) {
			$('.popup').animate({ scrollTop: bl_top3.top + 2 }, 0);

		} else {
			if ($(this).data('offset') == 'header') {
				$('body,html').animate({ scrollTop: bl_top2 - $('.header').innerHeight() + 2 }, 0);
			} else {
				$('body,html').animate({ scrollTop: bl_top2 + 2 }, 0);

			}
		}
	}


	return false;
})