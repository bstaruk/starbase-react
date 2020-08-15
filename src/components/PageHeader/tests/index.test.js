import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@containers/App/Theme';

import PageHeader from '../index';

describe('<PageHeader />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ThemeProvider>
        <PageHeader title="Test Page Header" />
      </ThemeProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
