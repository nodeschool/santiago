// The latitude and longitude of your business / place
var position = [-33.414871, -70.603888];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: false, // allow users to zoom the Google Map
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        center: latLng
    };

    var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

    var infowindow = new google.maps.InfoWindow({content: '<h4>Groupon LatAm</h4><p>Vitacura 2771, Piso 7.<br>Las Condes, Santiago.</p>'});

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
