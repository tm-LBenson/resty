/** @format */

'use strict';
function reducer(state = { apiData: [] }, action) {
  switch (action.type) {
    case 'ADD':
      if (!state)
        return {
          apiData: [
            { name: new Date().toLocaleString(), payload: action.payload },
          ],
        };
      return {
        apiData: [
          ...state.apiData,
          { name: new Date().toLocaleString(), payload: action.payload },
        ],
      };
    case 'REMOVE':
      return {
        ...state,
        apiData: state.apiData.filter(
          (call) => call.name !== action.payload.name,
        ),
      };
    default:
      return state;
  }
}

module.exports = reducer;
