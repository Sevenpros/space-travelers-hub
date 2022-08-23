/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import { getMission2 } from './Redux/mission.js';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(getMission2());

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
