import { Container, Row, Col } from 'react-bootstrap';
import RocketProfile from './RocketProfile';
import MissionProfile from './MissionProfile';

const MyProfile = () => (
  <Container>
    <Row>
      <Col xs={12} md={6}><MissionProfile /></Col>
      <Col xs={12} md={6} className="mt-2">
        <h3 className="m-3">My Rockets</h3>
        <div className="border bg-white shadow">
          <RocketProfile />
        </div>
      </Col>
    </Row>
  </Container>
);
export default MyProfile;
