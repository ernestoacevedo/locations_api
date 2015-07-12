// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require leaflet
//= require turbolinks
//= require_tree .
var map = L.map('map', {
  center: [-33.4668786, -70.6464054],
  zoom: 14,
  zoomControl: false
});

L.tileLayer('http://{s}.tiles.mapbox.com/v3/ernestoacevedo.jo53pace/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

new L.Control.Zoom({ position: 'topleft' }).addTo(map);

// navigator.geolocation.getCurrentPosition(GetLocation);
// function GetLocation(location) {
// 	        console.log(location.coords.latitude, location.coords.longitude);
// 	        map.panTo(new L.LatLng(location.coords.latitude, location.coords.longitude));
// 	        var marker = L.marker([location.coords.latitude, location.coords.longitude]).addTo(map);
// 	        marker.bindPopup("<p> Ubicación actual </p>");
// }


var new_event_marker;
map.on('click', function(e) {
   if(typeof(new_event_marker)==='undefined') {
     new_event_marker = new L.marker(e.latlng,{ draggable: true});
     new_event_marker.addTo(map);
   }
   else {
     new_event_marker.setLatLng(e.latlng);
   }
   $('#location_lat').val(e.latlng.lat);
   $('#location_lng').val(e.latlng.lng);
});
