import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'containers/App/Theme';

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
  it('does not have console errors', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent({ title: 'Hello World' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('loads and displays greeting', async () => {
    const title = 'Test Message';
    renderComponent({ title });
    expect(screen.getByRole('banner')).toHaveTextContent(title);
  });
});
