import React from 'react'
import reactDom from 'react-dom'
import './index.css'
import App from './App'
import { StrictMode } from 'react/cjs/react.production.min'

reactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
