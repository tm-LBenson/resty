/** @format */

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(ctx.json({ data: 'mocked data' }));
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it('displays the request method and URL when the form is submitted', async () => {
  render(<App />);
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
  expect(screen.getByTestId('request-method')).toHaveTextContent(
    'Request Method',
  );
  expect(screen.getByTestId('request-url')).toHaveTextContent('URL:');

  await screen.findByTestId('results-element');
  expect(screen.getByTestId('results-element')).toBeInTheDocument();
});
