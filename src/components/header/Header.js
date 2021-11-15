import {
  Navbar, Container, Nav, NavbarBrand,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import planet from '../../planet.png';

const Header = () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand><img src={planet} alt="planet" /></NavbarBrand>
        <Nav>Rocket</Nav>
        <Nav><Link to="/mission">Mission</Link></Nav>
        <Nav>Profile</Nav>
      </Container>
    </Navbar>
  </div>

);

export default Header;
