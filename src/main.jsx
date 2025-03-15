/**
 * Application Entry Point
 * 
 * This is the main entry point for the React application.
 * It renders the App component into the DOM.
 * 
 * @author Haian Ibrahim
 * @github https://github.com/hki98
 * @linkedin https://linkedin.com/in/haian-k-ibrahim
 * @email contact@haian.me
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create root and render the App component
// Note: StrictMode is not used to avoid double rendering in development
createRoot(document.getElementById('root')).render(
  <App />
)
