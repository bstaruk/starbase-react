// react
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

// offline-plugin
import './lib/offline-plugin';

// app component
import Main from './components/Main/Main.jsx';

// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// ordered css imports
require('./lib/fonts/fonts.css');
require('./components/Main/Main.css');

// import all other css
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
