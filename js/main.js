
$(document).ready(function() {
	
	$('.main-slider').slick({
		slidesToScroll: 1,
 		arrows:false,
 		dots: true,
 		autoplay: true,
 		autoplaySpeed:4000,
 		pauseOnHover:true,
 		pauseOnFocus:false,
 		customPaging : function(slider, i) {
	        var slide_title = $(slider.$slides[i]).find('.main-slider-item').data('slide-name');
	        var slide_dot = '<div class="slide_dot"><div class="indicator"></div></div>';
	        return slide_dot;
	    }
	});

	$('.small-images-slider').slick({
		slidesToShow: 4,
		focusOnSelect: true,
		swipeToSlide: true,
		infinite: false,
 		arrows:false,
 		dots: false,
 		vertical: true,
 		verticalSwiping: true,
 		asNavFor: '.big-images-slider'
	});

	$('.big-images-slider').slick({
		slidesToScroll: 1,
 		arrows:false,
 		dots: false,
 		fade: true,
 		swipe: false
 		// asNavFor: '.small-images-slider'
	});

	$('.device-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
 		// arrows:true,
 		dots: false,
 		// asNavFor: '.small-images-slider'
	});


	$(function() {
		$('.header-top-select').selectric();
	});

	$(function() {
		$('.search-form-select').selectric();
	});

	$(function() {
		$('.phone-number-select').selectric();
	});
	
	
	$('.toogle-mobile-menu').click(function(e) {
		e.preventDefault();
		$('header').toggleClass('menu-opened');
	});

	$(function() {
 
	  $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs-wrap').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	 
	});
		
});

$(window).on('load scroll', stikyHeader);

