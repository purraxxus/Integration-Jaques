//Dit is het hartje voor subscribers
$(document).ready(function () {
  $(".connect_users").click(function () {
    $("i#hartje").css("color", "red").text("favorite");
    $(".connect_users p").html(function (i, val) {
      return +val + 1
    });
    });

  
//
//
//  Dit is het labeltje voor attend
  $(".attend_link").click(function () {
    $("i#attend_label").css("color", "green").text("label");
    $(".attend_link p").text("You're in!")
  });
});
//$("p").click(function(){
//    $("#number_subs").text(function(i, origText){
//        return origText + "1" (index: " i + ")";
//    });
//});