import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkEl = ({ name, path }) => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <NavLink
      to={path}
      className="nav-link"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {name}
    </NavLink>
  );
};

export default NavLinkEl;

NavLinkEl.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
