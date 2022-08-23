import PropTypes from 'prop-types';

const MissionCard = ({ description, name, status }) => (
  <tr>
    <th>
      <p>{name}</p>
    </th>
    <td>{description}</td>
    <td>
      {status
        ? (
          <p
            style={{ minWidth: '120px' }}
          >
            ACTIVE MEMBER
          </p>
        ) : (
          <p
            style={{ minWidth: '120px' }}
          >
            NOT A MEMBER
          </p>
        )}
    </td>
    <td>
      {!status
        ? (
          <button
            // onClick={() => dispatch(joiningMissionAction(mission.id))}
            type="button"
            style={{ minWidth: '100px' }}
          >
            Join Mission
          </button>
        ) : (
          <button
            // onClick={() => dispatch(leavingMissionAction(mission.id))}
            type="button"
            style={{ minWidth: '100px' }}
          >
            Leave Mission
          </button>
        )}
    </td>
  </tr>
);

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
