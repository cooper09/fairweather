import React from "react";

export class AwayScrn extends React.Component {

        constructor() {
              super()
              this.state = { articles: []
            }
          }
        
          componentDidMount() {
              //console.log("ScreenOne - Compoonent mounted - do we have a userid: ", this.props.userId );
               // this.getArticleData(this.props.userId);
              }
      
          render() {

            console.log("Away Screen visible: ", this.props.visible );

              if ( this.props.visible != true ) {
                  console.log("Away Screen is off");
               return false;
             }
       
              return (
                  <div className="center option animated fadeIn mainScrn">
                      <h3 className="fontStyle"> Second Banana</h3><button className="homeBtn"  onClick={()=> console.log("Batter up!")}>Home</button>
                      Lands Far Far Away!
                      
                  </div>
              )//end return
      
              function handleClick (){
               
              }//end handleItemClick
    
      
          }//end render
      
      }//end Component
	

	