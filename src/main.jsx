import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// Importing our publishable key for Clerk
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//Running check for the key
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}> {/*wrapping app in ClerkProvider*/}
        <App />
      </ClerkProvider>
  </React.StrictMode>,
)
