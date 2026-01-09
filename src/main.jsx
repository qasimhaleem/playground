import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Base from './components/Base.jsx'
import Grand from './components/Base.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer.jsx'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Footer />
  </StrictMode>
)
