/* eslint-disable camelcase */
import { useSelector } from 'react-redux';

const RocketProfile = () => {
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
                <div key={id}>
                  <h5 className="my-3 border-bottom pb-3 px-3">{rocket_name}</h5>
                </div>
              );
            })
        }
    </div>
  );
};

export default RocketProfile;
