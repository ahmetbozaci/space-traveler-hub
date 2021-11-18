/** @format */

import { loadMissions } from './missions';

const getMissions = async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  dispatch(loadMissions(data));
};

export default getMissions;
