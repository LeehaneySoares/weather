import { provider } from './changeBackground'
import getInputValue from './getInputValue'
import Search from './search'
import template from './template'

class App extends HTMLElement {
  #currentHour
  #search

  get currentHour () {
    return this.#currentHour ??= provider?.currentHour
  }

  get icon () {
    return this.shadowRoot.querySelector('img')
  }

  get input () {
    return this.shadowRoot.querySelector('input')
  }

  get search () {
    return this.#search ??= Search.create(this)
  }
  
  get title () {
    return this.shadowRoot.querySelector('h1')
  }

  constructor () {
    super()
    this.build()
    this.mount()
  }

  build () {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(template.content.cloneNode(true))
    this.shadowRoot
      .querySelector('.weather__form')
      .addEventListener('submit', (event) => getInputValue(event, this))
    return this
  }

  changeSearch (wordSearch) {
    this.search.changeQuery(wordSearch)
    return this
  }

  mount () {
    this.title.innerText = this.getAttribute('title')
    this.icon.src = this.currentHour?.iconSearch
    return this
  }

  static create () {
    return new App()
  }
}

customElements.define('app-interface', App)

export default App.create()