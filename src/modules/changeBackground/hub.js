import afternoon from './assets/afternoon.jpg'
import morning from './assets/morning.jpg'
import night from './assets/night.jpg'
import search from './assets/search.png'
import searchOnColor from './assets/search_onColor.png'

export default {
  MORNING: {
    image: morning,
    hours: '06:00 BRT',
    backgroundColor: 'var(--color-high-light)',
    textColor: 'var(--color-low-dark)',
    iconSearch: search
  },
  AFTERNOON: {
    image: afternoon,
    hours: '13:00 BRT',
    backgroundColor: 'var(--color-warning-light)',
    textColor: 'var(--color-high-light)',
    iconSearch: searchOnColor
  },
  NIGHT: {
    image: night,
    hours: '18:00 BRT',
    midNight: '00:00 BRT',
    backgroundColor: 'var(--color-primary-dark)',
    textColor: 'var(--color-high-light)',
    iconSearch: searchOnColor
  }
}