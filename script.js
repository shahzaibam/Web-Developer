const notification = document.querySelector(".notification")
const weather_container = document.querySelector(".weather-container")
const weather_icon = document.querySelector(".weather-icon")
const temperature_value = document.querySelector(".temperature-value")
let temp_description = document.querySelector(".temperature-description")
const location_ = document.querySelector(".location")

const weather = {}

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;

const key = "ef7877b8c666feed22d2d02c567aabbc"

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(setPosition, showError)
}else{
    navigator.style.display = "block"
    navigator.innerHTML = `<p>Browser doesn't support Geolocation</p>`
}

function setPosition(position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    getWeather(latitude, longitude)
}

function showError(error){
    notification.style.display = "block"
    notification.innerHTML = `<p>${error.message}</p>`
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
            weather.main = data.weather[0].main
            weather.iconId = data.weather[0].icon
            weather.city = data.name
            weather.country = data.sys.country
        })
        .then(function(){
            displayWeather()
        })
}

function displayWeather(){
    weather_icon.innerHTML = `<img src="icons/${weather.iconId}.png">`
    temperature_value.innerHTML = `<p>${weather.temperature.value}º <span>C</span><p>`
    temp_description.innerHTML = `<p>${weather.main}</p>`
    location_.innerHTML = `<p>${weather.city}, ${weather.country}</p>`
}


function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

temperature_value.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit === "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit)

        temperature_value.innerHTML = `<p>${fahrenheit}º<span>F</span></p>`
        weather.temperature.unit = `${weather.temperature.value}`
    }else{
        temperature_value.innerHTML =`<p>${weather.temperature.value}º<span>C</span></p>`
        weather.temperature.unit = "celsius"
    }

})




