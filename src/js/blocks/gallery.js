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
	// $('.main').show();
	$('.card-gallery').removeClass('open');
	$('html').removeClass('lock')

	//  		var thisIDD = $(this).data('id');

	//  			bl_topp = $('[data-id= '+ thisIDD +']').offset().top;
	// $('body,html').animate({scrollTop: bl_topp}, 0);

	return true;

});