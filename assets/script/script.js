$(document).ready(function(){
    $(".next").on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if($(".slider-inner img").last().hasClass('active')) {
            nextImg = $(".slider-inner img").first();
        }

        if(nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $(".prev").on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if($(".slider-inner img").first().hasClass('active')) {
            prevImg = $(".slider-inner img").last();
        }

        if(prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }

        console.log(prevImg.length);
        console.log(currentImg.length);
    });


});