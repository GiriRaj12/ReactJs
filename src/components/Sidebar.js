import React from 'react';
import "./CompCSS/sideBar.css";

class SideBar extends React.Component{
    render(){
        return (
            <div className="SideBar">
                <ul className="sideList">
                    <li className="elements"><i class="fas fa-home" onClick={this.props.homeButton}></i></li>
                    <li className="elements"><i class="fas fa-chart-line" onClick={this.props.feedsButton}></i></li>
                    <li className="elements"><i class="fas fa-sliders-h"></i></li>
                    <li className="elements"><i class="fas fa-clipboard-list"></i></li>
                </ul>
            </div>
        );
    }
}
export default SideBar;