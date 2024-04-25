import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { ThemeProvider } from './store/ThemeContext.jsx';
import { CartProvider } from './store/CartContext.jsx';

import './scss/costume.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import '../node_modules/vazirmatn/Vazirmatn-font-face.css';
import '../node_modules/vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
