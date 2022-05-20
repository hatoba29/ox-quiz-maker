import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from '@/App'
import '@/assets/main.css'
import '@/assets/normalize.css'

const container = document.getElementById('root') as HTMLElement
createRoot(container).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
)
