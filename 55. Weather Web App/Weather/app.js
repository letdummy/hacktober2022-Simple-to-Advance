let weather = {
    "apiKey": "2edb891504a4aba85d525f7a119893c4",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { lon, lat} = data.coord;
        const { icon, description } = data.weather[0];
        const { temp, feels_like, temp_min, temp_max, pressure, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".long").innerHTML = "( " + lon + " , " + lat + " )";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feelslike").innerText = "Feels like: " + feels_like + "°C  ||  Max: " + temp_max + "°C  ||  Min: " + temp_min + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + "pa  ||  Humidity: " + humidity + "%  ||  Wind: " + speed + "km/h";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})