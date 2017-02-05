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
	autoplaySpeed: 3000,
	dots: true,
	arrows: false
});

//MASONRY
$('.masonry-container').masonry({
  // options
  itemSelector: '.item',
  columnWidth: 20
});


//scrol-top
$(document).ready(function(){
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1800);
		return false;
	});
});

//navigations
$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 2000);
		return false;
	});
});