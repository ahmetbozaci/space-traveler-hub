/** @format */

const LOAD_MISSIONS = 'spaceTravelerHub/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'spaceTravelerHub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelerHub/missions/LEAVE_MISSION';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
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

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});
export default reducer;
