/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.getElementById('form');
const location = document.getElementById('location');
const resultsContainer = document.getElementById('resultsContainer');

function Weather(location, temperature) {
  this.location = location;
  this.temperature = temperature;
  this.infoCelcius = `The temperature in ${location} is ${temperature}` + "°.";
}

// takes search value and awaits fetching of data
// creates a weather object with searched location and temperature
// logs the object
async function fetchWeather(searchValue) {
  const url = "https://api.weatherapi.com/v1/current.json?key=9e73d1b2999849e59b0205612231706&q=";
  const response = await fetch(url + searchValue, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);

  let weatherLocation = weatherData.location.name;
  let weatherTemp = weatherData.current.temp_c;
  let weather = new Weather(weatherLocation, weatherTemp);

  console.log(weather);
  console.log(weather.announce);

  const results = document.createElement('div');
  results.id = "results";
  resultsContainer.appendChild(results);

  results.textContent = weather.infoCelcius;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchWeather(location.value).catch(e => { console.log(e) }); 
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVSxLQUFLLFlBQVk7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c0NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wZXJhdHVyZSkge1xuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgdGhpcy5pbmZvQ2VsY2l1cyA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gJHtsb2NhdGlvbn0gaXMgJHt0ZW1wZXJhdHVyZX1gICsgXCLCsC5cIjtcbn1cblxuLy8gdGFrZXMgc2VhcmNoIHZhbHVlIGFuZCBhd2FpdHMgZmV0Y2hpbmcgb2YgZGF0YVxuLy8gY3JlYXRlcyBhIHdlYXRoZXIgb2JqZWN0IHdpdGggc2VhcmNoZWQgbG9jYXRpb24gYW5kIHRlbXBlcmF0dXJlXG4vLyBsb2dzIHRoZSBvYmplY3RcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihzZWFyY2hWYWx1ZSkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OWU3M2QxYjI5OTk4NDllNTliMDIwNTYxMjIzMTcwNiZxPVwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHNlYXJjaFZhbHVlLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGxldCB3ZWF0aGVyTG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICBsZXQgd2VhdGhlclRlbXAgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYztcbiAgbGV0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyTG9jYXRpb24sIHdlYXRoZXJUZW1wKTtcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgY29uc29sZS5sb2cod2VhdGhlci5hbm5vdW5jZSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXN1bHRzLmlkID0gXCJyZXN1bHRzXCI7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0cyk7XG5cbiAgcmVzdWx0cy50ZXh0Q29udGVudCA9IHdlYXRoZXIuaW5mb0NlbGNpdXM7XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2hXZWF0aGVyKGxvY2F0aW9uLnZhbHVlKS5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSk7IFxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==