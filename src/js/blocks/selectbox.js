

$('.selectbox__head').on('click', function () {
	var selectbox = $(this).closest('.selectbox');
	selectboxOpen(selectbox)

	var ul = $(this).parents('.selectbox');
	var input = ul.find('input');
	var li = ul.find('li');

	input.keyup(function () {

		var value = $(this).val().toLowerCase();
		li.filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

		});
	})
	return false;
})


$('.selectbox__drop li').on('click', function () {
	var selectboxDropLi = $(this).html();
	$(this).closest('.selectbox').addClass('_change').find('.selectbox__text').html(selectboxDropLi)
	if ($(this).closest('.selectbox').find('.selectbox__text').hasClass('placeholder')) {
		$(this).closest('.selectbox').find('.selectbox__text').removeClass('placeholder')
	}
	$(this).closest('ul').find('li').not($(this)).removeClass('selected')
	$(this).addClass('selected')


	var ul = $(this).parents('.selectbox');
	var input = ul.find('input');
	var li = ul.find('li');
	input.val("").blur()
	li.show()
	selectboxClose()


	return false;
})


$('.selectbox__head ').on('click', '.filter-tag', function () {

	var elDataFit = $(this).data('fit');
	var el = $(this);
	var elPlaceholder = $(this).closest('.selectbox').find('.selectbox__text').data('placeholder')
	// alert(elDataFit)

	$(this).closest('.selectbox').find('.selectbox__list > *:eq("' + elDataFit + '")').removeClass('selected')
	selectboxCount(el, elPlaceholder)
	$(this).remove();


	return false;
})



function selectboxOpen(selectbox) {
	$('.selectbox').not($(selectbox)).removeClass('_open')
	if (!$(selectbox).hasClass('_open')) {
		$(selectbox).addClass('_open')
	} else {
		$(selectbox).removeClass('_open')
	}
}

function selectboxClose() {
	$('.selectbox').removeClass('_open')
}

$(document).on('click', function (e) {
	if (!$(e.target).closest(".selectbox").length) {
		selectboxClose()
	}
	e.stopPropagation();
});



$('._dropdown-btn').on('click', function () {
	var drop = $(this).closest('.dropdown');
	dropOpen(drop)
	return false;
})


$('.dropdown__list li').on('click', function () {
	var DropLi = $(this).html();
	$(this).closest('.dropdown').addClass('_change').find('._dropdown-btn').html(DropLi)
	$(this).closest('ul').find('li').not($(this)).removeClass('selected')
	$(this).addClass('selected')

	dropClose()

	return false;
})



function dropOpen(drop) {
	$('.dropdown').not($(drop)).removeClass('_open')
	if (!$(drop).hasClass('_open')) {
		$(drop).addClass('_open')
	} else {
		$(drop).removeClass('_open')
	}
}

function dropClose() {
	$('.dropdown').removeClass('_open')
}

$(document).on('click', function (e) {
	if (!$(e.target).closest(".drop").length) {
		dropClose()
	}
	e.stopPropagation();
});