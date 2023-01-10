let now = new Date();
let dayDay = now.getDay();
let hour = now.getHours();
if (hour < 10) {
	hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
	minute = `0${minute}`;
}
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayss = document.querySelector(".day_time");
dayss.innerHTML = `${days[dayDay]} ${hour}:${minute}`;

function search(event) {
	event.preventDefault();
	let changeCity = document.querySelector("#city");
	let h1 = document.querySelector("h1");
	h1.innerHTML = `${changeCity.value}`;

	let apiKey = '1ef67de4838eb2be7c3034e585cc10a6';
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${h1.textContent}&units=metric`;



function displayForecast(response) {
	console.log(response.data.list[0]);
	let forecast = response.data.list;
	let forecastElement = document.querySelector("#forecast");
		
	let forecastHTML = `<div class="forecast container__forecast" id="forecast">`;
	
	forecast.forEach(function (forecastDay) {

		forecastHTML = forecastHTML + `
		<div class="forecast__column">
						<div class="forecast__day">${forecastDay.dt}</div>
						<img class="farecast__icon" src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="icon">
						<div class="forecast__temperature">
							<p class="forecast__temperature-max">${forecastDay.main.temp_max}°</p>
							<p class="forecast__temperature-min">${forecastDay.main.temp_min}°</p>
						</div>
					</div> 
		`;
	});
		forecastHTML = forecastHTML + `</div>`;
	forecastElement.innerHTML = forecastHTML;
}


function getForecast(coordinates) {
	console.log(coordinates);
	let apiKey = '1ef67de4838eb2be7c3034e585cc10a6';
	let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
	
	axios.get(apiUrl).then(displayForecast);
}

function showTmperature(response) {
	console.log(response);
	let degree = document.querySelector(".degree");
	degree.innerHTML = Math.round(response.data.main.temp);
	let humid = document.querySelector("span.humid");
	humid.innerHTML = response.data.main.humidity;
	let wind = document.querySelector("span.wind");
	wind.innerHTML = Math.round(response.data.wind.speed);
	let cloud = document.querySelector("h3.cloud");
	cloud.innerHTML = response.data.weather[0].description;
	let icon = document.querySelector(".icon");
	icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

	celsiusTemp = response.data.main.temp;

	getForecast(response.data.coord);
}
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTmperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);


//Цельсій і Фаренгейт
function changeTempFahre(event) {
	event.preventDefault();
	let tempElement = document.querySelector(".degree");
	celsius.classList.remove("active");
	fahrenheit.classList.add("active");
	
	let tempFahre = (celsiusTemp * 9) / 5 + 32;
	tempElement.innerHTML = Math.round(tempFahre);
	}
let celsiusTemp = null;
let fahre = document.querySelector("#fahrenheit");
fahre.addEventListener("click", changeTempFahre);


function changeTempCelsius(event) {
	event.preventDefault();
	celsius.classList.add("active");
	fahrenheit.classList.remove("active");
	let tempElement2 = document.querySelector(".degree");
	tempElement2.innerHTML = Math.round(celsiusTemp);
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeTempCelsius);




