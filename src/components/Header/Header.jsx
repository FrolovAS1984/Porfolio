import '../../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'clicked' : ''}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? 'clicked' : ''}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => isActive ? 'clicked' : ''}
      >
        Projects
      </NavLink>
    </nav>
  );
}

export default Header;