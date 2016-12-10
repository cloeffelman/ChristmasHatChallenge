import 'babel-polyfill';
import Application from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import snowObj from './effects/snow';
require('../sass/app.scss');
require('../sass/santa.scss');

injectTapEventPlugin();

ReactDOM.render(
  <Application/>,
  document.getElementById('app')
);

$(document).ready(function() {
  snowObj.init();
});
