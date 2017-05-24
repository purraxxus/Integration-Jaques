var map;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

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
    
    $.ajax({
        url: '../JSON/Bedrijven.json',
        dataType: 'json',
        success: function (data) {
            for (var i = 0; i < data.features.length; i++) {
                var type = data.features[i].properties.category;
                var coords = data.features[i].geometry.coordinates;
                var descr = data.features[i].properties.Beschrijving;
                var name = data.features[i].properties.Naam;
                var adres = data.features[i].properties.Adres;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var contentString = "<a href=../html/home.html style='text-decoration: none;><h1 style='font-weight: 900;'>" + name + "<h1><br>" + "<p>" + descr + "<p><br>" + "<p style='color: lightgrey;'>" + adres + "<p><br></a>";
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
}