/*BRONNEN
__https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document


*/
var Bedrijven;
var zoekWaarde;
var Filterwaarde;
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
  if (listItems.className == "notToggled") {
    listItems.className = ("toggled");
    var spanItem = $(".toggled span");
    spanItem.width(110 + "%");
  }
  else if (listItems.className == "toggled") {
    listItems.className = ("notToggled");
    var spanItem = $(".notToggled span");
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
    console.log(newBedrijven);
    var filterArray = [];
    newBedrijven.forEach(function (newBedrijven) {
      var zoekRegex = new RegExp(zoekWaarde, "gi");
      if (newBedrijven.properties.Naam.match(zoekRegex)) {
        filterArray.push(newBedrijven)
      }
    });
    newBedrijven = filterArray;
  }
}

function genereerLijstMetBedrijven() {
  newBedrijven = Bedrijven;
  Filter();
  zoek();
  var htmlString = "";
  if (newBedrijven.length) {
    for (i = 0; i < newBedrijven.length; i++) {
      htmlString += '<img class="Search" src="' + newBedrijven[i].properties.source + '">'
      htmlString += '<p class="Search">' + newBedrijven[i].properties.Naam + '</p>'
      $("#content").html(htmlString);
    }
  }
  else {
    $('main#content').empty();
  }
}

function Filterwaardes() {
  FilterwaardeArray = "";
  var filters = $(".toggled");
  for (i = 0; i < filters.length; i++) {
    if (i == 0) {
      FilterwaardeArray += '(';
      FilterwaardeArray += filters[0].textContent.replace(/\s/g, "");
      FilterwaardeArray += ')'
    }
    else if (i !== 0) {
      FilterwaardeArray += '|(';
      FilterwaardeArray += filters[i].textContent.replace(/\s/g, "");
      FilterwaardeArray += ')'
    }
  }
  Filterwaarde = FilterwaardeArray;
}

function Filter() {
  if (Filterwaarde != null) {
    var filterArray = [];
    Bedrijven.forEach(function (Bedrijven) {
      var zoekRegex = new RegExp(Filterwaarde, "gi");
      if (Bedrijven.properties.Category.match(zoekRegex)) {
        filterArray.push(Bedrijven)
      }
    });
    newBedrijven = filterArray;
    console.log(newBedrijven);
  }
}