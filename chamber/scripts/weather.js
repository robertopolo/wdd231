const currentWeather = document.querySelector('#current-weather');
const myLat = '4,71';
const myLong = '-74,07';
const myApiKey = '62ecbb9d320a19b7964f5aef9755655d';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myApiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
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

function capitalizeFirstWord(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function convertTimeStampToDate(timestamp){
  const date = new Date(timestamp * 1000);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? 'P.M.' : 'A.M.';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

  const time12h = `${hours}:${minutesStr} ${ampm}`;

  return time12h;
}

function displayCurrentWeather(data){
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
  const weatherIcon = document.createElement('img');
  const currentTemp = document.createElement('p');
  const desc = document.createElement('p');
  const maxTemp = document.createElement('p');
  const minTemp = document.createElement('p');
  const humidity = document.createElement('p');
  const sunrise = document.createElement('p');
  const sunset = document.createElement('p');

  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  
  currentTemp.innerHTML = `<span>${data.main.temp}</span>&deg; C`;
  desc.innerHTML = capitalizeFirstWord(data.weather[0].description);
  maxTemp.innerHTML = `High: ${data.main.temp_max}&deg;`;
  minTemp.innerHTML = `Low: ${data.main.temp_min}&deg;`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

  sunrise.innerHTML = `Sunrise: ${convertTimeStampToDate(data.sys.sunrise)}`;
  sunset.innerHTML = `Sunset: ${convertTimeStampToDate(data.sys.sunset)}`;
  
  currentWeather.appendChild(weatherIcon);
  currentWeather.appendChild(currentTemp);
  currentWeather.appendChild(desc);
  currentWeather.appendChild(maxTemp);
  currentWeather.appendChild(minTemp);
  currentWeather.appendChild(humidity);
  currentWeather.appendChild(sunrise);
  currentWeather.appendChild(sunset);
}

apiFetch();
