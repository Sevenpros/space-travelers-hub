import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getMission } from './redux/mission';
import { fetchRockets } from './redux/rockets';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(getMission());
store.dispatch(fetchRockets());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
