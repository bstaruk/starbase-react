import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Global, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'data/store';
import styles from 'style/globalStyle';
import theme from 'style/theme';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider {...{ store }}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider {...{ theme }}>
            {children}
            <Global {...{ styles }} />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
