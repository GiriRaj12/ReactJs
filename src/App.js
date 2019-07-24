import React from 'react';
import './App.css';
import Charts from './components/Charts';
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import SideBar from './components/Sidebar';

class App extends React.Component{
  
  state= {
    feeds : "block",
    charts : "none"
  }

  homeButton = () => {
    console.log("home button");
    this.setState({feeds : "block"});
    this.setState({charts:"none"});
  }

  chartsButton = () => {
    console.log("charts");
   this.setState({charts : "block"});
   this.setState({feeds: "none"});
  }

 render(){
  return (
    <div className="App">
      <div><SideBar homeButton = {this.homeButton} chartsButton = {this.chartsButton}/></div>
      <div><Profile/></div>
      <div className="feedsDiv" style={{display:this.state.feeds}}><Feeds name = "Giriraj" content = "Feeds"/></div>
      <div className="chartsDiv" style={{display:this.state.charts}}><Charts></Charts></div>
    </div>
  );
}
}

export default App;
