var map;


//function to instantiate the Leaflet map
function createMap(){
    //create the map
    map = L.map('mapid', {
        center: [40.739454, -73.932495],
        zoom: 11    });

    //add OSM base tilelayer
    L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
        attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 0,
        maxZoom: 22,
        subdomains: 'abcd',
        accessToken: 'iLuzn3MqdlZEZksWVEVXqX3SU6o5AWsC94JX05GU2IXGAFxHqFeTqHzSE6LwgKAJ'
    }).addTo(map)

    //call getData function
    getData(map);
    map.on('click', onMapClick);
};

function getData(map){
    //load the data, then exectue mapCities. response passed by default
    $.getJSON("data/pickup_sample.geojson", function(response){

            //create marker options
            /* var geojsonMarkerOptions = {
                radius: 8,
                fillColor: "#ffffff",
                color: style_passengers(response),
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }; */

            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response, {
                filter: filter_neo,
                pointToLayer: function (feature, latlng){
                    return L.circleMarker(latlng, style_passengers(feature));
                }
                
            }).addTo(map);
        });
    };
function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
function style_passengers(feature) {
    var c = "";
    if (feature.properties.trip_duration < 1000) {
        c =  "#fee0d2";
    }
    if (feature.properties.trip_duration >= 1000 && feature.properties.trip_duration < 1500 ) {
        c = "#fc9272";
    }
    if (feature.properties.trip_duration >= 1500) {
        c = "#de2d26";
    } 
    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: c,
        color: '#00ff41',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }; 
    return geojsonMarkerOptions;
};
function filter_neo(feature, layer) {
    if (feature.properties.passenger_count == 3) {
        return true;
    }else {
        return false;
    }
};
//popup function
/* var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    } */
 
$(document).ready(createMap);