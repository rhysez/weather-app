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