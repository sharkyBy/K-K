import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/css/index.css';
import App from './components/App';
import {store} from './staticData.js';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <App  staticData = {store.staticData} />
  </BrowserRouter> , 
  document.getElementById('root'));

