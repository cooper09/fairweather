import React from "react";

export class LocalScrn extends React.Component {
   // class ScreenOne extends Component {
        constructor() {
              super()
              this.state = { articles: []
            }
          }
        
          componentDidMount() {
              console.log("ScreenOne - Compoonent mounted - do we have a userid: ", this.props.userId );
               // this.getArticleData(this.props.userId);
              }
      
          render() {

              if ( this.props.visible != true ) {
                  console.log("LocalScreen is off");
               return false;
             }
    /*         
             if (this.props.screen === "Close Screen" ) {
                 return false;
             }
    */
                
              return (
                  <div className="center option animated fadeIn mainScrn">
                      <h3 className="fontStyle"> Local Juice</h3><button className="homeBtn"  onClick={()=> console.log("Batter up!")}>Home</button>
                      Hello There...
                      
                  </div>
              )//end return
      
              function handleClick (){
               
              }//end handleItemClick
    
      
          }//end render
      
      }//end Component
	

	