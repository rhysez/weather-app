/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.getElementById('form');
const location = document.getElementById('location');
const resultsContainer = document.getElementById('resultsContainer');

let weatherResults = []
const results = document.createElement('div');

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

  results.id = "results";
  resultsContainer.appendChild(results);
  console.log(weather);
  weatherResults.push(weather);

  results.textContent = weatherResults[0].infoCelcius;
}

function clearResults(){
    weatherResults = [];
    results.textContent = "";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchWeather(location.value).catch(e => { console.log(e) }); 
    clearResults();
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVLEtBQUssWUFBWTtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5jb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHNDb250YWluZXInKTtcblxubGV0IHdlYXRoZXJSZXN1bHRzID0gW11cbmNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZnVuY3Rpb24gV2VhdGhlcihsb2NhdGlvbiwgdGVtcGVyYXR1cmUpIHtcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XG4gIHRoaXMuaW5mb0NlbGNpdXMgPSBgVGhlIHRlbXBlcmF0dXJlIGluICR7bG9jYXRpb259IGlzICR7dGVtcGVyYXR1cmV9YCArIFwiwrAuXCI7XG59XG5cbi8vIHRha2VzIHNlYXJjaCB2YWx1ZSBhbmQgYXdhaXRzIGZldGNoaW5nIG9mIGRhdGFcbi8vIGNyZWF0ZXMgYSB3ZWF0aGVyIG9iamVjdCB3aXRoIHNlYXJjaGVkIGxvY2F0aW9uIGFuZCB0ZW1wZXJhdHVyZVxuLy8gbG9ncyB0aGUgb2JqZWN0XG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoc2VhcmNoVmFsdWUpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTllNzNkMWIyOTk5ODQ5ZTU5YjAyMDU2MTIyMzE3MDYmcT1cIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBzZWFyY2hWYWx1ZSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICBsZXQgd2VhdGhlckxvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgbGV0IHdlYXRoZXJUZW1wID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLCB3ZWF0aGVyVGVtcCk7XG5cbiAgcmVzdWx0cy5pZCA9IFwicmVzdWx0c1wiO1xuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdHMpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgd2VhdGhlclJlc3VsdHMucHVzaCh3ZWF0aGVyKTtcblxuICByZXN1bHRzLnRleHRDb250ZW50ID0gd2VhdGhlclJlc3VsdHNbMF0uaW5mb0NlbGNpdXM7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpe1xuICAgIHdlYXRoZXJSZXN1bHRzID0gW107XG4gICAgcmVzdWx0cy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2hXZWF0aGVyKGxvY2F0aW9uLnZhbHVlKS5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSk7IFxuICAgIGNsZWFyUmVzdWx0cygpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==