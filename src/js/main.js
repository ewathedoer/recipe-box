/* cont $ = require('jquery'); */
require('../css/main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Edition from './pages/Edition';
import Details from './pages/Details';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const app = document.getElementById("app");
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="edition" component={Edition} />
    <Route path="details" component={Details} />
  </Router>, 
  app);