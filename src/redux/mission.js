import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';
const MISSION_URL = BASE_URL;
const GET_MISSION = 'GET_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

function myData(data) {
  let newArr = [];
  data.forEach((mission) => {
    const obj = {};
    obj.id = mission.mission_id;
    obj.name = mission.mission_name;
    obj.description = mission.description;
    newArr = [...newArr, obj];
  });
  return newArr;
}
const initialState = [];

const fetchMissionApiAction = (missions) => ({
  type: GET_MISSION,
  payload: missions,
});

export const joiningMissionAction = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leavingMissionAction = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const getMissions = () => async (dispatch) => {
  const response = await axios.get(MISSION_URL);
  console.log(response);
  const newData = await myData(response);
  dispatch(fetchMissionApiAction(newData));
};

export const getMission2 = createAsyncThunk(
  GET_MISSION,
  async () => {
    const response = await axios.get(MISSION_URL);
    console.log(response.data);
    return myData(response.data);
  },
);
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MISSION/fulfilled':
      console.log(action.payload);
      return [...action.payload];
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionReducer;
