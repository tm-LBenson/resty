/** @format */

import { useState } from 'react';
import './form.scss';

function Form({ handleApiCall }) {
  const [method, setMethod] = useState('get');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    await handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            data-testid="form-input"
            name="url"
            type="text"
          />

          <button data-testid="form-button" type="submit">GO!</button>
        </label>
        <label
          onClick={(e) => {
            setMethod(e.target.id);
          }}
          className="methods"
        >
          <span
            className={method === 'get' ? 'selected' : 'not'}
            id="get"
          >
            GET
          </span>
          <span
            className={method === 'post' ? 'selected' : 'not'}
            id="post"
          >
            POST
          </span>
          <span
            className={method === 'put' ? 'selected' : 'not'}
            id="put"
          >
            PUT
          </span>
          <span
            className={method === 'delete' ? 'selected' : 'not'}
            id="delete"
          >
            DELETE
          </span>
        </label>
        <label>
          <textarea/>
        </label>
      </form>
    </>
  );
}

export default Form;
