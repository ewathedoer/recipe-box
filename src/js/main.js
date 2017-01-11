/* cont $ = require('jquery'); */
require('../css/main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const app = document.getElementById("app");
ReactDOM.render(<Home/>, app);

$('.chips').material_chip({
  placeholder: '+Tag',
  secondaryPlaceholder: '+Tag'
});