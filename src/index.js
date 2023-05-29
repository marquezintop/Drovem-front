import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import StyleReset from './style/StyleReset.jsx'
import GlobalStyle from './style/GlobalStyle.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleReset/>
    <GlobalStyle/>
      <App />
  </React.StrictMode>
);
