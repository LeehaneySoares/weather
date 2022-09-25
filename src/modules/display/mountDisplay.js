const weatherInfo = document.querySelector('.weather__info')
const weatherCity = document.querySelector('.weather__city')
const weatherTemp = document.querySelector('.weather__temp img')
const weatherWindIcon = document.querySelector('.weather__windIcon')
const weatherWindInfo = document.querySelector('.weather__windInfo')
const weatherCelsius = document.querySelector('.weather__celsius span')


export default function (target) {
  const urlIcon = `https://openweathermap.org/img/wn/${target.icon}@2x.png`
  weatherTemp.src = urlIcon
  weatherCity.innerHTML = `${target.city}, ${target.country}`
  weatherCelsius.innerHTML = `${target.temp.toFixed(2)} <sup>°C</sup>`
  weatherWindIcon.style.transform = `rotate(${target.deg}deg)`
  weatherWindInfo.innerHTML = `${target.speedy} <sup>km/h</sup>`
  weatherInfo.style.display = 'flex';
}