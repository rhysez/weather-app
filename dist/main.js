/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.getElementById("form");
const location = document.getElementById("location");
const resultsMain = document.getElementById("resultsMain");
const resultsCondition = document.getElementById("resultsCondition");
const resultsContainer = document.getElementById("resultsContainer");

const mainResultLocation = document.createElement("div");
const mainResultTemperature = document.createElement("div");
const mainResultCondition = document.createElement("div");

const resultFeelsLike = document.createElement("div");
const resultHumidity = document.createElement("div");
const resultWind = document.createElement("div");

let weatherResults = [];

function Weather(
  location,
  temperature,
  temperatureF,
  feelsLikeCelcius,
  humidity,
  wind,
  condition
) {
  this.location = location;
  this.temperature = temperature;
  this.temperatureF = temperatureF;
  this.feelsLikeCelcius = feelsLikeCelcius;
  this.humidity = humidity;
  this.wind = wind;
  this.condition = condition;
}

async function fetchWeather(searchValue) {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=9e73d1b2999849e59b0205612231706&q=";
  const response = await fetch(url + searchValue, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);

  let weatherLocation = weatherData.location.name;
  let weatherTemp = weatherData.current.temp_c;
  let weatherTempF = weatherData.current.temp_f;
  let weatherFeelsLikeCelcius = weatherData.current.feelslike_c;
  let weatherHumidity = weatherData.current.humidity;
  let weatherWind = weatherData.current.wind_mph;
  let weatherCondition = weatherData.current.condition.text;
  let weather = new Weather(
    weatherLocation,
    weatherTemp,
    weatherTempF,
    weatherFeelsLikeCelcius,
    weatherHumidity,
    weatherWind,
    weatherCondition
  );

  resultsMain.appendChild(mainResultLocation);
  resultsMain.appendChild(mainResultTemperature);
  resultsMain.appendChild(mainResultCondition);

  mainResultLocation.classList.add("mainResult");
  mainResultTemperature.classList.add("mainResult");
  mainResultTemperature.id = "mainTemperature";
  mainResultCondition.classList.add("mainResult");

  resultFeelsLike.id = "result1";
  resultHumidity.id = "result2";
  resultWind.id = "result3";
  resultsContainer.appendChild(resultFeelsLike);
  resultsContainer.appendChild(resultHumidity);
  resultsContainer.appendChild(resultWind);

  console.log(weather);
  weatherResults.push(weather);

  mainResultLocation.textContent = weatherResults[0].location;
  mainResultTemperature.textContent = weatherResults[0].temperature + "°C";
  mainResultCondition.textContent = weatherResults[0].condition;

  resultFeelsLike.textContent = `It feels like ${weatherResults[0].feelsLikeCelcius}°C`;
  resultHumidity.textContent = `Humidity: ${weatherResults[0].humidity}%`;
  resultWind.textContent = `Wind speed: ${weatherResults[0].wind} mph`;

  const mainTemperature = document.getElementById("mainTemperature");
  const fTempButton = document.getElementById("fTemp");
  const cTempButton = document.getElementById("cTemp");

  fTempButton.addEventListener("click", () => {
    mainTemperature.textContent = weatherResults[0].temperatureF + "°F";
    resultFeelsLike.textContent = `It feels like ${weatherResults[0].temperatureF}°F`;
  });

  cTempButton.addEventListener("click", () => {
    mainTemperature.textContent = weatherResults[0].temperature + "°C";
    resultFeelsLike.textContent = `It feels like ${weatherResults[0].feelsLikeCelcius}°C`;
  });
}

function appendTempButtons() {
  const tempButtons = document.getElementById("tempButtons");
  const fTemp = document.createElement("button");
  const cTemp = document.createElement("button");

  fTemp.id = "fTemp";
  cTemp.id = "cTemp";

  fTemp.textContent = "F°";
  cTemp.textContent = "C°";

  tempButtons.appendChild(fTemp);
  tempButtons.appendChild(cTemp);
}

function clear() {
  weatherResults = [];
  resultFeelsLike.textContent = "";
  resultHumidity.textContent = "";
  resultWind.textContent = "";

  while (tempButtons.firstChild) {
    tempButtons.removeChild(tempButtons.lastChild);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(location.value).catch((e) => {
    console.log(e);
  });
  clear();
  appendTempButtons();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsbUNBQW1DO0FBQ3BGLDRDQUE0QywyQkFBMkI7QUFDdkUsMENBQTBDLHdCQUF3Qjs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsK0JBQStCO0FBQ2xGLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG1EQUFtRCxtQ0FBbUM7QUFDdEYsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCByZXN1bHRzTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c01haW5cIik7XG5jb25zdCByZXN1bHRzQ29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzQ29uZGl0aW9uXCIpO1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c0NvbnRhaW5lclwiKTtcblxuY29uc3QgbWFpblJlc3VsdExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG1haW5SZXN1bHRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtYWluUmVzdWx0Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3QgcmVzdWx0RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHJlc3VsdEh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHJlc3VsdFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sZXQgd2VhdGhlclJlc3VsdHMgPSBbXTtcblxuZnVuY3Rpb24gV2VhdGhlcihcbiAgbG9jYXRpb24sXG4gIHRlbXBlcmF0dXJlLFxuICB0ZW1wZXJhdHVyZUYsXG4gIGZlZWxzTGlrZUNlbGNpdXMsXG4gIGh1bWlkaXR5LFxuICB3aW5kLFxuICBjb25kaXRpb25cbikge1xuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgdGhpcy50ZW1wZXJhdHVyZUYgPSB0ZW1wZXJhdHVyZUY7XG4gIHRoaXMuZmVlbHNMaWtlQ2VsY2l1cyA9IGZlZWxzTGlrZUNlbGNpdXM7XG4gIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgdGhpcy53aW5kID0gd2luZDtcbiAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihzZWFyY2hWYWx1ZSkge1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05ZTczZDFiMjk5OTg0OWU1OWIwMjA1NjEyMjMxNzA2JnE9XCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgc2VhcmNoVmFsdWUsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgbGV0IHdlYXRoZXJMb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGxldCB3ZWF0aGVyVGVtcCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jO1xuICBsZXQgd2VhdGhlclRlbXBGID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGxldCB3ZWF0aGVyRmVlbHNMaWtlQ2VsY2l1cyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGxldCB3ZWF0aGVySHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBsZXQgd2VhdGhlcldpbmQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBsZXQgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIoXG4gICAgd2VhdGhlckxvY2F0aW9uLFxuICAgIHdlYXRoZXJUZW1wLFxuICAgIHdlYXRoZXJUZW1wRixcbiAgICB3ZWF0aGVyRmVlbHNMaWtlQ2VsY2l1cyxcbiAgICB3ZWF0aGVySHVtaWRpdHksXG4gICAgd2VhdGhlcldpbmQsXG4gICAgd2VhdGhlckNvbmRpdGlvblxuICApO1xuXG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRMb2NhdGlvbik7XG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRUZW1wZXJhdHVyZSk7XG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRDb25kaXRpb24pO1xuXG4gIG1haW5SZXN1bHRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpblJlc3VsdFwiKTtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJtYWluUmVzdWx0XCIpO1xuICBtYWluUmVzdWx0VGVtcGVyYXR1cmUuaWQgPSBcIm1haW5UZW1wZXJhdHVyZVwiO1xuICBtYWluUmVzdWx0Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluUmVzdWx0XCIpO1xuXG4gIHJlc3VsdEZlZWxzTGlrZS5pZCA9IFwicmVzdWx0MVwiO1xuICByZXN1bHRIdW1pZGl0eS5pZCA9IFwicmVzdWx0MlwiO1xuICByZXN1bHRXaW5kLmlkID0gXCJyZXN1bHQzXCI7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0RmVlbHNMaWtlKTtcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRIdW1pZGl0eSk7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0V2luZCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIHdlYXRoZXJSZXN1bHRzLnB1c2god2VhdGhlcik7XG5cbiAgbWFpblJlc3VsdExvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlclJlc3VsdHNbMF0ubG9jYXRpb247XG4gIG1haW5SZXN1bHRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLnRlbXBlcmF0dXJlICsgXCLCsENcIjtcbiAgbWFpblJlc3VsdENvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLmNvbmRpdGlvbjtcblxuICByZXN1bHRGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgSXQgZmVlbHMgbGlrZSAke3dlYXRoZXJSZXN1bHRzWzBdLmZlZWxzTGlrZUNlbGNpdXN9wrBDYDtcbiAgcmVzdWx0SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlclJlc3VsdHNbMF0uaHVtaWRpdHl9JWA7XG4gIHJlc3VsdFdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHt3ZWF0aGVyUmVzdWx0c1swXS53aW5kfSBtcGhgO1xuXG4gIGNvbnN0IG1haW5UZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblRlbXBlcmF0dXJlXCIpO1xuICBjb25zdCBmVGVtcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZlRlbXBcIik7XG4gIGNvbnN0IGNUZW1wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjVGVtcFwiKTtcblxuICBmVGVtcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1haW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLnRlbXBlcmF0dXJlRiArIFwiwrBGXCI7XG4gICAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEl0IGZlZWxzIGxpa2UgJHt3ZWF0aGVyUmVzdWx0c1swXS50ZW1wZXJhdHVyZUZ9wrBGYDtcbiAgfSk7XG5cbiAgY1RlbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS50ZW1wZXJhdHVyZSArIFwiwrBDXCI7XG4gICAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEl0IGZlZWxzIGxpa2UgJHt3ZWF0aGVyUmVzdWx0c1swXS5mZWVsc0xpa2VDZWxjaXVzfcKwQ2A7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUZW1wQnV0dG9ucygpIHtcbiAgY29uc3QgdGVtcEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBCdXR0b25zXCIpO1xuICBjb25zdCBmVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmVGVtcC5pZCA9IFwiZlRlbXBcIjtcbiAgY1RlbXAuaWQgPSBcImNUZW1wXCI7XG5cbiAgZlRlbXAudGV4dENvbnRlbnQgPSBcIkbCsFwiO1xuICBjVGVtcC50ZXh0Q29udGVudCA9IFwiQ8KwXCI7XG5cbiAgdGVtcEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZlRlbXApO1xuICB0ZW1wQnV0dG9ucy5hcHBlbmRDaGlsZChjVGVtcCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICB3ZWF0aGVyUmVzdWx0cyA9IFtdO1xuICByZXN1bHRGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICByZXN1bHRIdW1pZGl0eS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHJlc3VsdFdpbmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIHdoaWxlICh0ZW1wQnV0dG9ucy5maXJzdENoaWxkKSB7XG4gICAgdGVtcEJ1dHRvbnMucmVtb3ZlQ2hpbGQodGVtcEJ1dHRvbnMubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBmZXRjaFdlYXRoZXIobG9jYXRpb24udmFsdWUpLmNhdGNoKChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH0pO1xuICBjbGVhcigpO1xuICBhcHBlbmRUZW1wQnV0dG9ucygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=