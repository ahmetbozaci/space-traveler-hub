import { RocketConstants } from './RocketAction';

const initialState = {
  rockets: [],
};

const ReducerRocket = (state = initialState, { type, payload }) => {
  if (type === RocketConstants.FETCH_ROCKET) {
    return {
      rockets: [...state.rockets, ...payload],
    };
  }
  if (type === RocketConstants.RESERVE_ROCKET) {
    const newState = state.rockets.map((rocket) => {
      if (rocket.id !== payload) { return rocket; }
      if (rocket.id === payload && rocket.reserved === true) {
        return { ...rocket, reserved: false };
      }
      return { ...rocket, reserved: true };
    });
    return {
      rockets: [...newState],
    };
  }
  return state;
};

export default ReducerRocket;
