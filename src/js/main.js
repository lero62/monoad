svg4everybody();

$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function () {

	$(document).on('click', function (event) {
		if ($(event.target).closest("[data-show]").length) {
			return;
		} else {
			$('[data-show]').slideUp(0)
			$('._da-show').removeClass('_active')
			$('html').removeClass('lock-ipad')
		}

		if ($(event.target).closest(".top-search").length) {
			return;
		} else {
			$(".dropdown-block").removeClass('_open');
		}

		if ($(event.target).closest("._lang-dropdown").length) {
			return;
		} else {
			$("._lang-dropdown").removeClass('_open');
		}


		if ($(event.target).closest("._toltipe-toggle").length) {
			return;
		} else {
			$('.toltipe').removeClass('_open')
		}

		if ($(event.target).closest("._fcc-box-fav").length || $(event.target).closest("._mon").length) {
			return;
		} else {
			$('._fcc-box-fav').removeClass('_open')
		}


		if ($(event.target).closest("._fcc-box-cat").length || $(event.target).closest("._monCat").length) {
			return;
		} else {
			$('._fcc-box-cat').removeClass('_open')
		}

		if ($(event.target).closest("._monCat").length) {
			return;
		} else {
			$('._monCat').removeClass('_active')
			$('._monWrapper').removeClass('_monWrapperActive')
		}

		event.stopPropagation();
	});


	// Mobile Menu 
	// ---------------------------------------------- 

	$('._navbar-toggle').on('click', function () {
		var navDataToggle = $(this).data('burger')
		$('._navbar-toggle.burger').toggleClass('_active')
		$('.navbar[data-navbar=' + navDataToggle + ']').toggleClass('_open');
		$('.swipe-block').toggleClass('_swipe')
		$('html').toggleClass('lock-navbar')

		return false;
	})


	// Lang
	// ---------------------------------------------- 
	$('._lang-toggle ').on('click', function () {
		$('._lang-dropdown').toggleClass('_open')
		return false;
	})

	// Dropdown block
	// ---------------------------------------------- 
	$('.dropdown-block__close ').on('click', function () {
		$(this).closest('.dropdown-block').removeClass('_open');
		$('.header').removeClass('_search')
		$('html').removeClass('lock-ipad')
		return false;
	})

	// Подсказка для поиска
	// ---------------------------------------------- 

	$('.top-search__input').on('keyup', function () {
		if (!$(this).val() == '') {
			$('.header').addClass('_search')
			$('html').addClass('lock-ipad')
			$(this).closest('.top-search').find('.dropdown-block').addClass('_open')
		} else {
			$('.header').removeClass('_search')
			$('html').removeClass('lock-ipad')
			$(this).closest('.top-search').find('.dropdown-block').removeClass('_open')
		}
		return false;
	})


	// Filter fixed 
	// ---------------------------------------------- 

	$('._filter-toggle ').on('click', function () {
		$('.filter-fixed').toggleClass('_open');
		$('.swipe-block').toggleClass('_swipe-ipad')
		$('html').toggleClass('lock-ipad-fixed')

		return false;
	})

	// Добавление акционных товаров
	// ---------------------------------------------- 

	$('._add-product').on('click', function () {
		$(this).toggleClass('_selected')
		return false;
	})


	// Toltipe
	// ---------------------------------------------- 

	$('._toltipe-toggle ').on('click', function (e) {
		$(this).find('.toltipe').toggleClass('_open')
		return false;

	}).children('.toltipe').click(function (e) {
		e.stopPropagation();
	})

	//  promocode list More
	// ---------------------------------------------- 

	$('._open-promocode-list ').on('click', function () {
		$('.promocode-list').toggleClass('_open')
		return false;
	})




	// Lable Tags
	// ---------------------------------------------- 
	$('.label-tags__item').on('click', function () {
		if ($(this).closest('.label-tags').hasClass('_toggle')) {

			$(this).toggleClass('_active')
		} else {
			$(this).closest('.label-tags').find('.label-tags__item').not($(this)).removeClass('_active')
			$(this).addClass('_active')
			$(this).closest('.label-tags').find('.label-tags__item').not($(this)).next('.label-tags-table').removeClass('_open')
			$(this).next('.label-tags-table').addClass('_open')
		}
	})

	$('.label-tags-table__close').on('click', function () {
		$(this).closest('.label-tags-table').removeClass('_open')
	})


	// Accordion
	// ---------------------------------------------- 
	$('._ac__navitem').on('click', function () {
		var el = $(this);
		el.next('._ac__item').slideToggle(200);
		el.toggleClass('_active');
		return false;
	});


	// Filter Menu
	// ---------------------------------------------- 
	$('.sbox__list-drop span').on('click', function () {
		var el = $(this);
		el.closest('.sbox__list').find('> .sbox__list-item').find('> .sbox__dropdown').not($(this).next()).slideUp(200);
		el.next('.sbox__dropdown').slideToggle(200);
		el.closest('.sbox__list').find('> .sbox__list-drop').not($(this).closest('.sbox__list-drop')).removeClass('_active');
		el.closest('.sbox__list-drop').toggleClass('_active');

		return false;
	});

	// Favorite and mon button
	// ---------------------------------------------- 

	$('.btn-favorites').on('click', function () {
		$(this).toggleClass('active');
		return false;
	});

	// $('.btn-mon').on('click', function(){
	// 	$(this).toggleClass('active');

	// });




	// Show block 
	// ---------------------------------------------- 
	$('._da-show').on('click', function () {
		var daHref = $(this).data('href')

		$('._da-show').not($(this)).removeClass('_active')
		$(this).toggleClass('_active')
		$('html').toggleClass('lock-ipad')

		$('[data-show]').not('[data-show=' + daHref + ']').slideUp(0)
		$('[data-show=' + daHref + ']').slideToggle(0)
		return false;
	})

	$('._da-close').on('click', function () {
		var daHref = $(this).closest('[data-show]').data('show')
		$(this).closest('[data-show]').slideUp(0)
		$('[data-href=' + daHref + ']').removeClass('_active')
		$('html').removeClass('lock-ipad')
		return false;
	})

	// toggle block 
	// ---------------------------------------------- 
	$('._da-toggle').on('click', function () {
		var daHref = $(this).data('href')

		$('._da-toggle').not($(this)).removeClass('_active')
		$(this).toggleClass('_active')

		$('[data-toggle]').not('[data-toggle=' + daHref + ']').slideUp(0)
		$('[data-toggle=' + daHref + ']').slideToggle(0)
		return false;
	})



	$('a.anchor').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top,
			offset = $(this).data('offset') !== '' ? $(this).data('offset') : 0;
		$('body,html').animate({ scrollTop: bl_top - offset }, 900);
		return false;
	});

	// History nav anhors
	//----------------------------------------------

	$('.history-nav li').on('click', function () {
		var target = $(this).data('history-href'),
			bl_top = $(target).offset().top;

		$('body,html').animate({ scrollTop: bl_top }, 300);

		$('.history-nav li').not($(this)).removeClass('_active')
		$(this).addClass('_active')

		let elIndex = $(this).index();

		$('._fixed-img').removeClass('_active');
		$('._fixed-img').eq(elIndex).addClass('_active');

		$('._fixed-drop li').removeClass('selected');
		$('._fixed-drop li').eq(elIndex).addClass('selected');
		$('._fixed-drop').closest('.selectbox').find('.selectbox__text').html($('._fixed-drop li').eq(elIndex).html());


		$('._fixed-nav').addClass('_no-animate');
		$('._fixed-img').addClass('_no-animate');
		$('._fixed-drop').addClass('_no-animate');

		setTimeout(function () {
			$('._fixed-nav').removeClass('_no-animate');
			$('._fixed-img').removeClass('_no-animate');
			$('._fixed-drop').removeClass('_no-animate');
		}, 250)
		return false;
	});

	$('._fixed-drop li').on('click', function () {
		var target = $(this).data('history-href'),
			bl_top = $(target).offset().top;

		$('body,html').animate({ scrollTop: bl_top - $('.header').innerHeight() + 2 }, 300);

		let elIndex = $(this).index();

		$('._fixed-img').removeClass('_active');
		$('._fixed-img').eq(elIndex).addClass('_active');

		$('._fixed-nav').addClass('_no-animate');
		$('._fixed-img').addClass('_no-animate');
		$('._fixed-drop').addClass('_no-animate');

		setTimeout(function () {
			$('._fixed-nav').removeClass('_no-animate');
			$('._fixed-img').removeClass('_no-animate');
			$('._fixed-drop').removeClass('_no-animate');
		}, 250)
		return false;
	});

	$(window).on('scroll load', function () {

		var $sections = $('.section-nav');

		$sections.each(function (i, el) {
			var top = $(el).offset().top;
			var bottom = top + $(el).innerHeight();
			var scroll = $(document).scrollTop() + ($(window).innerHeight() / 2);
			var id = $(el).attr('id');
			if (scroll > top && scroll < bottom) {
				if (!$('._fixed-nav').hasClass('_no-animate')) {
					$('._fixed-nav li').removeClass('_active');
					$('._fixed-nav li[data-history-href="#' + id + '"]').addClass('_active');
				}
				if (!$('._fixed-img').hasClass('_no-animate')) {
					$('._fixed-img').removeClass('_active');
					$('._fixed-img[data-history-image="#' + id + '"]').addClass('_active');
				}
				if (!$('._fixed-drop').hasClass('_no-animate')) {
					$('._fixed-drop li').removeClass('selected');
					$('._fixed-drop li[data-history-href="#' + id + '"]').addClass('selected');
					$('._fixed-drop').closest('.selectbox').find('.selectbox__text').html($('._fixed-drop li[data-history-href="#' + id + '"]').html());
				}

			}
		})

	});


	// Open card table
	// ---------------------------------------------- 
	$('._open-ond').on('click', function () {
		$(this).toggleClass('_active')
		$('.order-number__drop').slideToggle(200);
		return false;
	});

	$(document).on('click', function (event) {
		if ($(event.target).closest(".order-number").length)
			return;

		$(".order-number__drop").slideUp(200);
		event.stopPropagation();
	});

	// Open Box fixed
	// ---------------------------------------------- 
	$('._box-fixed-toggle').on('click', function () {
		var BoxDataToggle = $(this).data('box-fixed-toggle')
		$('.box-fixed[data-box-fixed=' + BoxDataToggle + ']').toggleClass('_open');
		$('.swipe-block').toggleClass('_swipe-ipad')
		$('html').toggleClass('lock-ipad-fixed')

		return false;
	})

	// Sel size
	// ---------------------------------------------- 
	$('.sel-list li').on('click', function () {
		$(this).closest('.sel-list').find('li').not($(this)).removeClass('selected')
		$(this).addClass('selected')
	})


	// Фиксированная панель кнопок в избранном
	// ---------------------------------------------- 
	var $element = $('.footer');
	let counter = 0;
	if ($element.length > 0) {


		$(window).on('scroll load resize', function () {
			var scroll = $(window).scrollTop() + $(window).height();

			var offset = $element.offset().top

			if (scroll > offset) {
				$('.panel-sticky').css({
					position: 'absolute'
				})
			} else {
				$('.panel-sticky').css({
					position: 'fixed'
				})
			}
		});
	}


	// Плавающая кнопка применить в фильтре. 
	// ---------------------------------------------- 

	$('.fxm').on('click', function () {
		var obj = $(this).position().top;
		$('._fix-finded').addClass('_open').css({ 'top': obj })
	});

	$('.fxm_block').on('click', function () {
		var obj = $(this).position().top;
		$('._fix-finded').addClass('_open').css({ 'top': obj })
	});

	$('._filter-apply').on('click', function () {
		$(this).closest('._fix-finded').removeClass('_open');
	});



	$('input[name=se-el]').on('click', function () {
		if (this.id == "se-el1") {
			$("#sel-el-block").show();
			$("#sel-el-block2").hide();
		} else {
			$("#sel-el-block").hide();
			$("#sel-el-block2").show();
		}
	});

	// Датапикер
	// ---------------------------------------------- 
	new AirDatepicker('#blog-datepicker', {
		inline: true,
	})

	@@include('./blocks/upload.js');
	@@include('./blocks/monitoring.js');
	@@include('./blocks/counter.js');
	@@include('./blocks/gallery.js');
	@@include('./blocks/tabs.js');
	@@include('./blocks/more_text.js');
	@@include('./blocks/selectbox.js');
	@@include('./blocks/sticky.js');
	@@include('./blocks/popups.js');
	@@include('./blocks/dynamic.js');
	@@include('./blocks/sliders.js');
	@@include('./blocks/menu.js');
	@@include('./blocks/window-photo.js');

});



$(".header").removeClass("fixed");
$(window).on('scroll load', function () {
	if ($(this).scrollTop() > 35) {
		$(".header").addClass("_filter");
	} else {
		$(".header").removeClass("_filter");
	};
	if ($(this).scrollTop() > 0) {
		$(".header").addClass("fixed");
	} else {
		$(".header").removeClass("fixed");
	};
});

