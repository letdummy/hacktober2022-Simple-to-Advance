
// For Calendar

function display_ct5() {
    var x = new Date()
    let currentMonth=x.getMonth() + 1 ;
    
    let date=x.getDate() +"/" + currentMonth + "/" + x.getFullYear(); 
    let x1 = x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();

    let currentDay=x.getDay();
    let day="";
    switch(currentDay){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            console.log("Sorry No this day does not exist");
    }
    document.querySelector("#day").innerHTML = day;
    document.querySelector("#date").innerHTML = date;
    document.querySelector("#time").innerHTML = x1;
    display_c5();
     }
     function display_c5(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct5()',refresh)
    }
    display_c5()

// Weather Generator Using Api    
    const api = {
        key: "16bf6e93070d5c230089aba222e14b04",
        base: "https://api.openweathermap.org/data/2.5/"
      }
      
      const searchWeather = document.querySelector('.search-box');
      searchWeather.addEventListener('keypress', setQuery);
      
      function setQuery(evt) {
        if (evt.keyCode == 13) {
          getResults(searchWeather.value);
        }
      }
      
      function getResults (query) {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(weather => {
            return weather.json();
          }).then(displayResults);
      }
      
      function displayResults (weather) {

        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
    
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
      
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;
      
      // For Max and Min Temperature variation

        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`

      }
      