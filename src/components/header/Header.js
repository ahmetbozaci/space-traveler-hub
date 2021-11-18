/* eslint-disable no-unused-vars */
/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

import {
  Navbar, Nav, Container, Offcanvas, NavLink,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import planet from '../../planet.png';

const Header = () => (
  <Navbar expand="sm" className="p-3 my-3 mx-5 border-bottom border-2">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src={planet}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        Space Travelers Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Rockets
          </Nav.Link>
          <NavLink as={Link} to="/missions">
            Missions
          </NavLink>
          <NavLink as={Link} to="/my-profile">
            My Profile
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
  </Navbar>
);

export default Header;
