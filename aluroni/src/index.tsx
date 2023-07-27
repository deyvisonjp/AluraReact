import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import './index.css';
import Cardapio from './pages/Cardapio';
import { Button } from './pages/Button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Cardapio />
    </div>
  </React.StrictMode>
);
