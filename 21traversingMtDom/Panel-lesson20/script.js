$(document).ready(function(){
 // put your code here
 //$("#panel").click(function(){
 //	$("#panel").hide();
 //});
 //$('.theButton').click(function(){
 //	$(this).hide();
 //});
 //$("#panel").click(function(){
 	//$("#panel").fadeTo(1000, 0.1);
 //}); panel solution works just as well when selecting all
 $(".theButton").click(function(){
 	$("#panel .container").siblings().fadeTo(1000, 0.1);
 });
 $(".superButton").click(function(){
 	$("#panel .container").siblings().fadeTo(1000, 1);
 });
});