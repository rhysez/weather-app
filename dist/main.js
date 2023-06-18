/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function Weather(location, temperature){
    this.location = location;
    this.temperature = temperature;
    this.announce = `The temperature in ${location} is ${temperature}` + '°';
}

// takes search value and awaits fetching of data
// creates a weather object with key information
// logs the object
async function fetchWeather(searchValue){
    const url = 'https://api.weatherapi.com/v1/current.json?key=9e73d1b2999849e59b0205612231706&q=';
    const response = await fetch(url + searchValue, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    let weatherLocation = weatherData.location.name;
    let weatherTemp = weatherData.current.temp_c;

    let weather = new Weather(weatherLocation, weatherTemp);

    console.log(weather);
    console.log(weather.announce);
}

fetchWeather('truro').catch(e => {
    console.log(e)
})

// need to transfer the json data into an object
// object should only contain the data I need for the app
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxVQUFVLEtBQUssWUFBWTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGFBQWE7QUFDbEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gV2VhdGhlcihsb2NhdGlvbiwgdGVtcGVyYXR1cmUpe1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XG4gICAgdGhpcy5hbm5vdW5jZSA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gJHtsb2NhdGlvbn0gaXMgJHt0ZW1wZXJhdHVyZX1gICsgJ8KwJztcbn1cblxuLy8gdGFrZXMgc2VhcmNoIHZhbHVlIGFuZCBhd2FpdHMgZmV0Y2hpbmcgb2YgZGF0YVxuLy8gY3JlYXRlcyBhIHdlYXRoZXIgb2JqZWN0IHdpdGgga2V5IGluZm9ybWF0aW9uXG4vLyBsb2dzIHRoZSBvYmplY3RcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihzZWFyY2hWYWx1ZSl7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OWU3M2QxYjI5OTk4NDllNTliMDIwNTYxMjIzMTcwNiZxPSc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBzZWFyY2hWYWx1ZSwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIGxldCB3ZWF0aGVyTG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgIGxldCB3ZWF0aGVyVGVtcCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jO1xuXG4gICAgbGV0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyTG9jYXRpb24sIHdlYXRoZXJUZW1wKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIuYW5ub3VuY2UpO1xufVxuXG5mZXRjaFdlYXRoZXIoJ3RydXJvJykuY2F0Y2goZSA9PiB7XG4gICAgY29uc29sZS5sb2coZSlcbn0pXG5cbi8vIG5lZWQgdG8gdHJhbnNmZXIgdGhlIGpzb24gZGF0YSBpbnRvIGFuIG9iamVjdFxuLy8gb2JqZWN0IHNob3VsZCBvbmx5IGNvbnRhaW4gdGhlIGRhdGEgSSBuZWVkIGZvciB0aGUgYXBwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9