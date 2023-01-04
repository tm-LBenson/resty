/** @format */
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function fetchApi(url = '', data = null, method = 'GET') {
  const response = await fetch(url, {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: data ? JSON.stringify(data) : null,
  });
  return response.json();
}

export default fetchApi;
