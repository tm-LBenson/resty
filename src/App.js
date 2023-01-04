/** @format */

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (state.requestParams) {
      callApi(state.requestParams);
    }
  }, [state.requestParams]);

  return (
    <>
      <Header data-testid="header" />
      <div data-testid="request-method">
        Request Method: {state.requestParams.method}
      </div>
      <div data-testid="request-url">URL: {state.requestParams.url}</div>
      <main>
        <Form
          data-testid="form"
          handleApiCall={callApi}
        />
        <Results data={state.data} />
      </main>
      <Footer data-testid="footer" />
    </>
  );
}

export default App;
