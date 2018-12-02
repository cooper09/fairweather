import React from "react";
import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";
import { getDataArray } from "../utils/getDataArray";

export class DubaiScrn extends React.Component {

        constructor() {
              super()
              this.state = { articles: []
            }
          }
        
          componentDidMount() {
              }
      
          render() {

              if ( this.props.visible != true ) {
                  console.log("Dubai Screen is off");
               return false;
             }

             let location = this.props.data.city.name;
             let weather = this.props.data.list;

             let num = 0;
             let dataArr = [];

             dataArr = getDataArray(weather);
             
            let time = convertDate(weather[0].dt_txt);

              return (
                  <div className="center option animated fadeIn subScrn">
                      <h3 className="fontStyle"> Desert Dubai</h3>


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
	

	