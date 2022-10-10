// 8e7b1fb989e2cd487eeff3fe8f2645df
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// creating object that holds our key and baseURL
const WeatherApi={
    key:"8e7b1fb989e2cd487eeff3fe8f2645df",
    baseURL:"https://api.openweathermap.org/data/2.5/weather"
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
     fetch(`${WeatherApi.baseURL}?q=${city}&appid=${WeatherApi.key}&units=metric`)
     .then(weather =>
        {
            return weather.json();
        })
        .then(showmedata);
}
//show weather report
function showmedata(weather)
{
    console.log(weather);

    let cityname=document.getElementById('cityname');
    cityname.innerText= `${weather.name}, ${weather.sys.country}`;

     let temperature=document.getElementById('temp');
     temperature.innerHTML= `${weather.main.temp}&deg;C`;

     let humidity=document.getElementById('humidity');
     humidity.innerText=`Humidity:  ${weather.main.humidity}`;

     let weathertype=document.getElementById('weathertype');
     weathertype.innerText= `${weather.weather[0].main}`;

     let windspeed=document.getElementById('wind-speed');
     windspeed.innerText=`Wind Speed:  ${weather.wind.speed}`;

    //  let daynighttemp=document.getElementById('daynighttemp');
    //  daynighttemp.innerText= `${weather.main.temp_max}&deg;C  (MIN) / ${weather.main.temp_min}&deg;C (MAX) `;
     
    

     if(weathertype.textContent == "Haze")
     {
        document.body.style.backgroundImage= "url('images/haze.jpg')";
     }
     else if(weathertype.textContent == "Mist")
     {
        document.body.style.backgroundImage= "url('images/mist.jpg')";

     }
     else if(weathertype.textContent == "Clouds")
     {
        document.body.style.backgroundImage= "url('images/cloudy.jpg')";
        
     }
     else if(weathertype.textContent== 'Clear')
     {
        document.body.style.backgroundImage= "url('images/sunny.jpg')";
        
     }
     else if(weathertype.textContent=='Winter')
     {
        document.body.style.backgroundImage= "url('images/snowy.jpg')";
        
     }
     else if(weathertype.textContent == 'Rain' || weathertype.textContent == 'Drizzle')
     {
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
        
     }
     else if(weathertype.textContent == "Thunderstorm")
     {
        document.body.style.backgroundImage= "url('images/thunderstorm.jpg')";
     }


     let daydate=document.getElementById('day-date');
    let todayDate=new Date();
    daydate.innerText=datemanage(todayDate);

}
function datemanage(datearg){
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let year=datearg.getFullYear();
    let month=months[datearg.getMonth()];
    let date=datearg.getDate();
    let day=days[datearg.getDay()];

    return `${date} ${month}, ${year} (${day}) `;
}




