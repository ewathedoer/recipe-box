/* cont $ = require('jquery'); */
require('../css/main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Details from './pages/Details';

const app = document.getElementById("app");
ReactDOM.render(<Details />, app);

$('.chips').material_chip({
  placeholder: '+Tag',
  secondaryPlaceholder: '+Tag'
});