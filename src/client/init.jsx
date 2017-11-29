import 'babel-polyfill'
import App from './components/app/app'
import React from 'react'
import ReactDOM from 'react-dom'

require('./components/app/app.scss')

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)