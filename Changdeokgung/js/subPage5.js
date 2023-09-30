// console.log($(".ani").eq(0).offset().top);
// console.log($(".ani").eq(1).offset().top);
// console.log($(".ani").eq(2).offset().top);


let winH = $(window).innerHeight();
let scrollTop = $(window).scrollTop();

scrollAni();

$(window).on("resize", function() {
    winH = $(window).innerHeight();
    scrollAni();
});

$(window).on("scroll", function() {
    scrollTop = $(this).scrollTop();
    scrollAni();
    // if (scrollTop + winH/1.5 > $(".ani").eq(0).offset().top) {
    //     $(".ani").eq(0).addClass("on");
    // }
    // if (scrollTop + winH/2 > $(".ani").eq(1).offset().top) {
    //     $(".ani").eq(1).addClass("on");
    // }
    // if (scrollTop + winH/2 > $(".ani").eq(2).offset().top) {
    //     $(".ani").eq(2).addClass("on");
    // }


});

function scrollAni() {

    const $ani = $(".ani");
    for (let i = 0; i < $ani.length; i++) {
        if (scrollTop + winH/1.2 > $ani.eq(i).offset().top) {
            $ani.eq(i).addClass("on");
        } else {
            $ani.eq(i).removeClass("on");
        }
    }


}