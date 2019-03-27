$(function() {
	// gnav
	(function() {
		var navTrig = $('.js-navTrigger');
		var overLay = $('.js-overLay');
		var gNav = $('.js-nav');
		var closeNav = $('.js-btn-closeNav');

		function gnavOpen() {
			overLay.addClass('is-active');
			gNav.addClass('is-active');
		};
		function gnavClose() {
			overLay.removeClass('is-active');
			gNav.removeClass('is-active');

			if ($('.js-accordion').hasClass('is-active')) {
				$('.js-accordion').removeClass('is-active').next().slideToggle();
			}
		};


		navTrig.on('click', function() { gnavOpen() });
		closeNav.on('click', function() { gnavClose() });
		overLay.on('click', function() { gnavClose() });
	})();


	(function() {
		$('.js-accordion').on('click', function() {
			$(this).toggleClass('is-active');
			$(this).next().slideToggle();
		});
	})();

	(function() {
		var toTop = $('.js-pageToTop');

		toTop.on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	})();
});