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
