import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";
export {getDataArray};
    
function getDataArray (arr) {
    console.log("getDataArray: ", arr );
    var infoArr = [];
    for (var i = 0 ; i < 5 ;++i ) {
      var infoObj = {};
      infoObj.time = convertDate(arr[i].dt_txt);
      infoObj.temp =  convertTemp (arr[i].main.temp);
      infoObj.low =  convertTemp (arr[i].main.temp_min);
      infoObj.high =  convertTemp (arr[i].main.temp_max);
      infoObj.forecast = arr[i].weather[0].description;
      infoArr.push(infoObj);
  }
  return infoArr;
}