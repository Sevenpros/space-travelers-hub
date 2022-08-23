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
