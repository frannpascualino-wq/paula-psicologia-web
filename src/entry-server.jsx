import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { doctorData } from './data/doctorData'
import { content } from './data/content'

export function render(lang) {
  return renderToString(
    <StrictMode>
      <App initialLang={lang} />
    </StrictMode>,
  )
}

export { doctorData, content }
