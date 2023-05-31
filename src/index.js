import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');
const root =ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
  );
reportWebVitals();
