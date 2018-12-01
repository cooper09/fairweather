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

              if ( this.props.visible != true ) {
                  console.log("Away Screen is off");
               return false;
             }

            var displayObj = {
                  london: this.props.londonData,
                  dubai: this.props.dubaiData,
                  singapore: this.props.singapore
              }
       
              console.log("Our Away Data: ", displayObj );

              return (
                  <div className="center option animated fadeIn mainScrn">
                      <h3 className="fontStyle"> Second Banana</h3><button className="homeBtn"  onClick={()=> console.log("Batter up!")}>Home</button>
                      Lands Far Far Away!
                      <button  onClick={()=> console.log("London up!")}>London</button>
                      <button  onClick={()=> console.log("Dubai up!")}>Dubai</button>
                      <button  onClick={()=> console.log("Singaproe up!")}>Singapore</button>
                  </div>
              )//end return
      
              function handleClick (){
               
              }//end handleItemClick
    
      
          }//end render
      
      }//end Component
	

	