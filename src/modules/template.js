import style from './style.js'
const template = document.createElement('template')

template.innerHTML = `
  ${style}
  <div class="weather__container">
    <h1 class="weather__title"></h1>
    <div class="weather__search">
      <img src="./assets/icons/search.png" />
      <input type="text" name="city" />
    </div>
    <div class="weather__display"></div>
  </div>
`

export default template