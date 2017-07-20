import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import mainReducer from './reducers/'
import App from './App';
import store from './store';

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);
