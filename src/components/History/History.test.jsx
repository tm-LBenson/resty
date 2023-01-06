/** @format */

import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import History from './History';

afterEach(cleanup);

describe('History component', () => {
  it('renders correctly', () => {
    render(
      <History
        history={{
          apiData: [
            { name: '1/5/2023, 8:44:00 PM', payload: {} },
            { name: '1/6/2023, 8:44:00 PM', payload: {} },
          ],
        }}
      />,
    );

    expect(screen.getByTestId('history')).toBeInTheDocument();
    expect(screen.getByTestId('history')).toHaveTextContent('1/5/2023, 8:44:00 PM');
    expect(screen.getByTestId('history')).toHaveTextContent('1/6/2023, 8:44:00 PM');
  });
});
