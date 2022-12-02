import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { countReducer } from './store/reducer/count.reducer';
import { Provider } from 'react-redux';
/*
1. Create a reducer
2. createStore and pass reducer inside it
3. Wrap <Provider> component around <App> component
4. Pass the store to <Provider store={store}> 
*/

const store = createStore(countReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
