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
  JsonBinnenHalen(responseObject);
  vulHTMLBedrijf(responseObject);
};

function onSuccessEvents(data) {
  responseObjectEvents = data.evenementen;
  vulHTMLEvent();
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
  var randomLength = Math.floor(Math.random() * 5) + 1;
  console.log(randomLength);
  for (i = 0; i < randomLength; i++) {
    var nr = Math.floor(Math.random() * responseObjectEvents.length);
    var nr2 = Math.floor(Math.random() * responseObjectEvents[i].jobs.length);
    console.log(responseObjectEvents[nr].jobs);
    EventsHTML += '<div class="example_item clearfix"><div class="example_item_date" id="' + responseObject[NrBedrijf].properties.Category + '"> <span  class="example_item_title_on_image">' + responseObjectEvents[nr].datum + '</span></div>';
    EventsHTML += '<div class="example_item_title"><a href="html/Event_Detailpage.html">' + responseObjectEvents[nr].naam + '</a></div> <div class = "example_item_description" >' + responseObjectEvents[nr].details + '</div>'
    EventsHTML += '</div>'
    var jobsHTML = "";
    jobsHTML += '<div class="example_item clearfix"><div class="example_item_date" id="' + responseObject[NrBedrijf].properties.Category + '"> <span  class="example_item_title_on_image">' + responseObjectEvents[nr].jobs[nr2].fuctie + '</span></div>';
    jobsHTML += '<div class="example_item_title"><a href="html/Event_Detailpage.html">' + responseObjectEvents[nr].jobs[nr2].welkeJob + '</a></div> <div class = "example_item_description" >' + responseObjectEvents[nr].jobs[nr2].beschrijving + '</div>'
    jobsHTML += '</div>'
  }
  $("#containerEvents").html(EventsHTML);
  $("#containerJobs").html(jobsHTML);
}

function JsonBinnenHalen(responseObject) {
  for (i = 0; i < responseObject.length; i++) {
    console.log()
    if (BedrijfNaam == responseObject[i].properties.Naam) {
      NrBedrijf = i;
    }
  }
}