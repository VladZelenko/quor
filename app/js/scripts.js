//nav menu
$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.nav');
	
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});

//carousel
$('.carousel').slick({
	autoplay: true,
	autoplaySpeed: 500,
	dots: true,
	arrows: false
});