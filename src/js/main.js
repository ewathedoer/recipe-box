/* cont $ = require('jquery'); */
require('../css/main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Edition from './pages/Edition';

const app = document.getElementById("app");
ReactDOM.render(<Edition />, app);

$('.chips').material_chip({
  placeholder: '+Tag',
  secondaryPlaceholder: '+Tag'
});