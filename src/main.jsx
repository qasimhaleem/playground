import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Base from './components/Base.jsx'
import Grand from './components/Base.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Grand />
  </StrictMode>
)
