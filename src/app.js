import '@babel/polyfill'; // keep at top for redux-saga generator support
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import App from 'containers/App';

import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install({
    onUpdateReady: () => {
      OfflinePluginRuntime.applyUpdate();
    },
  });
}
