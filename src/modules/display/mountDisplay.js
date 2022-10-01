const $ = (element) => document.querySelector(element)

const weatherInfo = $('.weather__info')
const weatherCity = $('.weather__city')
const weatherTemp = $('.weather__temp img')
const weatherWindIcon = $('.weather__windIcon')
const weatherWindInfo = $('.weather__windInfo')
const weatherCelsius = $('.weather__celsius span')
const weatherDescription = $('.weather__description')
const weatherFeelsLike = $('.weather__feelsLikeInfo')
const weatherPressure = $('.weather__pressureInfo')
const weatherHumidity = $('.weather__humidityInfo')

export default function (target) {
  const urlIcon = `https://openweathermap.org/img/wn/${target.icon}@2x.png`
  weatherTemp.src = urlIcon
  weatherCity.innerHTML = `${target.city}, ${target.country}`
  weatherCelsius.innerHTML = `${target.temp.toFixed(2)} <sup>°C</sup>`
  weatherWindIcon.style.transform = `rotate(${target.deg}deg)`
  weatherWindInfo.innerHTML = `${target.speedy} <sup>km/h</sup>`
  weatherDescription.innerHTML = target.description
  weatherFeelsLike.innerHTML = `<span>${target.feelsLike}%</span>`
  weatherPressure.innerHTML = `<span>${target.pressure}%</span>`
  weatherHumidity.innerHTML = `<span>${target.humidity}%</span>`
  weatherInfo.style.display = 'flex';
}