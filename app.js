const city = document.getElementById("city-name")
const date = document.getElementById("Date-day")
const degree = document.getElementById("temperature")
const cloudy = document.getElementById("condition")
const humidity = document.getElementById("humidity")
const index = document.getElementById("FeelsLike_c")
const wind_kph = document.getElementById("windspeed")
const visiblity = document.getElementById("Visibility")
const Inputvalue = document.getElementById("inputData")
const weatherNow = document.getElementById("Now")
const after2 = document.getElementById("after-2")
const after3 = document.getElementById("after-3")
const after4 = document.getElementById("after-4")
const after5 = document.getElementById("after-5")

async function getWeatherData(e) {
    e.preventDefault()
    try {
        const cityName = Inputvalue.value
        console.log(cityName)
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f4ee1dd4b6f4d4aaac142934261201&q=${cityName}&aqi=no`)
        const formatedRes = await response.json()
        degree.textContent = `${formatedRes.current.temp_c}°C`
        city.innerText = formatedRes.location.name
        humidity.textContent = `${formatedRes.current.humidity} %`
        wind_kph.textContent = `${formatedRes.current.wind_kph} Km/h`
        visiblity.textContent = `${formatedRes.current.vis_km} km`
        index.textContent = `${formatedRes.current.feelslike_c}°C`
        weatherNow.textContent = `${formatedRes.current.temp_c}`
        after2.textContent = `${formatedRes.current.temp_c + 1}`
        after3.textContent = `${formatedRes.current.temp_c + 3}`
        after4.textContent = `${formatedRes.current.temp_c + 5}`
        after5.textContent = `${formatedRes.current.temp_c + 7}`
        date.textContent = `${formatedRes.current.last_updated}`
    }
    catch (e) {
        console.log("something went wrong")
    }
}
