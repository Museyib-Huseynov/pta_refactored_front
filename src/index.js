import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { InputProvider } from './context/input_context'
import { GlobalUserProvider } from './context/global_user_context'
import { GlobalProvider } from './context/global_context'

ReactDOM.render(
  <React.StrictMode>
    <GlobalUserProvider>
      <InputProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </InputProvider>
    </GlobalUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
