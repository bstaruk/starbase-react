import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@containers/App/Theme';

import PageFooter from '../index';

const renderComponent = () =>
  render(
    <ThemeProvider>
      <PageFooter>Example Footer</PageFooter>
    </ThemeProvider>,
  );

describe('<PageFooter />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });
});
