import React from 'react';
import "./CompCSS/sideBar.css";

class SideBar extends React.Component{
    homeButton = () => {
        console.log("class event triggered");
        document.getElementsByClassName("SideBar").display = "none";
    }
    render(){
        return (
            <div className="SideBar" display ="block">
                <ul className="sideList">
                    <li className="elements"><a id ="homeButton" onClick={this.homeButton}><i class="fas fa-home"></i></a> </li>
                    <li className="elements"><i class="fas fa-chart-line"></i></li>
                    <li className="elements"><i class="fas fa-sliders-h"></i></li>
                    <li className="elements"><i class="fas fa-clipboard-list"></i></li>
                </ul>
            </div>
        );
    }
}
export default SideBar;