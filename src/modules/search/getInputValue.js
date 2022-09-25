let formData
let inputValue

export default function (target) {
  const form = document.querySelector('.weather__form')
  form.addEventListener('submit', (event) => (
    event.preventDefault(),
    formData = new FormData(form),
    inputValue = formData.get('city'),
    target.changeQuery(inputValue)
  ))
}
