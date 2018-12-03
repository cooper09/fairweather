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
             
            const time = convertDate(weather[0].dt_txt);

              return (
                  <div className="center option animated fadeIn subScrn">
                      <h3 className="fontStyle"> Desert Dubai</h3>
                      <button onClick={()=>window.open("https://www.google.com/flights?lite=0#flt=/m/02_286./m/01f08r.2019-01-07*/m/01f08r./m/02_286.2019-01-23;c:USD;e:1;sd:1;t:f")} className="right">Let's Go!</button>

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
	

	