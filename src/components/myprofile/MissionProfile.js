/** @format */

import { Alert, ListGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { joinLeaveMission } from '../../redux/missions/missions';

const MissionProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  const filteredMission = missions.filter((mission) => mission.reserved);

  const handleClick = (e) => {
    dispatch(joinLeaveMission(e.target.id));
  };

  return (
    <div className="">
      <h3 className="p-3">My Missions</h3>
      <ListGroup className="mt-2">
        {filteredMission.map((mission) => (
          <ListGroup.Item
            key={mission.mission_id}
            className="d-xl-flex justify-content-between p-4 "
          >
            <div className="my-1 p-1 ms-4">
              {mission.mission_name}
            </div>
            <div className="text-center">
              <Button
                variant="info"
                className="mx-2"
                onClick={() => {
                  window.open(mission.wikipedia);
                }}
              >
                Read More
              </Button>
              <Button
                onClick={handleClick}
                id={mission.mission_id}
                variant="danger"
              >
                Leave Mission
              </Button>
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
