let now = new Date();
let dayDay = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();
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

function showTmperature(response) {
	let degree = document.querySelector(".degree");
	degree.innerHTML = Math.round(response.data.main.temp);
	let humid = document.querySelector("span.humid");
	humid.innerHTML = response.data.main.humidity;
	let wind = document.querySelector("span.wind");
	wind.innerHTML = Math.round(response.data.wind.speed);
	let cloud = document.querySelector("h3.cloud");
	cloud.innerHTML = response.data.weather[0].description;
	
}
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTmperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);


//Цельсій і Фаренгейт
function changeTempFahre(event) {
	event.preventDefault();
	let tempElement = document.querySelector(".degree");
	let temp = tempElement.innerHTML;
	temp = Number(temp);
	tempElement.innerHTML = Math.round(temp *1.8 + 32);
	let mile = document.querySelector(".wind");
	mile.innerHTML = `${Math.round(mile.textContent / 1.609344)}`;
	let mileUnit = document.querySelector(".mile");
	mileUnit.innerHTML = `m/h`;
}
function changeTempCels(event) {
	event.preventDefault();
	let tempElement = document.querySelector(".degree");
	let temp = tempElement.innerHTML;
	temp = Number(temp);
	tempElement.innerHTML = Math.round((temp - 32) / 1.8);
	let kmUnit = document.querySelector(".mile");
	kmUnit.innerHTML = `km/h`;
}
let cels = document.querySelector("#celsius");
cels.addEventListener("click", changeTempCels);
let fahre = document.querySelector("#fahrenheit");
fahre.addEventListener("click", changeTempFahre);





