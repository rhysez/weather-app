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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELG1DQUFtQztBQUNwRiw0Q0FBNEMsMkJBQTJCO0FBQ3ZFLDBDQUEwQyx3QkFBd0I7O0FBRWxFO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0JBQWdCO0FBQzlEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuY29uc3QgcmVzdWx0c01haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c01haW4nKTtcbmNvbnN0IHJlc3VsdHNDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c0NvbmRpdGlvbicpO1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzQ29udGFpbmVyJyk7XG5cbmNvbnN0IG1haW5SZXN1bHRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWFpblJlc3VsdFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluUmVzdWx0Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IHJlc3VsdEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcmVzdWx0SHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHJlc3VsdFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxubGV0IHdlYXRoZXJSZXN1bHRzID0gW11cblxuZnVuY3Rpb24gV2VhdGhlcihsb2NhdGlvbiwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZUNlbGNpdXMsIGh1bWlkaXR5LCB3aW5kLCBjb25kaXRpb24pIHtcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XG4gIHRoaXMuZmVlbHNMaWtlQ2VsY2l1cyA9IGZlZWxzTGlrZUNlbGNpdXM7XG4gIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgdGhpcy53aW5kID0gd2luZDtcbiAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihzZWFyY2hWYWx1ZSkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OWU3M2QxYjI5OTk4NDllNTliMDIwNTYxMjIzMTcwNiZxPVwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHNlYXJjaFZhbHVlLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGxldCB3ZWF0aGVyTG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICBsZXQgd2VhdGhlclRlbXAgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYztcbiAgbGV0IHdlYXRoZXJGZWVsc0xpa2VDZWxjaXVzID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYzsgXG4gIGxldCB3ZWF0aGVySHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBsZXQgd2VhdGhlcldpbmQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBsZXQgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxldCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLCB3ZWF0aGVyVGVtcCwgd2VhdGhlckZlZWxzTGlrZUNlbGNpdXMsIHdlYXRoZXJIdW1pZGl0eSwgd2VhdGhlcldpbmQsIHdlYXRoZXJDb25kaXRpb24pO1xuXG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRMb2NhdGlvbik7XG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRUZW1wZXJhdHVyZSk7XG4gIHJlc3VsdHNNYWluLmFwcGVuZENoaWxkKG1haW5SZXN1bHRDb25kaXRpb24pO1xuXG4gIG1haW5SZXN1bHRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdtYWluUmVzdWx0Jyk7XG4gIG1haW5SZXN1bHRUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdtYWluUmVzdWx0Jyk7XG4gIG1haW5SZXN1bHRUZW1wZXJhdHVyZS5pZCA9ICdtYWluVGVtcGVyYXR1cmUnO1xuICBtYWluUmVzdWx0Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5SZXN1bHQnKTtcblxuICByZXN1bHRGZWVsc0xpa2UuaWQgPSBcInJlc3VsdDFcIjtcbiAgcmVzdWx0SHVtaWRpdHkuaWQgPSBcInJlc3VsdDJcIjtcbiAgcmVzdWx0V2luZC5pZCA9IFwicmVzdWx0M1wiO1xuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEZlZWxzTGlrZSk7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0SHVtaWRpdHkpO1xuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdFdpbmQpO1xuXG4gIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICB3ZWF0aGVyUmVzdWx0cy5wdXNoKHdlYXRoZXIpO1xuXG4gIG1haW5SZXN1bHRMb2NhdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLmxvY2F0aW9uO1xuICBtYWluUmVzdWx0VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVzdWx0c1swXS50ZW1wZXJhdHVyZSArIFwiwrBcIjtcbiAgbWFpblJlc3VsdENvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXN1bHRzWzBdLmNvbmRpdGlvbjtcblxuICByZXN1bHRGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgSXQgZmVlbHMgbGlrZSAke3dlYXRoZXJSZXN1bHRzWzBdLmZlZWxzTGlrZUNlbGNpdXN9wrBgO1xuICByZXN1bHRIdW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyUmVzdWx0c1swXS5odW1pZGl0eX0lYFxuICByZXN1bHRXaW5kLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7d2VhdGhlclJlc3VsdHNbMF0ud2luZH0gbXBoYFxuXG4gIGlmICh3ZWF0aGVyUmVzdWx0c1swXS50ZW1wZXJhdHVyZSA8PSAxMCl7XG4gICAgbWFpblJlc3VsdFRlbXBlcmF0dXJlLnN0eWxlLmNvbG9yID0gJ2JsdWUnXG4gIH0gZWxzZSBpZiAod2VhdGhlclJlc3VsdHNbMF0udGVtcGVyYXR1cmUgPj0gMTApe1xuICAgIG1haW5SZXN1bHRUZW1wZXJhdHVyZS5zdHlsZS5jb2xvciA9ICd5ZWxsb3cnXG4gIH1cbn1cblxuLy8gbmVlZCB0byBwcm9ncmFtIGJ1dHRvbnMgdG8gY2hhbmdlIHRlbXBlcmF0dXJlIHZhbHVlc1xuZnVuY3Rpb24gYXBwZW5kVGVtcEJ1dHRvbnMoKXtcbiAgY29uc3QgdGVtcEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEJ1dHRvbnMnKTtcbiAgY29uc3QgZlRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBmVGVtcC5pZCA9ICdmVGVtcCc7XG4gIGNUZW1wLmlkID0gJ2NUZW1wJztcblxuICBmVGVtcC50ZXh0Q29udGVudCA9ICdGwrAnO1xuICBjVGVtcC50ZXh0Q29udGVudCA9ICdDwrAnO1xuXG4gIHRlbXBCdXR0b25zLmFwcGVuZENoaWxkKGZUZW1wKTtcbiAgdGVtcEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY1RlbXApO1xufVxuXG5mdW5jdGlvbiBjbGVhcigpe1xuICAgIHdlYXRoZXJSZXN1bHRzID0gW107XG4gICAgcmVzdWx0RmVlbHNMaWtlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXN1bHRIdW1pZGl0eS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVzdWx0V2luZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICB3aGlsZSAodGVtcEJ1dHRvbnMuZmlyc3RDaGlsZCkge1xuICAgICAgdGVtcEJ1dHRvbnMucmVtb3ZlQ2hpbGQodGVtcEJ1dHRvbnMubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2hXZWF0aGVyKGxvY2F0aW9uLnZhbHVlKS5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSk7IFxuICAgIGNsZWFyKCk7XG4gICAgYXBwZW5kVGVtcEJ1dHRvbnMoKTtcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=