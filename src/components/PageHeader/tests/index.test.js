import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@containers/App/Theme';

import PageHeader from '../index';

describe('<PageHeader />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <BrowserRouter>
        <ThemeProvider>
          <PageHeader title="Satoshi" />
        </ThemeProvider>
      </BrowserRouter>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('renders personalized greeting', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider>
          <PageHeader title="Satoshi" />
        </ThemeProvider>
      </BrowserRouter>,
    );
    await waitForElement(() => getByText(/Satoshi/i));
  });
});
