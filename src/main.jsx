import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const initialLang = window.location.pathname.startsWith('/pt') ? 'pt' : 'es'
const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App initialLang={initialLang} />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
