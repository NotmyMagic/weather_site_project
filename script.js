let API_Key = `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=4502b5c12580b39526fc559b8e134fe6`;
let news_Key = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bbabcacb0b2b4a12a416f929e0af8bc5`;

fetch(API_Key)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let main = jsObject.main;
    let wind = jsObject.wind;
    let name = jsObject.name;
    let weather = jsObject.weather;

    let city = document.getElementById("fivecity");
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

fetch(news_Key)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let article = jsObject.articles;

    for (let i = 0; i < article.length; i++) {
      let article1 = document.createElement("article");
      article1.className = "news-article";
      let img;
    }
  });
