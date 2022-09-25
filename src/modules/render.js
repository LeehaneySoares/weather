import style from './style'

const render = () => (
  document.querySelector('head').append(style)
)

export default render()