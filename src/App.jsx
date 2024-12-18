import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './router/Router'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <>
      <BrowserRouter>
        <CssBaseline/>
          <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
