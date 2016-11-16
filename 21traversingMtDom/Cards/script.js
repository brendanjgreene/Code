$(document).ready(function() {
    

    $("p").click(function(){
        $(this).children("a").css("background-color", "yellow");
    });

    $("img").click(function(){
        $(this).next().children('p').slideDown();
    });

    $("img").click(function(){
        $(this).next().next('p').slideDown();
    });  // added this because some didn't have card bottom division.

    $(".card").click(function(){
        $(this).toggleClass("highlighted_card");
    });

    $("#select").click(function(){
        $(".card:not(.highlighted_card)").hide();
    });

    $("#all").click(function(){
        $(".card").show();
    });
});