import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from 'containers/App/Theme';

import PageFooter from '../index';

const renderComponent = () =>
  render(
    <ThemeProvider>
      <PageFooter />
    </ThemeProvider>,
  );

describe('<PageFooter />', () => {
  it('does not have console errors', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });
});
