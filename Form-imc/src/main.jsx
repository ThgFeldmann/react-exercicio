import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // bootstrap css import
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // bootstrap js import
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
