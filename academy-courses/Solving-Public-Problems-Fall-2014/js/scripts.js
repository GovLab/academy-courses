$(document).ready(function() {

	// Smooth Scrolling Function.

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
				|| location.hostname == this.hostname) {

				var target = $(this.hash);

				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html,body').animate({ scrollTop: target.offset().top }, 1000);

					return false;
				}
			}
		});
	});

	// Collapse for Readings.

	$('.e-trigger').click(function() {
		$(this).parent().toggleClass('m-active');
	})

	// Accordion for FAQ.

	$('.e-faq-question').click(function() {
		var self = this;

		$('.e-faq-answer').not($(this).next()).slideUp('fast');
		$(this).next().slideDown('fast');

		// If element leave viewport, scroll to it.

		setTimeout(function() {
			if (!isElementInViewport(self)) { self.scrollIntoView(true); }
		}, 210);

		return false;
	});

});

function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	)
}
