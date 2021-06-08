const weatherApi={
    key: "ea051af1ad05b419de6ebcf79e452632",
    baseUrl: "http://api.openweathermap.org/data/2.5/weather?"
}
let tempicon = document.getElementById('icon');
const searchinputbox= document.getElementById('inputbox');
const proxy="https://cors-anywhere.herokuapp.com/";
// event listener function on keypress
searchinputbox.addEventListener('keypress',(event) => {
    if(event.keyCode == 13) {
        console.log(searchinputbox.value);
        getweatherReport(searchinputbox.value);
        document.querySelector('.weatherbody').style.display = "block";
    }
    
});

// Get weather report
function getweatherReport(city) {
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city =document.getElementById('city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/
     ${Math.ceil(weather.main.temp_min)}&deg;C (max)`;

    let weathertype = document.getElementById('weather');
    weathertype.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todaydate= new Date();
    date.innerText = dateManage(todaydate);

    if(weathertype.textContent== 'Clear'){
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        tempicon.src = "./icons/sunny.png";
    }

    else if(weathertype.textContent== 'Rain'){
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
        tempicon.src = "./icons/rain.png";
    }

    else if(weathertype.textContent== 'Clouds'){
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
        tempicon.src = "./icons/cloud.png";
    }

    else if(weathertype.textContent== 'Snow'){
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        tempicon.src = "./icons/snow.png";
    }

    else if(weathertype.textContent== 'Haze'){
        document.body.style.backgroundImage = "url('images/haze.jpg')";
        tempicon.src = "./icons/cloud.png";
    }

    else if(weathertype.textContent== 'Sunny'){
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
        tempicon.src = "./icons/sunny.png";
    }

    else if(weathertype.textContent== 'Thunderstorm'){
        document.body.style.backgroundImage = "url('images/storm.jpg')";
        tempicon.src = "./icons/thunder.png";
    }

}

// date manager
function dateManage(datearg){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];

    let months=["January", "February", "March", "April", "May","June", "July",
     "August", "September", "October", "November","December"];

    let year=datearg.getFullYear();
    let month=months[datearg.getMonth()];
    let dat=datearg.getDate();
    let day=days[datearg.getDay()];

    return `${dat} ${month} (${day}) ${year}`;
}


