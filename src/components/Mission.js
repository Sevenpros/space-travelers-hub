import React from 'react';
import { useSelector } from 'react-redux';
import MissionCard from './missionCard';

const Mission = () => {
  const missions = useSelector((state) => state.missionReducer);
  return (
    <>
      {missions.map((mission) => {
        const { description, name, id } = mission;
        return (
          <MissionCard
            key={id}
            description={description}
            name={name}
          />
        );
      })}
    </>
  );
};

export default Mission;
