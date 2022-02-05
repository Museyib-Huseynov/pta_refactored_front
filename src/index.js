import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { InputProvider } from './context/input_context'
import { GlobalUserProvider } from './context/global_user_context'

ReactDOM.render(
  <React.StrictMode>
    <GlobalUserProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </GlobalUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
