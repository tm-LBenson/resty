/** @format */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  it('submits the form and calls the handleApiCall function', async () => {
    const handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall} />);

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

    expect(handleApiCall).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://example.com',
    });
  });
});
