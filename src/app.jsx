// react
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// offline-plugin
import '@lib/offline-plugin';

// app component
import Main from '@components/Main';

import primaryTheme from './theme/primary';
import GlobalStyle from './global-styles';

// react app
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <ThemeProvider theme={primaryTheme}>
          <Main />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('@components/Main/index.js', () => {
    render(Main);
  });
}
