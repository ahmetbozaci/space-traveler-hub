/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state);
  const missionsArray = Object.entries(missions)[0][1];

  const join = (e) => {
    const { id } = e.target.parentNode.parentNode;
    dispatch(joinMission(id));
  };

  const leave = (e) => {
    const { id } = e.target.parentNode.parentNode;
    dispatch(leaveMission(id));
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
          {missionsArray.map((item) => (
            <tr key={item.mission_id} id={item.mission_id}>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td className="align-items-center">
                {item.reserved ? (
                  <Button variant="info">Active Member</Button>
                ) : (
                  <Button variant="secondary">NOT A MEMBER</Button>
                )}
              </td>
              <td>
                {item.reserved ? (
                  <Button variant="outline-danger" onClick={leave}>
                    Leave Mission
                  </Button>
                ) : (
                  <Button variant="outline-secondary" onClick={join}>
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
