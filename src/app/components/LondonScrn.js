import React from "react";
import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";
import { getDataArray } from "../utils/getDataArray";

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

            let location = this.props.data.city.name;
            let weather = this.props.data.list;
            
            let num = 0;
            let dataArr = [];

            dataArr = getDataArray(weather);
            const time = convertDate(weather[0].dt_txt);
             
              return (
                  <div className="center option animated fadeIn subScrn">
                      <h3 className="fontStyle">Rainy London</h3>
                      <button onClick={()=>window.open("https://www.costcotravel.com/Vacation-Packages/Europe/England/London")} className="right">Let's Go!</button>
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
                                                Temp: {resultArr.temp} &#8457;<br/>
                                                High Temp: {resultArr.high} &#8457;<br/>
                                                Low Temp: {resultArr.low} &#8457;<br/>
                                                Forecast: {resultArr.forecast} <br/>
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
	

	