import { createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const initialState = {
  rockets: [],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROCKETS':
      return { ...state, rockets: action.payload };
    default: return state;
  }
};

export const fethRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const rockets = await (await fetch(api)).json();
  return rockets;
});

export default rocketReducer;
