import settings from './settings'

const actions = {}

const geolocation = (target) => (
  fetch(`${settings(target).api.geolocation}`)
    .then(response => response.json())
    .then(json => target.changeCoordinates(json[0] || []))
)

const metereologic = (location, target) => (
  fetch(`${settings(target).api.metereologic}`)
    .then(response => response.json())
    .then(json => (
      json.cod !== '400' &&
      target.display.changeInfo(location, json)
    ))
)

Object.assign(actions, {
  geolocation,
  metereologic
})

export default actions