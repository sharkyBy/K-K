import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/scss/index.scss';
import '../src/style/scss/media.scss';
import App from './components/App';
import {store} from './staticData.js';
import { BrowserRouter } from 'react-router-dom';





ReactDOM.render( 
  <BrowserRouter>
    <App  {...store} />
  </BrowserRouter> , 
  document.getElementById('root'));

