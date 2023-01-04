/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders the expected output', () => {
    render(<Header />);

    // Assert that the component renders the expected output
    expect(screen.getByTestId('header')).toHaveClass('header');
    expect(screen.getByTestId('header')).toHaveTextContent('RESTy');
  });
});
