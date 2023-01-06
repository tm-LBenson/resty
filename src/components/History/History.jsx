/** @format */

import React from 'react';
import './History.scss';

function History({ history, showHistory }) {
  const historyTimes = Object.keys(history).length
    ? history.apiData.map((item, index) => (
        <li
          onClick={() => {
            showHistory(item);
          }}
          className="api-item"
          key={item.name + index}
        >
          {item.name}
        </li>
      ))
    : null;
  return (
    <section
      data-testid="history"
      className="history-section"
    >
      <ul className="api-ul">{historyTimes}</ul>
    </section>
  );
}

export default History;
