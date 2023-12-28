import './style.css'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const element = document.querySelector<HTMLDivElement>('#app')

if (element !== null) {
  element.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Demand Side Buddy</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="version">v${import.meta.env.APP_VERSION}</div>
  </div>
`
}

setupCounter(document.querySelector<HTMLButtonElement>('#counter'))
