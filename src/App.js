/** @format */

import React, { useState, useEffect, useReducer } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import fetchApi from './fetchApi';
import History from './components/History/History';
import reducer from './reducer';

function App() {
  const [params, setParams] = useState({});
  const [data, setData] = useState({ apiData: [] });
  const [state, dispatch] = useReducer(reducer, data);
  useEffect(() => {
    const callApi = async (requestParams) => {
      try {
        setData('Loading...');
        const results = requestParams.url
          ? await fetchApi(requestParams.url)
          : null;

        setData({ data: results });
      } catch (e) {
        console.log(e);
      }
    };
    if (params) {
      callApi(params);
    }
  }, [params]);

  const removeCall = (call) => {
    let action = {
      type: 'REMOVE',
      payload: call,
    };
    dispatch(action);
  };

  useEffect(() => {
    const addApiCall = () => {
      let action = {
        type: 'ADD',
        payload: data,
      };
      dispatch(action);
    };

    if (data.data?.results?.length > 0) {
      addApiCall();
    }
  }, [data]);

  return (
    <>
      <Header data-testid="header" />
      <div data-testid="request-method">Request Method: {params?.method}</div>
      <div data-testid="request-url">URL: {params?.url}</div>
      <main>
        <section className="form-area">
          <Form
            data-testid="form"
            setDataApp={setParams}
          />
        </section>
        <section className="data-area">
          <Results
            className="results"
            data={data}
          />
          <History
            className="history"
            history={state}
            removeCall={removeCall}
            showHistory={setData}
          />
        </section>
      </main>
      <Footer data-testid="footer" />
    </>
  );
}

export default App;
