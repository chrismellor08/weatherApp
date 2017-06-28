var xhr = new XMLHttpRequest();
var weatherData = {};
console.log(xhr.status);
console.log(xhr.statusText);

xhr.addEventListener("load", function() {
weatherData = JSON.parse(event.target.responseText);
console.log(weatherData);
})


function getWeatherData() {
var zipCode = document.getElementById("input").value;
xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?zip=37701&APPID=b2ed93467dc91e371772b60e25afa697", false);
xhr.send();
console.log(zipCode);
var replace = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode +"&APPID=b2ed93467dc91e371772b60e25afa697";
updatedData = JSON.parse(event.target.responseText);
console.log(replace);
xhr.open("GET", `"${replace}"`, false);
xhr.send();
}


// api.openweathermap.org/data/2.5/forecast?zip=94040,us
