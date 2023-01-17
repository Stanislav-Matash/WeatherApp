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


function formatDay (timestamp) {
	let date = new Date(timestamp * 1000);
	let day = date.getDay();
	let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	return days[day];
}

function displayForecast(response) {
	console.log(response.data.list);
	console.log(response.data.list[1]);
	console.log(response.data.list[7]);
	console.log(response.data.list[3]);
	console.log(response.data.list[9]);
	console.log(response.data.list[15]);
	console.log(response.data.list[11]);
	
	let forecast = response.data.list;
	let forecastElement = document.querySelector("#forecast");
		
	let forecastHTML = `<div class="forecast container__forecast" id="forecast">`;
		
		forecastHTML = forecastHTML + `
		<div class="forecast__column">
			<div class="forecast__day">${formatDay(response.data.list[1].dt)}</div>
			<img class="farecast__icon" src="http://openweathermap.org/img/wn/${response.data.list[7].weather[0].icon}@2x.png" alt="icon">
			<div class="forecast__temperature">
				<p class="forecast__temperature-max">${Math.round(response.data.list[7].main.temp_max)}°</p>
				<p class="forecast__temperature-min">${Math.round(response.data.list[3].main.temp_min)}°</p>
			</div>
		</div>

		<div class="forecast__column">
			<div class="forecast__day">${formatDay(response.data.list[9].dt)}</div>
			<img class="farecast__icon" src="http://openweathermap.org/img/wn/${response.data.list[15].weather[0].icon}@2x.png" alt="icon">
			<div class="forecast__temperature">
				<p class="forecast__temperature-max">${Math.round(response.data.list[15].main.temp_max)}°</p>
				<p class="forecast__temperature-min">${Math.round(response.data.list[11].main.temp_min)}°</p>
			</div>
		</div>
		
		<div class="forecast__column">
			<div class="forecast__day">${formatDay(response.data.list[17].dt)}</div>
			<img class="farecast__icon" src="http://openweathermap.org/img/wn/${response.data.list[23].weather[0].icon}@2x.png" alt="icon">
			<div class="forecast__temperature">
				<p class="forecast__temperature-max">${Math.round(response.data.list[23].main.temp_max)}°</p>
				<p class="forecast__temperature-min">${Math.round(response.data.list[19].main.temp_min)}°</p>
			</div>
		</div> 
		
		<div class="forecast__column">
			<div class="forecast__day">${formatDay(response.data.list[25].dt)}</div>
			<img class="farecast__icon" src="http://openweathermap.org/img/wn/${response.data.list[31].weather[0].icon}@2x.png" alt="icon">
			<div class="forecast__temperature">
				<p class="forecast__temperature-max">${Math.round(response.data.list[31].main.temp_max)}°</p>
				<p class="forecast__temperature-min">${Math.round(response.data.list[27].main.temp_min)}°</p>
			</div>
		</div> 

		<div class="forecast__column">
			<div class="forecast__day">${formatDay(response.data.list[33].dt)}</div>
			<img class="farecast__icon" src="http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png" alt="icon">
			<div class="forecast__temperature">
				<p class="forecast__temperature-max">${Math.round(response.data.list[39].main.temp_max)}°</p>
				<p class="forecast__temperature-min">${Math.round(response.data.list[35].main.temp_min)}°</p>
			</div>
		</div> 
		`;
	
		forecastHTML = forecastHTML + `</div>`;
	forecastElement.innerHTML = forecastHTML;
}


function getForecast(coordinates) {
	let apiKey = '1ef67de4838eb2be7c3034e585cc10a6';
	let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
	
	axios.get(apiUrl).then(displayForecast);
}

function showTmperature(response) {
	// console.log(response);
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



function showTemp(response) {
	let temper = document.querySelector(".degree");
	temper.innerHTML = Math.round(response.data.main.temp);
	let nameCity = document.querySelector("h1");
	nameCity.innerHTML = response.data.name;
	let description = document.querySelector(".cloud");
	description.innerHTML = response.data.weather[0].description;
	let icon = document.querySelector(".icon");
	icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
	let humid = document.querySelector("span.humid");
	humid.innerHTML = response.data.main.humidity;
	let wind = document.querySelector("span.wind");
	wind.innerHTML = Math.round(response.data.wind.speed);
}

function showPosition(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let apiKey2 = '1ef67de4838eb2be7c3034e585cc10a6';
	let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey2}&units=metric`;
	console.log(apiUrl2);
	axios.get(apiUrl2).then(showTemp);
}
navigator.geolocation.getCurrentPosition(showPosition);

let buttonCur = document.querySelector(".button-current");
buttonCur.addEventListener("click", getCurrentPosition);

