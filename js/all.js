/* Slider */

$(function() {
 $('.slider__wrapper').owlCarousel({
 	items: 5,
    margin: 0,
    loop: true,
    nav: true,
    responsive:{ 
				0:{ 
				items: 1 
				}, 
				485:{ 
				items: 3 
				}, 
				1200:{ 
				items: 5 
				} 
	}
 });
});

/* End Slider */

/* Company */

$(function() {
  $('.company__wrapper').owlCarousel({
        items:1,
        loop:true,
        center:true,
        margin:0,
        nav: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'one'
    });
});

/* End Company */

/* Reviews */

$(function() {
 $('.reviews__wrapper').owlCarousel({
 	items: 1,
    margin: 0,
    loop: true,
    nav: true
 });
});

/* End Reviews */