var map;
var counterLeft = 1;
var counterMiddle = 0;
var counterRight = 0;
var markersArray = [];

$(document).ready(function () {
    loadMap(map, 'Jobs');
    $('#filterbutton').toggleClass('nav_jobs');
    $('#filterbutton').toggleClass('toggledLeft');

    $('#filterbutton').click(function (e) {
        counterLeft += 1;
        console.log(counterLeft);
        $(this).toggleClass('nav_jobs');
        $(this).toggleClass('toggledLeft');
        if (counterLeft % 2 == 1) {
            var txt = $(e.target).text();
            loadMap(map, txt);
        } else {
            clearOverlays();
            console.log('delete markers');
        }
    });
    $('#filterbutton2').click(function (e) {
        counterMiddle += 1;
        console.log(counterMiddle);
        $(this).toggleClass('nav_events');
        $(this).toggleClass('toggledMiddle');
        if (counterMiddle % 2 == 1) {
            var txt = $(e.target).text();
            loadMap(map, txt);
        } else {
            clearOverlays();
            console.log('delete markers');
        }
    });
    $('#filterbutton3').click(function (e) {
        counterRight += 1;
        console.log(counterRight);
        $(this).toggleClass('nav_tools');
        $(this).toggleClass('toggledRight');
        if (counterRight % 2 == 1) {
            var txt = $(e.target).text();
            loadMap(map, txt);
        } else {
            clearOverlays();
            console.log('delete markers');
        }
    });
});

function loadMap(map, txtinput) {
    if (txtinput == "Startups") {
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        $.ajax({
            url: 'JSON/Bedrijven.json',
            dataType: 'json',
            success: function (data) {
                for (var i = 0; i < data.features.length; i++) {
                    var type = data.features[i].properties.category;
                    var coords = data.features[i].geometry.coordinates;
                    var descr = data.features[i].properties.Beschrijving;
                    var name = data.features[i].properties.Naam;
                    var adres = data.features[i].properties.Adres;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);

                    var contentString = "<a style='text-decoration: none; color: black' href='Event_Detailpage.html'><h1>" + name + "<h1><br>" + "<p>" + descr + "<p><br>" + "<p>" + adres + "<p><br></a>";
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: latLng,
                        title: name,
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        description: contentString,
                        bedrijf: data.features[i].properties.Naam,
                    });
                    markersArray.push(marker);
                    google.maps.event.addListener(marker, 'click', function(){
                        infowindow.setContent(this.description);
                        infowindow.open(map, this);
                        window.localStorage.setItem('bedrijfsNaam',this.bedrijf);
                        console.log(this.bedrijf);
                    });
                }
            },
            error: function (err) {
                console.error('Fout: ', err);
            }
        });
    } else if (txtinput == "Events") {
        var map;
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        $.ajax({
            url: 'JSON/events.json',
            dataType: 'json',
            success: function (data) {
                for (var i = 0; i < data.evenementen.length; i++) {
                    var coords = data.evenementen[i].geometry.coordinates;
                    var naam = data.evenementen[i].naamEvent;
                    var descr = data.evenementen[i].details;
                    var time = data.evenementen[i].uur;
                    var adres = data.evenementen[i].straatNummer + " " + data.evenementen[i].stad;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    var contentString = "<a style='text-decoration: none; color: black' href='Event_Detailpage.html'><h1>" + naam + "<h1><br>" + "<p>" + descr + "<p style='color: lightgrey;><br>" + time + "<p><br>" + "<p>" + adres + "<p><br></a>";
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: latLng,
                        title: name,
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        description: contentString,
                        bedrijf: data.evenementen[i].naam,
                    });
                    markersArray.push(marker);
                    google.maps.event.addListener(marker, 'click', function(){
                        infowindow.setContent(this.description);
                        infowindow.open(map, this);
                        window.localStorage.setItem('eventNaam',this.bedrijf);
                        console.log(this.bedrijf);
                    });
                }
            },
            error: function (err) {
                console.error('Fout: ', err);
            }
        });
    } else if (txtinput == "Jobs") {
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        $.ajax({
            url: 'JSON/events.json',
            dataType: 'json',
            success: function (data) {
                
                for (var i = 0; i < data.evenementen.length; i++) {
                    var coords = data.evenementen[i].geometry.coordinates;
                    var naam = data.evenementen[i].naamEvent;
                    var job = data.evenementen[i].jobs.welkeJob;
                    var descr = data.evenementen[i].details;
                    var time = data.evenementen[i].uur;
                    var adres = data.evenementen[i].straatNummer + " " + data.evenementen[i].stad;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);

                    var contentString = "<a style='text-decoration: none; color: black' href='Event_Detailpage.html'><h1>" + naam + "<h1><br>" + "<p>" + descr + "<p style='color: lightgrey;><br>" + time + "<p><br>" + "<p>" + adres + "<p><br></a>";
                    var infowindow = new google.maps.InfoWindow();
                    var marker = new google.maps.Marker({
                        position: latLng,
                        title: name,
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                        description: contentString,
                        bedrijf: data.evenementen[i].naam,
                    });
                    markersArray.push(marker);
                    google.maps.event.addListener(marker, 'click', function(){
                        infowindow.setContent(this.description);
                        infowindow.open(map, this);
                        window.localStorage.setItem('eventNaam',this.bedrijf);
                        console.log(this.bedrijf);
                    });
                }

                

            },
            error: function (err) {
                console.error('Fout: ', err);
            }
        });
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(50.837, 4.322831),
        mapTypeId: 'terrain',
        disableDefaultUI: true,

        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
            },
                    {
                        "lightness": 45
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
            },
                    {
                        "visibility": "on"
            }
        ]
    }
]
    });
}

function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

}

function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;
}