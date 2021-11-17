import { Alert, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.mission);
  const filteredMission = missions.filter((mission) => mission.reserved);
  return (
    <div>
      <h3>My Missions</h3>
      <ListGroup className="mt-2">
        {filteredMission.map((mission) => (
          <ListGroup.Item key={mission.mission_id} className="p-4">
            {mission.mission_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {filteredMission.length === 0 && (
        <Alert variant="danger"><h3>No Missions Joined</h3></Alert>
      )}
    </div>
  );
};

export default MissionProfile;
