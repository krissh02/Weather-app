const apikey = "2fabc8eafd58550e3ec870e7fdb11b51";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button"); 
const weather = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none";
    }
    else{
        const data = await response.json();
        console.log(data);

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clear"){
            document.querySelector(".weather-icon").src = "/images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            document.querySelector(".weather-icon").src = "/images/clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".weather-icon").src = "/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            document.querySelector(".weather-icon").src = "/images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            document.querySelector(".weather-icon").src = "/images/snow.png";
        }
        else if(data.weather[0].main == "Rain"){
            document.querySelector(".weather-icon").src = "/images/rain.png";
        }
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})