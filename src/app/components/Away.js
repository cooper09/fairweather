import React from "react";
import {LondonScrn} from "./LondonScrn";
import {DubaiScrn} from "./DubaiScrn";
import {SingaporeScrn} from "./SingaporeScrn";

export class AwayScrn extends React.Component {

        constructor() {
              super()
              this.state = { 
                  singapore: true,
                  dubai: false,
                  singapore: false,
                  data: []
            }
          }
        
          componentDidMount() {
              }
      
          render() {

              if ( this.props.visible != true ) {
                  console.log("Away Screen is off");
               return false;
             }

            var displayObj = {
                  london: this.props.londonData,
                  dubai: this.props.dubaiData,
                  singapore: this.props.singaporeData
              }
       
              console.log("Our Away Data: ", displayObj );

              return (
                  <div className="center option animated fadeIn mainScrn">
                      <h3 className="fontStyle">Lands Far Far Away</h3>
                      <button  onClick={()=> this.setState({  london: true, dubai: false, singapore: false })}>London</button>
                      <button  onClick={()=> this.setState({  london: false, dubai: true, singapore: false })}>Dubai</button>
                      <button  onClick={()=> this.setState({  london: false, dubai: false, singapore: true })}>Singapore</button>

                      <LondonScrn visible={this.state.london} data={displayObj.london}/>
                      <DubaiScrn visible={this.state.dubai} data={displayObj.dubai}/>
                      <SingaporeScrn visible={this.state.singapore} data={displayObj.singapore}/>
                  </div>
              )//end return
      
              function handleClick (){
               
              }//end handleItemClick
    
      
          }//end render
      
      }//end Component
	

	