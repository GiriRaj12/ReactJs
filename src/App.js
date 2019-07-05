import React from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import NavBar from "./components/navBar";

class App extends React.Component{
 render(){
  return (
    <div className="App">
            <div><NavBar/></div>
            <div><SideBar/></div>
    </div>
  );
}
}

export default App;
