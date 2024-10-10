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

    let img0 = document.getElementById("header-img");
    img0.src = article[0].urlToImage;

    let title0 = document.getElementById("header-article");
    title0.textContent = article[0].title;

    let descript0 = document.getElementById("header-desc");
    descript0.textContent = article[0].description;

    // next article
    let img1 = document.getElementById("article-img-1");
    img1.src = article[1].urlToImage;

    let title1 = document.getElementById("article-link-1");
    title1.textContent = article[1].title;

    let descript1 = document.getElementById("article-desc-1");
    descript1.textContent = article[1].description;

    // next article
    let img2 = document.getElementById("article-img-2");
    img2.src = article[2].urlToImage;

    let title2 = document.getElementById("article-link-2");
    title2.textContent = article[2].title;

    let descript2 = document.getElementById("article-desc-2");
    descript2.textContent = article[2].description;

    // next article
    let img3 = document.getElementById("article-img-3");
    img3.src = article[3].urlToImage;

    let title3 = document.getElementById("article-link-3");
    title3.textContent = article[3].title;

    let descript3 = document.getElementById("article-desc-3");
    descript3.textContent = article[3].description;

    // next article
    let img4 = document.getElementById("article-img-4");
    img4.src = article[4].urlToImage;

    let title4 = document.getElementById("article-link-4");
    title4.textContent = article[4].title;

    let descript4 = document.getElementById("article-desc-4");
    descript4.textContent = article[4].description;
  });
