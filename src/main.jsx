import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router'
import { AuthProvider } from './Backend/AuthContext.jsx'
// import { ThemeContext } from './Frontend/Context/ThemeModes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </AuthProvider>
  </StrictMode>,
)
