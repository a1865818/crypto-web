import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}> 
        {/* which means every elements in the app have access to the store variable from provider */}
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
