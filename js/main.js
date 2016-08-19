$(document).ready(function () {
    var slide = $('.slider');
    slide.slider({full_width: true, height: 290});
    $("#about").show();
    var tabhosts = $(".tech a");
    tabhosts.each(function () {
        //$($(this).attr("href")).hide();

        $(this).click(function (event) {
            event.preventDefault();
            tabhosts.each(function () {
                $($(this).attr("href")).hide();
            });

            $($(this).attr("href")).show();
        });
    });
});

$(".button-collapse").sideNav();

