//Dit is het hartje voor subscribers
//
$(document).ready(function () {
  $(".hartje").click(function hartjeRoodMaken(event) {
    $("i.hartje").css("color", "red").text("favorite").animate({
      fontSize: '3em'
    }).animate({
      fontSize: '24px'
    });
    $(".number_subs").html(function (i, val) {
      return +val + 1;
    });
    $(".hartje").addClass("subscribed").removeClass("hartje");
    $(this).off(event);
    //      
  });
  $(".subscribed").click(function hartjeGrijsMaken(event) {
    $("i.subscribed").css("color", "bisque").text("favorite_border");
    $(".number_subs").html(function (i, val) {
      return +val - 1;
    });
    $(this).addClass("hartje").removeClass("subscribed");
//    $(this).off(event);
  });

  $(".attend_link").click(function () {
    $("i#attend_label").css("color", "green").text("label");
    $(".attend_link p").text("You're in!");
  });
});