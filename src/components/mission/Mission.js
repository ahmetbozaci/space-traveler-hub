import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Table, Button, Badge,
} from 'react-bootstrap';
import { joinLeaveMission } from '../../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  const handleClick = (e) => {
    const { id } = e.target.parentNode.parentNode;
    dispatch(joinLeaveMission(id));
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((value) => (
            <tr key={value.mission_id} id={value.mission_id}>
              <td>{value.mission_name}</td>
              <td>{value.description}</td>
              <td className="align-values-center">
                {value.reserved ? (
                  <Badge bg="info">Active Member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                )}
              </td>
              <td>
                {value.reserved ? (
                  <Button variant="outline-danger" onClick={handleClick}>
                    Leave Mission
                  </Button>
                ) : (
                  <Button variant="outline-secondary" onClick={handleClick}>
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Mission;
