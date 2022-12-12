var htTu = $('.toggle-block').height();
if (htTu < 109) {
	$('.toggle-block').addClass('open')
	$('.toggle-block-overlay').hide()
	$('.toggle-block-btn').hide()
}
$('.toggle-block-btn').on('click', function () {
	$(this).prev('.toggle-block').toggleClass('open');
	$(this).next().slideToggle(400);
	namebl = $(this).html();
	if (namebl == 'Подробнее') {
		$(this).html('Cвернуть');
	} else {
		$(this).html('Подробнее');
	}
	return false;
});

$('.toggle-block-overlay').on('click', function () {
	$(this).parent('.toggle-block').toggleClass('open');
	namebl = $(this).parent().next().html();
	if (namebl == 'Подробнее') {
		$(this).parent().next().html('Cвернуть');
	} else {
		$(this).parent().next().html('Подробнее');
	}

	return false;
});

// Показать больще текста 
$('._more-text').on('click', function () {

	let title = $(this).data('title');
	let titleSecond = $(this).data('title-second');
	let titleThis = $(this).find('span').text();
	$(this).parent('.toggle-block').toggleClass('open');

	if (title == titleThis) {
		$(this).find('span').text(titleSecond);
		$(this).closest('._text-toggle').addClass('_open')
	} else {
		$(this).find('span').text(title);
		$(this).closest('._text-toggle').removeClass('_open')
	}
})
