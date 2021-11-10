import React from 'react'
import './App.css'
import Routes from './config/routes'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './config/globalStyle'

function App() {
  const theme = useSelector(state => state.theme)
  return (
    <div className='App'>
      
      <ThemeProvider theme={theme.value}>
        <GlobalStyle />
        <Routes></Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
