import storage from './storage'

class Search {
  #query

  get limit () {
    return 5
  }

  get query () {
    return this.#query ??= ''
  }

  changeQuery (wordSearch) {
    this.#query = wordSearch
    storage.geolocation(this)
    return this
  }

  static create () {
    return new Search()
  }
}

export default Search