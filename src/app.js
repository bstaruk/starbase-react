import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';

// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// base styles
require('./styles/app.css');

// react
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => { render(App) })
}
