import getInputValue from './getInputValue'
import storage from './storage'

class Search {
  #latitude
  #longitude
  #parent
  #query

  get display () {
    return this.#parent?.display
  }

  get latitude () {
    return this.#latitude ??= ''
  }

  get longitude () {
    return this.#longitude ??= ''
  }

  get query () {
    return this.#query ??= ''
  }

  get warning () {
    return document.querySelector('.weather__warning')
  }

  constructor (parent) {
    this.#parent = parent
    getInputValue(this)
  }

  changeCoordinates (snapshot) {
    this.#latitude = snapshot?.lat
    this.#longitude = snapshot?.lon
    storage.metereologic(snapshot, this)
    return this
  }

  changeQuery (wordSearch) {
    this.#query = encodeURI(wordSearch)
    this.loading()
    storage.geolocation(this)
    return this
  }

  loading () {
    this.warning.style.display = 'flex'
    return this
  }

  static create (parent) {
    return new Search(parent)
  }
}

export default Search