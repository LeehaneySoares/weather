import schema from './schema.json'

const settings = {
  api: {
    geolocation: (target) => (
      `${schema.geolocation}${target.query}&limit=5&appid=${schema.key}`
    ),
    metereologic: (target) => (
      `${schema.metereologic}lat=${target.latitude}&lon=${target.longitude}&lang=${schema.lang}&appid=${schema.key}&units=${schema.units}`
    )
  }
}

export default settings