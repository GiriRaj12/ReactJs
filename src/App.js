import React from 'react';
import './App.css';
import Charts from "./components/Charts";
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import SideBar from './components/Sidebar';

class App extends React.Component{
  state= {
    feeds : "block",
    charts : "block"
  }
  homeButton = () => {
    this.setState({feeds:"block"});
    this.setState({charts:"none"});
  }
  chartsButton = () => {
    console.log("Came into charts");
    this.setState({charts:"block"});
    this.setState({feeds:"none"});
  }
 render(){
  return (
    <div className="App">
      <div><SideBar content ="Graph" homeButton = {this.homeButton} chartsButton = {this.chartsButton}/></div>
      <div><Profile/></div>
      <div style={{display : this.state.feeds}}><Feeds name = "Giriraj" content = "Feeds" feedsFunction = {this.feedsFunction} /></div>
      <div className="charts" style={{display : this.state.charts}}><Charts/></div>
    </div>
  );
}
}

export default App;
