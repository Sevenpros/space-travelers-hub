import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './mission';
import rocketReducers from './rockets';

const store = configureStore({
  reducer: {
    rocketReducers,
    missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
