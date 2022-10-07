import { store } from './redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
