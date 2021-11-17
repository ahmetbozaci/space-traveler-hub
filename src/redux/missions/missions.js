/** @format */

const LOAD_MISSIONS = 'spaceTravelerHub/missions/LOAD_MISSIONS';
const JOIN_LEAVE_MISSION = 'spaceTravelerHub/missions/JOIN_LEAVE_MISSION';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        } if (mission.mission_id === action.payload && mission.reserved) {
          return { ...mission, reserved: false };
        }
        return { ...mission, reserved: true };
      });
      return newState;
    }
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

export const joinLeaveMission = (id) => ({
  type: JOIN_LEAVE_MISSION,
  payload: id,
});

export default reducer;
