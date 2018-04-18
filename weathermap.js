
//weather(APIKey, address)
var request= $.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
    q: "San Antonio,TX",
    units: "imperial"
});
request.done(function (response) {
    console.log(response);
    console.log(response.main.humidity);
    console.log(response.temp_max);
    console.log(response.main.temp_min);
});
// $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
//     APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial",
//     cnt: 3
// }).done(function(response) {
//     console.log(response);
//     //loop
//     console.log(response.list[0]temp_max);
//     console.log(response.list[0].temp_min);
// });
//Geocoding
<script
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2l-5CY-2Ds6dIyc8doaPHImwacbive3A"></script>
    <script>
var Options = {
    zoom: 15,
    center:{
        lat:29.426791,
        lng: -98.489602
    },
    mapTypeId:google.mapsMapTypeID.HYBRID

}
//marker
var marker= new.googe.maps.Marker9{
    position: codeup, map:map});
}

