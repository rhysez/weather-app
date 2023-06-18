/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.getElementById('form');
const location = document.getElementById('location');
const resultsMain = document.getElementById('resultsMain');
const resultsContainer = document.getElementById('resultsContainer');

let weatherResults = []

const mainResultLocation = document.createElement('div');
const mainResultTemperature = document.createElement('div');
const mainResultCondition = document.createElement('div');

const resultFeelsLike = document.createElement('div');
const resultHumidity = document.createElement('div');
const resultWind = document.createElement('div');

function Weather(location, temperature, feelsLikeCelcius, humidity, wind, condition) {
  this.location = location;
  this.temperature = temperature;
  this.feelsLikeCelcius = feelsLikeCelcius;
  this.humidity = humidity;
  this.wind = wind;
  this.condition = condition;
}

async function fetchWeather(searchValue) {
  const url = "https://api.weatherapi.com/v1/current.json?key=9e73d1b2999849e59b0205612231706&q=";
  const response = await fetch(url + searchValue, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);

  let weatherLocation = weatherData.location.name;
  let weatherTemp = weatherData.current.temp_c;
  let weatherFeelsLikeCelcius = weatherData.current.feelslike_c; 
  let weatherHumidity = weatherData.current.humidity;
  let weatherWind = weatherData.current.wind_mph;
  let weatherCondition = weatherData.current.condition.text;
  let weather = new Weather(weatherLocation, weatherTemp, weatherFeelsLikeCelcius, weatherHumidity, weatherWind, weatherCondition);

  resultsMain.appendChild(mainResultLocation);
  resultsMain.appendChild(mainResultTemperature);
  resultsMain.appendChild(mainResultCondition);

  mainResultLocation.classList.add('mainResult');
  mainResultTemperature.classList.add('mainResult');
  mainResultCondition.classList.add('mainResult');

  resultFeelsLike.id = "result1";
  resultHumidity.id = "result2";
  resultWind.id = "result3";
  resultsContainer.appendChild(resultFeelsLike);
  resultsContainer.appendChild(resultHumidity);
  resultsContainer.appendChild(resultWind);

  console.log(weather);
  weatherResults.push(weather);

  mainResultLocation.textContent = weatherResults[0].location;
  mainResultTemperature.textContent = weatherResults[0].temperature + "°";
  mainResultCondition.textContent = weatherResults[0].condition;

  resultFeelsLike.textContent = `It feels like ${weatherResults[0].feelsLikeCelcius}°`;
  resultHumidity.textContent = `Humidity: ${weatherResults[0].humidity}%`
  resultWind.textContent = `Wind speed: ${weatherResults[0].wind} mph`

  if (weatherResults[0].temperature <= 10){
    mainResultTemperature.style.color = 'blue'
  } else if (weatherResults[0].temperature >= 10){
    mainResultTemperature.style.color = 'yellow'
  }
}

function clearResultsContainer(){
    weatherResults = [];
    resultFeelsLike.textContent = "";
    resultHumidity.textContent = "";
    resultWind.textContent = "";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchWeather(location.value).catch(e => { console.log(e) }); 
    clearResultsContainer();
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsbUNBQW1DO0FBQ3BGLDRDQUE0QywyQkFBMkI7QUFDdkUsMENBQTBDLHdCQUF3Qjs7QUFFbEU7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0JBQWdCO0FBQzlEO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbmNvbnN0IHJlc3VsdHNNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHNNYWluJyk7XG5jb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHNDb250YWluZXInKTtcblxubGV0IHdlYXRoZXJSZXN1bHRzID0gW11cblxuY29uc3QgbWFpblJlc3VsdExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluUmVzdWx0VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1haW5SZXN1bHRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgcmVzdWx0RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCByZXN1bHRIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcmVzdWx0V2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5mdW5jdGlvbiBXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlQ2VsY2l1cywgaHVtaWRpdHksIHdpbmQsIGNvbmRpdGlvbikge1xuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgdGhpcy5mZWVsc0xpa2VDZWxjaXVzID0gZmVlbHNMaWtlQ2VsY2l1cztcbiAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB0aGlzLndpbmQgPSB3aW5kO1xuICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKHNlYXJjaFZhbHVlKSB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05ZTczZDFiMjk5OTg0OWU1OWIwMjA1NjEyMjMxNzA2JnE9XCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgc2VhcmNoVmFsdWUsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgbGV0IHdlYXRoZXJMb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGxldCB3ZWF0aGVyVGVtcCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jO1xuICBsZXQgd2VhdGhlckZlZWxzTGlrZUNlbGNpdXMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jOyBcbiAgbGV0IHdlYXRoZXJIdW1pZGl0eSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGxldCB3ZWF0aGVyV2luZCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gIGxldCB3ZWF0aGVyQ29uZGl0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgbGV0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyTG9jYXRpb24sIHdlYXRoZXJUZW1wLCB3ZWF0aGVyRmVlbHNMaWtlQ2VsY2l1cywgd2VhdGhlckh1bWlkaXR5LCB3ZWF0aGVyV2luZCwgd2VhdGhlckNvbmRpdGlvbik7XG5cbiAgcmVzdWx0c01haW4uYXBwZW5kQ2hpbGQobWFpblJlc3VsdExvY2F0aW9uKTtcbiAgcmVzdWx0c01haW4uYXBwZW5kQ2hpbGQobWFpblJlc3VsdFRlbXBlcmF0dXJlKTtcbiAgcmVzdWx0c01haW4uYXBwZW5kQ2hpbGQobWFpblJlc3VsdENvbmRpdGlvbik7XG5cbiAgbWFpblJlc3VsdExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcbiAgbWFpblJlc3VsdENvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdtYWluUmVzdWx0Jyk7XG5cbiAgcmVzdWx0RmVlbHNMaWtlLmlkID0gXCJyZXN1bHQxXCI7XG4gIHJlc3VsdEh1bWlkaXR5LmlkID0gXCJyZXN1bHQyXCI7XG4gIHJlc3VsdFdpbmQuaWQgPSBcInJlc3VsdDNcIjtcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRGZWVsc0xpa2UpO1xuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEh1bWlkaXR5KTtcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRXaW5kKTtcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgd2VhdGhlclJlc3VsdHMucHVzaCh3ZWF0aGVyKTtcblxuICBtYWluUmVzdWx0TG9jYXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS5sb2NhdGlvbjtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gd2VhdGhlclJlc3VsdHNbMF0udGVtcGVyYXR1cmUgKyBcIsKwXCI7XG4gIG1haW5SZXN1bHRDb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS5jb25kaXRpb247XG5cbiAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEl0IGZlZWxzIGxpa2UgJHt3ZWF0aGVyUmVzdWx0c1swXS5mZWVsc0xpa2VDZWxjaXVzfcKwYDtcbiAgcmVzdWx0SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlclJlc3VsdHNbMF0uaHVtaWRpdHl9JWBcbiAgcmVzdWx0V2luZC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke3dlYXRoZXJSZXN1bHRzWzBdLndpbmR9IG1waGBcblxuICBpZiAod2VhdGhlclJlc3VsdHNbMF0udGVtcGVyYXR1cmUgPD0gMTApe1xuICAgIG1haW5SZXN1bHRUZW1wZXJhdHVyZS5zdHlsZS5jb2xvciA9ICdibHVlJ1xuICB9IGVsc2UgaWYgKHdlYXRoZXJSZXN1bHRzWzBdLnRlbXBlcmF0dXJlID49IDEwKXtcbiAgICBtYWluUmVzdWx0VGVtcGVyYXR1cmUuc3R5bGUuY29sb3IgPSAneWVsbG93J1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmVzdWx0c0NvbnRhaW5lcigpe1xuICAgIHdlYXRoZXJSZXN1bHRzID0gW107XG4gICAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXN1bHRIdW1pZGl0eS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVzdWx0V2luZC50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2hXZWF0aGVyKGxvY2F0aW9uLnZhbHVlKS5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSk7IFxuICAgIGNsZWFyUmVzdWx0c0NvbnRhaW5lcigpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==