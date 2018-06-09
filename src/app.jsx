// react
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

// offline-plugin
import './app/lib/offline-plugin';

// app component
import Main from './components/Main/Main.jsx';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// fetch & promise polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// react app
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./components/Main/Main.jsx', () => {
    render(Main);
  });
}
