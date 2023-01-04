/** @format */
import JsonFormatter from 'react-json-formatter';

const jsonStyle = {
  propertyStyle: { color: 'red' },
  stringStyle: { color: 'green' },
  numberStyle: { color: 'darkorange' },
};

function Results({ data }) {
  console.log(JSON.stringify(data));
  const results = data ? (
    <JsonFormatter
      json={JSON.stringify(data)}
      tabWith={4}
      jsonStyle={jsonStyle}
    />
  ) : null;

  return (
    <section data-testid="results-element">
      <pre>{results}</pre>
    </section>
  );
}

export default Results;
