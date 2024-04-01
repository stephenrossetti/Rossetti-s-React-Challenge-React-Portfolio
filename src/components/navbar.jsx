// Bringing in the required import from 'react-router-dom' //
// Update to NavLink to add the active functionality for active webpage //
import { NavLink } from 'react-router-dom';
import Navbar from './nav';

export default function Nav() {
  // The Navbar UI component will render each of the NavLink elements in the links prop //
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link text-light" activeclassname="active" exact="true" to="/">
          Home
        </NavLink>,
        <NavLink key={2} className="nav-link text-light" activeclassname="active" to="/about">
          About Me
        </NavLink>,
        <NavLink key={3} className="nav-link text-light" activeclassname="active" to="/portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={4} className="nav-link text-light" activeclassname="active" to="/contact">
          Contact
        </NavLink>,
        <NavLink key={5} className="nav-link text-light" activeclassname="active" to="/resume">
          Resume
        </NavLink>,
      ]}
    />
  );
}