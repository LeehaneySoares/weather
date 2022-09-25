import schema from './schema.json'

const settings = (target) => ({
  api: {
    geolocation: `${schema.geolocation}${target.query}&limit=5&appid=${schema.key}`,
    metereologic: `${schema.metereologic}lat=${target.latitude}&lon=${target.longitude}&lang=${schema.lang}&appid=${schema.key}&units=${schema.units}`
  }
})

export default settings