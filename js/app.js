jQuery(function($){

	$.fn.isInViewport = function() {
	    var elementTop = $(this).offset().top + 100;
	    var elementBottom = elementTop + $(this).outerHeight();
	    var viewportTop = $(window).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();
	    return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	
	function inView(){
		$(".anim, .wave").each(function(){
			$(this).isInViewport() ? $(this).addClass("animate") : $(this).removeClass("animate")
		}
	)};


	$(document).ready(function(){


	});


	$(window).on('resize scroll onload load', function(){
		inView();
	});


});