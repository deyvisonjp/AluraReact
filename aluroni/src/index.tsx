import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Router from './routes';

//Antes do ReactDOM - JAVASCRIPT
// const conponenteAtual = window.location.pathname === '/' 
//     ? <Home /> : <Cardapio />;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);