$(document).ready(function() {

// Smooth Scrolling Function
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
			}
		}
	});
});


// Collapse for Readings

$('.e-trigger').click(function() {
	$(this).parent().toggleClass('m-active');
	// $(this).children().addClass('icon-minus');
	// $(this).children().removeClass('icon-plus');
})




});