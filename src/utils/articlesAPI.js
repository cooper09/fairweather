import axios from 'axios';

//const userID = '00';
const BASE_URL = 'http://ai-writer.com/mpnt_json_endpoint.php?list_queries=1&filter=';

export {getArticleData};

function getArticleData(userId) {
  console.log('getArticleData: ', userId.userId);
  const url = `${BASE_URL}${userId.userId}` ;
  return axios.get(url).then(response => response.data);
}

