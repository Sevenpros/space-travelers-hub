import PropTypes from 'prop-types';
import { useState } from 'react';

const MissionCard = ({ description, name }) => {
  const [reserved, setResereved] = useState(false);
  return (
    <tr>
      <th style={{ minWidth: '170px' }}>
        <p>{name}</p>
      </th>
      <td>{description}</td>
      <td>
        {reserved
          ? (
            <p
              style={{ minWidth: '130px' }}
              className="border bg-info text-light"
            >
              ACTIVE MEMBER
            </p>
          ) : (
            <p
              style={{ minWidth: '130px' }}
              className="border bg-secondary text-light"
            >
              NOT A MEMBER
            </p>
          )}
      </td>
      <td>
        {!reserved
          ? (
            <button
              onClick={() => setResereved(true)}
              type="button"
              style={{ minWidth: '120px' }}
              className="border border-success"
            >
              Join Mission
            </button>
          ) : (
            <button
              onClick={() => setResereved(false)}
              type="button"
              style={{ minWidth: '120px' }}
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
};
