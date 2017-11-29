import 'babel-polyfill'
import App from './components/app/app'
import React from 'react'
import ReactDOM from 'react-dom'
import {initialData} from './assets/data/data'

require('./components/app/app.scss')

ReactDOM.render(
  <App data={initialData}/>,
  document.getElementById('app')
)