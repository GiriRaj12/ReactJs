import React from 'react';
import './App.css';
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import SideBar from './components/Sidebar';

class App extends React.Component{
  
  state= {
    buttonClicked:"feeds"
  }

  homeButton = () => {
    this.setState({buttonClicked:"feeds"},()=>{
      this.child.changeAccordingly();
    });
  }

  chartsButton = () => {
    this.setState({buttonClicked:"charts"},()=>{
      this.child.changeAccordingly();
    });
  }
  settingsButton = ()=>{
    this.setState({buttonClicked:"settings"},()=>{
      this.child.changeAccordingly();
    });
  }

 render(){
  return (
    <div className="App">
      <div><SideBar homeButton = {this.homeButton} chartsButton = {this.chartsButton} settings = {this.settingsButton}/></div>
      <div><Profile/></div>
      <div className="feedsDiv"><Feeds onRef={ref=>(this.child = ref)} buttonClicked={this.state.buttonClicked}/></div>
    </div>
  );
}
}

export default App;
