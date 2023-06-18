/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.getElementById('form');
const location = document.getElementById('location');
const resultsMain = document.getElementById('resultsMain');
const resultsCondition = document.getElementById('resultsCondition');
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
  resultsCondition.appendChild(mainResultCondition);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxtQ0FBbUM7QUFDcEYsNENBQTRDLDJCQUEyQjtBQUN2RSwwQ0FBMEMsd0JBQXdCOztBQUVsRTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuY29uc3QgcmVzdWx0c01haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c01haW4nKTtcbmNvbnN0IHJlc3VsdHNDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c0NvbmRpdGlvbicpO1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzQ29udGFpbmVyJyk7XG5cbmxldCB3ZWF0aGVyUmVzdWx0cyA9IFtdXG5cbmNvbnN0IG1haW5SZXN1bHRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWFpblJlc3VsdFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluUmVzdWx0Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IHJlc3VsdEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcmVzdWx0SHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHJlc3VsdFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZnVuY3Rpb24gV2VhdGhlcihsb2NhdGlvbiwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZUNlbGNpdXMsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24pIHtcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XG4gIHRoaXMuZmVlbHNMaWtlQ2VsY2l1cyA9IGZlZWxzTGlrZUNlbGNpdXM7XG4gIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgdGhpcy53aW5kID0gd2luZDtcbiAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihzZWFyY2hWYWx1ZSkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OWU3M2QxYjI5OTk4NDllNTliMDIwNTYxMjIzMTcwNiZxPVwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHNlYXJjaFZhbHVlLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGxldCB3ZWF0aGVyTG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICBsZXQgd2VhdGhlclRlbXAgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYztcbiAgbGV0IHdlYXRoZXJGZWVsc0xpa2VDZWxjaXVzID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYzsgXG4gIGxldCB3ZWF0aGVySHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBsZXQgd2VhdGhlcldpbmQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBsZXQgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLCB3ZWF0aGVyVGVtcCwgd2VhdGhlckZlZWxzTGlrZUNlbGNpdXMsIHdlYXRoZXJIdW1pZGl0eSwgd2VhdGhlcldpbmQsIHdlYXRoZXJDb25kaXRpb24pO1xuXG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRMb2NhdGlvbik7XG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRUZW1wZXJhdHVyZSk7XG4gIHJlc3VsdHNDb25kaXRpb24uYXBwZW5kQ2hpbGQobWFpblJlc3VsdENvbmRpdGlvbik7XG5cbiAgbWFpblJlc3VsdExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcbiAgbWFpblJlc3VsdENvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdtYWluUmVzdWx0Jyk7XG5cbiAgcmVzdWx0RmVlbHNMaWtlLmlkID0gXCJyZXN1bHQxXCI7XG4gIHJlc3VsdEh1bWlkaXR5LmlkID0gXCJyZXN1bHQyXCI7XG4gIHJlc3VsdFdpbmQuaWQgPSBcInJlc3VsdDNcIjtcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRGZWVsc0xpa2UpO1xuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEh1bWlkaXR5KTtcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRXaW5kKTtcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgd2VhdGhlclJlc3VsdHMucHVzaCh3ZWF0aGVyKTtcblxuICBtYWluUmVzdWx0TG9jYXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS5sb2NhdGlvbjtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gd2VhdGhlclJlc3VsdHNbMF0udGVtcGVyYXR1cmUgKyBcIsKwXCI7XG4gIG1haW5SZXN1bHRDb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS5jb25kaXRpb247XG5cbiAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEl0IGZlZWxzIGxpa2UgJHt3ZWF0aGVyUmVzdWx0c1swXS5mZWVsc0xpa2VDZWxjaXVzfcKwYDtcbiAgcmVzdWx0SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlclJlc3VsdHNbMF0uaHVtaWRpdHl9JWBcbiAgcmVzdWx0V2luZC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke3dlYXRoZXJSZXN1bHRzWzBdLndpbmR9IG1waGBcblxuICBpZiAod2VhdGhlclJlc3VsdHNbMF0udGVtcGVyYXR1cmUgPD0gMTApe1xuICAgIG1haW5SZXN1bHRUZW1wZXJhdHVyZS5zdHlsZS5jb2xvciA9ICdibHVlJ1xuICB9IGVsc2UgaWYgKHdlYXRoZXJSZXN1bHRzWzBdLnRlbXBlcmF0dXJlID49IDEwKXtcbiAgICBtYWluUmVzdWx0VGVtcGVyYXR1cmUuc3R5bGUuY29sb3IgPSAneWVsbG93J1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmVzdWx0c0NvbnRhaW5lcigpe1xuICAgIHdlYXRoZXJSZXN1bHRzID0gW107XG4gICAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXN1bHRIdW1pZGl0eS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVzdWx0V2luZC50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2hXZWF0aGVyKGxvY2F0aW9uLnZhbHVlKS5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSk7IFxuICAgIGNsZWFyUmVzdWx0c0NvbnRhaW5lcigpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==