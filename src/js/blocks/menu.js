var menu = $('._menu')
var menuUls = menu.find('ul')

for(var i = 0; i < menuUls.length; i++){
	var menuUl = menuUls[i]
	
	var menuUlName = $(menuUl).prev().text()
	
	$(menuUl).prepend('<li class="navbar-menu__header"><div class="navbar-menu__title">'+ menuUlName +'</div></li>')
	$(menuUl).prev().addClass('_next')
	$(menuUl).prev().on('click', function(){
		$(this).closest('li').addClass('_active')
		$(this).closest('ul').addClass('_hide')
		$(this).next('ul').addClass('_vis')
	}) 
	

}

$(document).on('click', '.navbar-menu__header', function(){
	$(this).closest('ul').closest('li').removeClass('_active')
	$(this).closest('ul').removeClass('_vis')
	$(this).closest('ul').closest('li').closest('ul').removeClass('_hide')

})