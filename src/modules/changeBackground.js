import dayTime from './dayTime'

function changeBackground () {
  const body = document.querySelector('body')
  body.style['background-image'] = `url('${dayTime().background}')`
}

export default changeBackground()