/*BRONNEN
__https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document


*/
var Bedrijven;
var zoekWaarde;
var newBedrijven;
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
  Bedrijven = data.features;
}

function ToggleFilters(e) {
  var listItems = e.target;
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
  Filterwaardes();
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
      if (Bedrijven.properties.Naam.match(zoekRegex)) {
        filterArray.push(Bedrijven)
      }
    });
    if (filterArray.length == 0) {
      newBedrijven = [];
    }
    else {
      newBedrijven = filterArray;
    }
  }
  else {}
}

function genereerLijstMetBedrijven() {
  newBedrijven = Bedrijven;
  zoek();
  Filter();
  var htmlString = "";
  if (newBedrijven.length) {
    for (i = 0; i < newBedrijven.length; i++) {
      htmlString += '<img src="' + newBedrijven[i].properties.source + '">'
      htmlString += '<p>' + newBedrijven[i].properties.Naam + '</p>'
      $("#content").html(htmlString);
    }
  }
  else {
    $('main#content').empty();
  }
}

function Filterwaardes() {
  Filterwaarde = listFilterItemsID[i].textContent;
  genereerLijstMetBedrijven();
}

function Filter() {}