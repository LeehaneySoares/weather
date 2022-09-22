import schema from './schema'

const date = new Date()
const hours = new Intl.DateTimeFormat('pt-BR', {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short'
}).format(date)

export default function () {
  const body = document.querySelector('body')

  hours >= schema.morning.hours &&
  hours < schema.afternoon.hours && (
    body.style['background-image'] = `url('${schema.morning.image}')`
  )

  hours >= schema.afternoon.hours &&
  hours < schema.night.hours && (
    body.style['background-image'] = `url('${schema.afternoon.image}')`
  )

  hours >= schema.night.hours && (
    body.style['background-image'] = `url('${schema.night.image}')`
  )
}