import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Div from './div.jsx'
import Footer from './footer.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Footer />
    </StrictMode>
  </BrowserRouter>
)
