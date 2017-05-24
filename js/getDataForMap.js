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
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
            }]
        },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
            }]
        },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
            }]
        },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
            }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
            }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
            }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
            }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
            }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
            }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
            }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
            }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
            }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
            }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
            }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
            }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
            }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
            }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
            }]
        }
    ]
    });
    $.ajax({
        url: '../JSON/Bedrijven.json',
        dataType: 'json',
        success: function (data) {
            for (var i = 0; i < data.features.length; i++) {
                var coords = data.features[i].geometry.coordinates;
                var descr = data.features[i].properties.Beschrijving;
                var name = data.features[i].properties.Naam;
                var adres = data.features[i].properties.Adres;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var contentString = "<h1 style='font-weight: 600;'>" + name + "<h1><br>" + "<p>" + descr + "<p><br>" + "<p style='color: lightgrey;'>" + adres + "<p><br>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                var marker = new google.maps.Marker({
                    position: latLng,
                    //icon: iconBase + '',
                    title: 'title',
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