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
