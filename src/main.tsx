import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '@/store'

import App from '@/App'
import '@/assets/main.css'
import '@/assets/normalize.css'

const container = document.getElementById('root') as HTMLElement
createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
