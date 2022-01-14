// https://github.com/bradtraversy/feedback-app/tree/main/src
import React from 'react'
import reactDom from 'react-dom'
import './index.css'
import App from './App'
import { StrictMode } from 'react/cjs/react.production.min'

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
