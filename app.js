const api = {
    key: "2f4bb53626deced9f6a2dac7500dc7f3",
    url: "http://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".searchBox");
const changeLocationBtn = document.querySelector(".changeLocation")
let iconContainer =  document.querySelector(".icon-container")

changeLocationBtn.addEventListener("click", setQuery);

function setQuery(){
    getResults(searchBox.value)
}

function getResults(query){
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResult);
}

function displayResult (weather){
    //console.log(weather);
    let city = document.querySelector(".location .city")
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date();

    let dateH2 = document.querySelector(".date")
    dateH2.innerText = displayDate(now)

    let dayH1 = document.querySelector(".days")
    dayH1.innerText = displayDay(now)
    
    let temperature = document.querySelector(".temperature");
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let nuvolosoOSereno = document.querySelector(".sunny");
    nuvolosoOSereno.innerText = weather.weather[0].main
}

function displayDate(now){
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let mesi = months[now.getMonth()];
let data = now.getDate();
let year = now.getFullYear();

return `${data} ${mesi} ${year}`
}


function displayDay(now){
    const days = ["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];
    
    let giorno = days[now.getDay()];
    
    return `${giorno}`;
}