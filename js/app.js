jQuery(function($){

	/*------- Custom Animation ------*/
    function finalAnim(objInstance, delay){
        var objInstance = objInstance;
        var timedelay = delay;
        setTimeout(function(){
            $(objInstance).addClass("animate");    
        },timedelay);
    }
    $.fn.isInViewport=function(){var t=$(this).offset().top+100,i=t+$(this).outerHeight(),o=$(window).scrollTop(),n=o+$(window).height();return i>o&&t<n};
    function smoothScroll(){
        $(".anim:not(.animate)").each(function(i){
            if( $(this).isInViewport() ) {
              if($(this).attr("anim-delay") > 0) {
                 finalAnim($(this), $(this).attr('anim-delay')); 
              } else {
                 finalAnim($(this, 0));
              }
            }               
        })}
    /*------- Custom Animation Ends ------*/

	$(document).ready(function(){
		smoothScroll();
	});


	$(window).on('scroll', function(){
		smoothScroll();
	});


});