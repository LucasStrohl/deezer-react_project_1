import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.background_theme};
    color: ${props => props.theme.color};
  }
`

export default GlobalStyle
