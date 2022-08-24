import PropTypes from 'prop-types';
import { useState } from 'react';
import { joiningMissionAction, leavingMissionAction } from '../Redux/mission';

const MissionCard = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th style={{ minWidth: '170px' }}>
        <p>{mission.name}</p>
      </th>
      <td>{mission.description}</td>
      <td>
        {mission.reserved
          ? (
            <p
              style={{ minWidth: '130px', marginTop: '40px' }}
              className="border bg-info text-light text-center"
            >
              ACTIVE MEMBER
            </p>
          ) : (
            <p
              style={{ minWidth: '130px', marginTop: '40px' }}
              className="border bg-secondary text-light text-center"
            >
              NOT A MEMBER
            </p>
          )}
      </td>
      <td>
        {!mission.reserved
          ? (
            <button
              onClick={() => dispatch(joiningMissionAction(mission.id))}
              type="button"
              style={{ minWidth: '120px', marginTop: '40%' }}
              className="border border-success"
            >
              Join Mission
            </button>
          ) : (
            <button
              onClick={() => dispatch(leavingMissionAction(mission.id))}
              type="button"
              style={{ minWidth: '120px', marginTop: '40%' }}
              className="border border-danger text-danger"
            >
              Leave Mission
            </button>
          )}
      </td>
    </tr>
  );
};
export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};
