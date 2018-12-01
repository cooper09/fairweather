import axios from 'axios';

const LONDON_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=b0dc9601e28c24ab8329f0055b9b5a2b';
export {getLondonData};

function getLondonData() {
  console.log('getLondonData: ');
  const url = `${LONDON_URL}` ;
  return axios.get(url).then(response => response.data);
}
