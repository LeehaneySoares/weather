import template from './template'

class App extends HTMLElement {
  #input
  #title

  get input () {
    return this.#input ??= ''
  }

  get placeHolder () {
    return this.getAttribute('placeholder')
  }
  
  get title () {
    return this.#title ??= ''
  }

  constructor () {
    super()
    this.build()
    this.mount()
  }

  build () {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(template.content.cloneNode(true))
    this.#title = this.shadowRoot.querySelector('h1')
    this.#input = this.shadowRoot.querySelector('input')
    return this
  }

  mount () {
    this.title.innerText = this.getAttribute('title')
    this.input.className = 'weather__input'
    this.input.setAttribute('placeholder', this.placeHolder)
    return this
  }

  static create () {
    return new App()
  }
}

customElements.define('app-interface', App)

export default App