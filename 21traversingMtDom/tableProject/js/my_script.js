$(document).ready(function() {
	//$("tr:odd").addClass("odd-color")
	//$("tr:even").addClass("even-color")
	$("th").click(function(){
		//$("tr").children().removeClass("highlight");
		$("td").removeClass("highlight"); // alternative solution
		$(this).siblings().addClass("highlight");
	});

	$(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

   });
});