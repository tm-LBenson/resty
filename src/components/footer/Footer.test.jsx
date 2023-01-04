/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('renders the expected output', () => {
    render(<Footer />);

    // Assert that the component renders the expected output
    expect(screen.getByTestId('footer')).toHaveTextContent('© 2018');
  });
});
