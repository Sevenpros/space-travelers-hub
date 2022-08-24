/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { getMission } from './redux/mission.js';
import App from './App';
import './styles/index.css';
import { fetchRockets } from './redux/rockets.js';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(fetchRockets());
store.dispatch(getMission());

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
