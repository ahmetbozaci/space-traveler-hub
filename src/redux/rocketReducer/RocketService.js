const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketData = async () => {
  const resp = await fetch(baseUrl, {
    method: 'GET',
  });
  const data = await resp.json();
  return data;
};

export default fetchRocketData;
