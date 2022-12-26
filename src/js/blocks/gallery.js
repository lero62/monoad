// Галерея 
// ---------------------------------------------- 


$('.gallery').on('click', function () {

	$('.card-gallery').addClass('open');
	$('html').addClass('lock')
	let thisID = $(this).closest('.card-slider__item').index();

	let galleryHeight = $('.card-gallery__item').innerHeight();
	$('.card-gallery').animate({ scrollTop: thisID * galleryHeight }, 0);
	return false;

});

$('.card-gallery__item').on('click', function () {
	$('.card-gallery').removeClass('open');
	$('html').removeClass('lock')
	return true;

});