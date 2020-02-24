import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/css/index.css';
import App from './components/App';
import {staticData} from './staticData.js';



ReactDOM.render(<App  staticData = {staticData} />, 
  document.getElementById('root'));

