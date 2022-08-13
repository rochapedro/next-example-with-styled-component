import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  html, body, __next {
    height: 100%;
  }
`

export default GlobalStyle
