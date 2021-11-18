/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addToReserve } from '../../redux/rocketReducer/RocketAction';

const RocketProfile = () => {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.ReducerRocket);
  const { rockets } = rocket;
  const reservedRockets = rockets.filter((item) => item.reserved === true);
  if (reservedRockets.length === 0) {
    return (
      <h3 className="text-primary p-3">No Reserved Rocket</h3>
    );
  }
  return (
    <div>
      {
            reservedRockets.map((item) => {
              const { id, rocket_name } = item;
              return (
                <div key={id} className="mt-3 border-bottom pb-3 px-3 d-sm-flex justify-content-between align-items-center text-center">
                  <h5>{rocket_name}</h5>
                  <Button variant="primary" size="sm" className="mx-3" onClick={() => dispatch(addToReserve(id))}>
                    Cancel Reservation
                  </Button>
                </div>
              );
            })
        }
    </div>
  );
};

export default RocketProfile;
