import axios from 'axios';

const DUBAI_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Dubai,ae&APPID=b0dc9601e28c24ab8329f0055b9b5a2b';
export {getDubaiData};

function getDubaiData() {
    console.log('getDubaiData: ');
    const url = `${DUBAI_URL}` ;
    return axios.get(url).then(response => response.data);
  }
