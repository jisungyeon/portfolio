function showFloatingMenu() {
    $header = $("header");
    $sub = $(".headerGnb").find(".sub");

    let scrollTop = 0;

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        $(".pos").text( scrollTop );

        if ( scrollTop > 50 ) {
            $header.addClass("on");
            $sub.addClass("on");
            $header.find(".headerBack").css({
                width: "100%"
              });
        } else {
            $header.removeClass("on");
            $sub.removeClass("on");
        }
    });
}
showFloatingMenu();

