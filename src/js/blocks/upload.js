
// File Upload
// ---------------------------------------------- 

$('.addImages').on('change', function (event) {
	var files = event.target.files; //FileList object
	var id = $(this).attr('id');

	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		//Only pics
		if (!file.type.match('image')) continue;

		if (files.length > 0) {
			$(this).closest('.upload-file').find('.upload-file__text').hide();

		} else {
			$(this).closest('.upload-file').find('.upload-file__text').show();
		}

		var picReader = new FileReader();
		$(picReader).on('load', function (event) {
			var picFile = event.target;
			$('[data-preview="' + id + '"]').append('<div class="upload-file__img"><img src="' + picFile.result + '" + "title="' + picFile.name + '"/></div>');
		});
		//Read the image
		picReader.readAsDataURL(file);

	}



});