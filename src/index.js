import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import Routes from "./routes"


const root = ReactDOM.createRoot(document.getElementById('root')); //um componente react fica dessa forma aqui (e sempre com letra maiúscula - App)!
root.render(
  <>
    <Routes /> <GlobalStyle />
  </>
);
