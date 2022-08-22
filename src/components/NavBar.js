/* eslint-disable */
import { NavLink } from 'react-router-dom';
import NavLinkEl from './NavLinkEl';
import planet from '../images/planet.png' 

const NavBar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <header>
        <nav className="nav-container">
          <div className="logo-wrapper">
            <img src={planet} alt="" className="image-logo" />
            <h2>Space Traveler&#39;s Hub</h2>
          </div>
          <div>
            <NavLinkEl
              path={"/"}
              name="Rockets"
            />
            <NavLinkEl
              path={"missions"}
              name="Missions"
            />
            { "|" }
            <NavLinkEl
              path={"profile"}
              name="My Profile"
            />            
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavBar;