import schema from './schema.json'

export default function () {
  const date = new Date()
  console.log(new Date().getTimezoneOffset())
  const body = document.querySelector('body')

  body.style['background-image'] = `url('${schema.morning}')`
}