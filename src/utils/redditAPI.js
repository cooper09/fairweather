import axios from 'axios';

const userID = '00';
const BASE_URL = 'http://www.reddit.com/r/reactjs.json';

export {getRedditData};

function getRedditData(userId) {
  console.log('Utils - getRedditData: ', userId);
  const url = `${BASE_URL}` ;
  return axios.get(url).then(response => response.data);
}

