import React from "react";

export class LocalScrn extends React.Component {
   // class ScreenOne extends Component {
        constructor() {
              super()
              this.state = { articles: []
            }
          }
        
          componentDidMount() {
              console.log("LocalScrn - Component mounted - do we have data: ", this.props.localData );
               // this.getArticleData(this.props.userId);
              }
      
          render() {
            console.log("How about now: ", this.props.localData );
              if ( this.props.visible != true ) {
                  console.log("LocalScreen is off");
               return false;
             }
                
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
	

	