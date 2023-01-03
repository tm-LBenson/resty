/** @format */

import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

function App() {
  const [state, setData] = useState({
    data: null,
    requestParams: {},
  });

  const callApi = async (requestParams) => {
    const results = requestParams.url
      ? await axios.get(requestParams.url)
      : null;

    if (results.status === 200)
      setData({
        data: results.data,
        requestParams,
      });
  };

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} />
      <Footer />
    </>
  );
}

export default App;
