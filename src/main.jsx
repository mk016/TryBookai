import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Auth0Provider
    domain="dev-84fpjbm6ffpt8wdy.us.auth0.com"
    clientId="XIyL07xIQHnWI6RnaEHkXgZ6XTYK9hpw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />

  </Auth0Provider>
  </BrowserRouter>
  </StrictMode>,
)
