/*BRONNEN
__https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document


*/
$(function () {});

function ToggleFilters(e) {
  var listItems = e.target;
  console.log(listItems.getElementsByTagName("span"));
  if (listItems.id == "notToggled") {
    listItems.id = ("toggled");
    var spanItem = $("#toggled span")
    spanItem.width(110 + "%");
  }
  else if (listItems.id == "toggled") {
    listItems.id = ("notToggled");
    var spanItem = $("#notToggled span")
    spanItem.width(0 + "%");
  }
}