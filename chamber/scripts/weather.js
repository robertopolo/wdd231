const divCurrentWeather = document.querySelector('#current-weather');
const divForecast = document.querySelector('#forecast');
const myLat = '4,71';
const myLong = '-74,07';
const myApiKey = '62ecbb9d320a19b7964f5aef9755655d';

const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myApiKey}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myApiKey}`;

async function apiFetch(url) {
  return (response = await fetch(url));
}

function displayCurrentWeather(data) {
  const str = data.weather[0].description;

  divCurrentWeather.innerHTML = `
  <img src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=${data.weather[0].description.replace(
    ' ',
    '-'
  )} />
  <p><span>${data.main.temp}</span>&deg;C</p>
  <p>${str.charAt(0).toUpperCase()}${str.slice(1)}</p>
  <p>High: ${data.main.temp_max}&deg;C</p>
  <p>Low: ${data.main.temp_min}&deg;C</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}</p>
  <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}</p>`;
}

async function fetchCurrentWeather() {
  try {
    const response = await apiFetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  console.log(data);
  divForecast.innerHTML = `
  <p>Today: <span>${data[0].main.temp}&deg;C</span></p>
  <p>${new Date(data[1].dt * 1000).toLocaleDateString('en-US',{weekday: 'long'})}: <span>${data[1].main.temp}</span></p>
  <p>${new Date(data[2].dt * 1000).toLocaleDateString('en-US',{weekday: 'long'})}: <span>${data[2].main.temp}</span></p>`;
}

async function fetchForecast() {
  try {
    const response = await apiFetch(urlForecast);
    if (response.ok) {
      const data = await response.json();
      dataForecast = data['list']
        .filter((item) => item.dt_txt.includes('00:00:00'))
        .slice(0, 3);
      displayForecast(dataForecast);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// fetchCurrentWeather();
// fetchForecast();
