/** @format */

import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.mission);
  console.log(missions);
  return (
    <Container className="d-flex justify-content-around">
      <div>
        <h3>My Missions</h3>
        {/* {missions.filter((item) => (
          item.reserved ? <p>item.mission_name</p> : <p>nothing</p>
        ))} */}
      </div>
      <div className="">
        <h3>My Rockets</h3>
      </div>
    </Container>
  );
};
export default MyProfile;
