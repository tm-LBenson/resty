/** @format */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  it('submits the form and calls the handleApiCall function', async () => {
    const setDataApp = jest.fn();

    render(<Form setDataApp={setDataApp} />);

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

    expect(setDataApp).toHaveBeenCalledWith({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon',
    });
  });
});
