import {
    Routes,
    Route,
  } from 'react-router-dom';
  import Rockets from '../components/Rockets';
  import Missions from '../components/Missions';
  import MyProfile from '../components/MyProfile';
  
  const Router = () => (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  );
  
  export default Router;