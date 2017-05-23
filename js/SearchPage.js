/*BRONNEN
__https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document


*/
var Bedrijven;
var zoekWaarde;
var responseObject;
$(function () {
  $.ajax({
    url: '../JSON/Bedrijven.json'
    , dataType: 'json'
    , success: onSuccess
    , error: function (err) {
      console.error('Fout: ', err);
    }
  });
});

function onSuccess(data) {
  responseObject = data.Bedrijven;
  console.log(responseObject);
}

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
/*---____---____---___---____---____---___---____---____---___---____---____---___---____---____---___---____---____---___---____---____---___---____---____---___---____---____---___*/
function zoekWaardeVeranderen() {
  zoekWaarde = $("#search").val();
  genereerLijstMetBedrijven();
}

function zoek() {
  if (zoekWaarde != null) {
    var filterArray = [];
    Bedrijven.forEach(function (Bedrijven) {
      var zoekRegex = new RegExp(zoekWaarde, "gi");
      if (Bedrijven.naam.match(zoekRegex)) {
        filterArray.push(Bedrijven)
      }
    });
    Bedrijven = filterArray;
  }
}

function genereerLijstMetBedrijven() {
  zoek();
  for (i = 0; i < Bedrijven.length; i++) {
    //    if ()
    console.log(Bedrijven)
  }
}