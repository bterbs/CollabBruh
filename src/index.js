import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'

import App from './components/App'

console.log('==============>running index.js!!')

//tell React to render HTML in the DOM
ReactDOM.render(
  <div>
    <App />
  </div>
, document.querySelector('.container'))
