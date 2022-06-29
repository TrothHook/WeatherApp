const apikey = "e64f89883381962ec06b9adf929bb3d8";

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.getElementById("search");

const APIURL = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


async function getWeatherByLocation(city) {

    const resp = await fetch(APIURL(city), { origin: "cors" });

    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);

}

function addWeatherToPage(data) {
    const temp = data.main.temp;

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> ${temp} °C </h2>
    <small>${data.weather[0].main}</small>`

    // clean up

    main.innerHTML = "";

    main.appendChild(weather);
}

function CtoF(C) {
    return Number(((C * 1.8) + 32).toFixed(0));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if(city) {
        getWeatherByLocation(city);
    }
});



// `data.weather[0].icon`, then use it like this:
// `https://openweathermap.org/img/w/${data.weather[0].icon}.png`