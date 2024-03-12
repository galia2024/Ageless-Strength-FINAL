$(document).ready(function() {
    
    $("#say").hide();
    $("#No").hide();
    $("#Yes").hide();
    $("#ParksQuote").hide();
    $("#DianaQuote").hide();
    $("#KahloQuote").hide();
    $("#OKeeffeQuote").hide();
    $("#TeressaQuote").hide();
    $("#KellerQuote").hide();
    $(".wrong").hide();
    $(".again").hide();
    $("#pic1").hide();
    $("#pic2").hide();
    $("#pic3").hide();
    $("#pic4").hide();
    $("#pic5").hide();
    $("#pic6").hide();
    $("#pic7").hide();
    $("#pic8").hide();
    $("#pic9").hide();
    $("#pic10").hide();
    $("#pic11").hide();
    $("#pic12").hide();

    function animateElement(elementId, finalFontSize, colorClass) {
        $(elementId).fadeTo(2000, 1).animate({
            fontSize: finalFontSize
        }, 2000, function() {
            $(this).addClass(colorClass);
        });
    }


    function animateAndFadeOutSay() {
        $("#say").fadeTo(2000, 1).animate({
            fontSize: "36px"
        }, 2000, function() {
            $(this).addClass("fadeTextColorRed");

            $(this).delay(5500).fadeTo(2000, 0);
        });
    }

    function showAndEnlargeSay() {

        setTimeout(function() {
            animateAndFadeOutSay();
        }, 1000);
    }

    function showAndEnlargeYesNo() {

        setTimeout(function() {
            $("#No, #Yes").show(); 
            animateElement("#No", "100px", "fadeTextColorGreen");
            animateElement("#Yes", "100px", "fadeTextColorGreen");
        }, 8000); 
    }

    function triggerWrongAndAgain() {

        $("#Yes, #No, #say").hide();


        $(".wrong, .again").show().delay(5000).fadeOut(500, function() {
            window.history.back();
        });
    }


    $("#Yes").click(function() {
        triggerWrongAndAgain();
    });


    $(document).keydown(function(e) {
        if(e.key === "Y" || e.key === "y") {
            triggerWrongAndAgain();
        }
    });

    function handleNoAction() {
        $("#say, #No, #Yes, .wrong, .again, #pic2, #pic3, #pic4, #pic5, #pic6, #pic7, #pic8, #pic9, #pic10, #pic11, #pic12").hide();
        $("#pic1").show(); 
    }


    $("#No").click(function() {
        handleNoAction();
    });


    $(document).keydown(function(e) {
        if(e.key === "N" || e.key === "n") {
            handleNoAction();
        }
    });

    $("#pic1").click(function() {
        $("#pic1").hide();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();
        $("#pic2").show();

    });

    $("#pic2").click(function() {
        $("#ParksQuote").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });
    
    $("#ParksQuote").click(function() {
        $("#pic2").hide();
        $("#pic3").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();
        $("#ParksQuote").hide();

    });

    $("#pic3").click(function() {
        $("#pic3").hide();
        $("#pic4").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#pic4").click(function() {
        $("#DianaQuote").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#DianaQuote").click(function() {
        $("#pic4").hide();
        $("#pic5").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();
        $("#DianaQuote").hide();

    });

    $("#pic5").click(function() {
        $("#pic5").hide();
        $("#pic6").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#pic6").click(function() {
        $("#KahloQuote").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#KahloQuote").click(function() {
        $("#pic6").hide();
        $("#pic7").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();
        $("#KahloQuote").hide();

    });

    $("#pic7").click(function() {
        $("#pic7").hide();
        $("#pic8").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#pic8").click(function() {
        $("#OKeeffeQuote").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#OKeeffeQuote").click(function() {
        $("#pic8").hide();
        $("#pic9").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();
        $("#OKeeffeQuote").hide();

    });

    $("#pic9").click(function() {
        $("#pic9").hide();
        $("#pic10").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#pic10").click(function() {
        $("#TeressaQuote").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#TeressaQuote").click(function() {
        $("#pic10").hide();
        $("#pic11").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();
        $("#TeressaQuote").hide();

    });

    $("#pic11").click(function() {
        $("#pic11").hide();
        $("#pic12").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });

    $("#pic12").click(function() {
        $("#KellerQuote").show();
        $("#Yes").hide();
        $("#No").hide();
        $("#say").hide();

    });
    showAndEnlargeSay();
    showAndEnlargeYesNo();
});
