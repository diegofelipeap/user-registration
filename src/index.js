import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById('root')); //um componente react fica dessa forma aqui (e sempre com letra maiúscula - App)!
root.render(
  <>
    <App /> <GlobalStyle />
  </>
);
