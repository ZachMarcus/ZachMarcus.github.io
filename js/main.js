/* eslint-env browser */
(function () {
	'use strict';
	// Burger menu toggle
	var burger = document.querySelector('.nav-toggle');
	var menu = document.querySelector('.nav-menu');
	burger.addEventListener('click', function () {
		burger.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	});
})();

(function () {
	'use strict';

	function hideScrollHint() {
		if (window.scrollY > 300) {
			document.removeEventListener('scroll', hideScrollHint);
			document.querySelector('#scroll-hint').classList.add('hidden');
		}
	}
	document.addEventListener('scroll', hideScrollHint, {passive: true});
})();

function scrollToDiv(element) {
	element = element.replace("link", "");
	$('html,body').unbind().animate({scrollTop: $(element).offset().top-50},'slow');
}