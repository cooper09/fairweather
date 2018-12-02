import React from "react";
import { convertTemp } from "../utils/convertTemp";
import { convertDate } from "../utils/convertDate";

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


             console.log("Dubai props data: ", this.props.data );
             var location = this.props.data.city.name;
             var weather = this.props.data.list;
 
             console.log("Dubai Weather report: ", weather[0] );
             var time = convertDate(weather[0].dt_txt);
             var temp =  convertTemp (weather[0].main.temp);
             var low =  convertTemp (weather[0].main.temp_min);
             var high =  convertTemp (weather[0].main.temp_max);
             var forecast = weather[0].weather[0].description;

              return (
                  <div className="center option animated fadeIn subScrn">
                      <h3 className="fontStyle"> Desert Dubai</h3>


                      Five Day Forcast for  {location}
                        <p></p>
                        {time}
                        <p></p>

                    <table>
                      <tbody>
                        <tr>
                           
                        <td>
                        <th>Day One</th>
                                current temp: {temp}&#8457;<br/>
                                high temp: {high} &#8457;<br/>
                                low temp: {low} &#8457;<br/>
                                forecast: {forecast}
                            </td>
                            <td>
                            <th>Day Two</th>
                                current temp: {temp} &#8457;<br/>
                                high temp: {high} &#8457;<br/>
                                low temp: {low} &#8457;<br/>
                                forecast: {forecast}
                            </td>
                            <td>
                            <th>Day Three</th>
                                current temp: {temp}&#8457;<br/>
                                high temp: {high} &#8457;<br/>
                                low temp: {low} &#8457;<br/>
                                forecast: {forecast}
                            </td>
                            <td>
                            <th>Day Four</th>
                                current temp: {temp}&#8457;<br/>
                                high temp: {high} &#8457;<br/>
                                low temp: {low} &#8457;<br/>
                                forecast: {forecast}
                            </td>
                            <td>
                            <th>Day Five</th>
                                current temp: {temp}&#8457;<br/>
                                high temp: {high} &#8457;<br/>
                                low temp: {low} &#8457;<br/>
                                forecast: {forecast}
                            </td>
                        </tr>
                        </tbody>
                    </table>

                  </div>
              )//end return
      
              function handleClick (){
               
              }//end handleItemClick
    
      
          }//end render
      
      }//end Component
	

	