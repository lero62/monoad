// Счетчик
// ---------------------------------------------- 
$('[data-counter-minus]').click(function () {
	var $input = $(this).parent().find('[data-counter-val]');
	var count = parseInt($input.text()) - 1;
	count = count < 1 ? 1 : count;
	$input.text(count + ' шт.');

	return false;
});
$('[data-counter-plus]').click(function () {
	var $input = $(this).parent().find('[data-counter-val]');
	$input.text(parseInt($input.text()) + 1 + ' шт.');

	return false;
});