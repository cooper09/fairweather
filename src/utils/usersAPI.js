import axios from 'axios';

const BASE_URL = 'https://mpoint-users.herokuapp.com';

export {getUserData};

function getUserData() {
  console.log('getUserData...');
  const url = `${BASE_URL}/users`;
  return axios.get(url).then(response => response.data);
}

