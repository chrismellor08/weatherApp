var xhr = new XMLHttpRequest();
var weatherData = {};
console.log(xhr.status);
console.log(xhr.statusText);

xhr.addEventListener("load", function() {
weatherData = JSON.parse(event.target.responseText);
console.log(weatherData);
})


function getWeatherData(data) {
  var zipCode = document.getElementById("input").value;
  var replace = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&mode=json&units=imperial&APPID=b2ed93467dc91e371772b60e25afa697`;
  console.log(replace);
  xhr.open("GET", `${replace}`, false);
  xhr.send();
  console.log(weatherData.city.name);
  console.log(weatherData.list[0].main.temp);
  console.log(weatherData.list[0].weather[0].description);
  document.getElementById("card").innerHTML =
  `<h1>Weather for ${weatherData.city.name}</h1><br>
  <h2>${weatherData.list[0].weather[0].description} and ${weatherData.list[0].main.temp} degrees</h2></br>`
  // <h2> The outlook for the evening is ${weatherData.list[0].weather[0].description} and No Wind</h2>`
}



// api.openweathermap.org/data/2.5/forecast?zip=94040,us
