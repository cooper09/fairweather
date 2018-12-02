import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=new+york,us&APPID=b0dc9601e28c24ab8329f0055b9b5a2b';
export {getLocalData};

function getLocalData() {
  console.log('getLocalData: ');
  const url = `${BASE_URL}` ;
  return axios.get(url).then(response => response.data);
}

