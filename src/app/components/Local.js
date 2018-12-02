import React from "react";
import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";
import { getDataArray } from "../utils/getDataArray";

export class LocalScrn extends React.Component {
   // class ScreenOne extends Component {
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

              return (
                  <div className="center option animated fadeIn mainScrn">
                      <h3 className="fontStyle"> Local Juice</h3><button onClick={this.props.close} className="right">Done</button>

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
	

	