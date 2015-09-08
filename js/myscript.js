$(document).ready(function() {
	$(".box").mouseover(function() {
		$(this).css({scale:[1.05,1.15]});
		$(this).css("background", "#cccccc");
		$(this).css("color", "#ffffff");
	}).mouseout(function() {
		$(this).stop().transition({scale:[1,1]});
		$(this).css("background", "white");
		$(this).css("color", "#333333");
	});
});
















