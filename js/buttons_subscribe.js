$(document).ready(function () {
  // dit is het hartje, eerste click is ELSE
  //
  $('.connect_users').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $(".number_subs").html(function (i, val) {
        return +val - 1;
      });
      $("i.hartje").css("color", "bisque").text("favorite_border");
    }
    else {
      $("i.hartje").css("color", "red").text("favorite").animate({
        fontSize: '2em'
      }).animate({
        fontSize: '24px'
      });
      $(".number_subs").html(function (i, val) {
        return +val + 1;
      });
    }
    $(this).data("clicks", !clicks);
  });
  // dit is het attend-labeltje, eerste click is ELSE
  //
  $(".attend_link").click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $("i#attend_label").css("color", "black").text("label_outline");
      $(".attend_link p").delay("slow").text("Join us!");
    }
    else {
      $("i#attend_label").animate({
        opacity: '0.3'
      }, "fast").css("color", "green").text("label").animate({
        fontSize: '24px'
        , opacity: '1'
      });
      $(".attend_link p").text("You're in!");
    }
    $(this).data("clicks", !clicks);
  });
});