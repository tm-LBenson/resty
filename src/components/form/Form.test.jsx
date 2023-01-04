/** @format */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  it('submits the form and calls the handleApiCall function', async () => {
    const handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall} />);

    const input = screen.getByTestId('form-input');

    input.value = 'https://pokeapi.co/api/v2/pokemon';
    fireEvent.submit(screen.getByTestId('form-button'), {
      preventDefault: jest.fn(),
      target: {
        url: {
          value: 'https://pokeapi.co/api/v2/pokemon',
        },
      },
    });

    expect(handleApiCall).toHaveBeenCalledWith({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon',
    });
  });
});
