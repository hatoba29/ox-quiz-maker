import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/assets/normalize.css'

const container = document.getElementById('root') as HTMLElement
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
