let API_Key = `https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=4502b5c12580b39526fc559b8e134fe6`;

fetch(API_Key)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let main = jsObject.main;
    let wind = jsObject.wind;
    let name = jsObject.name;
    let weather = jsObject.weather;

    let fivecity = document.getElementById("fivecity");
    let city = document.getElementById("city");
    fivecity.textContent = name;
    city.textContent = name;

    let currently = document.getElementById("current-desc");
    currently.textContent = weather[0].description;

    let temp = document.getElementById("current-temp");
    temp.textContent = main.temp;

    let feels = document.getElementById("current-feelsLike");
    feels.textContent = main.feels_like;

    let humid = document.getElementById("current-humid");
    humid.textContent = main.humidity;

    let windSpd = document.getElementById("current-windSpeed");
    windSpd.textContent = wind.speed;
  });
