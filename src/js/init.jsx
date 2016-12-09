import 'babel-polyfill';
import Application from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
require('../sass/app.scss');

injectTapEventPlugin();

ReactDOM.render(
  <Application/>,
  document.getElementById('app')
);

$(document).ready(function() {

});

$(window).scroll(function() {

});
