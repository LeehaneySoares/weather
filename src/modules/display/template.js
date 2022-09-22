const template = document.createElement('template')

template.innerHTML = `
  <article>
    <label class="weather__city"></label>
    <label class="weather__temp"></label>
    <figure class="weather__figure">
      <img class="weather__icon" />
      <figcaption class="weather__caption">
      </figcaption>
    </figure>

  </article>
`