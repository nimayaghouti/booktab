import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

import './scss/costume.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/vazirmatn/Vazirmatn-font-face.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
