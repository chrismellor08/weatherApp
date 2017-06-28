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
	var replace = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&mode=json&units=imperial&APPID=b2ed93467dc91e371772b60e25afa697`;
	console.log(replace);
	xhr.open("GET", `${replace}`, false);
	xhr.send();
	iconCode = `${weatherData.weather[0].icon}`
	var icon = "http://openweathermap.org/img/w/" + iconCode + ".png";
	console.log(weatherData.name);
	console.log(weatherData.main.temp);
	console.log(weatherData.weather[0].description);
	document.getElementById("cardContainer").innerHTML =
	`<div class="card">
	<h2>Current weather for ${weatherData.name}</h2><br>
	<div class="icon"><img src="${icon}"></img></div>
	<h1>${weatherData.weather[0].description} and ${weatherData.main.temp} degrees</h1></br>
	</div>
	`
	document.getElementById("input").value="";
}



// api.openweathermap.org/data/2.5/forecast?zip=94040,us
