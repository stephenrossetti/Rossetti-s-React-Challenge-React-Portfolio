// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './nav';

export default function Nav() {
  // The Navbar UI component will render each of the NavLink elements in the links prop
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link text-light" activeClassName="active" exact to="/">
          Home
        </NavLink>,
        <NavLink key={2} className="nav-link text-light" activeClassName="active" to="/about">
          About Me
        </NavLink>,
        <NavLink key={3} className="nav-link text-light" activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={4} className="nav-link text-light" activeClassName="active" to="/contact">
          Contact
        </NavLink>,
        <NavLink key={5} className="nav-link text-light" activeClassName="active" to="/resume">
          Resume
        </NavLink>,
      ]}
    />
  );
}