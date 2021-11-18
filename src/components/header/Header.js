import {
  Navbar, Nav, Container, Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import planet from '../../planet.png';

const Header = () => (

  <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand>
        <img
          src={planet}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        Space Travelers Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Space Travelers Hub</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link as={Link} to="/">
              Rockets
            </Nav.Link>
            <Nav.Link as={Link} to="/missions">
              Missions
            </Nav.Link>
            <Nav.Link as={Link} to="/my-profile">
              My Profile
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);

export default Header;
