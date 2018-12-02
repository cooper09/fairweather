import React from "react";
import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";
import { getDataArray } from "../utils/getDataArray";

export class LocalScrn extends React.Component {
        constructor() {
              super()
              this.state = { 
                localData: []
            }
          }//end constructor
        
          componentDidMount() {
              }
      
          render() {
            console.log("Local Screen JSON data: ", this.props.localData );

              if ( this.props.visible != true ) {
                  console.log("LocalScreen is off");
               return false;
             }
            
             let location = this.props.localData.city.name;
             let weather = this.props.localData.list;
                    
             let num = 0;
             let dataArr = [];

             dataArr = getDataArray(weather);
             
            const time = convertDate(weather[0].dt_txt);

            console.log("Local - little pod thingy: ", weather[0].weather[0].icon );

              return (
                  <div className="center option animated fadeIn mainScrn">
                    <button onClick={this.props.close} className="right">Done</button>
                      <h3 className="fontStyle"> Local Juice</h3>

                      Five Day Forcast for  {location}
                        <p></p>
                        {time}
                        <p></p>

                    {
                             dataArr.map(function(resultArr, num) {
                                    ++num;
                                    return  <div key={num} >
                                                <span className= "infoBox">
                                                Day {num}<br/>
                                                <img src={resultArr.icon} /> <br/>
                                                Temp: {resultArr.temp}<br/>
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
	

	