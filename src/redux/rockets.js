import { createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const initialState = [];

const destructData = (data) => {
  let rockets = [];
  data.forEach((rocket) => {
    const [img] = rocket.flickr_images;
    const obj = {};
    obj.id = rocket.id;
    obj.img = img;
    obj.name = rocket.rocket_name;
    obj.description = rocket.description;
    rockets = [...rockets, obj];
  });
  return rockets;
};
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const res = await (await fetch(api)).json();
  const rockets = destructData(res);
  return rockets;
});

export default rocketReducer;
