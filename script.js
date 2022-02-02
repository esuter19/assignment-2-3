var map = L.map('mapid').setView([37.760109273244524, -122.4414471468871], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON("sf_crime.geojson",function(data){
   var locations = data.features.map(function(crime) {
    var location = crime.geometry.coordinates.reverse();
    location.push(0.5);
    return location;
  });

  var heat = L.heatLayer(locations, { radius: 35 });
  map.addLayer(heat); 
});
