/** @format */

import React from 'react';
import './History.scss';


function History({ history }) {
  const historyTimes = Object.keys(history).length
    ? history.apiData.map((item, index) => (
        <li
          className="api-item"
          key={item.name + index}
        >
          {item.name}
        </li>
      ))
    : null;
  return (
    <section className='history-section'>
      <ul className="api-ul">{historyTimes}</ul>
    </section>
  );
}

export default History;
