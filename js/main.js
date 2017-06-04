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


	// Smooth anchor scroll
	new AnchorScroller({
		checkParent:true
	})
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




(function () {
	'use strict';
	function makeCanvas() {
		try {
			TagCanvas.Start('myCanvas', 'tags',{
				textColour: null,
				outlineColour: '#363636',
				reverse: true,
				pinchZoom: true,
				depth: 0.8,
				textHeight:26,
				maxSpeed: 0.08,
				zoom: 0.8
			});
		} catch(e) {
			//something went wrong, hide the canvas container
			document.getElementById('myCanvasContainer').style.display = 'none';
		}
	}
	document.addEventListener('DOMContentLoaded', makeCanvas);
})();
