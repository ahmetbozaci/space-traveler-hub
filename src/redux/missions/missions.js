const LOAD_MISSIONS = 'spaceTravelerHub/missions/LOAD_MISSIONS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export const loadMissions = (apiState) => ({
  type: LOAD_MISSIONS,
  payload: apiState,
});

export default reducer;
