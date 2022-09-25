import { provider } from './changeBackground'
import Display from './display'
import Search from './search'

class App {
  #display
  #search
  
  get display () {
    return this.#display ??= Display.create()
  }

  get search () {
    return this.#search ??= Search.create()
  }

  constructor () {
    this.build()
    this.mount()
  }

  build () {
    Display.create(this)
    Search.create(this)
    return this
  }

  mount () {
    const { iconSearch } = provider.currentHour
    document.querySelector('.weather__button img').src = iconSearch
    return this
  }

  static create () {
    return new App()
  }
}

export default App.create()