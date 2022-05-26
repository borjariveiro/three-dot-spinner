import { html, css, LitElement } from 'lit';

export class ThreeDotSpinner extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--tds-container-width, 100%);
        height: var(--tds-container-height, 10rem);
      }
      .three-body {
        --uib-size: var(--tds-size, 35px);
        --uib-speed: var(--tds-speed, 1.1s);
        --uib-color: var(--tds-color, #f78302);

        position: relative;
        display: inline-block;
        height: var(--uib-size);
        width: var(--uib-size);
        animation: spin calc(var(--uib-speed) * 2.5) infinite linear;
      }

      .three-body__dot {
        position: absolute;
        height: 100%;
        width: 30%;
      }

      .three-body__dot:after {
        content: '';
        position: absolute;
        height: 0%;
        width: 100%;
        padding-bottom: 100%;
        background-color: var(--uib-color);
        border-radius: 50%;
      }

      .three-body__dot:nth-child(1) {
        bottom: 5%;
        left: 0;
        transform: rotate(60deg);
        transform-origin: 50% 85%;
      }

      .three-body__dot:nth-child(1)::after {
        bottom: 0;
        left: 0;
        animation: wobble1 var(--uib-speed) infinite ease-in-out;
        animation-delay: calc(var(--uib-speed) * -0.3);
      }

      .three-body__dot:nth-child(2) {
        bottom: 5%;
        right: 0;
        transform: rotate(-60deg);
        transform-origin: 50% 85%;
      }

      .three-body__dot:nth-child(2)::after {
        bottom: 0;
        left: 0;
        animation: wobble1 var(--uib-speed) infinite
          calc(var(--uib-speed) * -0.15) ease-in-out;
      }

      .three-body__dot:nth-child(3) {
        bottom: -5%;
        left: 0;
        transform: translateX(116.666%);
      }

      .three-body__dot:nth-child(3)::after {
        top: 0;
        left: 0;
        animation: wobble2 var(--uib-speed) infinite ease-in-out;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes wobble1 {
        0%,
        100% {
          transform: translateY(0%) scale(1);
          opacity: 1;
        }
        50% {
          transform: translateY(-66%) scale(0.65);
          opacity: 0.8;
        }
      }

      @keyframes wobble2 {
        0%,
        100% {
          transform: translateY(0%) scale(1);
          opacity: 1;
        }
        50% {
          transform: translateY(66%) scale(0.65);
          opacity: 0.8;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    `;
  }
}
