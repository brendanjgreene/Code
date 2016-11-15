$(document).ready(function() {
 

 	$("p").click(function(){
        $("p").addClass( "highlight_text");
    });

    $("h2").hover(function(){
    	$("h2").addClass( "lightBlueBack");
    });

    $("#h2html").hover(function(){
    	$("#h2html").addClass( "h22em");
    	$("#h2mysql").removeClass( "h22em");
    	$("#h2python").removeClass( "h22em");
    	$("#h2jquery").removeClass( "h22em");
    	$("#h2django").removeClass( "h22em");
    	$("#h2css").removeClass( "h22em");
    });

    $("#h2mysql").hover(function(){
    	$("#h2html").removeClass( "h22em");
    	$("#h2mysql").addClass( "h22em");
    	$("#h2python").removeClass( "h22em");
    	$("#h2jquery").removeClass( "h22em");
    	$("#h2django").removeClass( "h22em");
    	$("#h2css").removeClass( "h22em");
    });

    $("#h2python").hover(function(){
    	$("#h2html").removeClass( "h22em");
    	$("#h2mysql").removeClass( "h22em");
    	$("#h2python").addClass( "h22em");
    	$("#h2jquery").removeClass( "h22em");
    	$("#h2django").removeClass( "h22em");
    	$("#h2css").removeClass( "h22em");
    });

    $("#h2jquery").hover(function(){
    	$("#h2html").removeClass( "h22em");
    	$("#h2mysql").removeClass( "h22em");
    	$("#h2python").removeClass( "h22em");
    	$("#h2jquery").addClass( "h22em");
    	$("#h2django").removeClass( "h22em");
    	$("#h2css").removeClass( "h22em");
    });

    $("#h2jquery").hover(function(){
    	$("#h2html").removeClass( "h22em");
    	$("#h2mysql").removeClass( "h22em");
    	$("#h2python").removeClass( "h22em");
    	$("#h2jquery").addClass( "h22em");
    	$("#h2django").removeClass( "h22em");
    	$("#h2css").removeClass( "h22em");
    });

    $("#h2django").hover(function(){
    	$("#h2html").removeClass( "h22em");
    	$("#h2mysql").removeClass( "h22em");
    	$("#h2python").removeClass( "h22em");
    	$("#h2jquery").removeClass( "h22em");
    	$("#h2django").addClass( "h22em");
    	$("#h2css").removeClass( "h22em");
    });

    $("#h2css").hover(function(){
    	$("#h2html").removeClass( "h22em");
    	$("#h2mysql").removeClass( "h22em");
    	$("#h2python").removeClass( "h22em");
    	$("#h2jquery").removeClass( "h22em");
    	$("#h2django").removeClass( "h22em");
    	$("#h2css").addClass( "h22em");
    });
    $(".bottom_button").mouseenter(function(){
    	$("body").addClass("blackBack");
    });
    $(".bottom_button").mouseleave(function(){
    	$("body").removeClass("blackBack");
    });

    $(".button1").click(function(){
    	$(".button1").hide();
    });


}); 
