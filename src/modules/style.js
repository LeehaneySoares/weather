import { provider } from './changeBackground'

const { backgroundColor, textColor } = provider?.currentHour

const style = `
  <style>
    .weather__container {
      background-color: ${backgroundColor};
      border-radius: var(--border-radius-sm);
      color: ${textColor};
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      padding: var(--spacing_inset-sm);
    }

    .weather__title {
      margin: 0 auto;
      padding-bottom: var(--spacing_inset-xs);
    }

    .weather__form {
      align-items: center;
      border: var(--border-width-hairline) solid ${textColor};
      border-radius: var(--border-radius-pill);
      display: flex;
      gap: var(--spacing_inset-nano);
      min-width: 400px;
    }

    .weather__button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .weather__form img {
      height: 16px;
      padding: var(--spacing_inset-nano);
      width: 16px;
    }

    .weather__search {
      background-color: ${backgroundColor};
      border: none;
      color: ${textColor};
      width: 85%;
    }

    .weather__search:focus {
      webkit-box-shadow: 0 0 0px 1000px white inset;
      background-color: transparent;
      box-shadow: none;
      outline: 0;
    }
  </style>
`

export default style