import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

//reactrouter
import {HashRouter} from 'react-router-dom'

//redux
import {Provider} from 'react-redux'
import store from './store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
   
    <App />
  
    </Provider>
    </HashRouter>
  </React.StrictMode>
)
