import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import NavWrapper from './components/NavWrapper';

// import './App.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  html {
    font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path='/' component={NavWrapper} />
    </div>
  );
}

export default App;
