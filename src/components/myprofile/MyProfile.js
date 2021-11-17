/** @format */

import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.mission);
  console.log(missions);
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h3>My Missions</h3>
          {/* {missions.filter((item) => (
          <p>{item.reserved}</p>
        ))} */}
        </Col>
        <Col xs={12} md={6}>
          <h3>My Rockets</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default MyProfile;
