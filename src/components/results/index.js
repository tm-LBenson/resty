/** @format */
import JsonFormatter from 'react-json-formatter'

const jsonStyle = {
  propertyStyle: { color: 'red' },
  stringStyle: { color: 'green' },
  numberStyle: { color: 'darkorange' }
}

function Results({ data }) {
  console.log(data)
  const results = data ?
   <JsonFormatter json={JSON.stringify(data)} tabWith={4} jsonStyle={jsonStyle} />
  : null
  
  return (
    <section>
       <pre>{results}</pre>
    </section>
  );
}

export default Results;
