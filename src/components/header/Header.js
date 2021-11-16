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
          <Nav.Link>
            <Link to="/rockets"> Rockets </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/missions"> Missions </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/my-profile"> My Profile </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default Header;
