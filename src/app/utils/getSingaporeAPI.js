import axios from 'axios';

const SINGAPORE_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Singapore,my&APPID=b0dc9601e28c24ab8329f0055b9b5a2b';
export {getSingaporeData};

  function getSingaporeData() {
    console.log('getSingaporeData: ');
    const url = `${SINGAPORE_URL}` ;
    return axios.get(url).then(response => response.data);
  }
