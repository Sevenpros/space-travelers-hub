import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/rockets.css';
import RocketCard from './RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  return (
    <div className="rockets-list-container">
      {rockets.map((rocket) => (
        <RocketCard
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </div>
  );
};

export default Rockets;
