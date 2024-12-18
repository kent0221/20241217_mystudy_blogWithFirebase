/**
 * App.jsx
 */
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import './App.css'
import { Router } from './router/Router'
import { LoginProvider } from './provider/LoginProvider'

function App() {

  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <CssBaseline/>
            <Router/>
        </BrowserRouter>
      </LoginProvider>
    </>
  )
}

export default App
