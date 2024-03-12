$(document).ready(function() {
    var words = ['#never', '#doubt', '#yourself', '#follow', '#your', '#dreams'];
    var initialDelay = 100;
    var enlargeDuration = 100;
    var fadeOutDuration = 500;

    function animateWordsSequentially(words, index) {
        if (index >= words.length) {
            $(words.join(', ')).fadeIn().css('color', '#01ff00');
            return;
        }

        var word = words[index];
        $(word).fadeIn().animate({
            fontSize: '+=10px'
        }, enlargeDuration, function() {
            $(this).css('color', 'rgb(205, 11, 11)');
        }).delay(fadeOutDuration).fadeOut(fadeOutDuration, function() {
            animateWordsSequentially(words, index + 1);
        });
    }

    setTimeout(function() {
        animateWordsSequentially(words, 0);
    }, initialDelay);
});
