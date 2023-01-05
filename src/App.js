/** @format */

import React, { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import fetchApi from './fetchApi';

function App() {
  const [params, setParams] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    const callApi = async (requestParams) => {
      try {
        const results = requestParams.url
          ? await fetchApi(requestParams.url)
          : null;

        setData({
          data: results,
        });
      } catch (e) {
        console.log(e);
        setData('Loading');
      }
    };
    if (params) {
      callApi(params);
    }
  }, [params]);

  return (
    <>
      <Header data-testid="header" />
      <div data-testid="request-method">Request Method: {params?.method}</div>
      <div data-testid="request-url">URL: {params?.url}</div>
      <main>
        <Form
          data-testid="form"
          setDataApp={setParams}
        />
        <Results data={data} />
      </main>
      <Footer data-testid="footer" />
    </>
  );
}

export default App;
