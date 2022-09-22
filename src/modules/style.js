import dayTime from './dayTime'

const backgroundColor = dayTime().backgroundColor
const textColor = dayTime().textColor

const style = `
  <style>
    .weather__container {
      background-color: var(${backgroundColor});
      border-radius: var(--border-radius-sm);
      color: var(${textColor});
      padding: var(--spacing_inset-sm);
    }

    .weather__title {
      margin: 0;
      padding-bottom: var(--spacing_inset-xs);
    }

    .weather__search {
      align-items: center;
      border: var(--border-width-hairline) solid var(${textColor});
      border-radius: var(--border-radius-pill);
      gap: var(--spacing_inset-nano);
      display: flex;
    }

    .weather__search img {
      height: 16px;
      padding: var(--spacing_inset-nano);
      width: 16px;
    }

    .weather__search input {
      background-color: var(${backgroundColor});
      border: none;
      color: var(${textColor})
    }

    .weather__search input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  </style>
`

export default style