/* --------------------------------------------- 
* Filename:     custom.js
* Version:      1.0.0 (2016-03-05)
* Website:      http://www.zymphonies.com
* Description:  Global Script
* Author:       Zymphonies Team
                info@zymphonies.com
-----------------------------------------------*/

// WINDOW READY
jQuery(window).on('load', function() {
	jQuery(".pageloading").fadeOut(2000);
});

jQuery(window).scroll(function() {    // this will work when your window scrolled.
		var height = jQuery(window).scrollTop();  //getting the scrolling height of window

//alert("Height: "+height);
		if(height  > 0) {
			jQuery(".main-header nav").css({"position": "fixed"});
		} else{
			jQuery(".main-header nav").css({"position": "relative"});
		}
	});

//DOM Ready
jQuery(document).ready(function($){  

	

	$('.flexslider').flexslider({
    	animation: "slide",
	    before: function(slider){
	      $(slider).find(".flex-active-slide").find('.flex-caption').each(function(){
	       $(this).removeClass("animated bounceInRight");
	       });
	     },
	    after: function(slider){
			$(slider).find(".flex-active-slide").find('.flex-caption').addClass("animated bounceInRight");
	    },
	});

	
	// Project brochure class
	$('.field--name-field-brochure span').removeAttr('class');
	$('.field--name-field-brochure a').text('Download Brochure').addClass('btn download-brochure-btn');


	//Main menu
	$('#main-menu').smartmenus();
	$('.has-submenu').removeAttr('href');


	//Project colorbox
	$(".project-images a.zoom, a.zoom").colorbox();
	$(".view-gallery .views-field-field-image a").colorbox();


	$('.view-projects .views-row').each(function(){
	  var detailLink = $(this).find('.btnwrap a').attr('href');
	  var imgLink = $(this).find('.project-images a').attr('href');
	  $(this).find('.detail-link').attr('href',detailLink );
	  $(this).find('.zoom').attr('href',imgLink);
	});
	
	$('.field--name-field-project-images .field__items').addClass('owl-carousel owl-theme');
	$('.field--name-field-project-images .field__items').owlCarousel({
		items: 1,
		margin:10,
		dots: true,
		responsive : {
			500:{ items: 2, dots: true },
			600:{ items: 4, dots: true }
		}
	});

	$('.path-frontpage .view-services .view-content').addClass('owl-carousel owl-theme');
	$('.path-frontpage .view-services .view-content').owlCarousel({
		items: 1,
		margin:20,
		dots: true,
		responsive : {
			500:{ items: 2, dots: true },
			600:{ items: 4, dots: true }
		}
	});

	$('.view-testimonials .view-content').addClass('owl-carousel owl-theme');
	$('.view-testimonials .view-content').owlCarousel({
		items: 1
	});

	$('.view-staff-testimonial .view-content').addClass('owl-carousel owl-theme');
	$('.view-staff-testimonial .view-content').owlCarousel({
		items: 1
	});

	$('.path-frontpage .view-our-team .view-content').addClass('owl-carousel owl-theme');
	$('.path-frontpage .view-our-team .view-content').owlCarousel({
		items: 1,
		margin:10,
		dots: true,
		responsive : {
			500:{ items: 2, dots: true },
			600:{ items: 4, dots: true }
		}
	});

	$('.field--name-field-slider').addClass('owl-carousel owl-theme');
	$('.field--name-field-slider').owlCarousel({
		items: 1,
		navigation: true
	});

	$('.field--name-field-slider .field__items').addClass('owl-carousel owl-theme');
	$('.field--name-field-slider .field__items').owlCarousel({
		items: 1,
		navigation: true
	});

	//Search filed placeholder

	$('#search-block-form input.form-search').attr('placeholder', 'Search');

	//Menu animation

	$('.main-menu-toggle').click(function(){
	  $(this).hide();
	  $('.primary-menu-wrap').css('left','0');
	  $('body').css('left','250px');
	});


	$('.main-menu-close').click(function(){
	  $('.main-menu-toggle').show();
	  $('.primary-menu-wrap').css('left','-100%');;
	  $('body').css('left','0');
	});

	// Job Apply

	$('.field--name-field-apply-now a').text('Apply Now').attr('class', 'btn apply-now');


	$('.field--name-field-apply-now a').click(function(){
		var jobCode = $('.field--name-field-job-code .field__item').text();
		localStorage.setItem("jobCode", jobCode);
	});


	var storedJobCode = localStorage.getItem("jobCode");
	$('.field--name-field-job-code input').val(storedJobCode);


	$('.contact-message-job-application-form .form-actions .form-submit').val('Apply').attr('class', 'form-submit btn apply-now');
	$('.contact-message-job-application-form .form-actions .form-submit').last().hide();

	// Fixed Header window

});