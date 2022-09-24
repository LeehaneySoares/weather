let formData
let inputValue

export default (event, target) => (
  event.preventDefault(),
  formData = new FormData(target.shadowRoot.querySelector('.weather__form')),
  inputValue = formData.get('city'),

  target.changeSearch(inputValue)
)