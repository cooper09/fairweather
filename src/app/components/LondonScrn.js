import React from "react";
import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";

export class LondonScrn extends React.Component {

        constructor() {
              super()
              this.state = { 
                  data: []
            }
          }
        
          componentDidMount() {
              }
      
          render() {

              if ( this.props.visible != true ) {
                  console.log("London Screen is off");
               return false;
             }

            console.log("London props data: ", this.props.data );
            var location = this.props.data.city.name;
            var weather = this.props.data.list;
            
            let num = 0;
            let dataArr = [];
            
            for (var i = 0 ; i < 5 ;++i ) {
                var infoObj = {};
                infoObj.time = convertDate(weather[i].dt_txt);
                infoObj.temp =  convertTemp (weather[i].main.temp);
                infoObj.low =  convertTemp (weather[i].main.temp_min);
                infoObj.high =  convertTemp (weather[i].main.temp_max);
                infoObj.forecast = weather[0].weather[0].description;
                console.log("Our Info", infoObj );
                dataArr.push(infoObj);
            }
 
             console.log("Dubai Weather report array: ", dataArr  );

             var time = convertDate(weather[0].dt_txt);
             
              return (
                  <div className="center option animated fadeIn subScrn">
                      <h3 className="fontStyle">Rainy London</h3>
                      
                      Five Day Forcast for  {location}
                        <p></p>
                        {time}
                        <p></p>
                        {
                             dataArr.map(function(resultArr, num) {
                                    ++num;
                                    return  <div key={num} >
                                                <span className= "infoBox">
                                                Current Temp: {resultArr.temp}<br/>
                                                High Temp: {resultArr.high}<br/>
                                                Low Temp: {resultArr.low}<br/>
                                                Forecast: {resultArr.forecast}<br/>
                                                </span>
                                            </div>
                                }) 
                        }
                        

                  </div>
              )//end return
      
              function handleClick (){
               
              }//end handleItemClick
    
      
          }//end render
      
      }//end Component
	

	