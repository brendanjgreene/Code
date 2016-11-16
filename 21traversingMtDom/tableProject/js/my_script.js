$(document).ready(function() {
	//$("tr:odd").addClass("odd-color")
	//$("tr:even").addClass("even-color")
	$("th").click(function(){
		$("tr").children().removeClass("highlight");
		$(this).siblings().addClass("highlight");
	});
});