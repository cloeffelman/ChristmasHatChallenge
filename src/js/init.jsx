import 'babel-polyfill'
import Application from './app'
import React from 'react'
import ReactDOM from 'react-dom'
require('../sass/app.scss')
require('../sass/santa.scss')

ReactDOM.render(
  <Application/>,
  document.getElementById('app')
)