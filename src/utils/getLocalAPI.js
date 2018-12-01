import axios from 'axios';

//const userID = '00';
//const BASE_URL = 'http://ai-writer.com/mpnt_json_endpoint.php?list_queries=1&filter=';
const BASE_URL = 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=b0dc9601e28c24ab8329f0055b9b5a2b';
export {getLocalData};

function getLocalData(userId) {
  console.log('getLocalData: ', userId.userId);
  const url = `${BASE_URL}` ;
  return axios.get(url).then(response => response.data);
}

