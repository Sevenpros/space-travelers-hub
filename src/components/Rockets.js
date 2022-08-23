import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/rockets.css';
import RocketCard from './RocketCard';
import { fetchRockets } from '../redux/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
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
