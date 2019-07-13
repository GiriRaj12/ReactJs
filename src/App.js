import React from 'react';
import './App.css';
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import SideBar from './components/Sidebar';

class App extends React.Component{
 render(){
  return (
    <div className="App">
      <div><SideBar/></div>
      <div><Profile></Profile></div>
      <div><Feeds name = "Giriraj" content = "Feeds"/></div>
    </div>
  );
}
}

export default App;
