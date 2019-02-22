import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myUsers from './markdown/config.json';
import myData from './markdown/ranking.json';

// New component class starts here:
class App extends Component{
    constructor(props){
        super(props);
        this.state = { rankList:[],userList:[],lastUpdate:null }
        
    }

    componentWillMount() {
    this.setState({ 
          userList: myUsers.users_dict,
          lastUpdate: myData.last_update_ts,
          rankList: myData.scoreboard
            //myData.users_dict//,
          //scoreboard: myData.scoreboard,
          //inProgres_scoreboard: myData.in_progress.scoreboard
        });
    
  }
    
  render(){
      //console.log("list");
      console.log(this.state.rankList);

    return (<div className="content">
            {Object.keys(this.state.rankList).map((key) => (
            <p key={key}>{this.state.rankList[key]}</p>
        ))}
    </div>);  
  }
}

//ReactDOM.render(<App />,document.getElementById('app'));
export default App;
