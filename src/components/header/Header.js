/** @format */

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import planet from '../../planet.png';

const Header = () => (
  <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={planet}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Space Travelers Hub
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/rockets">
            Rockets
          </Nav.Link>
          <Nav.Link as={Link} to="/missions">
            Missions
          </Nav.Link>
          <Nav.Link as={Link} to="/my-profile">
            My Profile
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default Header;
