// api key : 82005d27a116c2880c8f0fcb866998a0

const iconElement = document.querySelector(".weather-icon")
const tempElement = document.querySelector(".temperature-value p")
const descElement = document.querySelector(".temperature-description p")
const locationElement = document.querySelector(".location p")
const notificationElement = document.querySelector(".notification")

//App Data
const weather = {}

weather.temperature = {
    unit : "celsius"
}

//App const and vars
const KELVIN = 273;

//API key

const key = "ef7877b8c666feed22d2d02c567aabbc"

//check if browser supports geolocation

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(setPosition, showError)
}else{
    notificationElement.style.display = "block"
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>"
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude,longitude)
}

function showError(error){
    notificationElement.style.display = "block"
    notificationElement.innerHTML = `<p>${error.message}</p>`
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

    fetch(api)
        .then(function(response){
            let data = response.json()
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN)
            weather.main = data.weather[0].main;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`
    tempElement.innerHTML = `${weather.temperature.value}º<span>C</span>`
    descElement.innerHTML = `<p>${weather.main}</p>`
    locationElement.innerHTML = `${weather.city}, ${weather.country}`
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit === "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit)

        tempElement.innerHTML = `${fahrenheit}º<span>F</span>`
        weather.temperature.unit = `${weather.temperature.value}`
    }else{
        tempElement.innerHTML =`${weather.temperature.value}º<span>C</span>`
        weather.temperature.unit = "celsius"
    }

})