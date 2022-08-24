import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/myProfile.css';
import { getMission } from '../redux/mission';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  const rockets = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMission());
    }
  }, []);
  return (
    <div className="my-profile-container">
      <section>
        <h2>My Missions</h2>
        <ul style={{ padding: '0' }} className="list-unstyled">
          {missions.filter((mission) => mission.reserved === true).map((fmission) => (
            <li key={fmission.id} className="border p-3 w-70">
              {fmission.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul style={{ padding: '0' }} className="list-unstyled">
          {rockets.filter((rocket) => rocket.reserved === true).map((frocket) => (
            <li key={frocket.id} className="border p-3 w-70">
              {frocket.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default MyProfile;
