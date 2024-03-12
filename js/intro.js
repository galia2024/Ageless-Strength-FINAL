//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#pic1").hide();
    $("#pic2").hide();
    $("#pic3").hide();
    $("#pic4").hide();
    $("#pic5").hide();
    $("#pic6").hide();

    $("#ARE").click(function() {
        var currentBg = $("#box1").css('background-image');     
        if (currentBg !== 'none') {
            $("#box1").css('background-image', 'none');
        } else {
            var imageUrl = $("#pic1").attr("src");
            $("#box1").css({
                'background-image': 'url(' + imageUrl + ')',
                'background-size': 'cover', 
                'background-position': 'center center', 
            });
        }
    });

    $("#YOU").click(function() {
        var currentBg = $("#box2").css('background-image');     
        if (currentBg !== 'none') {
            $("#box2").css('background-image', 'none');
        } else {
            var imageUrl = $("#pic2").attr("src");
            $("#box2").css({
                'background-image': 'url(' + imageUrl + ')',
                'background-size': 'cover', 
                'background-position': 'center center', 
            });
        }
    });

    $("#TOO_OLD").click(function() {
        var currentBg = $("#box3").css('background-image');     
        if (currentBg !== 'none') {
            $("#box3").css('background-image', 'none');
        } else {
            var imageUrl = $("#pic3").attr("src");
            $("#box3").css({
                'background-image': 'url(' + imageUrl + ')',
                'background-size': 'cover', 
                'background-position': 'center center', 
            });
        }
    });

    $("#TO").click(function() {
        var currentBg = $("#box4").css('background-image');     
        if (currentBg !== 'none') {
            $("#box4").css('background-image', 'none');
        } else {
            var imageUrl = $("#pic4").attr("src");
            $("#box4").css({
                'background-image': 'url(' + imageUrl + ')',
                'background-size': 'cover', 
                'background-position': 'center center', 
            });
        }
        $("#TO").toggleClass("permanent-style");
    });

    $("#GREAT").click(function() {
        var currentBg = $("#box5").css('background-image');     
        if (currentBg !== 'none') {
            $("#box5").css('background-image', 'none');
        } else {
            var imageUrl = $("#pic5").attr("src");
            $("#box5").css({
                'background-image': 'url(' + imageUrl + ')',
                'background-size': 'cover', 
                'background-position': 'center center', 
            });
        }
        $("#GREAT").toggleClass("clicked-style");
    });

    $("#box6").click(function(event) {
        if (!$(event.target).closest('#question').length) {
            $("#pic6").toggle();
        }

        if ($("#pic6").is(":visible")) {

            $("#question").animate({
                fontSize: "200px"
            }, 3000); 
        } else {

            $("#question").animate({
                fontSize: "150px" 
            }, 3000); 
        }
    });

});