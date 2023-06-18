/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// takes search value, awaits fetch, takes json and console logs it 
async function fetchWeather(searchValue){
    const url = 'https://api.weatherapi.com/v1/current.json?key=9e73d1b2999849e59b0205612231706&q=';
    const response = await fetch(url + searchValue, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
}

// catches error upon recieving json
fetchWeather('truro').catch(e => {
    console.log(e)
})

// need to transfer the json data into an object
// object should only contain the data I need for the app
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxhQUFhO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EseUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWtlcyBzZWFyY2ggdmFsdWUsIGF3YWl0cyBmZXRjaCwgdGFrZXMganNvbiBhbmQgY29uc29sZSBsb2dzIGl0IFxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKHNlYXJjaFZhbHVlKXtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05ZTczZDFiMjk5OTg0OWU1OWIwMjA1NjEyMjMxNzA2JnE9JztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHNlYXJjaFZhbHVlLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufVxuXG4vLyBjYXRjaGVzIGVycm9yIHVwb24gcmVjaWV2aW5nIGpzb25cbmZldGNoV2VhdGhlcigndHJ1cm8nKS5jYXRjaChlID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKVxufSlcblxuLy8gbmVlZCB0byB0cmFuc2ZlciB0aGUganNvbiBkYXRhIGludG8gYW4gb2JqZWN0XG4vLyBvYmplY3Qgc2hvdWxkIG9ubHkgY29udGFpbiB0aGUgZGF0YSBJIG5lZWQgZm9yIHRoZSBhcHAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=