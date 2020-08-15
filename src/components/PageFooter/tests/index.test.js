import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@containers/App/ThemeProvider';

import PageFooter from '../index';

describe('<PageFooter />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ThemeProvider>
        <PageFooter>Example Footer</PageFooter>
      </ThemeProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
