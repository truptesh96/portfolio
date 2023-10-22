
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


    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".page-head", triggerHook: 0.5, duration: "40%"})
    .setTween("body", { background:'#1B0F2D', ease: Linear.easeNone })
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".page-head .dev", triggerHook: 0.4, duration: "150%"})
    .setTween(".page-head .dev", {  x:'-60%', ease: Linear.easeNone })
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".page-head .dev2", triggerHook: 0.5, duration: "150%"})
    .setTween(".page-head .dev2", {  x:'60%', ease: Linear.easeNone })
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".green-bg", triggerHook: 0.5, duration: "40%"})
    .setTween("body", {  background:'rgba(15, 168, 150, .12)', ease: Linear.easeNone })
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".personal ", triggerHook: 0.5, duration: "80%"})
    .setTween("body", { background:'rgba(255, 255, 255, .25)', ease: Linear.easeNone })
    .addTo(controller);     


	$(document).ready(function(){
		smoothScroll();
	});


	$(window).on('scroll', function(){
		smoothScroll();
	}); 

    
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