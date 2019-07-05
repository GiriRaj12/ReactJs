import React from "react";
import "./navBar.css";

class NavBar extends React.Component{
    render(){
    return(
        <div className="NavBar">
            <div className="logo">Logo</div>
            <div className="list">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
                </div>
        </div>
    );
}
}
export default NavBar;