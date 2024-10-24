// TUTORIAL 1

var map = L.map("map").setView([0,37.2],6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Adding a marker
var marker = L.marker([0,37]).addTo(map);
// Adding a circle
var circle = L.circle([0,37],{
    color: "blue",
    fillColor: "#fo3",
    fillOpacity: 0.4,
    radius:60000
}).addTo(map);
// Adding a polygon
var polygon = L.polygon ([
    [0.000, 37.00],
    [0.000, 38.00],
    [1.00, 38.00],
    [1.00, 37.00]
]).addTo(map);
// Adding a popup

marker.bindPopup("<b> Hello world!</b> <br> I am popup").openPopup();
circle.bindPopup("I am a Circle");
polygon.bindPopup("I am A polgon");
// Adding a popup as a layer
var popup = L.popup()
    .setLatLng([0, 37])
    .setContent("I am a Standalone Popup.")
    .openOn(map);
// Events
// Map Click
// function onMapClick(e) {
//     alert ("You clicked the map at " + e.latlng);
// }
// map.on("click", onMapClick);
//  Popups events
 var popup = L.popup();
 function onMapClick1(e){
    popup
        . setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
 }
map.on("click", onMapClick1);

