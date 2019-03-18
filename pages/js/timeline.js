jQuery(document).ready(function($){

	// get data-name of link with class active
	var link_current = $('.ul-time li a.active').data('name');

	// show in tab with id of data-name active link
	$('#'+link_current).show();

	// actions on click
	$('.ul-time li a').on('click', function(e){

		// no redirect action
		e.preventDefault();

		// remove class active of link
		$('.ul-time li a').removeClass('active');

		// add class active of link
		$(this).addClass('active');

		// set var with offset left of current element
		var a = $(this).position().left;

		// add width length
		$('nav .time span').css('width',a);

		// show and hide tabs contents
		$('.tab-content article').hide();

		var data_current = $(this).data('name');

		$('#'+data_current).fadeIn();

	});

});
