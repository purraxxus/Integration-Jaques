/*BRONNEN
__https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document


*/
var Bedrijven;
var zoekWaarde;
var Filterwaarde;
var newBedrijven;
var spanItem;
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
//-_-_-_--_-_-_--_-_-_--_-_-_--_-_-_ZOEK--_-_-_--_-_-_--_-_-_--_-_-_--_-ZOEK-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_ZOEK_-_--_-_-_--_-_-_--_-_-_--_-_-_ZOEK_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_-
function zoekWaardeVeranderen() //Verander de zoekwaarde bij het typen
{
  zoekWaarde = $("#search").val();
  genereerLijstMetBedrijven();
}

function zoek() //Maak een regex aan met de zoekwaarden en Zoek
{
  if (zoekWaarde != null) {
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
//-_-_-_--_-_-_--_-_-_--_-_-_--_-_-Filter--_-_-_--_-_-_--_-_-_--_-_-_--_-Filter-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--Filter-_--_-_-_--_-_-_--_-_-_--_-_-Filter-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_-
function ToggleFilters(e) //verander filters en past aan bij filters tijdens search
{
  var listItems = e.target;
  var listItemsText = $(listItems).text();
  var andereListItems = $("#filterMenu li")
  for (i = 0; i < andereListItems.length; i++) {
    if (listItemsText == $(andereListItems[i]).text()) {
      if (listItems.className == "notToggled") {
        listItems.className = ("toggled");
        andereListItems[i].className = ("toggled");
        var spanItem = $(".toggled span");
        spanItem.width(110 + "%");
      }
      else if (listItems.className == "toggled") {
        listItems.className = ("notToggled");
        andereListItems[i].className = ("notToggled");
        var spanItem = $(".notToggled span");
        spanItem.width(0 + "%");
      }
    }
  }
  Filterwaardes();
}

function Filterwaardes() // genereer string voor regex bij filter
{
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

function Filter() //pas regex toe en filter 
{
  if (Filterwaarde != null) {
    var filterArray = [];
    Bedrijven.forEach(function (Bedrijven) {
      var zoekRegex = new RegExp(Filterwaarde, "gi");
      if (Bedrijven.properties.Category.match(zoekRegex)) {
        filterArray.push(Bedrijven)
      }
    });
    newBedrijven = filterArray;
  }
}
//-_-_-_--_-_-_--_-_-_--_-_-_--_-_-Bij search--_-_-_--_-_-_--_-_-_--_-_-_--_-Bij search-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--Bij search-_--_-_-_--_-_-_--_-_-_--_-_-Bij search-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_-
function FilterFunctie() //pas Header aan bij zoeken 
{
  var searchBalk = $("#search");
  var FilterKnop = $("header img")
  searchBalk.css("width", "75%");
  FilterKnop.css("height", "30px");
}

function ToonFilterMenu() //Toon het meny voor te filteren 
{
  var FilterMenu = $("#filterMenu");
  FilterMenu.slideToggle();
}
//-_-_-_--_-_-_--_-_-_--_-_-_--_-_-HTML vullen--_-_-_--_-_-_--_-_-_--_-_-_--_-HTML vullen-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_--HTML vullen-_--_-_-_--_-_-_--_-_-_--_-_-HTML vullen-_-_--_-_-_--_-_-_--_-_-_--_-_-_--_-_-_-
function genereerLijstMetBedrijven() // Pas filters en zoek toe en genereer lijst in html
{
  newBedrijven = Bedrijven;
  Filter();
  zoek();
  FilterFunctie();
  var htmlString = "";
  if (newBedrijven.length) {
    for (i = 0; i < newBedrijven.length; i++) {
      htmlString += '<div id="' + i + '" class="Company"><img class="Search" src="' + newBedrijven[i].properties.source + '">'
      htmlString += '<h3 class="Search">' + newBedrijven[i].properties.Naam + '</h3></div>'
      cssChanger(i);
      $("#content").html(htmlString);
    }
  }
  else {
    $('main#content').empty();
  }
}
/*function cssChanger(nr) 
{
if (nr % 2 != 0) {
  var classDing = $(nr + ".Company");
  $("#" + nr).css("background-color", "yellow");
}
}*/