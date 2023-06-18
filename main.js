/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.getElementById('form');
const location = document.getElementById('location');
const results = document.getElementById('results');

function Weather(location, temperature) {
  this.location = location;
  this.temperature = temperature;
  this.announce = `The temperature in ${location} is ${temperature}` + "°";
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
}

//fetchWeather("truro").catch((e) => {
  //console.log(e);
//});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchWeather(location.value);
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVSxLQUFLLFlBQVk7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG5cbmZ1bmN0aW9uIFdlYXRoZXIobG9jYXRpb24sIHRlbXBlcmF0dXJlKSB7XG4gIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xuICB0aGlzLmFubm91bmNlID0gYFRoZSB0ZW1wZXJhdHVyZSBpbiAke2xvY2F0aW9ufSBpcyAke3RlbXBlcmF0dXJlfWAgKyBcIsKwXCI7XG59XG5cbi8vIHRha2VzIHNlYXJjaCB2YWx1ZSBhbmQgYXdhaXRzIGZldGNoaW5nIG9mIGRhdGFcbi8vIGNyZWF0ZXMgYSB3ZWF0aGVyIG9iamVjdCB3aXRoIHNlYXJjaGVkIGxvY2F0aW9uIGFuZCB0ZW1wZXJhdHVyZVxuLy8gbG9ncyB0aGUgb2JqZWN0XG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoc2VhcmNoVmFsdWUpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTllNzNkMWIyOTk5ODQ5ZTU5YjAyMDU2MTIyMzE3MDYmcT1cIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBzZWFyY2hWYWx1ZSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICBsZXQgd2VhdGhlckxvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgbGV0IHdlYXRoZXJUZW1wID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLCB3ZWF0aGVyVGVtcCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXIuYW5ub3VuY2UpO1xufVxuXG4vL2ZldGNoV2VhdGhlcihcInRydXJvXCIpLmNhdGNoKChlKSA9PiB7XG4gIC8vY29uc29sZS5sb2coZSk7XG4vL30pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoV2VhdGhlcihsb2NhdGlvbi52YWx1ZSk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9