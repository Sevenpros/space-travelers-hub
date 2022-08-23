import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './mission';
import rocketReducer from './rockets';

const store = configureStore({
  reducer: {
    rocketReducer,
    missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
