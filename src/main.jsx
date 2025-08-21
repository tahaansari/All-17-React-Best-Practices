import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/500.css'; // Optional weights
import '@fontsource/roboto/700.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
