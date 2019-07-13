import React from 'react';
import './App.css';
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import SideBar from './components/Sidebar';

class App extends React.Component{
  state= {
    feeds : "block"
  }
  homeButton = ()=>{
    this.setState({feeds:"block"});
  }
  feedsButton = ()=>{
    this.setState({feeds:"none"});

  }
 render(){
  return (
    <div className="App">
      <div><SideBar content ="Graph" homeButton = {this.homeButton} feedsButton = {this.feedsButton} /></div>
      <div><Profile/></div>
      <div style={{display : this.state.feeds}}><Feeds name = "Giriraj" content = "Feeds" feedsFunction = {this.feedsFunction} /></div>
      <div className="charts"></div>
    </div>
  );
}
}

export default App;
