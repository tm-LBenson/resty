/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from './index';

describe('Results', () => {
  it('renders the expected output based on the data prop', () => {
    const data = {
      name: 'John',
      age: 30,
      city: 'New York',
    };
    render(<Results data={data} />);

    const element = screen.getByTestId('results-element');
    expect(element).toHaveTextContent('John');
  });
});
