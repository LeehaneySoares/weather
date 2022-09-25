import formateHours from './formateHours'
import hub from './hub'
import provider from './provider'

const [morning, afternoon, night] = [hub.MORNING, hub.AFTERNOON, hub.NIGHT]

function dayHours () {
  formateHours >= morning.hours &&
  formateHours < afternoon.hours && (
    Object.assign(provider, { currentHour: hub.MORNING })
  ),

  formateHours >= afternoon.hours &&
  formateHours < night.hours && (
    Object.assign(provider, { currentHour: hub.AFTERNOON })
  ),

  formateHours >= night.hours && (
    Object.assign(provider, { currentHour: hub.NIGHT })
  )
}

export default dayHours()