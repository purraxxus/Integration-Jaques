//Dit is het hartje voor subscribers
//
$(document).ready( function (){
  
  
  $(".hartje").click(function () {
  $("i.hartje").css("color", "red").text("favorite").animate({
    fontSize: '3em'
  }).animate({
    fontSize: '24px'
  });
  $(".connect_users p").html(function (i, val) {
    return +val + 1
  });
  $(".hartje").addClass("subscribed").removeClass("hartje");
}); 
                  
                  
                  $(".subscribed").click(function () {
  $("i.subscribed").css("color", "grey").text("favorite_border");
  $(".connect_users p").html(function (i, val) {
    return +val - 1
  }).addClass("hartje").removeClass("subscribed");
});
//
//
//  Dit is het labeltje voor attend
$(".attend_link").click(function () {
  $("i#attend_label").css("color", "green").text("label");
  $(".attend_link p").text("You're in!")
});
});

