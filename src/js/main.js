/* cont $ = require('jquery'); */
require('../css/main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Edition from './pages/Edition';
import Details from './pages/Details';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const app = document.getElementById("app");
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="addition" component={Edition} />
      <Route path="edition/:recipe" component={Edition} />
      <Route path="details/:recipe" component={Details} />
    </Route>
  </Router>, 
  app);