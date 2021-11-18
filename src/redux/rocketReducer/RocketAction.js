import fetchRocketData from './RocketService';

export const RocketConstants = {
  FETCH_ROCKET: 'FETCH_ROCKET',
  RESERVE_ROCKET: 'RESERVE_ROCKET',
};

export const fetchRockets = () => (async (dispatch) => {
  const rockets = await fetchRocketData();
  dispatch({
    type: RocketConstants.FETCH_ROCKET,
    payload: rockets,
  });
});

export const addToReserve = (id) => ({
  type: RocketConstants.RESERVE_ROCKET,
  payload: id,
});
