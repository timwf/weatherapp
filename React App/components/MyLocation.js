let lat;
let long;
function GetLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  console.log("works");
} else {
  console.log("Geolocation is not supported by this browser.");
}
}

function showPosition(position) {
lat = position.coords.latitude;
long = position.coords.longitude;
console.log(lat);
}
GetLocation();
