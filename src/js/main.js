/* cont $ = require('jquery'); */
require('../css/main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Edition from './pages/Edition';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const app = document.getElementById("app");
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Edition} />
  </Router>, 
  app);

$('.chips').material_chip({
  placeholder: '+Tag',
  secondaryPlaceholder: '+Tag'
});