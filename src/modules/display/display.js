import schema from './schema.json'
import mountDisplay from './mountDisplay'

class Display {
  #city
  #country
  #deg
  #description
  #feelsLike
  #icon
  #humidity
  #temp
  #tempMin
  #message
  #parent
  #pressure
  #speedy
  #sunrise
  #sunset

  get city () {
    return this.#city ??= ''
  }

  get country () {
    return this.#country ??= ''
  }

  get deg () {
    return this.#deg ??= ''
  }

  get description () {
    return this.#description ??= ''
  }

  get feelsLike () {
    return this.#feelsLike ??= ''
  }

  get icon () {
    return this.#icon ??= ''
  }

  get humidity () {
    return this.#humidity
  }

  get pressure () {
    return this.#pressure ??= ''
  }

  get speedy () {
    return this.#speedy ??= ''
  }

  get sunrise () {
    return this.#sunrise ??= ''
  }

  get sunset () {
    return this.#sunset ??= ''
  }

  get temp () {
    return this.#temp ??= ''
  }

  get tempMin () {
    return this.#tempMin ??= ''
  }

  get warning () {
    return document.querySelector('.weather__warning')
  }

  constructor () {
    this.warning.innerHTML = schema.loading
  }

  async changeInfo (location, snapshot) {
    await snapshot && (
      console.log(snapshot),
      this.#city = location?.name,
      this.#country = location?.country,
      this.#deg = snapshot.wind?.deg,
      this.#description = snapshot.weather[0]?.description,
      this.#feelsLike = snapshot.main?.feels_like,
      this.#icon = snapshot.weather[0]?.icon,
      this.#humidity = snapshot.main?.humidity,
      this.#pressure = snapshot.main?.pressure,
      this.#speedy = snapshot.wind?.speed,
      this.#sunrise = snapshot.sys?.sunrise,
      this.#sunset = snapshot.sys?.sunset,
      this.#temp = snapshot.main?.temp,
      this.#tempMin = snapshot.main?.temp_min,
      this.hideMessage()
    )
    mountDisplay(this)
    return this
  }

  hideMessage () {
    this.warning.style.display = 'none'
    return this
  }

  showError () {
    this.warning.innerHTML = schema.messageError
    return this
  }

  static create () {
    return new Display()
  }
}

export default Display