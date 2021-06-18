import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MainPage/MainPage';
import { Provider } from 'react-redux';

import store from './tools/store';

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
 
  document.getElementById('root')
);