let forecast_api = `https://api.openweathermap.org/data/2.5/forecast?q=tooele&units=imperial&appid=4502b5c12580b39526fc559b8e134fe6`;

fetch(forecast_api)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
