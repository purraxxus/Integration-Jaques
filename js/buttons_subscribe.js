$(document).ready(function () {
  $('.connect_users').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {$(".number_subs").html(function (i, val) {
      return +val - 1;
    });
      $("i.hartje").css("color", "bisque").text("favorite_border");
      
      
    } else {
      $("i.hartje").css("color", "red").text("favorite").animate({
        fontSize: '3em'
      }).animate({
        fontSize: '24px'
      });
      $(".number_subs").html(function (i, val) {
        return +val + 1;
      });
      
      
      
    }
    $(this).data("clicks", !clicks);
  });
$(".attend_link").click(function () {
  $("i#attend_label").css("color", "green").text("label");
  $(".attend_link p").text("You're in!");
});

});
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  

//if (my_click === false) {
//  $(".hartje").click(function hartjeRoodMaken(event) {
//    $("i.hartje").css("color", "red").text("favorite").animate({
//      fontSize: '3em'
//    }).animate({
//      fontSize: '24px'
//    });
//    $(".number_subs").html(function (i, val) {
//      return +val + 1;
//    });
//    //      $(".hartje").addClass("subscribed").removeClass("hartje");
//    my_click = true;
//    //      $(this).off(event);
//    //      
//  });
//}
//if (my_click === true) {
//  $(".connect_users").click(function () {
//    $(".number_subs").html(function (i, val) {
//      return +val - 1;
//    });
//    my_click = false;
//  });
//}
////    $(".subscribed").click(function hartjeGrijsMaken(event) {
////      $("i.subscribed").css("color", "bisque").text("favorite_border");
////      $(".number_subs").html(function (i, val) {
////        return +val - 1;
////      });
////      $(this).addClass("hartje").removeClass("subscribed");
////      //    $(this).off(event);
////      my_click = false;
////    });
//// - en dit het labeltje voor atttend

