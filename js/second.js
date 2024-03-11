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

    // Specific animation for #say that includes fading out after fully appearing
    function animateAndFadeOutSay() {
        $("#say").fadeTo(2000, 1).animate({
            fontSize: "36px"
        }, 2000, function() {
            $(this).addClass("fadeTextColorRed");
            // Wait for 2 seconds, then fade out
            $(this).delay(5500).fadeTo(2000, 0);
        });
    }

    function showAndEnlargeSay() {
        // Wait 1 second after page load to start the effect on #say
        setTimeout(function() {
            animateAndFadeOutSay();
        }, 1000);
    }

    function showAndEnlargeYesNo() {
        // Wait for #say animation and fading to complete before starting #No and #Yes animations
        setTimeout(function() {
            $("#No, #Yes").show(); // Make sure #No and #Yes are visible for animation
            animateElement("#No", "100px", "fadeTextColorGreen");
            animateElement("#Yes", "100px", "fadeTextColorGreen");
        }, 8000); // Timing adjusted to ensure #say has completed its sequence
    }

    function triggerWrongAndAgain() {
        // Hide #Yes and #No when #Yes is clicked
        $("#Yes, #No, #say").hide();

        // Show .wrong and .again for 3 seconds, then navigate back
        $(".wrong, .again").show().delay(5000).fadeOut(500, function() {
            window.history.back();
        });
    }

    // Event listener for #Yes click
    $("#Yes").click(function() {
        triggerWrongAndAgain();
    });

    // Event listener for keydown "Y" or "y"
    $(document).keydown(function(e) {
        if(e.key === "Y" || e.key === "y") {
            triggerWrongAndAgain();
        }
    });

    function handleNoAction() {
        // Hide everything except for #pic1
        $("#say, #No, #Yes, .wrong, .again, #pic2, #pic3, #pic4, #pic5, #pic6, #pic7, #pic8, #pic9, #pic10, #pic11, #pic12").hide();
        $("#pic1").show(); 
    }

    // Event listener for #No click
    $("#No").click(function() {
        handleNoAction();
    });

    // Event listener for keydown "N" or "n"
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

    // Trigger the animations
    showAndEnlargeSay();
    showAndEnlargeYesNo();
});
