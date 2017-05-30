var map;

$(document).ready(function () {
    $('#filterbutton').click(function (e) {
        $(this).toggleClass('nav_jobs');
        $(this).toggleClass('toggledLeft');
        var txt = $(e.target).text();
        console.log(txt);
        loadMap(map, txt);
    });
    $('#filterbutton2').click(function (e) {
        $(this).toggleClass('nav_events');
        $(this).toggleClass('toggledMiddle');
        var txt = $(e.target).text();
        console.log(txt);
        loadMap(map, txt);
    });
    $('#filterbutton3').click(function (e) {
        $(this).toggleClass('nav_tools');
        $(this).toggleClass('toggledRight');
        var txt = $(e.target).text();
        console.log(txt);
        loadMap(map, txt);
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

                    var contentString = "<a href=../html/index.html style='text-decoration: none; color: black><h1 style='font-weight: 900;'>" + name + "<h1><br>" + "<p>" + descr + "<p><br>" + "<p style='color: lightgrey;'>" + adres + "<p><br></a>";
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: latLng,
                        title: name,
                        map: map,
                    });
                    marker.addListener('click', function () {
                        infowindow.open(map, marker);
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
                    var contentString = "<a href=../html/index.html style='text-decoration: none; color: black><h1 style='font-weight: 900;'>" + naam + "<h1><br>" + "<p>" + descr + "<p style='color: lightgrey;><br>" + time + "<p><br>" + "<p style='color: lightgrey;'>" + adres + "<p><br></a>";
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: latLng,
                        title: name,
                        map: map,
                    });
                    marker.addListener('click', function () {
                        infowindow.open(map, marker);
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
                console.log(data);
                for (var i = 0; i < data.evenementen.length; i++) {
                    var coords = data.evenementen[i].geometry.coordinates;
                    var naam = data.evenementen[i].naamEvent;
                    var job = data.evenementen[i].jobs.welkeJob;
                    var descr = data.evenementen[i].details;
                    var time = data.evenementen[i].uur;
                    var adres = data.evenementen[i].straatNummer + " " + data.evenementen[i].stad;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);

                    var contentString = "<a href=../html/index.html style='text-decoration: none; color: black><h1 style='font-weight: 900;'>" + naam + "<h1><br>" + "<p>" + descr + "<p style='color: lightgrey;><br>" + time + "<p><br>" + "<p style='color: lightgrey;'>" + adres + "<p><br></a>";
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    console.log(map);
                    var marker = new google.maps.Marker({
                        position: latLng,
                        title: name,
                        map: map,
                    });
                    marker.addListener('click', function () {
                        infowindow.open(map, marker);
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
    markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}