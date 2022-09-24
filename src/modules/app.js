import { provider } from './changeBackground'
import Search from './search'
import template from './template'

class App extends HTMLElement {
  #currentHour
  #search
  #query

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

  get query () {
    return this.#query ??= ''
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

export default App