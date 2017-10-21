import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

// promise & fetch polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// baseline styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// component styles
require.context('./components/', true, /\.css$/);

// react app
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App);
  });
}
