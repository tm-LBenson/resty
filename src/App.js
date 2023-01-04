/** @format */

import React, { useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import fetchApi from './fetchApi';

function App() {
  const [state, setData] = useState({
    data: null,
    requestParams: {},
  });

  const callApi = async (requestParams) => {
    try {
      const results = requestParams.url
        ? await fetchApi(requestParams.url)
        : null;
      console.log(results, 'fetch');
      setData({
        data: results,
        requestParams,
      });
    } catch (e) {
      console.log(e);
      setData({
        data: 'Loading',
        requestParams,
      });
    }
  };

  return (
    <>
      <Header data-testid="header" />
      <div data-testid="request-method">
        Request Method: {state.requestParams.method}
      </div>
      <div data-testid="request-url">URL: {state.requestParams.url}</div>
      <Form
        data-testid="form"
        handleApiCall={callApi}
      />
      <Results data={state.data} />
      <Footer data-testid="footer" />
    </>
  );
}

export default App;
