const slider = $("#slider");

slider.slick({
    arrows: true,
    prevArrow: $(".dateSlider").find(".prevArrow"),
    nextArrow: $(".dateSlider").find(".nextArrow"),
});



// ---------날짜 선택-------------

$("nav .available").on("click", function () {
    // $(this).addClass("on");
    // $("nav .available").not(this).removeClass("on");

    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
    } else  {
        $(this).addClass("on");
    }

    $('nav .available').not(this).removeClass('on');
});


// ---------시간 선택-------------

$(".timeWrap nav .sell").on("click", function() {
    $(this).toggleClass("on");
    
    $(".timeWrap nav .sell").not(this).removeClass("on");
    $(".timeWrap nav .soldOut").removeClass("off");
});

$(".timeWrap nav .soldOut").on("click", function() {
    $(this).toggleClass("off");

    $(".timeWrap nav .soldOut").not(this).removeClass("off");
    $(".timeWrap nav .sell").removeClass("on");
});
  

// $(".timeWrap nav .see").on("click", function() {
//     if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
//       $(this).css("background-color", "#AFDCE7");
//     } else {
//       $(this).css("background-color", "transparent");
//     }
//   });
  
  



