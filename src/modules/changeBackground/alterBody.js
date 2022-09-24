import provider from './provider'

const body = document.querySelector('body')
const { image } = provider.currentHour

export default body.style['background-image'] = `url('${image}')`
