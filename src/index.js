import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/css/index.css';
import App from './components/App';
import {store} from './staticData.js';



ReactDOM.render(<App  staticData = {store.staticData} />, 
  document.getElementById('root'));

