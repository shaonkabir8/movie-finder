import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle'
import Header from './Header';

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
      <BrowserRouter>
        <GlobalStyle />
        <div className="wrapperr">
          <Header />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
