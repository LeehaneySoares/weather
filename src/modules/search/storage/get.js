import schema from './schema.json'

const actions = {}

const geolocation = (target) => (
  fetch(`${schema.api.geolocation}${target.query}&limit=${target.limit}&appid=${schema.key}`)
    .then(response => response.json())
    .then(json => console.log(json))
)

Object.assign(actions, {
  geolocation
})

export default actions