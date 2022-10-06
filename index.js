// 8e7b1fb989e2cd487eeff3fe8f2645df
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// creating object that holds our key and baseURL
const WeatherApi={
    key:"8e7b1fb989e2cd487eeff3fe8f2645df",
    baseURL:"https://api.openweathermap.org/data/2.5/weather?"
}

// event listener function on Enter button/key press
const search=document.getElementById('enter-city');
search.addEventListener('keypress',(event)=>
{ 
    //will work when you press enter ..enter keycode is 13
    if(event.keyCode==13){
    console.log(search.value);
    getWeatherReport(search.value);
    }

});

//fetching weather details
function getWeatherReport(city){ //passing parameter as city because we want to fetch weather-details of city
     //to fetch data use keyword as 'fetch'
     fetch(`${WeatherApi.baseURL}?q=${city}&appid=${WeatherApi.key}`)
     .then(weathertype =>
        {
            return weathertype.json();
        })
        .then(showmedata);
}
function showmedata(){
    console.log(weathertype);
}

