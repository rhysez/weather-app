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
