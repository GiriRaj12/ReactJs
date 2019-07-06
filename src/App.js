import React from 'react';
import './App.css';
import Profile from './components/Profile';
import SideBar from './components/Sidebar';

class App extends React.Component{
 render(){
  return (
    <div className="App">
            <div><Profile/></div>
            <div><SideBar/></div>
    </div>
  );
}
}

export default App;
