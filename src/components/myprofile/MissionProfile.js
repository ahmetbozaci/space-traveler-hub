/* eslint-disable no-unused-vars */
import { Alert, ListGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';

const MissionProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  const filteredMission = missions.filter((mission) => mission.reserved);

  const handleClick = (e) => {
    dispatch(joinMission(e.target.id));
  };

  return (
    <div>
      <h3>My Missions</h3>
      <ListGroup className="mt-2">
        {filteredMission.map((mission) => (
          <ListGroup.Item key={mission.mission_id} className="p-4 d-flex justify-content-between">
            {mission.mission_name}
            <div>
              <Button onClick={handleClick} id={mission.mission_id} variant="danger">Leave Mission</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {filteredMission.length === 0 && (
        <Alert variant="danger">
          <h3>No Missions Joined</h3>
        </Alert>
      )}
    </div>
  );
};

export default MissionProfile;
