const apikey = "e64f89883381962ec06b9adf929bb3d8";

const APIURL = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`; 


async function getWeatherByLocation(location) {

    const resp = await fetch(APIURL(location), {origin: "cors"});

    const respData = await resp.json();

    console.log(respData, CtoF(respData.main.temp));

}

getWeatherByLocation("Amsterdam");

function CtoF(C){
    return Number(((C * 1.8) + 32).toFixed(2));
}