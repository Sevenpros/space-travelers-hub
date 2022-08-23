import '../styles/missions.css';
import Mission from './Mission';

function Missions() {
  return (
    <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <Mission />
      </tbody>
    </table>
  );
}

export default Missions;
