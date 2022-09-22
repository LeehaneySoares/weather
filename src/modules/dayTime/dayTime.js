import schema from './schema'

const date = new Date()
const hours = new Intl.DateTimeFormat('pt-BR', {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short'
}).format(date)

export default function () {
  const actions = {}

  hours >= schema.morning.hours &&
  hours < schema.afternoon.hours && (
    Object.assign(actions, {
      background: schema.morning.image,
      backgroundColor: schema.morning.backgroundColor,
      textColor: schema.morning.textColor,
    })
  )

  hours >= schema.afternoon.hours &&
  hours < schema.night.hours && (
    Object.assign(actions, {
      background: schema.afternoon.image,
      backgroundColor: schema.afternoon.backgroundColor,
      textColor: schema.afternoon.textColor
    })
  )

  hours >= schema.night.hours && (
    Object.assign(actions, {
      background: schema.night.image,
      backgroundColor: schema.night.backgroundColor,
      textColor: schema.night.textColor
    })
  )

  return actions
}