import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle'


// Define Theme Options
const theme = {
  color: {
    bg: '#0c0f26',
    light: '#171934',
    yellow: '#faca31',
    link: '#7678fb'
  },
  transition: 'all .3s linear'
}



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="wrapperr">
        Movie Finder Application
      </div>
    </ThemeProvider>
  )
}

export default App;
