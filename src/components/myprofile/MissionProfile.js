import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.mission);
  const newArray = missions.filter((mission) => mission.reserved);
  return (
    <div>
      <h3>My Missions</h3>
      <ListGroup>
        {newArray.map((mission) => (
          <ListGroup.Item key={mission.mission_id} className="pb-4">
            {mission.mission_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MissionProfile;
