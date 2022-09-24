const date = new Date()
const options = {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short'
}

export default new Intl.DateTimeFormat('pt-BR', options).format(date)