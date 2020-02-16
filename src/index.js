import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/css/index.css';
import App from './components/App';
import {state} from './state.js';


ReactDOM.render(<App state = {state}/>, document.getElementById('root'));

