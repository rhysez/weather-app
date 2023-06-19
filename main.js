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

const mainResultLocation = document.createElement('div');
const mainResultTemperature = document.createElement('div');
const mainResultCondition = document.createElement('div');

const resultFeelsLike = document.createElement('div');
const resultHumidity = document.createElement('div');
const resultWind = document.createElement('div');

let weatherResults = []

function Weather(location, temperature, temperatureF, feelsLikeCelcius, humidity, wind, condition) {
  this.location = location;
  this.temperature = temperature;
  this.temperatureF = temperatureF;
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
  let weatherTempF = weatherData.current.temp_f;
  let weatherFeelsLikeCelcius = weatherData.current.feelslike_c; 
  let weatherHumidity = weatherData.current.humidity;
  let weatherWind = weatherData.current.wind_mph;
  let weatherCondition = weatherData.current.condition.text;
  let weather = new Weather(weatherLocation, weatherTemp, weatherTempF, weatherFeelsLikeCelcius, weatherHumidity, weatherWind, weatherCondition);

  resultsMain.appendChild(mainResultLocation);
  resultsMain.appendChild(mainResultTemperature);
  resultsMain.appendChild(mainResultCondition);

  mainResultLocation.classList.add('mainResult');
  mainResultTemperature.classList.add('mainResult');
  mainResultTemperature.id = 'mainTemperature';
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
  mainResultTemperature.textContent = weatherResults[0].temperature + "°C";
  mainResultCondition.textContent = weatherResults[0].condition;

  resultFeelsLike.textContent = `It feels like ${weatherResults[0].feelsLikeCelcius}°C`;
  resultHumidity.textContent = `Humidity: ${weatherResults[0].humidity}%`
  resultWind.textContent = `Wind speed: ${weatherResults[0].wind} mph`

  const mainTemperature = document.getElementById('mainTemperature')
  const fTempButton = document.getElementById('fTemp');
  const cTempButton = document.getElementById('cTemp');

  fTempButton.addEventListener('click', () => {
    mainTemperature.textContent = weatherResults[0].temperatureF + "°F"; // returns undefined
    resultFeelsLike.textContent = `It feels like ${weatherResults[0].temperatureF}°F` // returns undefined
  })

  cTempButton.addEventListener('click', () => {
    mainTemperature.textContent = weatherResults[0].temperature + "°C";
    resultFeelsLike.textContent = `It feels like ${weatherResults[0].feelsLikeCelcius}°C`
  })

  console.log(weatherResults[0]);
}

// need to program buttons to change temperature values
function appendTempButtons(){
  const tempButtons = document.getElementById('tempButtons');
  const fTemp = document.createElement('button');
  const cTemp = document.createElement('button');

  fTemp.id = 'fTemp';
  cTemp.id = 'cTemp';

  fTemp.textContent = 'F°';
  cTemp.textContent = 'C°';

  tempButtons.appendChild(fTemp);
  tempButtons.appendChild(cTemp);
}

function clear(){
    weatherResults = [];
    resultFeelsLike.textContent = "";
    resultHumidity.textContent = "";
    resultWind.textContent = "";

    while (tempButtons.firstChild) {
      tempButtons.removeChild(tempButtons.lastChild);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchWeather(location.value).catch(e => { console.log(e) }); 
    clear();
    appendTempButtons();
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxtQ0FBbUM7QUFDcEYsNENBQTRDLDJCQUEyQjtBQUN2RSwwQ0FBMEMsd0JBQXdCOztBQUVsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBeUU7QUFDekUsbURBQW1ELCtCQUErQjtBQUNsRixHQUFHOztBQUVIO0FBQ0E7QUFDQSxtREFBbUQsbUNBQW1DO0FBQ3RGLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbmNvbnN0IHJlc3VsdHNNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHNNYWluJyk7XG5jb25zdCByZXN1bHRzQ29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHNDb25kaXRpb24nKTtcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c0NvbnRhaW5lcicpO1xuXG5jb25zdCBtYWluUmVzdWx0TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1haW5SZXN1bHRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWFpblJlc3VsdENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCByZXN1bHRGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHJlc3VsdEh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCByZXN1bHRXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmxldCB3ZWF0aGVyUmVzdWx0cyA9IFtdXG5cbmZ1bmN0aW9uIFdlYXRoZXIobG9jYXRpb24sIHRlbXBlcmF0dXJlLCB0ZW1wZXJhdHVyZUYsIGZlZWxzTGlrZUNlbGNpdXMsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24pIHtcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XG4gIHRoaXMudGVtcGVyYXR1cmVGID0gdGVtcGVyYXR1cmVGO1xuICB0aGlzLmZlZWxzTGlrZUNlbGNpdXMgPSBmZWVsc0xpa2VDZWxjaXVzO1xuICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gIHRoaXMud2luZCA9IHdpbmQ7XG4gIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoc2VhcmNoVmFsdWUpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTllNzNkMWIyOTk5ODQ5ZTU5YjAyMDU2MTIyMzE3MDYmcT1cIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBzZWFyY2hWYWx1ZSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICBsZXQgd2VhdGhlckxvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgbGV0IHdlYXRoZXJUZW1wID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGxldCB3ZWF0aGVyVGVtcEYgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgbGV0IHdlYXRoZXJGZWVsc0xpa2VDZWxjaXVzID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYzsgXG4gIGxldCB3ZWF0aGVySHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBsZXQgd2VhdGhlcldpbmQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBsZXQgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLCB3ZWF0aGVyVGVtcCwgd2VhdGhlclRlbXBGLCB3ZWF0aGVyRmVlbHNMaWtlQ2VsY2l1cywgd2VhdGhlckh1bWlkaXR5LCB3ZWF0aGVyV2luZCwgd2VhdGhlckNvbmRpdGlvbik7XG5cbiAgcmVzdWx0c01haW4uYXBwZW5kQ2hpbGQobWFpblJlc3VsdExvY2F0aW9uKTtcbiAgcmVzdWx0c01haW4uYXBwZW5kQ2hpbGQobWFpblJlc3VsdFRlbXBlcmF0dXJlKTtcbiAgcmVzdWx0c01haW4uYXBwZW5kQ2hpbGQobWFpblJlc3VsdENvbmRpdGlvbik7XG5cbiAgbWFpblJlc3VsdExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcbiAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLmlkID0gJ21haW5UZW1wZXJhdHVyZSc7XG4gIG1haW5SZXN1bHRDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnbWFpblJlc3VsdCcpO1xuXG4gIHJlc3VsdEZlZWxzTGlrZS5pZCA9IFwicmVzdWx0MVwiO1xuICByZXN1bHRIdW1pZGl0eS5pZCA9IFwicmVzdWx0MlwiO1xuICByZXN1bHRXaW5kLmlkID0gXCJyZXN1bHQzXCI7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0RmVlbHNMaWtlKTtcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRIdW1pZGl0eSk7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0V2luZCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIHdlYXRoZXJSZXN1bHRzLnB1c2god2VhdGhlcik7XG5cbiAgbWFpblJlc3VsdExvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlclJlc3VsdHNbMF0ubG9jYXRpb247XG4gIG1haW5SZXN1bHRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLnRlbXBlcmF0dXJlICsgXCLCsENcIjtcbiAgbWFpblJlc3VsdENvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLmNvbmRpdGlvbjtcblxuICByZXN1bHRGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgSXQgZmVlbHMgbGlrZSAke3dlYXRoZXJSZXN1bHRzWzBdLmZlZWxzTGlrZUNlbGNpdXN9wrBDYDtcbiAgcmVzdWx0SHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlclJlc3VsdHNbMF0uaHVtaWRpdHl9JWBcbiAgcmVzdWx0V2luZC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke3dlYXRoZXJSZXN1bHRzWzBdLndpbmR9IG1waGBcblxuICBjb25zdCBtYWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblRlbXBlcmF0dXJlJylcbiAgY29uc3QgZlRlbXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZlRlbXAnKTtcbiAgY29uc3QgY1RlbXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY1RlbXAnKTtcblxuICBmVGVtcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS50ZW1wZXJhdHVyZUYgKyBcIsKwRlwiOyAvLyByZXR1cm5zIHVuZGVmaW5lZFxuICAgIHJlc3VsdEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBJdCBmZWVscyBsaWtlICR7d2VhdGhlclJlc3VsdHNbMF0udGVtcGVyYXR1cmVGfcKwRmAgLy8gcmV0dXJucyB1bmRlZmluZWRcbiAgfSlcblxuICBjVGVtcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS50ZW1wZXJhdHVyZSArIFwiwrBDXCI7XG4gICAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEl0IGZlZWxzIGxpa2UgJHt3ZWF0aGVyUmVzdWx0c1swXS5mZWVsc0xpa2VDZWxjaXVzfcKwQ2BcbiAgfSlcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzdWx0c1swXSk7XG59XG5cbi8vIG5lZWQgdG8gcHJvZ3JhbSBidXR0b25zIHRvIGNoYW5nZSB0ZW1wZXJhdHVyZSB2YWx1ZXNcbmZ1bmN0aW9uIGFwcGVuZFRlbXBCdXR0b25zKCl7XG4gIGNvbnN0IHRlbXBCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBCdXR0b25zJyk7XG4gIGNvbnN0IGZUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgZlRlbXAuaWQgPSAnZlRlbXAnO1xuICBjVGVtcC5pZCA9ICdjVGVtcCc7XG5cbiAgZlRlbXAudGV4dENvbnRlbnQgPSAnRsKwJztcbiAgY1RlbXAudGV4dENvbnRlbnQgPSAnQ8KwJztcblxuICB0ZW1wQnV0dG9ucy5hcHBlbmRDaGlsZChmVGVtcCk7XG4gIHRlbXBCdXR0b25zLmFwcGVuZENoaWxkKGNUZW1wKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoKXtcbiAgICB3ZWF0aGVyUmVzdWx0cyA9IFtdO1xuICAgIHJlc3VsdEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVzdWx0SHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJlc3VsdFdpbmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgd2hpbGUgKHRlbXBCdXR0b25zLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRlbXBCdXR0b25zLnJlbW92ZUNoaWxkKHRlbXBCdXR0b25zLmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoV2VhdGhlcihsb2NhdGlvbi52YWx1ZSkuY2F0Y2goZSA9PiB7IGNvbnNvbGUubG9nKGUpIH0pOyBcbiAgICBjbGVhcigpO1xuICAgIGFwcGVuZFRlbXBCdXR0b25zKCk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9