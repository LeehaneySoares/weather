import style from './style.js'
const template = document.createElement('template')

import App from './app'

template.innerHTML = `
  ${style}
  <div class="weather__container">
    <h1 class="weather__title"></h1>
    <form class="weather__form">
      <button type="submit" class="weather__button">
        <img src="./assets/icons/search.png" />
      </button>
      <input class="weather__search" type="search"/>
    </form>
  </div>
`

export default template