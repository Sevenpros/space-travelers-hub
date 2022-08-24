import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCard from './missionCard';
import { getMission } from '../redux/mission';

const Mission = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMission());
    }
  }, []);
  return (
    <>
      {missions.map((mission) => {
        const {
          description, name, id, reserved,
        } = mission;
        return (
          <MissionCard
            key={id}
            description={description}
            name={name}
            mission={mission}
            reserved={reserved}
          />
        );
      })}
    </>
  );
};

export default Mission;
