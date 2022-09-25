import { provider } from './changeBackground'

const style = document.createElement('style')
const { backgroundColor, textColor } = provider?.currentHour

style.innerHTML = `
    .weather__main {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      margin: 0 auto;
      max-width: 800px;
      padding: 0 var(--spacing_inset-xs);
      width: 100%;
    }

    .weather__container {
      background-color: ${backgroundColor};
      border-radius: var(--border-radius-sm);
      color: ${textColor};
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      margin: 0 auto;
      padding: var(--spacing_inset-sm);
    }

    .weather__title {
      margin: 0 auto;
    }

    .weather__form {
      align-items: center;
      border: var(--border-width-hairline) solid ${textColor};
      border-radius: var(--border-radius-pill);
      display: flex;
      gap: var(--spacing_inset-quarck);
      min-width: 400px;
    }

    .weather__button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: var(--spacing_inset-quarck);
    }

    .weather__form img {
      height: 30px;
      padding: var(--spacing_inset-nano);
      width: 30px;
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

    .weather__warning {
      display: none;
      justify-content: center;
      width: 100%;
    }

    .weather__info {
      align-items: center;
      display: none;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
    }

    .weather__city {
      margin: var(--spacing-xxxs) 0;
    }

    .weather__info .weather__container {
      align-items: center !important;
      display: flex;
      flex-direction: row;
      justify-content: space-between !important;
      margin: unset !important;
      padding: var(--spacing_inset-xs);
      width: 100%;
    }

    .weather__temp,
    .weather__wind {
      align-items: center;
      border: var(--border-width-hairline) solid ${textColor};
      border-radius: var(--border-radius-sm);
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      height: 240px;
      justify-content: center;
      padding: var(--spacing_inset-sm);
    }

    .weather__temp figcaption,
    .weather__wind figcaption {
      text-align: center;
    }

    .weather__temp figcaption p,
    .weather__wind figcaption p {
      margin: var(--spacing-nano) 0;
    }

    .weather__celsius span {
      font-size: var(--font-size-lg);
      font-weight: bold;
    }

    .weather__celsius span sup,
    .weather__windInfo sup {
      font-size: var(--font-size-xxs);
    }

    .weather__wind {
      text-align: center;
    }

    .weather__windText {
      color: ${textColor};
      font-size: 16px;
      margin-bottom: 5px;
    }

    .weather__windInfo {
      color: ${textColor};
      font-size: var(--font-size-lg);
      font-weight: bold;
      height: 100%;
    }

    .weather__windArea {
      border: var(--border-width-hairline) solid ${textColor};
      border-radius: var(--border-radius-circular);
      height: 50px;
      margin: auto;
      margin-bottom: 25px;
      margin-top: 25px;
      padding-left: 25px;
      padding-top: 25px;
      width: 50px;
    }

    .weather__windIcon {
      background-color: #FFF;
      height: 1px;
      transform-origin: left;
      width: 15px;
    }

    .weather__anotherInfo {
      border: var(--border-width-hairline) solid ${textColor};
      border-radius: var(--border-radius-pill);
      display: flex;
      padding: var(--spacing_inset-nano);
      width: 100%;
    }

    .weather__feelsLike,
    .weather__humidity {
      border-right: var(--border-width-hairline) solid ${textColor};
    }

    .weather__feelsLike,
    .weather__humidity,
    .weather__pressure {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--spacing_inset-nano);
      width: 100%;
    }

    .weather__feelsLike img,
    .weather__humidity img,
    .weather__pressure img {
      height: 24px;
      object-fit: contain;
      width: 24px;
    }
`

export default style