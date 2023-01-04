/** @format */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the header, form, and footer components', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('displays the request method and URL when the form is submitted', () => {
    render(<App />);
    const input = screen.getByTestId('form-input');

    input.value = 'https://example.com';

    fireEvent.submit(screen.getByTestId('form-button'), {
      preventDefault: jest.fn(),
      target: {
        url: {
          value: 'https://example.com',
        },
      },
    });
    expect(screen.getByTestId('request-method')).toHaveTextContent(
      'Request Method',
    );
    expect(screen.getByTestId('request-url')).toHaveTextContent('URL:');
  });
});
