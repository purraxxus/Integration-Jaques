var BedrijfNaam;
var NrBedrijf;
$(function () {
  $.ajax({
    url: 'JSON/Bedrijven.json'
    , dataType: 'json'
    , success: onSuccess
    , error: function (err) {
      console.error('Fout: ', err);
    }
  });
});

function onSuccess(data) {
  responseObject = data.features;
  BedrijfNaam = localStorage.getItem('bedrijfsNaam');
  JsonBinnenHalen(responseObject)
  vulHTML(responseObject);
};

function vulHTML() {
  var HeaderHTML = "";
  var url = "../img/" + responseObject[NrBedrijf].properties.source;
  console.log(url);
  HeaderHTML += '<div class= "profielFoto" style=" background-image: url(' + url + ');" > '
  HeaderHTML += '<h1 id = "' + responseObject[NrBedrijf].properties.Category + '" > ' + responseObject[NrBedrijf].properties.Naam + ' </h1> </div > ';
  HeaderHTML += '<div class="row clearfix"> <a class="icon_link" href="#"><i class="material-icons">location_on</i></a>'
  HeaderHTML += '<div class="info_company"> <p>' + responseObject[NrBedrijf].properties.Adres + '</p><p><a href="mailto:info@kittybons.com">contact</a></p> </div>'
  $(".containerHeader").html(HeaderHTML);
  console.log(HeaderHTML);
}

function JsonBinnenHalen(responseObject) {
  for (i = 0; i < responseObject.length; i++) {
    console.log()
    if (BedrijfNaam == responseObject[i].properties.Naam) {
      NrBedrijf = i;
    }
  }
}