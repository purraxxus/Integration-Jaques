var BedrijfNaam;
var NrBedrijf;
$(function () {
  $.ajax({
    url: 'JSON/Bedrijven.json'
    , dataType: 'json'
    , success: onSuccessBedrijf
    , error: function (err) {
      console.error('Fout: ', err);
    }
  });
  $.ajax({
    url: 'JSON/events.json'
    , dataType: 'json'
    , success: onSuccessEvents
    , error: function (err) {
      console.error('Fout: ', err);
    }
  });
});

function onSuccessBedrijf(data) {;
  responseObject = data.features;
  BedrijfNaam = localStorage.getItem('bedrijfsNaam');
  JsonBinnenHalen(responseObject)
  vulHTMLBedrijf(responseObject);
};

function onSuccessEvents(data) {
  responseObjectEvents = data.evenementen;
  console.log(responseObjectEvents);
}

function vulHTMLBedrijf() {
  var HeaderHTML = "";
  var url = "../img/" + responseObject[NrBedrijf].properties.source;
  HeaderHTML += '<div class= "profielFoto" style=" background-image: url(' + url + ');" > '
  HeaderHTML += '<h1 id = "' + responseObject[NrBedrijf].properties.Category + '" > ' + responseObject[NrBedrijf].properties.Naam + ' </h1> </div > ';
  HeaderHTML += '<div class="row clearfix">'
  HeaderHTML += '<div class="info_company"><img class="PinLocation" src="/img/icon/lol.png"> <p>' + responseObject[NrBedrijf].properties.Adres + '</p><p><a href="mailto:info@kittybons.com">contact</a></p> </div>'
  var InfoHTML = "";
  InfoHTML += '<p>' + responseObject[NrBedrijf].properties.Beschrijving + '</p>'
  $("#containerHeader").html(HeaderHTML);
  $("#containerInfo").html(InfoHTML);
}

function vulHTMLEvent() {
  var EventsHTML = "";
  EventsHTML += '<div class="example_item clearfix"><div class="example_item_date"> <span class="example_item_title_on_image">'
  EventsHTML += +responseObjectEvents[nr].datum + '</span></div>';
  EventsHTML += '<div class="example_item_title"><a href="html/Event_Detailpage.html">'
}

function JsonBinnenHalen(responseObject) {
  for (i = 0; i < responseObject.length; i++) {
    console.log()
    if (BedrijfNaam == responseObject[i].properties.Naam) {
      NrBedrijf = i;
    }
  }
}