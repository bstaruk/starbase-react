import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// base styles
require('./styles/app.css');
