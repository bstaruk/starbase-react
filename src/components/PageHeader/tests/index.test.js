import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@containers/App/Theme';

import PageHeader from '../index';

const renderComponent = ({ title }) =>
  render(
    <BrowserRouter>
      <ThemeProvider>
        <PageHeader title={title} />
      </ThemeProvider>
    </BrowserRouter>,
  );

describe('<PageHeader />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent({ title: 'Hello World' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('Renders personalized greeting', async () => {
    const { getByText } = renderComponent({ title: 'Satoshi' });
    await waitForElement(() => getByText(/Satoshi/i));
  });
});
