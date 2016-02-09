// The latitude and longitude of your business / place
var position = [-33.4345063,-70.6358538];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 17, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: false, // allow users to zoom the Google Map
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        center: latLng
    };

    var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

    var infowindow = new google.maps.InfoWindow({content: '<h4>Universidad San Sebastián</h4><p>Bellavista 7, Recoleta, Santiago.</p>'});

    // Show the default red marker at the location
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });

    infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);
